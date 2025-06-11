import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { Calendar, Phone } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';

const CTASection: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-primary mb-4"
              >
                {t('cta.title')}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-600 mb-8"
              >
                {t('cta.description')}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button to="/register" variant="primary" className="flex items-center justify-center gap-2">
                  <Calendar size={18} />
                  {t('cta.registerButton')}
                </Button>
                <Button to="/contact" variant="outline" className="flex items-center justify-center gap-2">
                  <Phone size={18} />
                  {t('cta.contactButton')}
                </Button>
              </motion.div>
            </div>
            
            <div className="bg-primary-dark hidden md:block relative">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Business meeting" 
                className="absolute inset-0 h-full w-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-transparent opacity-90"></div>
              <div className="relative h-full flex items-center z-10 p-12">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-4">{t('cta.consultation.title')}</h3>
                  <p className="mb-6">{t('cta.consultation.description')}</p>
                  <Button to="/consulting" variant="secondary">
                    {t('cta.consultation.button')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;