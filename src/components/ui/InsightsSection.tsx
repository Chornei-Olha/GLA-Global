'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

export default function InsightsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const swiperRef = useRef<any>(null);

  const cards = [
    {
      date: '18 February, 2025',
      title: 'Case decided on European EV-charging supply chain rules',
      img: '/images/insight1.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod lorem ut massa fermentum.',
    },
    {
      date: '17 March, 2025',
      title: 'Transfer Pricing: How Multinational Companies Can Use it to Manage Tariffs',
      img: '/images/insight2.jpg',
      text: 'Suspendisse potenti. Nulla facilisi. Sed id urna lorem. Cras tincidunt urna vitae arcu posuere, eget efficitur velit suscipit.',
    },
    {
      date: '28 May, 2025',
      title: 'Investment Strategies for Market Volatility from Tariffs',
      img: '/images/insight3.jpg',
      text: 'Vivamus non felis in urna elementum malesuada. Maecenas ac ligula in quam gravida ultricies vel nec libero.',
    },
    {
      date: '28 May, 2025',
      title: 'Investment Strategies for Market Volatility from Tariffs',
      img: '/images/insight3.jpg',
      text: 'Vivamus non felis in urna elementum malesuada. Maecenas ac ligula in quam gravida ultricies vel nec libero.',
    },
    {
      date: '28 May, 2025',
      title: 'Investment Strategies for Market Volatility from Tariffs',
      img: '/images/insight3.jpg',
      text: 'Vivamus non felis in urna elementum malesuada. Maecenas ac ligula in quam gravida ultricies vel nec libero.',
    },
  ];

  return (
    <section className="bg-white px-6 sm:px-10 lg:px-20 xl:px-40 py-20 text-center">
      {/* Заголовок */}
      <h2
        className="text-[28px] sm:text-[32px] lg:text-[36px] text-[#2E334E] font-normal mb-6"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        Insights and Client Case Studies
      </h2>
      <p
        className="text-[16px] sm:text-[18px] text-[black] max-w-3xl mx-auto mb-12 leading-relaxed"
        style={{ fontFamily: 'MuseoSans, sans-serif' }}
      >
        Explore our insights and case studies to see how CLA Global member firms help businesses and
        individuals navigate financial challenges, organise operations, and achieve their strategic
        goals.
      </p>

      {/* Контейнер для стрелок */}
      <div className="flex justify-end items-center mb-6 gap-3">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>
      </div>

      {/* Слайдер */}
      <div className="relative w-full overflow-hidden">
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            1024: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3 },
          }}
          className="!overflow-visible"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-[#f7f7f7] text-left rounded-lg overflow-hidden cursor-pointer relative group h-[480px] flex flex-col justify-between"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {/* Верхняя часть (текст + дата) */}
                <div className="p-6 flex flex-col justify-start">
                  <p
                    className="text-[15px] text-[black] mb-2"
                    style={{ fontFamily: 'MuseoSans, sans-serif' }}
                  >
                    {card.date}
                  </p>
                  <h3
                    className="text-[20px] sm:text-[22px] font-normal text-[#2E334E] leading-snug"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Фото + Оверлей */}
                <div className="relative h-[250px]">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                  <div
                    className={`absolute inset-0 bg-black/70 text-white flex items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      activeIndex === index ? 'opacity-100' : ''
                    }`}
                    style={{ fontFamily: 'MuseoSans, sans-serif' }}
                  >
                    <p className="text-[15px] sm:text-[16px] leading-relaxed">{card.text}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
