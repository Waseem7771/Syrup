import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { useLanguage } from '../../contexts/LanguageContext';
import interfaceHeaderImage from '../../assets/images/4.png';
import {
  Monitor,
  Smartphone,
  Tablet,
  Layers,
  Grid,
  Layout,
  Zap,
  Eye,
  Code,
  Paintbrush,
  MousePointer,
  Settings,
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Search,
  Menu,
  X,
  Star,
  Heart,
  Share2,
  Download,
  Upload,
  Edit3,
  Type,
  Image,
  Square,
  Circle,
  Triangle,
  ArrowRight,
  CheckCircle,
  Target,
  Award,
  TrendingUp,
  Users,
  Sparkles,
  Rocket,
  Crown,
  Gem,
  Lightbulb,
  Brain,
  Coffee,
  Globe,
  Building,
  ShoppingBag,
  Camera,
  Video,
  Music,
  Mail,
  Phone,
  Calendar,
  Clock,
  MapPin,
  Filter,
  Bookmark
} from 'lucide-react';

const WebsiteInterfaceDesign: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeDevice, setActiveDevice] = useState('desktop');
  const [selectedComponent, setSelectedComponent] = useState('hero');
  const [wireframeStep, setWireframeStep] = useState(0);
  const [isDesigning, setIsDesigning] = useState(false);
  const [designProgress, setDesignProgress] = useState(0);

  // Auto-progress wireframe steps
  useEffect(() => {
    const interval = setInterval(() => {
      setWireframeStep(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animate design progress
  useEffect(() => {
    const timer = setTimeout(() => setDesignProgress(78), 1000);
    return () => clearTimeout(timer);
  }, []);

  const content = {
    en: {
      title: "Website Interface Design",
      subtitle: "Professional UI/UX design services - creating intuitive, responsive, and visually stunning web interfaces that enhance user experience and drive business growth for Syrian companies",
      
      // Overview
      overview: "Design Studio Workspace",
      overviewDesc: "Our comprehensive web interface design service combines creativity with functionality to deliver exceptional user experiences. From wireframing to interactive prototypes, we create designs that captivate users and achieve business objectives.",
      
      // Process
      processTitle: "Design Process",
      
      // Components
      componentsTitle: "UI Components",
      
      // Responsive
      responsiveTitle: "Responsive Design",
      
      // Prototyping
      prototypingTitle: "Interactive Prototyping",
      
      // CTA
      ctaTitle: "Ready to Create Stunning Web Interfaces?",
      ctaDesc: "Transform your ideas into beautiful, functional web designs that provide exceptional user experiences and drive business success.",
      
      // Buttons
      startDesign: "Start Design Project",
      viewPortfolio: "View Portfolio",
      getPrototype: "Get Prototype",
      liveDemo: "Live Demo"
    },
    ar: {
      title: "تصميم واجهة الموقع",
      subtitle: "خدمات تصميم UI/UX المهنية - إنشاء واجهات ويب بديهية ومتجاوبة ومذهلة بصرياً تعزز تجربة المستخدم وتدفع نمو الأعمال للشركات في سوريا",
      
      // Overview
      overview: "مساحة عمل استوديو التصميم",
      overviewDesc: "تجمع خدمة تصميم واجهة الويب الشاملة لدينا بين الإبداع والوظائف لتقديم تجارب مستخدم استثنائية. من المخططات الأولية إلى النماذج التفاعلية، نقوم بإنشاء تصاميم تأسر المستخدمين وتحقق الأهداف التجارية.",
      
      // Process
      processTitle: "عملية التصميم",
      
      // Components
      componentsTitle: "مكونات الواجهة",
      
      // Responsive
      responsiveTitle: "التصميم المتجاوب",
      
      // Prototyping
      prototypingTitle: "النماذج التفاعلية",
      
      // CTA
      ctaTitle: "مستعد لإنشاء واجهات ويب مذهلة؟",
      ctaDesc: "حول أفكارك إلى تصاميم ويب جميلة ووظيفية توفر تجارب مستخدم استثنائية وتدفع نجاح الأعمال.",
      
      // Buttons
      startDesign: "ابدأ مشروع التصميم",
      viewPortfolio: "عرض المحفظة",
      getPrototype: "احصل على نموذج أولي",
      liveDemo: "عرض مباشر"
    }
  };

  const designServices = [
    {
      id: 'wireframe',
      title: { en: 'Wireframing', ar: 'المخططات الأولية' },
      icon: <Grid className="w-8 h-8" />,
      color: 'from-primary to-primary-dark',
      description: { 
        en: 'Strategic layout planning and information architecture design for optimal user flow',
        ar: 'تخطيط التخطيط الاستراتيجي وتصميم هندسة المعلومات لتدفق المستخدم الأمثل'
      }
    },
    {
      id: 'ui',
      title: { en: 'UI Design', ar: 'تصميم الواجهة' },
      icon: <Paintbrush className="w-8 h-8" />,
      color: 'from-primary to-accent',
      description: { 
        en: 'Beautiful visual interfaces with consistent design systems and brand alignment',
        ar: 'واجهات بصرية جميلة مع أنظمة تصميم متسقة ومحاذاة العلامة التجارية'
      }
    },
    {
      id: 'ux',
      title: { en: 'UX Research', ar: 'بحث تجربة المستخدم' },
      icon: <Brain className="w-8 h-8" />,
      color: 'from-accent to-accent-dark',
      description: { 
        en: 'User behavior analysis and journey mapping for enhanced user satisfaction',
        ar: 'تحليل سلوك المستخدم ورسم خرائط الرحلة لتعزيز رضا المستخدم'
      }
    },
    {
      id: 'prototype',
      title: { en: 'Prototyping', ar: 'النماذج الأولية' },
      icon: <Play className="w-8 h-8" />,
      color: 'from-primary-dark to-accent',
      description: { 
        en: 'Interactive prototypes for testing and validation before development',
        ar: 'نماذج أولية تفاعلية للاختبار والتحقق قبل التطوير'
      }
    }
  ];

  // Wireframe steps
  const wireframeSteps = [
    {
      step: 1,
      title: { en: 'Information Architecture', ar: 'هندسة المعلومات' },
      description: { en: 'Organize content and define user flows', ar: 'تنظيم المحتوى وتحديد تدفقات المستخدم' },
      wireframe: (
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 h-48">
          <div className="space-y-3">
            <div className="h-6 bg-gray-200 rounded"></div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-12 bg-gray-100 rounded"></div>
              <div className="h-12 bg-gray-100 rounded"></div>
              <div className="h-12 bg-gray-100 rounded"></div>
            </div>
            <div className="h-20 bg-gray-50 rounded"></div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-8 bg-gray-100 rounded"></div>
              <div className="h-8 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      step: 2,
      title: { en: 'Layout Structure', ar: 'هيكل التخطيط' },
      description: { en: 'Define component placement and hierarchy', ar: 'تحديد وضع المكونات والتسلسل الهرمي' },
      wireframe: (
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 h-48">
          <div className="space-y-3">
            <div className="h-8 bg-primary bg-opacity-20 rounded flex items-center px-3">
              <Menu className="w-4 h-4 text-primary" />
            </div>
            <div className="h-16 bg-accent bg-opacity-20 rounded"></div>
            <div className="grid grid-cols-4 gap-2">
              <div className="h-10 bg-gray-100 rounded"></div>
              <div className="h-10 bg-gray-100 rounded"></div>
              <div className="h-10 bg-gray-100 rounded"></div>
              <div className="h-10 bg-gray-100 rounded"></div>
            </div>
            <div className="h-12 bg-gray-50 rounded"></div>
          </div>
        </div>
      )
    },
    {
      step: 3,
      title: { en: 'Content Blocks', ar: 'كتل المحتوى' },
      description: { en: 'Add content areas and interaction elements', ar: 'إضافة مناطق المحتوى وعناصر التفاعل' },
      wireframe: (
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 h-48">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="h-6 bg-primary bg-opacity-30 rounded w-20"></div>
              <div className="h-6 bg-accent bg-opacity-30 rounded w-16"></div>
            </div>
            <div className="h-12 bg-gradient-to-r from-primary to-accent bg-opacity-20 rounded"></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-100 rounded w-3/4"></div>
              </div>
              <div className="h-16 bg-gray-100 rounded"></div>
            </div>
            <div className="flex gap-2">
              <div className="h-8 bg-primary bg-opacity-30 rounded px-3 flex-1"></div>
              <div className="h-8 bg-accent bg-opacity-30 rounded px-3 flex-1"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      step: 4,
      title: { en: 'Interactive Elements', ar: 'العناصر التفاعلية' },
      description: { en: 'Add buttons, forms, and navigation elements', ar: 'إضافة الأزرار والنماذج وعناصر التنقل' },
      wireframe: (
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 h-48">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary rounded-full"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
              <div className="flex gap-1">
                <div className="w-6 h-6 bg-accent rounded"></div>
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
            </div>
            <div className="h-14 bg-gradient-to-r from-primary to-accent rounded flex items-center justify-center">
              <Play className="w-6 h-6 text-white" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-8 bg-primary bg-opacity-40 rounded"></div>
              <div className="h-8 bg-accent bg-opacity-40 rounded"></div>
              <div className="h-8 bg-gray-200 rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="h-6 bg-gray-100 rounded"></div>
              <div className="h-6 bg-gray-100 rounded w-4/5"></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // UI Components
  const uiComponents = [
    {
      id: 'hero',
      name: { en: 'Hero Section', ar: 'القسم الرئيسي' },
      category: 'Landing',
      preview: (
        <div className="bg-gradient-to-br from-primary to-accent text-white p-6 rounded-lg h-32 relative overflow-hidden">
          <div className="absolute top-4 left-4">
            <div className="text-lg font-bold">Hero Title</div>
            <div className="text-sm opacity-75">Engaging subtitle text</div>
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="bg-white text-primary px-4 py-1 rounded text-sm font-medium">Call to Action</div>
          </div>
          <div className="absolute top-4 right-4 w-16 h-16 bg-white bg-opacity-20 rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 bg-accent-light rounded"></div>
        </div>
      )
    },
    {
      id: 'navigation',
      name: { en: 'Navigation Bar', ar: 'شريط التنقل' },
      category: 'Navigation',
      preview: (
        <div className="bg-white border border-gray-200 rounded-lg p-4 h-32">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded"></div>
              <div className="text-sm font-bold text-primary">Brand</div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-2 bg-gray-200 rounded"></div>
              <div className="w-12 h-2 bg-gray-200 rounded"></div>
              <div className="w-12 h-2 bg-gray-200 rounded"></div>
            </div>
            <div className="w-6 h-6 bg-accent rounded"></div>
          </div>
          <div className="border-t border-gray-100 pt-4">
            <div className="grid grid-cols-4 gap-2">
              <div className="h-2 bg-primary bg-opacity-20 rounded"></div>
              <div className="h-2 bg-gray-100 rounded"></div>
              <div className="h-2 bg-gray-100 rounded"></div>
              <div className="h-2 bg-accent bg-opacity-20 rounded"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'card',
      name: { en: 'Content Cards', ar: 'بطاقات المحتوى' },
      category: 'Content',
      preview: (
        <div className="grid grid-cols-2 gap-3 h-32">
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <div className="w-full h-6 bg-gradient-to-r from-primary to-accent rounded mb-2"></div>
            <div className="space-y-1">
              <div className="h-2 bg-gray-200 rounded"></div>
              <div className="h-2 bg-gray-100 rounded w-3/4"></div>
            </div>
            <div className="mt-2 h-4 bg-accent bg-opacity-20 rounded"></div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <div className="w-full h-6 bg-gradient-to-r from-accent to-primary-dark rounded mb-2"></div>
            <div className="space-y-1">
              <div className="h-2 bg-gray-200 rounded"></div>
              <div className="h-2 bg-gray-100 rounded w-2/3"></div>
            </div>
            <div className="mt-2 h-4 bg-primary bg-opacity-20 rounded"></div>
          </div>
        </div>
      )
    },
    {
      id: 'form',
      name: { en: 'Contact Form', ar: 'نموذج الاتصال' },
      category: 'Forms',
      preview: (
        <div className="bg-white border border-gray-200 rounded-lg p-4 h-32">
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="flex-1 h-6 bg-gray-100 rounded"></div>
              <div className="flex-1 h-6 bg-gray-100 rounded"></div>
            </div>
            <div className="h-6 bg-gray-100 rounded"></div>
            <div className="h-12 bg-gray-50 rounded"></div>
            <div className="h-6 bg-gradient-to-r from-primary to-accent rounded"></div>
          </div>
        </div>
      )
    },
    {
      id: 'footer',
      name: { en: 'Footer Section', ar: 'قسم التذييل' },
      category: 'Layout',
      preview: (
        <div className="bg-primary-dark text-white p-4 rounded-lg h-32">
          <div className="grid grid-cols-3 gap-4 h-full">
            <div className="space-y-2">
              <div className="h-3 bg-white bg-opacity-20 rounded"></div>
              <div className="h-2 bg-white bg-opacity-10 rounded"></div>
              <div className="h-2 bg-white bg-opacity-10 rounded w-3/4"></div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-accent bg-opacity-30 rounded"></div>
              <div className="h-2 bg-white bg-opacity-10 rounded"></div>
              <div className="h-2 bg-white bg-opacity-10 rounded w-2/3"></div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-white bg-opacity-20 rounded"></div>
              <div className="flex gap-1">
                <div className="w-4 h-4 bg-accent rounded-sm"></div>
                <div className="w-4 h-4 bg-white bg-opacity-20 rounded-sm"></div>
                <div className="w-4 h-4 bg-white bg-opacity-20 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sidebar',
      name: { en: 'Dashboard Sidebar', ar: 'الشريط الجانبي' },
      category: 'Navigation',
      preview: (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden h-32">
          <div className="bg-primary text-white p-2 text-center text-sm font-bold">Dashboard</div>
          <div className="p-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-accent rounded"></div>
              <div className="h-2 bg-gray-200 rounded flex-1"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
              <div className="h-2 bg-gray-100 rounded flex-1"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
              <div className="h-2 bg-gray-100 rounded flex-1"></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Responsive breakpoints
  const devicePreview = {
    desktop: {
      icon: <Monitor className="w-6 h-6" />,
      name: { en: 'Desktop', ar: 'سطح المكتب' },
      width: 'w-full',
      height: 'h-64'
    },
    tablet: {
      icon: <Tablet className="w-6 h-6" />,
      name: { en: 'Tablet', ar: 'اللوحي' },
      width: 'w-3/4',
      height: 'h-56'
    },
    mobile: {
      icon: <Smartphone className="w-6 h-6" />,
      name: { en: 'Mobile', ar: 'الجوال' },
      width: 'w-1/2',
      height: 'h-48'
    }
  };

  const designProcess = [
    {
      step: 1,
      icon: <Search className="w-6 h-6" />,
      title: { en: 'Research & Analysis', ar: 'البحث والتحليل' },
      description: { en: 'User research, competitor analysis, and requirement gathering', ar: 'بحث المستخدم وتحليل المنافسين وجمع المتطلبات' },
      deliverables: {
        en: ['User personas', 'Journey maps', 'Market analysis'],
        ar: ['شخصيات المستخدمين', 'خرائط الرحلة', 'تحليل السوق']
      }
    },
    {
      step: 2,
      icon: <Layout className="w-6 h-6" />,
      title: { en: 'Wireframing', ar: 'المخططات الأولية' },
      description: { en: 'Information architecture and low-fidelity wireframe creation', ar: 'هندسة المعلومات وإنشاء المخططات الأولية منخفضة الدقة' },
      deliverables: {
        en: ['Site maps', 'User flows', 'Wireframes'],
        ar: ['خرائط الموقع', 'تدفقات المستخدم', 'المخططات الأولية']
      }
    },
    {
      step: 3,
      icon: <Paintbrush className="w-6 h-6" />,
      title: { en: 'Visual Design', ar: 'التصميم البصري' },
      description: { en: 'High-fidelity mockups with brand guidelines and visual elements', ar: 'نماذج عالية الدقة مع إرشادات العلامة التجارية والعناصر البصرية' },
      deliverables: {
        en: ['Design system', 'High-fidelity mockups', 'Style guide'],
        ar: ['نظام التصميم', 'النماذج عالية الدقة', 'دليل الأسلوب']
      }
    },
    {
      step: 4,
      icon: <Play className="w-6 h-6" />,
      title: { en: 'Prototyping', ar: 'النماذج الأولية' },
      description: { en: 'Interactive prototypes for testing and validation', ar: 'نماذج أولية تفاعلية للاختبار والتحقق' },
      deliverables: {
        en: ['Interactive prototype', 'Usability testing', 'Final specifications'],
        ar: ['النموذج الأولي التفاعلي', 'اختبار قابلية الاستخدام', 'المواصفات النهائية']
      }
    }
  ];

  const startDesigning = () => {
    setIsDesigning(true);
    setTimeout(() => setIsDesigning(false), 3000);
  };

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={interfaceHeaderImage}
      />

      {/* Design Studio Overview */}
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
              
              {/* Design Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">200+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'واجهات مصممة' : 'Interfaces Designed'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent to-accent-dark rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'رضا المستخدمين' : 'User Satisfaction'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-dark to-accent rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">72h</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'تسليم النموذج' : 'Prototype Delivery'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent-dark to-primary rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">24/7</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'الدعم التقني' : 'Design Support'}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Paintbrush className="w-5 h-5" />
                  {c.startDesign}
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
              {/* Design Workspace Interface */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-accent overflow-hidden">
                {/* Workspace Header */}
                <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center">
                        <Layout className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-accent-light">{language === 'ar' ? 'مساحة التصميم' : 'Design Workspace'}</h3>
                        <p className="text-xs opacity-75">{language === 'ar' ? 'أدوات إبداعية' : 'Creative Tools'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent-light rounded-full animate-pulse"></div>
                      <span className="text-xs text-accent-light">{language === 'ar' ? 'نشط' : 'Active'}</span>
                    </div>
                  </div>
                </div>

                {/* Design Progress */}
                <div className="bg-gray-50 px-4 py-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">{language === 'ar' ? 'تقدم التصميم' : 'Design Progress'}</span>
                    <span className="text-sm font-bold text-accent">{designProgress}%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-primary to-accent h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${designProgress}%` }}
                      transition={{ duration: 2, delay: 0.5 }}
                    ></motion.div>
                  </div>
                </div>

                {/* Service Tabs */}
                <div className="bg-gray-50 px-4 py-2">
                  <div className="grid grid-cols-4 gap-1">
                    {designServices.map((service, index) => (
                      <div 
                        key={service.id}
                        className={`text-center p-2 rounded-lg transition-all duration-300 ${
                          index === 1 ? `bg-gradient-to-br ${service.color} text-white` : 'bg-white text-gray-600'
                        }`}
                      >
                        <div className="flex justify-center mb-1">
                          {React.cloneElement(service.icon, { className: "w-4 h-4" })}
                        </div>
                        <div className="text-xs font-medium">{service.title[language]}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Current Design */}
                <div className="p-6">
                  <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 h-32 relative overflow-hidden">
                    <div className="absolute top-2 left-2 text-xs text-gray-500">{language === 'ar' ? 'الصفحة الرئيسية' : 'Homepage Design'}</div>
                    
                    {/* Simulated Design Elements */}
                    <div className="mt-4 space-y-2">
                      <div className="h-4 bg-gradient-to-r from-primary to-accent rounded"></div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-8 bg-primary bg-opacity-20 rounded"></div>
                        <div className="h-8 bg-accent bg-opacity-20 rounded"></div>
                        <div className="h-8 bg-gray-100 rounded"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-6 bg-gray-200 rounded"></div>
                        <div className="h-6 bg-gray-100 rounded"></div>
                      </div>
                    </div>

                    {/* Design Tools Overlay */}
                    <div className="absolute bottom-2 right-2 flex gap-1">
                      <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                        <MousePointer className="w-3 h-3 text-white" />
                      </div>
                      <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
                        <Edit3 className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Design Elements */}
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
                <Zap className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Interactive Wireframing Process */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {language === 'ar' ? 'عملية التصميم التفاعلية' : 'Interactive Wireframing Process'}
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Wireframe Steps */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {wireframeSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-white rounded-xl p-4 shadow-lg border-l-4 transition-all duration-500 ${
                      wireframeStep === index 
                        ? 'border-accent scale-105 shadow-xl' 
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        wireframeStep === index 
                          ? 'bg-gradient-to-br from-primary to-accent text-white' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        <span className="font-bold">{step.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-primary mb-1">{step.title[language]}</h3>
                        <p className="text-sm text-gray-600">{step.description[language]}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Live Wireframe Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-primary">{wireframeSteps[wireframeStep].title[language]}</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={wireframeStep}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  >
                    {wireframeSteps[wireframeStep].wireframe}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-4 text-center">
                  <div className="flex justify-center gap-2 mb-3">
                    {wireframeSteps.map((_, index) => (
                      <div 
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          wireframeStep === index ? 'bg-accent' : 'bg-gray-300'
                        }`}
                      ></div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{wireframeSteps[wireframeStep].description[language]}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* UI Components Gallery */}
      <Section background="white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.componentsTitle}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uiComponents.map((component, index) => (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  selectedComponent === component.id ? 'ring-4 ring-accent scale-105' : ''
                }`}
                onClick={() => setSelectedComponent(component.id)}
              >
                <div className="h-32 p-4">
                  {component.preview}
                </div>
                
                <div className="p-4 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-primary">{component.name[language]}</h3>
                    <span className="bg-accent text-white px-2 py-1 rounded-full text-xs">
                      {component.category}
                    </span>
                  </div>
                  <button className="text-accent hover:text-accent-dark font-medium text-sm flex items-center gap-1 transition-colors duration-300">
                    {language === 'ar' ? 'تخصيص' : 'Customize'}
                    <Edit3 className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Responsive Design Showcase */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.responsiveTitle}
          </motion.h2>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            {/* Device Selector */}
            <div className="flex justify-center gap-4 mb-8">
              {Object.entries(devicePreview).map(([device, config]) => (
                <button
                  key={device}
                  onClick={() => setActiveDevice(device)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeDevice === device
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {config.icon}
                  <span className="font-medium">{config.name[language]}</span>
                </button>
              ))}
            </div>

            {/* Responsive Preview */}
            <div className="flex justify-center">
              <motion.div
                key={activeDevice}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`bg-gray-900 rounded-2xl p-4 ${devicePreview[activeDevice].width} max-w-4xl`}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  {/* Browser/App Header */}
                  <div className="bg-gray-100 px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-500">
                      {language === 'ar' ? 'موقع الأعمال السورية.sy' : 'syrian-business.com'}
                    </div>
                  </div>

                  {/* Responsive Content */}
                  <div className={`${devicePreview[activeDevice].height} overflow-hidden`}>
                    <motion.div
                      key={activeDevice}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="h-full"
                    >
                      {/* Desktop Layout */}
                      {activeDevice === 'desktop' && (
                        <div className="h-full bg-gradient-to-br from-primary to-accent text-white p-8">
                          <div className="grid grid-cols-3 gap-6 h-full">
                            <div className="col-span-2 space-y-4">
                              <div className="h-8 bg-white bg-opacity-20 rounded"></div>
                              <div className="h-4 bg-white bg-opacity-15 rounded w-3/4"></div>
                              <div className="h-12 bg-accent-light rounded"></div>
                            </div>
                            <div className="space-y-3">
                              <div className="h-24 bg-white bg-opacity-10 rounded"></div>
                              <div className="h-16 bg-white bg-opacity-10 rounded"></div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tablet Layout */}
                      {activeDevice === 'tablet' && (
                        <div className="h-full bg-gradient-to-br from-primary to-accent text-white p-6">
                          <div className="space-y-4 h-full">
                            <div className="h-6 bg-white bg-opacity-20 rounded"></div>
                            <div className="h-3 bg-white bg-opacity-15 rounded w-2/3"></div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="h-16 bg-white bg-opacity-10 rounded"></div>
                              <div className="h-16 bg-white bg-opacity-10 rounded"></div>
                            </div>
                            <div className="h-8 bg-accent-light rounded"></div>
                          </div>
                        </div>
                      )}

                      {/* Mobile Layout */}
                      {activeDevice === 'mobile' && (
                        <div className="h-full bg-gradient-to-br from-primary to-accent text-white p-4">
                          <div className="space-y-3 h-full">
                            <div className="flex justify-between items-center">
                              <div className="h-4 bg-white bg-opacity-20 rounded w-16"></div>
                              <Menu className="w-4 h-4" />
                            </div>
                            <div className="h-5 bg-white bg-opacity-20 rounded"></div>
                            <div className="h-2 bg-white bg-opacity-15 rounded w-1/2"></div>
                            <div className="space-y-2">
                              <div className="h-12 bg-white bg-opacity-10 rounded"></div>
                              <div className="h-12 bg-white bg-opacity-10 rounded"></div>
                            </div>
                            <div className="h-6 bg-accent-light rounded"></div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Device Info */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                {language === 'ar' ? 'تصميم متجاوب لجميع الأجهزة' : 'Responsive design for all devices'}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Design Process */}
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
              {designProcess.map((step, index) => (
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
                      <p className="text-gray-600 text-sm mb-4">{step.description[language]}</p>
                      
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

      {/* Interactive Prototyping */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.prototypingTitle}
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Prototype Interface */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              {/* Prototype Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-primary">{language === 'ar' ? 'النموذج التفاعلي' : 'Interactive Prototype'}</h3>
                <div className="flex gap-2">
                  <button 
                    onClick={startDesigning}
                    disabled={isDesigning}
                    className="bg-accent hover:bg-accent-dark text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-300 disabled:opacity-50"
                  >
                    {isDesigning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button className="bg-primary hover:bg-primary-dark text-accent-light px-3 py-1 rounded text-sm font-medium transition-colors duration-300">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Prototype Preview */}
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <div className="bg-white rounded overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-accent text-white p-4 relative">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold">{language === 'ar' ? 'تطبيق الأعمال' : 'Business App'}</h4>
                      <div className="w-6 h-6 bg-white bg-opacity-20 rounded"></div>
                    </div>
                    <p className="text-sm opacity-75 mt-1">{language === 'ar' ? 'لوحة التحكم' : 'Dashboard'}</p>
                    
                    {/* Interactive Elements */}
                    <motion.div
                      animate={isDesigning ? { scale: [1, 1.1, 1], opacity: [1, 0.8, 1] } : {}}
                      transition={{ duration: 0.5, repeat: isDesigning ? Infinity : 0 }}
                      className="absolute top-4 right-4 w-2 h-2 bg-accent-light rounded-full"
                    ></motion.div>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <motion.div 
                        className="h-6 bg-primary bg-opacity-20 rounded cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      ></motion.div>
                      <motion.div 
                        className="h-6 bg-accent bg-opacity-20 rounded cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      ></motion.div>
                    </div>
                    <div className="h-8 bg-gray-100 rounded"></div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prototype Controls */}
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <button className="w-8 h-8 bg-primary hover:bg-primary-dark text-accent-light rounded flex items-center justify-center transition-colors duration-300">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-accent hover:bg-accent-dark text-white rounded flex items-center justify-center transition-colors duration-300">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-600">{language === 'ar' ? 'الشاشة 1 من 5' : 'Screen 1 of 5'}</span>
              </div>
            </motion.div>

            {/* Prototype Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-primary mb-6">{language === 'ar' ? 'مميزات النماذج الأولية' : 'Prototype Features'}</h3>
              
              <div className="space-y-4">
                {[
                  {
                    icon: <MousePointer className="w-5 h-5" />,
                    title: { en: 'Interactive Elements', ar: 'عناصر تفاعلية' },
                    description: { en: 'Clickable buttons, forms, and navigation', ar: 'أزرار قابلة للنقر ونماذج وتنقل' }
                  },
                  {
                    icon: <Eye className="w-5 h-5" />,
                    title: { en: 'User Flow Testing', ar: 'اختبار تدفق المستخدم' },
                    description: { en: 'Validate user journeys and interactions', ar: 'التحقق من رحلات المستخدم والتفاعلات' }
                  },
                  {
                    icon: <Smartphone className="w-5 h-5" />,
                    title: { en: 'Multi-Device Preview', ar: 'معاينة متعددة الأجهزة' },
                    description: { en: 'Test across desktop, tablet, and mobile', ar: 'اختبار عبر سطح المكتب واللوحي والجوال' }
                  },
                  {
                    icon: <Share2 className="w-5 h-5" />,
                    title: { en: 'Stakeholder Sharing', ar: 'مشاركة أصحاب المصلحة' },
                    description: { en: 'Easy sharing for feedback and approval', ar: 'مشاركة سهلة للحصول على التعليقات والموافقة' }
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-3 items-start"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-primary">{feature.title[language]}</h4>
                      <p className="text-sm text-gray-600">{feature.description[language]}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default WebsiteInterfaceDesign;