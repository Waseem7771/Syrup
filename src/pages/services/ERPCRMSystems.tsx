import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { BarChart3, Users, Database, Workflow, Target, TrendingUp, CheckCircle, ArrowRight, Settings, PieChart, FileText, Calendar, Phone, Mail, ShoppingCart, DollarSign } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import erpCrmHeaderImage from '../../assets/images/8.png';

const ERPCRMSystems: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeSystem, setActiveSystem] = useState('erp');
  const [selectedModule, setSelectedModule] = useState('');

  const handleGetQuote = () => {
    navigate('/consulting/legal');
  };

  const handleStartProject = () => {
    navigate('/register');
  };

  const content = {
    en: {
      title: "ERP/CRM Business Systems",
      subtitle: "Streamline your Syrian business operations with comprehensive ERP and CRM solutions",
      overview: "Integrated Business Management Solutions",
      overviewDesc: "Transform your business operations with our comprehensive ERP and CRM systems designed specifically for Syrian businesses. Our solutions integrate all your business processes, from finance and inventory to customer relationships and sales management.",
      systems: "Business Systems",
      modules: "System Modules",
      benefits: "Key Benefits",
      implementation: "Implementation Process",
      industries: "Industries We Serve",
      features: "Advanced Features",
      cta: "Ready to Transform Your Business?",
      ctaDesc: "Let's implement a comprehensive business management system that scales with your growth.",
      getQuote: "Get Implementation Quote",
      startProject: "Start Your Project",
      erpTab: "ERP Systems",
      crmTab: "CRM Solutions",
      integrationTab: "Integration Services"
    },
    ar: {
      title: "أنظمة إدارة الأعمال ERP/CRM",
      subtitle: "تبسيط عمليات أعمالك السورية مع حلول ERP و CRM الشاملة",
      overview: "حلول إدارة الأعمال المتكاملة",
      overviewDesc: "حول عمليات أعمالك مع أنظمة ERP و CRM الشاملة المصممة خصيصاً للشركات السورية. حلولنا تدمج جميع عمليات أعمالك، من المالية والمخزون إلى علاقات العملاء وإدارة المبيعات.",
      systems: "أنظمة الأعمال",
      modules: "وحدات النظام",
      benefits: "الفوائد الرئيسية",
      implementation: "عملية التنفيذ",
      industries: "الصناعات التي نخدمها",
      features: "الميزات المتقدمة",
      cta: "مستعد لتحويل أعمالك؟",
      ctaDesc: "دعنا ننفذ نظام إدارة أعمال شامل ينمو مع نموك.",
      getQuote: "احصل على عرض سعر التنفيذ",
      startProject: "ابدأ مشروعك",
      erpTab: "أنظمة ERP",
      crmTab: "حلول CRM",
      integrationTab: "خدمات التكامل"
    }
  };

  const businessSystems = [
    {
      id: 'erp',
      icon: <BarChart3 className="w-8 h-8" />,
      en: {
        title: "Enterprise Resource Planning (ERP)",
        description: "Comprehensive business management system that integrates all core business processes",
        modules: ["Financial Management", "Inventory Control", "Human Resources", "Supply Chain", "Production Planning", "Reporting & Analytics"]
      },
      ar: {
        title: "تخطيط موارد المؤسسة (ERP)",
        description: "نظام إدارة أعمال شامل يدمج جميع العمليات التجارية الأساسية",
        modules: ["الإدارة المالية", "مراقبة المخزون", "الموارد البشرية", "سلسلة التوريد", "تخطيط الإنتاج", "التقارير والتحليلات"]
      }
    },
    {
      id: 'crm',
      icon: <Users className="w-8 h-8" />,
      en: {
        title: "Customer Relationship Management (CRM)",
        description: "Powerful system to manage customer interactions, sales processes, and marketing campaigns",
        modules: ["Lead Management", "Sales Pipeline", "Customer Support", "Marketing Automation", "Contact Management", "Sales Analytics"]
      },
      ar: {
        title: "إدارة علاقات العملاء (CRM)",
        description: "نظام قوي لإدارة تفاعلات العملاء وعمليات المبيعات والحملات التسويقية",
        modules: ["إدارة العملاء المحتملين", "خط أنابيب المبيعات", "دعم العملاء", "أتمتة التسويق", "إدارة جهات الاتصال", "تحليلات المبيعات"]
      }
    },
    {
      id: 'integration',
      icon: <Workflow className="w-8 h-8" />,
      en: {
        title: "System Integration Services",
        description: "Seamless integration between existing systems and new business management solutions",
        modules: ["API Integration", "Data Migration", "Third-party Connectors", "Custom Workflows", "System Synchronization", "Legacy System Bridge"]
      },
      ar: {
        title: "خدمات تكامل الأنظمة",
        description: "تكامل سلس بين الأنظمة الحالية وحلول إدارة الأعمال الجديدة",
        modules: ["تكامل API", "ترحيل البيانات", "موصلات الطرف الثالث", "سير العمل المخصص", "مزامنة النظام", "جسر النظام القديم"]
      }
    }
  ];

  const keyBenefits = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      en: { title: "Increased Efficiency", description: "Automate routine tasks and streamline business processes" },
      ar: { title: "زيادة الكفاءة", description: "أتمتة المهام الروتينية وتبسيط العمليات التجارية" }
    },
    {
      icon: <Database className="w-12 h-12" />,
      en: { title: "Centralized Data", description: "Single source of truth for all business information" },
      ar: { title: "بيانات مركزية", description: "مصدر واحد موثوق لجميع المعلومات التجارية" }
    },
    {
      icon: <Target className="w-12 h-12" />,
      en: { title: "Better Decision Making", description: "Real-time insights and comprehensive reporting" },
      ar: { title: "اتخاذ قرارات أفضل", description: "رؤى في الوقت الفعلي وتقارير شاملة" }
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      en: { title: "Cost Reduction", description: "Eliminate redundancy and optimize resource allocation" },
      ar: { title: "تقليل التكاليف", description: "القضاء على التكرار وتحسين تخصيص الموارد" }
    }
  ];

  const industries = [
    {
      name: { en: "Manufacturing", ar: "التصنيع" },
      icon: "🏭",
      description: { en: "Production planning and quality control", ar: "تخطيط الإنتاج ومراقبة الجودة" }
    },
    {
      name: { en: "Retail", ar: "التجارة" },
      icon: "🛍️",
      description: { en: "Inventory management and POS integration", ar: "إدارة المخزون وتكامل نقاط البيع" }
    },
    {
      name: { en: "Healthcare", ar: "الرعاية الصحية" },
      icon: "🏥",
      description: { en: "Patient management and medical records", ar: "إدارة المرضى والسجلات الطبية" }
    },
    {
      name: { en: "Education", ar: "التعليم" },
      icon: "📚",
      description: { en: "Student information and academic management", ar: "معلومات الطلاب والإدارة الأكاديمية" }
    },
    {
      name: { en: "Construction", ar: "البناء" },
      icon: "🏗️",
      description: { en: "Project management and resource planning", ar: "إدارة المشاريع وتخطيط الموارد" }
    },
    {
      name: { en: "Services", ar: "الخدمات" },
      icon: "⚙️",
      description: { en: "Service delivery and client management", ar: "تقديم الخدمات وإدارة العملاء" }
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      en: { title: "Business Analysis", description: "Comprehensive assessment of current processes and requirements" },
      ar: { title: "تحليل الأعمال", description: "تقييم شامل للعمليات والمتطلبات الحالية" }
    },
    {
      step: 2,
      en: { title: "System Design", description: "Custom system architecture and workflow design" },
      ar: { title: "تصميم النظام", description: "تصميم هندسة النظام وسير العمل المخصص" }
    },
    {
      step: 3,
      en: { title: "Development & Configuration", description: "System development and configuration based on requirements" },
      ar: { title: "التطوير والتكوين", description: "تطوير النظام وتكوينه بناءً على المتطلبات" }
    },
    {
      step: 4,
      en: { title: "Data Migration", description: "Secure transfer of existing data to the new system" },
      ar: { title: "ترحيل البيانات", description: "نقل آمن للبيانات الحالية إلى النظام الجديد" }
    },
    {
      step: 5,
      en: { title: "Testing & Training", description: "Comprehensive testing and user training programs" },
      ar: { title: "الاختبار والتدريب", description: "اختبار شامل وبرامج تدريب المستخدمين" }
    },
    {
      step: 6,
      en: { title: "Go-Live & Support", description: "System deployment and ongoing support services" },
      ar: { title: "التشغيل والدعم", description: "نشر النظام وخدمات الدعم المستمر" }
    }
  ];

  const advancedFeatures = [
    { en: "Real-time Dashboard", ar: "لوحة تحكم في الوقت الفعلي", icon: <PieChart className="w-5 h-5" /> },
    { en: "Mobile Access", ar: "وصول عبر الهاتف المحمول", icon: <Phone className="w-5 h-5" /> },
    { en: "Automated Reporting", ar: "تقارير تلقائية", icon: <FileText className="w-5 h-5" /> },
    { en: "Task Scheduling", ar: "جدولة المهام", icon: <Calendar className="w-5 h-5" /> },
    { en: "Email Integration", ar: "تكامل البريد الإلكتروني", icon: <Mail className="w-5 h-5" /> },
    { en: "E-commerce Integration", ar: "تكامل التجارة الإلكترونية", icon: <ShoppingCart className="w-5 h-5" /> }
  ];

  const c = content[language];
  const currentSystem = businessSystems.find(s => s.id === activeSystem);

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={erpCrmHeaderImage}
      />

      {/* Overview Section with Dashboard Preview */}
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
              
              {/* System Statistics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center border border-accent">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-gray-600">
                    {language === 'ar' ? 'تحسن الكفاءة' : 'Efficiency Improvement'}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center border border-accent">
                  <div className="text-2xl font-bold text-primary">30%</div>
                  <div className="text-sm text-gray-600">
                    {language === 'ar' ? 'توفير التكاليف' : 'Cost Savings'}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center border border-accent">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-gray-600">
                    {language === 'ar' ? 'الوصول للنظام' : 'System Access'}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center border border-accent">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-sm text-gray-600">
                    {language === 'ar' ? 'عميل راضٍ' : 'Satisfied Clients'}
                  </div>
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
              {/* Dashboard Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl border border-accent overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-primary text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-6 h-6" />
                    <span className="font-semibold">Business Dashboard</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                      <div className="text-xs text-blue-600 mb-1">Sales</div>
                      <div className="text-lg font-bold text-blue-700">$12,450</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <div className="text-xs text-green-600 mb-1">Orders</div>
                      <div className="text-lg font-bold text-green-700">147</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                      <div className="text-xs text-purple-600 mb-1">Customers</div>
                      <div className="text-lg font-bold text-purple-700">89</div>
                    </div>
                  </div>
                  
                  {/* Chart Area */}
                  <div className="bg-gray-50 rounded-lg p-4 h-32 flex items-end justify-between">
                    {[40, 65, 45, 80, 55, 70, 60].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="bg-primary rounded-t w-6"
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -right-4 top-12 bg-accent text-primary p-3 rounded-full shadow-lg"
              >
                <Users className="w-6 h-6" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute -left-4 bottom-12 bg-primary text-accent p-3 rounded-full shadow-lg"
              >
                <Database className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Business Systems with Tabs */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.systems}
          </motion.h2>

          {/* System Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-accent">
              {businessSystems.map((system) => (
                <button
                  key={system.id}
                  onClick={() => setActiveSystem(system.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeSystem === system.id
                      ? 'bg-primary text-accent-light shadow-md'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {system.icon}
                  <span>{system[language].title.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* System Content */}
          <AnimatePresence mode="wait">
            {currentSystem && (
              <motion.div
                key={activeSystem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-accent"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {currentSystem[language].title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {currentSystem[language].description}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentSystem[language].modules.map((module, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 text-center border border-accent hover:border-primary transition-colors duration-300"
                    >
                      <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-700">{module}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section background="white">
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
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-primary to-primary-dark text-accent-light rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {benefit[language].title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit[language].description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Industries We Serve */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.industries}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-accent hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4 text-center">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-2 text-center">
                  {industry.name[language]}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {industry.description[language]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Implementation Process */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-16"
          >
            {c.implementation}
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent hidden lg:block"></div>
            
            <div className="space-y-12">
              {implementationSteps.map((step, index) => (
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

      {/* Advanced Features */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.features}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 shadow-md border border-accent hover:shadow-lg transition-all duration-300 flex items-center gap-3"
              >
                <div className="text-primary">{feature.icon}</div>
                <span className="font-medium text-gray-700">{feature[language]}</span>
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
                  <Settings className="w-5 h-5" />
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

export default ERPCRMSystems;