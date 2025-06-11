import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { useLanguage } from '../../contexts/LanguageContext';
import auditHeaderImage from '../../assets/images/16.png';
import {
  FileText,
  Shield,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  PieChart,
  BarChart3,
  Calculator,
  Search,
  FileCheck,
  AlertCircle,
  Clock,
  Target,
  Award,
  Eye,
  Download,
  Calendar,
  Users,
  Building,
  DollarSign,
  Percent,
  ArrowRight,
  Star,
  Lock,
  Zap,
  BookOpen,
  ClipboardCheck,
  LineChart,
  Grid,
  Database,
  Filter,
  Layers
} from 'lucide-react';

const OfficialAndFinancialDocumentAuditing: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeAuditType, setActiveAuditType] = useState('financial');
  const [auditProgress, setAuditProgress] = useState(0);
  const [selectedMetric, setSelectedMetric] = useState(0);
  const [animatedMetrics, setAnimatedMetrics] = useState({
    accuracy: 0,
    completed: 0,
    compliance: 0,
    efficiency: 0
  });

  // Animate metrics on load
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedMetrics(prev => ({
        accuracy: Math.min(prev.accuracy + 2, 99.7),
        completed: Math.min(prev.completed + 15, 850),
        compliance: Math.min(prev.compliance + 1.5, 98.5),
        efficiency: Math.min(prev.efficiency + 3, 87)
      }));
    }, 50);

    setTimeout(() => clearInterval(interval), 3000);
    return () => clearInterval(interval);
  }, []);

  // Animate audit progress
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setAuditProgress(prev => (prev + 1) % 101);
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  const content = {
    en: {
      title: "Official & Financial Document Auditing",
      subtitle: "Comprehensive document auditing services ensuring accuracy, compliance, and integrity of your financial and official records - specialized for Syrian business requirements",
      overview: "Precision Audit Excellence",
      overviewDesc: "Our certified auditing team provides meticulous examination of financial statements, official documents, and regulatory filings. We ensure compliance with Syrian accounting standards and international best practices while identifying risks and optimization opportunities.",
      
      // Services
      financialTitle: "Financial Document Auditing",
      officialTitle: "Official Document Verification",
      complianceTitle: "Regulatory Compliance Auditing",
      
      // Process
      processTitle: "Our Auditing Methodology",
      
      // Tools
      toolsTitle: "Advanced Auditing Tools",
      
      // CTA
      ctaTitle: "Ready for Professional Document Auditing?",
      ctaDesc: "Ensure the accuracy and compliance of your business documents with our comprehensive auditing services tailored for Syrian regulatory requirements.",
      
      // Buttons
      startAudit: "Start Audit Process",
      bookConsultation: "Book Consultation",
      downloadSample: "Download Sample Report",
      viewMethodology: "View Methodology"
    },
    ar: {
      title: "تدقيق الوثائق الرسمية والمالية",
      subtitle: "خدمات تدقيق شاملة للوثائق تضمن الدقة والامتثال وسلامة سجلاتك المالية والرسمية - متخصصة لمتطلبات الأعمال السورية",
      overview: "تميز التدقيق الدقيق",
      overviewDesc: "يوفر فريق التدقيق المعتمد لدينا فحصاً دقيقاً للقوائم المالية والوثائق الرسمية والإيداعات التنظيمية. نضمن الامتثال لمعايير المحاسبة السورية وأفضل الممارسات الدولية مع تحديد المخاطر وفرص التحسين.",
      
      // Services
      financialTitle: "تدقيق الوثائق المالية",
      officialTitle: "التحقق من الوثائق الرسمية",
      complianceTitle: "تدقيق الامتثال التنظيمي",
      
      // Process
      processTitle: "منهجية التدقيق لدينا",
      
      // Tools
      toolsTitle: "أدوات التدقيق المتقدمة",
      
      // CTA
      ctaTitle: "مستعد لتدقيق مهني للوثائق؟",
      ctaDesc: "اضمن دقة وامتثال وثائق أعمالك بخدماتنا الشاملة للتدقيق المصممة خصيصاً لمتطلبات الأنظمة السورية.",
      
      // Buttons
      startAudit: "ابدأ عملية التدقيق",
      bookConsultation: "احجز استشارة",
      downloadSample: "تحميل نموذج تقرير",
      viewMethodology: "عرض المنهجية"
    }
  };

  const auditTypes = [
    {
      id: 'financial',
      icon: <BarChart3 className="w-6 h-6" />,
      title: { en: 'Financial Auditing', ar: 'التدقيق المالي' },
      count: { en: '25 Categories', ar: '25 فئة' },
      color: 'from-primary to-primary-dark'
    },
    {
      id: 'official',
      icon: <FileCheck className="w-6 h-6" />,
      title: { en: 'Official Documents', ar: 'الوثائق الرسمية' },
      count: { en: '18 Types', ar: '18 نوع' },
      color: 'from-accent to-accent-dark'
    },
    {
      id: 'compliance',
      icon: <Shield className="w-6 h-6" />,
      title: { en: 'Compliance Check', ar: 'فحص الامتثال' },
      count: { en: '30 Standards', ar: '30 معيار' },
      color: 'from-primary-dark to-accent'
    }
  ];

  const financialAuditServices = [
    {
      icon: <PieChart className="w-8 h-8" />,
      title: { en: 'Balance Sheet Auditing', ar: 'تدقيق الميزانية العمومية' },
      description: { en: 'Comprehensive review of assets, liabilities, and equity statements', ar: 'مراجعة شاملة لبيانات الأصول والخصوم وحقوق الملكية' },
      accuracy: 99.2,
      items: {
        en: ['Asset verification', 'Liability assessment', 'Equity analysis', 'Ratio calculations'],
        ar: ['التحقق من الأصول', 'تقييم الخصوم', 'تحليل حقوق الملكية', 'حساب النسب']
      }
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: { en: 'Income Statement Review', ar: 'مراجعة بيان الدخل' },
      description: { en: 'Detailed analysis of revenue, expenses, and profitability metrics', ar: 'تحليل مفصل للإيرادات والمصروفات ومقاييس الربحية' },
      accuracy: 98.8,
      items: {
        en: ['Revenue recognition', 'Expense categorization', 'Profit analysis', 'Variance reporting'],
        ar: ['الاعتراف بالإيرادات', 'تصنيف المصروفات', 'تحليل الربح', 'تقارير التباين']
      }
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: { en: 'Cash Flow Analysis', ar: 'تحليل التدفق النقدي' },
      description: { en: 'Examination of operating, investing, and financing cash flows', ar: 'فحص التدفقات النقدية التشغيلية والاستثمارية والتمويلية' },
      accuracy: 99.5,
      items: {
        en: ['Operating cash flow', 'Investment tracking', 'Financing activities', 'Liquidity analysis'],
        ar: ['التدفق النقدي التشغيلي', 'تتبع الاستثمارات', 'أنشطة التمويل', 'تحليل السيولة']
      }
    }
  ];

  const officialDocumentTypes = [
    {
      icon: <Building className="w-8 h-8" />,
      title: { en: 'Corporate Registration', ar: 'التسجيل المؤسسي' },
      items: {
        en: ['Articles of incorporation', 'Business licenses', 'Tax registrations', 'Board resolutions'],
        ar: ['عقد التأسيس', 'تراخيص الأعمال', 'التسجيلات الضريبية', 'قرارات مجلس الإدارة']
      },
      status: { en: 'Verified', ar: 'محقق' },
      color: 'text-accent bg-accent-light'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: { en: 'Legal Contracts', ar: 'العقود القانونية' },
      items: {
        en: ['Partnership agreements', 'Employment contracts', 'Vendor contracts', 'Lease agreements'],
        ar: ['اتفاقيات الشراكة', 'عقود العمل', 'عقود الموردين', 'اتفاقيات الإيجار']
      },
      status: { en: 'In Review', ar: 'قيد المراجعة' },
      color: 'text-primary bg-primary-light'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: { en: 'Certifications', ar: 'الشهادات' },
      items: {
        en: ['Quality certificates', 'Safety compliance', 'Industry standards', 'Professional licenses'],
        ar: ['شهادات الجودة', 'امتثال السلامة', 'معايير الصناعة', 'التراخيص المهنية']
      },
      status: { en: 'Complete', ar: 'مكتمل' },
      color: 'text-accent-dark bg-accent-light'
    }
  ];

  const auditProcess = [
    {
      step: 1,
      icon: <Search className="w-6 h-6" />,
      title: { en: 'Document Collection', ar: 'جمع الوثائق' },
      description: { en: 'Secure gathering and cataloging of all required documents', ar: 'جمع آمن وفهرسة جميع الوثائق المطلوبة' },
      duration: { en: '2-3 days', ar: '2-3 أيام' },
      tools: ['Digital scanning', 'Data encryption', 'Version control']
    },
    {
      step: 2,
      icon: <Database className="w-6 h-6" />,
      title: { en: 'Data Analysis', ar: 'تحليل البيانات' },
      description: { en: 'Advanced analytical review using specialized auditing software', ar: 'مراجعة تحليلية متقدمة باستخدام برامج التدقيق المتخصصة' },
      duration: { en: '5-7 days', ar: '5-7 أيام' },
      tools: ['AI analysis', 'Pattern recognition', 'Risk assessment']
    },
    {
      step: 3,
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: { en: 'Compliance Verification', ar: 'التحقق من الامتثال' },
      description: { en: 'Cross-reference with Syrian regulatory standards and requirements', ar: 'المقارنة مع معايير ومتطلبات الأنظمة السورية' },
      duration: { en: '3-4 days', ar: '3-4 أيام' },
      tools: ['Regulatory database', 'Standards checker', 'Compliance matrix']
    },
    {
      step: 4,
      icon: <FileCheck className="w-6 h-6" />,
      title: { en: 'Report Generation', ar: 'إنشاء التقرير' },
      description: { en: 'Comprehensive audit report with findings and recommendations', ar: 'تقرير تدقيق شامل مع النتائج والتوصيات' },
      duration: { en: '2-3 days', ar: '2-3 أيام' },
      tools: ['Report builder', 'Visual charts', 'Executive summary']
    }
  ];

  const auditingTools = [
    {
      icon: <Grid className="w-12 h-12" />,
      name: { en: 'Data Analytics Platform', ar: 'منصة تحليل البيانات' },
      description: { en: 'Advanced data processing and pattern recognition', ar: 'معالجة متقدمة للبيانات والتعرف على الأنماط' },
      features: ['AI-powered analysis', 'Real-time processing', 'Anomaly detection']
    },
    {
      icon: <Filter className="w-12 h-12" />,
      name: { en: 'Compliance Engine', ar: 'محرك الامتثال' },
      description: { en: 'Automated compliance checking against regulations', ar: 'فحص الامتثال الآلي مقابل الأنظمة' },
      features: ['Regulatory updates', 'Standards mapping', 'Risk scoring']
    },
    {
      icon: <LineChart className="w-12 h-12" />,
      name: { en: 'Financial Analyzer', ar: 'محلل مالي' },
      description: { en: 'Comprehensive financial statement analysis tools', ar: 'أدوات تحليل شاملة للقوائم المالية' },
      features: ['Ratio analysis', 'Trend detection', 'Benchmarking']
    },
    {
      icon: <Layers className="w-12 h-12" />,
      name: { en: 'Document Tracker', ar: 'متتبع الوثائق' },
      description: { en: 'Complete document lifecycle management', ar: 'إدارة كاملة لدورة حياة الوثائق' },
      features: ['Version control', 'Audit trail', 'Digital signatures']
    }
  ];

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={auditHeaderImage}
      />

      {/* Audit Dashboard Overview */}
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
              
              {/* Key Metrics Grid - Updated Colors */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <Target className="w-6 h-6 text-accent-light" />
                  </div>
                  <div className="text-2xl font-bold text-accent-light">{animatedMetrics.accuracy.toFixed(1)}%</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'دقة التدقيق' : 'Audit Accuracy'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent to-accent-dark rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold">{Math.floor(animatedMetrics.completed)}+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'تدقيق مكتمل' : 'Audits Completed'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-dark to-accent rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <Shield className="w-6 h-6 text-accent-light" />
                  </div>
                  <div className="text-2xl font-bold text-accent-light">{animatedMetrics.compliance.toFixed(1)}%</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'معدل الامتثال' : 'Compliance Rate'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent-dark to-primary rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <Zap className="w-6 h-6 text-accent-light" />
                  </div>
                  <div className="text-2xl font-bold text-accent-light">{Math.floor(animatedMetrics.efficiency)}%</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'كفاءة العملية' : 'Process Efficiency'}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  {c.startAudit}
                </button>
                <button 
                  className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {c.downloadSample}
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
              {/* Interactive Audit Dashboard - Updated Colors */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-accent overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-accent-light flex items-center gap-2">
                      <BarChart3 className="w-6 h-6" />
                      {language === 'ar' ? 'لوحة التدقيق المباشر' : 'Live Audit Dashboard'}
                    </h3>
                    <div className="bg-accent text-white rounded-full px-3 py-1 text-xs flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      {language === 'ar' ? 'مباشر' : 'Live'}
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-accent-light text-sm mb-2">
                      <span>{language === 'ar' ? 'تقدم التدقيق' : 'Audit Progress'}</span>
                      <span>{auditProgress}%</span>
                    </div>
                    <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                      <div 
                        className="bg-accent-light h-2 rounded-full transition-all duration-300"
                        style={{ width: `${auditProgress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white bg-opacity-20 rounded-lg p-2 text-center">
                      <div className="text-accent-light text-xs">{language === 'ar' ? 'مراجع' : 'Reviewed'}</div>
                      <div className="text-lg font-bold">247</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-2 text-center">
                      <div className="text-accent-light text-xs">{language === 'ar' ? 'مشاكل' : 'Issues'}</div>
                      <div className="text-lg font-bold text-red-300">3</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-2 text-center">
                      <div className="text-accent-light text-xs">{language === 'ar' ? 'محقق' : 'Verified'}</div>
                      <div className="text-lg font-bold text-accent-light">244</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-accent-light rounded-lg border-l-4 border-accent">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium text-accent-dark">{language === 'ar' ? 'القوائم المالية' : 'Financial Statements'}</div>
                        <div className="text-sm text-accent">{language === 'ar' ? 'تم التحقق - لا توجد مشاكل' : 'Verified - No issues found'}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-primary-light rounded-lg border-l-4 border-primary">
                      <FileCheck className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-primary-dark">{language === 'ar' ? 'الوثائق الرسمية' : 'Official Documents'}</div>
                        <div className="text-sm text-primary">{language === 'ar' ? 'قيد المراجعة - 89% مكتمل' : 'Under Review - 89% Complete'}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                      <AlertTriangle className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-medium text-gray-800">{language === 'ar' ? 'فحص الامتثال' : 'Compliance Check'}</div>
                        <div className="text-sm text-gray-600">{language === 'ar' ? '3 عناصر تحتاج انتباه' : '3 items need attention'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements - Updated Colors */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -right-8 top-16 bg-primary text-accent-light p-4 rounded-2xl shadow-xl"
              >
                <PieChart className="w-10 h-10" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 3 }}
                className="absolute -left-8 bottom-16 bg-accent text-white p-4 rounded-2xl shadow-xl"
              >
                <BarChart3 className="w-10 h-10" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Audit Service Categories */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {language === 'ar' ? 'خدمات التدقيق المتخصصة' : 'Specialized Audit Services'}
          </motion.h2>

          {/* Service Type Selector - Updated Colors */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-accent">
              {auditTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveAuditType(type.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeAuditType === type.id
                      ? `bg-gradient-to-r ${type.color} text-white shadow-lg`
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {type.icon}
                  <div className="text-left">
                    <div className="font-medium">{type.title[language]}</div>
                    <div className="text-xs opacity-75">{type.count[language]}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Content */}
          <AnimatePresence mode="wait">
            {activeAuditType === 'financial' && (
              <motion.div
                key="financial"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-primary text-center mb-8">{c.financialTitle}</h3>
                <div className="space-y-6">
                  {financialAuditServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg border-l-4 border-primary p-6 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="grid md:grid-cols-4 gap-6 items-center">
                        <div className="md:col-span-3">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="bg-primary text-accent-light rounded-2xl p-3">
                              {service.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-primary">{service.title[language]}</h4>
                              <p className="text-gray-600 text-sm mt-1">{service.description[language]}</p>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{service.accuracy}%</div>
                              <div className="text-xs text-gray-500">{language === 'ar' ? 'دقة' : 'Accuracy'}</div>
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-4 gap-2">
                            {service.items[language].map((item, idx) => (
                              <div key={idx} className="flex items-center gap-2 p-2 bg-primary-light rounded-lg">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-sm text-primary-dark">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="relative w-20 h-20 mx-auto">
                            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                              <path
                                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#E5E7EB"
                                strokeWidth="3"
                              />
                              <path
                                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#00285C"
                                strokeWidth="3"
                                strokeDasharray={`${service.accuracy}, 100`}
                                className="animate-pulse"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-sm font-bold text-primary">{service.accuracy}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeAuditType === 'official' && (
              <motion.div
                key="official"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-primary text-center mb-8">{c.officialTitle}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {officialDocumentTypes.map((type, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg border-t-4 border-accent p-6 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="text-center mb-6">
                        <div className="bg-accent text-white rounded-2xl p-4 inline-block mb-4">
                          {type.icon}
                        </div>
                        <h4 className="text-xl font-bold text-primary mb-3">{type.title[language]}</h4>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${type.color}`}>
                          {type.status[language]}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {type.items[language].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                            <FileCheck className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeAuditType === 'compliance' && (
              <motion.div
                key="compliance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-primary text-center mb-8">{c.complianceTitle}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {auditingTools.map((tool, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent"
                    >
                      <div className="text-primary mb-4">
                        {tool.icon}
                      </div>
                      <h4 className="text-lg font-bold text-primary mb-2">{tool.name[language]}</h4>
                      <p className="text-gray-600 text-sm mb-4">{tool.description[language]}</p>
                      <div className="space-y-1">
                        {tool.features.map((feature, idx) => (
                          <div key={idx} className="text-xs text-accent bg-accent-light rounded-full px-2 py-1">
                            {feature}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>

      {/* Audit Process Timeline */}
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
            {/* Timeline Connector */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {auditProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step Circle */}
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
                      <div className="bg-accent text-white rounded-full px-3 py-1 text-xs font-medium inline-block mb-3">
                        {step.duration[language]}
                      </div>
                      
                      <div className="space-y-1">
                        {step.tools.map((tool, idx) => (
                          <div key={idx} className="text-xs text-primary bg-primary-light rounded-full px-2 py-1">
                            {tool}
                          </div>
                        ))}
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
              <div className="text-6xl mb-6">📊</div>
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
                  {c.viewMethodology}
                </button>
                <button 
                  className="bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-20 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {c.downloadSample}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default OfficialAndFinancialDocumentAuditing;