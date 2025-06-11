import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { Brain, TrendingUp, Eye, Zap, Database, Target, Cpu, BarChart, LineChart, PieChart, Activity, Layers, Network, Bot, CheckCircle, ArrowRight, Sparkles, Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

import aiHeaderImage from '../../assets/images/3.png';

const AIAnalyticsSolutions: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeAIDemo, setActiveAIDemo] = useState(0);
  const [dataPoints, setDataPoints] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleGetQuote = () => {
    navigate('/consulting/legal');
  };

  const handleStartProject = () => {
    navigate('/register');
  };

  // Simulate real-time data for AI demo
  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints(prev => {
        const newPoint = Math.floor(Math.random() * 100) + 1;
        return [...prev.slice(-9), newPoint];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      title: "AI & Analytics Solutions",
      subtitle: "Harness the power of artificial intelligence and advanced analytics to transform your business in Syria",
      overview: "Intelligent Business Transformation",
      overviewDesc: "We combine cutting-edge AI technologies with deep business analytics to help companies in Syria make data-driven decisions, automate processes, and unlock new opportunities for growth.",
      aiSolutions: "AI-Powered Solutions",
      analytics: "Advanced Analytics",
      capabilities: "AI Capabilities",
      implementation: "AI Implementation Journey",
      useCases: "Real-World Applications",
      technologies: "AI Technologies",
      cta: "Ready to Embrace AI?",
      ctaDesc: "Transform your business with intelligent automation and data-driven insights.",
      getQuote: "Get AI Consultation",
      startProject: "Start AI Project",
      mlTab: "Machine Learning",
      nlpTab: "Natural Language",
      visionTab: "Computer Vision"
    },
    ar: {
      title: "حلول الذكاء الاصطناعي والتحليلات",
      subtitle: "استخدم قوة الذكاء الاصطناعي والتحليلات المتقدمة لتحويل أعمالك في سوريا",
      overview: "التحول الذكي للأعمال",
      overviewDesc: "نحن نجمع بين تقنيات الذكاء الاصطناعي المتطورة وتحليلات الأعمال العميقة لمساعدة الشركات في سوريا على اتخاذ قرارات مدفوعة بالبيانات وأتمتة العمليات وإطلاق فرص جديدة للنمو.",
      aiSolutions: "حلول مدعومة بالذكاء الاصطناعي",
      analytics: "التحليلات المتقدمة",
      capabilities: "قدرات الذكاء الاصطناعي",
      implementation: "رحلة تنفيذ الذكاء الاصطناعي",
      useCases: "التطبيقات الواقعية",
      technologies: "تقنيات الذكاء الاصطناعي",
      cta: "مستعد لاحتضان الذكاء الاصطناعي؟",
      ctaDesc: "حول أعمالك بالأتمتة الذكية والرؤى المدفوعة بالبيانات.",
      getQuote: "احصل على استشارة الذكاء الاصطناعي",
      startProject: "ابدأ مشروع الذكاء الاصطناعي",
      mlTab: "تعلم الآلة",
      nlpTab: "معالجة اللغة الطبيعية",
      visionTab: "الرؤية الحاسوبية"
    }
  };

  const aiCapabilities = [
    {
      id: 'ml',
      icon: <Brain className="w-8 h-8" />,
      en: {
        title: "Machine Learning Models",
        description: "Custom ML algorithms for prediction, classification, and pattern recognition",
        features: ["Predictive Analytics", "Customer Segmentation", "Demand Forecasting", "Risk Assessment", "Recommendation Systems"]
      },
      ar: {
        title: "نماذج تعلم الآلة",
        description: "خوارزميات تعلم آلة مخصصة للتنبؤ والتصنيف والتعرف على الأنماط",
        features: ["التحليلات التنبؤية", "تجميع العملاء", "توقع الطلب", "تقييم المخاطر", "أنظمة التوصية"]
      }
    },
    {
      id: 'nlp',
      icon: <Bot className="w-8 h-8" />,
      en: {
        title: "Natural Language Processing",
        description: "Advanced text analysis and language understanding capabilities",
        features: ["Sentiment Analysis", "Chatbots & Virtual Assistants", "Document Processing", "Language Translation", "Content Generation"]
      },
      ar: {
        title: "معالجة اللغة الطبيعية",
        description: "قدرات متقدمة لتحليل النصوص وفهم اللغة",
        features: ["تحليل المشاعر", "روبوتات الدردشة والمساعدين الافتراضيين", "معالجة المستندات", "ترجمة اللغة", "توليد المحتوى"]
      }
    },
    {
      id: 'vision',
      icon: <Eye className="w-8 h-8" />,
      en: {
        title: "Computer Vision",
        description: "Image and video analysis for automated visual intelligence",
        features: ["Object Detection", "Facial Recognition", "Quality Control", "Medical Imaging", "Security Surveillance"]
      },
      ar: {
        title: "الرؤية الحاسوبية",
        description: "تحليل الصور والفيديو للذكاء البصري المؤتمت",
        features: ["كشف الأشياء", "التعرف على الوجوه", "مراقبة الجودة", "التصوير الطبي", "المراقبة الأمنية"]
      }
    }
  ];

  const analyticsServices = [
    {
      icon: <BarChart className="w-12 h-12" />,
      en: { title: "Business Intelligence", description: "Comprehensive BI dashboards and reporting solutions" },
      ar: { title: "ذكاء الأعمال", description: "لوحات معلومات BI شاملة وحلول التقارير" },
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      en: { title: "Predictive Analytics", description: "Forecast trends and anticipate market changes" },
      ar: { title: "التحليلات التنبؤية", description: "توقع الاتجاهات وتوقع تغيرات السوق" },
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Target className="w-12 h-12" />,
      en: { title: "Customer Analytics", description: "Deep insights into customer behavior and preferences" },
      ar: { title: "تحليلات العملاء", description: "رؤى عميقة حول سلوك العملاء وتفضيلاتهم" },
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Network className="w-12 h-12" />,
      en: { title: "Market Intelligence", description: "Competitive analysis and market trend identification" },
      ar: { title: "ذكاء السوق", description: "التحليل التنافسي وتحديد اتجاهات السوق" },
      color: "from-orange-500 to-orange-600"
    }
  ];

  const useCases = [
    {
      industry: { en: "E-commerce", ar: "التجارة الإلكترونية" },
      application: { en: "Personalized Recommendations", ar: "التوصيات الشخصية" },
      impact: "35%",
      metric: { en: "Sales Increase", ar: "زيادة المبيعات" },
      icon: "🛒"
    },
    {
      industry: { en: "Healthcare", ar: "الرعاية الصحية" },
      application: { en: "Medical Image Analysis", ar: "تحليل الصور الطبية" },
      impact: "90%",
      metric: { en: "Accuracy Rate", ar: "معدل الدقة" },
      icon: "🏥"
    },
    {
      industry: { en: "Finance", ar: "المالية" },
      application: { en: "Fraud Detection", ar: "كشف الاحتيال" },
      impact: "75%",
      metric: { en: "Risk Reduction", ar: "تقليل المخاطر" },
      icon: "💰"
    },
    {
      industry: { en: "Manufacturing", ar: "التصنيع" },
      application: { en: "Quality Control", ar: "مراقبة الجودة" },
      impact: "50%",
      metric: { en: "Defect Reduction", ar: "تقليل العيوب" },
      icon: "🏭"
    }
  ];

  const aiJourney = [
    {
      phase: 1,
      en: { title: "Data Assessment", description: "Evaluate data quality and AI readiness" },
      ar: { title: "تقييم البيانات", description: "تقييم جودة البيانات والاستعداد للذكاء الاصطناعي" }
    },
    {
      phase: 2,
      en: { title: "Strategy Development", description: "Create AI roadmap aligned with business goals" },
      ar: { title: "تطوير الاستراتيجية", description: "إنشاء خارطة طريق الذكاء الاصطناعي متماشية مع أهداف الأعمال" }
    },
    {
      phase: 3,
      en: { title: "Pilot Implementation", description: "Deploy proof-of-concept solutions" },
      ar: { title: "التنفيذ التجريبي", description: "نشر حلول إثبات المفهوم" }
    },
    {
      phase: 4,
      en: { title: "Scale & Optimize", description: "Full deployment and continuous improvement" },
      ar: { title: "التوسع والتحسين", description: "النشر الكامل والتحسين المستمر" }
    }
  ];

  const aiTechnologies = [
    "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI GPT", "Computer Vision APIs", 
    "Azure Cognitive Services", "AWS SageMaker", "Apache Spark"
  ];

  const c = content[language];
  const currentCapability = aiCapabilities.find(cap => cap.id === ['ml', 'nlp', 'vision'][activeAIDemo]);

  return (
    <>
      {/* Fixed PageHeader to ensure it's visible on mobile */}
      <div className="w-full">
        <PageHeader
          title={content[language].title}
          subtitle={content[language].subtitle}
          backgroundImage={aiHeaderImage}
        />
      </div>

      {/* Neural Network Background Overview */}
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
              
              {/* AI Impact Metrics */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-500">
                  <span className="font-medium text-gray-700">
                    {language === 'ar' ? 'تحسن الكفاءة' : 'Efficiency Improvement'}
                  </span>
                  <span className="text-2xl font-bold text-blue-600">60%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
                  <span className="font-medium text-gray-700">
                    {language === 'ar' ? 'دقة التنبؤات' : 'Prediction Accuracy'}
                  </span>
                  <span className="text-2xl font-bold text-green-600">94%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-l-4 border-purple-500">
                  <span className="font-medium text-gray-700">
                    {language === 'ar' ? 'توفير التكاليف' : 'Cost Savings'}
                  </span>
                  <span className="text-2xl font-bold text-purple-600">45%</span>
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
              {/* Neural Network Visualization */}
              <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 shadow-2xl overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 gap-4 h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                        className="bg-white rounded-full w-2 h-2"
                      />
                    ))}
                  </div>
                </div>
                
                {/* Brain Icon */}
                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-accent rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6"
                  >
                    <Brain className="w-12 h-12 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-accent-light mb-4">
                    {language === 'ar' ? 'الذكاء الاصطناعي المتقدم' : 'Advanced AI Engine'}
                  </h3>
                  
                  {/* Processing Indicators */}
                  <div className="space-y-3">
                    {['Processing...', 'Analyzing...', 'Optimizing...'].map((text, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '100%' }}
                        transition={{ delay: index * 0.5, duration: 1 }}
                        className="bg-accent bg-opacity-20 rounded-full h-2"
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ delay: index * 0.5 + 0.5, duration: 2, repeat: Infinity }}
                          className="bg-accent rounded-full h-2"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 bg-accent text-primary p-3 rounded-full shadow-lg"
              >
                <Cpu className="w-6 h-6" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-primary text-accent p-3 rounded-full shadow-lg"
              >
                <Database className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Interactive AI Capabilities Demo */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.capabilities}
          </motion.h2>

          {/* AI Demo Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-accent">
              {aiCapabilities.map((capability, index) => (
                <button
                  key={capability.id}
                  onClick={() => setActiveAIDemo(index)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeAIDemo === index
                      ? 'bg-primary text-accent-light shadow-md'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {capability.icon}
                  <span>{capability[language].title.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* AI Demo Content */}
          <AnimatePresence mode="wait">
            {currentCapability && (
              <motion.div
                key={activeAIDemo}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-accent"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {currentCapability[language].title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6">
                      {currentCapability[language].description}
                    </p>
                    <div className="grid grid-cols-1 gap-3">
                      {currentCapability[language].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-accent"
                        >
                          <Sparkles className="w-5 h-5 text-primary" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Interactive Demo Visualization */}
                  <div className="relative">
                    <div className="bg-primary rounded-2xl p-6 text-white">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-semibold">AI Model Status</span>
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-3 h-3 bg-green-400 rounded-full"
                        />
                      </div>
                      
                      {/* Dynamic Chart */}
                      <div className="bg-white bg-opacity-10 rounded-lg p-4 h-32 flex items-end justify-between">
                        {dataPoints.map((point, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${point}%` }}
                            transition={{ duration: 0.5 }}
                            className="bg-accent rounded-t w-8 mx-1"
                          />
                        ))}
                      </div>
                      
                      <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-accent-light">Accuracy</div>
                          <div className="font-bold">98.5%</div>
                        </div>
                        <div>
                          <div className="text-accent-light">Speed</div>
                          <div className="font-bold">0.03s</div>
                        </div>
                        <div>
                          <div className="text-accent-light">Confidence</div>
                          <div className="font-bold">94.2%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>

      {/* Analytics Services in Card Flow */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.analytics}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className={`bg-gradient-to-br ${service.color} p-6 text-white h-full transform group-hover:scale-105 transition-transform duration-300`}>
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    {service[language].title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {service[language].description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Use Cases Showcase */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.useCases}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-accent hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{useCase.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-primary">{useCase.industry[language]}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{useCase.impact}</div>
                        <div className="text-sm text-gray-600">{useCase.metric[language]}</div>
                      </div>
                    </div>
                    <p className="text-gray-700">{useCase.application[language]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* AI Implementation Journey - Circular Flow */}
      <Section background="white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-16"
          >
            {c.implementation}
          </motion.h2>

          {/* Simple Grid Layout with Manual Positioning */}
          <div className="relative max-w-4xl mx-auto">
            {/* Container Grid */}
            <div className="grid grid-cols-3 grid-rows-3 gap-8 min-h-[600px]">
              
              {/* Step 1 - Top Center */}
              <div className="col-start-2 row-start-1 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-xl border-2 border-accent text-center w-56 h-fit"
                >
                  <div className="bg-gradient-to-r from-primary to-primary-dark text-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg">
                    1
                  </div>
                  <h4 className="font-bold text-primary text-lg mb-3">
                    {aiJourney[0][language].title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {aiJourney[0][language].description}
                  </p>
                </motion.div>
              </div>

              {/* Empty Top Left */}
              <div className="col-start-1 row-start-1"></div>

              {/* Empty Top Right */}
              <div className="col-start-3 row-start-1"></div>

              {/* Step 4 - Middle Left */}
              <div className="col-start-1 row-start-2 flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-xl border-2 border-accent text-center w-56 h-fit"
                >
                  <div className="bg-gradient-to-r from-primary to-primary-dark text-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg">
                    4
                  </div>
                  <h4 className="font-bold text-primary text-lg mb-3">
                    {aiJourney[3][language].title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {aiJourney[3][language].description}
                  </p>
                </motion.div>
              </div>

              {/* Central AI Brain - Middle Center */}
              <div className="col-start-2 row-start-2 flex justify-center items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="bg-primary rounded-full w-32 h-32 flex items-center justify-center shadow-2xl border-4 border-accent relative z-20"
                >
                  <Brain className="w-16 h-16 text-accent" />
                </motion.div>
              </div>

              {/* Step 2 - Middle Right */}
              <div className="col-start-3 row-start-2 flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-xl border-2 border-accent text-center w-56 h-fit"
                >
                  <div className="bg-gradient-to-r from-primary to-primary-dark text-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg">
                    2
                  </div>
                  <h4 className="font-bold text-primary text-lg mb-3">
                    {aiJourney[1][language].title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {aiJourney[1][language].description}
                  </p>
                </motion.div>
              </div>

              {/* Empty Bottom Left */}
              <div className="col-start-1 row-start-3"></div>

              {/* Step 3 - Bottom Center */}
              <div className="col-start-2 row-start-3 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-xl border-2 border-accent text-center w-56 h-fit"
                >
                  <div className="bg-gradient-to-r from-primary to-primary-dark text-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg">
                    3
                  </div>
                  <h4 className="font-bold text-primary text-lg mb-3">
                    {aiJourney[2][language].title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {aiJourney[2][language].description}
                  </p>
                </motion.div>
              </div>

              {/* Empty Bottom Right */}
              <div className="col-start-3 row-start-3"></div>
            </div>

            {/* Connection Lines */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Vertical line from top to center */}
              <div className="absolute top-32 left-1/2 w-0.5 h-16 bg-accent opacity-30 transform -translate-x-1/2"></div>
              
              {/* Horizontal line from center to right */}
              <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-accent opacity-30 transform -translate-y-1/2"></div>
              
              {/* Vertical line from center to bottom */}
              <div className="absolute bottom-32 left-1/2 w-0.5 h-16 bg-accent opacity-30 transform -translate-x-1/2"></div>
              
              {/* Horizontal line from left to center */}
              <div className="absolute top-1/2 right-1/2 w-16 h-0.5 bg-accent opacity-30 transform -translate-y-1/2"></div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-dashed border-accent opacity-20 rounded-full pointer-events-none"></div>

            {/* Animated Particles */}
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 45) * (Math.PI / 180);
              const radius = 200;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                  className="absolute w-2 h-2 bg-primary rounded-full pointer-events-none"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                />
              );
            })}
          </div>

          {/* Journey Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'ar' 
                ? 'رحلة شاملة لتحويل أعمالك بالذكاء الاصطناعي، من التقييم الأولي إلى التنفيذ الكامل والتحسين المستمر. كل مرحلة مصممة لضمان النجاح والقيمة المضافة لأعمالك.'
                : 'A comprehensive journey to transform your business with AI, from initial assessment to full implementation and continuous optimization. Each phase is designed to ensure success and added value for your business.'
              }
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Technologies Cloud */}
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
            {aiTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-r from-primary to-primary-dark text-accent-light px-6 py-3 rounded-full font-medium shadow-lg cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section with AI Animation */}
      <Section background="primary">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-accent relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-5">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-full h-full bg-gradient-to-r from-primary to-accent"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center relative z-10"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6"
              >
                <Sparkles className="w-8 h-8 text-accent" />
              </motion.div>
              
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
                  <Brain className="w-5 h-5" />
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

export default AIAnalyticsSolutions;