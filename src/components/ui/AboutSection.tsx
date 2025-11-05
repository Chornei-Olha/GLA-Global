'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import PopupForm from '@/components/ui/PopupForm';

export default function AboutSection() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  // 👉 Запуск анимации чисел при попадании секции в зону видимости
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (entries[0].isIntersecting) {
  //         setStartCount(true);
  //         observer.disconnect(); // запускаем только 1 раз
  //       }
  //     },
  //     { threshold: 0.4 }
  //   );

  //   if (sectionRef.current) observer.observe(sectionRef.current);
  //   return () => observer.disconnect();
  // }, []);

  // 👉 запуск анимации при каждом появлении секции
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true); // запускаем анимацию
        } else {
          setStartCount(false); // сбрасываем при уходе за экран
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 👉 Блокируем прокрутку при открытом попапе
  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPopupOpen]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full bg-black text-white py-14 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Левая часть — текст + логотип */}
        <div className="w-[90vw] sm:w-[60vw] bg-[url('/images/new_bg.webp')] bg-[length:100%_100%] bg-no-repeat bg-center rounded-3xl flex flex-col justify-between p-3 sm:p-2">
          <div className="flex justify-between mb-8">
            <div className="text-[18px] sm:text-[24px] md:text-[30px] font-medium font-unbounded text-white uppercase tracking-wider">
              <p> TRUST-CALL</p>
            </div>
            <div className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] [mask-image:radial-gradient(circle,white_70%,transparent_100%)] overflow-hidden">
              <Image
                src="/images/logo1.webp"
                alt="Logo"
                width={130}
                height={130}
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="text-sm sm:text-base text-gray-800 leading-relaxed space-y-4 text-inter p-5 sm:p-8">
            <p>
              Trust-call професійний кол-центр, що спеціалізується на підтримці онлайн-бізнесу в
              Україні.
            </p>
            <p>
              Ми — не просто "вушка" для дзвінків, а ваша мобільна та ефективна команда продажів,
              яка закриває бізнес-потреби.
            </p>
            <p>
              Наша мета — зробити ваш бізнес більш прибутковим завдяки якості обслуговування
              клієнтів, швидкому продзвону та високому рівню допродажів.
            </p>
            <p>Trust-call будує міцні та довгострокові відносини з нашими партнерами!</p>
          </div>

          <div className="mt-7 sm:ml-auto lg:mr-7">
            <button
              className="animate-pulse-scale bg-[#1663d3] text-[12px] font-medium font-unbounded uppercase tracking-wider px-3 md:px-10 py-5 sm:py-4 w-[85vw] sm:w-[auto] rounded-full"
              onClick={() => setIsPopupOpen(true)}
            >
              отримати консультацію
            </button>
          </div>
        </div>

        {/* Правая часть — анимированные цифры */}
        <div className="flex-1 flex flex-col justify-center gap-10 text-center lg:text-left">
          <AnimatedCounter
            start={startCount}
            target={26000}
            suffix="+"
            label="дзвінків"
            sub="Щодня*"
          />
          <AnimatedCounter
            start={startCount}
            target={81}
            suffix="%"
            label="замовлень"
            sub="З допродажем*"
          />
          <AnimatedCounter start={startCount} target={86} suffix="%" sub="Апрув замовлень*" />
        </div>

        <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      </div>
    </section>
  );
}

/* 🔢 Компонент счётчика */
interface AnimatedCounterProps {
  start: boolean;
  target: number;
  suffix?: string;
  label?: string; // 👉 вторая строка (например, "замовлень")
  sub?: string; // 👉 красная фраза
}

function AnimatedCounter({ start, target, suffix = '', label, sub }: AnimatedCounterProps) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const duration = 1500;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col items-center lg:items-start text-center lg:text-left"
    >
      {/* 🔢 число + суффикс */}
      <h3 className="text-4xl sm:text-5xl font-extrabold font-unbounded tabular-nums">
        {count.toLocaleString('uk-UA')}
        {suffix}
      </h3>

      {/* ⚪️ подпись */}
      {label && (
        <p className="text-white text-lg sm:text-xl font-extrabold font-unbounded mt-1">{label}</p>
      )}

      {/* синяя строка */}
      {sub && (
        <p className="text-[#1663d3] text-lg sm:text-xl mt-1 font-medium font-unbounded">{sub}</p>
      )}
    </motion.div>
  );
}
