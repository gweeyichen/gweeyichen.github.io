
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';
import { useLanguage } from '@/contexts/LanguageContext';

const Team: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Meet the Team",
      subtitle: "Our consortium brings together 6 principals with deep expertise across sectors and functions.",
      principalsTitle: "Meet the 6 Principals"
    },
    zh: {
      title: "认识团队",
      subtitle: "我们的交易炼金联盟汇集了6位在各行业和职能领域拥有深厚专业知识的核心成员。",
      principalsTitle: "认识 6 位核心合伙人"
    }
  };

  const teamMembers = [
    {
      name: "Yichen Gwee",
      nameZh: "魏义成",
      role: "Founder & Lead Dealmaker",
      roleZh: "创始人 & 首席交易官",
      description: [
        "Serial entrepreneur: 6 ventures across tech, F&B, logistics, exits at profitable multiples",
        "Operator mindset: embeds in portfolio companies to unlock 20–40% EBITDA uplift",
        "Network connector: family offices, LPs, C-suite across Asia"
      ],
      descriptionZh: [
        "串联产业与资本：六家企业创立与退出，覆盖科技、餐饮、物流等领域",
        "运营思维：深入被投企业，实现20–40% EBITDA提升",
        "人脉拓展：家族办公室、机构LP及C端高管资源"
      ],
      isFounder: true
    },
    {
      name: "Wu Zhong",
      nameZh: "吴总",
      role: "Logistics & Real Estate Strategist",
      roleZh: "物流与地产战略家",
      description: [
        "Principal, Keiyo Int'l Logistics (Tokyo HQ): 60-member team & SEA–Japan cargo network",
        "Built 4 warehousing hubs & customs-compliant freight services",
        "Developed real-estate logistics parks for SMEs & multinationals"
      ],
      descriptionZh: [
        "Keiyo国际物流（东京总部）负责人：管理60人团队与东南亚–日本货运网络",
        "设计并运营4大仓储枢纽与报关转运服务",
        "开发面向中小企与大型企业的物流园区"
      ]
    },
    {
      name: "Thomas Sim",
      nameZh: "Thomas Sim",
      role: "Operations & Training Director",
      roleZh: "运营与培训总监",
      description: [
        "Group CEO, International Freight Consultants (Topocean Group)",
        "FIATA VP: global vocational training in 118+ countries",
        "Academic Director, Logistics Academy: scalable \"train-the-trainer\" programs"
      ],
      descriptionZh: [
        "Topocean集团旗下International Freight Consultants集团CEO，20+年货运经验",
        "FIATA副总裁：全球118+国职业培训标准制定者",
        "物流学院学术总监：开发可复制的培训讲师项目与流程优化课程"
      ]
    },
    {
      name: "株式会社 山神",
      nameZh: "株式会社 山神",
      role: "Seafood Specialist & Investor",
      roleZh: "海鲜专家 & 投资人",
      description: [
        "2nd-gen aquaculture leader: modernized hatcheries & cold-chain systems",
        "Secured global certifications (ASC, BAP) and premium F&B partnerships",
        "Focused on vertical integration to boost margins and traceability"
      ],
      descriptionZh: [
        "二代水产领袖：现代化养殖场与冷链体系建设者",
        "获得ASC、BAP等国际质量认证，建立高端餐饮供应合作",
        "专注产业链垂直整合，提升毛利与可追溯性"
      ]
    },
    {
      name: "Cermain Cheung",
      nameZh: "张颖",
      role: "Legal Counsel & Structuring Lead",
      roleZh: "法律顾问 & 架构师",
      description: [
        "Hong Kong counsel since 2009, PE/VC and cross-border M&A expert",
        "Architect of fund structures, governance frameworks, risk mitigation",
        "\"Partner-for-life\" ethos: seamless docs, compliant closings"
      ],
      descriptionZh: [
        "2009年获香港律师资格，专注PE/VC与跨境并购",
        "设计基金架构、治理框架与风险防控方案",
        "\"长期伙伴\"理念：确保文件合规、交割无缝"
      ]
    },
    {
      name: "Terence Siu",
      nameZh: "Terence Siu",
      role: "Integration & Digital Transformation Lead",
      roleZh: "整合与数字化转型负责人",
      description: [
        "Former Series A COO: co-led USD 14 M raise & POS integration—20% cost savings",
        "Playbooks for 40% YOY growth & HKD 1 M annual ops savings",
        "Automated 20+ processes (100+ man-days saved) via GenAI, RPA, ERP"
      ],
      descriptionZh: [
        "前Series A初创公司COO：联合主导1400万美元融资与POS系统整合，成本降低20%",
        "制定40%年增长手册，年度运营节省100万港币",
        "基于GenAI、RPA与ERP自动化20+流程，节省100+人天"
      ]
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

        {/* Team Members */}
        <section className="py-16 md:py-24 bg-investment-light-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">
              {language === 'en' ? translations.en.principalsTitle : translations.zh.principalsTitle}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={member.name}
                  name={member.name}
                  nameZh={member.nameZh}
                  role={member.role}
                  roleZh={member.roleZh}
                  description={member.description}
                  descriptionZh={member.descriptionZh}
                  delay={(index % 5) + 1}
                  isFounder={member.isFounder}
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

export default Team;
