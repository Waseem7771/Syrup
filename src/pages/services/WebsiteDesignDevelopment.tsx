import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { Monitor, Smartphone, Tablet, Code, Palette, Search, Users, Zap, CheckCircle, ArrowRight, Globe, ShoppingCart, Camera, FileText } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import websiteHeaderImage from '../../assets/images/3.png';

const WebsiteDesignDevelopment: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('design');
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleGetQuote = () => {
    navigate('/consulting/legal');
  };

  const handleStartProject = () => {
    navigate('/register');
  };

  const content = {
    en: {
      title: "Website Design & Development",
      subtitle: "Create a powerful online presence for your Syrian business with professional web solutions",
      overview: "Your Digital Gateway to Success",
      overviewDesc: "In today's digital world, your website is often the first impression customers have of your business. We create stunning, functional websites that represent your brand and drive business growth in the Syrian market.",
      services: "Our Web Services",
      process: "Development Process",
      portfolio: "Website Types",
      packages: "Service Packages",
      technologies: "Technologies We Use",
      features: "Key Features",
      cta: "Ready to Build Your Website?",
      ctaDesc: "Let's create a website that showcases your business and attracts customers online.",
      getQuote: "Get Custom Quote",
      startProject: "Start Your Project",
      designTab: "Design",
      developmentTab: "Development",
      maintenanceTab: "Maintenance"
    },
    ar: {
      title: "تصميم وتطوير المواقع الإلكترونية",
      subtitle: "أنشئ حضوراً رقمياً قوياً لشركتك في سوريا مع حلول الويب المهنية",
      overview: "بوابتك الرقمية للنجاح",
      overviewDesc: "في عالم اليوم الرقمي، موقعك الإلكتروني هو غالباً الانطباع الأول الذي يحصل عليه العملاء عن شركتك. نحن ننشئ مواقع إلكترونية مذهلة وعملية تمثل علامتك التجارية وتدفع نمو الأعمال في السوق السوري.",
      services: "خدماتنا الإلكترونية",
      process: "عملية التطوير",
      portfolio: "أنواع المواقع",
      packages: "باقات الخدمة",
      technologies: "التقنيات التي نستخدمها",
      features: "الميزات الرئيسية",
      cta: "مستعد لبناء موقعك؟",
      ctaDesc: "دعنا ننشئ موقعاً إلكترونياً يعرض أعمالك ويجذب العملاء عبر الإنترنت.",
      getQuote: "احصل على عرض سعر مخصص",
      startProject: "ابدأ مشروعك",
      designTab: "التصميم",
      developmentTab: "التطوير",
      maintenanceTab: "الصيانة"
    }
  };

  const webServices = [
    {
      icon: <Palette className="w-12 h-12" />,
      en: {
        title: "Custom Web Design",
        description: "Unique designs tailored to your brand identity and business goals",
        features: ["Brand-focused design", "User experience optimization", "Mobile-first approach", "Modern aesthetics"]
      },
      ar: {
        title: "تصميم مواقع مخصص",
        description: "تصاميم فريدة مصممة خصيصاً لهوية علامتك التجارية وأهداف أعمالك",
        features: ["تصميم يركز على العلامة التجارية", "تحسين تجربة المستخدم", "نهج الهاتف المحمول أولاً", "جماليات حديثة"]
      }
    },
    {
      icon: <Code className="w-12 h-12" />,
      en: {
        title: "Professional Development",
        description: "Clean, efficient code using latest technologies and best practices",
        features: ["Responsive development", "Fast loading speeds", "SEO optimization", "Security implementation"]
      },
      ar: {
        title: "تطوير مهني",
        description: "كود نظيف وفعال باستخدام أحدث التقنيات وأفضل الممارسات",
        features: ["تطوير متجاوب", "سرعات تحميل سريعة", "تحسين محركات البحث", "تنفيذ الأمان"]
      }
    },
    {
      icon: <Search className="w-12 h-12" />,
      en: {
        title: "SEO Integration",
        description: "Built-in search engine optimization to help your business get found online",
        features: ["Keyword optimization", "Technical SEO", "Local search optimization", "Analytics integration"]
      },
      ar: {
        title: "تكامل تحسين محركات البحث",
        description: "تحسين محركات البحث المدمج لمساعدة أعمالك على الظهور عبر الإنترنت",
        features: ["تحسين الكلمات المفتاحية", "تحسين تقني", "تحسين البحث المحلي", "تكامل التحليلات"]
      }
    }
  ];

  const websiteTypes = [
    {
      icon: <Globe className="w-16 h-16" />,
      en: { title: "Business Websites", description: "Professional corporate websites to establish your online presence" },
      ar: { title: "مواقع الأعمال", description: "مواقع إلكترونية مؤسسية مهنية لإنشاء حضورك عبر الإنترنت" }
    },
    {
      icon: <ShoppingCart className="w-16 h-16" />,
      en: { title: "E-commerce Stores", description: "Online stores to sell your products and services" },
      ar: { title: "متاجر إلكترونية", description: "متاجر عبر الإنترنت لبيع منتجاتك وخدماتك" }
    },
    {
      icon: <Camera className="w-16 h-16" />,
      en: { title: "Portfolio Websites", description: "Showcase your work and attract new clients" },
      ar: { title: "مواقع المعرض", description: "اعرض أعمالك واجذب عملاء جدد" }
    },
    {
      icon: <FileText className="w-16 h-16" />,
      en: { title: "Landing Pages", description: "Focused pages for marketing campaigns and lead generation" },
      ar: { title: "صفحات الهبوط", description: "صفحات مركزة للحملات التسويقية وتوليد العملاء المحتملين" }
    }
  ];

  const developmentProcess = [
    {
      step: 1,
      en: { title: "Discovery & Planning", description: "Understanding your business goals and requirements" },
      ar: { title: "الاكتشاف والتخطيط", description: "فهم أهداف أعمالك ومتطلباتك" }
    },
    {
      step: 2,
      en: { title: "Design & Wireframing", description: "Creating visual concepts and user experience design" },
      ar: { title: "التصميم والرسم التخطيطي", description: "إنشاء مفاهيم بصرية وتصميم تجربة المستخدم" }
    },
    {
      step: 3,
      en: { title: "Development & Coding", description: "Building your website with clean, efficient code" },
      ar: { title: "التطوير والبرمجة", description: "بناء موقعك بكود نظيف وفعال" }
    },
    {
      step: 4,
      en: { title: "Testing & Launch", description: "Quality assurance testing and successful deployment" },
      ar: { title: "الاختبار والإطلاق", description: "اختبار ضمان الجودة والنشر الناجح" }
    }
  ];

  const servicePackages = [
    {
      name: { en: "Starter", ar: "المبتدئ" },
      price: { en: "$500 - $800", ar: "٥٠٠ - ٨٠٠ دولار" },
      features: {
        en: ["5-page website", "Responsive design", "Basic SEO", "Contact forms", "1 month support"],
        ar: ["موقع من ٥ صفحات", "تصميم متجاوب", "تحسين محركات البحث الأساسي", "نماذج الاتصال", "دعم لمدة شهر واحد"]
      },
      ideal: { en: "Small businesses", ar: "الشركات الصغيرة" }
    },
    {
      name: { en: "Professional", ar: "المحترف" },
      price: { en: "$800 - $1500", ar: "٨٠٠ - ١٥٠٠ دولار" },
      features: {
        en: ["10-page website", "Custom design", "Advanced SEO", "CMS integration", "3 months support"],
        ar: ["موقع من ١٠ صفحات", "تصميم مخصص", "تحسين محركات بحث متقدم", "تكامل نظام إدارة المحتوى", "دعم لمدة ٣ أشهر"]
      },
      ideal: { en: "Growing businesses", ar: "الشركات النامية" }
    },
    {
      name: { en: "Enterprise", ar: "المؤسسي" },
      price: { en: "$1500+", ar: "١٥٠٠+ دولار" },
      features: {
        en: ["Unlimited pages", "E-commerce ready", "Custom features", "Analytics setup", "6 months support"],
        ar: ["صفحات غير محدودة", "جاهز للتجارة الإلكترونية", "ميزات مخصصة", "إعداد التحليلات", "دعم لمدة ٦ أشهر"]
      },
      ideal: { en: "Large businesses", ar: "الشركات الكبيرة" }
    }
  ];

  const technologies = [
    { name: "React", color: "bg-blue-400" },
    { name: "TypeScript", color: "bg-blue-500" },
    { name: "Node.js", color: "bg-blue-600" },
    { name: "WordPress", color: "bg-blue-700" },
    { name: "Shopify", color: "bg-blue-800" },
    { name: "HTML5/CSS3", color: "bg-blue-900" }
  ];

  const tabContent = {
    design: {
      en: {
        title: "Design Excellence",
        items: [
          "Brand-aligned visual identity",
          "User-centered design approach",
          "Modern and professional aesthetics",
          "Mobile-first responsive design"
        ]
      },
      ar: {
        title: "تميز التصميم",
        items: [
          "هوية بصرية متماشية مع العلامة التجارية",
          "نهج تصميم يركز على المستخدم",
          "جماليات حديثة ومهنية",
          "تصميم متجاوب يركز على الهاتف المحمول"
        ]
      }
    },
    development: {
      en: {
        title: "Technical Excellence",
        items: [
          "Clean, maintainable code",
          "Fast loading performance",
          "Cross-browser compatibility",
          "Security best practices"
        ]
      },
      ar: {
        title: "التميز التقني",
        items: [
          "كود نظيف وقابل للصيانة",
          "أداء تحميل سريع",
          "توافق عبر المتصفحات",
          "أفضل ممارسات الأمان"
        ]
      }
    },
    maintenance: {
      en: {
        title: "Ongoing Support",
        items: [
          "Regular updates and backups",
          "Security monitoring",
          "Performance optimization",
          "Content management training"
        ]
      },
      ar: {
        title: "الدعم المستمر",
        items: [
          "تحديثات ونسخ احتياطية منتظمة",
          "مراقبة الأمان",
          "تحسين الأداء",
          "تدريب على إدارة المحتوى"
        ]
      }
    }
  };

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={websiteHeaderImage}
      />

      {/* Overview Section with Split Layout */}
      <Section background="white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
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
                
                {/* Device Preview */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Monitor className="w-8 h-8 text-primary" />
                    <span className="text-sm font-medium text-gray-600">Desktop</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tablet className="w-6 h-6 text-primary" />
                    <span className="text-sm font-medium text-gray-600">Tablet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-gray-600">Mobile</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Mock Website Preview */}
                <div className="bg-white rounded-2xl shadow-2xl border-8 border-gray-200 overflow-hidden">
                  <div className="bg-gray-100 px-4 py-2 flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="ml-4 bg-white rounded px-3 py-1 text-xs text-gray-600">
                      yourwebsite.com
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-primary to-primary-dark text-white">
                    <div className="w-16 h-4 bg-accent rounded mb-4"></div>
                    <div className="w-24 h-6 bg-white bg-opacity-20 rounded mb-2"></div>
                    <div className="w-32 h-3 bg-white bg-opacity-20 rounded"></div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="w-full h-3 bg-gray-200 rounded"></div>
                    <div className="w-4/5 h-3 bg-gray-200 rounded"></div>
                    <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services with Tab Interface */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.services}
          </motion.h2>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl p-2 shadow-lg border border-accent">
              {['design', 'development', 'maintenance'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-primary text-accent-light shadow-md'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {c[`${tab}Tab`]}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-accent"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                {tabContent[activeTab][language].title}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {tabContent[activeTab][language].items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {webServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-accent hover:shadow-xl transition-all duration-300"
              >
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service[language].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service[language].description}
                </p>
                <ul className="space-y-2">
                  {service[language].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Website Types Grid */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.portfolio}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {websiteTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-primary to-primary-dark text-accent-light rounded-2xl p-8 mb-4 group-hover:scale-105 transition-transform duration-300">
                  {type.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {type[language].title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {type[language].description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Timeline */}
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

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent hidden lg:block"></div>
            
            <div className="space-y-8">
              {developmentProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-accent">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary text-accent-light rounded-full w-12 h-12 flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-semibold text-primary">
                          {step[language].title}
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        {step[language].description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing Packages */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.packages}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border-2 border-accent transition-all duration-300 hover:scale-105 hover:border-primary shadow-lg hover:shadow-xl"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 text-primary">
                    {pkg.name[language]}
                  </h3>
                  <div className="text-3xl font-bold mb-6 text-primary">
                    {pkg.price[language]}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features[language].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm font-medium text-gray-600">
                    {language === 'ar' ? 'مثالي لـ' : 'Ideal for'}: {pkg.ideal[language]}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technologies */}
      <Section background="light">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary mb-12"
          >
            {c.technologies}
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${tech.color} text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
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
                  onClick={handleStartProject}
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {c.startProject}
                </button>
                <button 
                  onClick={handleGetQuote}
                  className="bg-accent hover:bg-accent-dark text-primary font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {c.getQuote}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default WebsiteDesignDevelopment;