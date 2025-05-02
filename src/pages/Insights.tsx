
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface InsightPostProps {
  title: string;
  date: string;
  summary: string;
  delay: number;
}

const InsightPost: React.FC<InsightPostProps> = ({ title, date, summary, delay }) => {
  const delayClass = `animate-fade-in-delay-${delay}`;
  const { language } = useLanguage();
  
  const translations = {
    en: {
      readMore: "Read more",
      insightsLabel: "Insights"
    },
    zh: {
      readMore: "阅读更多",
      insightsLabel: "洞察"
    }
  };
  
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${delayClass} opacity-0`}>
      <div className="h-48 bg-investment-light-gray flex items-center justify-center">
        <div className="text-4xl text-investment-navy/20 font-serif">
          {language === 'en' ? translations.en.insightsLabel : translations.zh.insightsLabel}
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-investment-gold mb-2">{date}</div>
        <h3 className="text-xl font-semibold mb-4 text-investment-navy">{title}</h3>
        <p className="text-investment-slate mb-6">{summary}</p>
        <a href="#" className="inline-flex items-center text-investment-navy hover:text-investment-gold transition-duration-200">
          <span className="mr-2">{language === 'en' ? translations.en.readMore : translations.zh.readMore}</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

const Insights: React.FC = () => {
  const { language } = useLanguage();
  
  const translations = {
    en: {
      title: "Insights",
      subtitle: "Practical knowledge from our team's real-world experience in deals and operations.",
      posts: [
        {
          title: "Why Off-Market Deals Outperform Auctions",
          date: "March 12, 2025",
          summary: "A data-driven look at how founder networks and sector specialists beat the herd."
        },
        {
          title: "5 Automation Wins That Paid for Themselves in 90 Days",
          date: "January 20, 2025",
          summary: "Step-by-step playbook from Terence on GenAI pilots and RPA rollouts."
        },
        {
          title: "The Search Fund Advantage in Mid-Market Acquisitions",
          date: "December 5, 2024",
          summary: "How aligned incentives drive better outcomes for all stakeholders."
        },
        {
          title: "Cold Chain Innovation: From Farm to Fork",
          date: "November 18, 2024",
          summary: "Case study on our Vietnam logistics hub reducing food waste."
        }
      ]
    },
    zh: {
      title: "洞察",
      subtitle: "来自我们团队在交易和运营中的实战经验的实用知识。",
      posts: [
        {
          title: "为什么场外交易优于拍卖",
          date: "2025年3月12日",
          summary: "数据驱动分析：创始人网络和行业专家如何击败大众市场。"
        },
        {
          title: "5个90天内回本的自动化成功案例",
          date: "2025年1月20日",
          summary: "Terence分享的GenAI试点和RPA部署的详细操作手册。"
        },
        {
          title: "搜索基金在中型市场收购中的优势",
          date: "2024年12月5日",
          summary: "利益对齐如何为所有利益相关者带来更好的结果。"
        },
        {
          title: "冷链创新：从农场到餐桌",
          date: "2024年11月18日",
          summary: "我们越南物流中心减少食物浪费的案例研究。"
        }
      ]
    }
  };
  
  const posts = language === 'en' ? translations.en.posts : translations.zh.posts;

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
        
        {/* Posts */}
        <section className="py-16 md:py-24 bg-investment-light-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <InsightPost
                  key={post.title}
                  title={post.title}
                  date={post.date}
                  summary={post.summary}
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

export default Insights;
