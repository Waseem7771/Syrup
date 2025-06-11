import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { useLanguage } from '../../contexts/LanguageContext';
import investorHeaderImage from '../../assets/images/18.png';
import {
  TrendingUp,
  Briefcase,
  PieChart,
  BarChart3,
  Users,
  Shield,
  FileText,
  CheckCircle,
  Star,
  DollarSign,
  Target,
  Award,
  Eye,
  Download,
  Calendar,
  Clock,
  ArrowRight,
  Building,
  Layers,
  Filter,
  Search,
  Zap,
  Globe,
  LineChart,
  Activity,
  BookOpen,
  Presentation,
  FileCheck,
  ClipboardCheck,
  ThumbsUp,
  Lightbulb,
  Rocket
} from 'lucide-react';

const PreparingCompanyFilesForInvestors: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activePackage, setActivePackage] = useState('startup');
  const [portfolioView, setPortfolioView] = useState('overview');
  const [investmentProgress, setInvestmentProgress] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    success: 0,
    raised: 0,
    investors: 0,
    deals: 0
  });

  // Animate stats on load
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats(prev => ({
        success: Math.min(prev.success + 2, 94),
        raised: Math.min(prev.raised + 5, 125),
        investors: Math.min(prev.investors + 3, 240),
        deals: Math.min(prev.deals + 1, 45)
      }));
    }, 80);

    setTimeout(() => clearInterval(interval), 3000);
    return () => clearInterval(interval);
  }, []);

  // Animate investment progress
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setInvestmentProgress(prev => (prev + 2) % 101);
    }, 150);

    return () => clearInterval(progressInterval);
  }, []);

  const content = {
    en: {
      title: "Preparing Company Files for Investors",
      subtitle: "Professional investor documentation services - expertly crafted portfolios, due diligence packages, and pitch materials to secure funding for Syrian startups and growing businesses",
      overview: "Investment-Ready Excellence",
      overviewDesc: "Our investment preparation specialists create comprehensive, investor-grade documentation packages that showcase your company's potential, financial health, and growth prospects. We ensure your business stands out in the competitive investment landscape.",
      
      // Packages
      startupTitle: "Startup Investment Package",
      growthTitle: "Growth Stage Package",
      scaleTitle: "Scale-Up Investment Suite",
      
      // Process
      processTitle: "Our Investment Preparation Process",
      
      // Success Stories
      successTitle: "Investment Success Stories",
      
      // CTA
      ctaTitle: "Ready to Attract Serious Investors?",
      ctaDesc: "Transform your business into an investment-ready opportunity with our professional documentation and presentation services.",
      
      // Buttons
      startPreparation: "Start Preparation",
      bookConsultation: "Book Strategy Session",
      downloadSample: "Download Sample Portfolio",
      viewSuccess: "View Success Stories"
    },
    ar: {
      title: "تحضير ملفات الشركة للمستثمرين",
      subtitle: "خدمات توثيق المستثمرين المهنية - محافظ مصممة بخبرة وحزم العناية الواجبة ومواد العرض لتأمين التمويل للشركات الناشئة والمتنامية السورية",
      overview: "التميز الجاهز للاستثمار",
      overviewDesc: "يقوم متخصصو إعداد الاستثمار لدينا بإنشاء حزم توثيق شاملة بمستوى المستثمرين تُظهر إمكانات شركتك وصحتها المالية وآفاق نموها. نضمن أن تبرز أعمالك في المشهد الاستثماري التنافسي.",
      
      // Packages
      startupTitle: "حزمة الاستثمار للشركات الناشئة",
      growthTitle: "حزمة مرحلة النمو",
      scaleTitle: "جناح الاستثمار للتوسع",
      
      // Process
      processTitle: "عملية إعداد الاستثمار لدينا",
      
      // Success Stories
      successTitle: "قصص نجاح الاستثمار",
      
      // CTA
      ctaTitle: "مستعد لجذب مستثمرين جديين؟",
      ctaDesc: "حوّل أعمالك إلى فرصة استثمارية جاهزة بخدمات التوثيق والعرض المهنية لدينا.",
      
      // Buttons
      startPreparation: "ابدأ التحضير",
      bookConsultation: "احجز جلسة استراتيجية",
      downloadSample: "تحميل نموذج محفظة",
      viewSuccess: "عرض قصص النجاح"
    }
  };

  const investmentPackages = [
    {
      id: 'startup',
      icon: <Rocket className="w-6 h-6" />,
      title: { en: 'Startup Package', ar: 'حزمة الشركات الناشئة' },
      target: { en: 'Seed & Series A', ar: 'التمويل الأولي والسلسلة أ' },
      price: { en: '$2,500', ar: '2,500$' },
      color: 'from-primary to-primary-dark'
    },
    {
      id: 'growth',
      icon: <TrendingUp className="w-6 h-6" />,
      title: { en: 'Growth Package', ar: 'حزمة النمو' },
      target: { en: 'Series B & C', ar: 'السلسلة ب وج' },
      price: { en: '$4,500', ar: '4,500$' },
      color: 'from-accent to-accent-dark'
    },
    {
      id: 'scale',
      icon: <Building className="w-6 h-6" />,
      title: { en: 'Scale-Up Suite', ar: 'جناح التوسع' },
      target: { en: 'Late Stage & PE', ar: 'المرحلة المتأخرة وملكية خاصة' },
      price: { en: '$7,500', ar: '7,500$' },
      color: 'from-primary-dark to-accent'
    }
  ];

  const packageDetails = {
    startup: {
      documents: {
        en: ['Executive Summary', 'Business Plan', 'Financial Projections', 'Market Analysis', 'Team Profiles', 'Pitch Deck'],
        ar: ['الملخص التنفيذي', 'خطة العمل', 'التوقعات المالية', 'تحليل السوق', 'ملفات الفريق', 'عرض الاستثمار']
      },
      timeline: { en: '2-3 weeks', ar: '2-3 أسابيع' },
      meetings: { en: '4 strategy sessions', ar: '4 جلسات استراتيجية' },
      revisions: { en: 'Unlimited revisions', ar: 'مراجعات غير محدودة' }
    },
    growth: {
      documents: {
        en: ['Comprehensive Due Diligence Package', 'Advanced Financial Models', 'Competitive Analysis', 'Growth Strategy', 'Risk Assessment', 'Investment Memorandum'],
        ar: ['حزمة العناية الواجبة الشاملة', 'النماذج المالية المتقدمة', 'التحليل التنافسي', 'استراتيجية النمو', 'تقييم المخاطر', 'مذكرة الاستثمار']
      },
      timeline: { en: '3-4 weeks', ar: '3-4 أسابيع' },
      meetings: { en: '6 strategy sessions', ar: '6 جلسات استراتيجية' },
      revisions: { en: 'Unlimited revisions + Investor Q&A prep', ar: 'مراجعات غير محدودة + إعداد أسئلة المستثمرين' }
    },
    scale: {
      documents: {
        en: ['Complete Data Room Setup', 'Institutional-Grade Documentation', 'ESG & Compliance Reports', 'Strategic Partnership Analysis', 'Exit Strategy Planning', 'Investor Relations Kit'],
        ar: ['إعداد غرفة البيانات الكاملة', 'التوثيق بمستوى المؤسسات', 'تقارير ESG والامتثال', 'تحليل الشراكة الاستراتيجية', 'تخطيط استراتيجية الخروج', 'مجموعة علاقات المستثمرين']
      },
      timeline: { en: '4-6 weeks', ar: '4-6 أسابيع' },
      meetings: { en: '8 strategy sessions', ar: '8 جلسات استراتيجية' },
      revisions: { en: 'White-glove service + Roadshow support', ar: 'خدمة متميزة + دعم العروض التقديمية' }
    }
  };

  const preparationProcess = [
    {
      step: 1,
      icon: <Search className="w-8 h-8" />,
      title: { en: 'Discovery & Analysis', ar: 'الاكتشاف والتحليل' },
      description: { en: 'Comprehensive business analysis and investment readiness assessment', ar: 'تحليل شامل للأعمال وتقييم الجاهزية للاستثمار' },
      duration: { en: '3-5 days', ar: '3-5 أيام' },
      deliverables: {
        en: ['Business assessment report', 'Investment readiness score', 'Gap analysis', 'Strategic recommendations'],
        ar: ['تقرير تقييم الأعمال', 'نتيجة الجاهزية للاستثمار', 'تحليل الفجوات', 'التوصيات الاستراتيجية']
      }
    },
    {
      step: 2,
      icon: <FileText className="w-8 h-8" />,
      title: { en: 'Documentation Creation', ar: 'إنشاء الوثائق' },
      description: { en: 'Professional creation of all required investor documents and materials', ar: 'إنشاء مهني لجميع وثائق ومواد المستثمرين المطلوبة' },
      duration: { en: '1-2 weeks', ar: '1-2 أسبوع' },
      deliverables: {
        en: ['Business plan', 'Financial models', 'Pitch deck', 'Executive summary'],
        ar: ['خطة العمل', 'النماذج المالية', 'عرض الاستثمار', 'الملخص التنفيذي']
      }
    },
    {
      step: 3,
      icon: <Presentation className="w-8 h-8" />,
      title: { en: 'Presentation Optimization', ar: 'تحسين العرض' },
      description: { en: 'Refining pitch materials and preparing for investor presentations', ar: 'تحسين مواد العرض والتحضير لعروض المستثمرين' },
      duration: { en: '3-5 days', ar: '3-5 أيام' },
      deliverables: {
        en: ['Polished pitch deck', 'Speaking notes', 'Q&A preparation', 'Demo materials'],
        ar: ['عرض استثماري محسن', 'ملاحظات التحدث', 'إعداد الأسئلة والأجوبة', 'مواد العرض التوضيحي']
      }
    },
    {
      step: 4,
      icon: <Target className="w-8 h-8" />,
      title: { en: 'Investor Targeting', ar: 'استهداف المستثمرين' },
      description: { en: 'Identifying and connecting with the right investors for your business', ar: 'تحديد والتواصل مع المستثمرين المناسبين لأعمالك' },
      duration: { en: 'Ongoing', ar: 'مستمر' },
      deliverables: {
        en: ['Investor database', 'Outreach strategy', 'Introduction facilitation', 'Follow-up support'],
        ar: ['قاعدة بيانات المستثمرين', 'استراتيجية التواصل', 'تسهيل المقدمات', 'دعم المتابعة']
      }
    }
  ];

  const successStories = [
    {
      company: { en: 'TechFlow Solutions', ar: 'حلول تك فلو' },
      sector: { en: 'FinTech', ar: 'التكنولوجيا المالية' },
      raised: { en: '$2.5M', ar: '2.5 مليون$' },
      investors: { en: '3 VCs', ar: '3 شركات استثمار' },
      timeline: { en: '4 months', ar: '4 أشهر' },
      growth: '+340%',
      quote: {
        en: 'The documentation package was exceptional. It helped us close our Series A faster than expected.',
        ar: 'كانت حزمة التوثيق استثنائية. ساعدتنا في إغلاق السلسلة أ أسرع من المتوقع.'
      }
    },
    {
      company: { en: 'GreenTech Innovations', ar: 'ابتكارات التكنولوجيا الخضراء' },
      sector: { en: 'CleanTech', ar: 'التكنولوجيا النظيفة' },
      raised: { en: '$5.8M', ar: '5.8 مليون$' },
      investors: { en: '2 PE Firms', ar: 'شركتين استثمار خاص' },
      timeline: { en: '6 months', ar: '6 أشهر' },
      growth: '+520%',
      quote: {
        en: 'Professional presentation that convinced institutional investors of our potential.',
        ar: 'عرض مهني أقنع المستثمرين المؤسسيين بإمكاناتنا.'
      }
    },
    {
      company: { en: 'HealthCare Plus', ar: 'هيلث كير بلس' },
      sector: { en: 'HealthTech', ar: 'تكنولوجيا الصحة' },
      raised: { en: '$1.8M', ar: '1.8 مليون$' },
      investors: { en: '4 Angel Groups', ar: '4 مجموعات مستثمرين ملائكة' },
      timeline: { en: '3 months', ar: '3 أشهر' },
      growth: '+280%',
      quote: {
        en: 'Clear financial projections and market analysis made all the difference.',
        ar: 'التوقعات المالية الواضحة وتحليل السوق أحدثا كل الفرق.'
      }
    }
  ];

  const portfolioViews = [
    { id: 'overview', label: { en: 'Portfolio Overview', ar: 'نظرة عامة على المحفظة' }, icon: <PieChart className="w-5 h-5" /> },
    { id: 'financial', label: { en: 'Financial Models', ar: 'النماذج المالية' }, icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'pitch', label: { en: 'Pitch Materials', ar: 'مواد العرض' }, icon: <Presentation className="w-5 h-5" /> },
    { id: 'documents', label: { en: 'Legal Documents', ar: 'الوثائق القانونية' }, icon: <FileCheck className="w-5 h-5" /> }
  ];

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={investorHeaderImage}
      />

      {/* Investment Portfolio Dashboard */}
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
              
              {/* Investment Success Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <ThumbsUp className="w-6 h-6 text-accent-light" />
                  </div>
                  <div className="text-2xl font-bold text-accent-light">{animatedStats.success}%</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'معدل النجاح' : 'Success Rate'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent to-accent-dark rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold">${animatedStats.raised}M+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'أموال مجمعة' : 'Funds Raised'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-dark to-accent rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-accent-light" />
                  </div>
                  <div className="text-2xl font-bold text-accent-light">{animatedStats.investors}+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'مستثمرين متصلين' : 'Investors Connected'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent-dark to-primary rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <Briefcase className="w-6 h-6 text-accent-light" />
                  </div>
                  <div className="text-2xl font-bold text-accent-light">{animatedStats.deals}+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'صفقات مغلقة' : 'Deals Closed'}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                  {c.startPreparation}
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
              {/* Interactive Investment Portfolio Mockup */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-accent overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-accent-light flex items-center gap-2">
                      <Briefcase className="w-6 h-6" />
                      {language === 'ar' ? 'محفظة الاستثمار' : 'Investment Portfolio'}
                    </h3>
                    <div className="bg-accent text-white rounded-full px-3 py-1 text-xs flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {language === 'ar' ? 'جاهز للاستثمار' : 'Investment Ready'}
                    </div>
                  </div>
                  
                  {/* Investment Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-accent-light text-sm mb-2">
                      <span>{language === 'ar' ? 'تقدم التحضير' : 'Preparation Progress'}</span>
                      <span>{investmentProgress}%</span>
                    </div>
                    <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                      <div 
                        className="bg-accent-light h-2 rounded-full transition-all duration-300"
                        style={{ width: `${investmentProgress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Portfolio Tabs */}
                  <div className="grid grid-cols-2 gap-2">
                    {portfolioViews.slice(0, 4).map((view, idx) => (
                      <button
                        key={view.id}
                        onClick={() => setPortfolioView(view.id)}
                        className={`p-2 rounded-lg text-center transition-all duration-300 ${
                          portfolioView === view.id
                            ? 'bg-accent-light text-primary'
                            : 'bg-white bg-opacity-20 text-accent-light hover:bg-white hover:bg-opacity-30'
                        }`}
                      >
                        <div className="flex items-center justify-center mb-1">
                          {view.icon}
                        </div>
                        <div className="text-xs">{view.label[language]}</div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={portfolioView}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      {portfolioView === 'overview' && (
                        <>
                          <div className="flex items-center gap-3 p-3 bg-accent-light rounded-lg border-l-4 border-accent">
                            <CheckCircle className="w-5 h-5 text-accent" />
                            <div>
                              <div className="font-medium text-accent-dark">{language === 'ar' ? 'خطة العمل' : 'Business Plan'}</div>
                              <div className="text-sm text-accent">{language === 'ar' ? 'مكتملة ومراجعة' : 'Complete & Reviewed'}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3 p-3 bg-primary-light rounded-lg border-l-4 border-primary">
                            <BarChart3 className="w-5 h-5 text-primary" />
                            <div>
                              <div className="font-medium text-primary-dark">{language === 'ar' ? 'النماذج المالية' : 'Financial Models'}</div>
                              <div className="text-sm text-primary">{language === 'ar' ? 'تحليل متقدم' : 'Advanced Analysis'}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                            <Users className="w-5 h-5 text-gray-600" />
                            <div>
                              <div className="font-medium text-gray-800">{language === 'ar' ? 'استهداف المستثمرين' : 'Investor Targeting'}</div>
                              <div className="text-sm text-gray-600">{language === 'ar' ? '25 مستثمر محدد' : '25 Investors Identified'}</div>
                            </div>
                          </div>
                        </>
                      )}
                      
                      {portfolioView === 'financial' && (
                        <>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-gray-700">{language === 'ar' ? 'توقعات الإيرادات' : 'Revenue Projections'}</span>
                              <span className="text-accent font-bold">+280%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-accent h-2 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-gray-700">{language === 'ar' ? 'هامش الربح' : 'Profit Margin'}</span>
                              <span className="text-primary font-bold">42%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: '42%' }}></div>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-gray-700">{language === 'ar' ? 'نمو السوق' : 'Market Growth'}</span>
                              <span className="text-green-600 font-bold">+15%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                          </div>
                        </>
                      )}
                      
                      {portfolioView === 'pitch' && (
                        <>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="bg-accent-light rounded-lg p-2">
                              <Presentation className="w-6 h-6 text-accent mx-auto mb-1" />
                              <div className="text-xs text-accent-dark">12 {language === 'ar' ? 'شرائح' : 'Slides'}</div>
                            </div>
                            <div className="bg-primary-light rounded-lg p-2">
                              <Clock className="w-6 h-6 text-primary mx-auto mb-1" />
                              <div className="text-xs text-primary-dark">8 {language === 'ar' ? 'دقائق' : 'Minutes'}</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-2">
                              <Star className="w-6 h-6 text-yellow-500 mx-auto mb-1" />
                              <div className="text-xs text-gray-600">{language === 'ar' ? 'محسن' : 'Optimized'}</div>
                            </div>
                          </div>
                          
                          <div className="text-center text-sm text-gray-600">
                            {language === 'ar' ? 'عرض تقديمي احترافي جاهز للمستثمرين' : 'Professional pitch deck ready for investors'}
                          </div>
                        </>
                      )}
                      
                      {portfolioView === 'documents' && (
                        <>
                          <div className="space-y-2">
                            {[
                              { name: language === 'ar' ? 'الملخص التنفيذي' : 'Executive Summary', status: 'complete' },
                              { name: language === 'ar' ? 'العناية الواجبة' : 'Due Diligence', status: 'review' },
                              { name: language === 'ar' ? 'الوثائق القانونية' : 'Legal Documents', status: 'complete' }
                            ].map((doc, idx) => (
                              <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                                <span className="text-sm text-gray-700">{doc.name}</span>
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                  doc.status === 'complete' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-orange-100 text-orange-800'
                                }`}>
                                  {doc.status === 'complete' ? (language === 'ar' ? 'مكتمل' : 'Complete') : (language === 'ar' ? 'مراجعة' : 'Review')}
                                </span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Floating Investment Elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -right-8 top-12 bg-accent text-white p-4 rounded-2xl shadow-xl"
              >
                <TrendingUp className="w-8 h-8" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
                className="absolute -left-8 bottom-12 bg-primary text-accent-light p-4 rounded-2xl shadow-xl"
              >
                <DollarSign className="w-8 h-8" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Investment Package Selection */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {language === 'ar' ? 'حزم الاستثمار المتخصصة' : 'Specialized Investment Packages'}
          </motion.h2>

          {/* Package Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-accent">
              {investmentPackages.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => setActivePackage(pkg.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activePackage === pkg.id
                      ? `bg-gradient-to-r ${pkg.color} text-white shadow-lg`
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {pkg.icon}
                  <div className="text-left">
                    <div className="font-medium">{pkg.title[language]}</div>
                    <div className="text-xs opacity-75">{pkg.target[language]}</div>
                  </div>
                  <div className="text-sm font-bold">{pkg.price[language]}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Package Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePackage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl p-8 border border-accent"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    {investmentPackages.find(p => p.id === activePackage)?.title[language]}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-accent" />
                        {language === 'ar' ? 'الوثائق المشمولة:' : 'Included Documents:'}
                      </h4>
                      <div className="space-y-2">
                        {packageDetails[activePackage as keyof typeof packageDetails].documents[language].map((doc, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 bg-accent-light rounded-lg">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm text-accent-dark">{doc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-accent" />
                        {language === 'ar' ? 'تفاصيل الخدمة:' : 'Service Details:'}
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-primary-light rounded-lg">
                          <Clock className="w-5 h-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium text-primary-dark">{language === 'ar' ? 'المدة الزمنية' : 'Timeline'}</div>
                            <div className="text-xs text-primary">{packageDetails[activePackage as keyof typeof packageDetails].timeline[language]}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 bg-accent-light rounded-lg">
                          <Users className="w-5 h-5 text-accent" />
                          <div>
                            <div className="text-sm font-medium text-accent-dark">{language === 'ar' ? 'الجلسات' : 'Meetings'}</div>
                            <div className="text-xs text-accent">{packageDetails[activePackage as keyof typeof packageDetails].meetings[language]}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <Star className="w-5 h-5 text-yellow-500" />
                          <div>
                            <div className="text-sm font-medium text-gray-700">{language === 'ar' ? 'الدعم' : 'Support'}</div>
                            <div className="text-xs text-gray-600">{packageDetails[activePackage as keyof typeof packageDetails].revisions[language]}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 text-white mb-6">
                    <div className="text-4xl font-bold text-accent-light mb-2">
                      {investmentPackages.find(p => p.id === activePackage)?.price[language]}
                    </div>
                    <div className="text-sm opacity-75">{language === 'ar' ? 'شامل جميع الخدمات' : 'All Services Included'}</div>
                  </div>
                  
                  <button
                    onClick={() => navigate('/register')}
                    className="w-full bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 mb-4"
                  >
                    <Rocket className="w-5 h-5" />
                    {language === 'ar' ? 'ابدأ الآن' : 'Start Now'}
                  </button>
                  
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {language === 'ar' ? 'جدولة مكالمة' : 'Schedule Call'}
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>

      {/* Preparation Process */}
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

          <div className="grid lg:grid-cols-2 gap-8">
            {preparationProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-accent hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-accent-light rounded-2xl p-3 flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-primary">{step.title[language]}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description[language]}</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="text-sm text-accent font-medium">{step.duration[language]}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-primary">{language === 'ar' ? 'المخرجات:' : 'Deliverables:'}</h4>
                      {step.deliverables[language].map((deliverable, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <ArrowRight className="w-3 h-3 text-accent flex-shrink-0" />
                          <span className="text-sm text-gray-700">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Success Stories */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.successTitle}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-br from-primary to-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white">
                    <Building className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-1">{story.company[language]}</h3>
                  <p className="text-sm text-accent">{story.sector[language]}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center bg-accent-light rounded-lg p-3">
                    <DollarSign className="w-5 h-5 text-accent mx-auto mb-1" />
                    <div className="text-lg font-bold text-accent-dark">{story.raised[language]}</div>
                    <div className="text-xs text-accent">{language === 'ar' ? 'مجمع' : 'Raised'}</div>
                  </div>
                  <div className="text-center bg-primary-light rounded-lg p-3">
                    <TrendingUp className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-lg font-bold text-primary-dark">{story.growth}</div>
                    <div className="text-xs text-primary">{language === 'ar' ? 'نمو' : 'Growth'}</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700 italic">"{story.quote[language]}"</p>
                </div>
                
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{story.investors[language]}</span>
                  <span>{story.timeline[language]}</span>
                </div>
              </motion.div>
            ))}
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
              <div className="text-6xl mb-6">💼</div>
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
                  {c.viewSuccess}
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

export default PreparingCompanyFilesForInvestors;