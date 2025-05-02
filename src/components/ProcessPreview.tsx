
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProcessStepProps {
  number: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  delay: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, titleZh, description, descriptionZh, delay }) => {
  const delayClass = `animate-fade-in-delay-${delay}`;
  const { language } = useLanguage();

  return (
    <div className={`flex flex-col md:flex-row items-start gap-4 ${delayClass} opacity-0`}>
      <div className="flex-none w-10 h-10 rounded-full bg-investment-navy text-white flex items-center justify-center font-semibold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-investment-navy">
          {language === 'en' ? title : titleZh}
        </h3>
        <p className="text-investment-slate">
          {language === 'en' ? description : descriptionZh}
        </p>
      </div>
    </div>
  );
};

const ProcessPreview: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Our Process",
      seeFullApproach: "See our full approach"
    },
    zh: {
      title: "我们的流程",
      seeFullApproach: "查看我们的完整流程"
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
          {language === 'en' ? translations.en.title : translations.zh.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          <ProcessStep
            number="1"
            title="Originate"
            titleZh="发掘"
            description="Tap founder networks & off-market pipelines"
            descriptionZh="借助创始人与行业专家网络获取独家项目"
            delay={1}
          />
          <ProcessStep
            number="2"
            title="Assess"
            titleZh="评估"
            description="Deep financial, legal & operational diligence"
            descriptionZh="深度财务、法律与运营尽调"
            delay={2}
          />
          <ProcessStep
            number="3"
            title="Acquire"
            titleZh="收购"
            description="Structured closings with skin-in-the-game"
            descriptionZh="灵活结构：创始人跟投、卖方融资、绩效对赌"
            delay={3}
          />
          <ProcessStep
            number="4"
            title="Transform"
            titleZh="转型"
            description="Integration playbooks & digital roadmaps"
            descriptionZh="整合手册与数字化蓝图落地"
            delay={4}
          />
          <ProcessStep
            number="5"
            title="Exit"
            titleZh="退出"
            description="3–5 year hold, multiple exit pathways"
            descriptionZh="3–5 年持有，多元退出路径"
            delay={5}
          />
        </div>

        <div className="mt-16 text-center">
          <Link to="/how-we-work" className="inline-flex items-center text-investment-navy hover:text-investment-gold transition-duration-200">
            <span className="mr-2 font-medium">
              {language === 'en' ? translations.en.seeFullApproach : translations.zh.seeFullApproach}
            </span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessPreview;
