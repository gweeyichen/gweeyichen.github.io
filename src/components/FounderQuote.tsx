
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FounderQuote: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      quote: "\"Every deal is a puzzle—my job is to find the hidden corner piece.\"",
      name: "— Yichen Gwee",
      title: "Founder & Lead Operator"
    },
    zh: {
      quote: "\"每笔交易都是拼图——我的任务是找到那块关键拼角。\"",
      name: "— 魏义成",
      title: "创始人 & 首席运营官"
    }
  };

  return (
    <section className="py-20 bg-investment-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <svg
            className="w-12 h-12 mx-auto mb-6 text-investment-gold"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
          </svg>

          <p className="text-xl md:text-2xl font-serif mb-8 leading-relaxed">
            {language === 'en' ? translations.en.quote : translations.zh.quote}
          </p>

          <div className="flex justify-center items-center">
            <div className="text-investment-gold font-medium text-lg">
              {language === 'en' ? translations.en.name : translations.zh.name}
            </div>
            <div className="bg-investment-gold w-px h-4 mx-3"></div>
            <div className="text-gray-300 text-sm md:text-base">
              {language === 'en' ? translations.en.title : translations.zh.title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderQuote;
