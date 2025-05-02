
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface MetricProps {
  value: string;
  label: string;
  labelZh: string;
}

const Metric: React.FC<MetricProps> = ({ value, label, labelZh }) => {
  const { language } = useLanguage();
  
  return (
    <div className="text-center px-4 md:px-8">
      <div className="text-4xl md:text-5xl font-serif font-bold text-investment-navy mb-2">{value}</div>
      <div className="text-sm md:text-base text-investment-slate">
        {language === 'en' ? label : labelZh}
      </div>
    </div>
  );
};

const HomeMetrics: React.FC = () => {
  return (
    <section className="py-16 bg-investment-light-gray">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-around items-center">
          <Metric value="6" label="Principals" labelZh="负责人" />
          <Metric value="4" label="Sectors" labelZh="行业领域" />
          <Metric value="10+" label="Mid-Market Transactions" labelZh="中端市场交易" />
          <Metric value="100+" label="Man-Days Saved via Automation" labelZh="通过自动化节省的工作日" />
        </div>
      </div>
    </section>
  );
};

export default HomeMetrics;
