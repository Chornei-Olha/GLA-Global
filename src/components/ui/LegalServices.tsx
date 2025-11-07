// 'use client';

// import { motion } from 'framer-motion';

// export default function LegalServices() {
//   return (
//     <main className="text-gray-800">
//       {/* HERO SECTION */}
//       <section
//         className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>
//         <div className="relative z-10 max-w-3xl px-6">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-6xl font-bold text-white mb-6"
//           >
//             Юридичні послуги для бізнесу та приватних клієнтів
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-lg md:text-xl text-gray-200 mb-8"
//           >
//             Консультування, захист, супровід. Ми — ваш надійний партнер у правовій сфері.
//           </motion.p>
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.05 }}
//             className="bg-blue-700 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-800 transition"
//           >
//             Отримати консультацію
//           </motion.a>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section id="services" className="py-20 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наші послуги</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'Податкова перевірка',
//                 text: 'Супровід, підготовка документів, оскарження результатів перевірки.',
//               },
//               {
//                 title: 'Податкове консультування',
//                 text: 'Аналіз системи оподаткування, планування та оптимізація.',
//               },
//               {
//                 title: 'ТЦУ (трансфертне ціноутворення)',
//                 text: 'Підготовка звітів, аналіз, консультації у сфері ТЦУ.',
//               },
//               {
//                 title: 'Судова практика',
//                 text: 'Захист інтересів у судах усіх інстанцій, договірні та корпоративні спори.',
//               },
//               {
//                 title: 'Інтелектуальна власність',
//                 text: 'Реєстрація ТМ і патентів, ліцензування, авторське право.',
//               },
//               {
//                 title: 'Приватні клієнти',
//                 text: 'Інвестиції, міграційні питання, управління капіталом.',
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -5 }}
//                 className="bg-white p-8 shadow-md rounded-2xl transition"
//               >
//                 <h3 className="text-xl font-semibold mb-3 text-blue-800">{item.title}</h3>
//                 <p className="text-gray-600">{item.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section id="about" className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Про нас</h2>
//           <p className="text-lg text-gray-600 leading-relaxed">
//             Ми — команда професійних юристів із багаторічним досвідом у сфері податкового,
//             корпоративного та цивільного права. Наша мета — надати бізнесу та приватним клієнтам
//             надійну юридичну підтримку на кожному етапі.
//           </p>
//         </div>
//       </section>

//       {/* ADVANTAGES */}
//       <section id="advantages" className="py-20 bg-blue-800 text-white">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Чому обирають нас</h2>
//           <div className="grid md:grid-cols-3 gap-8 text-center">
//             {[
//               {
//                 title: '10+ років досвіду',
//                 text: 'Ми розуміємо потреби бізнесу та пропонуємо дієві рішення.',
//               },
//               {
//                 title: 'Комплексний підхід',
//                 text: 'Від аналізу документів до судового захисту — повний юридичний супровід.',
//               },
//               {
//                 title: 'Індивідуальні рішення',
//                 text: 'Підходимо до кожного клієнта з урахуванням його особливостей.',
//               },
//             ].map((adv, i) => (
//               <div key={i} className="p-6 bg-blue-700/40 rounded-2xl">
//                 <h3 className="text-xl font-semibold mb-2">{adv.title}</h3>
//                 <p className="text-gray-200">{adv.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section id="contact" className="py-20 bg-gray-50">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Зв’яжіться з нами</h2>
//           <p className="text-gray-600 mb-8">
//             Ми відповімо на ваш запит і допоможемо знайти найкраще рішення.
//           </p>
//           <form className="grid gap-4 max-w-xl mx-auto">
//             <input
//               type="text"
//               placeholder="Ваше ім’я"
//               className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
//             />
//             <textarea
//               placeholder="Ваше повідомлення"
//               rows={4}
//               className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
//             />
//             <button
//               type="submit"
//               className="bg-blue-700 text-white font-medium py-3 rounded-lg hover:bg-blue-800 transition"
//             >
//               Надіслати
//             </button>
//           </form>
//         </div>
//       </section>
//     </main>
//   );
// }

