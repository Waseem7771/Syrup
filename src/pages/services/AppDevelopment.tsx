import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { Smartphone, Tablet, Monitor, Zap, Shield, Users, Star, CheckCircle, ArrowRight, Download, Play, Apple, Code, Palette, Settings, Cloud } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import appDevHeaderImage from '../../assets/images/4.png';

const AppDevelopment: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState('mobile');

  const handleGetQuote = () => {
    navigate('/consulting/legal');
  };

  const handleStartProject = () => {
    navigate('/register');
  };

  const content = {
    en: {
      title: "Mobile & Web App Development",
      subtitle: "Transform your business ideas into powerful mobile and web applications for the Syrian market",
      overview: "Innovative App Solutions for Modern Businesses",
      overviewDesc: "We create cutting-edge mobile and web applications that engage users, streamline business processes, and drive growth. Our apps are designed specifically for the Syrian market with local preferences and cultural considerations in mind.",
      platforms: "Development Platforms",
      features: "App Features & Capabilities",
      process: "Development Process",
      portfolio: "App Categories",
      technologies: "Technology Stack",
      cta: "Ready to Build Your App?",
      ctaDesc: "Let's turn your app idea into reality with our expert development team.",
      getQuote: "Get Development Quote",
      startProject: "Start Your App Project",
      mobileTab: "Mobile Apps",
      webTab: "Web Apps",
      hybridTab: "Hybrid Solutions"
    },
    ar: {
      title: "تطوير تطبيقات الجوال والويب",
      subtitle: "حول أفكار أعمالك إلى تطبيقات جوال وويب قوية للسوق السوري",
      overview: "حلول تطبيقات مبتكرة للأعمال الحديثة",
      overviewDesc: "نحن ننشئ تطبيقات جوال وويب متطورة تجذب المستخدمين وتبسط العمليات التجارية وتدفع النمو. تطبيقاتنا مصممة خصيصاً للسوق السوري مع مراعاة التفضيلات المحلية والاعتبارات الثقافية.",
      platforms: "منصات التطوير",
      features: "ميزات وقدرات التطبيقات",
      process: "عملية التطوير",
      portfolio: "فئات التطبيقات",
      technologies: "المجموعة التقنية",
      cta: "مستعد لبناء تطبيقك؟",
      ctaDesc: "دعنا نحول فكرة تطبيقك إلى واقع مع فريق التطوير الخبير لدينا.",
      getQuote: "احصل على عرض سعر التطوير",
      startProject: "ابدأ مشروع تطبيقك",
      mobileTab: "تطبيقات الجوال",
      webTab: "تطبيقات الويب",
      hybridTab: "الحلول المختلطة"
    }
  };

  const developmentPlatforms = [
    {
      id: 'mobile',
      icon: <Smartphone className="w-8 h-8" />,
      en: {
        title: "Native Mobile Apps",
        description: "iOS and Android applications with platform-specific optimizations",
        features: ["iOS (Swift/Objective-C)", "Android (Kotlin/Java)", "Native performance", "Platform UI guidelines", "App store optimization"]
      },
      ar: {
        title: "تطبيقات الجوال الأصلية",
        description: "تطبيقات iOS و Android مع تحسينات خاصة بكل منصة",
        features: ["iOS (Swift/Objective-C)", "Android (Kotlin/Java)", "أداء أصلي", "إرشادات واجهة المنصة", "تحسين متجر التطبيقات"]
      }
    },
    {
      id: 'web',
      icon: <Monitor className="w-8 h-8" />,
      en: {
        title: "Progressive Web Apps",
        description: "Web applications that work like native apps across all devices",
        features: ["Cross-platform compatibility", "Offline functionality", "Push notifications", "App-like experience", "No app store required"]
      },
      ar: {
        title: "تطبيقات الويب التقدمية",
        description: "تطبيقات ويب تعمل مثل التطبيقات الأصلية عبر جميع الأجهزة",
        features: ["توافق عبر المنصات", "وظائف دون اتصال", "إشعارات فورية", "تجربة شبيهة بالتطبيقات", "لا يتطلب متجر تطبيقات"]
      }
    },
    {
      id: 'hybrid',
      icon: <Tablet className="w-8 h-8" />,
      en: {
        title: "Hybrid Solutions",
        description: "Single codebase applications that run on multiple platforms",
        features: ["React Native/Flutter", "Faster development", "Cost-effective", "Shared codebase", "Native-like performance"]
      },
      ar: {
        title: "الحلول المختلطة",
        description: "تطبيقات بكود واحد تعمل على منصات متعددة",
        features: ["React Native/Flutter", "تطوير أسرع", "فعال من حيث التكلفة", "كود مشترك", "أداء شبيه بالأصلي"]
      }
    }
  ];

  const appFeatures = [
    {
      icon: <Users className="w-12 h-12" />,
      en: { title: "User Authentication", description: "Secure login and user management systems" },
      ar: { title: "مصادقة المستخدم", description: "أنظمة تسجيل دخول آمنة وإدارة المستخدمين" }
    },
    {
      icon: <Shield className="w-12 h-12" />,
      en: { title: "Data Security", description: "Enterprise-grade security and encryption" },
      ar: { title: "أمان البيانات", description: "أمان وتشفير على مستوى المؤسسات" }
    },
    {
      icon: <Zap className="w-12 h-12" />,
      en: { title: "Real-time Updates", description: "Live data synchronization and notifications" },
      ar: { title: "التحديثات الفورية", description: "مزامنة البيانات المباشرة والإشعارات" }
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      en: { title: "Cloud Integration", description: "Seamless cloud storage and backup solutions" },
      ar: { title: "التكامل السحابي", description: "حلول تخزين ونسخ احتياطي سحابية سلسة" }
    }
  ];

  const appCategories = [
    {
      en: { title: "Business Apps", description: "Enterprise solutions for businesses in Syria" },
      ar: { title: "تطبيقات الأعمال", description: "حلول مؤسسية للشركات في سوريا" },
      icon: "💼"
    },
    {
      en: { title: "E-commerce Apps", description: "Online shopping and marketplace applications" },
      ar: { title: "تطبيقات التجارة الإلكترونية", description: "تطبيقات التسوق عبر الإنترنت والأسواق" },
      icon: "🛒"
    },
    {
      en: { title: "Educational Apps", description: "Learning and training applications" },
      ar: { title: "التطبيقات التعليمية", description: "تطبيقات التعلم والتدريب" },
      icon: "📚"
    },
    {
      en: { title: "Healthcare Apps", description: "Medical and wellness applications" },
      ar: { title: "تطبيقات الرعاية الصحية", description: "تطبيقات طبية وصحية" },
      icon: "🏥"
    },
    {
      en: { title: "Social Apps", description: "Community and networking platforms" },
      ar: { title: "التطبيقات الاجتماعية", description: "منصات المجتمع والشبكات" },
      icon: "👥"
    },
    {
      en: { title: "Utility Apps", description: "Productivity and lifestyle applications" },
      ar: { title: "تطبيقات الأدوات", description: "تطبيقات الإنتاجية ونمط الحياة" },
      icon: "⚙️"
    }
  ];

  const developmentSteps = [
    {
      step: 1,
      en: { title: "Discovery & Planning", description: "Understanding requirements and creating project roadmap" },
      ar: { title: "الاكتشاف والتخطيط", description: "فهم المتطلبات وإنشاء خارطة طريق المشروع" }
    },
    {
      step: 2,
      en: { title: "UI/UX Design", description: "Creating intuitive and engaging user interfaces" },
      ar: { title: "تصميم واجهة وتجربة المستخدم", description: "إنشاء واجهات مستخدم بديهية وجذابة" }
    },
    {
      step: 3,
      en: { title: "Development & Coding", description: "Building the application with best practices" },
      ar: { title: "التطوير والبرمجة", description: "بناء التطبيق بأفضل الممارسات" }
    },
    {
      step: 4,
      en: { title: "Testing & Quality Assurance", description: "Comprehensive testing and bug fixing" },
      ar: { title: "الاختبار وضمان الجودة", description: "اختبار شامل وإصلاح الأخطاء" }
    },
    {
      step: 5,
      en: { title: "Deployment & Launch", description: "Publishing to app stores and web platforms" },
      ar: { title: "النشر والإطلاق", description: "النشر على متاجر التطبيقات ومنصات الويب" }
    }
  ];

  const technologies = [
    { name: "React Native", category: "Mobile" },
    { name: "Flutter", category: "Mobile" },
    { name: "Swift", category: "iOS" },
    { name: "Kotlin", category: "Android" },
    { name: "React", category: "Web" },
    { name: "Vue.js", category: "Web" },
    { name: "Node.js", category: "Backend" },
    { name: "Firebase", category: "Backend" }
  ];

  const c = content[language];
  const currentPlatform = developmentPlatforms.find(p => p.id === selectedPlatform);

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={appDevHeaderImage}
      />

      {/* Overview Section with Phone Mockup */}
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
              
              {/* App Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg border border-accent">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-600">
                    {language === 'ar' ? 'تطبيق مطور' : 'Apps Developed'}
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg border border-accent">
                  <div className="text-2xl font-bold text-primary">99%</div>
                  <div className="text-sm text-gray-600">
                    {language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction'}
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg border border-accent">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-gray-600">
                    {language === 'ar' ? 'الدعم' : 'Support'}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              {/* Phone Mockup */}
              <div className="relative">
                <div className="w-64 h-[500px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-primary h-8 flex items-center justify-between px-4 text-white text-xs">
                      <span>9:41</span>
                      <span>100%</span>
                    </div>
                    {/* App Content */}
                    <div className="p-4 space-y-4">
                      <div className="h-16 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">Your App</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-20 bg-accent rounded-lg"></div>
                        <div className="h-20 bg-accent-dark rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -right-4 top-20 bg-primary text-white p-3 rounded-full shadow-lg"
                >
                  <Smartphone className="w-6 h-6" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute -left-4 bottom-20 bg-accent text-primary p-3 rounded-full shadow-lg"
                >
                  <Star className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Platform Selection with Interactive Tabs */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.platforms}
          </motion.h2>

          {/* Platform Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-accent">
              {developmentPlatforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    selectedPlatform === platform.id
                      ? 'bg-primary text-accent-light shadow-md'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {platform.icon}
                  <span>{platform[language].title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Platform Content */}
          <AnimatePresence mode="wait">
            {currentPlatform && (
              <motion.div
                key={selectedPlatform}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-accent"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {currentPlatform[language].title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {currentPlatform[language].description}
                  </p>
                </div>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {currentPlatform[language].features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 text-center border border-accent"
                    >
                      <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>

      {/* App Features Grid */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.features}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`bg-gradient-to-br from-primary to-primary-dark text-accent-light rounded-2xl p-6 mb-4 transition-all duration-300 ${
                  activeFeature === index ? 'scale-110 shadow-xl' : 'group-hover:scale-105'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {feature[language].title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature[language].description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* App Categories Hexagon Grid */}
      <Section background="light">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-accent hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4 text-center">{category.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-2 text-center">
                  {category[language].title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {category[language].description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Development Process Timeline */}
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

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent hidden lg:block"></div>
            
            <div className="space-y-12">
              {developmentSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-accent">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="bg-primary text-accent-light rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl">
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

      {/* Technology Stack */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 shadow-md border border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="font-semibold text-primary mb-1">{tech.name}</div>
                <div className="text-sm text-gray-500">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-accent">
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
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  {c.startProject}
                </button>
                <button 
                  onClick={handleGetQuote}
                  className="bg-accent hover:bg-accent-dark text-primary font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
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

export default AppDevelopment;