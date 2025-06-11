import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { 
  Calculator,
  TrendingUp,
  Target,
  PieChart,
  BarChart3,
  DollarSign,
  Calendar,
  CheckCircle,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Lightbulb,
  Shield,
  Zap,
  Clock,
  Eye,
  Download,
  Play,
  Pause,
  RotateCcw,
  Settings
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import financeHeaderImage from '../../assets/images/10.png';

const FinancialPlanningBudgeting: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('planning');
  const [budgetSimulator, setBudgetSimulator] = useState({
    revenue: 50000,
    expenses: 35000,
    growth: 15
  });
  const [animatedMetrics, setAnimatedMetrics] = useState({
    savings: 0,
    efficiency: 0,
    accuracy: 0
  });
  const [activeScenario, setActiveScenario] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  // Animate metrics on load
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedMetrics(prev => ({
        savings: Math.min(prev.savings + 2, 87),
        efficiency: Math.min(prev.efficiency + 3, 94),
        accuracy: Math.min(prev.accuracy + 1, 98)
      }));
    }, 50);

    setTimeout(() => clearInterval(interval), 3000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      title: "Financial Planning & Budgeting",
      subtitle: "Strategic financial planning and intelligent budgeting solutions for Syrian businesses - plan, forecast, and grow with confidence",
      hero: "Smart Financial Planning",
      heroDesc: "Transform your business with data-driven financial planning and intelligent budgeting strategies tailored for the Syrian market.",
      planningTitle: "Our Planning Services",
      budgetingTitle: "Budget Management",
      forecastingTitle: "Financial Forecasting",
      toolsTitle: "Planning Tools",
      processTitle: "Our Planning Process",
      scenariosTitle: "Scenario Planning",
      ctaTitle: "Ready to Transform Your Financial Future?",
      ctaDesc: "Start your journey to better financial planning and budgeting today.",
      getStarted: "Get Started",
      viewDemo: "View Demo",
      calculate: "Calculate Budget",
      simulator: "Budget Simulator"
    },
    ar: {
      title: "التخطيط المالي وإعداد الميزانيات",
      subtitle: "حلول التخطيط المالي الاستراتيجي وإعداد الميزانيات الذكية للشركات في سوريا - خطط وتنبأ وانمُ بثقة",
      hero: "التخطيط المالي الذكي",
      heroDesc: "حول أعمالك بالتخطيط المالي القائم على البيانات واستراتيجيات الميزانية الذكية المصممة للسوق السوري.",
      planningTitle: "خدمات التخطيط لدينا",
      budgetingTitle: "إدارة الميزانية",
      forecastingTitle: "التنبؤ المالي",
      toolsTitle: "أدوات التخطيط",
      processTitle: "عملية التخطيط لدينا",
      scenariosTitle: "تخطيط السيناريوهات",
      ctaTitle: "مستعد لتحويل مستقبلك المالي؟",
      ctaDesc: "ابدأ رحلتك نحو تخطيط مالي وميزانية أفضل اليوم.",
      getStarted: "ابدأ الآن",
      viewDemo: "عرض تجريبي",
      calculate: "احسب الميزانية",
      simulator: "محاكي الميزانية"
    }
  };

  const planningServices = [
    {
      id: 'strategic',
      icon: <Target className="w-8 h-8" />,
      title: { en: 'Strategic Planning', ar: 'التخطيط الاستراتيجي' },
      description: {
        en: 'Long-term financial strategy development with clear goals and milestones',
        ar: 'تطوير استراتيجية مالية طويلة الأمد مع أهداف ومعالم واضحة'
      },
      features: {
        en: ['5-year financial roadmap', 'Goal setting & tracking', 'Risk assessment', 'Growth strategies'],
        ar: ['خارطة طريق مالية لـ5 سنوات', 'وضع وتتبع الأهداف', 'تقييم المخاطر', 'استراتيجيات النمو']
      },
      color: 'from-primary to-accent'
    },
    {
      id: 'budgeting',
      icon: <Calculator className="w-8 h-8" />,
      title: { en: 'Smart Budgeting', ar: 'الميزانية الذكية' },
      description: {
        en: 'Intelligent budget creation with automated tracking and variance analysis',
        ar: 'إنشاء ميزانية ذكية مع تتبع آلي وتحليل الانحرافات'
      },
      features: {
        en: ['Automated tracking', 'Variance analysis', 'Department budgets', 'Real-time updates'],
        ar: ['تتبع آلي', 'تحليل الانحرافات', 'ميزانيات الأقسام', 'تحديثات فورية']
      },
      color: 'from-accent to-primary'
    },
    {
      id: 'forecasting',
      icon: <TrendingUp className="w-8 h-8" />,
      title: { en: 'Financial Forecasting', ar: 'التنبؤ المالي' },
      description: {
        en: 'Advanced predictive modeling for accurate financial projections',
        ar: 'نمذجة تنبؤية متقدمة للتوقعات المالية الدقيقة'
      },
      features: {
        en: ['12-month projections', 'Scenario modeling', 'Trend analysis', 'Risk factors'],
        ar: ['توقعات 12 شهر', 'نمذجة السيناريوهات', 'تحليل الاتجاهات', 'عوامل المخاطر']
      },
      color: 'from-primary-dark to-accent'
    }
  ];

  const planningProcess = [
    {
      step: 1,
      icon: <Eye className="w-6 h-6" />,
      title: { en: 'Financial Assessment', ar: 'التقييم المالي' },
      description: { en: 'Comprehensive analysis of current financial position', ar: 'تحليل شامل للوضع المالي الحالي' },
      duration: '2-3 days'
    },
    {
      step: 2,
      icon: <Target className="w-6 h-6" />,
      title: { en: 'Goal Setting', ar: 'وضع الأهداف' },
      description: { en: 'Define clear, measurable financial objectives', ar: 'تحديد أهداف مالية واضحة وقابلة للقياس' },
      duration: '1 day'
    },
    {
      step: 3,
      icon: <Calculator className="w-6 h-6" />,
      title: { en: 'Budget Creation', ar: 'إنشاء الميزانية' },
      description: { en: 'Develop detailed budgets aligned with goals', ar: 'تطوير ميزانيات مفصلة متوافقة مع الأهداف' },
      duration: '3-4 days'
    },
    {
      step: 4,
      icon: <TrendingUp className="w-6 h-6" />,
      title: { en: 'Forecasting Models', ar: 'نماذج التنبؤ' },
      description: { en: 'Build predictive models for future scenarios', ar: 'بناء نماذج تنبؤية للسيناريوهات المستقبلية' },
      duration: '2-3 days'
    },
    {
      step: 5,
      icon: <Settings className="w-6 h-6" />,
      title: { en: 'Implementation', ar: 'التنفيذ' },
      description: { en: 'Deploy plans with monitoring systems', ar: 'نشر الخطط مع أنظمة المراقبة' },
      duration: '1-2 days'
    }
  ];

  const scenarios = [
    {
      name: { en: 'Conservative Growth', ar: 'نمو محافظ' },
      revenue: { growth: 5, target: 52500 },
      expenses: { reduction: 10, target: 31500 },
      profit: 21000,
      color: 'text-blue-600'
    },
    {
      name: { en: 'Moderate Growth', ar: 'نمو متوسط' },
      revenue: { growth: 15, target: 57500 },
      expenses: { reduction: 5, target: 33250 },
      profit: 24250,
      color: 'text-green-600'
    },
    {
      name: { en: 'Aggressive Growth', ar: 'نمو قوي' },
      revenue: { growth: 25, target: 62500 },
      expenses: { reduction: 0, target: 35000 },
      profit: 27500,
      color: 'text-purple-600'
    }
  ];

  const budgetingTools = [
    {
      icon: <PieChart className="w-8 h-8" />,
      name: { en: 'Budget Allocation', ar: 'توزيع الميزانية' },
      description: { en: 'Visual budget distribution', ar: 'توزيع الميزانية البصري' },
      usage: 95
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      name: { en: 'Variance Analysis', ar: 'تحليل الانحرافات' },
      description: { en: 'Track budget vs actual', ar: 'تتبع الميزانية مقابل الفعلي' },
      usage: 88
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      name: { en: 'Trend Forecasting', ar: 'توقع الاتجاهات' },
      description: { en: 'Predict future trends', ar: 'التنبؤ بالاتجاهات المستقبلية' },
      usage: 92
    }
  ];

  const handleBudgetSimulation = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
    }, 2000);
  };

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={financeHeaderImage}
      />

      {/* Hero Section with Interactive Budget Simulator */}
      <Section background="white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">{c.hero}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {c.heroDesc}
              </p>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="bg-primary text-accent-light rounded-2xl p-4 mb-2">
                    <div className="text-2xl font-bold">{animatedMetrics.savings}%</div>
                    <div className="text-xs opacity-75">{language === 'ar' ? 'توفير' : 'Cost Savings'}</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-accent text-white rounded-2xl p-4 mb-2">
                    <div className="text-2xl font-bold">{animatedMetrics.efficiency}%</div>
                    <div className="text-xs opacity-75">{language === 'ar' ? 'كفاءة' : 'Efficiency'}</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-primary-dark text-accent-light rounded-2xl p-4 mb-2">
                    <div className="text-2xl font-bold">{animatedMetrics.accuracy}%</div>
                    <div className="text-xs opacity-75">{language === 'ar' ? 'دقة' : 'Accuracy'}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Target className="w-5 h-5" />
                  {c.getStarted}
                </button>
                <button 
                  onClick={handleBudgetSimulation}
                  className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  {c.viewDemo}
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
              {/* Interactive Budget Simulator */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-accent overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-accent-light">{c.simulator}</h3>
                    <button 
                      onClick={handleBudgetSimulation}
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 text-accent-light p-2 rounded-lg transition-colors"
                    >
                      {isCalculating ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  {/* Budget Controls */}
                  <div className="space-y-4">
                    <div>
                      <label className="text-accent-light text-sm block mb-2">
                        {language === 'ar' ? 'الإيرادات الشهرية' : 'Monthly Revenue'}
                      </label>
                      <div className="flex items-center gap-2">
                        <input 
                          type="range" 
                          min="10000" 
                          max="100000" 
                          value={budgetSimulator.revenue}
                          onChange={(e) => setBudgetSimulator({...budgetSimulator, revenue: parseInt(e.target.value)})}
                          className="flex-1"
                        />
                        <span className="text-accent-light font-bold w-20">${budgetSimulator.revenue.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-accent-light text-sm block mb-2">
                        {language === 'ar' ? 'المصاريف الشهرية' : 'Monthly Expenses'}
                      </label>
                      <div className="flex items-center gap-2">
                        <input 
                          type="range" 
                          min="5000" 
                          max="80000" 
                          value={budgetSimulator.expenses}
                          onChange={(e) => setBudgetSimulator({...budgetSimulator, expenses: parseInt(e.target.value)})}
                          className="flex-1"
                        />
                        <span className="text-accent-light font-bold w-20">${budgetSimulator.expenses.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Results Display */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                      <div className="text-green-600 text-sm font-medium">
                        {language === 'ar' ? 'صافي الربح' : 'Net Profit'}
                      </div>
                      <div className="text-2xl font-bold text-green-700">
                        ${(budgetSimulator.revenue - budgetSimulator.expenses).toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                      <div className="text-blue-600 text-sm font-medium">
                        {language === 'ar' ? 'هامش الربح' : 'Profit Margin'}
                      </div>
                      <div className="text-2xl font-bold text-blue-700">
                        {((budgetSimulator.revenue - budgetSimulator.expenses) / budgetSimulator.revenue * 100).toFixed(1)}%
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual Profit Indicator */}
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.max(0, (budgetSimulator.revenue - budgetSimulator.expenses) / budgetSimulator.revenue * 100)}%` }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-r from-primary to-accent h-4 rounded-full"
                    />
                  </div>
                  
                  <button 
                    onClick={handleBudgetSimulation}
                    disabled={isCalculating}
                    className="w-full bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isCalculating ? (
                      <>
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                          <RotateCcw className="w-5 h-5" />
                        </motion.div>
                        {language === 'ar' ? 'جاري الحساب...' : 'Calculating...'}
                      </>
                    ) : (
                      <>
                        <Calculator className="w-5 h-5" />
                        {c.calculate}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Planning Services with Tab Navigation */}
      <Section background="light">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.planningTitle}
          </motion.h2>

          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {planningServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeTab === service.id
                    ? 'bg-primary text-accent-light shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:text-primary hover:shadow-md border border-gray-200'
                }`}
              >
                {service.icon}
                <span>{service.title[language]}</span>
              </button>
            ))}
          </div>

          {/* Active Service Display */}
          <AnimatePresence mode="wait">
            {planningServices.map((service) => (
              activeTab === service.id && (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden border border-accent"
                >
                  <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white bg-opacity-20 p-4 rounded-2xl">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-accent-light mb-2">
                          {service.title[language]}
                        </h3>
                        <p className="text-accent-light opacity-90">
                          {service.description[language]}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="text-xl font-bold text-primary mb-6">
                      {language === 'ar' ? 'الميزات الرئيسية:' : 'Key Features:'}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features[language].map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-accent">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </Section>

      {/* Scenario Planning Comparison */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.scenariosTitle}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveScenario(index)}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-primary"
              >
                {/* Active indicator */}
                {activeScenario === index && (
                  <div className="absolute -top-3 -right-3 bg-primary text-accent-light w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {scenario.name[language]}
                  </h3>
                  <div className={`text-3xl font-bold ${scenario.color} mb-2`}>
                    ${scenario.profit.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">
                    {language === 'ar' ? 'الربح السنوي المتوقع' : 'Annual Projected Profit'}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-600">
                      {language === 'ar' ? 'نمو الإيرادات' : 'Revenue Growth'}
                    </span>
                    <div className="flex items-center gap-1">
                      <ArrowUp className="w-4 h-4 text-green-600" />
                      <span className="font-bold text-green-600">{scenario.revenue.growth}%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="text-sm text-gray-600">
                      {language === 'ar' ? 'تخفيض المصاريف' : 'Expense Reduction'}
                    </span>
                    <div className="flex items-center gap-1">
                      <ArrowDown className="w-4 h-4 text-red-600" />
                      <span className="font-bold text-red-600">{scenario.expenses.reduction}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="w-full text-primary hover:text-primary-dark font-medium text-sm transition-colors">
                    {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Planning Tools */}
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

          <div className="grid md:grid-cols-3 gap-8">
            {budgetingTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-accent hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="bg-primary text-accent-light rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {tool.name[language]}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {tool.description[language]}
                  </p>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>{language === 'ar' ? 'معدل الاستخدام' : 'Usage Rate'}</span>
                    <span>{tool.usage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.usage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Planning Process */}
      <Section background="primary">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-accent text-center mb-12"
          >
            {c.processTitle}
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-6">
            {planningProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-primary font-bold text-xl">{step.step}</span>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-lg">
                  <div className="text-primary mb-2">
                    {step.icon}
                  </div>
                  <h3 className="text-sm font-bold text-primary mb-2">
                    {step.title[language]}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">
                    {step.description[language]}
                  </p>
                  <div className="text-xs text-accent font-medium">
                    {step.duration}
                  </div>
                </div>
                
                {index < planningProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-6 h-0.5 bg-accent-light transform translate-x-2"></div>
                )}
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
              <div className="text-6xl mb-6">📊</div>
              <h2 className="text-3xl font-bold text-accent-light mb-4">
                {c.ctaTitle}
              </h2>
              <p className="text-accent-light text-lg mb-8 leading-relaxed">
                {c.ctaDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-accent-light hover:bg-white text-primary font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Target className="w-5 h-5" />
                  {c.getStarted}
                </button>
                <button 
                  onClick={handleBudgetSimulation}
                  className="bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  {c.viewDemo}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default FinancialPlanningBudgeting;