import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ValuePillarProps {
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  delay: number;
}

const ValuePillar: React.FC<ValuePillarProps> = ({ title, titleZh, description, descriptionZh, delay }) => {
  const delayClass = `animate-fade-in-delay-${delay}`;
  const { language } = useLanguage();

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${delayClass} opacity-0`}>
      <h3 className="text-xl font-semibold mb-3 text-investment-navy">
        {language === 'en' ? title : titleZh}
      </h3>
      <p className="text-investment-slate">
        {language === 'en' ? description : descriptionZh}
      </p>
    </div>
  );
};

const About: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "About Us",
      subtitle: "The consortium that transforms mid-market companies into category leaders.",
      visionTitle: "Our Vision",
      visionText: "To build a search-fund-style platform that doesn't just buy companies—it transforms them into category leaders through relentless operational rigor.",
      missionTitle: "Our Mission",
      missionText: "Source proprietary mid-market deals, structure aligned investments, and execute hands-on playbooks that deliver sustainable EBITDA growth and stakeholder value.",
      valuePillarsTitle: "Our Value Pillars",
      foundingStoryTitle: "Founding Story",
      foundingStoryText: "Yichen Gwee left the safety of Big Bank M&A to prove that operators can out-execute financial sponsors. Over 10 years, he's founded six ventures, closed 10+ deals across Asia, and built a network of C-suite partners—and now he's assembled this consortium to scale that playbook.",
      meetOurTeam: "Meet our team"
    },
    zh: {
      title: "关于我们",
      subtitle: "将中型企业转变为行业领导者的财团。",
      visionTitle: "我们的愿景",
      visionText: "打造搜索基金式平台，不只是收购企业，更以不懈的运营执行将其升级为行业领导者。",
      missionTitle: "我们的使命",
      missionText: "发掘独家中型并购项目，构建利益对齐的投资架构，执行落地型运营手册，实现可持续 EBITDA 增长与价值回报。",
      valuePillarsTitle: "我们的价值支柱",
      foundingStoryTitle: "创始故事",
      foundingStoryText: "魏义成放弃大行M&A安稳，立志用操盘手与运营者的视角超越传统财务投资人。十年间，他创立六家公司、完成10+宗跨境并购，积累了深度产业人脉；如今，他整合这支团队，共同复制高速增长的运营并购模式。",
      meetOurTeam: "认识我们的团队"
    }
  };

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

        {/* Vision & Mission */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  {language === 'en' ? translations.en.visionTitle : translations.zh.visionTitle}
                </h2>
                <p className="text-xl text-investment-slate leading-relaxed">
                  {language === 'en' ? translations.en.visionText : translations.zh.visionText}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  {language === 'en' ? translations.en.missionTitle : translations.zh.missionTitle}
                </h2>
                <p className="text-xl text-investment-slate leading-relaxed">
                  {language === 'en' ? translations.en.missionText : translations.zh.missionText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Pillars */}
        <section className="py-16 md:py-24 bg-investment-light-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">
              {language === 'en' ? translations.en.valuePillarsTitle : translations.zh.valuePillarsTitle}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValuePillar
                title="Proprietary Sourcing"
                titleZh="独家项目发掘"
                description="We leverage Yichen's deal network, Wu Zhong's logistics hubs, and 株式会社 山神's seafood ecosystem to uncover off-market gems."
                descriptionZh="依托魏义成的交易网络、吴忠的物流枢纽与株式会社 山神的海鲜生态，搜罗未公开标的。"
                delay={1}
              />
              <ValuePillar
                title="Rigorous Structuring"
                titleZh="严谨投资结构"
                description="Cermain Cheung crafts governance frameworks and fund vehicles that align incentives and de-risk every transaction."
                descriptionZh="张律师设计合规基金与治理框架，确保风险可控、利益一致。"
                delay={2}
              />
              <ValuePillar
                title="Hands-On Transformation"
                titleZh="落地型转型执行"
                description="From Terence's integration playbooks to Thomas's training academies, we roll up our sleeves and implement."
                descriptionZh="从Terence的整合手册到Thomas的培训学院，我们亲自上阵执行。"
                delay={3}
              />
              <ValuePillar
                title="Aligned Capital"
                titleZh="利益对齐资本"
                description="We put founder capital alongside institutional LPs—because real skin in the game drives real results."
                descriptionZh="创始人自投并联动机构LP，真正同进同退，共担风险、共享收益。"
                delay={4}
              />
            </div>
          </div>
        </section>

        {/* Founding Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-8">
                {language === 'en' ? translations.en.foundingStoryTitle : translations.zh.foundingStoryTitle}
              </h2>

              <p className="text-lg text-investment-slate leading-relaxed mb-6">
                {language === 'en' ? translations.en.foundingStoryText : translations.zh.foundingStoryText}
              </p>

              <div className="mt-12 flex justify-center md:justify-start">
                <a href="/team" className="inline-flex items-center text-investment-navy hover:text-investment-gold transition-duration-200">
                  <span className="mr-2 font-medium">
                    {language === 'en' ? translations.en.meetOurTeam : translations.zh.meetOurTeam}
                  </span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
