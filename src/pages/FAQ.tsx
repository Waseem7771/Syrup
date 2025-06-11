import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import Section from '../components/common/Section';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

const FAQ: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    {
      category: t('faq.categories.companyEstablishment'),
      faqs: [
        {
          question: t('faq.companyEstablishment.q1.question'),
          answer: t('faq.companyEstablishment.q1.answer')
        },
        {
          question: t('faq.companyEstablishment.q2.question'),
          answer: t('faq.companyEstablishment.q2.answer')
        },
        {
          question: t('faq.companyEstablishment.q3.question'),
          answer: t('faq.companyEstablishment.q3.answer')
        }
      ]
    },
    {
      category: t('faq.categories.technical'),
      faqs: [
        {
          question: t('faq.technical.q1.question'),
          answer: t('faq.technical.q1.answer')
        },
        {
          question: t('faq.technical.q2.question'),
          answer: t('faq.technical.q2.answer')
        },
        {
          question: t('faq.technical.q3.question'),
          answer: t('faq.technical.q3.answer')
        }
      ]
    },
    {
      category: t('faq.categories.funding'),
      faqs: [
        {
          question: t('faq.funding.q1.question'),
          answer: t('faq.funding.q1.answer')
        },
        {
          question: t('faq.funding.q2.question'),
          answer: t('faq.funding.q2.answer')
        }
      ]
    },
    {
      category: t('faq.categories.services'),
      faqs: [
        {
          question: t('faq.services.q1.question'),
          answer: t('faq.services.q1.answer')
        },
        {
          question: t('faq.services.q2.question'),
          answer: t('faq.services.q2.answer')
        },
        {
          question: t('faq.services.q3.question'),
          answer: t('faq.services.q3.answer')
        }
      ]
    }
  ];

  const categories = [
    t('faq.categories.all'),
    t('faq.categories.companyEstablishment'),
    t('faq.categories.technical'),
    t('faq.categories.funding'),
    t('faq.categories.services')
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQs = faqCategories.flatMap((category) => {
    return category.faqs
      .filter((faq) => {
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || selectedCategory === category.category;
        return matchesSearch && matchesCategory;
      })
      .map((faq) => ({ ...faq, category: category.category }));
  });

  return (
    <>
      <PageHeader
        title={t('faq.header.title')}
        subtitle={t('faq.header.subtitle')}
      />
      
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="relative mb-6">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full p-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t('faq.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === (index === 0 ? 'all' : category)
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(index === 0 ? 'all' : category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="flex justify-between items-center w-full p-5 text-right bg-white hover:bg-gray-50"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className={activeIndex === index ? 'text-primary font-bold' : 'font-semibold'}>
                      {faq.question}
                    </span>
                    {activeIndex === index ? (
                      <ChevronUp size={20} className="text-primary" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-400" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-5 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-700">{faq.answer}</p>
                          <div className="mt-3 text-xs text-gray-500">
                            <span className="bg-gray-200 px-2 py-1 rounded text-gray-600">{faq.category}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-lg text-gray-600">{t('faq.noResults')}</p>
            </div>
          )}
          
          <div className="mt-12 bg-primary-light/10 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-primary mb-4">{t('faq.needHelp.title')}</h3>
            <p className="text-gray-600 mb-6">
              {t('faq.needHelp.description')}
            </p>
            <a href="/contact" className="btn-primary inline-block">
              {t('faq.needHelp.contactButton')}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default FAQ;