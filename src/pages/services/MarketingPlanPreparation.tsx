import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { useLanguage } from '../../contexts/LanguageContext';
import marketingHeaderImage from '../../assets/images/14.png';
import {
  Target,
  TrendingUp,
  Users,
  Megaphone,
  BarChart3,
  PieChart,
  Calendar,
  DollarSign,
  Eye,
  ThumbsUp,
  Share2,
  MessageCircle,
  Star,
  Award,
  Zap,
  Lightbulb,
  Rocket,
  Globe,
  Search,
  Heart,
  PlayCircle,
  Camera,
  Smartphone,
  Monitor,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Clock,
  CheckCircle,
  ArrowRight,
  LineChart,
  Activity,
  Layers,
  Filter,
  BookOpen,
  Briefcase,
  Download
} from 'lucide-react';

const MarketingPlanPreparation: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeStrategy, setActiveStrategy] = useState('digital');
  const [campaignMetrics, setCampaignMetrics] = useState({
    reach: 0,
    engagement: 0,
    conversion: 0,
    roi: 0
  });
  const [marketingTimeline, setMarketingTimeline] = useState(0);
  const [selectedChannel, setSelectedChannel] = useState('social');

  // Animate metrics on load
  useEffect(() => {
    const interval = setInterval(() => {
      setCampaignMetrics(prev => ({
        reach: Math.min(prev.reach + 2500, 125000),
        engagement: Math.min(prev.engagement + 0.3, 8.7),
        conversion: Math.min(prev.conversion + 0.2, 4.5),
        roi: Math.min(prev.roi + 10, 340)
      }));
    }, 50);

    setTimeout(() => clearInterval(interval), 3000);
    return () => clearInterval(interval);
  }, []);

  // Animate timeline progress
  useEffect(() => {
    const timelineInterval = setInterval(() => {
      setMarketingTimeline(prev => (prev + 1) % 101);
    }, 100);

    return () => clearInterval(timelineInterval);
  }, []);

  const content = {
    en: {
      title: "Marketing Plan Preparation",
      subtitle: "Comprehensive marketing strategy development - data-driven campaigns, multi-channel approaches, and performance optimization designed specifically for Syrian market dynamics and business growth",
      overview: "Strategic Marketing Excellence",
      overviewDesc: "Our marketing strategists develop comprehensive, results-driven marketing plans that combine traditional and digital approaches. We create targeted campaigns that resonate with Syrian audiences while leveraging international best practices for maximum ROI.",
      
      // Strategies
      digitalTitle: "Digital Marketing Strategy",
      traditionalTitle: "Traditional Marketing Mix",
      integratedTitle: "Integrated Campaign Strategy",
      
      // Process
      processTitle: "Our Marketing Strategy Process",
      
      // Channels
      channelsTitle: "Marketing Channels & Platforms",
      
      // CTA
      ctaTitle: "Ready to Launch Your Marketing Success?",
      ctaDesc: "Transform your business growth with strategic marketing plans designed for the Syrian market and beyond.",
      
      // Buttons
      startStrategy: "Start Marketing Strategy",
      bookConsultation: "Book Strategy Session",
      downloadTemplate: "Download Plan Template",
      viewCases: "View Case Studies"
    },
    ar: {
      title: "إعداد خطة التسويق",
      subtitle: "تطوير استراتيجية تسويق شاملة - حملات مدفوعة بالبيانات ونهج متعدد القنوات وتحسين الأداء مصممة خصيصاً لديناميكيات السوق السورية ونمو الأعمال",
      overview: "التميز الاستراتيجي في التسويق",
      overviewDesc: "يطور استراتيجيو التسويق لدينا خططاً تسويقية شاملة مدفوعة بالنتائج تجمع بين النهج التقليدي والرقمي. ننشئ حملات مستهدفة تتفاعل مع الجماهير السورية مع الاستفادة من أفضل الممارسات الدولية لتحقيق أقصى عائد استثمار.",
      
      // Strategies
      digitalTitle: "استراتيجية التسويق الرقمي",
      traditionalTitle: "مزيج التسويق التقليدي",
      integratedTitle: "استراتيجية الحملة المتكاملة",
      
      // Process
      processTitle: "عملية استراتيجية التسويق لدينا",
      
      // Channels
      channelsTitle: "قنوات ومنصات التسويق",
      
      // CTA
      ctaTitle: "مستعد لإطلاق نجاحك التسويقي؟",
      ctaDesc: "حوّل نمو أعمالك بخطط تسويقية استراتيجية مصممة للسوق السورية وما بعدها.",
      
      // Buttons
      startStrategy: "ابدأ الاستراتيجية التسويقية",
      bookConsultation: "احجز جلسة استراتيجية",
      downloadTemplate: "تحميل قالب الخطة",
      viewCases: "عرض دراسات الحالة"
    }
  };

  const marketingStrategies = [
    {
      id: 'digital',
      icon: <Smartphone className="w-6 h-6" />,
      title: { en: 'Digital Marketing', ar: 'التسويق الرقمي' },
      focus: { en: 'Online & Social', ar: 'الإنترنت والاجتماعي' },
      color: 'from-primary to-primary-dark'
    },
    {
      id: 'traditional',
      icon: <Megaphone className="w-6 h-6" />,
      title: { en: 'Traditional Mix', ar: 'المزيج التقليدي' },
      focus: { en: 'Print & Broadcast', ar: 'المطبوع والإذاعي' },
      color: 'from-accent to-accent-dark'
    },
    {
      id: 'integrated',
      icon: <Layers className="w-6 h-6" />,
      title: { en: 'Integrated Campaign', ar: 'حملة متكاملة' },
      focus: { en: 'Multi-Channel', ar: 'متعدد القنوات' },
      color: 'from-primary-dark to-accent'
    }
  ];

  const digitalChannels = [
    {
      id: 'social',
      name: { en: 'Social Media', ar: 'وسائل التواصل الاجتماعي' },
      icon: <Share2 className="w-8 h-8" />,
      platforms: [
        { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, reach: '2.9B', color: 'bg-primary' },
        { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, reach: '2B', color: 'bg-accent' },
        { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, reach: '900M', color: 'bg-primary-dark' },
        { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, reach: '450M', color: 'bg-accent-dark' }
      ],
      metrics: { engagement: '8.7%', reach: '125K', cost: '$0.45' }
    },
    {
      id: 'content',
      name: { en: 'Content Marketing', ar: 'تسويق المحتوى' },
      icon: <BookOpen className="w-8 h-8" />,
      platforms: [
        { name: 'Blog Posts', icon: <BookOpen className="w-5 h-5" />, reach: 'SEO', color: 'bg-primary' },
        { name: 'Videos', icon: <PlayCircle className="w-5 h-5" />, reach: 'YouTube', color: 'bg-accent' },
        { name: 'Podcasts', icon: <Megaphone className="w-5 h-5" />, reach: 'Audio', color: 'bg-primary-dark' },
        { name: 'Infographics', icon: <BarChart3 className="w-5 h-5" />, reach: 'Visual', color: 'bg-accent-dark' }
      ],
      metrics: { engagement: '12.3%', reach: '85K', cost: '$0.32' }
    },
    {
      id: 'paid',
      name: { en: 'Paid Advertising', ar: 'الإعلانات المدفوعة' },
      icon: <Target className="w-8 h-8" />,
      platforms: [
        { name: 'Google Ads', icon: <Search className="w-5 h-5" />, reach: 'Search', color: 'bg-primary' },
        { name: 'Facebook Ads', icon: <Facebook className="w-5 h-5" />, reach: 'Social', color: 'bg-accent' },
        { name: 'Display', icon: <Monitor className="w-5 h-5" />, reach: 'Banner', color: 'bg-primary-dark' },
        { name: 'Video Ads', icon: <PlayCircle className="w-5 h-5" />, reach: 'YouTube', color: 'bg-accent-dark' }
      ],
      metrics: { engagement: '6.2%', reach: '200K', cost: '$0.78' }
    },
    {
      id: 'email',
      name: { en: 'Email Marketing', ar: 'التسويق الإلكتروني' },
      icon: <Mail className="w-8 h-8" />,
      platforms: [
        { name: 'Newsletters', icon: <Mail className="w-5 h-5" />, reach: 'Weekly', color: 'bg-primary' },
        { name: 'Automation', icon: <Zap className="w-5 h-5" />, reach: 'Drip', color: 'bg-accent' },
        { name: 'Campaigns', icon: <Rocket className="w-5 h-5" />, reach: 'Promo', color: 'bg-primary-dark' },
        { name: 'Personalized', icon: <Heart className="w-5 h-5" />, reach: 'Custom', color: 'bg-accent-dark' }
      ],
      metrics: { engagement: '24.8%', reach: '15K', cost: '$0.12' }
    }
  ];

  const strategyProcess = [
    {
      step: 1,
      icon: <Search className="w-8 h-8" />,
      title: { en: 'Market Research', ar: 'أبحاث السوق' },
      description: { en: 'Comprehensive market analysis and competitor research', ar: 'تحليل شامل للسوق وأبحاث المنافسين' },
      duration: { en: '1-2 weeks', ar: '1-2 أسبوع' },
      deliverables: {
        en: ['Market size analysis', 'Competitor mapping', 'Customer personas', 'SWOT analysis'],
        ar: ['تحليل حجم السوق', 'خرائط المنافسين', 'شخصيات العملاء', 'تحليل SWOT']
      },
      tools: ['Google Analytics', 'SEMrush', 'Survey Tools', 'Social Listening']
    },
    {
      step: 2,
      icon: <Target className="w-8 h-8" />,
      title: { en: 'Strategy Development', ar: 'تطوير الاستراتيجية' },
      description: { en: 'Creating targeted marketing strategies and positioning', ar: 'إنشاء استراتيجيات تسويق مستهدفة وتحديد المواقع' },
      duration: { en: '2-3 weeks', ar: '2-3 أسابيع' },
      deliverables: {
        en: ['Marketing objectives', 'Channel strategy', 'Content calendar', 'Budget allocation'],
        ar: ['أهداف التسويق', 'استراتيجية القنوات', 'تقويم المحتوى', 'توزيع الميزانية']
      },
      tools: ['Strategy Canvas', 'Content Planning', 'Budget Models', 'KPI Framework']
    },
    {
      step: 3,
      icon: <Rocket className="w-8 h-8" />,
      title: { en: 'Campaign Creation', ar: 'إنشاء الحملة' },
      description: { en: 'Developing creative assets and campaign materials', ar: 'تطوير الأصول الإبداعية ومواد الحملة' },
      duration: { en: '2-4 weeks', ar: '2-4 أسابيع' },
      deliverables: {
        en: ['Creative assets', 'Ad copy', 'Landing pages', 'Email templates'],
        ar: ['الأصول الإبداعية', 'نسخ الإعلانات', 'صفحات الهبوط', 'قوالب البريد الإلكتروني']
      },
      tools: ['Design Software', 'Copywriting', 'Web Development', 'Email Builders']
    },
    {
      step: 4,
      icon: <Activity className="w-8 h-8" />,
      title: { en: 'Launch & Optimize', ar: 'الإطلاق والتحسين' },
      description: { en: 'Campaign execution with continuous monitoring and optimization', ar: 'تنفيذ الحملة مع المراقبة والتحسين المستمر' },
      duration: { en: 'Ongoing', ar: 'مستمر' },
      deliverables: {
        en: ['Campaign launch', 'Performance reports', 'A/B testing', 'ROI analysis'],
        ar: ['إطلاق الحملة', 'تقارير الأداء', 'اختبار A/B', 'تحليل عائد الاستثمار']
      },
      tools: ['Analytics', 'Testing Tools', 'Reporting', 'Optimization']
    }
  ];

  const marketingPackages = [
    {
      name: { en: 'Startup Marketing', ar: 'تسويق الشركات الناشئة' },
      price: { en: '$1,500', ar: '1,500$' },
      duration: { en: '4-6 weeks', ar: '4-6 أسابيع' },
      features: {
        en: ['Market research', 'Basic strategy', 'Social media plan', '3 month roadmap'],
        ar: ['أبحاث السوق', 'استراتيجية أساسية', 'خطة وسائل التواصل', 'خارطة طريق 3 أشهر']
      }
    },
    {
      name: { en: 'Growth Marketing', ar: 'تسويق النمو' },
      price: { en: '$3,500', ar: '3,500$' },
      duration: { en: '6-8 weeks', ar: '6-8 أسابيع' },
      features: {
        en: ['Comprehensive research', 'Multi-channel strategy', 'Content calendar', '6 month execution plan'],
        ar: ['أبحاث شاملة', 'استراتيجية متعددة القنوات', 'تقويم المحتوى', 'خطة تنفيذ 6 أشهر']
      }
    },
    {
      name: { en: 'Enterprise Marketing', ar: 'تسويق المؤسسات' },
      price: { en: '$7,500', ar: '7,500$' },
      duration: { en: '8-12 weeks', ar: '8-12 أسابيع' },
      features: {
        en: ['Full market analysis', 'Integrated campaigns', 'Advanced automation', '12 month strategic plan'],
        ar: ['تحليل كامل للسوق', 'حملات متكاملة', 'أتمتة متقدمة', 'خطة استراتيجية 12 شهر']
      }
    }
  ];

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={marketingHeaderImage}
      />

      {/* Marketing Campaign Dashboard */}
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
              
              {/* Campaign Performance Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <Eye className="w-6 h-6 text-accent-light" />
                  </div>
                  <div className="text-2xl font-bold text-accent-light">{campaignMetrics.reach.toLocaleString()}+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'وصول الحملة' : 'Campaign Reach'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent to-accent-dark rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <ThumbsUp className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold">{campaignMetrics.engagement.toFixed(1)}%</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'معدل التفاعل' : 'Engagement Rate'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-dark to-accent rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <Target className="w-6 h-6 text-accent-light" />
                  </div>
                  <div className="text-2xl font-bold text-accent-light">{campaignMetrics.conversion.toFixed(1)}%</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'معدل التحويل' : 'Conversion Rate'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent-dark to-primary rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-6 h-6 text-accent-light" />
                  </div>
                  <div className="text-2xl font-bold text-accent-light">{campaignMetrics.roi}%</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'عائد الاستثمار' : 'ROI'}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                  {c.startStrategy}
                </button>
                <button 
                  className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {c.downloadTemplate}
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
              {/* Interactive Marketing Dashboard */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-accent overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-accent-light flex items-center gap-2">
                      <BarChart3 className="w-6 h-6" />
                      {language === 'ar' ? 'لوحة التسويق المباشر' : 'Live Marketing Dashboard'}
                    </h3>
                    <div className="bg-accent text-white rounded-full px-3 py-1 text-xs flex items-center gap-1">
                      <Activity className="w-3 h-3" />
                      {language === 'ar' ? 'نشط' : 'Active'}
                    </div>
                  </div>
                  
                  {/* Campaign Timeline */}
                  <div className="mb-4">
                    <div className="flex justify-between text-accent-light text-sm mb-2">
                      <span>{language === 'ar' ? 'تقدم الحملة' : 'Campaign Progress'}</span>
                      <span>{marketingTimeline}%</span>
                    </div>
                    <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                      <div 
                        className="bg-accent-light h-2 rounded-full transition-all duration-300"
                        style={{ width: `${marketingTimeline}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Channel Performance */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white bg-opacity-20 rounded-lg p-2 text-center">
                      <Share2 className="w-5 h-5 mx-auto mb-1 text-accent-light" />
                      <div className="text-accent-light text-xs">{language === 'ar' ? 'اجتماعي' : 'Social'}</div>
                      <div className="text-lg font-bold">8.7%</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-2 text-center">
                      <Mail className="w-5 h-5 mx-auto mb-1 text-accent-light" />
                      <div className="text-accent-light text-xs">{language === 'ar' ? 'إيميل' : 'Email'}</div>
                      <div className="text-lg font-bold">24.8%</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-2 text-center">
                      <Search className="w-5 h-5 mx-auto mb-1 text-accent-light" />
                      <div className="text-accent-light text-xs">{language === 'ar' ? 'بحث' : 'Search'}</div>
                      <div className="text-lg font-bold">6.2%</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-2 text-center">
                      <BookOpen className="w-5 h-5 mx-auto mb-1 text-accent-light" />
                      <div className="text-accent-light text-xs">{language === 'ar' ? 'محتوى' : 'Content'}</div>
                      <div className="text-lg font-bold">12.3%</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-accent-light rounded-lg border-l-4 border-accent">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium text-accent-dark">{language === 'ar' ? 'استراتيجية وسائل التواصل' : 'Social Media Strategy'}</div>
                        <div className="text-sm text-accent">{language === 'ar' ? 'مكتملة ونشطة' : 'Complete & Active'}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-primary-light rounded-lg border-l-4 border-primary">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-primary-dark">{language === 'ar' ? 'تحليل المحتوى' : 'Content Analysis'}</div>
                        <div className="text-sm text-primary">{language === 'ar' ? 'قيد التطوير' : 'In Development'}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                      <Star className="w-5 h-5 text-yellow-600" />
                      <div>
                        <div className="font-medium text-yellow-800">{language === 'ar' ? 'حملة إعلانية' : 'Ad Campaign'}</div>
                        <div className="text-sm text-yellow-600">{language === 'ar' ? 'جاهزة للإطلاق' : 'Ready to Launch'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Marketing Elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-8 top-12 bg-accent text-white p-4 rounded-2xl shadow-xl"
              >
                <Megaphone className="w-8 h-8" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute -left-8 bottom-12 bg-primary text-accent-light p-4 rounded-2xl shadow-xl"
              >
                <Target className="w-8 h-8" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Marketing Strategy Selection */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {language === 'ar' ? 'استراتيجيات التسويق المتخصصة' : 'Specialized Marketing Strategies'}
          </motion.h2>

          {/* Strategy Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-accent">
              {marketingStrategies.map((strategy) => (
                <button
                  key={strategy.id}
                  onClick={() => setActiveStrategy(strategy.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeStrategy === strategy.id
                      ? `bg-gradient-to-r ${strategy.color} text-white shadow-lg`
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {strategy.icon}
                  <div className="text-left">
                    <div className="font-medium">{strategy.title[language]}</div>
                    <div className="text-xs opacity-75">{strategy.focus[language]}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Strategy Content */}
          <AnimatePresence mode="wait">
            {activeStrategy === 'digital' && (
              <motion.div
                key="digital"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-primary text-center mb-8">{c.digitalTitle}</h3>
                
                {/* Channel Selector */}
                <div className="flex justify-center mb-8">
                  <div className="flex bg-white rounded-xl p-1 shadow-lg border border-gray-200">
                    {digitalChannels.map((channel) => (
                      <button
                        key={channel.id}
                        onClick={() => setSelectedChannel(channel.id)}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                          selectedChannel === channel.id
                            ? 'bg-primary text-accent-light shadow-md'
                            : 'text-gray-600 hover:text-primary'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {channel.icon}
                          <span className="text-sm font-medium">{channel.name[language]}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Channel Details */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedChannel}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
                  >
                    {digitalChannels.find(ch => ch.id === selectedChannel) && (
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                            {digitalChannels.find(ch => ch.id === selectedChannel)?.icon}
                            {digitalChannels.find(ch => ch.id === selectedChannel)?.name[language]}
                          </h4>
                          
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            {digitalChannels.find(ch => ch.id === selectedChannel)?.platforms.map((platform, idx) => (
                              <div key={idx} className={`${platform.color} text-white rounded-xl p-4 text-center`}>
                                <div className="flex items-center justify-center mb-2">
                                  {platform.icon}
                                </div>
                                <div className="font-medium text-sm">{platform.name}</div>
                                <div className="text-xs opacity-75">{platform.reach}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-bold text-primary mb-4">{language === 'ar' ? 'مقاييس الأداء' : 'Performance Metrics'}</h4>
                          <div className="space-y-4">
                            <div className="bg-accent-light rounded-lg p-4">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-accent-dark font-medium">{language === 'ar' ? 'معدل التفاعل' : 'Engagement Rate'}</span>
                                <span className="text-accent font-bold text-lg">{digitalChannels.find(ch => ch.id === selectedChannel)?.metrics.engagement}</span>
                              </div>
                              <div className="w-full bg-accent bg-opacity-20 rounded-full h-2">
                                <div className="bg-accent h-2 rounded-full" style={{ width: '75%' }}></div>
                              </div>
                            </div>
                            
                            <div className="bg-primary-light rounded-lg p-4">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-primary-dark font-medium">{language === 'ar' ? 'الوصول' : 'Reach'}</span>
                                <span className="text-primary font-bold text-lg">{digitalChannels.find(ch => ch.id === selectedChannel)?.metrics.reach}</span>
                              </div>
                              <div className="w-full bg-primary bg-opacity-20 rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                              </div>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-4">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-700 font-medium">{language === 'ar' ? 'التكلفة لكل نقرة' : 'Cost Per Click'}</span>
                                <span className="text-gray-800 font-bold text-lg">{digitalChannels.find(ch => ch.id === selectedChannel)?.metrics.cost}</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-gray-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}

            {activeStrategy === 'traditional' && (
              <motion.div
                key="traditional"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-primary text-center mb-8">{c.traditionalTitle}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Monitor className="w-8 h-8" />,
                      title: { en: 'Television & Radio', ar: 'التلفزيون والراديو' },
                      description: { en: 'Broadcast media campaigns for mass market reach', ar: 'حملات الإعلام المرئي والمسموع للوصول الجماهيري' },
                      metrics: { reach: '500K+', cost: '$2,500', duration: '30 seconds' }
                    },
                    {
                      icon: <BookOpen className="w-8 h-8" />,
                      title: { en: 'Print Media', ar: 'الإعلام المطبوع' },
                      description: { en: 'Newspapers, magazines, and outdoor advertising', ar: 'الصحف والمجلات والإعلانات الخارجية' },
                      metrics: { reach: '150K+', cost: '$1,200', duration: '1 month' }
                    },
                    {
                      icon: <Globe className="w-8 h-8" />,
                      title: { en: 'Events & Sponsorships', ar: 'الفعاليات والرعايات' },
                      description: { en: 'Trade shows, conferences, and community events', ar: 'المعارض التجارية والمؤتمرات والفعاليات المجتمعية' },
                      metrics: { reach: '50K+', cost: '$5,000', duration: '3 days' }
                    }
                  ].map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="text-center mb-6">
                        <div className="bg-accent text-white rounded-2xl p-4 inline-block mb-4">
                          {method.icon}
                        </div>
                        <h4 className="text-xl font-bold text-primary mb-2">{method.title[language]}</h4>
                        <p className="text-gray-600 text-sm">{method.description[language]}</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-2 bg-accent-light rounded-lg">
                          <span className="text-accent-dark text-sm">{language === 'ar' ? 'الوصول' : 'Reach'}</span>
                          <span className="text-accent font-bold">{method.metrics.reach}</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-primary-light rounded-lg">
                          <span className="text-primary-dark text-sm">{language === 'ar' ? 'التكلفة' : 'Cost'}</span>
                          <span className="text-primary font-bold">{method.metrics.cost}</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                          <span className="text-gray-700 text-sm">{language === 'ar' ? 'المدة' : 'Duration'}</span>
                          <span className="text-gray-800 font-bold">{method.metrics.duration}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeStrategy === 'integrated' && (
              <motion.div
                key="integrated"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-primary text-center mb-8">{c.integratedTitle}</h3>
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                  <div className="text-center mb-8">
                    <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-6 inline-block text-white mb-4">
                      <Layers className="w-12 h-12" />
                    </div>
                    <h4 className="text-2xl font-bold text-primary mb-2">{language === 'ar' ? 'حملة متكاملة 360 درجة' : '360° Integrated Campaign'}</h4>
                    <p className="text-gray-600">{language === 'ar' ? 'استراتيجية شاملة تجمع بين جميع قنوات التسويق' : 'Comprehensive strategy combining all marketing channels'}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {marketingPackages.map((pkg, index) => (
                      <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                        <div className="text-3xl font-bold text-primary mb-2">{pkg.price[language]}</div>
                        <h5 className="text-lg font-bold text-accent mb-2">{pkg.name[language]}</h5>
                        <div className="text-sm text-gray-600 mb-4">{pkg.duration[language]}</div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {pkg.features[language].map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button 
                          onClick={() => navigate('/register')}
                          className="w-full bg-primary hover:bg-primary-dark text-accent-light font-medium py-2 px-4 rounded-lg transition-all duration-300 mt-4"
                        >
                          {language === 'ar' ? 'اختر الخطة' : 'Choose Plan'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>

      {/* Strategy Process */}
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
            {strategyProcess.map((step, index) => (
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
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-bold text-primary mb-2">{language === 'ar' ? 'المخرجات:' : 'Deliverables:'}</h4>
                        <div className="space-y-1">
                          {step.deliverables[language].map((deliverable, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <ArrowRight className="w-3 h-3 text-accent flex-shrink-0" />
                              <span className="text-xs text-gray-700">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-bold text-primary mb-2">{language === 'ar' ? 'الأدوات:' : 'Tools:'}</h4>
                        <div className="space-y-1">
                          {step.tools.map((tool, idx) => (
                            <div key={idx} className="text-xs text-accent bg-accent-light rounded-full px-2 py-1">
                              {tool}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
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
              <div className="text-6xl mb-6">🚀</div>
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
                  {c.viewCases}
                </button>
                <button 
                  className="bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-20 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {c.downloadTemplate}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default MarketingPlanPreparation;