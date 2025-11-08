'use client';
import { useEffect, useRef, useState } from 'react';

export default function WhyJoinSection() {
  const [counts, setCounts] = useState([0, 0, 0]);
  const countersRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      { threshold: 0.5 }
    );

    if (countersRef.current) observer.observe(countersRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const targets = [120, 45, 300]; // заменишь на реальные значения
    const duration = 2000;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setCounts(targets.map((t) => Math.floor(t * progress)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [visible]);

  return (
    <section className="bg-[#f9f9f9] px-6 sm:px-10 lg:px-24 xl:px-40 py-20 text-center flex flex-col items-center">
      {/* Заголовок */}
      <h2
        className="text-[28px] sm:text-[32px] lg:text-[36px] text-[#2E334E] font-normal mb-16"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        Why Join CLA Global?
      </h2>

      {/* Три карточки */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 max-w-6xl">
        {[
          {
            title: 'A Platform For Growth',
            text: 'Built for firms that want to do more and move faster, our flexible network supports scalability while offering members the chance to shape our future.',
            color: 'bg-[#8ED7DB]',
          },
          {
            title: 'Shared Ambition',
            text: 'Our members all share the entrepreneurial spirit and international ambitions of their privately owned, fast-growing, mid-market clients.',
            color: 'bg-[#4C68B1]',
          },
          {
            title: 'Accelerated Change',
            text: 'We value a growth mindset. Together, we pool ideas, investments, and technology to evolve and grow.',
            color: 'bg-[#D0868B]',
          },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className={`h-[4px] w-20 ${item.color} mb-5`} />
            <h3
              className="text-[22px] sm:text-[24px] font-normal text-[#2E334E] mb-4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {item.title}
            </h3>
            <p
              className="text-[16px] sm:text-[18px] text-[black] leading-relaxed"
              style={{ fontFamily: 'MuseoSans, sans-serif' }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Кнопка */}
      <button className="bg-[#2E334E] text-white text-[18px] font-semibold px-8 py-3 rounded-md hover:bg-[#2b314a] transition-all">
        Explore Member Benefits
      </button>

      {/* Счётчики */}
      <div
        ref={countersRef}
        className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-24 max-w-4xl w-full"
      >
        {[
          { label: 'Countries', value: counts[0] },
          { label: 'Member Firms', value: counts[1] },
          { label: 'Professionals', value: counts[2] },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className="text-[42px] sm:text-[52px] font-semibold text-[#2E334E]"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {item.value}+
            </div>
            <div
              className="text-[16px] sm:text-[18px] text-[#2E334E]"
              style={{ fontFamily: 'MuseoSans, sans-serif' }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Видео + текст */}
      <div className="mt-28 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-6xl w-full">
        <div className="w-full lg:w-1/2">
          <video className="w-full rounded-xl shadow-md" controls poster="/video-placeholder.jpg">
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="w-full lg:w-1/2 text-left">
          <h3
            className="text-[26px] sm:text-[30px] font-normal text-[#2E334E] mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            About Our Network
          </h3>
          <p
            className="text-[16px] sm:text-[18px] text-[#2E334E] leading-relaxed"
            style={{ fontFamily: 'MuseoSans, sans-serif' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae felis ut turpis
            feugiat blandit. In hac habitasse platea dictumst. Nullam lacinia, sapien ac dapibus
            mollis, risus metus suscipit neque, vitae egestas libero velit sit amet nulla.
          </p>
        </div>
      </div>
    </section>
  );
}
