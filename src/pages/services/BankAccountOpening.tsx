import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { Building2, CreditCard, FileText, Clock, DollarSign, Shield, AlertCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import bankHeaderImage from '../../assets/images/5.png';

const BankAccountOpening: React.FC = () => {
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
      title: "Bank Account Opening",
      subtitle: "Open a business bank account for your company in Syria with our expert guidance",
      overview: "Overview",
      overviewDesc: "Opening a business bank account is a crucial step for any company in Syria. It enables you to conduct financial transactions, receive payments, and manage your business finances professionally while complying with banking regulations.",
      requirements: "Required Documents",
      accountTypes: "Account Types Available",
      process: "Opening Process",
      banks: "Partner Banks",
      fees: "Banking Fees",
      tips: "Important Tips",
      cta: "Ready to Open Your Business Account?",
      ctaDesc: "Our banking specialists can help you choose the right bank and guide you through the account opening process.",
      registerBtn: "Start Process",
      consultBtn: "Get Banking Advice"
    },
    ar: {
      title: "فتح حساب بنكي",
      subtitle: "افتح حساباً بنكياً لشركتك في سوريا مع إرشاد خبرائنا",
      overview: "نظرة عامة",
      overviewDesc: "فتح حساب بنكي للأعمال خطوة أساسية لأي شركة في سوريا. يمكّنك من إجراء المعاملات المالية واستقبال المدفوعات وإدارة أموال شركتك بشكل مهني مع الامتثال للأنظمة المصرفية.",
      requirements: "المستندات المطلوبة",
      accountTypes: "أنواع الحسابات المتاحة",
      process: "عملية الفتح",
      banks: "البنوك الشريكة",
      fees: "الرسوم المصرفية",
      tips: "نصائح مهمة",
      cta: "مستعد لفتح حسابك التجاري؟",
      ctaDesc: "متخصصونا المصرفيون يمكنهم مساعدتك في اختيار البنك المناسب وإرشادك خلال عملية فتح الحساب.",
      registerBtn: "ابدأ العملية",
      consultBtn: "احصل على نصيحة مصرفية"
    }
  };

  const requiredDocuments = [
    {
      icon: <Building2 className="w-6 h-6" />,
      en: {
        title: "Company Documents",
        items: [
          "Commercial license (valid)",
          "Company registration certificate",
          "Articles of incorporation",
          "Tax registration certificate"
        ]
      },
      ar: {
        title: "وثائق الشركة",
        items: [
          "الرخصة التجارية (سارية)",
          "شهادة تسجيل الشركة",
          "النظام الأساسي للشركة",
          "شهادة التسجيل الضريبي"
        ]
      }
    },
    {
      icon: <FileText className="w-6 h-6" />,
      en: {
        title: "Legal Documents",
        items: [
          "Board resolution for account opening",
          "Authorized signatures list",
          "Power of attorney (if applicable)",
          "Partnership agreement"
        ]
      },
      ar: {
        title: "الوثائق القانونية",
        items: [
          "قرار مجلس الإدارة بفتح الحساب",
          "قائمة التوقيعات المعتمدة",
          "توكيل (إن وجد)",
          "اتفاقية الشراكة"
        ]
      }
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      en: {
        title: "Identity Documents",
        items: [
          "ID copies of authorized signatories",
          "Passport copies (for non-Syrians)",
          "Residence permits (if applicable)",
          "Recent photographs"
        ]
      },
      ar: {
        title: "وثائق الهوية",
        items: [
          "نسخ هويات المفوضين بالتوقيع",
          "نسخ جوازات السفر (لغير السوريين)",
          "إقامات (إن وجدت)",
          "صور شخصية حديثة"
        ]
      }
    }
  ];

  const accountTypes = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      en: {
        type: "Current Account",
        description: "For daily business transactions and operations",
        features: ["No withdrawal limits", "Checkbook facility", "Online banking", "Monthly statements"],
        minDeposit: "Starting from 100,000 SYP"
      },
      ar: {
        type: "الحساب الجاري",
        description: "للمعاملات والعمليات اليومية للأعمال",
        features: ["لا توجد حدود للسحب", "تسهيل دفتر الشيكات", "الخدمات المصرفية الإلكترونية", "كشوف حساب شهرية"],
        minDeposit: "ابتداءً من 100,000 ليرة سورية"
      }
    },
    {
      icon: <Shield className="w-8 h-8" />,
      en: {
        type: "Savings Account",
        description: "For business savings with interest benefits",
        features: ["Interest earnings", "Flexible deposits", "Limited withdrawals", "Security features"],
        minDeposit: "Starting from 50,000 SYP"
      },
      ar: {
        type: "حساب التوفير",
        description: "لمدخرات الأعمال مع فوائد",
        features: ["كسب فوائد", "إيداعات مرنة", "سحوبات محدودة", "ميزات أمنية"],
        minDeposit: "ابتداءً من 50,000 ليرة سورية"
      }
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      en: {
        type: "Foreign Currency Account",
        description: "For international business transactions",
        features: ["Multi-currency support", "International transfers", "Foreign exchange", "Import/export facilities"],
        minDeposit: "Starting from $1,000 USD"
      },
      ar: {
        type: "حساب العملة الأجنبية",
        description: "للمعاملات التجارية الدولية",
        features: ["دعم متعدد العملات", "تحويلات دولية", "صرف العملات", "تسهيلات الاستيراد/التصدير"],
        minDeposit: "ابتداءً من 1,000 دولار أمريكي"
      }
    }
  ];

  const processSteps = [
    {
      step: 1,
      icon: <FileText className="w-8 h-8" />,
      en: {
        title: "Document Preparation",
        description: "Gather all required documents and ensure they are properly authenticated and up-to-date."
      },
      ar: {
        title: "تحضير المستندات",
        description: "جمع جميع المستندات المطلوبة والتأكد من أنها مصدقة ومحدثة."
      }
    },
    {
      step: 2,
      icon: <Building2 className="w-8 h-8" />,
      en: {
        title: "Bank Selection",
        description: "Choose the most suitable bank based on your business needs and banking requirements."
      },
      ar: {
        title: "اختيار البنك",
        description: "اختيار البنك الأنسب بناءً على احتياجات عملك والمتطلبات المصرفية."
      }
    },
    {
      step: 3,
      icon: <CreditCard className="w-8 h-8" />,
      en: {
        title: "Application Submission",
        description: "Submit your application along with all required documents to the chosen bank."
      },
      ar: {
        title: "تقديم الطلب",
        description: "تقديم طلبك مع جميع المستندات المطلوبة إلى البنك المختار."
      }
    },
    {
      step: 4,
      icon: <DollarSign className="w-8 h-8" />,
      en: {
        title: "Initial Deposit",
        description: "Make the required initial deposit and complete the account activation process."
      },
      ar: {
        title: "الإيداع الأولي",
        description: "إجراء الإيداع الأولي المطلوب وإكمال عملية تفعيل الحساب."
      }
    }
  ];

  const partnerBanks = [
    {
      en: "Commercial Bank of Syria",
      ar: "المصرف التجاري السوري"
    },
    {
      en: "Real Estate Bank",
      ar: "المصرف العقاري"
    },
    {
      en: "Industrial Bank",
      ar: "المصرف الصناعي"
    },
    {
      en: "Popular Credit Bank",
      ar: "مصرف التسليف الشعبي"
    },
    {
      en: "Agricultural Cooperative Bank",
      ar: "مصرف التعاون الزراعي"
    },
    {
      en: "Savings Bank",
      ar: "مصرف التوفير"
    }
  ];

  const importantTips = [
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      en: "Account opening typically takes 3-7 business days",
      ar: "فتح الحساب يستغرق عادة 3-7 أيام عمل"
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-amber-500" />,
      en: "Ensure all documents are properly authenticated",
      ar: "تأكد من أن جميع المستندات مصدقة بشكل صحيح"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      en: "Compare banking fees and services before choosing",
      ar: "قارن الرسوم المصرفية والخدمات قبل الاختيار"
    },
    {
      icon: <Building2 className="w-6 h-6 text-purple-500" />,
      en: "Consider proximity to your business location",
      ar: "ضع في اعتبارك القرب من موقع عملك"
    }
  ];

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={bankHeaderImage}
      />

      {/* Overview Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">{c.overview}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {c.overviewDesc}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Required Documents Section */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.requirements}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {requiredDocuments.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary bg-accent rounded-lg p-3">
                    {doc.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {doc[language].title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {doc[language].items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Account Types Section */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.accountTypes}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {accountTypes.map((account, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-accent-light rounded-xl shadow-lg p-6 border border-accent"
              >
                <div className="text-primary bg-accent rounded-lg p-3 w-fit mb-4">
                  {account.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {account[language].type}
                </h3>
                <p className="text-gray-600 mb-4">
                  {account[language].description}
                </p>
                <ul className="space-y-2 mb-4">
                  {account[language].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-primary text-white px-4 py-2 rounded-lg text-center font-medium">
                  {account[language].minDeposit}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Steps Section */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.process}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {step[language].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step[language].description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Partner Banks Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.banks}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerBanks.map((bank, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg p-4 text-center font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {bank[language]}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Important Tips Section */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.tips}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {importantTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-md"
              >
                {tip.icon}
                <p className="text-gray-700 leading-relaxed">
                  {tip[language]}
                </p>
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
            <h2 className="text-3xl font-bold text-white mb-4">
              {c.cta}
            </h2>
            <p className="text-accent-light text-lg mb-8 leading-relaxed">
              {c.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleRegister}
                className="btn-secondary"
              >
                {c.registerBtn}
              </button>
              <button 
                onClick={handleConsulting}
                className="bg-accent hover:bg-accent-dark text-primary font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {c.consultBtn}
              </button>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default BankAccountOpening;