import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { useLanguage } from '../../contexts/LanguageContext';
import logoHeaderImage from '../../assets/images/13.png';
import {
  Palette,
  Type,
  Zap,
  Eye,
  Download,
  RefreshCw,
  Star,
  Heart,
  Share2,
  Copy,
  Check,
  Layers,
  Grid,
  Circle,
  Square,
  Triangle,
  Hexagon,
  ArrowRight,
  ChevronRight,
  Plus,
  Minus,
  Settings,
  Sliders,
  Aperture,
  Droplet,
  Paintbrush,
  Feather,
  Sparkles,
  Target,
  Award,
  TrendingUp,
  Users,
  Building,
  Globe,
  Coffee,
  Monitor,
  Smartphone,
  Tablet,
  BookOpen,
  FileText,
  Image,
  Video,
  Mic,
  Camera,
  Edit3,
  Code,
  Database,
  Brain,
  Lightbulb,
  Rocket,
  Shield,
  Crown,
  Gem,
  Sun,
  Moon,
  Music,
  Play,
  Volume2
} from 'lucide-react';

const LogoColorFontSelection: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('logo');
  const [selectedPalette, setSelectedPalette] = useState(0);
  const [selectedFont, setSelectedFont] = useState(0);
  const [selectedLogo, setSelectedLogo] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState('');

  // Auto-rotate through examples
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeTab === 'color') {
        setSelectedPalette(prev => (prev + 1) % colorPalettes.length);
      } else if (activeTab === 'font') {
        setSelectedFont(prev => (prev + 1) % fontPairings.length);
      } else if (activeTab === 'logo') {
        setSelectedLogo(prev => (prev + 1) % logoDesigns.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [activeTab]);

  const content = {
    en: {
      title: "Logo, Color, and Font Selection",
      subtitle: "Professional visual identity design services - creating cohesive brand systems through strategic logo design, color psychology, and typography excellence for Syrian businesses",
      
      // Overview
      overview: "Visual Identity Studio",
      overviewDesc: "Our design studio specializes in creating memorable visual identities that communicate your brand's essence. From logo conceptualization to color psychology and typography selection, we ensure every element works harmoniously to build brand recognition and trust.",
      
      // Tabs
      logoTitle: "Logo Design",
      colorTitle: "Color Palettes",
      fontTitle: "Typography",
      
      // Process
      processTitle: "Our Design Process",
      
      // Tools
      toolsTitle: "Design Tools & Features",
      
      // Portfolio
      portfolioTitle: "Visual Identity Portfolio",
      
      // CTA
      ctaTitle: "Ready to Build Your Visual Identity?",
      ctaDesc: "Transform your brand with professional logo design, strategic color selection, and purposeful typography that resonates with your audience.",
      
      // Buttons
      startDesign: "Start Design Process",
      viewPortfolio: "View Portfolio",
      downloadAssets: "Download Assets",
      getConsultation: "Get Consultation"
    },
    ar: {
      title: "اختيار الشعار والألوان والخطوط",
      subtitle: "خدمات تصميم الهوية البصرية المهنية - إنشاء أنظمة علامة تجارية متماسكة من خلال التصميم الاستراتيجي للشعار وعلم نفس الألوان وتميز الطباعة للشركات السورية",
      
      // Overview
      overview: "استوديو الهوية البصرية",
      overviewDesc: "يتخصص استوديو التصميم لدينا في إنشاء هويات بصرية لا تُنسى تتواصل مع جوهر علامتك التجارية. من تصور الشعار إلى علم نفس الألوان واختيار الطباعة، نضمن أن كل عنصر يعمل بانسجام لبناء التعرف على العلامة التجارية والثقة.",
      
      // Tabs
      logoTitle: "تصميم الشعار",
      colorTitle: "لوحات الألوان",
      fontTitle: "الطباعة",
      
      // Process
      processTitle: "عملية التصميم لدينا",
      
      // Tools
      toolsTitle: "أدوات ومميزات التصميم",
      
      // Portfolio
      portfolioTitle: "محفظة الهوية البصرية",
      
      // CTA
      ctaTitle: "مستعد لبناء هويتك البصرية؟",
      ctaDesc: "حول علامتك التجارية بتصميم شعار مهني واختيار ألوان استراتيجي وطباعة هادفة تتواصل مع جمهورك.",
      
      // Buttons
      startDesign: "ابدأ عملية التصميم",
      viewPortfolio: "عرض المحفظة",
      downloadAssets: "تحميل الأصول",
      getConsultation: "احصل على استشارة"
    }
  };

  const designServices = [
    {
      id: 'logo',
      title: { en: 'Logo Design', ar: 'تصميم الشعار' },
      icon: <Aperture className="w-8 h-8" />,
      color: 'from-primary to-primary-dark',
      description: { 
        en: 'Custom logo design that captures your brand essence and creates lasting impressions',
        ar: 'تصميم شعار مخصص يلتقط جوهر علامتك التجارية ويخلق انطباعات دائمة'
      }
    },
    {
      id: 'color',
      title: { en: 'Color Psychology', ar: 'علم نفس الألوان' },
      icon: <Palette className="w-8 h-8" />,
      color: 'from-accent to-accent-dark',
      description: { 
        en: 'Strategic color selection based on psychology, culture, and brand positioning',
        ar: 'اختيار الألوان الاستراتيجي بناءً على علم النفس والثقافة وموقع العلامة التجارية'
      }
    },
    {
      id: 'font',
      title: { en: 'Typography', ar: 'الطباعة' },
      icon: <Type className="w-8 h-8" />,
      color: 'from-primary-dark to-accent',
      description: { 
        en: 'Perfect font pairings that enhance readability and brand personality',
        ar: 'أزواج الخطوط المثالية التي تعزز القابلية للقراءة وشخصية العلامة التجارية'
      }
    }
  ];

  // Artificial logo designs
  const logoDesigns = [
    {
      id: 1,
      name: 'Syrian Tech Hub',
      industry: 'Technology',
      concept: 'Modern minimalist approach',
      colors: ['#00285C', '#00B6C7', '#FFFFFF'],
      logo: (
        <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-2 border-2 border-white rounded-xl opacity-60"></div>
          <div className="text-white font-bold text-xl">ST</div>
          <div className="absolute bottom-1 right-1 w-2 h-2 bg-accent-light rounded-full"></div>
        </div>
      ),
      variations: 4,
      style: 'Minimalist'
    },
    {
      id: 2,
      name: 'Damascus Crafts',
      industry: 'Artisan',
      concept: 'Traditional meets modern',
      colors: ['#8B4513', '#DAA520', '#F5DEB3'],
      logo: (
        <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-full flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-1 border border-yellow-200 rounded-full opacity-50"></div>
          <div className="text-white font-bold text-xl">DC</div>
          <div className="absolute top-1 left-1 w-3 h-3 bg-yellow-300 rounded-full opacity-60"></div>
          <div className="absolute bottom-1 right-1 w-2 h-2 bg-yellow-200 rounded-full opacity-80"></div>
        </div>
      ),
      variations: 6,
      style: 'Traditional'
    },
    {
      id: 3,
      name: 'Aleppo Innovations',
      industry: 'Innovation',
      concept: 'Dynamic and forward-thinking',
      colors: ['#4A90E2', '#50C878', '#FFFFFF'],
      logo: (
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center relative overflow-hidden transform rotate-12">
          <div className="absolute inset-2 bg-white bg-opacity-20 rounded transform -rotate-12"></div>
          <div className="text-white font-bold text-xl transform -rotate-12">AI</div>
          <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full"></div>
        </div>
      ),
      variations: 5,
      style: 'Dynamic'
    }
  ];

  // Color palettes with artificial combinations
  const colorPalettes = [
    {
      id: 1,
      name: 'Professional Trust',
      primary: '#00285C',
      secondary: '#00B6C7',
      accent: '#F8F9FA',
      colors: ['#00285C', '#00B6C7', '#4A90E2', '#F8F9FA', '#E9ECEF'],
      mood: { en: 'Trustworthy, Professional, Reliable', ar: 'موثوق، مهني، موثوق' },
      usage: { en: 'Corporate, Finance, Healthcare', ar: 'الشركات، المالية، الرعاية الصحية' },
      psychology: { en: 'Builds trust and credibility', ar: 'يبني الثقة والمصداقية' }
    },
    {
      id: 2,
      name: 'Creative Energy',
      primary: '#FF6B35',
      secondary: '#F7931E',
      accent: '#FFE135',
      colors: ['#FF6B35', '#F7931E', '#FFE135', '#FFF3E0', '#FFAB91'],
      mood: { en: 'Energetic, Creative, Optimistic', ar: 'نشط، إبداعي، متفائل' },
      usage: { en: 'Creative, Startups, Entertainment', ar: 'الإبداع، الشركات الناشئة، الترفيه' },
      psychology: { en: 'Stimulates creativity and enthusiasm', ar: 'يحفز الإبداع والحماس' }
    },
    {
      id: 3,
      name: 'Natural Growth',
      primary: '#2E7D32',
      secondary: '#4CAF50',
      accent: '#A5D6A7',
      colors: ['#2E7D32', '#4CAF50', '#81C784', '#A5D6A7', '#E8F5E8'],
      mood: { en: 'Natural, Growth, Harmony', ar: 'طبيعي، نمو، انسجام' },
      usage: { en: 'Environment, Health, Agriculture', ar: 'البيئة، الصحة، الزراعة' },
      psychology: { en: 'Promotes balance and growth', ar: 'يعزز التوازن والنمو' }
    },
    {
      id: 4,
      name: 'Luxury Elegance',
      primary: '#4A148C',
      secondary: '#7B1FA2',
      accent: '#E1BEE7',
      colors: ['#4A148C', '#7B1FA2', '#9C27B0', '#E1BEE7', '#F3E5F5'],
      mood: { en: 'Luxury, Elegant, Sophisticated', ar: 'فاخر، أنيق، راقي' },
      usage: { en: 'Luxury brands, Fashion, Beauty', ar: 'العلامات الفاخرة، الأزياء، الجمال' },
      psychology: { en: 'Creates sense of luxury and exclusivity', ar: 'يخلق شعوراً بالرفاهية والحصرية' }
    }
  ];

  // Font pairings
  const fontPairings = [
    {
      id: 1,
      name: 'Modern Professional',
      heading: 'Inter',
      body: 'Source Sans Pro',
      style: 'Sans-serif pairing',
      mood: { en: 'Clean, Modern, Readable', ar: 'نظيف، عصري، قابل للقراءة' },
      usage: { en: 'Corporate, Tech, Digital', ar: 'الشركات، التقنية، الرقمي' },
      preview: {
        heading: 'Your Brand Name',
        body: 'Professional and modern typography that enhances your brand message with clarity and style.'
      }
    },
    {
      id: 2,
      name: 'Creative Contrast',
      heading: 'Playfair Display',
      body: 'Lato',
      style: 'Serif + Sans-serif',
      mood: { en: 'Elegant, Creative, Balanced', ar: 'أنيق، إبداعي، متوازن' },
      usage: { en: 'Creative, Fashion, Luxury', ar: 'الإبداع، الأزياء، الفخامة' },
      preview: {
        heading: 'Elegant Brand',
        body: 'Sophisticated typography pairing that combines elegance with readability for premium brands.'
      }
    },
    {
      id: 3,
      name: 'Friendly Approachable',
      heading: 'Nunito',
      body: 'Open Sans',
      style: 'Rounded Sans-serif',
      mood: { en: 'Friendly, Approachable, Warm', ar: 'ودود، قابل للوصول، دافئ' },
      usage: { en: 'Healthcare, Education, Community', ar: 'الرعاية الصحية، التعليم، المجتمع' },
      preview: {
        heading: 'Friendly Brand',
        body: 'Warm and approachable typography that creates connection and trust with your audience.'
      }
    },
    {
      id: 4,
      name: 'Tech Innovation',
      heading: 'Roboto',
      body: 'Roboto',
      style: 'Monotype family',
      mood: { en: 'Tech, Innovative, Precise', ar: 'تقني، مبتكر، دقيق' },
      usage: { en: 'Technology, Software, Innovation', ar: 'التكنولوجيا، البرمجيات، الابتكار' },
      preview: {
        heading: 'Tech Innovation',
        body: 'Precise and modern typography designed for digital interfaces and technology brands.'
      }
    }
  ];

  const designProcess = [
    {
      step: 1,
      icon: <Target className="w-6 h-6" />,
      title: { en: 'Brand Discovery', ar: 'اكتشاف العلامة التجارية' },
      description: { en: 'Understanding your brand values, target audience, and market positioning', ar: 'فهم قيم علامتك التجارية والجمهور المستهدف وموقع السوق' },
      deliverables: {
        en: ['Brand questionnaire', 'Market research', 'Competitor analysis'],
        ar: ['استبيان العلامة التجارية', 'بحث السوق', 'تحليل المنافسين']
      }
    },
    {
      step: 2,
      icon: <Lightbulb className="w-6 h-6" />,
      title: { en: 'Concept Development', ar: 'تطوير المفهوم' },
      description: { en: 'Creating initial concepts for logo, color schemes, and typography direction', ar: 'إنشاء مفاهيم أولية للشعار ومخططات الألوان واتجاه الطباعة' },
      deliverables: {
        en: ['Concept boards', 'Color psychology', 'Typography exploration'],
        ar: ['لوحات المفاهيم', 'علم نفس الألوان', 'استكشاف الطباعة']
      }
    },
    {
      step: 3,
      icon: <Paintbrush className="w-6 h-6" />,
      title: { en: 'Design Refinement', ar: 'تحسين التصميم' },
      description: { en: 'Refining selected concepts and creating multiple variations for testing', ar: 'تحسين المفاهيم المختارة وإنشاء تنويعات متعددة للاختبار' },
      deliverables: {
        en: ['Logo variations', 'Color palettes', 'Font pairings'],
        ar: ['تنويعات الشعار', 'لوحات الألوان', 'أزواج الخطوط']
      }
    },
    {
      step: 4,
      icon: <Award className="w-6 h-6" />,
      title: { en: 'Final Assets', ar: 'الأصول النهائية' },
      description: { en: 'Delivering final logo files, brand guidelines, and complete visual identity system', ar: 'تسليم ملفات الشعار النهائية وإرشادات العلامة التجارية ونظام الهوية البصرية الكامل' },
      deliverables: {
        en: ['Logo files (AI, PNG, SVG)', 'Brand style guide', 'Application examples'],
        ar: ['ملفات الشعار (AI, PNG, SVG)', 'دليل أسلوب العلامة التجارية', 'أمثلة التطبيق']
      }
    }
  ];

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={logoHeaderImage}
      />

      {/* Visual Identity Studio Overview */}
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
                  <div className="text-2xl font-bold text-accent-light">500+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'شعارات مصممة' : 'Logos Designed'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent to-accent-dark rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'لوحات ألوان' : 'Color Palettes'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-dark to-accent rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">98%</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent-dark to-primary rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">24h</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'تسليم سريع' : 'Fast Delivery'}</div>
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
              {/* Design Studio Interface */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-accent overflow-hidden">
                {/* Studio Header */}
                <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center">
                        <Palette className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-accent-light">{language === 'ar' ? 'استوديو التصميم' : 'Design Studio'}</h3>
                        <p className="text-xs opacity-75">{language === 'ar' ? 'أدوات إبداعية' : 'Creative Tools'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent-light rounded-full animate-pulse"></div>
                      <span className="text-xs text-accent-light">{language === 'ar' ? 'نشط' : 'Active'}</span>
                    </div>
                  </div>
                </div>

                {/* Design Tabs */}
                <div className="bg-gray-50 px-4 py-2">
                  <div className="flex gap-2">
                    {designServices.map((service) => (
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

                {/* Design Content */}
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Logo Design Tab */}
                      {activeTab === 'logo' && (
                        <div className="text-center">
                          <div className="mb-4">
                            {logoDesigns[selectedLogo].logo}
                          </div>
                          <h4 className="font-bold text-primary mb-2">{logoDesigns[selectedLogo].name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{logoDesigns[selectedLogo].concept}</p>
                          <div className="flex justify-center gap-2 mb-3">
                            {logoDesigns[selectedLogo].colors.map((color, idx) => (
                              <div key={idx} className="w-4 h-4 rounded-full border" style={{backgroundColor: color}}></div>
                            ))}
                          </div>
                          <span className="bg-accent text-white px-3 py-1 rounded-full text-xs">
                            {logoDesigns[selectedLogo].style}
                          </span>
                        </div>
                      )}

                      {/* Color Palette Tab */}
                      {activeTab === 'color' && (
                        <div>
                          <h4 className="font-bold text-primary mb-3">{colorPalettes[selectedPalette].name}</h4>
                          <div className="grid grid-cols-5 gap-2 mb-4">
                            {colorPalettes[selectedPalette].colors.map((color, idx) => (
                              <div key={idx} className="relative group">
                                <div 
                                  className="w-full h-12 rounded-lg cursor-pointer transition-transform hover:scale-110"
                                  style={{backgroundColor: color}}
                                  onClick={() => copyToClipboard(color, `color-${idx}`)}
                                ></div>
                                <div className="text-xs text-center mt-1 font-mono">{color}</div>
                                {copied === `color-${idx}` && (
                                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs">
                                    <Check className="w-3 h-3" />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{colorPalettes[selectedPalette].mood[language]}</p>
                          <p className="text-xs text-gray-500">{colorPalettes[selectedPalette].psychology[language]}</p>
                        </div>
                      )}

                      {/* Typography Tab */}
                      {activeTab === 'font' && (
                        <div>
                          <h4 className="font-bold text-primary mb-3" style={{fontFamily: fontPairings[selectedFont].heading}}>
                            {fontPairings[selectedFont].preview.heading}
                          </h4>
                          <p className="text-sm text-gray-600 mb-3" style={{fontFamily: fontPairings[selectedFont].body}}>
                            {fontPairings[selectedFont].preview.body}
                          </p>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="text-sm">
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-600">{language === 'ar' ? 'العنوان:' : 'Heading:'}</span>
                                <span className="font-medium">{fontPairings[selectedFont].heading}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">{language === 'ar' ? 'النص:' : 'Body:'}</span>
                                <span className="font-medium">{fontPairings[selectedFont].body}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
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

      {/* Color Palette Generator */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {language === 'ar' ? 'مولد لوحات الألوان التفاعلي' : 'Interactive Color Palette Generator'}
          </motion.h2>

          <div className="grid lg:grid-cols-4 gap-6">
            {colorPalettes.map((palette, index) => (
              <motion.div
                key={palette.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  selectedPalette === index ? 'ring-4 ring-accent scale-105' : ''
                }`}
                onClick={() => setSelectedPalette(index)}
              >
                {/* Color Strips */}
                <div className="h-32 flex">
                  {palette.colors.map((color, idx) => (
                    <div 
                      key={idx} 
                      className="flex-1 relative group"
                      style={{backgroundColor: color}}
                    >
                      <button 
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-20"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(color, `palette-${index}-${idx}`);
                        }}
                      >
                        {copied === `palette-${index}-${idx}` ? (
                          <Check className="w-4 h-4 text-white" />
                        ) : (
                          <Copy className="w-4 h-4 text-white" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>

                {/* Palette Info */}
                <div className="p-4">
                  <h3 className="font-bold text-primary mb-2">{palette.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{palette.mood[language]}</p>
                  <p className="text-xs text-gray-500">{palette.usage[language]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Typography Showcase */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {language === 'ar' ? 'أزواج الخطوط المثالية' : 'Perfect Font Pairings'}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {fontPairings.map((pairing, index) => (
              <motion.div
                key={pairing.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:ring-4 hover:ring-accent hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-100 h-full flex flex-col"
                onClick={() => setSelectedFont(index)}
              >
                {/* Font Preview */}
                <div className="mb-6 flex-grow">
                  <h3 className="text-2xl font-bold text-primary mb-3" style={{fontFamily: pairing.heading}}>
                    {pairing.preview.heading}
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{fontFamily: pairing.body}}>
                    {pairing.preview.body}
                  </p>
                </div>

                {/* Font Details */}
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-primary mb-3">{pairing.name}</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <span className="text-gray-600 block mb-1">{language === 'ar' ? 'العنوان:' : 'Heading:'}</span>
                      <p className="font-medium text-accent">{pairing.heading}</p>
                    </div>
                    <div>
                      <span className="text-gray-600 block mb-1">{language === 'ar' ? 'النص:' : 'Body:'}</span>
                      <p className="font-medium text-accent">{pairing.body}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary text-accent-light px-3 py-1 rounded-full text-xs">
                      {pairing.mood[language]}
                    </span>
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-xs">
                      {pairing.style}
                    </span>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-gray-500">{pairing.usage[language]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Design Process */}
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

      {/* Logo Showcase */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {language === 'ar' ? 'معرض الشعارات' : 'Logo Gallery'}
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {logoDesigns.map((logo, index) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:ring-4 hover:ring-accent hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedLogo(index)}
              >
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    {logo.logo}
                  </div>
                  
                  <h3 className="text-lg font-bold text-primary mb-2">{logo.name}</h3>
                  <p className="text-accent font-medium mb-2">{logo.industry}</p>
                  <p className="text-sm text-gray-600 mb-4">{logo.concept}</p>
                  
                  {/* Color Palette */}
                  <div className="flex justify-center gap-2 mb-4">
                    {logo.colors.map((color, idx) => (
                      <div key={idx} className="w-6 h-6 rounded-full border-2 border-gray-200" style={{backgroundColor: color}}></div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="bg-primary text-accent-light px-3 py-1 rounded-full text-xs">
                      {logo.style}
                    </span>
                    <span className="text-sm text-gray-600">
                      {logo.variations} {language === 'ar' ? 'تنويعات' : 'variations'}
                    </span>
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
              <div className="text-6xl mb-6">🎨</div>
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
                  <Paintbrush className="w-5 h-5" />
                  {c.startDesign}
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

export default LogoColorFontSelection;