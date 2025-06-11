import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { Server, Shield, Zap, Globe, Database, Clock, CheckCircle, ArrowRight, Cloud, HardDrive, Wifi, Settings, Monitor, Lock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import hostingHeaderImage from '../../assets/images/12.png';

const HostingInfrastructure: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState('cloud');
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleGetQuote = () => {
    navigate('/consulting/legal');
  };

  const handleStartProject = () => {
    navigate('/register');
  };

  const content = {
    en: {
      title: "Hosting & Infrastructure Services",
      subtitle: "Reliable, secure, and scalable hosting solutions for Syrian businesses",
      overview: "Enterprise-Grade Infrastructure Solutions",
      overviewDesc: "We provide comprehensive hosting and infrastructure services designed specifically for Syrian businesses. Our solutions ensure your applications and websites run smoothly, securely, and efficiently in the Syrian market.",
      services: "Our Infrastructure Services",
      plans: "Hosting Plans",
      features: "Key Features",
      support: "24/7 Support",
      security: "Security & Compliance",
      performance: "Performance Metrics",
      cta: "Ready to Host Your Business?",
      ctaDesc: "Get reliable hosting infrastructure that grows with your business.",
      getQuote: "Get Hosting Quote",
      startProject: "Start Your Hosting",
      cloudTab: "Cloud Hosting",
      dedicatedTab: "Dedicated Servers",
      managedTab: "Managed Services"
    },
    ar: {
      title: "خدمات الاستضافة والبنية التحتية",
      subtitle: "حلول استضافة موثوقة وآمنة وقابلة للتوسع للشركات في سوريا",
      overview: "حلول البنية التحتية على مستوى المؤسسات",
      overviewDesc: "نحن نقدم خدمات استضافة وبنية تحتية شاملة مصممة خصيصاً للشركات في سوريا. حلولنا تضمن تشغيل تطبيقاتك ومواقعك بسلاسة وأمان وكفاءة في السوق السوري.",
      services: "خدمات البنية التحتية لدينا",
      plans: "خطط الاستضافة",
      features: "الميزات الرئيسية",
      support: "دعم على مدار الساعة",
      security: "الأمان والامتثال",
      performance: "مقاييس الأداء",
      cta: "مستعد لاستضافة أعمالك؟",
      ctaDesc: "احصل على بنية تحتية استضافة موثوقة تنمو مع أعمالك.",
      getQuote: "احصل على عرض سعر الاستضافة",
      startProject: "ابدأ استضافتك",
      cloudTab: "الاستضافة السحابية",
      dedicatedTab: "خوادم مخصصة",
      managedTab: "خدمات مُدارة"
    }
  };

  const infrastructureServices = [
    {
      id: 'cloud',
      icon: <Cloud className="w-8 h-8" />,
      en: {
        title: "Cloud Hosting Solutions",
        description: "Scalable cloud infrastructure with automatic scaling and high availability",
        features: ["Auto-scaling resources", "Load balancing", "99.9% uptime SLA", "Global CDN", "Backup & recovery"]
      },
      ar: {
        title: "حلول الاستضافة السحابية",
        description: "بنية تحتية سحابية قابلة للتوسع مع التحجيم التلقائي والتوفر العالي",
        features: ["موارد التحجيم التلقائي", "توزيع الأحمال", "99.9% اتفاقية مستوى الخدمة", "شبكة توصيل المحتوى العالمية", "النسخ الاحتياطي والاستعادة"]
      }
    },
    {
      id: 'dedicated',
      icon: <Server className="w-8 h-8" />,
      en: {
        title: "Dedicated Server Hosting",
        description: "High-performance dedicated servers for mission-critical applications",
        features: ["Intel Xeon processors", "SSD storage", "Dedicated resources", "Custom configurations", "Hardware monitoring"]
      },
      ar: {
        title: "استضافة الخوادم المخصصة",
        description: "خوادم مخصصة عالية الأداء للتطبيقات المهمة",
        features: ["معالجات Intel Xeon", "تخزين SSD", "موارد مخصصة", "تكوينات مخصصة", "مراقبة الأجهزة"]
      }
    },
    {
      id: 'managed',
      icon: <Settings className="w-8 h-8" />,
      en: {
        title: "Managed Infrastructure",
        description: "Fully managed hosting with expert technical support and maintenance",
        features: ["24/7 monitoring", "Security updates", "Performance optimization", "Database management", "Technical support"]
      },
      ar: {
        title: "البنية التحتية المُدارة",
        description: "استضافة مُدارة بالكامل مع دعم فني متخصص وصيانة",
        features: ["مراقبة على مدار الساعة", "تحديثات الأمان", "تحسين الأداء", "إدارة قواعد البيانات", "الدعم الفني"]
      }
    }
  ];

  const hostingPlans = [
    {
      name: { en: "Starter", ar: "المبتدئ" },
      price: { en: "$15/month", ar: "١٥ دولار/شهرياً" },
      specs: {
        en: ["2 CPU Cores", "4GB RAM", "50GB SSD Storage", "1TB Bandwidth", "Basic Support"],
        ar: ["٢ نواة معالج", "٤ جيجابايت رام", "٥٠ جيجابايت تخزين SSD", "١ تيرابايت نقل البيانات", "دعم أساسي"]
      },
      ideal: { en: "Small websites", ar: "المواقع الصغيرة" }
    },
    {
      name: { en: "Professional", ar: "المحترف" },
      price: { en: "$45/month", ar: "٤٥ دولار/شهرياً" },
      specs: {
        en: ["4 CPU Cores", "8GB RAM", "200GB SSD Storage", "5TB Bandwidth", "Priority Support"],
        ar: ["٤ أنوية معالج", "٨ جيجابايت رام", "٢٠٠ جيجابايت تخزين SSD", "٥ تيرابايت نقل البيانات", "دعم أولوية"]
      },
      ideal: { en: "Business applications", ar: "تطبيقات الأعمال" }
    },
    {
      name: { en: "Enterprise", ar: "المؤسسي" },
      price: { en: "$120/month", ar: "١٢٠ دولار/شهرياً" },
      specs: {
        en: ["8 CPU Cores", "32GB RAM", "1TB SSD Storage", "Unlimited Bandwidth", "24/7 Dedicated Support"],
        ar: ["٨ أنوية معالج", "٣٢ جيجابايت رام", "١ تيرابايت تخزين SSD", "نقل بيانات غير محدود", "دعم مخصص على مدار الساعة"]
      },
      ideal: { en: "Large enterprises", ar: "المؤسسات الكبيرة" }
    }
  ];

  const keyFeatures = [
    {
      icon: <Shield className="w-12 h-12" />,
      en: { title: "Advanced Security", description: "DDoS protection, SSL certificates, and security monitoring" },
      ar: { title: "أمان متقدم", description: "حماية من هجمات DDoS وشهادات SSL ومراقبة الأمان" }
    },
    {
      icon: <Zap className="w-12 h-12" />,
      en: { title: "High Performance", description: "SSD storage, CDN integration, and optimized configurations" },
      ar: { title: "أداء عالي", description: "تخزين SSD وتكامل CDN وتكوينات محسنة" }
    },
    {
      icon: <Database className="w-12 h-12" />,
      en: { title: "Automatic Backups", description: "Daily automated backups with point-in-time recovery" },
      ar: { title: "نسخ احتياطية تلقائية", description: "نسخ احتياطية يومية تلقائية مع استعادة نقطة زمنية" }
    },
    {
      icon: <Globe className="w-12 h-12" />,
      en: { title: "Global Network", description: "Multiple data centers and edge locations worldwide" },
      ar: { title: "شبكة عالمية", description: "مراكز بيانات متعددة ومواقع حافة حول العالم" }
    }
  ];

  const performanceMetrics = [
    { metric: "99.9%", label: { en: "Uptime Guarantee", ar: "ضمان وقت التشغيل" } },
    { metric: "<100ms", label: { en: "Response Time", ar: "وقت الاستجابة" } },
    { metric: "24/7", label: { en: "Monitoring", ar: "المراقبة" } },
    { metric: "15min", label: { en: "Backup Frequency", ar: "تكرار النسخ الاحتياطي" } }
  ];

  const securityFeatures = [
    { en: "DDoS Protection", ar: "حماية من هجمات DDoS" },
    { en: "SSL/TLS Encryption", ar: "تشفير SSL/TLS" },
    { en: "Firewall Protection", ar: "حماية جدار الحماية" },
    { en: "Malware Scanning", ar: "فحص البرامج الضارة" },
    { en: "Intrusion Detection", ar: "كشف التسلل" },
    { en: "Security Auditing", ar: "تدقيق الأمان" }
  ];

  const c = content[language];
  const currentService = infrastructureServices.find(s => s.id === activeService);

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={hostingHeaderImage}
      />

      {/* Overview Section with Server Visualization */}
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
              
              {/* Performance Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {performanceMetrics.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center border border-accent">
                    <div className="text-2xl font-bold text-primary">{item.metric}</div>
                    <div className="text-sm text-gray-600">{item.label[language]}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Server Rack Visualization */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((server) => (
                    <motion.div
                      key={server}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: server * 0.2, duration: 0.5 }}
                      className="bg-primary rounded-lg p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <Server className="w-6 h-6 text-accent" />
                        <span className="text-accent-light font-medium">
                          Server {server}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <motion.div
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: server * 0.1 }}
                          className="w-3 h-3 bg-green-400 rounded-full"
                        ></motion.div>
                        <div className="w-3 h-3 bg-accent rounded-full"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <span className="text-accent text-sm">
                    {language === 'ar' ? 'حالة الخوادم: نشطة' : 'Server Status: Active'}
                  </span>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-4 top-8 bg-accent text-primary p-3 rounded-full shadow-lg"
              >
                <Cloud className="w-6 h-6" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -left-4 bottom-8 bg-primary text-accent p-3 rounded-full shadow-lg"
              >
                <Shield className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Services with Interactive Tabs */}
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

          {/* Service Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-accent">
              {infrastructureServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeService === service.id
                      ? 'bg-primary text-accent-light shadow-md'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {service.icon}
                  <span>{service[language].title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Service Content */}
          <AnimatePresence mode="wait">
            {currentService && (
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-accent"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {currentService[language].title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {currentService[language].description}
                  </p>
                </div>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {currentService[language].features.map((feature, index) => (
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

      {/* Key Features Grid */}
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
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-primary to-primary-dark text-accent-light rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300">
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

      {/* Hosting Plans */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.plans}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, index) => (
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
                    {plan.name[language]}
                  </h3>
                  <div className="text-3xl font-bold mb-6 text-primary">
                    {plan.price[language]}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.specs[language].map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm font-medium text-gray-600">
                    {language === 'ar' ? 'مثالي لـ' : 'Ideal for'}: {plan.ideal[language]}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Security Features */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.security}
          </motion.h2>

          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white bg-opacity-10 rounded-lg p-4"
                >
                  <Lock className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-accent-light">{feature[language]}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Support Section */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">{c.support}</h2>
              <p className="text-lg text-gray-700 mb-6">
                {language === 'ar' 
                  ? 'فريق الدعم الفني لدينا متاح على مدار الساعة لضمان تشغيل بنيتك التحتية بسلاسة.'
                  : 'Our technical support team is available 24/7 to ensure your infrastructure runs smoothly.'
                }
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <span className="text-gray-700">
                    {language === 'ar' ? 'استجابة فورية في حالات الطوارئ' : 'Immediate emergency response'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Monitor className="w-6 h-6 text-primary" />
                  <span className="text-gray-700">
                    {language === 'ar' ? 'مراقبة استباقية للبنية التحتية' : 'Proactive infrastructure monitoring'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Settings className="w-6 h-6 text-primary" />
                  <span className="text-gray-700">
                    {language === 'ar' ? 'صيانة وتحديثات منتظمة' : 'Regular maintenance and updates'}
                  </span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-accent"
            >
              <div className="text-center">
                <div className="bg-primary text-accent-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {language === 'ar' ? 'مراقبة الشبكة المباشرة' : 'Live Network Monitoring'}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <div className="text-sm text-green-600 font-medium">CPU</div>
                    <div className="text-lg font-bold text-green-700">12%</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <div className="text-sm text-blue-600 font-medium">RAM</div>
                    <div className="text-lg font-bold text-blue-700">34%</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                    <div className="text-sm text-yellow-600 font-medium">Storage</div>
                    <div className="text-lg font-bold text-yellow-700">67%</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                    <div className="text-sm text-purple-600 font-medium">Network</div>
                    <div className="text-lg font-bold text-purple-700">89%</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
                  <Server className="w-5 h-5" />
                  {c.startProject}
                </button>
                <button 
                  onClick={handleGetQuote}
                  className="bg-accent hover:bg-accent-dark text-primary font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <ArrowRight className="w-5 h-5" />
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

export default HostingInfrastructure;