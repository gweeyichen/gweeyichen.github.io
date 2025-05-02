
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Search-Fund-Style Consortium",
      subtitle: "From proprietary deal sourcing to market-leading execution. Founded and led by deal-maker operator Yichen Gwee.",
      submitDeal: "Submit a Deal",
      meetTeam: "Meet the Team"
    },
    zh: {
      title: "搜索基金式交易炼金联盟",
      subtitle: "从专属项目发掘到行业领先执行。由交易操盘手兼运营者魏义成创立与领航。",
      submitDeal: "提交项目",
      meetTeam: "认识团队"
    }
  };

  return (
    <div className="relative bg-investment-navy min-h-screen flex items-center text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            {language === 'en' ? translations.en.title : translations.zh.title}
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl animate-fade-in-delay-1">
            {language === 'en' ? translations.en.subtitle : translations.zh.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
            <Link to="/contact">
              <Button className="bg-investment-gold hover:bg-investment-gold/90 text-investment-navy text-base px-6 py-6">
                {language === 'en' ? translations.en.submitDeal : translations.zh.submitDeal}
              </Button>
            </Link>
            <Link to="/team">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base px-6 py-6">
                {language === 'en' ? translations.en.meetTeam : translations.zh.meetTeam}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
