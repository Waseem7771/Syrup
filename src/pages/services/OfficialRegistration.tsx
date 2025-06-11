import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { Building, FileText, Users, Shield, CheckCircle2, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import officialHeaderImage from '../../assets/images/17.png';

const OfficialRegistration: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  };

  const handleConsulting = () => {
    navigate('/consulting/legal');
  };

  const content = {
    en: {
      title: "Official Registration with Government Authorities",
      subtitle: "Complete your business registration with all required Syrian government departments",
      overview: "Complete Registration Process",
      overviewDesc: "Official registration involves registering your business with multiple Syrian government authorities to ensure full legal compliance and operational authorization.",
      authorities: "Registration Authorities",
      timeline: "Registration Timeline",
      requirements: "Documentation Requirements",
      process: "Step-by-Step Process",
      fees: "Registration Fees",
      benefits: "Benefits of Official Registration",
      cta: "Ready to Complete Your Official Registration?",
      ctaDesc: "Our experts will handle all government registrations and ensure full compliance with Syrian regulations.",
      registerBtn: "Start Registration",
      consultBtn: "Get Expert Guidance"
    },
    ar: {
      title: "التسجيل الرسمي لدى الجهات الحكومية",
      subtitle: "أكمل تسجيل شركتك لدى جميع الدوائر الحكومية السورية المطلوبة",
      overview: "عملية التسجيل الكاملة",
      overviewDesc: "التسجيل الرسمي يتضمن تسجيل شركتك لدى عدة جهات حكومية سورية لضمان الامتثال القانوني الكامل والترخيص التشغيلي.",
      authorities: "جهات التسجيل",
      timeline: "الجدول الزمني للتسجيل",
      requirements: "متطلبات الوثائق",
      process: "العملية خطوة بخطوة",
      fees: "رسوم التسجيل",
      benefits: "فوائد التسجيل الرسمي",
      cta: "مستعد لإكمال تسجيلك الرسمي؟",
      ctaDesc: "خبراؤنا سيتولون جميع التسجيلات الحكومية ويضمنون الامتثال الكامل للأنظمة السورية.",
      registerBtn: "ابدأ التسجيل",
      consultBtn: "احصل على الإرشاد المتخصص"
    }
  };

  const registrationAuthorities = [
    {
      icon: <Building className="w-12 h-12" />,
      color: "bg-primary", // Changed to primary blue
      en: {
        name: "Ministry of Economy and Foreign Trade",
        description: "Company registration and commercial licensing",
        timeframe: "5-10 business days",
        documents: ["Company charter", "Capital verification", "Board resolutions"]
      },
      ar: {
        name: "وزارة الاقتصاد والتجارة الخارجية",
        description: "تسجيل الشركات والترخيص التجاري",
        timeframe: "5-10 أيام عمل",
        documents: ["النظام الأساسي للشركة", "التحقق من رأس المال", "قرارات مجلس الإدارة"]
      }
    },
    {
      icon: <FileText className="w-12 h-12" />,
      color: "bg-primary-light", // Changed to light beige
      en: {
        name: "General Commission for Taxes and Fees",
        description: "Tax registration and fiscal obligations",
        timeframe: "3-7 business days",
        documents: ["Tax registration form", "Company documents", "Financial statements"]
      },
      ar: {
        name: "الهيئة العامة للضرائب والرسوم",
        description: "التسجيل الضريبي والالتزامات المالية",
        timeframe: "3-7 أيام عمل",
        documents: ["استمارة التسجيل الضريبي", "وثائق الشركة", "البيانات المالية"]
      }
    },
    {
      icon: <Users className="w-12 h-12" />,
      color: "bg-accent-dark", // Changed to darker beige
      en: {
        name: "Social Security Institution",
        description: "Employee registration and social security",
        timeframe: "2-5 business days",
        documents: ["Employee contracts", "Salary records", "Company registration"]
      },
      ar: {
        name: "مؤسسة التأمينات الاجتماعية",
        description: "تسجيل الموظفين والضمان الاجتماعي",
        timeframe: "2-5 أيام عمل",
        documents: ["عقود الموظفين", "سجلات الرواتب", "تسجيل الشركة"]
      }
    },
    {
      icon: <Shield className="w-12 h-12" />,
      color: "bg-primary-dark", // Changed to dark blue
      en: {
        name: "Ministry of Interior",
        description: "Security clearance and permits",
        timeframe: "7-14 business days",
        documents: ["Security forms", "Background checks", "Location permits"]
      },
      ar: {
        name: "وزارة الداخلية",
        description: "الموافقة الأمنية والتصاريح",
        timeframe: "7-14 يوم عمل",
        documents: ["النماذج الأمنية", "فحص السوابق", "تصاريح المواقع"]
      }
    }
  ];

  const processSteps = [
    {
      phase: 1,
      en: { title: "Preparation Phase", duration: "1-2 weeks" },
      ar: { title: "مرحلة التحضير", duration: "1-2 أسبوع" },
      steps: [
        {
          en: "Document collection and authentication",
          ar: "جمع الوثائق وتصديقها"
        },
        {
          en: "Legal structure finalization",
          ar: "إنهاء الهيكل القانوني"
        },
        {
          en: "Capital deposit verification",
          ar: "التحقق من إيداع رأس المال"
        }
      ]
    },
    {
      phase: 2,
      en: { title: "Registration Phase", duration: "2-3 weeks" },
      ar: { title: "مرحلة التسجيل", duration: "2-3 أسابيع" },
      steps: [
        {
          en: "Submit applications to all authorities",
          ar: "تقديم الطلبات لجميع الجهات"
        },
        {
          en: "Pay registration fees",
          ar: "دفع رسوم التسجيل"
        },
        {
          en: "Coordinate between departments",
          ar: "التنسيق بين الدوائر"
        }
      ]
    },
    {
      phase: 3,
      en: { title: "Completion Phase", duration: "1 week" },
      ar: { title: "مرحلة الإنجاز", duration: "أسبوع واحد" },
      steps: [
        {
          en: "Collect all certificates",
          ar: "جمع جميع الشهادات"
        },
        {
          en: "Final compliance verification",
          ar: "التحقق النهائي من الامتثال"
        },
        {
          en: "Business operation clearance",
          ar: "موافقة بدء العمليات"
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />, // Changed to primary color
      en: {
        title: "Legal Protection",
        description: "Full legal status and protection under Syrian law"
      },
      ar: {
        title: "الحماية القانونية",
        description: "الوضع القانوني الكامل والحماية تحت القانون السوري"
      }
    },
    {
      icon: <Building className="w-8 h-8 text-primary-dark" />, // Changed to primary dark
      en: {
        title: "Business Credibility",
        description: "Enhanced trust with customers, suppliers, and partners"
      },
      ar: {
        title: "مصداقية الأعمال",
        description: "ثقة معززة مع العملاء والموردين والشركاء"
      }
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />, // Changed to primary color
      en: {
        title: "Banking Access",
        description: "Ability to open business accounts and access financing"
      },
      ar: {
        title: "الوصول المصرفي",
        description: "القدرة على فتح حسابات الأعمال والوصول للتمويل"
      }
    },
    {
      icon: <Users className="w-8 h-8 text-primary-dark" />, // Changed to primary dark
      en: {
        title: "Employee Benefits",
        description: "Legal hiring and social security coverage"
      },
      ar: {
        title: "مزايا الموظفين",
        description: "التوظيف القانوني وتغطية الضمان الاجتماعي"
      }
    }
  ];

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={officialHeaderImage}
      />

      {/* Overview Section with unique design */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
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
              <div className="flex gap-4">
                <div className="bg-primary text-accent-light px-6 py-3 rounded-lg font-medium">
                  4 {language === 'ar' ? 'جهات رئيسية' : 'Main Authorities'}
                </div>
                <div className="bg-accent text-primary px-6 py-3 rounded-lg font-medium">
                  4-6 {language === 'ar' ? 'أسابيع' : 'Weeks'}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-accent-light">
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'ar' ? 'لماذا التسجيل الرسمي؟' : 'Why Official Registration?'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                    <span>{language === 'ar' ? 'امتثال قانوني كامل' : 'Full Legal Compliance'}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                    <span>{language === 'ar' ? 'حماية من المخاطر' : 'Risk Protection'}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                    <span>{language === 'ar' ? 'وصول للخدمات الحكومية' : 'Government Services Access'}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Authorities Section with cards layout */}
      <Section background="light">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-16"
          >
            {c.authorities}
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {registrationAuthorities.map((authority, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`${authority.color} p-6 text-white`}>
                  <div className="flex items-center gap-4">
                    {authority.icon}
                    <div>
                      <h3 className="text-xl font-bold">
                        {authority[language].name}
                      </h3>
                      <p className="opacity-90">
                        {authority[language].description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-medium text-primary">
                      {authority[language].timeframe}
                    </span>
                  </div>
                  <h4 className="font-semibold text-primary mb-3">
                    {language === 'ar' ? 'المستندات المطلوبة:' : 'Required Documents:'}
                  </h4>
                  <ul className="space-y-2">
                    {authority[language].documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Timeline with horizontal flow */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-16"
          >
            {c.process}
          </motion.h2>

          <div className="space-y-8">
            {processSteps.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-1/3 ${index % 2 === 1 ? 'text-right' : ''}`}>
                  <div className="bg-gradient-to-r from-primary to-primary-dark text-accent-light rounded-xl p-6">
                    <div className="text-4xl font-bold text-accent mb-2">
                      {phase.phase}
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {phase[language].title}
                    </h3>
                    <p className="text-accent">
                      {phase[language].duration}
                    </p>
                  </div>
                </div>
                <div className="w-2/3">
                  <div className="bg-accent-light rounded-xl p-6 border border-accent">
                    <ul className="space-y-3">
                      {phase.steps.map((step, stepIdx) => (
                        <li key={stepIdx} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span className="text-primary">{step[language]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits Grid */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.benefits}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-accent"
              >
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {benefit[language].title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit[language].description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section with unique design */}
      <Section background="primary">
        <div className="max-w-4xl mx-auto">
          <div className="bg-accent-light rounded-3xl p-8 md:p-12 shadow-2xl border border-accent">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">
                {c.cta}
              </h2>
              <p className="text-primary text-lg mb-8 leading-relaxed">
                {c.ctaDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleRegister}
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {c.registerBtn}
                </button>
                <button 
                  onClick={handleConsulting}
                  className="bg-accent hover:bg-accent-dark text-primary font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {c.consultBtn}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default OfficialRegistration;