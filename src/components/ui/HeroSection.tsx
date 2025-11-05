'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Header from './Header';
import PopupForm from '@/components/ui/PopupForm';

export default function HeroSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/img__0x0.png')", backgroundSize: '100% auto' }}
    >
      {/* Верхняя строка */}
      <Header />

      {/* Соцсети сбоку */}

      <div className="absolute right-[25px] top-1/2 transform -translate-y-1/2 hidden md:flex flex-col items-center gap-[46px] bg-black/10 rounded-[36px] px-[15px] py-[25px] z-20">
        {[
          { text: 'YOUTUBE', href: 'https://www.youtube.com/channel/UCnVH4qbyZc8BMno0beXisOg' },
          { text: 'TELEGRAM', href: 'https://t.me/trust_callcenter' },
          { text: 'INSTAGRAM', href: 'https://www.instagram.com/trust.call_centr/' },
        ].map(({ text, href }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-krona-one font-normal font-montserrat leading-[15px] text-center text-global-10 hover:underline"
            style={{ writingMode: 'vertical-rl' }}
          >
            {text}
          </a>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h1 className="text-[70px] sm:text-[80px] md:text-[130px] lg:text-[239px] font-semibold font-inter text-center">
          {' '}
          Trust-call
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 items-center relative">
          {/* Левая часть */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8 md:space-y-12 font-unbounded">
            <p className="text-white  text-[25px] sm:text-[40px] md:text-[50px] font-medium  max-w-5xl uppercase">
              Аутсорсинговий
              <span className="text-[#005eff]"> кол-центр TRUST-CALL </span>
              для товарного бізнесу
            </p>
            <p className="text-[18px] sm:text-[24px] md:text-[30px] font-light leading-relaxed text-white max-w-5xl">
              Наша роль — бути турбо двигуном вашого бізнесу. Ми будуємо чіткий механізм вашого
              зростання.
              <br />
              Апсейл, кросс-сел, лояльність — налаштуємо наш "завод" під ваші цілі.
              {/* ваші перші 50 лідів <span className="font-medium">АБСОЛЮТНО БЕЗКОШТОВНО</span> */}
            </p>
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center pb-[80px] sm:pb-[200px]">
              <Button
                variant="secondary"
                size="lg"
                className="animate-pulse-scale text-[16px] sm:text-[20px] font-medium tracking-wider px-3 py-3"
                onClick={() => setIsPopupOpen(true)}
              >
                Отримати консультацію
              </Button>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  {['1', '2', '3', '4'].map((n) => (
                    <Image
                      key={n}
                      src={`/images/img_ellipse_${n}_54x54.png`}
                      alt={`client-${n}`}
                      width={500}
                      height={500}
                      className="w-[40px] sm:w-[54px] h-[auto] rounded-full border-2 border-white"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Правая часть */}
          <div className="lg:col-span-4">
            <Image
              src="/images/crop.svg"
              alt="Trust-call platform"
              width={566}
              height={566}
              className="w-full max-w-[170px] sm:max-w-[266px] h-auto mx-auto top-[350px] sm:top-0 right-0 absolute"
            />
            <Image
              src="/images/line.svg"
              alt="Trust-call platform"
              width={566}
              height={566}
              className="w-full max-w-[200px] sm:max-w-[266px] h-auto mx-auto -top-[100px] right-[20%] absolute opacity-5 hidden sm:block"
            />
            <Image
              src="/images/blackBg.png"
              alt="Trust-call platform"
              width={566}
              height={566}
              className="w-full max-w-[200px] sm:max-w-[266px] h-auto mx-auto top-[60%] sm:top-[50%] right-0 absolute opacity-70 -z-10 sm:z-0"
            />
          </div>
        </div>
      </div>

      {/* Логотипы партнёров */}
      <div className="relative bg-white z-10 mx-auto px-4 sm:px-6 lg:px-8 py-5 mt-5 overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 md:gap-20 whitespace-nowrap">
          {[
            '/images/partner.svg',
            '/images/partner2.svg',
            '/images/partner3.svg',
            '/images/partner4.svg',
            '/images/partner5.svg',
            '/images/partner6.svg',
          ].map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`partner-${idx}`}
              width={200}
              height={200}
              className="w-full max-w-[100px] sm:max-w-[166px] h-auto"
            />
          ))}

          {/* дублируем второй раз для бесконечного эффекта */}
          {[
            '/images/partner.svg',
            '/images/partner2.svg',
            '/images/partner3.svg',
            '/images/partner4.svg',
            '/images/partner5.svg',
            '/images/partner6.svg',
          ].map((src, idx) => (
            <Image
              key={`dup-${idx}`}
              src={src}
              alt={`partner-dup-${idx}`}
              width={200}
              height={200}
              className="w-full max-w-[100px] sm:max-w-[166px] h-auto"
            />
          ))}
        </div>
      </div>
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}
