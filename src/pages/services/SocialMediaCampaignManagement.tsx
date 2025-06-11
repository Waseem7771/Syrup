import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { useLanguage } from '../../contexts/LanguageContext';
import socialMediaHeaderImage from '../../assets/images/21.png';
import {
  Heart,
  MessageCircle,
  Share2,
  Eye,
  ThumbsUp,
  TrendingUp,
  Users,
  Calendar,
  Clock,
  Star,
  Zap,
  Target,
  BarChart3,
  PieChart,
  Activity,
  Smartphone,
  Camera,
  Video,
  Image,
  Edit3,
  Send,
  Plus,
  Settings,
  Filter,
  Download,
  PlayCircle,
  Pause,
  SkipForward,
  Volume2,
  Maximize,
  MoreHorizontal,
  Bookmark,
  Flag,
  UserPlus,
  Globe,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  TikTok,
  Telegram,
  WhatsApp
} from 'lucide-react';

const SocialMediaCampaignManagement: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activePlatform, setActivePlatform] = useState('instagram');
  const [selectedPost, setSelectedPost] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [liveMetrics, setLiveMetrics] = useState({
    likes: 0,
    comments: 0,
    shares: 0,
    reach: 0
  });

  // Animate live metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        likes: Math.min(prev.likes + Math.floor(Math.random() * 5), 1247),
        comments: Math.min(prev.comments + Math.floor(Math.random() * 2), 89),
        shares: Math.min(prev.shares + Math.floor(Math.random() * 3), 156),
        reach: Math.min(prev.reach + Math.floor(Math.random() * 50), 12847)
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      title: "Social Media Campaign Management",
      subtitle: "Professional social media campaign management - content creation, community engagement, and performance optimization across all major platforms for Syrian businesses and global reach",
      overview: "Social Media Excellence",
      overviewDesc: "Our social media specialists create and manage comprehensive campaigns that build brand awareness, engage audiences, and drive conversions. We combine creative content with data-driven strategies for maximum impact.",
      
      // Services
      contentTitle: "Content Creation & Management",
      engagementTitle: "Community Engagement",
      analyticsTitle: "Performance Analytics",
      
      // Process
      processTitle: "Our Social Media Process",
      
      // Platforms
      platformsTitle: "Multi-Platform Management",
      
      // CTA
      ctaTitle: "Ready to Amplify Your Social Presence?",
      ctaDesc: "Transform your social media into a powerful business growth engine with our comprehensive campaign management services.",
      
      // Buttons
      startCampaign: "Start Campaign",
      bookConsultation: "Book Strategy Call",
      viewPortfolio: "View Portfolio",
      getQuote: "Get Custom Quote"
    },
    ar: {
      title: "إدارة حملات وسائل التواصل الاجتماعي",
      subtitle: "إدارة حملات وسائل التواصل الاجتماعي المهنية - إنشاء المحتوى وإشراك المجتمع وتحسين الأداء عبر جميع المنصات الرئيسية للشركات في سوريا والوصول العالمي",
      overview: "التميز في وسائل التواصل الاجتماعي",
      overviewDesc: "يقوم متخصصو وسائل التواصل الاجتماعي لدينا بإنشاء وإدارة حملات شاملة تبني الوعي بالعلامة التجارية وتشرك الجماهير وتحفز التحويلات. نجمع بين المحتوى الإبداعي والاستراتيجيات المدفوعة بالبيانات لتحقيق أقصى تأثير.",
      
      // Services
      contentTitle: "إنشاء وإدارة المحتوى",
      engagementTitle: "إشراك المجتمع",
      analyticsTitle: "تحليلات الأداء",
      
      // Process
      processTitle: "عملية وسائل التواصل الاجتماعي لدينا",
      
      // Platforms
      platformsTitle: "الإدارة متعددة المنصات",
      
      // CTA
      ctaTitle: "مستعد لتضخيم حضورك الاجتماعي؟",
      ctaDesc: "حوّل وسائل التواصل الاجتماعي إلى محرك قوي لنمو الأعمال بخدمات إدارة الحملات الشاملة لدينا.",
      
      // Buttons
      startCampaign: "ابدأ الحملة",
      bookConsultation: "احجز مكالمة استراتيجية",
      viewPortfolio: "عرض المحفظة",
      getQuote: "احصل على عرض مخصص"
    }
  };

  const socialPlatforms = [
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      color: 'from-accent to-accent-dark',
      users: '2B+',
      engagement: '1.6%',
      bestFor: { en: 'Visual Content', ar: 'المحتوى المرئي' }
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      color: 'from-primary to-primary-dark',
      users: '2.9B+',
      engagement: '1.2%',
      bestFor: { en: 'Community Building', ar: 'بناء المجتمع' }
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      color: 'from-primary-dark to-accent',
      users: '900M+',
      engagement: '2.1%',
      bestFor: { en: 'B2B Marketing', ar: 'التسويق للشركات' }
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: <Video className="w-6 h-6" />,
      color: 'from-accent-dark to-primary',
      users: '1B+',
      engagement: '5.3%',
      bestFor: { en: 'Viral Content', ar: 'المحتوى الفيروسي' }
    }
  ];

  const mockPosts = [
    {
      platform: 'instagram',
      type: 'image',
      content: {
        en: 'Launch your startup with confidence! 🚀 Our business consulting helped TechFlow raise $2.5M in Series A funding.',
        ar: 'أطلق شركتك الناشئة بثقة! 🚀 ساعدت استشاراتنا التجارية تك فلو في جمع 2.5 مليون دولار في تمويل السلسلة أ.'
      },
      metrics: { likes: 847, comments: 23, shares: 12 },
      time: '2h ago',
      hashtags: ['#StartupSuccess', '#BusinessConsulting', '#Syria', '#Investment']
    },
    {
      platform: 'linkedin',
      type: 'article',
      content: {
        en: 'The Ultimate Guide to Syrian Market Entry: 5 Key Strategies for International Businesses',
        ar: 'الدليل النهائي لدخول السوق السوري: 5 استراتيجيات رئيسية للشركات الدولية'
      },
      metrics: { likes: 324, comments: 45, shares: 67 },
      time: '4h ago',
      hashtags: ['#MarketEntry', '#BusinessStrategy', '#SyrianMarket']
    },
    {
      platform: 'facebook',
      type: 'video',
      content: {
        en: 'Watch how we transformed a traditional Syrian business into a digital powerhouse in just 6 months!',
        ar: 'شاهد كيف حولنا عملاً سورياً تقليدياً إلى قوة رقمية في 6 أشهر فقط!'
      },
      metrics: { likes: 1205, comments: 89, shares: 156 },
      time: '6h ago',
      hashtags: ['#DigitalTransformation', '#Success', '#Syria']
    }
  ];

  const campaignServices = [
    {
      icon: <Edit3 className="w-8 h-8" />,
      title: { en: 'Content Creation', ar: 'إنشاء المحتوى' },
      description: { en: 'Professional content creation including graphics, videos, and copywriting', ar: 'إنشاء محتوى مهني يشمل الرسوميات والفيديوهات وكتابة النصوص' },
      features: {
        en: ['Custom graphics design', 'Video production', 'Copywriting & captions', 'Brand consistency'],
        ar: ['تصميم رسوميات مخصصة', 'إنتاج الفيديو', 'كتابة النصوص والتعليقات', 'اتساق العلامة التجارية']
      },
      metrics: { posts: '120+', engagement: '+45%', reach: '250K+' }
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: { en: 'Community Management', ar: 'إدارة المجتمع' },
      description: { en: 'Active community engagement and customer relationship management', ar: 'إشراك المجتمع النشط وإدارة علاقات العملاء' },
      features: {
        en: ['Real-time responses', 'Community building', 'Customer support', 'Crisis management'],
        ar: ['ردود فورية', 'بناء المجتمع', 'دعم العملاء', 'إدارة الأزمات']
      },
      metrics: { response: '<2h', satisfaction: '95%', growth: '+180%' }
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: { en: 'Paid Advertising', ar: 'الإعلانات المدفوعة' },
      description: { en: 'Strategic paid campaigns for maximum ROI and audience reach', ar: 'حملات مدفوعة استراتيجية لأقصى عائد استثمار ووصول للجمهور' },
      features: {
        en: ['Audience targeting', 'Ad optimization', 'Budget management', 'A/B testing'],
        ar: ['استهداف الجمهور', 'تحسين الإعلانات', 'إدارة الميزانية', 'اختبار A/B']
      },
      metrics: { roi: '340%', cpc: '$0.45', conversion: '4.2%' }
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: { en: 'Analytics & Reporting', ar: 'التحليلات والتقارير' },
      description: { en: 'Comprehensive performance tracking and detailed reporting', ar: 'تتبع الأداء الشامل والتقارير المفصلة' },
      features: {
        en: ['Performance metrics', 'Competitor analysis', 'Growth insights', 'Monthly reports'],
        ar: ['مقاييس الأداء', 'تحليل المنافسين', 'رؤى النمو', 'تقارير شهرية']
      },
      metrics: { accuracy: '99.2%', insights: '50+', tracking: '24/7' }
    }
  ];

  const campaignProcess = [
    {
      step: 1,
      icon: <Target className="w-6 h-6" />,
      title: { en: 'Strategy Development', ar: 'تطوير الاستراتيجية' },
      description: { en: 'Comprehensive social media strategy tailored to your goals', ar: 'استراتيجية شاملة لوسائل التواصل الاجتماعي مصممة لأهدافك' },
      duration: { en: '1-2 weeks', ar: '1-2 أسبوع' },
      deliverables: {
        en: ['Platform selection', 'Content calendar', 'Audience personas'],
        ar: ['اختيار المنصات', 'تقويم المحتوى', 'شخصيات الجمهور']
      }
    },
    {
      step: 2,
      icon: <Camera className="w-6 h-6" />,
      title: { en: 'Content Production', ar: 'إنتاج المحتوى' },
      description: { en: 'Creating high-quality, engaging content for all platforms', ar: 'إنشاء محتوى عالي الجودة وجذاب لجميع المنصات' },
      duration: { en: 'Ongoing', ar: 'مستمر' },
      deliverables: {
        en: ['Visual assets', 'Video content', 'Copy & captions'],
        ar: ['الأصول المرئية', 'محتوى الفيديو', 'النصوص والتعليقات']
      }
    },
    {
      step: 3,
      icon: <Send className="w-6 h-6" />,
      title: { en: 'Campaign Execution', ar: 'تنفيذ الحملة' },
      description: { en: 'Publishing content and managing all platform activities', ar: 'نشر المحتوى وإدارة جميع أنشطة المنصات' },
      duration: { en: 'Daily', ar: 'يومي' },
      deliverables: {
        en: ['Content publishing', 'Community engagement', 'Real-time monitoring'],
        ar: ['نشر المحتوى', 'إشراك المجتمع', 'المراقبة الفورية']
      }
    },
    {
      step: 4,
      icon: <Activity className="w-6 h-6" />,
      title: { en: 'Analytics & Insights', ar: 'التحليلات والرؤى' },
      description: { en: 'Continuous optimization based on performance data', ar: 'التحسين المستمر بناءً على بيانات الأداء' },
      duration: { en: 'Weekly/Monthly', ar: 'أسبوعي/شهري' },
      deliverables: {
        en: ['Performance reports', 'Growth insights', 'ROI analysis'],
        ar: ['تقارير الأداء', 'رؤى النمو', 'تحليل عائد الاستثمار']
      }
    }
  ];

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={socialMediaHeaderImage}
      />

      {/* Social Media Feed Dashboard */}
      <Section background="white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
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
              
              {/* Live Campaign Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <Heart className="w-6 h-6 text-accent-light" />
                  </div>
                  <div className="text-2xl font-bold text-accent-light">{liveMetrics.likes.toLocaleString()}</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'إعجابات' : 'Total Likes'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent to-accent-dark rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold">{liveMetrics.comments}</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'تعليقات' : 'Comments'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-dark to-accent rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <Share2 className="w-6 h-6 text-accent-light" />
                  </div>
                  <div className="text-2xl font-bold text-accent-light">{liveMetrics.shares}</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'مشاركات' : 'Shares'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent-dark to-primary rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <Eye className="w-6 h-6 text-accent-light" />
                  </div>
                  <div className="text-2xl font-bold text-accent-light">{liveMetrics.reach.toLocaleString()}</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'وصول' : 'Reach'}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  {c.startCampaign}
                </button>
                <button 
                  className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {c.viewPortfolio}
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
              {/* Social Media Feed Mockup */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-accent overflow-hidden">
                {/* Mobile Header */}
                <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-accent-light">{language === 'ar' ? 'إدارة الحملات' : 'Campaign Manager'}</h3>
                        <p className="text-xs opacity-75">{language === 'ar' ? 'مباشر الآن' : 'Live Now'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent-light rounded-full animate-pulse"></div>
                      <span className="text-xs text-accent-light">{language === 'ar' ? 'نشط' : 'Active'}</span>
                    </div>
                  </div>
                </div>

                {/* Platform Tabs */}
                <div className="bg-gray-50 px-4 py-2">
                  <div className="flex gap-2 overflow-x-auto">
                    {socialPlatforms.map((platform) => (
                      <button
                        key={platform.id}
                        onClick={() => setActivePlatform(platform.id)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                          activePlatform === platform.id
                            ? `bg-gradient-to-r ${platform.color} text-white shadow-md`
                            : 'bg-white text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {platform.icon}
                        <span className="text-sm font-medium">{platform.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Posts Feed */}
                <div className="max-h-96 overflow-y-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePlatform}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 space-y-4"
                    >
                      {mockPosts.filter(post => post.platform === activePlatform || activePlatform === 'all').map((post, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-lg transition-all duration-300">
                          {/* Post Header */}
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">B</span>
                              </div>
                              <div>
                                <p className="font-medium text-primary text-sm">Business Brains</p>
                                <p className="text-xs text-gray-500">{post.time}</p>
                              </div>
                            </div>
                            <MoreHorizontal className="w-4 h-4 text-gray-400" />
                          </div>

                          {/* Post Content */}
                          <p className="text-gray-800 text-sm mb-3 leading-relaxed">
                            {post.content[language]}
                          </p>

                          {/* Post Image/Video Placeholder */}
                          <div className="bg-gradient-to-br from-primary-light to-accent-light rounded-xl h-32 mb-3 flex items-center justify-center">
                            {post.type === 'video' ? (
                              <div className="text-center text-primary">
                                <PlayCircle className="w-8 h-8 mx-auto mb-1" />
                                <p className="text-xs">{language === 'ar' ? 'فيديو' : 'Video'}</p>
                              </div>
                            ) : post.type === 'article' ? (
                              <div className="text-center text-primary">
                                <Edit3 className="w-8 h-8 mx-auto mb-1" />
                                <p className="text-xs">{language === 'ar' ? 'مقال' : 'Article'}</p>
                              </div>
                            ) : (
                              <div className="text-center text-primary">
                                <Image className="w-8 h-8 mx-auto mb-1" />
                                <p className="text-xs">{language === 'ar' ? 'صورة' : 'Image'}</p>
                              </div>
                            )}
                          </div>

                          {/* Engagement Metrics */}
                          <div className="flex items-center justify-between text-gray-500 text-xs mb-3">
                            <span>{post.metrics.likes} {language === 'ar' ? 'إعجاب' : 'likes'}</span>
                            <span>{post.metrics.comments} {language === 'ar' ? 'تعليق' : 'comments'} • {post.metrics.shares} {language === 'ar' ? 'مشاركة' : 'shares'}</span>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                            <button className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors">
                              <Heart className="w-4 h-4" />
                              <span className="text-xs">{language === 'ar' ? 'إعجاب' : 'Like'}</span>
                            </button>
                            <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                              <MessageCircle className="w-4 h-4" />
                              <span className="text-xs">{language === 'ar' ? 'تعليق' : 'Comment'}</span>
                            </button>
                            <button className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors">
                              <Share2 className="w-4 h-4" />
                              <span className="text-xs">{language === 'ar' ? 'مشاركة' : 'Share'}</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Floating Social Elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-6 top-16 bg-accent text-white p-3 rounded-2xl shadow-xl"
              >
                <Heart className="w-6 h-6" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -left-6 bottom-16 bg-primary text-accent-light p-3 rounded-2xl shadow-xl"
              >
                <Share2 className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Platform Management */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.platformsTitle}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {socialPlatforms.map((platform, index) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${platform.color} rounded-2xl p-4 inline-block mb-4 text-white`}>
                  {platform.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{platform.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{language === 'ar' ? 'المستخدمين:' : 'Users:'}</span>
                    <span className="font-bold text-primary">{platform.users}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{language === 'ar' ? 'التفاعل:' : 'Engagement:'}</span>
                    <span className="font-bold text-accent">{platform.engagement}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{language === 'ar' ? 'الأفضل لـ:' : 'Best for:'}</span>
                    <p className="font-medium text-primary">{platform.bestFor[language]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Campaign Services */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {language === 'ar' ? 'خدمات الحملات المتخصصة' : 'Specialized Campaign Services'}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {campaignServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-accent"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-accent-light rounded-2xl p-3 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">{service.title[language]}</h3>
                    <p className="text-gray-600 mb-4">{service.description[language]}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-bold text-primary mb-2">{language === 'ar' ? 'الميزات:' : 'Features:'}</h4>
                        <ul className="space-y-1">
                          {service.features[language].map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-bold text-primary mb-2">{language === 'ar' ? 'المقاييس:' : 'Metrics:'}</h4>
                        <div className="space-y-2">
                          {Object.entries(service.metrics).map(([key, value], idx) => (
                            <div key={idx} className="flex justify-between items-center text-sm">
                              <span className="text-gray-600 capitalize">{key}:</span>
                              <span className="font-bold text-accent">{value}</span>
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

      {/* Campaign Process */}
      <Section background="light">
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
            {/* Process Timeline */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {campaignProcess.map((step, index) => (
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
                        {step.deliverables[language].map((deliverable, idx) => (
                          <div key={idx} className="text-xs text-primary bg-primary-light rounded-full px-2 py-1">
                            {deliverable}
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
              <div className="text-6xl mb-6">📱</div>
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
                  {c.viewPortfolio}
                </button>
                <button 
                  className="bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-20 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
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

export default SocialMediaCampaignManagement;