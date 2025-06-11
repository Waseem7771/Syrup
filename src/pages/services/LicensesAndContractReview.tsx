import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { useLanguage } from '../../contexts/LanguageContext';
import licensesHeaderImage from '../../assets/images/2.png';
import {
  FileText,
  Shield,
  Scale,
  CheckCircle,
  AlertTriangle,
  Clock,
  Users,
  Building,
  Gavel,
  BookOpen,
  Award,
  Search,
  Download,
  Eye,
  Calendar,
  ArrowRight,
  Star,
  Lock,
  Zap,
  Target,
  TrendingUp,
  FileCheck,
  ClipboardCheck,
  Briefcase,
  Globe,
  Phone,
  Mail
} from 'lucide-react';

const LicensesAndContractReview: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('licenses');
  const [selectedService, setSelectedService] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    reviewed: 0,
    compliance: 0,
    saved: 0
  });

  // Animate stats on load
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats(prev => ({
        reviewed: Math.min(prev.reviewed + 8, 450),
        compliance: Math.min(prev.compliance + 2, 99),
        saved: Math.min(prev.saved + 3, 75)
      }));
    }, 60);

    setTimeout(() => clearInterval(interval), 3000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      title: "Licenses & Contract Review",
      subtitle: "Comprehensive legal document review and licensing assistance for Syrian businesses - ensuring full compliance with local regulations and protecting your business interests",
      overview: "Legal Document Expertise",
      overviewDesc: "Our expert legal team provides thorough review and analysis of business licenses, contracts, and legal documents. We ensure compliance with Syrian commercial law while protecting your business interests and minimizing legal risks.",
      
      // Services
      licensesTitle: "Business Licensing Services",
      contractsTitle: "Contract Review & Drafting",
      complianceTitle: "Legal Compliance Solutions",
      
      // Process
      processTitle: "Our Review Process",
      
      // Specializations
      specializationsTitle: "Legal Specializations",
      
      // CTA
      ctaTitle: "Need Expert Legal Document Review?",
      ctaDesc: "Protect your business with professional legal document review and compliance services tailored for Syrian market regulations.",
      
      // Buttons
      getQuote: "Get Legal Quote",
      bookConsultation: "Book Consultation",
      downloadGuide: "Download Guide",
      reviewSample: "Review Sample"
    },
    ar: {
      title: "مراجعة التراخيص والعقود",
      subtitle: "مراجعة شاملة للوثائق القانونية ومساعدة الترخيص للشركات السورية - ضمان الامتثال الكامل للوائح المحلية وحماية مصالح أعمالك",
      overview: "خبرة الوثائق القانونية",
      overviewDesc: "يقدم فريقنا القانوني المتخصص مراجعة وتحليل شامل لتراخيص الأعمال والعقود والوثائق القانونية. نضمن الامتثال للقانون التجاري السوري مع حماية مصالح أعمالك وتقليل المخاطر القانونية.",
      
      // Services
      licensesTitle: "خدمات ترخيص الأعمال",
      contractsTitle: "مراجعة وصياغة العقود",
      complianceTitle: "حلول الامتثال القانوني",
      
      // Process
      processTitle: "عملية المراجعة لدينا",
      
      // Specializations
      specializationsTitle: "التخصصات القانونية",
      
      // CTA
      ctaTitle: "تحتاج مراجعة قانونية خبيرة للوثائق؟",
      ctaDesc: "احم أعمالك بخدمات مراجعة الوثائق القانونية والامتثال المهنية المصممة خصيصاً لأنظمة السوق السورية.",
      
      // Buttons
      getQuote: "احصل على عرض سعر قانوني",
      bookConsultation: "احجز استشارة",
      downloadGuide: "تحميل الدليل",
      reviewSample: "مراجعة نموذج"
    }
  };

  const serviceCategories = [
    {
      id: 'licenses',
      icon: <Award className="w-6 h-6" />,
      title: { en: 'Business Licenses', ar: 'تراخيص الأعمال' },
      count: { en: '12 Types', ar: '12 نوع' }
    },
    {
      id: 'contracts',
      icon: <FileText className="w-6 h-6" />,
      title: { en: 'Contract Review', ar: 'مراجعة العقود' },
      count: { en: '8 Categories', ar: '8 فئات' }
    },
    {
      id: 'compliance',
      icon: <Shield className="w-6 h-6" />,
      title: { en: 'Compliance', ar: 'الامتثال' },
      count: { en: '15 Areas', ar: '15 مجال' }
    }
  ];

  const licenseServices = [
    {
      icon: <Building className="w-8 h-8" />,
      title: { en: 'Commercial Registration', ar: 'السجل التجاري' },
      description: { en: 'Complete assistance with commercial registration and business setup in Syria', ar: 'مساعدة كاملة في السجل التجاري وإعداد الأعمال في سوريا' },
      features: {
        en: ['Registration application', 'Document preparation', 'Authority liaison', 'Status tracking'],
        ar: ['طلب التسجيل', 'إعداد الوثائق', 'التواصل مع السلطات', 'تتبع الحالة']
      },
      timeline: { en: '2-4 weeks', ar: '2-4 أسابيع' },
      complexity: { en: 'Medium', ar: 'متوسط' }
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: { en: 'Industry-Specific Licenses', ar: 'تراخيص خاصة بالصناعة' },
      description: { en: 'Specialized licensing for various industries including manufacturing, healthcare, and technology', ar: 'ترخيص متخصص لمختلف الصناعات بما في ذلك التصنيع والرعاية الصحية والتكنولوجيا' },
      features: {
        en: ['Industry analysis', 'Regulatory research', 'Application support', 'Compliance monitoring'],
        ar: ['تحليل الصناعة', 'البحث التنظيمي', 'دعم التطبيق', 'مراقبة الامتثال']
      },
      timeline: { en: '3-8 weeks', ar: '3-8 أسابيع' },
      complexity: { en: 'High', ar: 'عالي' }
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: { en: 'Import/Export Permits', ar: 'تصاريح الاستيراد/التصدير' },
      description: { en: 'Comprehensive support for international trade licensing and customs procedures', ar: 'دعم شامل لترخيص التجارة الدولية وإجراءات الجمارك' },
      features: {
        en: ['Trade license review', 'Customs documentation', 'Regulatory compliance', 'Cross-border procedures'],
        ar: ['مراجعة رخصة التجارة', 'وثائق الجمارك', 'الامتثال التنظيمي', 'إجراءات عبر الحدود']
      },
      timeline: { en: '4-6 weeks', ar: '4-6 أسابيع' },
      complexity: { en: 'High', ar: 'عالي' }
    }
  ];

  const contractServices = [
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: { en: 'Contract Drafting', ar: 'صياغة العقود' },
      description: { en: 'Professional drafting of comprehensive business contracts tailored to Syrian law', ar: 'صياغة مهنية لعقود الأعمال الشاملة المصممة خصيصاً للقانون السوري' },
      types: {
        en: ['Employment contracts', 'Partnership agreements', 'Service contracts', 'Supply agreements'],
        ar: ['عقود العمل', 'اتفاقيات الشراكة', 'عقود الخدمة', 'اتفاقيات التوريد']
      }
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: { en: 'Contract Analysis', ar: 'تحليل العقود' },
      description: { en: 'Thorough review and risk assessment of existing contracts and agreements', ar: 'مراجعة شاملة وتقييم المخاطر للعقود والاتفاقيات الحالية' },
      types: {
        en: ['Risk identification', 'Clause analysis', 'Compliance check', 'Amendment recommendations'],
        ar: ['تحديد المخاطر', 'تحليل البنود', 'فحص الامتثال', 'توصيات التعديل']
      }
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: { en: 'Legal Compliance Review', ar: 'مراجعة الامتثال القانوني' },
      description: { en: 'Ensure all contracts meet Syrian legal requirements and industry standards', ar: 'ضمان أن جميع العقود تلبي المتطلبات القانونية السورية ومعايير الصناعة' },
      types: {
        en: ['Regulatory compliance', 'Industry standards', 'Legal requirements', 'Best practices'],
        ar: ['الامتثال التنظيمي', 'معايير الصناعة', 'المتطلبات القانونية', 'أفضل الممارسات']
      }
    }
  ];

  const reviewProcess = [
    {
      step: 1,
      icon: <FileText className="w-6 h-6" />,
      title: { en: 'Document Submission', ar: 'تقديم الوثائق' },
      description: { en: 'Secure upload of documents for initial review', ar: 'تحميل آمن للوثائق للمراجعة الأولية' },
      duration: { en: '1 day', ar: 'يوم واحد' }
    },
    {
      step: 2,
      icon: <Eye className="w-6 h-6" />,
      title: { en: 'Initial Assessment', ar: 'التقييم الأولي' },
      description: { en: 'Comprehensive review and risk identification', ar: 'مراجعة شاملة وتحديد المخاطر' },
      duration: { en: '3-5 days', ar: '3-5 أيام' }
    },
    {
      step: 3,
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: { en: 'Detailed Analysis', ar: 'التحليل التفصيلي' },
      description: { en: 'In-depth legal analysis and compliance check', ar: 'تحليل قانوني متعمق وفحص الامتثال' },
      duration: { en: '5-7 days', ar: '5-7 أيام' }
    },
    {
      step: 4,
      icon: <CheckCircle className="w-6 h-6" />,
      title: { en: 'Report & Recommendations', ar: 'التقرير والتوصيات' },
      description: { en: 'Comprehensive report with actionable recommendations', ar: 'تقرير شامل مع توصيات قابلة للتنفيذ' },
      duration: { en: '2-3 days', ar: '2-3 أيام' }
    }
  ];

  const legalSpecializations = [
    {
      icon: <Building className="w-12 h-12" />,
      title: { en: 'Corporate Law', ar: 'قانون الشركات' },
      description: { en: 'Company formation, mergers, acquisitions', ar: 'تكوين الشركات والاندماج والاستحواذ' },
      cases: { en: '150+ cases', ar: '150+ قضية' }
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: { en: 'International Trade', ar: 'التجارة الدولية' },
      description: { en: 'Cross-border transactions, import/export', ar: 'المعاملات عبر الحدود والاستيراد/التصدير' },
      cases: { en: '200+ cases', ar: '200+ قضية' }
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: { en: 'Regulatory Compliance', ar: 'الامتثال التنظيمي' },
      description: { en: 'Industry regulations, government compliance', ar: 'أنظمة الصناعة والامتثال الحكومي' },
      cases: { en: '300+ cases', ar: '300+ قضية' }
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: { en: 'Employment Law', ar: 'قانون العمل' },
      description: { en: 'Labor contracts, employment regulations', ar: 'عقود العمل وأنظمة التوظيف' },
      cases: { en: '180+ cases', ar: '180+ قضية' }
    }
  ];

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={licensesHeaderImage}
      />

      {/* Legal Document Overview */}
      <Section background="white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">{c.overview}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {c.overviewDesc}
              </p>
              
              {/* Legal Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-accent">{animatedStats.reviewed}+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'وثيقة مراجعة' : 'Documents Reviewed'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent to-accent-dark rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold">{animatedStats.compliance}%</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'معدل الامتثال' : 'Compliance Rate'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold">{animatedStats.saved}%</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'توفير في التكاليف' : 'Cost Savings'}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Gavel className="w-5 h-5" />
                  {c.getQuote}
                </button>
                <button 
                  className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {c.downloadGuide}
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Legal Document Mockup */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-accent overflow-hidden transform rotate-3">
                <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-accent-light flex items-center gap-2">
                      <Scale className="w-6 h-6" />
                      {language === 'ar' ? 'مراجعة الوثائق القانونية' : 'Legal Document Review'}
                    </h3>
                    <div className="bg-white bg-opacity-20 rounded-full px-3 py-1 text-xs">
                      {language === 'ar' ? 'معتمد' : 'Certified'}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="text-accent-light text-sm">{language === 'ar' ? 'حالة المراجعة' : 'Review Status'}</div>
                      <div className="text-lg font-bold flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        {language === 'ar' ? 'مكتمل' : 'Complete'}
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="text-accent-light text-sm">{language === 'ar' ? 'درجة المخاطر' : 'Risk Level'}</div>
                      <div className="text-lg font-bold text-green-300">{language === 'ar' ? 'منخفض' : 'Low'}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-medium text-green-800">{language === 'ar' ? 'امتثال كامل' : 'Full Compliance'}</div>
                        <div className="text-sm text-green-600">{language === 'ar' ? 'جميع البنود متوافقة' : 'All clauses compliant'}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-medium text-blue-800">{language === 'ar' ? 'وثائق مكتملة' : 'Documents Complete'}</div>
                        <div className="text-sm text-blue-600">{language === 'ar' ? 'جميع المتطلبات مستوفاة' : 'All requirements met'}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                      <Clock className="w-5 h-5 text-yellow-600" />
                      <div>
                        <div className="font-medium text-yellow-800">{language === 'ar' ? 'مراجعة سريعة' : 'Fast Review'}</div>
                        <div className="text-sm text-yellow-600">{language === 'ar' ? 'انتهت في 3 أيام' : 'Completed in 3 days'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Legal Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-6 top-12 bg-amber-500 text-white p-4 rounded-2xl shadow-xl"
              >
                <Award className="w-8 h-8" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute -left-6 bottom-12 bg-emerald-500 text-white p-4 rounded-2xl shadow-xl"
              >
                <Shield className="w-8 h-8" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Service Categories Tabs */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {language === 'ar' ? 'خدماتنا القانونية' : 'Our Legal Services'}
          </motion.h2>

          {/* Service Category Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-accent">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-primary text-accent-light shadow-lg'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {category.icon}
                  <div className="text-left">
                    <div className="font-medium">{category.title[language]}</div>
                    <div className="text-xs opacity-75">{category.count[language]}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'licenses' && (
              <motion.div
                key="licenses"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-primary text-center mb-8">{c.licensesTitle}</h3>
                <div className="space-y-6">
                  {licenseServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg border-l-4 border-primary p-6 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="grid md:grid-cols-3 gap-6 items-start">
                        <div className="md:col-span-2">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="bg-primary text-accent-light rounded-2xl p-3">
                              {service.icon}
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-primary">{service.title[language]}</h4>
                              <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {service.timeline[language]}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Target className="w-4 h-4" />
                                  {service.complexity[language]}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700 mb-4">{service.description[language]}</p>
                        </div>
                        
                        <div className="bg-gray-50 rounded-xl p-4">
                          <h5 className="font-bold text-primary mb-3">{language === 'ar' ? 'الخدمات المشمولة:' : 'Included Services:'}</h5>
                          <div className="space-y-2">
                            {service.features[language].map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'contracts' && (
              <motion.div
                key="contracts"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-primary text-center mb-8">{c.contractsTitle}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {contractServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg border-t-4 border-accent p-6 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="text-center mb-6">
                        <div className="bg-accent text-white rounded-2xl p-4 inline-block mb-4">
                          {service.icon}
                        </div>
                        <h4 className="text-xl font-bold text-primary mb-3">{service.title[language]}</h4>
                        <p className="text-gray-700 text-sm">{service.description[language]}</p>
                      </div>
                      
                      <div className="space-y-2">
                        {service.types[language].map((type, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                            <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm text-gray-700">{type}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'compliance' && (
              <motion.div
                key="compliance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-primary text-center mb-8">{c.complianceTitle}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {legalSpecializations.map((spec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent"
                    >
                      <div className="text-primary mb-4">
                        {spec.icon}
                      </div>
                      <h4 className="text-lg font-bold text-primary mb-2">{spec.title[language]}</h4>
                      <p className="text-gray-600 text-sm mb-4">{spec.description[language]}</p>
                      <div className="bg-accent text-white rounded-full px-3 py-1 text-xs font-medium">
                        {spec.cases[language]}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>

      {/* Review Process Timeline */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.processTitle}
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {reviewProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step Number Circle */}
                  <div className="bg-white border-4 border-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                    <span className="text-primary font-bold text-xl">{step.step}</span>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="text-accent mb-3 flex justify-center">
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-2">{step.title[language]}</h3>
                      <p className="text-gray-600 text-sm mb-3">{step.description[language]}</p>
                      <div className="bg-accent text-white rounded-full px-3 py-1 text-xs font-medium inline-block">
                        {step.duration[language]}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-6">⚖️</div>
              <h2 className="text-3xl font-bold text-accent-light mb-4">
                {c.ctaTitle}
              </h2>
              <p className="text-accent-light text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                {c.ctaDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-accent-light hover:bg-white text-primary font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  {c.bookConsultation}
                </button>
                <button 
                  className="bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  {c.reviewSample}
                </button>
                <button 
                  className="bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-20 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {c.downloadGuide}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default LicensesAndContractReview;