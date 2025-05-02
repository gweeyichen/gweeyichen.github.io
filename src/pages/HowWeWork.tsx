
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProcessStepProps {
  title: string;
  number: string;
  items: string[];
  delay: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ title, number, items, delay }) => {
  const delayClass = `animate-fade-in-delay-${delay}`;
  
  return (
    <div className={`flex gap-6 ${delayClass} opacity-0`}>
      <div className="flex-none">
        <div className="w-12 h-12 rounded-full bg-investment-navy text-white flex items-center justify-center font-bold text-xl">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-investment-navy">{title}</h3>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-3 text-investment-gold">•</span>
              <span className="text-investment-slate">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const HowWeWork: React.FC = () => {
  const { language } = useLanguage();
  
  const translations = {
    en: {
      title: "How We Work",
      subtitle: "Our five-step roadmap to value creation turns mid-market companies into category leaders.",
      roadmapTitle: "Five-Step Roadmap to Value Creation",
      step1Title: "Originate & Screen",
      step1Items: [
        "Proprietary deal flow from founder networks, sector specialists, and local partners",
        "Initial filters: size (USD 5–50 M EBITDA), geography, cultural fit"
      ],
      step2Title: "Due Diligence",
      step2Items: [
        "Financial modelling & stress tests by Yichen's team",
        "Legal structuring and risk review by Cermain",
        "Operational deep-dive: site visits, systems audits, management interviews"
      ],
      step3Title: "Acquisition & Close",
      step3Items: [
        "Flexible structures: equity rollovers, seller financing, founder earn-outs",
        "Transparent governance: co-investment vehicles, board seats, KPI covenants"
      ],
      step4Title: "Integration & Transformation",
      step4Items: [
        "Terence's 90-day playbook: synergies, cost levers, talent alignment",
        "Thomas's training bootcamps: process standardization, \"train-the-trainer\" rollout",
        "Tech enablement: GenAI pilots, RPA for back-office, BI dashboards"
      ],
      step5Title: "Ongoing Value Creation & Exit",
      step5Items: [
        "Continuous performance monitoring against KPIs",
        "Strategic growth initiatives: add-on acquisitions, new channels, digital products",
        "Exit options: trade sale, secondary LBO, IPO prep"
      ]
    },
    zh: {
      title: "工作方式",
      subtitle: "我们的五步价值创造路线图将中型企业转变为行业领导者。",
      roadmapTitle: "价值创造五步路线图",
      step1Title: "项目发掘与筛选",
      step1Items: [
        "通过创始人网络、行业专家和本地合作伙伴获取专属交易流",
        "初步筛选：规模（EBITDA 500万-5000万美元）、地理位置、文化契合度"
      ],
      step2Title: "尽职调查",
      step2Items: [
        "由魏义成团队进行财务建模与压力测试",
        "由张颖进行法律架构设计与风险评估",
        "运营深度调查：实地考察、系统审计、管理层访谈"
      ],
      step3Title: "收购与交割",
      step3Items: [
        "灵活结构：股权展期、卖方融资、创始人绩效对赌",
        "透明治理：共同投资工具、董事会席位、KPI约定"
      ],
      step4Title: "整合与转型",
      step4Items: [
        "Terence的90天行动手册：协同效应、成本杠杆、人才对齐",
        "Thomas的培训营：流程标准化、\"培训师培训\"推广",
        "技术赋能：GenAI试点、后台RPA自动化、BI数据看板"
      ],
      step5Title: "持续价值创造与退出",
      step5Items: [
        "持续监控KPI绩效指标",
        "战略增长计划：追加收购、新渠道开拓、数字产品开发",
        "退出选项：行业出售、二次杠杆收购、IPO准备"
      ]
    }
  };
  
  const processSteps = [
    {
      title: language === 'en' ? translations.en.step1Title : translations.zh.step1Title,
      number: "1",
      items: language === 'en' ? translations.en.step1Items : translations.zh.step1Items
    },
    {
      title: language === 'en' ? translations.en.step2Title : translations.zh.step2Title,
      number: "2",
      items: language === 'en' ? translations.en.step2Items : translations.zh.step2Items
    },
    {
      title: language === 'en' ? translations.en.step3Title : translations.zh.step3Title,
      number: "3",
      items: language === 'en' ? translations.en.step3Items : translations.zh.step3Items
    },
    {
      title: language === 'en' ? translations.en.step4Title : translations.zh.step4Title,
      number: "4",
      items: language === 'en' ? translations.en.step4Items : translations.zh.step4Items
    },
    {
      title: language === 'en' ? translations.en.step5Title : translations.zh.step5Title,
      number: "5",
      items: language === 'en' ? translations.en.step5Items : translations.zh.step5Items
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <div className="bg-investment-navy text-white py-32 px-4">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              {language === 'en' ? translations.en.title : translations.zh.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              {language === 'en' ? translations.en.subtitle : translations.zh.subtitle}
            </p>
          </div>
        </div>
        
        {/* Process Steps */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-16 text-center">
              {language === 'en' ? translations.en.roadmapTitle : translations.zh.roadmapTitle}
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-20">
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={step.title}
                  title={step.title}
                  number={step.number}
                  items={step.items}
                  delay={(index % 5) + 1}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HowWeWork;
