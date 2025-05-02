
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface SectorProps {
  title: string;
  leads: string;
  caseStudies: string[];
  bgClass: string;
  delay: number;
}

const Sector: React.FC<SectorProps> = ({ title, leads, caseStudies, bgClass, delay }) => {
  const delayClass = `animate-fade-in-delay-${delay}`;

  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${delayClass} opacity-0`}>
      <div className={`py-8 px-6 ${bgClass}`}>
        <h3 className="text-2xl font-serif font-bold mb-2 text-white">{title}</h3>
        <p className="text-white/80 mb-0">Leads: {leads}</p>
      </div>
      <div className="bg-white p-6">
        <ul className="space-y-4">
          {caseStudies.map((study, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-3 text-investment-gold font-bold">→</span>
              <span className="text-investment-slate">{study}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Sectors: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Sectors & Case Studies",
      subtitle: "We focus on sectors where our principals have deep operational expertise and proven success.",
      logistics: {
        title: "Logistics",
        leads: "Wu Zhong & Thomas Sim",
        caseStudies: [
          "Built a 50,000 sqm cold-chain hub in northern Vietnam—reduced spoilage by 30%",
          "Rolled out WMS + Power BI dashboards for a regional F&B distributor, cutting pick-pack time by 25%"
        ]
      },
      realEstate: {
        title: "Real Estate",
        leads: "Wu Zhong",
        caseStudies: [
          "Developed a 3-park logistics campus in Osaka—leased at 98% occupancy in 6 months",
          "Structured a joint-venture fund for last-mile urban warehousing, securing 3.5% IRR above market"
        ]
      },
      construction: {
        title: "Construction",
        leads: "Yichen Gwee",
        caseStudies: [
          "Sold a company for 30% higher than expected valuation"
        ]
      },
      fnb: {
        title: "F&B",
        leads: "Yichen Gwee & 株式会社 山神",
        caseStudies: [
          "Scaled a café-juice chain from 5 to 35 outlets in 2 years, delivering 20% margin lift",
          "Introduced blockchain-enabled traceability for a seafood distributor, boosting B2B orders by 40%"
        ]
      },
      seafood: {
        title: "Seafood",
        leads: "株式会社 山神",
        caseStudies: [
          "Integrated hatchery + processing facility in Hokkaido—increased yield by 15%",
          "Partnered with a luxury hotel chain for branded supply, driving 25% premium pricing"
        ]
      },
      systemsIntegrator: {
        title: "Systems Integrator",
        leads: "Yichen Gwee",
        caseStudies: [
          "Sold a company 20% higher than the existing bid"
        ]
      }
    },
    zh: {
      title: "行业领域与案例研究",
      subtitle: "我们专注于核心成员拥有深厚运营专业知识和成功经验的行业。",
      logistics: {
        title: "物流",
        leads: "吴总 & Thomas Sim",
        caseStudies: [
          "在越南北部建设5万平方米冷链中心—减少30%的产品损耗",
          "为区域性食品饮料分销商部署WMS系统与Power BI数据看板，缩短25%的拣选包装时间"
        ]
      },
      realEstate: {
        title: "房地产",
        leads: "吴总",
        caseStudies: [
          "在大阪开发三园区物流园区—6个月内实现98%出租率",
          "为城市最后一公里仓储构建合资基金，获得高于市场3.5%的内部收益率"
        ]
      },
      construction: {
        title: "建筑",
        leads: "魏义成",
        caseStudies: [
          "以高于预期估值30%的价格出售一家公司"
        ]
      },
      fnb: {
        title: "餐饮",
        leads: "魏义成 & 株式会社 山神",
        caseStudies: [
          "2年内将咖啡果汁连锁店从5家扩展到35家，提升20%的利润率",
          "为海鲜分销商引入区块链溯源系统，B2B订单增长40%"
        ]
      },
      seafood: {
        title: "海鲜",
        leads: "株式会社 山神",
        caseStudies: [
          "整合北海道的孵化场和加工设施—产量提高15%",
          "与豪华酒店连锁品牌供应合作，实现25%的溢价"
        ]
      },
      systemsIntegrator: {
        title: "系统集成商",
        leads: "魏义成",
        caseStudies: [
          "以高于现有出价20%的价格出售一家公司"
        ]
      }
    }
  };

  const sectors = [
    {
      title: language === 'en' ? translations.en.logistics.title : translations.zh.logistics.title,
      leads: language === 'en' ? translations.en.logistics.leads : translations.zh.logistics.leads,
      caseStudies: language === 'en' ? translations.en.logistics.caseStudies : translations.zh.logistics.caseStudies,
      bgClass: "bg-blue-800"
    },
    {
      title: language === 'en' ? translations.en.realEstate.title : translations.zh.realEstate.title,
      leads: language === 'en' ? translations.en.realEstate.leads : translations.zh.realEstate.leads,
      caseStudies: language === 'en' ? translations.en.realEstate.caseStudies : translations.zh.realEstate.caseStudies,
      bgClass: "bg-emerald-800"
    },
    {
      title: language === 'en' ? translations.en.construction.title : translations.zh.construction.title,
      leads: language === 'en' ? translations.en.construction.leads : translations.zh.construction.leads,
      caseStudies: language === 'en' ? translations.en.construction.caseStudies : translations.zh.construction.caseStudies,
      bgClass: "bg-purple-800"
    },
    {
      title: language === 'en' ? translations.en.fnb.title : translations.zh.fnb.title,
      leads: language === 'en' ? translations.en.fnb.leads : translations.zh.fnb.leads,
      caseStudies: language === 'en' ? translations.en.fnb.caseStudies : translations.zh.fnb.caseStudies,
      bgClass: "bg-amber-800"
    },
    {
      title: language === 'en' ? translations.en.seafood.title : translations.zh.seafood.title,
      leads: language === 'en' ? translations.en.seafood.leads : translations.zh.seafood.leads,
      caseStudies: language === 'en' ? translations.en.seafood.caseStudies : translations.zh.seafood.caseStudies,
      bgClass: "bg-cyan-800"
    },
    {
      title: language === 'en' ? translations.en.systemsIntegrator.title : translations.zh.systemsIntegrator.title,
      leads: language === 'en' ? translations.en.systemsIntegrator.leads : translations.zh.systemsIntegrator.leads,
      caseStudies: language === 'en' ? translations.en.systemsIntegrator.caseStudies : translations.zh.systemsIntegrator.caseStudies,
      bgClass: "bg-indigo-800"
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

        {/* Sectors */}
        <section className="py-16 md:py-24 bg-investment-light-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sectors.map((sector, index) => (
                <Sector
                  key={sector.title}
                  title={sector.title}
                  leads={sector.leads}
                  caseStudies={sector.caseStudies}
                  bgClass={sector.bgClass}
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

export default Sectors;
