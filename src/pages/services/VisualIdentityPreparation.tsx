import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { useLanguage } from '../../contexts/LanguageContext';
import visualHeaderImage from '../../assets/images/2.png';
import {
  Package,
  Palette,
  FileText,
  CreditCard,
  Smartphone,
  Monitor,
  Printer,
  Globe,
  Download,
  Eye,
  Star,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Layers,
  Grid,
  Target,
  Zap,
  Award,
  Users,
  Building,
  Coffee,
  Briefcase,
  ShoppingBag,
  Truck,
  Camera,
  Edit3,
  Sparkles,
  Crown,
  Shield,
  Gem,
  Heart,
  Share2,
  Copy,
  Check,
  RefreshCw,
  Settings,
  Sliders,
  Layout,
  Type,
  Image,
  Video,
  Mic,
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  Search,
  Filter,
  Tag,
  Bookmark,
  Folder,
  FolderOpen,
  Archive,
  Upload
} from 'lucide-react';

const VisualIdentityPreparation: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activePackage, setActivePackage] = useState(0);
  const [selectedAsset, setSelectedAsset] = useState('business-card');
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewMode, setPreviewMode] = useState('light');
  const [brandKitProgress, setBrandKitProgress] = useState(0);

  // Animate brand kit progress
  useEffect(() => {
    const timer = setTimeout(() => setBrandKitProgress(85), 1000);
    return () => clearTimeout(timer);
  }, []);

  const content = {
    en: {
      title: "Visual Identity Preparation",
      subtitle: "Complete brand kit development services - creating comprehensive visual identity systems with brand guidelines, corporate assets, and digital resources for Syrian businesses",
      
      // Overview
      overview: "Brand Kit Builder",
      overviewDesc: "Our comprehensive visual identity preparation service transforms your brand vision into a complete, professional brand kit. From detailed brand guidelines to every marketing asset you need, we ensure consistency across all touchpoints.",
      
      // Services
      servicesTitle: "Identity Services",
      
      // Brand Kit
      brandKitTitle: "Complete Brand Kit",
      
      // Asset Generator
      assetsTitle: "Visual Assets",
      
      // Guidelines
      guidelinesTitle: "Brand Guidelines",
      
      // CTA
      ctaTitle: "Ready to Build Your Complete Brand Kit?",
      ctaDesc: "Get a professional visual identity system that includes everything you need to launch and scale your brand with confidence.",
      
      // Buttons
      buildBrandKit: "Build Brand Kit",
      viewGuidelines: "View Guidelines",
      downloadAssets: "Download Assets",
      getStarted: "Get Started"
    },
    ar: {
      title: "تحضير الهوية البصرية",
      subtitle: "خدمات تطوير مجموعة العلامة التجارية الكاملة - إنشاء أنظمة هوية بصرية شاملة مع إرشادات العلامة التجارية والأصول المؤسسية والموارد الرقمية للشركات في سوريا",
      
      // Overview
      overview: "منشئ مجموعة العلامة التجارية",
      overviewDesc: "تحول خدمة تحضير الهوية البصرية الشاملة لدينا رؤية علامتك التجارية إلى مجموعة علامة تجارية كاملة ومهنية. من إرشادات العلامة التجارية التفصيلية إلى كل أصل تسويقي تحتاجه، نضمن الاتساق عبر جميع نقاط الاتصال.",
      
      // Services
      servicesTitle: "خدمات الهوية",
      
      // Brand Kit
      brandKitTitle: "مجموعة العلامة التجارية الكاملة",
      
      // Asset Generator
      assetsTitle: "الأصول البصرية",
      
      // Guidelines
      guidelinesTitle: "إرشادات العلامة التجارية",
      
      // CTA
      ctaTitle: "مستعد لبناء مجموعة علامتك التجارية الكاملة؟",
      ctaDesc: "احصل على نظام هوية بصرية مهني يتضمن كل ما تحتاجه لإطلاق وتوسيع علامتك التجارية بثقة.",
      
      // Buttons
      buildBrandKit: "ابني مجموعة العلامة التجارية",
      viewGuidelines: "عرض الإرشادات",
      downloadAssets: "تحميل الأصول",
      getStarted: "ابدأ الآن"
    }
  };

  const identityServices = [
    {
      id: 'guidelines',
      title: { en: 'Brand Guidelines', ar: 'إرشادات العلامة التجارية' },
      icon: <FileText className="w-8 h-8" />,
      color: 'from-primary to-primary-dark',
      description: { 
        en: 'Comprehensive brand style guide with logo usage, colors, typography, and voice guidelines',
        ar: 'دليل أسلوب العلامة التجارية الشامل مع استخدام الشعار والألوان والطباعة وإرشادات الصوت'
      }
    },
    {
      id: 'assets',
      title: { en: 'Corporate Assets', ar: 'الأصول المؤسسية' },
      icon: <Briefcase className="w-8 h-8" />,
      color: 'from-accent to-accent-dark',
      description: { 
        en: 'Business cards, letterheads, presentations, and all corporate stationery materials',
        ar: 'بطاقات العمل والرؤوس والعروض التقديمية وجميع مواد القرطاسية المؤسسية'
      }
    },
    {
      id: 'digital',
      title: { en: 'Digital Resources', ar: 'الموارد الرقمية' },
      icon: <Monitor className="w-8 h-8" />,
      color: 'from-primary-dark to-accent',
      description: { 
        en: 'Social media templates, email signatures, website graphics, and digital marketing assets',
        ar: 'قوالب وسائل التواصل الاجتماعي وتوقيعات البريد الإلكتروني ورسومات الموقع وأصول التسويق الرقمي'
      }
    }
  ];

  // Brand kit packages
  const brandKitPackages = [
    {
      id: 1,
      name: { en: 'Startup Kit', ar: 'مجموعة الشركات الناشئة' },
      description: { en: 'Essential brand identity for new businesses', ar: 'هوية العلامة التجارية الأساسية للشركات الجديدة' },
      price: '$299',
      timeline: { en: '5-7 days', ar: '5-7 أيام' },
      includes: {
        en: ['Logo design + 3 variations', 'Basic brand guidelines (10 pages)', 'Business card design', 'Letterhead template', 'Social media profile graphics', 'Basic color palette'],
        ar: ['تصميم الشعار + 3 تنويعات', 'إرشادات العلامة التجارية الأساسية (10 صفحات)', 'تصميم بطاقة العمل', 'قالب الرأسية', 'رسومات ملف وسائل التواصل', 'لوحة الألوان الأساسية']
      },
      popular: false,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      name: { en: 'Professional Kit', ar: 'المجموعة المهنية' },
      description: { en: 'Comprehensive brand identity for established businesses', ar: 'هوية العلامة التجارية الشاملة للشركات الراسخة' },
      price: '$599',
      timeline: { en: '7-10 days', ar: '7-10 أيام' },
      includes: {
        en: ['Logo design + 5 variations', 'Complete brand guidelines (25 pages)', 'Full stationery set', 'Presentation templates', 'Social media kit (10 templates)', 'Email signature design', 'Brand photography guidelines'],
        ar: ['تصميم الشعار + 5 تنويعات', 'إرشادات العلامة التجارية الكاملة (25 صفحة)', 'مجموعة القرطاسية الكاملة', 'قوالب العروض التقديمية', 'مجموعة وسائل التواصل (10 قوالب)', 'تصميم توقيع البريد الإلكتروني', 'إرشادات التصوير للعلامة التجارية']
      },
      popular: true,
      gradient: 'from-primary to-accent'
    },
    {
      id: 3,
      name: { en: 'Enterprise Kit', ar: 'مجموعة المؤسسات' },
      description: { en: 'Premium brand identity for large organizations', ar: 'هوية العلامة التجارية المميزة للمنظمات الكبيرة' },
      price: '$999',
      timeline: { en: '10-14 days', ar: '10-14 أيام' },
      includes: {
        en: ['Logo design + unlimited variations', 'Premium brand guidelines (40+ pages)', 'Complete corporate identity', 'Custom templates library', 'Brand application examples', 'Video brand guidelines', 'Brand implementation support', '3 months revision support'],
        ar: ['تصميم الشعار + تنويعات غير محدودة', 'إرشادات العلامة التجارية المميزة (40+ صفحة)', 'الهوية المؤسسية الكاملة', 'مكتبة القوالب المخصصة', 'أمثلة تطبيق العلامة التجارية', 'إرشادات العلامة التجارية بالفيديو', 'دعم تنفيذ العلامة التجارية', 'دعم المراجعة لمدة 3 أشهر']
      },
      popular: false,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  // Visual assets with artificial designs
  const visualAssets = [
    {
      id: 'business-card',
      name: { en: 'Business Card', ar: 'بطاقة العمل' },
      category: 'Print',
      dimensions: '3.5" × 2"',
      preview: (
        <div className="w-full h-32 bg-gradient-to-br from-primary to-accent rounded-lg p-4 text-white relative overflow-hidden">
          <div className="absolute top-2 left-2 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <Building className="w-4 h-4" />
          </div>
          <div className="absolute bottom-2 left-2">
            <div className="text-xs font-bold">Ahmad Khalil</div>
            <div className="text-xs opacity-75">CEO & Founder</div>
          </div>
          <div className="absolute bottom-2 right-2 text-xs opacity-75">
            +963 11 123 4567
          </div>
          <div className="absolute top-2 right-2 w-6 h-1 bg-accent-light rounded"></div>
          <div className="absolute top-4 right-2 w-4 h-1 bg-white bg-opacity-50 rounded"></div>
        </div>
      )
    },
    {
      id: 'letterhead',
      name: { en: 'Letterhead', ar: 'الرأسية' },
      category: 'Print',
      dimensions: 'A4',
      preview: (
        <div className="w-full h-32 bg-white border-2 border-gray-200 rounded-lg p-3 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded"></div>
            <div className="text-xs font-bold text-primary">Syrian Business Co.</div>
          </div>
          <div className="space-y-1">
            <div className="w-full h-1 bg-gray-200 rounded"></div>
            <div className="w-4/5 h-1 bg-gray-200 rounded"></div>
            <div className="w-3/5 h-1 bg-gray-200 rounded"></div>
          </div>
          <div className="absolute bottom-2 left-3 right-3 border-t border-accent pt-1">
            <div className="text-xs text-gray-500">Damascus, Syria | info@business.sy</div>
          </div>
        </div>
      )
    },
    {
      id: 'social-media',
      name: { en: 'Social Media Kit', ar: 'مجموعة وسائل التواصل' },
      category: 'Digital',
      dimensions: 'Various',
      preview: (
        <div className="w-full h-32 bg-gradient-to-br from-accent to-primary-dark rounded-lg p-3 relative overflow-hidden">
          <div className="grid grid-cols-2 gap-2 h-full">
            <div className="bg-white bg-opacity-20 rounded p-2">
              <div className="w-4 h-4 bg-white rounded-full mb-1"></div>
              <div className="text-xs text-white">Facebook Cover</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded p-2">
              <div className="w-4 h-4 bg-accent-light rounded mb-1"></div>
              <div className="text-xs text-white">Instagram Post</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded p-2">
              <div className="w-4 h-4 bg-primary rounded-full mb-1"></div>
              <div className="text-xs text-white">LinkedIn Banner</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded p-2">
              <div className="w-4 h-4 bg-accent rounded mb-1"></div>
              <div className="text-xs text-white">Twitter Header</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'presentation',
      name: { en: 'Presentation Template', ar: 'قالب العرض التقديمي' },
      category: 'Digital',
      dimensions: '16:9',
      preview: (
        <div className="w-full h-32 bg-white border border-gray-200 rounded-lg p-3 relative overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-accent h-4 rounded mb-2"></div>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className="bg-gray-100 h-4 rounded"></div>
            <div className="bg-gray-100 h-4 rounded"></div>
            <div className="bg-gray-100 h-4 rounded"></div>
          </div>
          <div className="space-y-1">
            <div className="w-full h-2 bg-gray-100 rounded"></div>
            <div className="w-3/4 h-2 bg-gray-100 rounded"></div>
          </div>
          <div className="absolute bottom-2 right-2 w-8 h-4 bg-accent rounded-sm"></div>
        </div>
      )
    },
    {
      id: 'email-signature',
      name: { en: 'Email Signature', ar: 'توقيع البريد الإلكتروني' },
      category: 'Digital',
      dimensions: 'Responsive',
      preview: (
        <div className="w-full h-32 bg-gray-50 border border-gray-200 rounded-lg p-3 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full"></div>
            <div>
              <div className="text-xs font-bold text-primary">Ahmad Khalil</div>
              <div className="text-xs text-gray-600">CEO & Founder</div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-2">
            <div className="text-xs text-gray-500">Syrian Business Co.</div>
            <div className="text-xs text-accent">+963 11 123 4567</div>
          </div>
          <div className="absolute bottom-2 right-2 flex gap-1">
            <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
            <div className="w-3 h-3 bg-accent rounded-sm"></div>
          </div>
        </div>
      )
    },
    {
      id: 'brochure',
      name: { en: 'Marketing Brochure', ar: 'كتيب التسويق' },
      category: 'Print',
      dimensions: 'Tri-fold',
      preview: (
        <div className="w-full h-32 bg-gradient-to-br from-primary-dark to-accent-dark rounded-lg p-3 text-white relative overflow-hidden">
          <div className="grid grid-cols-3 gap-1 h-full">
            <div className="bg-white bg-opacity-20 rounded p-2">
              <div className="w-full h-3 bg-white bg-opacity-40 rounded mb-1"></div>
              <div className="text-xs">Front Panel</div>
            </div>
            <div className="bg-white bg-opacity-30 rounded p-2">
              <div className="w-full h-3 bg-accent-light bg-opacity-60 rounded mb-1"></div>
              <div className="text-xs">Inside Left</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded p-2">
              <div className="w-full h-3 bg-white bg-opacity-40 rounded mb-1"></div>
              <div className="text-xs">Back Panel</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const brandGuidelines = [
    {
      section: { en: 'Logo Usage', ar: 'استخدام الشعار' },
      items: [
        { en: 'Logo variations and spacing', ar: 'تنويعات الشعار والتباعد' },
        { en: 'Minimum size requirements', ar: 'متطلبات الحد الأدنى للحجم' },
        { en: 'Do\'s and Don\'ts', ar: 'ما يجب فعله وما لا يجب فعله' }
      ]
    },
    {
      section: { en: 'Color Palette', ar: 'لوحة الألوان' },
      items: [
        { en: 'Primary and secondary colors', ar: 'الألوان الأساسية والثانوية' },
        { en: 'Color codes (HEX, RGB, CMYK)', ar: 'رموز الألوان (HEX, RGB, CMYK)' },
        { en: 'Color combinations', ar: 'مجموعات الألوان' }
      ]
    },
    {
      section: { en: 'Typography', ar: 'الطباعة' },
      items: [
        { en: 'Primary and secondary fonts', ar: 'الخطوط الأساسية والثانوية' },
        { en: 'Font hierarchy and sizes', ar: 'تسلسل الخطوط والأحجام' },
        { en: 'Text formatting guidelines', ar: 'إرشادات تنسيق النص' }
      ]
    },
    {
      section: { en: 'Applications', ar: 'التطبيقات' },
      items: [
        { en: 'Business stationery examples', ar: 'أمثلة القرطاسية التجارية' },
        { en: 'Digital media applications', ar: 'تطبيقات الوسائط الرقمية' },
        { en: 'Merchandise and signage', ar: 'البضائع واللافتات' }
      ]
    }
  ];

  const generateAsset = (assetId: string) => {
    setIsGenerating(true);
    setSelectedAsset(assetId);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={visualHeaderImage}
      />

      {/* Brand Kit Builder Overview */}
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
              
              {/* Brand Kit Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">150+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'أصول العلامة التجارية' : 'Brand Assets'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent to-accent-dark rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold">48h</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'تسليم سريع' : 'Fast Delivery'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-dark to-accent rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">100%</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'تخصيص كامل' : 'Full Customization'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent-dark to-primary rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">24/7</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'الدعم' : 'Support'}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Package className="w-5 h-5" />
                  {c.buildBrandKit}
                </button>
                <button 
                  className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  {c.viewGuidelines}
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
              {/* Brand Kit Progress Dashboard */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-accent overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center">
                        <Package className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-accent-light">{language === 'ar' ? 'مجموعة العلامة التجارية' : 'Brand Kit Builder'}</h3>
                        <p className="text-xs opacity-75">{language === 'ar' ? 'تقدم الإنشاء' : 'Creation Progress'}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-accent-light">{brandKitProgress}%</div>
                      <div className="text-xs opacity-75">{language === 'ar' ? 'مكتمل' : 'Complete'}</div>
                    </div>
                  </div>
                </div>

                {/* Progress Content */}
                <div className="p-6">
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div 
                        className="bg-gradient-to-r from-primary to-accent h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${brandKitProgress}%` }}
                        transition={{ duration: 2, delay: 0.5 }}
                      ></motion.div>
                    </div>
                  </div>

                  {/* Service Tabs */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {identityServices.map((service, index) => (
                      <div 
                        key={service.id}
                        className={`text-center p-3 rounded-lg transition-all duration-300 ${
                          index === 1 ? `bg-gradient-to-br ${service.color} text-white` : 'bg-gray-50 text-gray-600'
                        }`}
                      >
                        <div className="flex justify-center mb-2">
                          {React.cloneElement(service.icon, { className: "w-6 h-6" })}
                        </div>
                        <div className="text-xs font-medium">{service.title[language]}</div>
                      </div>
                    ))}
                  </div>

                  {/* Current Task */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-sm">{language === 'ar' ? 'المهمة الحالية' : 'Current Task'}</h4>
                        <p className="text-xs text-gray-600">{language === 'ar' ? 'إنشاء أصول الشركة' : 'Creating Corporate Assets'}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-gray-600">{language === 'ar' ? 'الشعار' : 'Logo'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-gray-600">{language === 'ar' ? 'الألوان' : 'Colors'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 border-2 border-accent rounded-full animate-pulse"></div>
                        <span className="text-accent font-medium">{language === 'ar' ? 'بطاقة العمل' : 'Business Card'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 border-2 border-gray-300 rounded-full"></div>
                        <span className="text-gray-400">{language === 'ar' ? 'القرطاسية' : 'Stationery'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-6 top-16 bg-accent text-white p-3 rounded-2xl shadow-xl"
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -left-6 bottom-16 bg-primary text-accent-light p-3 rounded-2xl shadow-xl"
              >
                <Crown className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Brand Kit Packages */}
      <Section background="light">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.brandKitTitle}
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {brandKitPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative ${
                  pkg.popular ? 'ring-4 ring-accent scale-105' : ''
                }`}
                onClick={() => setActivePackage(index)}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    {language === 'ar' ? 'الأكثر شيوعاً' : 'Most Popular'}
                  </div>
                )}

                {/* Package Header */}
                <div className={`h-32 bg-gradient-to-br ${pkg.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white bg-opacity-30 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Package className="w-16 h-16 text-white opacity-60" />
                    </div>
                  </div>
                  <div className="relative z-10 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{pkg.name[language]}</h3>
                    <p className="text-sm opacity-90">{pkg.description[language]}</p>
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                    <div className="text-sm text-gray-600">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {pkg.timeline[language]}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {pkg.includes[language].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                      pkg.popular 
                        ? 'bg-accent hover:bg-accent-dark text-white' 
                        : 'bg-primary hover:bg-primary-dark text-accent-light'
                    }`}
                  >
                    {language === 'ar' ? 'اختر هذه المجموعة' : 'Choose This Kit'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Visual Assets Generator */}
      <Section background="white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.assetsTitle}
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Asset Generator Interface */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              {/* Generator Header */}
              <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent-light rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-accent-light">{language === 'ar' ? 'مولد الأصول' : 'Asset Generator'}</h3>
                    <p className="text-xs opacity-75">{language === 'ar' ? 'إنشاء فوري' : 'Instant Creation'}</p>
                  </div>
                </div>
              </div>

              {/* Asset Preview */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-bold text-primary mb-3">
                    {visualAssets.find(asset => asset.id === selectedAsset)?.name[language]}
                  </h4>
                  <div className="h-32 mb-4">
                    {visualAssets.find(asset => asset.id === selectedAsset)?.preview}
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{language === 'ar' ? 'الفئة:' : 'Category:'} {visualAssets.find(asset => asset.id === selectedAsset)?.category}</span>
                    <span>{language === 'ar' ? 'الأبعاد:' : 'Dimensions:'} {visualAssets.find(asset => asset.id === selectedAsset)?.dimensions}</span>
                  </div>
                </div>

                {/* Generate Button */}
                <button 
                  onClick={() => generateAsset(selectedAsset)}
                  disabled={isGenerating}
                  className="w-full bg-accent hover:bg-accent-dark text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      {language === 'ar' ? 'جاري الإنشاء...' : 'Generating...'}
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      {language === 'ar' ? 'إنشاء الأصل' : 'Generate Asset'}
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Asset Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-primary mb-6">{language === 'ar' ? 'معرض الأصول' : 'Asset Gallery'}</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {visualAssets.map((asset, index) => (
                  <motion.div
                    key={asset.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedAsset === asset.id 
                        ? 'ring-4 ring-accent scale-105' 
                        : 'hover:shadow-lg'
                    }`}
                    onClick={() => setSelectedAsset(asset.id)}
                  >
                    <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
                      <div className="h-24 mb-3">
                        {asset.preview}
                      </div>
                      <h4 className="font-bold text-primary text-sm mb-1">{asset.name[language]}</h4>
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>{asset.category}</span>
                        <span>{asset.dimensions}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Brand Guidelines */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.guidelinesTitle}
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {brandGuidelines.map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">{guideline.section[language]}</h3>
                </div>
                
                <div className="space-y-3">
                  {guideline.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-gray-700">{item[language]}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-accent hover:text-accent-dark font-medium text-sm flex items-center gap-1 transition-colors duration-300">
                    {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Identity Services */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.servicesTitle}
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {identityServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3">{service.title[language]}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description[language]}</p>
                
                <button className="bg-primary hover:bg-primary-dark text-accent-light px-6 py-2 rounded-lg font-medium transition-all duration-300">
                  {language === 'ar' ? 'تعرف أكثر' : 'Learn More'}
                </button>
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
              <div className="text-6xl mb-6">📦</div>
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
                  <Package className="w-5 h-5" />
                  {c.buildBrandKit}
                </button>
                <button 
                  className="bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  {c.viewGuidelines}
                </button>
                <button 
                  className="bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-20 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {c.downloadAssets}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default VisualIdentityPreparation;