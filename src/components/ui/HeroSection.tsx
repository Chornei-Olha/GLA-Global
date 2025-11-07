'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from './Header';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      {/* Фоновое видео */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/video3.mp4" type="video/mp4" />
        Ваш браузер не підтримує відео.
      </video>

      {/* Полупрозрачный оверлей */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}
    </section>
  );
}
