import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { FileText, Clock, CheckCircle, Building, Users, DollarSign, AlertCircle, Calendar } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import licenseHeaderImage from '../../assets/images/7.png';

const CommercialLicenseIssuance: React.FC = () => {
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
      title: "Commercial License Issuance",
      subtitle: "Get your commercial license to legally operate your business in Syria",
      overview: "Overview",
      overviewDesc: "A commercial license is a legal document that permits you to conduct business activities in Syria. It's issued by the Ministry of Internal Trade and Consumer Protection and is required for all commercial enterprises.",
      requirements: "Required Documents",
      process: "Application Process",
      timeline: "Processing Timeline",
      fees: "Fees Structure",
      types: "License Types",
      notes: "Important Notes",
      cta: "Ready to Get Your License?",
      ctaDesc: "Our experts can guide you through the entire commercial license application process.",
      registerBtn: "Start Application",
      consultBtn: "Get Expert Help"
    },
    ar: {
      title: "إصدار الرخصة التجارية",
      subtitle: "احصل على رخصتك التجارية لممارسة نشاطك بشكل قانوني في سوريا",
      overview: "نظرة عامة",
      overviewDesc: "الرخصة التجارية هي وثيقة قانونية تخولك ممارسة الأنشطة التجارية في سوريا. تصدر عن وزارة التجارة الداخلية وحماية المستهلك وهي مطلوبة لجميع المؤسسات التجارية.",
      requirements: "المستندات المطلوبة",
      process: "خطوات التقديم",
      timeline: "المدة الزمنية للمعالجة",
      fees: "هيكل الرسوم",
      types: "أنواع التراخيص",
      notes: "ملاحظات مهمة",
      cta: "مستعد للحصول على رخصتك؟",
      ctaDesc: "خبراؤنا يمكنهم إرشادك خلال كامل عملية طلب الرخصة التجارية.",
      registerBtn: "ابدأ التقديم",
      consultBtn: "احصل على مساعدة الخبراء"
    }
  };

  const requiredDocuments = [
    {
      icon: <FileText className="w-6 h-6" />,
      en: {
        title: "Identity Documents",
        items: [
          "Valid Syrian ID or passport",
          "Family registry document",
          "Certificate of no criminal record"
        ]
      },
      ar: {
        title: "وثائق الهوية",
        items: [
          "الهوية السورية أو جواز السفر الساري",
          "وثيقة القيد العائلي",
          "شهادة عدم محكومية"
        ]
      }
    },
    {
      icon: <Building className="w-6 h-6" />,
      en: {
        title: "Business Documents",
        items: [
          "Company establishment contract",
          "Articles of incorporation",
          "Partnership agreement (if applicable)"
        ]
      },
      ar: {
        title: "وثائق الشركة",
        items: [
          "عقد تأسيس الشركة",
          "النظام الأساسي للشركة",
          "اتفاقية الشراكة (إن وجدت)"
        ]
      }
    },
    {
      icon: <Users className="w-6 h-6" />,
      en: {
        title: "Location Documents",
        items: [
          "Lease contract or property deed",
          "Municipal approval for the location",
          "Fire safety certificate"
        ]
      },
      ar: {
        title: "وثائق المكان",
        items: [
          "عقد إيجار أو سند ملكية",
          "موافقة البلدية على المكان",
          "شهادة السلامة من الحريق"
        ]
      }
    }
  ];

  const processSteps = [
    {
      step: 1,
      icon: <FileText className="w-8 h-8" />,
      en: {
        title: "Document Preparation",
        description: "Gather all required documents and ensure they are properly authenticated and translated if needed."
      },
      ar: {
        title: "تحضير المستندات",
        description: "جمع جميع المستندات المطلوبة والتأكد من أنها مصدقة ومترجمة إذا لزم الأمر."
      }
    },
    {
      step: 2,
      icon: <Building className="w-8 h-8" />,
      en: {
        title: "Submit Application",
        description: "Submit your application to the Ministry of Internal Trade and Consumer Protection office."
      },
      ar: {
        title: "تقديم الطلب",
        description: "تقديم طلبك إلى مكتب وزارة التجارة الداخلية وحماية المستهلك."
      }
    },
    {
      step: 3,
      icon: <DollarSign className="w-8 h-8" />,
      en: {
        title: "Pay Fees",
        description: "Pay the required licensing fees at the designated bank or ministry cashier."
      },
      ar: {
        title: "دفع الرسوم",
        description: "دفع رسوم الترخيص المطلوبة في البنك المخصص أو صندوق الوزارة."
      }
    },
    {
      step: 4,
      icon: <CheckCircle className="w-8 h-8" />,
      en: {
        title: "Receive License",
        description: "Collect your commercial license after processing is complete (typically 7-15 business days)."
      },
      ar: {
        title: "استلام الرخصة",
        description: "استلام رخصتك التجارية بعد اكتمال المعالجة (عادة 7-15 يوم عمل)."
      }
    }
  ];

  const licenseTypes = [
    {
      en: {
        type: "Individual Commercial License",
        description: "For sole proprietorships and individual businesses",
        duration: "Valid for 1 year"
      },
      ar: {
        type: "رخصة تجارية فردية",
        description: "للملكية الفردية والأعمال الشخصية",
        duration: "صالحة لمدة سنة واحدة"
      }
    },
    {
      en: {
        type: "Company Commercial License",
        description: "For partnerships, LLCs, and corporations",
        duration: "Valid for 1 year"
      },
      ar: {
        type: "رخصة تجارية للشركات",
        description: "للشراكات والشركات المحدودة المسؤولية والمساهمة",
        duration: "صالحة لمدة سنة واحدة"
      }
    },
    {
      en: {
        type: "Branch License",
        description: "For branch offices of existing companies",
        duration: "Valid for 1 year"
      },
      ar: {
        type: "رخصة فرع",
        description: "لمكاتب الفروع للشركات القائمة",
        duration: "صالحة لمدة سنة واحدة"
      }
    }
  ];

  const importantNotes = [
    {
      icon: <AlertCircle className="w-6 h-6 text-amber-500" />,
      en: "All documents must be in Arabic or officially translated",
      ar: "يجب أن تكون جميع المستندات باللغة العربية أو مترجمة رسمياً"
    },
    {
      icon: <Calendar className="w-6 h-6 text-blue-500" />,
      en: "Licenses must be renewed annually",
      ar: "يجب تجديد التراخيص سنوياً"
    },
    {
      icon: <Building className="w-6 h-6 text-green-500" />,
      en: "Business location must comply with zoning regulations",
      ar: "يجب أن يتوافق موقع العمل مع أنظمة التقسيم"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      en: "Processing time may vary during peak seasons",
      ar: "قد تختلف مدة المعالجة خلال المواسم المزدحمة"
    }
  ];

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={licenseHeaderImage}
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

      {/* Process Steps Section */}
      <Section background="white">
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

      {/* License Types Section */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.types}
          </motion.h2>

          <div className="space-y-6">
            {licenseTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {type[language].type}
                    </h3>
                    <p className="text-gray-700 mb-2">
                      {type[language].description}
                    </p>
                  </div>
                  <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {type[language].duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Important Notes Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.notes}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {importantNotes.map((note, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-gray-50 rounded-lg p-4"
              >
                {note.icon}
                <p className="text-gray-700 leading-relaxed">
                  {note[language]}
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

export default CommercialLicenseIssuance;
