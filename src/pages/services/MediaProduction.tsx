import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { useLanguage } from '../../contexts/LanguageContext';
import mediaHeaderImage from '../../assets/images/15.png';
import {
  Camera,
  Video,
  Edit3,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Download,
  Share2,
  Heart,
  Eye,
  MessageCircle,
  Star,
  Award,
  Zap,
  Lightbulb,
  Layers,
  Filter,
  Aperture,
  Film,
  Mic,
  Music,
  Image,
  FileText,
  Palette,
  Scissors,
  Monitor,
  Smartphone,
  Tablet,
  Globe,
  Calendar,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  PauseCircle,
  SkipForward,
  RotateCcw,
  Settings,
  Sliders,
  Type,
  Bold,
  Italic,
  AlignLeft,
  Code,
  Bookmark
} from 'lucide-react';

const MediaProduction: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('content');
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  // Auto-advance portfolio
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedPortfolioItem(prev => (prev + 1) % portfolioItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      title: "Media Production",
      subtitle: "Professional media production services - content creation, photography, videography, and post-production for Syrian businesses and global brands",
      
      // Services
      contentTitle: "Content Creation",
      photoTitle: "Photography",
      videoTitle: "Videography",
      
      // Overview
      overview: "Creative Media Studio",
      overviewDesc: "Our creative studio specializes in producing high-quality content, stunning photography, and compelling video content that tells your brand story. From concept to final delivery, we handle every aspect of media production.",
      
      // Production Process
      processTitle: "Our Production Process",
      
      // Portfolio
      portfolioTitle: "Our Portfolio",
      
      // Equipment
      equipmentTitle: "Professional Equipment",
      
      // CTA
      ctaTitle: "Ready to Create Amazing Content?",
      ctaDesc: "Let our creative team bring your vision to life with professional media production services tailored to your brand.",
      
      // Buttons
      startProject: "Start Project",
      viewPortfolio: "View Full Portfolio",
      bookShoot: "Book Photo Shoot",
      getQuote: "Get Production Quote"
    },
    ar: {
      title: "إنتاج الوسائط",
      subtitle: "خدمات إنتاج الوسائط المهنية - إنشاء المحتوى والتصوير والفيديوغرافيا وما بعد الإنتاج للشركات السورية والعلامات التجارية العالمية",
      
      // Services
      contentTitle: "إنشاء المحتوى",
      photoTitle: "التصوير الفوتوغرافي",
      videoTitle: "التصوير المرئي",
      
      // Overview
      overview: "استوديو الإبداع",
      overviewDesc: "يتخصص استوديونا الإبداعي في إنتاج محتوى عالي الجودة وتصوير مذهل ومحتوى فيديو مقنع يحكي قصة علامتك التجارية. من المفهوم إلى التسليم النهائي، نتعامل مع كل جانب من جوانب إنتاج الوسائط.",
      
      // Production Process
      processTitle: "عملية الإنتاج لدينا",
      
      // Portfolio
      portfolioTitle: "معرض أعمالنا",
      
      // Equipment
      equipmentTitle: "المعدات المهنية",
      
      // CTA
      ctaTitle: "مستعد لإنشاء محتوى مذهل؟",
      ctaDesc: "دع فريقنا الإبداعي يحقق رؤيتك مع خدمات إنتاج الوسائط المهنية المصممة خصيصاً لعلامتك التجارية.",
      
      // Buttons
      startProject: "ابدأ المشروع",
      viewPortfolio: "عرض المحفظة الكاملة",
      bookShoot: "احجز جلسة تصوير",
      getQuote: "احصل على عرض إنتاج"
    }
  };

  const mediaServices = [
    {
      id: 'content',
      title: { en: 'Content Creation', ar: 'إنشاء المحتوى' },
      icon: <Edit3 className="w-8 h-8" />,
      color: 'from-primary to-primary-dark',
      description: { 
        en: 'Professional content writing, copywriting, and content strategy for all platforms',
        ar: 'كتابة المحتوى المهني والنصوص الإعلانية واستراتيجية المحتوى لجميع المنصات'
      },
      services: {
        en: ['Blog Writing', 'Social Media Content', 'Website Copy', 'Ad Campaigns', 'SEO Content', 'Email Marketing'],
        ar: ['كتابة المدونات', 'محتوى وسائل التواصل', 'نصوص المواقع', 'الحملات الإعلانية', 'محتوى SEO', 'التسويق الإلكتروني']
      },
      metrics: { projects: '500+', words: '2M+', clients: '150+' }
    },
    {
      id: 'photo',
      title: { en: 'Photography', ar: 'التصوير الفوتوغرافي' },
      icon: <Camera className="w-8 h-8" />,
      color: 'from-accent to-accent-dark',
      description: { 
        en: 'Professional photography services for business, products, events, and branding',
        ar: 'خدمات التصوير المهني للأعمال والمنتجات والفعاليات والعلامات التجارية'
      },
      services: {
        en: ['Product Photography', 'Corporate Portraits', 'Event Coverage', 'Brand Photography', 'Real Estate', 'Fashion Shoots'],
        ar: ['تصوير المنتجات', 'الصور الشخصية للشركات', 'تغطية الفعاليات', 'تصوير العلامة التجارية', 'العقارات', 'جلسات الأزياء']
      },
      metrics: { shoots: '1000+', photos: '50K+', rating: '4.9/5' }
    },
    {
      id: 'video',
      title: { en: 'Videography', ar: 'التصوير المرئي' },
      icon: <Video className="w-8 h-8" />,
      color: 'from-primary-dark to-accent',
      description: { 
        en: 'Complete video production from concept to final cut, including motion graphics and animation',
        ar: 'إنتاج فيديو كامل من المفهوم إلى القطع النهائي، بما في ذلك الرسوم المتحركة والأنيميشن'
      },
      services: {
        en: ['Corporate Videos', 'Promotional Content', 'Training Videos', 'Event Filming', 'Animation', 'Live Streaming'],
        ar: ['فيديوهات الشركات', 'المحتوى الترويجي', 'فيديوهات التدريب', 'تصوير الفعاليات', 'الرسوم المتحركة', 'البث المباشر']
      },
      metrics: { videos: '300+', hours: '1500+', views: '5M+' }
    }
  ];

  // Artificial portfolio images using gradients and patterns
  const portfolioItems = [
    {
      id: 1,
      type: 'video',
      title: { en: 'Syrian Tech Startup Launch', ar: 'إطلاق شركة تقنية سورية ناشئة' },
      category: { en: 'Corporate Video', ar: 'فيديو شركات' },
      image: (
        <div className="w-full h-full bg-gradient-to-br from-primary via-accent to-primary-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full opacity-30"></div>
            <div className="absolute bottom-4 right-4 w-24 h-24 bg-accent-light rounded-full opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <PlayCircle className="w-16 h-16 text-white opacity-80" />
            </div>
          </div>
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">2:34</div>
        </div>
      ),
      views: '15.2K',
      duration: '2:34',
      client: 'TechFlow Syria'
    },
    {
      id: 2,
      type: 'photo',
      title: { en: 'Product Photography Series', ar: 'سلسلة تصوير المنتجات' },
      category: { en: 'Product Photography', ar: 'تصوير المنتجات' },
      image: (
        <div className="w-full h-full bg-gradient-to-br from-accent via-primary-dark to-accent-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-lg rotate-12"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 bg-accent-light rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Camera className="w-12 h-12 text-white opacity-90" />
            </div>
          </div>
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">24 shots</div>
        </div>
      ),
      shots: '24',
      client: 'Damascus Crafts'
    },
    {
      id: 3,
      type: 'content',
      title: { en: 'Digital Marketing Campaign', ar: 'حملة التسويق الرقمي' },
      category: { en: 'Content Strategy', ar: 'استراتيجية المحتوى' },
      image: (
        <div className="w-full h-full bg-gradient-to-br from-primary-dark via-accent to-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-3 left-3 w-6 h-6 bg-white rounded"></div>
            <div className="absolute top-8 left-3 w-12 h-1 bg-white rounded"></div>
            <div className="absolute top-12 left-3 w-8 h-1 bg-accent-light rounded"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Edit3 className="w-12 h-12 text-white opacity-90" />
            </div>
          </div>
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">12 articles</div>
        </div>
      ),
      articles: '12',
      engagement: '+340%',
      client: 'Aleppo Industries'
    },
    {
      id: 4,
      type: 'video',
      title: { en: 'Cultural Heritage Documentary', ar: 'وثائقي التراث الثقافي' },
      category: { en: 'Documentary', ar: 'وثائقي' },
      image: (
        <div className="w-full h-full bg-gradient-to-br from-accent-dark via-primary to-accent relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-2 left-2 w-20 h-1 bg-white rounded"></div>
            <div className="absolute top-5 left-2 w-16 h-1 bg-accent-light rounded"></div>
            <div className="absolute bottom-2 left-2 w-12 h-1 bg-white rounded"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Film className="w-16 h-16 text-white opacity-80" />
            </div>
          </div>
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">12:45</div>
        </div>
      ),
      views: '28.5K',
      duration: '12:45',
      client: 'Syrian Heritage Foundation'
    },
    {
      id: 5,
      type: 'photo',
      title: { en: 'Corporate Event Coverage', ar: 'تغطية فعالية شركات' },
      category: { en: 'Event Photography', ar: 'تصوير الفعاليات' },
      image: (
        <div className="w-full h-full bg-gradient-to-br from-primary via-accent-dark to-primary-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full"></div>
            <div className="absolute top-4 right-4 w-6 h-6 bg-accent-light rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-10 h-10 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Users className="w-12 h-12 text-white opacity-90" />
            </div>
          </div>
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">180 shots</div>
        </div>
      ),
      shots: '180',
      client: 'Syria Business Summit'
    },
    {
      id: 6,
      type: 'content',
      title: { en: 'E-commerce Content Suite', ar: 'مجموعة محتوى التجارة الإلكترونية' },
      category: { en: 'E-commerce', ar: 'التجارة الإلكترونية' },
      image: (
        <div className="w-full h-full bg-gradient-to-br from-accent via-primary to-accent-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-3 right-3 w-4 h-4 bg-white rounded"></div>
            <div className="absolute top-8 right-3 w-3 h-3 bg-accent-light rounded-full"></div>
            <div className="absolute bottom-6 left-3 w-6 h-6 bg-white rounded-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Globe className="w-12 h-12 text-white opacity-90" />
            </div>
          </div>
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">50+ products</div>
        </div>
      ),
      products: '50+',
      conversion: '+125%',
      client: 'Syria Online Market'
    }
  ];

  const productionProcess = [
    {
      step: 1,
      icon: <Lightbulb className="w-6 h-6" />,
      title: { en: 'Concept & Planning', ar: 'المفهوم والتخطيط' },
      description: { en: 'Understanding your vision and developing creative concepts', ar: 'فهم رؤيتك وتطوير المفاهيم الإبداعية' },
      duration: { en: '1-3 days', ar: '1-3 أيام' },
      deliverables: {
        en: ['Creative brief', 'Storyboard', 'Production timeline'],
        ar: ['الملخص الإبداعي', 'لوحة القصة', 'الجدول الزمني للإنتاج']
      }
    },
    {
      step: 2,
      icon: <Settings className="w-6 h-6" />,
      title: { en: 'Pre-Production', ar: 'ما قبل الإنتاج' },
      description: { en: 'Detailed planning, casting, location scouting, and equipment preparation', ar: 'التخطيط التفصيلي واختيار الممثلين واستكشاف المواقع وإعداد المعدات' },
      duration: { en: '2-5 days', ar: '2-5 أيام' },
      deliverables: {
        en: ['Shot list', 'Equipment checklist', 'Team coordination'],
        ar: ['قائمة اللقطات', 'قائمة المعدات', 'تنسيق الفريق']
      }
    },
    {
      step: 3,
      icon: <Camera className="w-6 h-6" />,
      title: { en: 'Production', ar: 'الإنتاج' },
      description: { en: 'Professional filming, photography, or content creation execution', ar: 'التنفيذ المهني للتصوير أو التصوير الفوتوغرافي أو إنشاء المحتوى' },
      duration: { en: '1-3 days', ar: '1-3 أيام' },
      deliverables: {
        en: ['Raw footage', 'High-res photos', 'Draft content'],
        ar: ['اللقطات الخام', 'الصور عالية الدقة', 'مسودة المحتوى']
      }
    },
    {
      step: 4,
      icon: <Scissors className="w-6 h-6" />,
      title: { en: 'Post-Production', ar: 'ما بعد الإنتاج' },
      description: { en: 'Professional editing, color correction, sound design, and final touches', ar: 'التحرير المهني وتصحيح الألوان وتصميم الصوت واللمسات الأخيرة' },
      duration: { en: '3-7 days', ar: '3-7 أيام' },
      deliverables: {
        en: ['Final deliverables', 'Multiple formats', 'Distribution ready'],
        ar: ['التسليمات النهائية', 'تنسيقات متعددة', 'جاهز للتوزيع']
      }
    }
  ];

  const professionalEquipment = [
    {
      category: { en: 'Cameras', ar: 'الكاميرات' },
      icon: <Camera className="w-8 h-8" />,
      items: {
        en: ['Sony FX6 Cinema Camera', 'Canon EOS R5', 'DJI Ronin Gimbal', 'Professional Lenses'],
        ar: ['كاميرا سوني FX6 السينمائية', 'كانون EOS R5', 'مثبت DJI Ronin', 'عدسات مهنية']
      },
      color: 'from-primary to-primary-dark'
    },
    {
      category: { en: 'Audio', ar: 'الصوت' },
      icon: <Mic className="w-8 h-8" />,
      items: {
        en: ['Wireless Mic Systems', 'Audio Mixers', 'Studio Monitors', 'Sound Isolation'],
        ar: ['أنظمة الميكروفون اللاسلكي', 'خلاطات الصوت', 'مراقبات الاستوديو', 'عزل الصوت']
      },
      color: 'from-accent to-accent-dark'
    },
    {
      category: { en: 'Lighting', ar: 'الإضاءة' },
      icon: <Zap className="w-8 h-8" />,
      items: {
        en: ['LED Light Panels', 'Softboxes', 'Color Gels', 'Light Stands'],
        ar: ['ألواح LED', 'صناديق الإضاءة الناعمة', 'مرشحات الألوان', 'حوامل الإضاءة']
      },
      color: 'from-primary-dark to-accent'
    },
    {
      category: { en: 'Post-Production', ar: 'ما بعد الإنتاج' },
      icon: <Monitor className="w-8 h-8" />,
      items: {
        en: ['4K Editing Suites', 'Color Grading', 'Motion Graphics', 'Audio Mastering'],
        ar: ['أجنحة التحرير 4K', 'تدرج الألوان', 'الرسوم المتحركة', 'إتقان الصوت']
      },
      color: 'from-accent-dark to-primary'
    }
  ];

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={mediaHeaderImage}
      />

      {/* Creative Studio Overview */}
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
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">500+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'مشاريع' : 'Projects'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent to-accent-dark rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'صور' : 'Photos'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-dark to-accent rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">5M+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'مشاهدات' : 'Views'}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <PlayCircle className="w-5 h-5" />
                  {c.startProject}
                </button>
                <button 
                  className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5" />
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
              {/* Creative Studio Workspace Mockup */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-accent overflow-hidden">
                {/* Studio Header */}
                <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center">
                        <Film className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-accent-light">{language === 'ar' ? 'استوديو الإبداع' : 'Creative Studio'}</h3>
                        <p className="text-xs opacity-75">{language === 'ar' ? 'في الإنتاج' : 'In Production'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent-light rounded-full animate-pulse"></div>
                      <span className="text-xs text-accent-light">{language === 'ar' ? 'نشط' : 'Live'}</span>
                    </div>
                  </div>
                </div>

                {/* Service Tabs */}
                <div className="bg-gray-50 px-4 py-2">
                  <div className="flex gap-2">
                    {mediaServices.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setActiveTab(service.id)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                          activeTab === service.id
                            ? `bg-gradient-to-r ${service.color} text-white shadow-md`
                            : 'bg-white text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {service.icon}
                        <span className="text-sm font-medium">{service.title[language]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {mediaServices.map((service) => (
                        activeTab === service.id && (
                          <div key={service.id}>
                            <h4 className="text-lg font-bold text-primary mb-3">{service.title[language]}</h4>
                            <p className="text-gray-600 mb-4">{service.description[language]}</p>
                            
                            {/* Service Grid */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                              {service.services[language].map((item, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-lg p-3 text-center">
                                  <div className="text-sm font-medium text-primary">{item}</div>
                                </div>
                              ))}
                            </div>

                            {/* Metrics */}
                            <div className="flex justify-between text-sm text-gray-600 pt-4 border-t border-gray-100">
                              {Object.entries(service.metrics).map(([key, value], idx) => (
                                <div key={idx} className="text-center">
                                  <div className="font-bold text-accent">{value}</div>
                                  <div className="text-xs capitalize">{key}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Floating Creative Elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-6 top-16 bg-accent text-white p-3 rounded-2xl shadow-xl"
              >
                <Camera className="w-6 h-6" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -left-6 bottom-16 bg-primary text-accent-light p-3 rounded-2xl shadow-xl"
              >
                <Video className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Portfolio Showcase with Artificial Images */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.portfolioTitle}
          </motion.h2>

          {/* Featured Portfolio Item */}
          <div className="mb-12">
            <motion.div
              key={selectedPortfolioItem}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                {/* Portfolio Preview with Artificial Image */}
                <div className="relative h-64 lg:h-full">
                  {portfolioItems[selectedPortfolioItem].image}
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white bg-opacity-90 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {portfolioItems[selectedPortfolioItem].category[language]}
                    </span>
                  </div>
                </div>

                {/* Portfolio Details */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {portfolioItems[selectedPortfolioItem].title[language]}
                    </h3>
                    <p className="text-accent font-medium">
                      {portfolioItems[selectedPortfolioItem].client}
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-accent-light rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium text-primary">{language === 'ar' ? 'تسليم في الموعد' : 'On-Time Delivery'}</p>
                        <p className="text-sm text-gray-600">{language === 'ar' ? 'تم التسليم حسب الجدولة' : 'Delivered as scheduled'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent text-white rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium text-primary">{language === 'ar' ? 'نتائج ممتازة' : 'Excellent Results'}</p>
                        <p className="text-sm text-gray-600">
                          {portfolioItems[selectedPortfolioItem].views && `${portfolioItems[selectedPortfolioItem].views} views`}
                          {portfolioItems[selectedPortfolioItem].engagement && portfolioItems[selectedPortfolioItem].engagement}
                          {portfolioItems[selectedPortfolioItem].conversion && portfolioItems[selectedPortfolioItem].conversion}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-dark text-accent-light rounded-lg flex items-center justify-center">
                        <Star className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium text-primary">{language === 'ar' ? 'رضا العميل' : 'Client Satisfaction'}</p>
                        <p className="text-sm text-gray-600">5/5 {language === 'ar' ? 'نجوم' : 'stars'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-4 rounded-lg transition-all duration-300">
                      {language === 'ar' ? 'عرض المشروع' : 'View Project'}
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-primary p-3 rounded-lg transition-all duration-300">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-primary p-3 rounded-lg transition-all duration-300">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {portfolioItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedPortfolioItem(index)}
                className={`relative group rounded-xl overflow-hidden transition-all duration-300 h-24 ${
                  selectedPortfolioItem === index
                    ? 'ring-4 ring-accent shadow-xl scale-105'
                    : 'hover:shadow-lg hover:scale-102'
                }`}
              >
                {item.image}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </motion.button>
            ))}
          </div>
        </div>
      </Section>

      {/* Production Process */}
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
            {/* Process Timeline */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {productionProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step Circle */}
                  <div className="bg-white border-4 border-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                    <span className="text-accent font-bold text-xl">{step.step}</span>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="text-primary mb-3 flex justify-center">
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-2">{step.title[language]}</h3>
                      <p className="text-gray-600 text-sm mb-3">{step.description[language]}</p>
                      <div className="bg-primary text-accent-light rounded-full px-3 py-1 text-xs font-medium inline-block mb-4">
                        {step.duration[language]}
                      </div>
                      
                      <div className="space-y-2">
                        {step.deliverables[language].map((deliverable, idx) => (
                          <div key={idx} className="text-xs text-accent bg-accent-light rounded-full px-3 py-1">
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

      {/* Professional Equipment */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.equipmentTitle}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionalEquipment.map((equipment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${equipment.color} rounded-2xl p-4 inline-block mb-4 text-white`}>
                  {equipment.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-4">{equipment.category[language]}</h3>
                <ul className="space-y-2">
                  {equipment.items[language].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
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
              <div className="text-6xl mb-6">🎬</div>
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
                  <Camera className="w-5 h-5" />
                  {c.bookShoot}
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

export default MediaProduction;