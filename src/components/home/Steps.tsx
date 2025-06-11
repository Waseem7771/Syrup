import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, FileCheck, Award } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';

const Steps: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const steps = [
    {
      icon: <ClipboardList size={36} className="text-primary" />,
      title: t('steps.step1.title'),
      description: t('steps.step1.description')
    },
    {
      icon: <FileCheck size={36} className="text-primary" />,
      title: t('steps.step2.title'),
      description: t('steps.step2.description')
    },
    {
      icon: <Award size={36} className="text-primary" />,
      title: t('steps.step3.title'),
      description: t('steps.step3.description')
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{t('steps.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('steps.description')}</p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className="card flex flex-col items-center text-center p-8"
            >
              <div className="w-16 h-16 rounded-full bg-primary-light/20 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                {`${index + 1}. ${step.title}`}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Steps;