'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 'tax-consulting',
    title: 'Податкове консультування',
    image:
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80',
    details: `Податкове консультування
Аналіз існуючої системи оподаткування;
Консультування з питань покращення системи оподаткування бізнесу та податкове планування;
Розробка стратегій оподаткування;
Надання консультацій з питань податкового права;
Підготовка висновків з питань оподаткування.`,
  },
  {
    id: 'tcu',
    title: 'ТЦУ (трансфертне ціноутворення)',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80',
    details: `ТЦУ
Аналіз необхідності підготовки ДТЦ та Звіту про КО;
Підготовка ДТЦ;
Підготовка та подання Звіту про КО та звіту про участь у МГК;
Надання консультацій у сфері ТЦУ.`,
  },
  {
    id: 'litigation',
    title: 'Судова практика',
    image:
      'https://images.unsplash.com/photo-1519669556875-8a5f2b0c7a7d?auto=format&fit=crop&w=1400&q=80',
    details: `Судова практика
Банківські та фінансові спори:
- реструктуризація боргів;
- оскарження рішень фін. моніторингу банків;
- розблокування рахунків;
- стягнення/зменшення пені та штрафних санкцій за відсотками;
Договірні та корпоративні спори;
- стягнення кредиторської заборгованості за договорами;
- виконання судових рішень:
- стягнення майна;
-вирішення інших спорів, що випливають з договірних відносин;
Публічно-правові спори:
- оскарження дій та бездіяльності державних органів та органів місцевого самоврядування;
Сімейні спори:
- розлучення;
- Поділ майна;
- Стягнення аліментів;
- Визначення місцяпроживання дітей;

Судові спори (копоративні)
Спори у сфері державних закупівель:
- оскарження результатів публічних торгів (тендерів);
Трудові спори
- вирішення спорів між працівником та роботодавцем;
- поновлення на роботі та стягнення невиплаченою заробітної плати;
Спори у справах про банкрутство:
- визнання  юр . особи банкрутом;
- банкрутство  фіз . особи та списання боргів;
Спори у справах про покладення субсидіарної відповідальності:
- покладення фінансової відповідальності на колишніх посадових осіб та власників  юр . особи за доведення такої особи до банкрутства;`,
  },
  {
    id: 'private',
    title: 'Приватні клієнти',
    image:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1400&q=80',
    details: `Приватні клієнти
Структурування   активів  та  управління   капіталів   
Інвестиції   
Філантропія  та  благодійність   
Імміграція  та  податкове  резиденство  
Вирішення   спорів   
Декларування`,
  },
  {
    id: 'ip',
    title: 'Інтелектуальна власність',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80',
    details: `Інтелектуальна власність
Ліцензування   
Реєстрація  ТМ,  патентів   
Авторське  право  
Консультування  з  питань   інтелектуальної   власності   
Захист   від   недобросовісної   конкуренції   
Вирішення   спорів`,
  },
];

