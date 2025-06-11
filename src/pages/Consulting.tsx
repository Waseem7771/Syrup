import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import Section from '../components/common/Section';
import { Calendar, Clock, Video, Users, MessageSquare, Star, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import headerImage from '../assets/images/6.png';

const Consulting: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const consultants = [
    {
      name: t('consulting.consultants.consultant1.name'),
      role: t('consulting.consultants.consultant1.role'),
      specialties: t('consulting.consultants.consultant1.specialties', { returnObjects: true }) as string[],
      experience: t('consulting.consultants.consultant1.experience'),
      rating: 5,
      price: '50',
      availability: t('consulting.consultants.consultant1.availability')
    },
    {
      name: t('consulting.consultants.consultant2.name'),
      role: t('consulting.consultants.consultant2.role'),
      specialties: t('consulting.consultants.consultant2.specialties', { returnObjects: true }) as string[],
      experience: t('consulting.consultants.consultant2.experience'),
      rating: 5,
      price: '45',
      availability: t('consulting.consultants.consultant2.availability')
    },
    {
      name: t('consulting.consultants.consultant3.name'),
      role: t('consulting.consultants.consultant3.role'),
      specialties: t('consulting.consultants.consultant3.specialties', { returnObjects: true }) as string[],
      experience: t('consulting.consultants.consultant3.experience'),
      rating: 4,
      price: '40',
      availability: t('consulting.consultants.consultant3.availability')
    },
    {
      name: t('consulting.consultants.consultant4.name'),
      role: t('consulting.consultants.consultant4.role'),
      specialties: t('consulting.consultants.consultant4.specialties', { returnObjects: true }) as string[],
      experience: t('consulting.consultants.consultant4.experience'),
      rating: 5,
      price: '45',
      availability: t('consulting.consultants.consultant4.availability')
    }
  ];

  const consultingTypes = [
    {
      icon: <Video className="text-primary" size={32} />,
      title: t('consulting.types.remote.title'),
      description: t('consulting.types.remote.description'),
      duration: t('consulting.types.remote.duration')
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: t('consulting.types.inPerson.title'),
      description: t('consulting.types.inPerson.description'),
      duration: t('consulting.types.inPerson.duration')
    },
    {
      icon: <MessageSquare className="text-primary" size={32} />,
      title: t('consulting.types.written.title'),
      description: t('consulting.types.written.description'),
      duration: t('consulting.types.written.duration')
    }
  ];

  return (
    <>
      <PageHeader
        title={t('consulting.header.title')}
        subtitle={t('consulting.header.subtitle')}
        backgroundImage={headerImage}
      />

      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{t('consulting.howItWorks.title')}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('consulting.howItWorks.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {consultingTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-light/20 flex items-center justify-center mx-auto mb-4">
                {type.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-2">{type.title}</h3>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <div className="flex items-center justify-center text-gray-500">
                <Clock size={18} className="ml-2" />
                {type.duration}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="light">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{t('consulting.ourConsultants.title')}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('consulting.ourConsultants.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {consultants.map((consultant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="text-center mb-4">
                <div className="w-24 h-24 rounded-full bg-[#E0F2F1] flex items-center justify-center mx-auto mb-4">
                  <User size={48} color="#00796B" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark">{consultant.name}</h3>
                <p className="text-primary">{consultant.role}</p>
              </div>

              <div className="flex items-center justify-center mb-4">
                {[...Array(consultant.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-accent fill-accent" />
                ))}
              </div>

              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600">{consultant.experience}</p>
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(consultant.specialties) && consultant.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary-light/10 text-primary px-2 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center space-y-3">
                <p className="text-sm text-gray-500">{consultant.availability}</p>
                <p className="text-lg font-bold text-primary">
                  ${consultant.price} <span className="text-sm font-normal">{t('consulting.perHour')}</span>
                </p>
                <button className="btn-primary w-full">
                  {t('consulting.bookButton')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="primary">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-6">{t('consulting.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('consulting.cta.description')}
          </p>
          <a href="/contact" className="btn-secondary inline-flex items-center gap-2">
            <Calendar size={18} />
            {t('consulting.cta.button')}
          </a>
        </div>
      </Section>
    </>
  );
};

export default Consulting;