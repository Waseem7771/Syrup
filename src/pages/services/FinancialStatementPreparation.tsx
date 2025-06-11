import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { 
  Calculator, 
  TrendingUp, 
  FileText, 
  PieChart, 
  BarChart3, 
  DollarSign, 
  Calendar, 
  CheckCircle, 
  AlertCircle, 
  Download, 
  Upload, 
  Eye, 
  Shield, 
  Clock, 
  Award,
  Target,
  Zap,
  BookOpen,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import statementHeaderImage from '../../assets/images/11.png';

const FinancialStatementPreparation: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedStatement, setSelectedStatement] = useState(0);
  const [animatedValues, setAnimatedValues] = useState({
    accuracy: 0,
    delivery: 0,
    compliance: 0
  });

  // Animate percentage counters
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValues(prev => ({
        accuracy: Math.min(prev.accuracy + 2, 99),
        delivery: Math.min(prev.delivery + 3, 98),
        compliance: Math.min(prev.compliance + 1, 100)
      }));
    }, 50);

    setTimeout(() => clearInterval(interval), 3000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      title: "Financial Statement Preparation",
      subtitle: "Professional financial reporting services for Syrian businesses - accurate, compliant, and timely financial statements",
      overview: "Complete Financial Reporting",
      overviewDesc: "We provide comprehensive financial statement preparation services that meet international standards while ensuring compliance with local Syrian regulations. Our expert team delivers accurate, timely, and professional financial reports.",
      statementsTitle: "Financial Statements We Prepare",
      processTitle: "Our Preparation Process",
      complianceTitle: "Compliance & Standards",
      toolsTitle: "Advanced Tools & Software",
      teamTitle: "Expert Team",
      ctaTitle: "Ready for Professional Financial Statements?",
      ctaDesc: "Let our experts handle your financial reporting while you focus on growing your business.",
      getQuote: "Get Quote",
      schedule: "Schedule Consultation",
      viewSample: "View Sample Report"
    },
    ar: {
      title: "إعداد القوائم المالية",
      subtitle: "خدمات إعداد التقارير المالية المهنية للشركات في سوريا - قوائم مالية دقيقة ومتوافقة وفي الوقت المحدد",
      overview: "إعداد تقارير مالية شاملة",
      overviewDesc: "نقدم خدمات شاملة لإعداد القوائم المالية تلبي المعايير الدولية مع ضمان الامتثال للقوانين السورية المحلية. فريقنا الخبير يقدم تقارير مالية دقيقة وفي الوقت المحدد ومهنية.",
      statementsTitle: "القوائم المالية التي نعدها",
      processTitle: "عملية الإعداد لدينا",
      complianceTitle: "الامتثال والمعايير",
      toolsTitle: "أدوات وبرامج متقدمة",
      teamTitle: "فريق خبير",
      ctaTitle: "مستعد للحصول على قوائم مالية مهنية؟",
      ctaDesc: "دع خبراءنا يتولون إعداد تقاريرك المالية بينما تركز على نمو أعمالك.",
      getQuote: "احصل على عرض سعر",
      schedule: "حدد موعد استشارة",
      viewSample: "عرض نموذج تقرير"
    }
  };

  const financialStatements = [
    {
      id: 'balance',
      icon: <BarChart3 className="w-8 h-8" />,
      name: { en: 'Balance Sheet', ar: 'الميزانية العمومية' },
      description: {
        en: 'Complete overview of assets, liabilities, and equity',
        ar: 'نظرة شاملة على الأصول والخصوم وحقوق الملكية'
      },
      features: {
        en: ['Current Assets', 'Fixed Assets', 'Current Liabilities', 'Long-term Debt', 'Equity Analysis'],
        ar: ['الأصول المتداولة', 'الأصول الثابتة', 'الخصوم المتداولة', 'الديون طويلة الأجل', 'تحليل حقوق الملكية']
      },
      emoji: '📊'
    },
    {
      id: 'income',
      icon: <TrendingUp className="w-8 h-8" />,
      name: { en: 'Income Statement', ar: 'قائمة الدخل' },
      description: {
        en: 'Detailed profit and loss analysis over reporting period',
        ar: 'تحليل مفصل للأرباح والخسائر خلال فترة التقرير'
      },
      features: {
        en: ['Revenue Analysis', 'Cost of Goods Sold', 'Operating Expenses', 'Net Income', 'Earnings Analysis'],
        ar: ['تحليل الإيرادات', 'تكلفة البضائع المباعة', 'المصاريف التشغيلية', 'صافي الدخل', 'تحليل الأرباح']
      },
      emoji: '📈'
    },
    {
      id: 'cashflow',
      icon: <DollarSign className="w-8 h-8" />,
      name: { en: 'Cash Flow Statement', ar: 'قائمة التدفقات النقدية' },
      description: {
        en: 'Track cash movements from operations, investing, and financing',
        ar: 'تتبع حركة النقد من العمليات والاستثمار والتمويل'
      },
      features: {
        en: ['Operating Cash Flow', 'Investment Activities', 'Financing Activities', 'Cash Position', 'Liquidity Analysis'],
        ar: ['التدفق النقدي التشغيلي', 'أنشطة الاستثمار', 'أنشطة التمويل', 'الوضع النقدي', 'تحليل السيولة']
      },
      emoji: '💰'
    },
    {
      id: 'equity',
      icon: <PieChart className="w-8 h-8" />,
      name: { en: 'Statement of Equity', ar: 'قائمة التغيرات في حقوق الملكية' },
      description: {
        en: 'Changes in ownership equity during the reporting period',
        ar: 'التغيرات في حقوق الملكية خلال فترة التقرير'
      },
      features: {
        en: ['Share Capital Changes', 'Retained Earnings', 'Other Comprehensive Income', 'Dividend Distribution', 'Equity Movements'],
        ar: ['تغيرات رأس المال', 'الأرباح المحتجزة', 'الدخل الشامل الآخر', 'توزيع الأرباح', 'حركات حقوق الملكية']
      },
      emoji: '🏛️'
    }
  ];

  const preparationProcess = [
    {
      step: 1,
      icon: <Upload className="w-6 h-6" />,
      title: { en: 'Data Collection', ar: 'جمع البيانات' },
      description: {
        en: 'Gather all financial records, receipts, and supporting documents',
        ar: 'جمع جميع السجلات المالية والإيصالات والمستندات الداعمة'
      },
      duration: { en: '1-2 days', ar: '1-2 أيام' }
    },
    {
      step: 2,
      icon: <Calculator className="w-6 h-6" />,
      title: { en: 'Data Analysis', ar: 'تحليل البيانات' },
      description: {
        en: 'Review, categorize, and analyze all financial transactions',
        ar: 'مراجعة وتصنيف وتحليل جميع المعاملات المالية'
      },
      duration: { en: '2-3 days', ar: '2-3 أيام' }
    },
    {
      step: 3,
      icon: <FileText className="w-6 h-6" />,
      title: { en: 'Statement Preparation', ar: 'إعداد القوائم' },
      description: {
        en: 'Create comprehensive financial statements following standards',
        ar: 'إنشاء قوائم مالية شاملة وفقاً للمعايير'
      },
      duration: { en: '3-4 days', ar: '3-4 أيام' }
    },
    {
      step: 4,
      icon: <Eye className="w-6 h-6" />,
      title: { en: 'Review & Validation', ar: 'المراجعة والتحقق' },
      description: {
        en: 'Thorough review for accuracy and compliance verification',
        ar: 'مراجعة شاملة للدقة والتحقق من الامتثال'
      },
      duration: { en: '1-2 days', ar: '1-2 أيام' }
    },
    {
      step: 5,
      icon: <Download className="w-6 h-6" />,
      title: { en: 'Delivery', ar: 'التسليم' },
      description: {
        en: 'Final statements delivered with detailed notes and explanations',
        ar: 'تسليم القوائم النهائية مع ملاحظات وتفسيرات مفصلة'
      },
      duration: { en: '1 day', ar: '1 يوم' }
    }
  ];

  const complianceStandards = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: { en: 'Syrian Accounting Standards', ar: 'المعايير المحاسبية السورية' },
      description: { en: 'Full compliance with local regulations', ar: 'امتثال كامل للقوانين المحلية' },
      color: 'text-primary'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: { en: 'International Standards (IFRS)', ar: 'المعايير الدولية (IFRS)' },
      description: { en: 'Global best practices implementation', ar: 'تطبيق أفضل الممارسات العالمية' },
      color: 'text-accent'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: { en: 'Industry Specific Requirements', ar: 'متطلبات خاصة بالصناعة' },
      description: { en: 'Tailored to your business sector', ar: 'مخصص لقطاع أعمالك' },
      color: 'text-primary'
    }
  ];

  const tools = [
    { name: 'QuickBooks', expertise: 95, logo: '💼' },
    { name: 'SAP', expertise: 90, logo: '🏢' },
    { name: 'Xero', expertise: 88, logo: '📱' },
    { name: 'Sage', expertise: 92, logo: '🔧' },
    { name: 'Excel Advanced', expertise: 98, logo: '📊' },
    { name: 'Power BI', expertise: 85, logo: '📈' }
  ];

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={statementHeaderImage}
      />

      {/* Overview with Animated Metrics */}
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
              
              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-primary text-accent-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl font-bold">{animatedValues.accuracy}%</span>
                  </div>
                  <p className="text-sm text-gray-600">{language === 'ar' ? 'دقة' : 'Accuracy'}</p>
                </div>
                <div className="text-center">
                  <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl font-bold">{animatedValues.delivery}%</span>
                  </div>
                  <p className="text-sm text-gray-600">{language === 'ar' ? 'التسليم في الوقت' : 'On-Time Delivery'}</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-dark text-accent-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl font-bold">{animatedValues.compliance}%</span>
                  </div>
                  <p className="text-sm text-gray-600">{language === 'ar' ? 'امتثال' : 'Compliance'}</p>
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
              {/* Financial Dashboard Preview */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-accent overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-accent-light">Financial Dashboard</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-accent-light rounded-full"></div>
                      <div className="w-3 h-3 bg-accent-light opacity-50 rounded-full"></div>
                      <div className="w-3 h-3 bg-accent-light opacity-25 rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="text-accent-light text-sm">Total Assets</div>
                      <div className="text-2xl font-bold">$2.4M</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="text-accent-light text-sm">Net Income</div>
                      <div className="text-2xl font-bold">$340K</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">Cash Flow Trend</span>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  
                  {/* Simulated Chart */}
                  <div className="h-32 bg-gray-50 rounded-lg flex items-end justify-center gap-2 p-4">
                    {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="bg-accent rounded-t w-6"
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-4 top-8 bg-accent text-white p-3 rounded-full shadow-lg"
              >
                <Calculator className="w-6 h-6" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -left-4 bottom-8 bg-primary text-accent-light p-3 rounded-full shadow-lg"
              >
                <FileText className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Financial Statements Explorer */}
      <Section background="light">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.statementsTitle}
          </motion.h2>

          {/* Statement Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {financialStatements.map((statement, index) => (
              <button
                key={statement.id}
                onClick={() => setSelectedStatement(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  selectedStatement === index
                    ? 'bg-primary text-accent-light shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:text-primary hover:shadow-md border border-gray-200'
                }`}
              >
                {statement.icon}
                <span>{statement.name[language]}</span>
              </button>
            ))}
          </div>

          {/* Active Statement Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStatement}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-accent"
            >
              <div className="bg-gradient-to-r from-primary to-accent p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-6xl">{financialStatements[selectedStatement].emoji}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-accent-light mb-2">
                      {financialStatements[selectedStatement].name[language]}
                    </h3>
                    <p className="text-accent-light opacity-90">
                      {financialStatements[selectedStatement].description[language]}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h4 className="text-xl font-bold text-primary mb-6">
                  {language === 'ar' ? 'ما نشمله:' : 'What We Include:'}
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {financialStatements[selectedStatement].features[language].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-accent">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <button className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    {language === 'ar' ? 'عرض نموذج' : 'View Sample'}
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>

      {/* Preparation Process Timeline */}
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
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent opacity-20"></div>
            
            <div className="space-y-12">
              {preparationProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <div className={`bg-white rounded-2xl p-6 shadow-lg border border-accent ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary text-accent-light rounded-full w-10 h-10 flex items-center justify-center">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-primary">{step.title[language]}</h3>
                          <span className="text-sm text-accent font-medium">{step.duration[language]}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{step.description[language]}</p>
                    </div>
                  </div>
                  
                  {/* Step Number */}
                  <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg z-10">
                    {step.step}
                  </div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Compliance & Standards */}
      <Section background="primary">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-accent text-center mb-12"
          >
            {c.complianceTitle}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`${standard.color} group-hover:scale-110 transition-transform duration-300 mb-4`}>
                  {standard.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">
                  {standard.title[language]}
                </h3>
                <p className="text-gray-600 text-sm">
                  {standard.description[language]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Tools & Software Expertise */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.toolsTitle}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-accent hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{tool.logo}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary">{tool.name}</h3>
                    <div className="text-sm text-gray-600">{tool.expertise}% Expertise</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.expertise}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-6">📋</div>
              <h2 className="text-3xl font-bold text-accent-light mb-4">
                {c.ctaTitle}
              </h2>
              <p className="text-accent-light text-lg mb-8 leading-relaxed">
                {c.ctaDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/consulting/legal')}
                  className="bg-accent-light hover:bg-white text-primary font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  {c.getQuote}
                </button>
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  {c.schedule}
                </button>
                <button 
                  className="bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-20 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  {c.viewSample}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default FinancialStatementPreparation;