export default function LegalServices() {
  const [selected, setSelected] = useState<string | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  function toggleService(id: string) {
    setSelected((prev) => (prev === id ? null : id));
    // after clicking different card, selected becomes new id (switching)
  }

  const selectedService = services.find((s) => s.id === selected);

  // 🔽 Автоматичний скрол, коли вибирається нова послуга
  useEffect(() => {
    if (selected && detailsRef.current) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300); // невелика затримка, щоб дочекатися анімації
    }
  }, [selected]);

  return (
    <main className="text-gray-900">
      {/* HERO */}
      <section
        className="relative h-[70vh] md:h-[80vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Юридичні послуги для бізнесу та приватних клієнтів
          </h1>
          <p className="mt-6 text-gray-200 max-w-3xl">
            Консультування, захист, супровід. Ми — ваш надійний партнер у правовій сфері.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition"
            >
              Отримати консультацію
            </a>
            <a
              href="#services"
              className="inline-block text-white/90 px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition text-center"
            >
              Наші послуги
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Наші послуги</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <motion.button
                key={s.id}
                onClick={() => toggleService(s.id)}
                whileHover={{ translateY: -4 }}
                className={`text-left p-6 rounded-2xl shadow-md bg-white border transition focus:outline-none ${
                  selected === s.id ? 'ring-2 ring-blue-600 scale-[1.01]' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800">{s.title}</h3>
                    <p className="mt-2 text-gray-600 line-clamp-3">
                      {/* short preview - first 120 chars */}
                      {s.details.replace(/\s+/g, ' ').slice(0, 150)}...
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* DETAILED SECTION (appears below cards) */}
          <div ref={detailsRef} className="mt-8 scroll-mt-24">
            <AnimatePresence initial={false}>
              {selectedService && (
                <motion.section
                  key={selectedService.id}
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ type: 'spring', stiffness: 160, damping: 20 }}
                  className="overflow-hidden"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 flex-shrink-0">
                      <img
                        src={selectedService.image}
                        alt={selectedService.title}
                        className="w-full h-48 md:h-full object-cover rounded-lg"
                      />
                    </div>

                    <div className="md:w-2/3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{selectedService.title}</h3>
                        </div>

                        <div className="ml-auto">
                          <button
                            onClick={() => setSelected(null)}
                            aria-label="Close details"
                            className="text-gray-500 hover:text-gray-700 bg-gray-100 p-2 rounded-md"
                          >
                            Закрити
                          </button>
                        </div>
                      </div>

                      <div className="prose prose-sm max-w-none text-gray-700">
                        {selectedService.details.split('\n').map((line, idx) => {
                          // render blank lines as spacing, else paragraph
                          const trimmed = line.trim();
                          if (!trimmed) return <div key={idx} className="my-2" />;
                          return (
                            <p key={idx} className="mb-2">
                              {trimmed}
                            </p>
                          );
                        })}
                      </div>

                      <div className="mt-6 flex gap-3">
                        <a
                          href="#contact"
                          className="inline-block bg-blue-700 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-800 transition"
                        >
                          Зв’язатися з нами
                        </a>
                        <button
                          onClick={() => setSelected(null)}
                          className="inline-block border border-gray-300 px-5 py-2 rounded-md hover:bg-gray-50 transition"
                        >
                          Закрити
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Про нас</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ми — команда професійних юристів із багаторічним досвідом у сфері податкового,
            корпоративного та цивільного права. Наша мета — надати бізнесу та приватним клієнтам
            надійну юридичну підтримку на кожному етапі.
          </p>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-16 md:py-20 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Чому обирають нас</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-blue-700/40 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">10+ років досвіду</h3>
              <p className="text-gray-200">
                Ми розуміємо потреби бізнесу та пропонуємо дієві рішення.
              </p>
            </div>
            <div className="p-6 bg-blue-700/40 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Комплексний підхід</h3>
              <p className="text-gray-200">
                Від аналізу документів до судового захисту — повний юридичний супровід.
              </p>
            </div>
            <div className="p-6 bg-blue-700/40 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Індивідуальні рішення</h3>
              <p className="text-gray-200">
                Підходимо до кожного клієнта з урахуванням його особливостей.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Зв’яжіться з нами</h2>
          <p className="text-gray-600 mb-8">
            Ми відповімо на ваш запит і допоможемо знайти найкраще рішення.
          </p>

          <form
            className="grid gap-4 max-w-xl mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              // тут можна додати обробку форми: API-запит або інтеграція з сервісом
              alert('Дякуємо! Ваше повідомлення надіслано (демо).');
            }}
          >
            <input
              type="text"
              placeholder="Ваше ім’я"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <textarea
              placeholder="Ваше повідомлення"
              rows={4}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <button
              type="submit"
              className="bg-blue-700 text-white font-medium py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Надіслати
            </button>
          </form>

          <div className="mt-8 text-sm text-gray-600">
            <p>Телефон: +38 (0XX) XXX-XX-XX</p>
            <p>Електронна пошта: info@example.com</p>
            <p className="mt-2">Адреса: м. Київ, Україна</p>
          </div>
        </div>
      </section>
    </main>
  );
}
