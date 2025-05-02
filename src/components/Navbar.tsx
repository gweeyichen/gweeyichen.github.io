
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  // Translation mapping
  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      team: 'Team',
      howWeWork: 'How We Work',
      sectors: 'Sectors',
      insights: 'Insights',
      contact: 'Contact'
    },
    zh: {
      home: '首页',
      about: '关于我们',
      team: '团队',
      howWeWork: '工作方式',
      sectors: '行业领域',
      insights: '洞察',
      contact: '联系我们'
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8',
        isScrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/deal-alchemy-consortium/images/Deal Alchemy.png"
            alt="Deal Alchemy Logo"
            className="h-10 w-auto"
          />
          <span className={`font-serif font-bold text-xl md:text-2xl ${isScrolled ? 'text-investment-navy' : 'text-white'}`}>
            {language === 'en' ? (
              <>Deal Alchemy <span className="text-investment-gold">Consortium</span></>
            ) : (
              <span className="text-investment-gold">交易炼金联盟</span>
            )}
          </span>
        </Link>

        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/">
            <Button variant="outline" className="bg-investment-navy text-white border-investment-navy hover:bg-investment-navy/80 hover:text-white shadow-md">
              {language === 'en' ? translations.en.home : translations.zh.home}
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" className="bg-investment-navy text-white border-investment-navy hover:bg-investment-navy/80 hover:text-white shadow-md">
              {language === 'en' ? translations.en.about : translations.zh.about}
            </Button>
          </Link>
          <Link to="/team">
            <Button variant="outline" className="bg-investment-navy text-white border-investment-navy hover:bg-investment-navy/80 hover:text-white shadow-md">
              {language === 'en' ? translations.en.team : translations.zh.team}
            </Button>
          </Link>
          <Link to="/how-we-work">
            <Button variant="outline" className="bg-investment-navy text-white border-investment-navy hover:bg-investment-navy/80 hover:text-white shadow-md">
              {language === 'en' ? translations.en.howWeWork : translations.zh.howWeWork}
            </Button>
          </Link>
          <Link to="/sectors">
            <Button variant="outline" className="bg-investment-navy text-white border-investment-navy hover:bg-investment-navy/80 hover:text-white shadow-md">
              {language === 'en' ? translations.en.sectors : translations.zh.sectors}
            </Button>
          </Link>
          <Link to="/insights">
            <Button variant="outline" className="bg-investment-navy text-white border-investment-navy hover:bg-investment-navy/80 hover:text-white shadow-md">
              {language === 'en' ? translations.en.insights : translations.zh.insights}
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="bg-investment-navy text-white border-investment-navy hover:bg-investment-navy/80 hover:text-white shadow-md">
              {language === 'en' ? translations.en.contact : translations.zh.contact}
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="ml-2 bg-investment-gold text-investment-navy hover:bg-investment-gold/80 hover:text-investment-navy shadow-sm"
            aria-label="Toggle language"
          >
            <Languages className="h-5 w-5" />
            <span className="sr-only">Toggle language</span>
          </Button>
        </div>

        <div className="lg:hidden flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="bg-investment-gold text-investment-navy hover:bg-investment-gold/80 hover:text-investment-navy shadow-sm"
            aria-label="Toggle language"
          >
            <Languages className="h-5 w-5" />
          </Button>
          <button
            className={`${isScrolled ? 'text-investment-navy' : 'text-white'}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu - also update with button styling */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white z-50 p-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full bg-investment-navy text-white border-investment-navy hover:bg-investment-navy/80 hover:text-white shadow-md">
                {language === 'en' ? translations.en.home : translations.zh.home}
              </Button>
            </Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full bg-investment-navy text-white border-investment-navy hover:bg-investment-navy/80 hover:text-white shadow-md">
                {language === 'en' ? translations.en.about : translations.zh.about}
              </Button>
            </Link>
            <Link to="/team" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full bg-investment-navy text-white border-investment-navy hover:bg-investment-navy/80 hover:text-white shadow-md">
                {language === 'en' ? translations.en.team : translations.zh.team}
              </Button>
            </Link>
            <Link to="/how-we-work" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full bg-investment-navy text-white border-investment-navy hover:bg-investment-navy/80 hover:text-white shadow-md">
                {language === 'en' ? translations.en.howWeWork : translations.zh.howWeWork}
              </Button>
            </Link>
            <Link to="/sectors" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full bg-investment-navy text-white border-investment-navy hover:bg-investment-navy/80 hover:text-white shadow-md">
                {language === 'en' ? translations.en.sectors : translations.zh.sectors}
              </Button>
            </Link>
            <Link to="/insights" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full bg-investment-navy text-white border-investment-navy hover:bg-investment-navy/80 hover:text-white shadow-md">
                {language === 'en' ? translations.en.insights : translations.zh.insights}
              </Button>
            </Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full bg-investment-navy text-white border-investment-navy hover:bg-investment-navy/80 hover:text-white shadow-md">
                {language === 'en' ? translations.en.contact : translations.zh.contact}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
