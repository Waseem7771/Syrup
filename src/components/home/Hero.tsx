import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';
import HomeStartupsImage from '../../assets/images/17.png';
import HeroImage from '../../assets/images/17.png';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary to-primary-dark text-white pt-28 pb-16 flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${HomeStartupsImage})` }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 text-gray-100"
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button to="/register" variant="secondary">
                {t('common.startNowButton')}
              </Button>
              <Button to="/syria-cities" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                {language === 'ar' ? 'استكشف المحافظات السورية' : 'Explore Syrian Governorates'}
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <img 
              src={HeroImage}
              alt="Business team" 
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
