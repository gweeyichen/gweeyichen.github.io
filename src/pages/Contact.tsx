
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from '@/contexts/LanguageContext';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  
  const translations = {
    en: {
      title: "Contact Us",
      subtitle: "Submit a deal, inquire about partnership opportunities, or schedule a call with our team.",
      dealSubmission: {
        title: "Deal Submission",
        description: "Have a business you think fits our model? Tell us in 3 minutes!",
        name: "Name",
        company: "Company",
        sector: "Sector",
        selectSector: "Select a sector",
        logistics: "Logistics",
        realEstate: "Real Estate",
        fnb: "F&B",
        seafood: "Seafood",
        other: "Other",
        dealSummary: "Brief Deal Summary",
        dealSummaryPlaceholder: "Please describe the opportunity...",
        ndaAgreement: "I agree to sign an NDA if required",
        submitButton: "Submit Deal",
        successTitle: "Deal submission received",
        successMessage: "Thank you for submitting your deal. Our team will review it and get back to you shortly."
      },
      lpInquiry: {
        title: "LP & Partner Inquiries",
        description: "Interested in partnering with us or learning more about our investment approach?",
        name: "Name",
        organization: "Organization",
        aum: "AUM (optional)",
        aumPlaceholder: "Assets under management",
        email: "Email",
        phone: "Phone",
        submitButton: "Get in Touch",
        successTitle: "Inquiry received",
        successMessage: "Thank you for your interest. We will contact you soon to discuss partnership opportunities."
      },
      scheduleCall: {
        title: "Schedule a Call",
        description: "Chat 1:1 with Yichen to discuss your specific needs.",
        button: "Schedule 30-Minute Call"
      }
    },
    zh: {
      title: "联系我们",
      subtitle: "提交项目、咨询合作机会或与我们的团队安排通话。",
      dealSubmission: {
        title: "项目提交",
        description: "有符合我们模式的业务？3分钟告诉我们！",
        name: "姓名",
        company: "公司",
        sector: "行业",
        selectSector: "选择行业",
        logistics: "物流",
        realEstate: "房地产",
        fnb: "餐饮",
        seafood: "海鲜",
        other: "其他",
        dealSummary: "项目简介",
        dealSummaryPlaceholder: "请描述这个机会...",
        ndaAgreement: "我同意在需要时签署保密协议",
        submitButton: "提交项目",
        successTitle: "项目提交已收到",
        successMessage: "感谢您提交项目。我们的团队将审核并尽快与您联系。"
      },
      lpInquiry: {
        title: "LP及合作伙伴咨询",
        description: "有兴趣与我们合作或了解更多关于我们的投资方法？",
        name: "姓名",
        organization: "机构",
        aum: "管理资产规模（可选）",
        aumPlaceholder: "管理资产规模",
        email: "电子邮箱",
        phone: "电话",
        submitButton: "联系我们",
        successTitle: "咨询已收到",
        successMessage: "感谢您的兴趣。我们将尽快联系您讨论合作机会。"
      },
      scheduleCall: {
        title: "安排通话",
        description: "与魏义成一对一交流，讨论您的具体需求。",
        button: "安排30分钟通话"
      }
    }
  };
  
  const handleDealSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: language === 'en' ? translations.en.dealSubmission.successTitle : translations.zh.dealSubmission.successTitle,
      description: language === 'en' ? translations.en.dealSubmission.successMessage : translations.zh.dealSubmission.successMessage,
    });
  };
  
  const handleLPInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: language === 'en' ? translations.en.lpInquiry.successTitle : translations.zh.lpInquiry.successTitle,
      description: language === 'en' ? translations.en.lpInquiry.successMessage : translations.zh.lpInquiry.successMessage,
    });
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
        
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Deal Submission */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">
                  {language === 'en' ? translations.en.dealSubmission.title : translations.zh.dealSubmission.title}
                </h2>
                <p className="text-investment-slate mb-8">
                  {language === 'en' ? translations.en.dealSubmission.description : translations.zh.dealSubmission.description}
                </p>
                
                <form onSubmit={handleDealSubmission} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      {language === 'en' ? translations.en.dealSubmission.name : translations.zh.dealSubmission.name}
                    </label>
                    <Input id="name" placeholder={language === 'en' ? "Your name" : "您的姓名"} required />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-medium">
                      {language === 'en' ? translations.en.dealSubmission.company : translations.zh.dealSubmission.company}
                    </label>
                    <Input id="company" placeholder={language === 'en' ? "Company name" : "公司名称"} required />
                  </div>
                  
                  <div>
                    <label htmlFor="sector" className="block mb-2 text-sm font-medium">
                      {language === 'en' ? translations.en.dealSubmission.sector : translations.zh.dealSubmission.sector}
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'en' ? translations.en.dealSubmission.selectSector : translations.zh.dealSubmission.selectSector} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="logistics">
                          {language === 'en' ? translations.en.dealSubmission.logistics : translations.zh.dealSubmission.logistics}
                        </SelectItem>
                        <SelectItem value="real-estate">
                          {language === 'en' ? translations.en.dealSubmission.realEstate : translations.zh.dealSubmission.realEstate}
                        </SelectItem>
                        <SelectItem value="fnb">
                          {language === 'en' ? translations.en.dealSubmission.fnb : translations.zh.dealSubmission.fnb}
                        </SelectItem>
                        <SelectItem value="seafood">
                          {language === 'en' ? translations.en.dealSubmission.seafood : translations.zh.dealSubmission.seafood}
                        </SelectItem>
                        <SelectItem value="other">
                          {language === 'en' ? translations.en.dealSubmission.other : translations.zh.dealSubmission.other}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="deal-summary" className="block mb-2 text-sm font-medium">
                      {language === 'en' ? translations.en.dealSubmission.dealSummary : translations.zh.dealSubmission.dealSummary}
                    </label>
                    <Textarea 
                      id="deal-summary" 
                      placeholder={language === 'en' ? translations.en.dealSubmission.dealSummaryPlaceholder : translations.zh.dealSubmission.dealSummaryPlaceholder} 
                      required 
                      className="min-h-[120px]" 
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nda" />
                    <label
                      htmlFor="nda"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {language === 'en' ? translations.en.dealSubmission.ndaAgreement : translations.zh.dealSubmission.ndaAgreement}
                    </label>
                  </div>
                  
                  <Button type="submit" className="bg-investment-navy hover:bg-investment-navy/80 text-white w-full">
                    {language === 'en' ? translations.en.dealSubmission.submitButton : translations.zh.dealSubmission.submitButton}
                  </Button>
                </form>
              </div>
              
              {/* LP & Partner Inquiries */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">
                  {language === 'en' ? translations.en.lpInquiry.title : translations.zh.lpInquiry.title}
                </h2>
                <p className="text-investment-slate mb-8">
                  {language === 'en' ? translations.en.lpInquiry.description : translations.zh.lpInquiry.description}
                </p>
                
                <form onSubmit={handleLPInquiry} className="space-y-6">
                  <div>
                    <label htmlFor="lp-name" className="block mb-2 text-sm font-medium">
                      {language === 'en' ? translations.en.lpInquiry.name : translations.zh.lpInquiry.name}
                    </label>
                    <Input id="lp-name" placeholder={language === 'en' ? "Your name" : "您的姓名"} required />
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block mb-2 text-sm font-medium">
                      {language === 'en' ? translations.en.lpInquiry.organization : translations.zh.lpInquiry.organization}
                    </label>
                    <Input id="organization" placeholder={language === 'en' ? "Your organization" : "您的机构"} required />
                  </div>
                  
                  <div>
                    <label htmlFor="aum" className="block mb-2 text-sm font-medium">
                      {language === 'en' ? translations.en.lpInquiry.aum : translations.zh.lpInquiry.aum}
                    </label>
                    <Input id="aum" placeholder={language === 'en' ? translations.en.lpInquiry.aumPlaceholder : translations.zh.lpInquiry.aumPlaceholder} />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      {language === 'en' ? translations.en.lpInquiry.email : translations.zh.lpInquiry.email}
                    </label>
                    <Input id="email" type="email" placeholder={language === 'en' ? "your@email.com" : "您的邮箱@example.com"} required />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                      {language === 'en' ? translations.en.lpInquiry.phone : translations.zh.lpInquiry.phone}
                    </label>
                    <Input id="phone" placeholder={language === 'en' ? "Your phone number" : "您的电话号码"} required />
                  </div>
                  
                  <Button type="submit" className="bg-investment-navy hover:bg-investment-navy/80 text-white w-full">
                    {language === 'en' ? translations.en.lpInquiry.submitButton : translations.zh.lpInquiry.submitButton}
                  </Button>
                </form>
                
                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-xl font-medium mb-4">
                    {language === 'en' ? translations.en.scheduleCall.title : translations.zh.scheduleCall.title}
                  </h3>
                  <p className="text-investment-slate mb-4">
                    {language === 'en' ? translations.en.scheduleCall.description : translations.zh.scheduleCall.description}
                  </p>
                  <Button className="bg-investment-gold hover:bg-investment-gold/90 text-investment-navy w-full">
                    {language === 'en' ? translations.en.scheduleCall.button : translations.zh.scheduleCall.button}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
