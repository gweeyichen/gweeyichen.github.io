
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const translations = {
    en: {
      companyName: "Deal Alchemy Consortium",
      foundedBy: "Founded by Yichen Gwee",
      description: "From proprietary deal sourcing to market-leading execution, we transform mid-market companies into category leaders.",
      quickLinks: "Quick Links",
      home: "Home",
      about: "About",
      team: "Team",
      howWeWork: "How We Work",
      sectors: "Sectors",
      insights: "Insights",
      contact: "Contact",
      submitDeal: "Submit a Deal",
      lpInquiries: "LP & Partner Inquiries",
      scheduleCall: "Schedule a Call",
      allRightsReserved: "All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service"
    },
    zh: {
      companyName: "交易炼金联盟",
      foundedBy: "由魏义成创立",
      description: "从专属项目发掘到行业领先执行，我们将中型企业转变为行业领导者。",
      quickLinks: "快捷链接",
      home: "首页",
      about: "关于我们",
      team: "团队",
      howWeWork: "工作方式",
      sectors: "行业领域",
      insights: "洞察",
      contact: "联系我们",
      submitDeal: "提交项目",
      lpInquiries: "LP及合作伙伴咨询",
      scheduleCall: "安排通话",
      allRightsReserved: "版权所有。",
      privacyPolicy: "隐私政策",
      termsOfService: "服务条款"
    }
  };

  return (
    <footer className="bg-investment-charcoal text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">
              {language === 'en' ? (
                <>Deal Alchemy <span className="text-investment-gold">Consortium</span></>
              ) : (
                <span className="text-investment-gold">交易炼金联盟</span>
              )}
            </h3>
            <p className="text-gray-300 mb-4 italic font-light">
              {language === 'en' ? translations.en.foundedBy : translations.zh.foundedBy}
            </p>
            <p className="text-gray-400 max-w-md">
              {language === 'en' ? translations.en.description : translations.zh.description}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">
              {language === 'en' ? translations.en.quickLinks : translations.zh.quickLinks}
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-investment-gold transition-colors">
                {language === 'en' ? translations.en.home : translations.zh.home}
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-investment-gold transition-colors">
                {language === 'en' ? translations.en.about : translations.zh.about}
              </Link>
              <Link to="/team" className="text-gray-300 hover:text-investment-gold transition-colors">
                {language === 'en' ? translations.en.team : translations.zh.team}
              </Link>
              <Link to="/how-we-work" className="text-gray-300 hover:text-investment-gold transition-colors">
                {language === 'en' ? translations.en.howWeWork : translations.zh.howWeWork}
              </Link>
              <Link to="/sectors" className="text-gray-300 hover:text-investment-gold transition-colors">
                {language === 'en' ? translations.en.sectors : translations.zh.sectors}
              </Link>
              <Link to="/insights" className="text-gray-300 hover:text-investment-gold transition-colors">
                {language === 'en' ? translations.en.insights : translations.zh.insights}
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">
              {language === 'en' ? translations.en.contact : translations.zh.contact}
            </h4>
            <div className="flex flex-col space-y-2">
              <Link to="/contact" className="text-gray-300 hover:text-investment-gold transition-colors">
                {language === 'en' ? translations.en.submitDeal : translations.zh.submitDeal}
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-investment-gold transition-colors">
                {language === 'en' ? translations.en.lpInquiries : translations.zh.lpInquiries}
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-investment-gold transition-colors">
                {language === 'en' ? translations.en.scheduleCall : translations.zh.scheduleCall}
              </Link>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-investment-gold transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-gray-700 text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <div>© {currentYear} {language === 'en' ? "Deal Alchemy Consortium" : "交易炼金联盟"}. {language === 'en' ? translations.en.allRightsReserved : translations.zh.allRightsReserved}</div>
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="mx-2 hover:text-investment-gold transition-colors">
              {language === 'en' ? translations.en.privacyPolicy : translations.zh.privacyPolicy}
            </a>
            <span className="mx-2">·</span>
            <a href="#" className="mx-2 hover:text-investment-gold transition-colors">
              {language === 'en' ? translations.en.termsOfService : translations.zh.termsOfService}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
