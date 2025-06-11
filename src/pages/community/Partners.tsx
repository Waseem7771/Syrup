import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';
import headerImage from '../../assets/images/17.png';

const Partners = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title={t('about.partners.title')}
        subtitle={t('about.partners.subtitle')}
        backgroundImage={headerImage}
      />
      
      <Section>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {language === 'ar'
                ? "نعمل حالياً على بناء شراكات مع مؤسسات رائدة. ترقبوا التحديثات قريباً."
                : "We are currently working on building partnerships with leading organizations. Stay tuned for updates soon."
              }
            </h3>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Partners;