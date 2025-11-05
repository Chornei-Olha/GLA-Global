'use client';
import React, { useState, useEffect } from 'react';
import Footer from '../components/ui/Footer';
import FinalCTA from '../components/ui/FinalCTA';
import QualityAssessment from '../components/ui/QualityAssessment';
import ClientReviews from '../components/ui/ClientReviews';
import CaseStudiesSection from '../components/ui/CaseStudiesSection';
import { CaseStudy } from '../components/ui/CaseStudyCard';
import PricingPlans from '../components/ui/PricingPlans';
import BenefitsSection from '../components/ui/BenefitsSection';
import ProfitForm from '../components/ui/ProfitForm';
import WhyTrustCall from '../components/ui/WhyTrustCall';
import HowToStartSection from '../components/ui/HowToStartSection';
import HeroSection from '../components/ui/HeroSection';
import ReviewsCarousel from '../components/ui/ReviewsCarousel';
import AboutSection from '../components/ui/AboutSection';

interface PricingPlan {
  id: string;
  name: string;
  percentage: string;
  features: string[];
  price: string;
  buttonText: string;
  isPopular?: boolean;
}

interface Testimonial {
  id: string;
  name: string;
  niche: string;
  leadCount: string;
  rating: number;
  avatar: string;
  socialHandle: string;
  videoUrl: string;
}

const TrustCallLandingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('cooperation');
  const [formData, setFormData] = useState({
    name: 'Імя',
    phone: '(99) 999-99-99',
    contactMethod: 'call',
  });
  const [currentTime, setCurrentTime] = useState<string>('');
  useEffect(() => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString());
  }, []);
  const pricingPlans: PricingPlan[] = [
    {
      id: 'start',
      name: 'Start',
      percentage: '31%',
      features: [
        'Кількість лідів на день: 30–50',
        'Персональний менеджер: 24/7',
        'Унікальні скрипти продажу під ваші оффери',
        'Дожим замовлення до викупу: безкоштовно',
        'Підтверджене замовлення: 22 грн',
        'Допродаж (Upsell, Cross-sell): 25%',
      ],
      price: 'Підключити послугу',
      buttonText: 'Підключити послугу',
    },
    {
      id: 'company',
      name: 'Company',
      percentage: '62%',
      features: [
        'Кількість лідів на день: 50–100',
        'Персональний менеджер: 24/7',
        'Унікальні скрипти продажу під ваші оффери',
        'Дожим замовлення до викупу: безкоштовно',
        'Підтверджене замовлення: 20 грн',
        'Допродаж (Upsell, Cross-sell): 22%',
      ],
      price: 'Підключити послугу',
      buttonText: 'Підключити послугу',
      isPopular: true,
    },
    {
      id: 'business',
      name: 'Business',
      percentage: '10%',
      features: [
        'Кількість лідів на день: 100+',
        'Персональний менеджер: 24/7',
        'Унікальні скрипти продажу під ваші оффери',
        'Дожим замовлення до викупу: безкоштовно',
        'Підтверджене замовлення: 18 грн',
        'Допродаж (Upsell, Cross-sell): 22%',
      ],
      price: 'Підключити послугу',
      buttonText: 'Підключити послугу',
    },
  ];
  const caseStudies: CaseStudy[] = [
    {
      id: 'appliances',
      title: 'Насіння квітів, овочів, фруктів',
      category: '(Інтернет-магазин)',
      image: '/images/case1.webp',

      beforeStats: {
        approval: '65%',
        upsell: '30%',
        averageCheck: '200 грн',
        buyout: '59%',
      },
      afterStats: {
        approval: '80%',
        upsell: '90%',
        averageCheck: '450 грн',
        buyout: '82%',
      },
      results: {
        profitIncrease: 'в 2.5 рази',
        dailyEarnings: '2000 грн на день',
        monthlyProfit: '60 000 грн на місяць',
      },
      text: `Проблеми до співпраці:<br/>
  1. Недостатня кількість менеджерів з досвідом.<br/>
  2. Неякісно написані скрипти продажу.<br/>
  3. Відсутність системи роботи з новими замовленнями.<br/><br/>
  <strong>TRUST-CALL ЗАПРОВАДИВ:</strong><br/>
  1. Додали менеджерів з досвідом у цій ніші.<br/>
  2. Скриптолог оновила скрипти та додала їх у CRM партнера.<br/>
  3. Впровадили контроль та відділ дожиму.<br/><br/>
  Результат — прибуток зріс <strong>в 2.5 рази</strong>.`,
    },
    {
      id: 'appliances',
      title: 'Парфумерія та косметика',
      category: '(Інтернет-магазин)',
      image: '/images/card3.png',

      beforeStats: {
        approval: '67%',
        upsell: '45%',
        averageCheck: '449 грн',
        buyout: '65%',
      },
      afterStats: {
        approval: '79%',
        upsell: '93%',
        averageCheck: '897 грн',
        buyout: '84%',
      },
      results: {
        profitIncrease: 'в 3 рази',
        dailyEarnings: '13 780 грн на день',
        monthlyProfit: '304 560 грн на місяць',
      },
      text: `Проблеми до співпраці:<br/>
      1. Клієнт обробляв замовлення самостійно<br/>
2. Відсутність системи та хаос в CRM<br/><br/>
   <strong>TRUST-CALL ЗАПРОВАДИВ:</strong><br/>
  1. Додали потрібну кількість менеджерів на CRM <br/>
2. Наш скриптолог написала скрипти та додала їх до CRM патнера <br/>
3. Налаштували статуси та запровадили систему, яка стала зручною для клієнта та дозволила КЦ якісно та швидко обробляти замовлення<br/><br/>`,
    },
    {
      id: 'appliances',
      title: 'Садженці троянди',
      category: '(Інтернет-магазин)',
      image: '/images/case3.webp',

      beforeStats: {
        approval: '50%',
        upsell: '46%',
        averageCheck: '380 грн',
        buyout: '65%',
      },
      afterStats: {
        approval: '89%',
        upsell: '73%',
        averageCheck: '574 грн',
        buyout: '84%',
      },
      results: {
        profitIncrease: 'в 1.5 рази',
        dailyEarnings: '2 500 грн на день',
        monthlyProfit: '75 000 грн / на місяць',
      },
      text: `Проблеми до співпраці:<br/>
1. Обробка не по скриптам знизила показники Апруву до критичного значення<br/>
2. Відсутність системного дожиму замовлень<br/>
3. Майже відсутня  коммунікація директора та адміністрації кц<br/><br/>
   <strong>TRUST-CALL ЗАПРОВАДИВ:</strong><br/>
1. Наш скриптолог створила ефективні скрипти та додала їх до CRM патнера<br/>
2. Було виділено 2 людини для системного дожиму замовлень<br/>
3. За пректом було закріплено:<br/> 
- Адмінстратор (Коммунікація з партнером, контроль якісного виконання роботи менеджерів на CRM )<br/>
- Відділ Дожиму відділення`,
    },
    {
      id: 'clothing',
      title: 'Жіночі костюми',
      category: '(Інтернет-магазин)',
      image: '/images/case4.webp',

      beforeStats: {
        approval: '43%',
        upsell: '38%',
        averageCheck: '980 грн',
        buyout: '55%',
      },
      afterStats: {
        approval: '85%',
        upsell: '83%',
        averageCheck: '1380 грн',
        buyout: '72%',
      },
      results: {
        profitIncrease: '85%',
        dailyEarnings: '6 850 грн на день',
        monthlyProfit: '205 500 грн на місяць',
      },
      text: `Проблеми до співпраці:<br/>
У партнера було одне прохання зробити максимум щоб збільшити % викупу та сердній чек<br/><br/>
   <strong>TRUST-CALL ЗАПРОВАДИВ:</strong><br/>
1. Переробили діючи скрипти, щоб мінімізувати відмови з неправильної інформації про товар<br/>
2. Розробили окремі скрипти для відділу дожиму, щоб мотивувати людей отримувати швидше<br/> 
3. Запропонували партнеру додати окремо знижку на замовлення, на які були відмови, тим самим ще додатково збільшили викуп на 4,7 %
`,
    },
    {
      id: 'bedding',
      title: 'Текстильні вироби',
      category: '(Інтернет-магазин)',
      image: '/images/case5.webp',

      beforeStats: {
        approval: '70%',
        upsell: '65%',
        averageCheck: '780 грн',
        buyout: '61%',
      },
      afterStats: {
        approval: '88%',
        upsell: '68%',
        averageCheck: '1150 грн',
        buyout: '85%',
      },
      results: {
        profitIncrease: 'X3',
        dailyEarnings: '4 500 грн на день',
        monthlyProfit: '135 000 грн на місяць',
      },
      text: `Проблеми до співпраці:<br/>
1. Низький % викупу замовлень<br/>
2. Скрипти які не мінялись роками , призвели до низького сер. чеку та допродажів<br/>
3. Незацікавленість кц у масштабувані та розвитку бізнесу партнера<br/><br/>
   <strong>TRUST-CALL ЗАПРОВАДИВ:</strong><br/>
  1. Додали потрібну кількість менеджерів з досвідом та активно дожимали замовлення на пошті<br/>
2. Наш скриптолог написала нові скрипти та додала їх до CRM партнера<br/>
3. Налаштували статуси та запровадили систему, яка підвищила основні показники х2 та звільнила партнера від рутини створивши можливість мастабуванню власного проекту`,
    },
    {
      id: 'appliances',
      title: 'Дрібна побутова техніка',
      category: '(Інтернет-магазин)',
      image: '/images/card1.webp',

      beforeStats: {
        approval: '23%',
        upsell: '12%',
        averageCheck: '650 грн',
        buyout: '63%',
      },
      afterStats: {
        approval: '88%',
        upsell: '80%',
        averageCheck: '980 грн',
        buyout: '86%',
      },
      results: {
        profitIncrease: '43%',
        dailyEarnings: '3 700 грн на день',
        monthlyProfit: '111 000 грн на місяць',
      },
      text: `Проблеми до співпраці:<br/>
1. Кц не мав розуміння роботи з повітрям в наслідок чого поганий середній чек та викуп<br/>
2. Неякісно написані скрипти продажу знижали % допродажі<br/>
3. Відсутність системи роботи з новими замовленнями та ндз<br/><br/>
   <strong>TRUST-CALL ЗАПРОВАДИВ:</strong><br/>
1. На CRM  були додані менеджери з досвідом роботи в цій ніші<br/>
2. Наш скриптолог переробила скрипти та додала їх до CRM патнера, що в свою чергу після тестової неділі дало змогу зробити х4 по допродажу<br/>
3. Застосували наш досвід  роботи з новими замовленнями та ндз (12-14 р/день )<br/>
4. За пректом було закріплено:<br/>
- Адмінстратор<br/>
- Відділ Дожиму відділення<br/>
- Менеджер з прослуховування<br/>
- Скриптолог`,
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white font-inter overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <WhyTrustCall />
      <HowToStartSection />
      <ProfitForm />
      <BenefitsSection />
      <PricingPlans />
      <CaseStudiesSection caseStudies={caseStudies} />
      <ClientReviews />
      <ReviewsCarousel />
      <QualityAssessment />
      <FinalCTA />
      <Footer />
    </div>
  );
};
export default TrustCallLandingPage;
