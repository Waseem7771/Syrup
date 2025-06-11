import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Add this import
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { Building2, Users, User, Shield, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';
import legalHeaderImage from '../../assets/images/1.png';

interface LegalStructureSelectionProps {
  forceHeaderScrolled?: boolean;
}

const LegalStructureSelection: React.FC<LegalStructureSelectionProps> = ({ forceHeaderScrolled }) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const navigate = useNavigate();

  const handleLegalConsultation = () => {
    navigate('/consulting/legal');
  };

  const handleRegistration = () => {
    navigate('/register');
  };

  const pageContent = {
    en: {
      title: 'Legal Structure Selection Guide',
      subtitle: 'Navigate Syrian business law with confidence. Choose the optimal legal structure for your venture according to Syrian Companies Law Article 6.',
      intro: 'The Syrian Companies Law recognizes five distinct legal structures. Each offers unique advantages, responsibilities, and operational frameworks designed for different business needs.',
      keyMetrics: 'Key Metrics',
      liability: 'Liability',
      capitalReq: 'Capital Requirement',
      partners: 'Partners',
      management: 'Management',
      suitableFor: 'Suitable For',
      getStarted: 'Ready to Establish Your Business?',
      getStartedDesc: 'Our legal specialists provide comprehensive guidance to ensure your business structure aligns with your goals and complies with Syrian regulations.',
      consultButton: 'Schedule Legal Consultation',
      registerButton: 'Begin Registration Process',
      unlimited: 'Unlimited',
      limited: 'Limited to Investment',
      none: 'None Required',
      varies: 'Varies',
      all: 'All Partners',
      general: 'General Partners Only',
      professional: 'Professional Board',
      shareholders: 'Shareholders'
    },
    ar: {
      title: 'دليل اختيار الهيكل القانوني',
      subtitle: 'تنقل في قانون الأعمال السوري بثقة. اختر الهيكل القانوني الأمثل لمشروعك وفقاً للمادة 6 من قانون الشركات السوري.',
      intro: 'يعترف قانون الشركات السوري بخمسة هياكل قانونية مميزة. كل منها يقدم مزايا ومسؤوليات وأطر تشغيلية فريدة مصممة لاحتياجات الأعمال المختلفة.',
      keyMetrics: 'المقاييس الرئيسية',
      liability: 'المسؤولية',
      capitalReq: 'متطلبات رأس المال',
      partners: 'الشركاء',
      management: 'الإدارة',
      suitableFor: 'مناسب لـ',
      getStarted: 'مستعد لتأسيس عملك؟',
      getStartedDesc: 'متخصصونا القانونيون يقدمون إرشادات شاملة لضمان توافق هيكل عملك مع أهدافك ومع اللوائح السورية.',
      consultButton: 'جدولة استشارة قانونية',
      registerButton: 'بدء عملية التسجيل',
      unlimited: 'غير محدودة',
      limited: 'محدودة بالاستثمار',
      none: 'غير مطلوب',
      varies: 'متغير',
      all: 'جميع الشركاء',
      general: 'الشركاء العامون فقط',
      professional: 'مجلس مهني',
      shareholders: 'المساهمون'
    }
  };

  const legalTypes = [
    {
      key: 'solidarity',
      icon: <Users className="w-12 h-12" />,
      color: 'from-primary to-primary-dark',
      metrics: {
        liability: 'unlimited',
        capital: 'none',
        partners: '2+',
        management: 'all'
      },
      en: {
        name: 'Solidarity Company',
        arabicName: 'شركة التضامن',
        shortDesc: 'Joint unlimited liability partnership',
        description: 'All partners share unlimited joint liability for company obligations. Perfect for small professional services where trust and shared responsibility are paramount.',
        features: [
          'Unlimited joint liability for all partners',
          'No minimum capital requirements',
          'Shared management responsibilities',
          'Simple formation process'
        ],
        suitableFor: 'Professional services, family businesses, small partnerships',
        pros: [
          'Quick and simple formation',
          'Complete management flexibility',
          'No capital requirements',
          'Direct tax benefits'
        ],
        cons: [
          'Personal assets at risk',
          'Difficult capital raising',
          'Partner dependency',
          'Limited growth potential'
        ]
      },
      ar: {
        name: 'شركة التضامن',
        arabicName: 'شركة التضامن',
        shortDesc: 'شراكة مسؤولية تضامنية غير محدودة',
        description: 'جميع الشركاء يتشاركون المسؤولية التضامنية غير المحدودة عن التزامات الشركة. مثالية للخدمات المهنية الصغيرة حيث الثقة والمسؤولية المشتركة أساسية.',
        features: [
          'مسؤولية تضامنية غير محدودة لجميع الشركاء',
          'لا توجد متطلبات حد أدنى لرأس المال',
          'مسؤوليات إدارية مشتركة',
          'عملية تأسيس بسيطة'
        ],
        suitableFor: 'الخدمات المهنية، الأعمال العائلية، الشراكات الصغيرة',
        pros: [
          'تأسيس سريع وبسيط',
          'مرونة إدارية كاملة',
          'لا توجد متطلبات رأسمالية',
          'مزايا ضريبية مباشرة'
        ],
        cons: [
          'الأصول الشخصية في خطر',
          'صعوبة جمع رؤوس الأموال',
          'الاعتماد على الشركاء',
          'إمكانيات نمو محدودة'
        ]
      }
    },
    {
      key: 'limited_partnership',
      icon: <Shield className="w-12 h-12" />,
      color: 'from-accent to-accent-dark',
      metrics: {
        liability: 'varies',
        capital: 'varies',
        partners: '2+',
        management: 'general'
      },
      en: {
        name: 'Limited Partnership',
        arabicName: 'شركة التوصية',
        shortDesc: 'Mixed liability structure with general and limited partners',
        description: 'Combines active general partners with unlimited liability and passive limited partners whose liability is restricted to their investment amount.',
        features: [
          'Two distinct partner categories',
          'General partners manage operations',
          'Limited partners provide capital only',
          'Flexible capital structure'
        ],
        suitableFor: 'Investment ventures, businesses needing passive investors',
        pros: [
          'Attracts passive investment',
          'Limited partner protection',
          'Operational expertise retained',
          'Flexible profit distribution'
        ],
        cons: [
          'Complex partner dynamics',
          'General partner liability remains',
          'Limited partner restrictions',
          'Potential conflicts of interest'
        ]
      },
      ar: {
        name: 'شركة التوصية',
        arabicName: 'شركة التوصية',
        shortDesc: 'هيكل مسؤولية مختلط مع شركاء عامين ومحدودين',
        description: 'تجمع بين الشركاء العامين النشطين ذوي المسؤولية غير المحدودة والشركاء المحدودين السلبيين الذين تقتصر مسؤوليتهم على مبلغ استثمارهم.',
        features: [
          'فئتان مميزتان من الشركاء',
          'الشركاء العامون يديرون العمليات',
          'الشركاء المحدودون يقدمون رأس المال فقط',
          'هيكل رأسمالي مرن'
        ],
        suitableFor: 'مشاريع الاستثمار، الأعمال التي تحتاج مستثمرين سلبيين',
        pros: [
          'يجذب الاستثمار السلبي',
          'حماية الشريك المحدود',
          'الاحتفاظ بالخبرة التشغيلية',
          'توزيع أرباح مرن'
        ],
        cons: [
          'ديناميكيات شركاء معقدة',
          'مسؤولية الشريك العام تبقى',
          'قيود الشريك المحدود',
          'تضارب محتمل في المصالح'
        ]
      }
    },
    {
      key: 'silent_partnership',
      icon: <User className="w-12 h-12" />,
      color: 'from-gray-600 to-gray-800',
      metrics: {
        liability: 'unlimited',
        capital: 'none',
        partners: '2+',
        management: 'varies'
      },
      en: {
        name: 'Silent Partnership',
        arabicName: 'شركة المحاصة',
        shortDesc: 'Hidden partnership without separate legal entity',
        description: 'An internal arrangement between partners that remains hidden from third parties. No separate legal personality is created.',
        features: [
          'No separate legal entity',
          'Hidden from public view',
          'Internal profit-sharing agreement',
          'Based on contractual arrangement'
        ],
        suitableFor: 'Temporary ventures, confidential partnerships',
        pros: [
          'Maximum privacy',
          'Simple structure',
          'Flexible arrangements',
          'No registration requirements'
        ],
        cons: [
          'No legal entity protection',
          'Partners personally liable',
          'Limited business scope',
          'Enforcement difficulties'
        ]
      },
      ar: {
        name: 'شركة المحاصة',
        arabicName: 'شركة المحاصة',
        shortDesc: 'شراكة مخفية بدون كيان قانوني منفصل',
        description: 'ترتيب داخلي بين الشركاء يبقى مخفياً عن الأطراف الثالثة. لا يتم إنشاء شخصية قانونية منفصلة.',
        features: [
          'لا يوجد كيان قانوني منفصل',
          'مخفية عن الأنظار العامة',
          'اتفاقية تقاسم أرباح داخلية',
          'تقوم على ترتيب تعاقدي'
        ],
        suitableFor: 'المشاريع المؤقتة، الشراكات السرية',
        pros: [
          'خصوصية قصوى',
          'هيكل بسيط',
          'ترتيبات مرنة',
          'لا توجد متطلبات تسجيل'
        ],
        cons: [
          'لا توجد حماية كيان قانوني',
          'الشركاء مسؤولون شخصياً',
          'نطاق عمل محدود',
          'صعوبات في التنفيذ'
        ]
      }
    },
    {
      key: 'llc',
      icon: <Building2 className="w-12 h-12" />,
      color: 'from-primary-dark to-accent',
      metrics: {
        liability: 'limited',
        capital: 'varies',
        partners: '2-50',
        management: 'all'
      },
      en: {
        name: 'Limited Liability Company',
        arabicName: 'الشركة محدودة المسؤولية',
        shortDesc: 'Popular structure with liability protection',
        description: 'Partners enjoy limited liability protection while maintaining operational flexibility. Ideal balance between protection and simplicity.',
        features: [
          'Limited liability for all partners',
          '2-50 partner limit',
          'Separate legal entity',
          'Transferable ownership interests'
        ],
        suitableFor: 'SMEs, family businesses, professional services',
        pros: [
          'Personal asset protection',
          'Operational flexibility',
          'Easier ownership transfer',
          'Professional credibility'
        ],
        cons: [
          'Formation complexity',
          'Ongoing compliance',
          'Partner number restrictions',
          'Higher formation costs'
        ]
      },
      ar: {
        name: 'الشركة محدودة المسؤولية',
        arabicName: 'الشركة محدودة المسؤولية',
        shortDesc: 'هيكل شائع مع حماية المسؤولية',
        description: 'يتمتع الشركاء بحماية المسؤولية المحدودة مع الاحتفاظ بالمرونة التشغيلية. توازن مثالي بين الحماية والبساطة.',
        features: [
          'مسؤولية محدودة لجميع الشركاء',
          'حد 2-50 شريك',
          'كيان قانوني منفصل',
          'حصص ملكية قابلة للتحويل'
        ],
        suitableFor: 'المؤسسات الصغيرة والمتوسطة، الأعمال العائلية، الخدمات المهنية',
        pros: [
          'حماية الأصول الشخصية',
          'مرونة تشغيلية',
          'سهولة نقل الملكية',
          'مصداقية مهنية'
        ],
        cons: [
          'تعقيد التأسيس',
          'امتثال مستمر',
          'قيود عدد الشركاء',
          'تكاليف تأسيس أعلى'
        ]
      }
    },
    {
      key: 'jsc',
      icon: <TrendingUp className="w-12 h-12" />,
      color: 'from-accent-dark to-primary',
      metrics: {
        liability: 'limited',
        capital: 'varies',
        partners: 'unlimited',
        management: 'professional'
      },
      en: {
        name: 'Joint Stock Company',
        arabicName: 'الشركة المساهمة المغفلة',
        shortDesc: 'Corporate structure for large enterprises',
        description: 'Full corporate structure with share capital, professional management, and potential for public trading. Designed for substantial business operations.',
        features: [
          'Share-based capital structure',
          'Professional board governance',
          'Potential public trading',
          'Unlimited shareholder capacity'
        ],
        suitableFor: 'Large enterprises, public companies, major projects',
        pros: [
          'Access to capital markets',
          'Professional governance',
          'Unlimited growth potential',
          'Enhanced credibility'
        ],
        cons: [
          'Complex formation process',
          'Extensive regulations',
          'High compliance costs',
          'Public disclosure requirements'
        ]
      },
      ar: {
        name: 'الشركة المساهمة المغفلة',
        arabicName: 'الشركة المساهمة المغفلة',
        shortDesc: 'هيكل شركات للمؤسسات الكبيرة',
        description: 'هيكل شركة كامل مع رأس مال سهمي وإدارة مهنية وإمكانية التداول العام. مصمم للعمليات التجارية الكبيرة.',
        features: [
          'هيكل رأسمالي قائم على الأسهم',
          'حوكمة مجلس مهني',
          'إمكانية التداول العام',
          'قدرة مساهمين غير محدودة'
        ],
        suitableFor: 'المؤسسات الكبيرة، الشركات العامة، المشاريع الرئيسية',
        pros: [
          'الوصول إلى أسواق رأس المال',
          'حوكمة مهنية',
          'إمكانيات نمو غير محدودة',
          'مصداقية معززة'
        ],
        cons: [
          'عملية تأسيس معقدة',
          'لوائح واسعة',
          'تكاليف امتثال عالية',
          'متطلبات إفصاح عامة'
        ]
      }
    }
  ];

  const content = pageContent[language];

  const getMetricDisplay = (metric: string) => {
    switch (metric) {
      case 'unlimited': return content.unlimited;
      case 'limited': return content.limited;
      case 'none': return content.none;
      case 'varies': return content.varies;
      case 'all': return content.all;
      case 'general': return content.general;
      case 'professional': return content.professional;
      case 'shareholders': return content.shareholders;
      default: return metric;
    }
  };

  return (
    <>
      <PageHeader
        title={content.title}
        subtitle={content.subtitle}
        backgroundImage={legalHeaderImage}
      />

      {/* Introduction */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-700 leading-relaxed">
              {content.intro}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Legal Structures */}
      <Section background="light">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {legalTypes.map((type, index) => (
              <motion.div
                key={type.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Header Section */}
                  <div className={`bg-gradient-to-br ${type.color} p-8 text-white flex flex-col justify-center`}>
                    <div className="text-center">
                      <div className="bg-white bg-opacity-20 rounded-3xl p-6 inline-block mb-6">
                        {type.icon}
                      </div>
                      <h3 className="text-3xl font-bold mb-3">{type[language].name}</h3>
                      <p className="text-white text-opacity-90 text-lg">{type[language].shortDesc}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-2 p-8">
                    <div className="grid md:grid-cols-2 gap-8 h-full">
                      {/* Left Column */}
                      <div>
                        <h4 className="text-xl font-bold text-primary mb-4">{content.keyMetrics}</h4>
                        <div className="space-y-4 mb-6">
                          <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600">{content.liability}</span>
                            <span className="font-medium text-primary">{getMetricDisplay(type.metrics.liability)}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600">{content.partners}</span>
                            <span className="font-medium text-primary">{type.metrics.partners}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600">{content.capitalReq}</span>
                            <span className="font-medium text-primary">{getMetricDisplay(type.metrics.capital)}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600">{content.management}</span>
                            <span className="font-medium text-primary">{getMetricDisplay(type.metrics.management)}</span>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-xl">
                          <h5 className="font-bold text-primary mb-2">{content.suitableFor}</h5>
                          <p className="text-gray-700 text-sm">{type[language].suitableFor}</p>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          {type[language].description}
                        </p>

                        {/* Pros and Cons */}
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                              {language === 'ar' ? 'المزايا' : 'Advantages'}
                            </h5>
                            <ul className="space-y-2">
                              {type[language].pros.map((pro, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                  <span className="text-green-500 mt-1 text-xs">✓</span>
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                              {language === 'ar' ? 'التحديات' : 'Challenges'}
                            </h5>
                            <ul className="space-y-2">
                              {type[language].cons.map((con, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                  <span className="text-red-500 mt-1 text-xs">✗</span>
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">⚖️</div>
            <h2 className="text-3xl font-bold text-white mb-4">
              {content.getStarted}
            </h2>
            <p className="text-accent-light text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              {content.getStartedDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleLegalConsultation}
                className="bg-accent-light hover:bg-white text-primary font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {content.consultButton}
              </button>
              <button 
                onClick={handleRegistration}
                className="bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {content.registerButton}
              </button>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default LegalStructureSelection;