import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#E9F6F6]">
      {/* Верхняя часть */}
      <div className="text-center py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2E334E] mb-6">
          Become a Member of CLA Group
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
          Join our professional services network designed to help realize the ambitions of privately
          owned, fast-growing, mid-market clients with cross-border needs. It's an opportunity for
          you to increase collaboration and gain exposure to new skills and capabilities, bring
          career opportunities and build new relationships.
        </p>

        <button
          onClick={() => alert('Open contact form')}
          className="mt-8 bg-[#2E334E] text-white text-lg font-medium px-8 py-3 rounded-md hover:bg-[#3E4258] transition"
        >
          Join GLA Group
        </button>
      </div>

      {/* Наклонная граница */}
      {/* <div className="w-full h-20 bg-[#2E334E] rotate-[2deg] origin-top"></div> */}

      {/* Нижняя часть футера */}
      <div className="bg-[#2E334E] text-white px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Логотип */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Image
              src="/images/logo_white.webp"
              alt="GLA Group"
              width={120} // можно менять — отвечает за ширину
              height={0} // игнорируется, потому что objectFit сохраняет пропорции
              className="h-auto w-32 object-contain"
            />
          </div>
        </div>

        {/* Ссылки */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">
            Legal
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition">
            Connect
          </a>
        </div>
      </div>
    </footer>
  );
}
