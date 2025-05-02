
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage } from '@/contexts/LanguageContext';

interface TeamMemberProps {
  name: string;
  nameZh?: string;
  role: string;
  roleZh?: string;
  description: string[];
  descriptionZh?: string[];
  delay: number;
  isFounder?: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  nameZh,
  role,
  roleZh,
  description,
  descriptionZh,
  delay,
  isFounder = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const delayClass = `animate-fade-in-delay-${delay}`;
  const { language } = useLanguage();

  const displayName = language === 'en' ? name : (nameZh || name);
  const displayRole = language === 'en' ? role : (roleZh || role);
  const displayDescription = language === 'en' ? description : (descriptionZh || description);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div
          className={`bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:scale-105 ${delayClass} opacity-0`}
        >
          <div className="bg-investment-light-gray h-40 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-investment-navy text-white flex items-center justify-center text-2xl font-serif">
              {displayName.charAt(0)}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 font-serif text-investment-navy">{displayName}</h3>
            <p className="text-investment-slate">{displayRole}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">{displayName}</DialogTitle>
          <DialogDescription className="text-lg text-investment-navy font-medium">
            {displayRole}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 space-y-4">
          {displayDescription.map((paragraph, index) => (
            <p key={index} className="text-investment-slate">
              {paragraph}
            </p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMember;
