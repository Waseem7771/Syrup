import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import Section from '../components/common/Section';
import { FileText, Download, BookOpen, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import headerImage from '../assets/images/17.png';

const StartupToolkit: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const documents = [
    {
      title: t('startupToolkit.documents.doc1.title'),
      description: t('startupToolkit.documents.doc1.description'),
      icon: <FileText size={24} className="text-primary" />,
      format: 'DOCX / PDF',
      link: '#'
    },
    {
      title: t('startupToolkit.documents.doc2.title'),
      description: t('startupToolkit.documents.doc2.description'),
      icon: <FileText size={24} className="text-primary" />,
      format: 'DOCX / PDF',
      link: '#'
    },
    {
      title: t('startupToolkit.documents.doc3.title'),
      description: t('startupToolkit.documents.doc3.description'),
      icon: <FileText size={24} className="text-primary" />,
      format: 'DOCX / PDF',
      link: '#'
    },
    {
      title: t('startupToolkit.documents.doc4.title'),
      description: t('startupToolkit.documents.doc4.description'),
      icon: <FileText size={24} className="text-primary" />,
      format: 'DOCX / PDF',
      link: '#'
    },
    {
      title: t('startupToolkit.documents.doc5.title'),
      description: t('startupToolkit.documents.doc5.description'),
      icon: <FileText size={24} className="text-primary" />,
      format: 'DOCX / PDF',
      link: '#'
    },
    {
      title: t('startupToolkit.documents.doc6.title'),
      description: t('startupToolkit.documents.doc6.description'),
      icon: <FileText size={24} className="text-primary" />,
      format: 'PDF',
      link: '#'
    }
  ];
  
  const guides = [
    {
      title: t('startupToolkit.guides.guide1.title'),
      description: t('startupToolkit.guides.guide1.description'),
      image: 'https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: t('startupToolkit.guides.guide2.title'),
      description: t('startupToolkit.guides.guide2.description'),
      image: 'https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: t('startupToolkit.guides.guide3.title'),
      description: t('startupToolkit.guides.guide3.description'),
      image: 'https://images.pexels.com/photos/6693645/pexels-photo-6693645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: t('startupToolkit.guides.guide4.title'),
      description: t('startupToolkit.guides.guide4.description'),
      image: 'https://images.pexels.com/photos/2068975/pexels-photo-2068975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    }
  ];
  
  const steps = t('startupToolkit.steps', { returnObjects: true });

  return (
    <>
      <PageHeader
        title={t('startupToolkit.header.title')}
        subtitle={t('startupToolkit.header.subtitle')}
        backgroundImage={headerImage}
      />
      
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{t('startupToolkit.stepsSection.title')}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('startupToolkit.stepsSection.description')}
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-light/30 z-0 hidden md:block"></div>
          
          <div className="space-y-12 relative z-10">
            {steps.map((step: any, index: number) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-right'
                }`}
              >
                <div className={`flex-shrink-0 flex flex-col items-center ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold shadow-lg z-20">
                    {step.number}
                  </div>
                </div>
                
                <div className={`card md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <h3 className="text-xl font-bold text-primary-dark mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      
      <Section background="light">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{t('startupToolkit.documents.title')}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('startupToolkit.documents.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-primary-light/20 text-primary">
                  {doc.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{doc.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">{doc.format}</span>
                    <a 
                      href={doc.link} 
                      className="flex items-center text-primary hover:text-primary-dark transition-colors text-sm font-medium"
                    >
                      <Download size={16} className="ml-1" />
                      {t('startupToolkit.documents.downloadButton')}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{t('startupToolkit.guides.title')}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('startupToolkit.guides.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg h-48">
                <img 
                  src={guide.image} 
                  alt={guide.title} 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-2">{guide.title}</h3>
              <p className="text-gray-600 mb-4">{guide.description}</p>
              <a 
                href={guide.link} 
                className="flex items-center text-primary hover:text-primary-dark transition-colors font-medium"
              >
                {t('startupToolkit.guides.readMoreButton')}
                <ExternalLink size={16} className="mr-1" />
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn-primary">
            {t('startupToolkit.guides.browseAllButton')}
          </a>
        </div>
      </Section>
      
      <Section background="primary">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t('startupToolkit.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('startupToolkit.cta.description')}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="/consulting" className="btn-secondary">
              {t('startupToolkit.cta.bookButton')}
            </a>
            <a href="/contact" className="border border-white text-white hover:bg-white hover:text-primary py-2 px-6 rounded-lg transition-all duration-300">
              {t('startupToolkit.cta.contactButton')}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default StartupToolkit;