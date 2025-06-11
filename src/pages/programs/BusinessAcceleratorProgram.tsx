import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { useLanguage } from '../../contexts/LanguageContext';
import acceleratorHeaderImage from '../../assets/images/14.png';
import {
  Rocket,
  TrendingUp,
  Users,
  Target,
  Award,
  Zap,
  Brain,
  DollarSign,
  Calendar,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Play,
  Pause,
  BarChart,
  PieChart,
  LineChart,
  Building,
  Globe,
  Lightbulb,
  Briefcase,
  Network,
  Handshake,
  Trophy,
  Crown,
  Gem,
  Shield,
  Heart,
  Eye,
  Camera,
  Video,
  Mic,
  Share2,
  Download,
  Upload,
  Edit3,
  Settings,
  Filter,
  Search,
  MapPin,
  Phone,
  Mail,
  Coffee,
  BookOpen,
  FileText,
  Folder,
  Archive,
  Tag,
  Bookmark,
  Link,
  ExternalLink,
  MessageSquare,
  ThumbsUp,
  User,
  UserPlus,
  Layers,
  Grid,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';

const BusinessAcceleratorProgram: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeStage, setActiveStage] = useState(0);
  const [selectedMentor, setSelectedMentor] = useState(0);
  const [pitchSimulator, setPitchSimulator] = useState(false);
  const [programProgress, setProgramProgress] = useState(0);
  const [activeStartup, setActiveStartup] = useState(0);

  // Animate program progress
  useEffect(() => {
    const timer = setTimeout(() => setProgramProgress(65), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-cycle through stages
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage(prev => (prev + 1) % acceleratorStages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      title: "Business Accelerator Program",
      subtitle: "Transform your startup into a scalable business through our comprehensive 12-week accelerator program designed specifically for Syrian entrepreneurs",
      
      // Overview
      overview: "Accelerator Journey",
      overviewDesc: "Our intensive business accelerator program provides startups in Syria with the mentorship, resources, and investor connections needed to scale rapidly and achieve sustainable growth in competitive markets.",
      
      // Program
      programTitle: "12-Week Acceleration Program",
      
      // Mentors
      mentorsTitle: "Expert Mentor Network",
      
      // Startups
      startupsTitle: "Success Stories",
      
      // Pitch
      pitchTitle: "Investor Pitch Day",
      
      // CTA
      ctaTitle: "Ready to Accelerate Your Startup?",
      ctaDesc: "Join our next cohort and transform your business idea into a thriving, investment-ready company with expert guidance and resources.",
      
      // Buttons
      applyNow: "Apply Now",
      viewDemo: "View Demo Day",
      meetMentors: "Meet Mentors",
      getStarted: "Get Started"
    },
    ar: {
      title: "برنامج تسريع الأعمال",
      subtitle: "حول شركتك الناشئة إلى عمل قابل للتوسع من خلال برنامج المسرع الشامل لمدة 12 أسبوعاً المصمم خصيصاً للمؤسسين السوريين",
      
      // Overview
      overview: "رحلة المسرع",
      overviewDesc: "يوفر برنامج مسرع الأعمال المكثف لدينا للشركات الناشئة السورية الإرشاد والموارد وصلات المستثمرين اللازمة للنمو السريع وتحقيق النمو المستدام في الأسواق التنافسية.",
      
      // Program
      programTitle: "برنامج التسريع لمدة 12 أسبوعاً",
      
      // Mentors
      mentorsTitle: "شبكة الموجهين الخبراء",
      
      // Startups
      startupsTitle: "قصص النجاح",
      
      // Pitch
      pitchTitle: "يوم عرض المستثمرين",
      
      // CTA
      ctaTitle: "مستعد لتسريع شركتك الناشئة؟",
      ctaDesc: "انضم إلى مجموعتنا التالية وحول فكرة عملك إلى شركة مزدهرة وجاهزة للاستثمار مع التوجيه والموارد المتخصصة.",
      
      // Buttons
      applyNow: "قدم الآن",
      viewDemo: "عرض يوم العرض",
      meetMentors: "تعرف على الموجهين",
      getStarted: "ابدأ الآن"
    }
  };

  const acceleratorStages = [
    {
      id: 1,
      title: { en: 'Discovery & Validation', ar: 'الاكتشاف والتحقق' },
      weeks: { en: 'Weeks 1-3', ar: 'الأسابيع 1-3' },
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'from-primary to-primary-dark',
      description: { 
        en: 'Validate your business idea, identify target market, and refine your value proposition',
        ar: 'التحقق من فكرة عملك وتحديد السوق المستهدف وتحسين عرض القيمة الخاص بك'
      },
      activities: {
        en: ['Market research & analysis', 'Customer interviews', 'Competitor analysis', 'Business model refinement'],
        ar: ['بحث وتحليل السوق', 'مقابلات العملاء', 'تحليل المنافسين', 'تحسين نموذج العمل']
      },
      deliverables: {
        en: ['Market validation report', 'Customer persona definition', 'Refined business model'],
        ar: ['تقرير التحقق من السوق', 'تعريف شخصية العميل', 'نموذج العمل المحسن']
      }
    },
    {
      id: 2,
      title: { en: 'Product Development', ar: 'تطوير المنتج' },
      weeks: { en: 'Weeks 4-6', ar: 'الأسابيع 4-6' },
      icon: <Settings className="w-8 h-8" />,
      color: 'from-primary to-accent',
      description: { 
        en: 'Build your minimum viable product (MVP) and establish product-market fit',
        ar: 'بناء الحد الأدنى من المنتج القابل للتطبيق (MVP) وإنشاء ملاءمة المنتج للسوق'
      },
      activities: {
        en: ['MVP development', 'Product testing', 'User feedback collection', 'Iteration and improvement'],
        ar: ['تطوير MVP', 'اختبار المنتج', 'جمع تعليقات المستخدمين', 'التكرار والتحسين']
      },
      deliverables: {
        en: ['Working MVP', 'User testing results', 'Product roadmap'],
        ar: ['MVP يعمل', 'نتائج اختبار المستخدم', 'خارطة طريق المنتج']
      }
    },
    {
      id: 3,
      title: { en: 'Business Strategy', ar: 'استراتيجية الأعمال' },
      weeks: { en: 'Weeks 7-9', ar: 'الأسابيع 7-9' },
      icon: <Target className="w-8 h-8" />,
      color: 'from-accent to-accent-dark',
      description: { 
        en: 'Develop comprehensive business strategy, financial planning, and growth framework',
        ar: 'تطوير استراتيجية الأعمال الشاملة والتخطيط المالي وإطار النمو'
      },
      activities: {
        en: ['Financial modeling', 'Growth strategy planning', 'Operations optimization', 'Legal structure setup'],
        ar: ['النمذجة المالية', 'تخطيط استراتيجية النمو', 'تحسين العمليات', 'إعداد الهيكل القانوني']
      },
      deliverables: {
        en: ['Business plan', 'Financial projections', 'Growth strategy document'],
        ar: ['خطة العمل', 'التوقعات المالية', 'وثيقة استراتيجية النمو']
      }
    },
    {
      id: 4,
      title: { en: 'Scale & Investment', ar: 'التوسع والاستثمار' },
      weeks: { en: 'Weeks 10-12', ar: 'الأسابيع 10-12' },
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-primary-dark to-accent',
      description: { 
        en: 'Prepare for scaling, investor presentations, and sustainable growth execution',
        ar: 'الاستعداد للتوسع وعروض المستثمرين وتنفيذ النمو المستدام'
      },
      activities: {
        en: ['Pitch deck creation', 'Investor meetings', 'Scaling preparation', 'Demo day preparation'],
        ar: ['إنشاء عرض الاستثمار', 'اجتماعات المستثمرين', 'التحضير للتوسع', 'التحضير ليوم العرض']
      },
      deliverables: {
        en: ['Investment-ready pitch deck', 'Investor pipeline', 'Scaling roadmap'],
        ar: ['عرض استثماري جاهز', 'خط أنابيب المستثمرين', 'خارطة طريق التوسع']
      }
    }
  ];

  const mentorNetwork = [
    {
      id: 1,
      name: 'Sarah Al-Khatib',
      title: { en: 'Tech Entrepreneur', ar: 'رائدة أعمال تقنية' },
      expertise: { en: 'SaaS, AI, Product Strategy', ar: 'SaaS، الذكاء الاصطناعي، استراتيجية المنتج' },
      experience: { en: '15+ years', ar: '15+ سنة' },
      companies: ['TechFlow', 'DataVision', 'StartupLab'],
      description: { 
        en: 'Former CTO of multiple successful startups, expert in scaling tech companies',
        ar: 'رئيسة تقنية سابقة لعدة شركات ناشئة ناجحة، خبيرة في توسيع الشركات التقنية'
      },
      avatar: '👩‍💼',
      rating: 4.9,
      sessions: 150
    },
    {
      id: 2,
      name: 'Omar Mansour',
      title: { en: 'Investment Director', ar: 'مدير الاستثمار' },
      expertise: { en: 'Venture Capital, Financial Planning', ar: 'رأس المال المغامر، التخطيط المالي' },
      experience: { en: '12+ years', ar: '12+ سنة' },
      companies: ['Levant Ventures', 'MENA Capital', 'Growth Partners'],
      description: { 
        en: 'Led investments in 50+ startups across MENA region, expert in fundraising',
        ar: 'قاد الاستثمارات في أكثر من 50 شركة ناشئة عبر منطقة الشرق الأوسط وشمال أفريقيا، خبير في جمع التمويل'
      },
      avatar: '👨‍💼',
      rating: 4.8,
      sessions: 200
    },
    {
      id: 3,
      name: 'Layla Habib',
      title: { en: 'Marketing Strategist', ar: 'استراتيجية التسويق' },
      expertise: { en: 'Digital Marketing, Brand Growth', ar: 'التسويق الرقمي، نمو العلامة التجارية' },
      experience: { en: '10+ years', ar: '10+ سنوات' },
      companies: ['BrandBoost', 'Digital Edge', 'Growth Marketing'],
      description: { 
        en: 'Built marketing strategies for 100+ startups, expert in customer acquisition',
        ar: 'بنت استراتيجيات التسويق لأكثر من 100 شركة ناشئة، خبيرة في اكتساب العملاء'
      },
      avatar: '👩‍🎨',
      rating: 4.9,
      sessions: 180
    },
    {
      id: 4,
      name: 'Khalil Ahmad',
      title: { en: 'Operations Expert', ar: 'خبير العمليات' },
      expertise: { en: 'Operations, Supply Chain, Logistics', ar: 'العمليات، سلسلة التوريد، اللوجستيات' },
      experience: { en: '18+ years', ar: '18+ سنة' },
      companies: ['OptiFlow', 'SupplyChain Pro', 'Logistics Plus'],
      description: { 
        en: 'Optimized operations for Fortune 500 companies, expert in scaling operations',
        ar: 'حسن العمليات لشركات Fortune 500، خبير في توسيع العمليات'
      },
      avatar: '👨‍🔧',
      rating: 4.7,
      sessions: 120
    }
  ];

  const successStartups = [
    {
      id: 1,
      name: 'TechFlow Syria',
      industry: { en: 'FinTech', ar: 'التقنية المالية' },
      founder: 'Ahmad Khalil',
      description: { 
        en: 'Digital payment platform serving 50,000+ users across Syria',
        ar: 'منصة دفع رقمية تخدم أكثر من 50,000 مستخدم عبر سوريا'
      },
      metrics: {
        funding: '$500K',
        users: '50,000+',
        growth: '300%'
      },
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
          TF
        </div>
      ),
      stage: { en: 'Series A', ar: 'الجولة A' }
    },
    {
      id: 2,
      name: 'EduSpark',
      industry: { en: 'EdTech', ar: 'تقنية التعليم' },
      founder: 'Fatima Al-Zahra',
      description: { 
        en: 'Online learning platform for Syrian students and professionals',
        ar: 'منصة تعلم عبر الإنترنت للطلاب والمهنيين السوريين'
      },
      metrics: {
        funding: '$300K',
        users: '25,000+',
        growth: '250%'
      },
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
          ES
        </div>
      ),
      stage: { en: 'Seed', ar: 'البذرة' }
    },
    {
      id: 3,
      name: 'MedConnect',
      industry: { en: 'HealthTech', ar: 'تقنية الصحة' },
      founder: 'Dr. Youssef Hakim',
      description: { 
        en: 'Telemedicine platform connecting doctors with patients remotely',
        ar: 'منصة الطب عن بُعد تربط الأطباء بالمرضى عن بُعد'
      },
      metrics: {
        funding: '$750K',
        users: '15,000+',
        growth: '400%'
      },
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-xl">
          MC
        </div>
      ),
      stage: { en: 'Series A', ar: 'الجولة A' }
    }
  ];

  const programBenefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: { en: 'Expert Mentorship', ar: 'إرشاد الخبراء' },
      description: { en: '1-on-1 sessions with industry leaders', ar: 'جلسات فردية مع قادة الصناعة' }
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: { en: 'Funding Access', ar: 'الوصول للتمويل' },
      description: { en: 'Direct connections to investors', ar: 'صلات مباشرة مع المستثمرين' }
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: { en: 'Startup Network', ar: 'شبكة الشركات الناشئة' },
      description: { en: 'Connect with fellow entrepreneurs', ar: 'تواصل مع رواد الأعمال الآخرين' }
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: { en: 'Business Resources', ar: 'موارد الأعمال' },
      description: { en: 'Legal, accounting, and technical support', ar: 'الدعم القانوني والمحاسبي والتقني' }
    }
  ];

  const startPitchSimulator = () => {
    setPitchSimulator(true);
    setTimeout(() => setPitchSimulator(false), 3000);
  };

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={acceleratorHeaderImage}
      />

      {/* Accelerator Journey Overview */}
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
              
              {/* Program Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">12</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'أسبوع مكثف' : 'Intensive Weeks'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent to-accent-dark rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'شركة مسرعة' : 'Startups Accelerated'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-dark to-accent rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">$5M+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'استثمارات جُمعت' : 'Funding Raised'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent-dark to-primary rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">85%</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'معدل النجاح' : 'Success Rate'}</div>
                </div>
              </div>

              {/* Program Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {programBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-sm">{benefit.title[language]}</h4>
                      <p className="text-xs text-gray-600">{benefit.description[language]}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                  {c.applyNow}
                </button>
                <button 
                  onClick={startPitchSimulator}
                  className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
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
              {/* Accelerator Dashboard */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-accent overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-accent-light">{language === 'ar' ? 'لوحة المسرع' : 'Accelerator Dashboard'}</h3>
                        <p className="text-xs opacity-75">{language === 'ar' ? 'تقدم البرنامج' : 'Program Progress'}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-accent-light">{programProgress}%</div>
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
                        animate={{ width: `${programProgress}%` }}
                        transition={{ duration: 2, delay: 0.5 }}
                      ></motion.div>
                    </div>
                  </div>

                  {/* Current Stage */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-sm">{language === 'ar' ? 'المرحلة الحالية' : 'Current Stage'}</h4>
                        <p className="text-xs text-gray-600">{acceleratorStages[2].title[language]}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stage Timeline */}
                  <div className="space-y-2">
                    {acceleratorStages.map((stage, index) => (
                      <div key={stage.id} className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full ${
                          index < 3 ? 'bg-green-500' : 
                          index === 3 ? 'bg-accent animate-pulse' : 
                          'bg-gray-300'
                        }`}></div>
                        <div className="flex-1">
                          <div className={`text-xs ${
                            index < 3 ? 'text-green-600 font-medium' :
                            index === 3 ? 'text-accent font-medium' :
                            'text-gray-500'
                          }`}>
                            {stage.title[language]}
                          </div>
                          <div className="text-xs text-gray-400">{stage.weeks[language]}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Next Session */}
                  <div className="mt-4 bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-primary">{language === 'ar' ? 'الجلسة القادمة' : 'Next Session'}</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      {language === 'ar' ? 'جلسة توجيه مع سارة الخطيب' : 'Mentoring session with Sarah Al-Khatib'}
                    </div>
                    <div className="text-xs text-gray-500">{language === 'ar' ? 'غداً الساعة 2:00 مساءً' : 'Tomorrow at 2:00 PM'}</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-6 top-16 bg-accent text-white p-3 rounded-2xl shadow-xl"
              >
                <TrendingUp className="w-6 h-6" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -left-6 bottom-16 bg-primary text-accent-light p-3 rounded-2xl shadow-xl"
              >
                <Trophy className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 12-Week Program Stages */}
      <Section background="light">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.programTitle}
          </motion.h2>

          {/* Stage Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
              <div className="flex gap-2">
                {acceleratorStages.map((stage, index) => (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(index)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeStage === index
                        ? `bg-gradient-to-r ${stage.color} text-white shadow-md`
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {React.cloneElement(stage.icon, { className: "w-5 h-5" })}
                      <span className="font-medium text-sm">{stage.title[language]}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Stage Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Stage Info */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${acceleratorStages[activeStage].color} rounded-2xl flex items-center justify-center text-white`}>
                      {acceleratorStages[activeStage].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{acceleratorStages[activeStage].title[language]}</h3>
                      <p className="text-accent font-medium">{acceleratorStages[activeStage].weeks[language]}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {acceleratorStages[activeStage].description[language]}
                  </p>

                  {/* Activities */}
                  <div className="mb-6">
                    <h4 className="font-bold text-primary mb-3">{language === 'ar' ? 'الأنشطة الرئيسية' : 'Key Activities'}</h4>
                    <div className="space-y-2">
                      {acceleratorStages[activeStage].activities[language].map((activity, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="font-bold text-primary mb-4">{language === 'ar' ? 'المخرجات المتوقعة' : 'Expected Deliverables'}</h4>
                  <div className="space-y-4">
                    {acceleratorStages[activeStage].deliverables[language].map((deliverable, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4 border-l-4 border-accent">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {idx + 1}
                          </div>
                          <span className="font-medium text-gray-700">{deliverable}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stage Progress Visualization */}
                  <div className="mt-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4">
                    <h5 className="font-bold text-primary mb-3">{language === 'ar' ? 'تقدم المرحلة' : 'Stage Progress'}</h5>
                    <div className="space-y-2">
                      {['Discovery', 'Research', 'Development', 'Testing'].map((phase, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            idx <= activeStage ? 'bg-accent' : 'bg-gray-300'
                          }`}></div>
                          <span className={`text-sm ${
                            idx <= activeStage ? 'text-accent font-medium' : 'text-gray-500'
                          }`}>
                            {phase}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>

      {/* Mentor Network */}
      <Section background="white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.mentorsTitle}
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {mentorNetwork.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 ${
                  selectedMentor === index ? 'ring-4 ring-accent' : ''
                }`}
                onClick={() => setSelectedMentor(index)}
              >
                <div className="flex items-start gap-4">
                  {/* Mentor Avatar */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-2xl">
                    {mentor.avatar}
                  </div>
                  
                  {/* Mentor Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-1">{mentor.name}</h3>
                    <p className="text-accent font-medium mb-2">{mentor.title[language]}</p>
                    <p className="text-sm text-gray-600 mb-3">{mentor.description[language]}</p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {mentor.expertise[language].split(', ').map((skill, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Mentor Stats */}
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{mentor.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{mentor.sessions} {language === 'ar' ? 'جلسة' : 'sessions'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{mentor.experience[language]}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Companies */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm text-gray-600">{language === 'ar' ? 'الشركات:' : 'Companies:'}</span>
                    {mentor.companies.map((company, idx) => (
                      <span key={idx} className="bg-primary text-accent-light px-2 py-1 rounded text-xs">
                        {company}
                      </span>
                    ))}
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
            {c.startupsTitle}
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStartups.map((startup, index) => (
              <motion.div
                key={startup.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  activeStartup === index ? 'ring-4 ring-accent scale-105' : ''
                }`}
                onClick={() => setActiveStartup(index)}
              >
                <div className="text-center">
                  {/* Startup Logo */}
                  <div className="mb-4 flex justify-center">
                    {startup.logo}
                  </div>
                  
                  <h3 className="text-lg font-bold text-primary mb-2">{startup.name}</h3>
                  <p className="text-accent font-medium mb-1">{startup.industry[language]}</p>
                  <p className="text-sm text-gray-600 mb-4">{startup.description[language]}</p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{startup.metrics.funding}</div>
                      <div className="text-xs text-gray-600">{language === 'ar' ? 'التمويل' : 'Funding'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{startup.metrics.users}</div>
                      <div className="text-xs text-gray-600">{language === 'ar' ? 'المستخدمون' : 'Users'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{startup.metrics.growth}</div>
                      <div className="text-xs text-gray-600">{language === 'ar' ? 'النمو' : 'Growth'}</div>
                    </div>
                  </div>
                  
                  {/* Founder & Stage */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{startup.founder}</span>
                    <span className="bg-primary text-accent-light px-3 py-1 rounded-full text-xs">
                      {startup.stage[language]}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pitch Simulator */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.pitchTitle}
          </motion.h2>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Pitch Simulator Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-accent-light">{language === 'ar' ? 'محاكي عرض المستثمرين' : 'Investor Pitch Simulator'}</h3>
                    <p className="text-accent-light opacity-75">{language === 'ar' ? 'تدرب على عرضك أمام المستثمرين' : 'Practice your pitch to investors'}</p>
                  </div>
                </div>
                <button 
                  onClick={startPitchSimulator}
                  className="bg-accent-light hover:bg-white text-primary px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  {pitchSimulator ? (
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      {language === 'ar' ? 'جاري المحاكاة...' : 'Simulating...'}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Play className="w-5 h-5" />
                      {language === 'ar' ? 'ابدأ المحاكاة' : 'Start Simulation'}
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Pitch Content */}
            <div className="p-6">
              {pitchSimulator ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Video className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-2">
                    {language === 'ar' ? 'محاكاة العرض نشطة' : 'Pitch Simulation Active'}
                  </h4>
                  <p className="text-gray-600">
                    {language === 'ar' ? 'تمرن على عرضك مع ملاحظات فورية من خبراء الصناعة' : 'Practice your pitch with real-time feedback from industry experts'}
                  </p>
                </motion.div>
              ) : (
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Pitch Guidelines */}
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-4">
                      {language === 'ar' ? 'إرشادات العرض' : 'Pitch Guidelines'}
                    </h4>
                    <div className="space-y-3">
                      {[
                        { en: 'Problem & Solution (2 minutes)', ar: 'المشكلة والحل (دقيقتان)' },
                        { en: 'Market Opportunity (1 minute)', ar: 'فرصة السوق (دقيقة واحدة)' },
                        { en: 'Business Model (2 minutes)', ar: 'نموذج العمل (دقيقتان)' },
                        { en: 'Financials & Funding (1 minute)', ar: 'الماليات والتمويل (دقيقة واحدة)' }
                      ].map((guideline, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {idx + 1}
                          </div>
                          <span className="text-gray-700">{guideline[language]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Demo Day Stats */}
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-4">
                      {language === 'ar' ? 'إحصائيات يوم العرض' : 'Demo Day Stats'}
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">{language === 'ar' ? 'المستثمرون الحاضرون' : 'Attending Investors'}</span>
                          <span className="font-bold text-primary">25+</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">{language === 'ar' ? 'الشركات العارضة' : 'Presenting Startups'}</span>
                          <span className="font-bold text-primary">12</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">{language === 'ar' ? 'متوسط الاستثمار' : 'Average Investment'}</span>
                          <span className="font-bold text-primary">$150K</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">{language === 'ar' ? 'معدل النجاح' : 'Success Rate'}</span>
                          <span className="font-bold text-primary">75%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
                  <Rocket className="w-5 h-5" />
                  {c.applyNow}
                </button>
                <button 
                  className="bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  {c.meetMentors}
                </button>
                <button 
                  onClick={startPitchSimulator}
                  className="bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-20 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
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

export default BusinessAcceleratorProgram;