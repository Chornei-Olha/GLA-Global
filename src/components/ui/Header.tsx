'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [collabOpen, setCollabOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // хелпер для стилей активной ссылки
  // const linkClass = (href: string) =>
  //   `px-3 py-1 rounded-full transition-colors ${
  //     pathname === href ? 'bg-[#fec104] text-black' : 'hover:text-black'
  //   }`;

  // useEffect(() => {
  //   document.body.style.overflow = isOpen ? 'hidden' : '';
  // }, [isOpen]);

  return (
    <header className="border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-5">
        {/* Лого */}
        <div className="flex items-center">
          <Link href="/" className="block">
            <Image
              src="/images/logo_blue.webp"
              alt="Logo"
              width={133}
              height={55}
              priority
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Десктоп меню по центру */}
        <nav className="hidden md:flex items-center space-x-8 text-lg font-medium font-montserrat text-gray-700 mx-auto relative">
          <Link href="/" className="hover:text-[#fec104]">
            Головна
          </Link>

          {/* Продукція */}
          <div
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-[#fec104]">
              <span>Послуги</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${productOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>

            <AnimatePresence>
              {productOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50 overflow-hidden"
                >
                  <Link href="/legalServices" className="block px-4 py-2 hover:bg-yellow-100">
                    Юридичні
                  </Link>
                  <Link href="/marrone" className="block px-4 py-2 hover:bg-yellow-100">
                    Аудиторські
                  </Link>
                  <Link href="/rossa" className="block px-4 py-2 hover:bg-yellow-100">
                    Аутсорсинг
                  </Link>
                  <Link href="/oro" className="block px-4 py-2 hover:bg-yellow-100">
                    Оцінка
                  </Link>
                  <Link href="/duct" className="block px-4 py-2 hover:bg-yellow-100">
                    Бухгалтерські
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="#footer">Контакти</Link>
        </nav>

        {/* Правая кнопка — обратная связь */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => console.log('Открыть форму обратной связи')}
            className="bg-[#fec104] text-black font-semibold px-6 py-2 rounded-full hover:bg-[#fddc6e] transition"
          >
            Зв’язатися з нами
          </button>
        </div>

        {/* Мобильная кнопка (бургер) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t h-screen">
          <div className="flex flex-col space-y-4 items-center px-4 py-3">
            <Link
              href="/"
              className="flex justify-center items-center w-full hover:text-[#fec104]"
              onClick={() => setIsOpen(false)}
            >
              Головна
            </Link>

            <div>
              <button
                className="w-full flex justify-left items-center gap-2 hover:bg-gray-100 rounded"
                onClick={() => setProductOpen(!productOpen)}
              >
                <span>Послуги</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${productOpen ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>
              {productOpen && (
                <div className="flex flex-col pl-4 mt-3 space-y-3">
                  <Link href="/legalServices" onClick={() => setIsOpen(false)}>
                    Юридичні
                  </Link>
                  <Link href="/marrone" onClick={() => setIsOpen(false)}>
                    Аудиторські
                  </Link>
                  <Link href="/rossa" onClick={() => setIsOpen(false)}>
                    Аутсорсинг
                  </Link>
                  <Link href="/oro" onClick={() => setIsOpen(false)}>
                    Оцінка
                  </Link>
                  <Link href="/duct" onClick={() => setIsOpen(false)}>
                    Бухгалтерські
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="#footer"
              className="flex justify-center items-center w-full"
              onClick={() => setIsOpen(false)}
            >
              Контакти
            </Link>

            {/* Кнопка обратной связи внизу (мобильная) */}
            <button
              onClick={() => console.log('Открыть форму обратной связи')}
              className="mt-6 bg-[#fec104] text-black font-semibold rounded-md px-6 py-2 hover:bg-[#fddc6e] transition"
            >
              Зв’язатися з нами
            </button>

            {/* Соцсети */}
            <div className="mt-auto border-t pt-6 flex justify-center gap-6">
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/youtube.png" alt="Youtube" width={24} height={24} />
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
