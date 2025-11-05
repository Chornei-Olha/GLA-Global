<?php
header('Content-Type: application/json; charset=utf-8');

// Разрешаем CORS, если нужно
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Читаем тело запроса
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Если данные пришли как обычная форма (form-data)
if (!$data) {
    $data = $_POST;
}

$name = isset($data['name']) ? trim($data['name']) : '';
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

// Проверяем обязательные поля
if (empty($phone) && empty($email)) {
    http_response_code(400);
    echo json_encode(['error' => 'Phone or email required']);
    exit;
}

// ⚠️ Укажи свои переменные
$BOT_TOKEN = getenv('BOT_TOKEN') ?: 'ТВОЙ_БОТ_ТОКЕН';
$CHAT_ID   = getenv('CHAT_ID') ?: 'ТВОЙ_CHAT_ID';

if (!$BOT_TOKEN || !$CHAT_ID) {
    error_log('❌ Missing BOT_TOKEN or CHAT_ID');
    http_response_code(500);
    echo json_encode(['error' => 'BOT_TOKEN and CHAT_ID must be set']);
    exit;
}

$text = "🔥 <b>Нова заявка з сайту</b>\n"
      . "👤 <b>Ім’я:</b> " . ($name ?: '-') . "\n"
      . "📞 <b>Телефон:</b> " . ($phone ?: '-') . "\n"
      . "✉️ <b>Email:</b> " . ($email ?: '-') . "\n"
      . "💬 <b>Повідомлення:</b> " . ($message ?: '-') . "\n"
      . "🔗 trust-call.com";

// Отправка запроса в Telegram
$url = "https://api.telegram.org/bot$BOT_TOKEN/sendMessage";
$postData = [
    'chat_id' => $CHAT_ID,
    'text' => $text,
    'parse_mode' => 'HTML',
    'disable_web_page_preview' => true
];

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
    CURLOPT_POSTFIELDS => json_encode($postData)
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Обработка ответа
$respData = json_decode($response, true);

if ($httpCode !== 200 || empty($respData['ok'])) {
    http_response_code(502);
    echo json_encode([
        'error' => 'Telegram send error',
        'details' => $respData
    ]);
    exit;
}

echo json_encode(['ok' => true]);
