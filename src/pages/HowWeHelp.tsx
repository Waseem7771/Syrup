import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import Section from '../components/common/Section';
import { 
  Building, 
  FileText, 
  Cpu, 
  Users, 
  BadgeDollarSign, 
  FileCheck, 
  Briefcase,
  Palette,
  HomeIcon
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

const HowWeHelp: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const location = useLocation();
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  const mainServices = [
    {
      id: 'business',
      icon: <FileText size={40} className="text-primary" />,
      title: language === 'ar' ? 'تأسيس الأعمال وتسجيل الشركات' : 'Business Establishment & Registration',
      description: language === 'ar' 
        ? 'نقدم إرشادات شاملة للتأسيس القانوني لعملك، من اختيار الهيكل المناسب إلى التسجيل الرسمي.'
        : 'Complete guidance for legally establishing your business from structure selection to official registration.',
      subServices: [
        {
          name: language === 'ar' ? 'اختيار الشكل القانوني' : 'Legal Structure Selection',
          path: '/services/legal-structure'
        },
        {
          name: language === 'ar' ? 'إصدار الرخص التجارية' : 'Commercial License Issuance',
          path: '/services/commercial-license'
        },
        {
          name: language === 'ar' ? 'فتح حسابات بنكية' : 'Bank Account Opening',
          path: '/services/bank-account'
        },
        {
          name: language === 'ar' ? 'التسجيل في الجهات الرسمية' : 'Registration with Official Authorities',
          path: '/services/official-registration'
        },
        {
          name: language === 'ar' ? 'حساب تكلفة التأسيس' : 'Establishment Cost Calculation',
          path: '/services/establishment-cost'
        },
        {
          name: language === 'ar' ? 'إصدار فيزا أو إقامة لغير السوريين' : 'Visa & Residency for Non-Syrians',
          path: '/visa-residency'
        }
      ]
    },
    {
      id: 'technical',
      icon: <Cpu size={40} className="text-primary" />,
      title: language === 'ar' ? 'الخدمات التقنية' : 'Technical Services',
      description: language === 'ar' 
        ? 'حلول تقنية متكاملة لدعم نمو عملك، من تطوير المواقع والتطبيقات إلى حلول الذكاء الاصطناعي.'
        : 'Comprehensive technical solutions to support your business growth, from website and app development to AI solutions.',
      subServices: [
        {
          name: language === 'ar' ? 'تصميم وتطوير مواقع الشركة' : 'Website Design & Development',
          path: '/services/web-dev'
        },
        {
          name: language === 'ar' ? 'تطوير التطبيقات' : 'App Development',
          path: '/services/app-dev'
        },
        {
          name: language === 'ar' ? 'خدمات الاستضافة والبنية التحتية' : 'Hosting & Infrastructure Services',
          path: '/services/hosting'
        },
        {
          name: language === 'ar' ? 'أنظمة إدارة الأعمال ERP/CRM' : 'ERP/CRM Business Systems',
          path: '/services/erp-crm'
        },
        {
          name: language === 'ar' ? 'حلول الذكاء الاصطناعي والتحليلات' : 'AI & Analytics Solutions',
          path: '/services/ai'
        }
      ]
    },
    {
      id: 'workspaces',
      icon: <Building size={40} className="text-primary" />,
      title: language === 'ar' ? 'مساحات الأعمال' : 'Workspaces',
      description: language === 'ar' 
        ? 'وصول إلى مكاتب مرنة وحاضنات أعمال في مختلف المدن.'
        : 'Access flexible offices and business incubators in various cities.',
      subServices: [
        {
          name: language === 'ar' ? 'تأجير مكاتب جاهزة أو افتراضية' : 'Ready or Virtual Office Rental',
          path: '/services/office-rental'
        },
        {
          name: language === 'ar' ? 'مكاتب مشاركة' : 'Shared Offices',
          path: '/services/shared-offices'
        }
      ]
    },
    {
      id: 'financial',
      icon: <BadgeDollarSign size={40} className="text-primary" />,
      title: language === 'ar' ? 'الخدمات المالية والمحاسبية' : 'Financial & Accounting Services',
      description: language === 'ar' 
        ? 'خدمات مالية ومحاسبية متخصصة لضمان الامتثال المالي والتخطيط السليم.'
        : 'Specialized financial and accounting services to ensure financial compliance and proper planning.',
      subServices: [
        {
          name: language === 'ar' ? 'إعداد القوائم المالية' : 'Financial Statement Preparation',
          path: '/services/statements'
        },
        {
          name: language === 'ar' ? 'التخطيط المالي والميزانيات' : 'Financial Planning & Budgeting',
          path: '/services/planning'
        },
        {
          name: language === 'ar' ? 'استشارات ضريبية وزكوية' : 'Tax & Zakat Consulting',
          path: '/services/tax'
        }
      ]
    },
    {
      id: 'auditing',
      icon: <FileCheck size={40} className="text-primary" />,
      title: language === 'ar' ? 'تدقيق الملفات' : 'File Auditing',
      description: language === 'ar' 
        ? 'خدمات تدقيق شاملة للمستندات والعقود والتراخيص لضمان الامتثال القانوني والمالي.'
        : 'Comprehensive auditing services for documents, contracts, and licenses to ensure legal and financial compliance.',
      subServices: [
        {
          name: language === 'ar' ? 'مراجعة التراخيص والعقود' : 'License & Contract Review',
          path: '/services/review'
        },
        {
          name: language === 'ar' ? 'تدقيق المستندات الرسمية والمالية' : 'Official & Financial Document Auditing',
          path: '/services/doc-audit'
        },
        {
          name: language === 'ar' ? 'إعداد ملفات الشركة للعرض على المستثمرين' : 'Preparing Company Files for Investors',
          path: '/services/investor-files'
        }
      ]
    },
    {
      id: 'logistics',
      icon: <Briefcase size={40} className="text-primary" />,
      title: language === 'ar' ? 'الخدمات اللوجستية' : 'Logistics Services',
      description: language === 'ar' 
        ? 'استراتيجيات تسويقية وخدمات إعلامية لتعزيز حضور علامتك التجارية وزيادة وصولها.'
        : 'Marketing strategies and media services to enhance your brand presence and increase its reach.',
      subServices: [
        {
          name: language === 'ar' ? 'إعداد الخطط التسويقية' : 'Marketing Plan Preparation',
          path: '/services/marketing-plan'
        },
        {
          name: language === 'ar' ? 'إدارة حملات التواصل الاجتماعي' : 'Social Media Campaign Management',
          path: '/services/social-media'
        },
        {
          name: language === 'ar' ? 'صناعة المحتوى والصور والفيديوهات' : 'Content, Photo & Video Production',
          path: '/services/content'
        }
      ]
    },
    {
      id: 'talent',
      icon: <Users size={40} className="text-primary" />,
      title: language === 'ar' ? 'خدمات التوظيف واستقطاب المواهب' : 'Talent Acquisition & Recruitment',
      description: language === 'ar' 
        ? 'استراتيجيات توظيف متخصصة لمساعدتك في العثور على المواهب المناسبة لفريقك.'
        : 'Specialized recruitment strategies to help you find the right talents for your team.',
      subServices: [
        {
          name: language === 'ar' ? 'البحث عن المواهب المتخصصة محليًا ودوليًا' : 'Specialized Talent Search',
          path: '/services/talent-search'
        },
        {
          name: language === 'ar' ? 'بناء شبكة من المستقلين والموهوبين حسب التخصص' : 'Building a Network of Freelancers & Talents',
          path: '/services/network'
        }
      ]
    },
    {
      id: 'branding',
      icon: <Palette size={40} className="text-primary" />,
      title: language === 'ar' ? 'تصميم الهويات والعلامات التجارية' : 'Branding & Identity Design',
      description: language === 'ar' 
        ? 'تطوير هوية بصرية فريدة وجذابة تعكس قيم علامتك التجارية وتميزها عن المنافسين.'
        : 'Develop a unique and attractive visual identity that reflects your brand values and differentiates it from competitors.',
      subServices: [
        {
          name: language === 'ar' ? 'تصميم الشعار واختيار الألوان والخطوط' : 'Logo, Color & Font Selection',
          path: '/services/logo'
        },
        {
          name: language === 'ar' ? 'إعداد الهوية البصرية' : 'Visual Identity Preparation',
          path: '/services/visual-identity'
        },
        {
          name: language === 'ar' ? 'تصميم واجهات المواقع' : 'Website Interface Design',
          path: '/services/ui-design'
        }
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the # symbol
      const element = serviceRefs.current[id];
      
      if (element) {
        // Smooth scroll to the element with some delay to ensure render is complete
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 300);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <PageHeader 
        title={language === 'ar' ? 'كيف نساعدك' : 'How We Help'}
        subtitle={language === 'ar' 
          ? 'مجموعة شاملة من الخدمات لدعم رحلة ريادة الأعمال الخاصة بك'
          : 'A comprehensive suite of services to support your entrepreneurship journey'}
      />
      
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'نقدم مجموعة متكاملة من الخدمات المصممة خصيصًا لمساعدة رواد الأعمال في كل مرحلة من مراحل رحلتهم، من الفكرة الأولية إلى النمو المستدام.'
                : 'We offer a comprehensive suite of services specifically designed to help entrepreneurs at every stage of their journey, from initial idea to sustainable growth.'}
            </p>
          </div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-20"
          >
            {mainServices.map((service, index) => (
              <React.Fragment key={service.id}>
                <motion.div 
                  id={service.id}
                  ref={el => serviceRefs.current[service.id] = el}
                  variants={item}
                  className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-start pt-4 ${
                    index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="lg:col-span-1 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary-light/20 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold text-primary mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-primary-dark mb-4">
                        {language === 'ar' ? 'خدماتنا تشمل:' : 'Our services include:'}
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.subServices.map((subService, i) => (
                          <li key={i} className="flex">
                            <Link 
                              to={subService.path} 
                              className="flex items-start group"
                            >
                              <span className="text-primary text-lg mr-2">•</span>
                              <span className="group-hover:text-primary transition-colors">{subService.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
                {index < mainServices.length - 1 && (
                  <motion.hr 
                    variants={item}
                    className="border-t-2 border-gray-100 w-2/3 mx-auto" 
                  />
                )}
              </React.Fragment>
            ))}
          </motion.div>
          
          <div className="mt-16 text-center">
            <Link to="/" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors">
              <HomeIcon size={18} />
              {language === 'ar' ? 'العودة إلى الصفحة الرئيسية' : 'Return to Home Page'}
            </Link>
          </div>
        </div>
      </div>
      
      <Section background="primary">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'ar' ? 'هل تحتاج إلى مساعدة خاصة؟' : 'Need Specialized Help?'}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'فريقنا من الخبراء جاهز لمساعدتك في تطوير وتنفيذ استراتيجية مخصصة تناسب احتياجات عملك الفريدة.'
              : 'Our team of experts is ready to help you develop and implement a customized strategy that fits your unique business needs.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-primary hover:bg-gray-100 py-3 px-6 rounded-lg transition-all duration-300 font-medium">
              {language === 'ar' ? 'احصل على استشارة مجانية' : 'Get a Free Consultation'}
            </Link>
            <Link to="/register" className="border border-white text-white hover:bg-white hover:text-primary py-3 px-6 rounded-lg transition-all duration-300 font-medium">
              {language === 'ar' ? 'سجل مشروعك' : 'Register Your Project'}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HowWeHelp;