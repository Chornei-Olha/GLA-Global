<?php
/**
 * Trust-Call.com — форма заявки в Telegram
 * Автор: Impulse Studio
 */
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    $data = $_POST;
}

$name        = isset($data['name']) ? trim($data['name']) : '';
$phone       = isset($data['phone']) ? trim($data['phone']) : '';
$contact_way = isset($data['contact_way']) ? trim($data['contact_way']) : '';
$tariff      = isset($data['tariff']) ? trim($data['tariff']) : '';
$message     = isset($data['message']) ? trim($data['message']) : '';

if (empty($name) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['error' => 'Ім’я та телефон є обов’язковими']);
    exit;
}

$BOT_TOKEN = '6749538664:AAGZ4A1mhwRPDMLx9F26g5Xf0CrH6XLb6B0';
$CHAT_ID   = '-1002402429379';

$text  = "📩 <b>Нова заявка з сайту Trust-Call</b>\n\n";
$text .= "👤 <b>Ім’я:</b> " . htmlspecialchars($name) . "\n";
$text .= "📞 <b>Телефон:</b> " . htmlspecialchars($phone) . "\n";
$text .= "💬 <b>Як зручно зв’язатись:</b> " . ($contact_way ?: '-') . "\n";
$text .= "💼 <b>Обраний тариф:</b> " . ($tariff ?: '-') . "\n";
if (!empty($message)) {
    $text .= "📝 <b>Повідомлення:</b> " . htmlspecialchars($message) . "\n";
}
$text .= "\n🔗 trust-call.com";

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

$response  = curl_exec($ch);
$httpCode  = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$respData = json_decode($response, true);

if ($httpCode !== 200 || empty($respData['ok'])) {
    http_response_code(502);
    echo json_encode([
        'error' => 'Помилка при відправленні у Telegram',
        'details' => $respData
    ]);
    exit;
}

echo json_encode(['ok' => true, 'message' => 'Заявка успішно відправлена!']);
?>