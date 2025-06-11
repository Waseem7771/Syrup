import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { useLanguage } from '../../contexts/LanguageContext';
import incubatorHeaderImage from '../../assets/images/9.png';
import {
  Building,
  Users,
  Coffee,
  Wifi,
  Monitor,
  Calendar,
  Clock,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Play,
  Pause,
  TrendingUp,
  Award,
  Target,
  Lightbulb,
  Brain,
  Network,
  Handshake,
  Globe,
  Briefcase,
  Camera,
  Video,
  Mic,
  Phone,
  Mail,
  Settings,
  Edit3,
  Share2,
  Heart,
  Bookmark,
  Search,
  Filter,
  Grid,
  Layout,
  Layers,
  Zap,
  Rocket,
  Crown,
  Gem,
  Shield,
  Eye,
  Download,
  Upload,
  FileText,
  Folder,
  Archive
} from 'lucide-react';

const IncubatorProgram: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeSpace, setActiveSpace] = useState(0);
  const [selectedStartup, setSelectedStartup] = useState(0);
  const [workspaceView, setWorkspaceView] = useState('overview');
  const [occupancyRate, setOccupancyRate] = useState(0);
  const [activeEvent, setActiveEvent] = useState(0);

  // Animate occupancy rate
  useEffect(() => {
    const timer = setTimeout(() => setOccupancyRate(85), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-cycle through spaces
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSpace(prev => (prev + 1) % workspaces.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      title: "Startup Incubator Program",
      subtitle: "Nurture your startup in our collaborative ecosystem with premium workspace, expert mentorship, and comprehensive business development support for Syrian entrepreneurs",
      
      // Overview
      overview: "Incubation Ecosystem",
      overviewDesc: "Our startup incubator provides early-stage Syrian entrepreneurs with the physical workspace, mentorship network, and business development resources needed to transform innovative ideas into sustainable businesses.",
      
      // Workspace
      workspaceTitle: "Premium Co-Working Spaces",
      
      // Community
      communityTitle: "Startup Community",
      
      // Services
      servicesTitle: "Incubation Services",
      
      // Events
      eventsTitle: "Community Events",
      
      // CTA
      ctaTitle: "Ready to Join Our Incubator?",
      ctaDesc: "Become part of Syria's most innovative startup community with access to world-class facilities, mentorship, and business development support.",
      
      // Buttons
      joinIncubator: "Join Incubator",
      tourFacilities: "Tour Facilities",
      meetCommunity: "Meet Community",
      getStarted: "Get Started"
    },
    ar: {
      title: "برنامج حاضنة الشركات الناشئة",
      subtitle: "اعتن بشركتك الناشئة في نظامنا البيئي التعاوني مع مساحة عمل مميزة وإرشاد خبراء ودعم شامل لتطوير الأعمال لرواد الأعمال السوريين",
      
      // Overview
      overview: "نظام الحضانة البيئي",
      overviewDesc: "توفر حاضنة الشركات الناشئة لدينا لرواد الأعمال السوريين في المراحل المبكرة مساحة العمل المادية وشبكة الإرشاد وموارد تطوير الأعمال اللازمة لتحويل الأفكار المبتكرة إلى أعمال مستدامة.",
      
      // Workspace
      workspaceTitle: "مساحات العمل المشترك المميزة",
      
      // Community
      communityTitle: "مجتمع الشركات الناشئة",
      
      // Services
      servicesTitle: "خدمات الحضانة",
      
      // Events
      eventsTitle: "فعاليات المجتمع",
      
      // CTA
      ctaTitle: "مستعد للانضمام إلى حاضنتنا؟",
      ctaDesc: "كن جزءاً من أكثر مجتمعات الشركات الناشئة ابتكاراً في سوريا مع الوصول إلى مرافق عالمية المستوى والإرشاد ودعم تطوير الأعمال.",
      
      // Buttons
      joinIncubator: "انضم للحاضنة",
      tourFacilities: "جولة في المرافق",
      meetCommunity: "تعرف على المجتمع",
      getStarted: "ابدأ الآن"
    }
  };

  const workspaces = [
    {
      id: 1,
      name: { en: 'Open Workspace', ar: 'مساحة العمل المفتوحة' },
      capacity: 40,
      current: 34,
      amenities: {
        en: ['High-speed WiFi', 'Standing desks', 'Printing station', 'Coffee bar'],
        ar: ['واي فاي عالي السرعة', 'مكاتب واقفة', 'محطة طباعة', 'بار القهوة']
      },
      price: { en: '$50/month', ar: '50 دولار/شهر' },
      image: (
        <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 relative overflow-hidden">
          <div className="absolute top-2 left-2 right-2 flex justify-between">
            <div className="w-8 h-6 bg-white rounded shadow-sm"></div>
            <div className="w-8 h-6 bg-white rounded shadow-sm"></div>
            <div className="w-8 h-6 bg-white rounded shadow-sm"></div>
          </div>
          <div className="absolute bottom-2 left-2 right-2 flex justify-between">
            <div className="w-8 h-6 bg-white rounded shadow-sm"></div>
            <div className="w-8 h-6 bg-white rounded shadow-sm"></div>
            <div className="w-8 h-6 bg-white rounded shadow-sm"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Monitor className="w-8 h-8 text-primary opacity-60" />
          </div>
        </div>
      )
    },
    {
      id: 2,
      name: { en: 'Private Offices', ar: 'مكاتب خاصة' },
      capacity: 12,
      current: 10,
      amenities: {
        en: ['Private meeting room', 'Phone booth', 'Storage space', 'Window view'],
        ar: ['غرفة اجتماعات خاصة', 'كابينة هاتف', 'مساحة تخزين', 'إطلالة نافذة']
      },
      price: { en: '$200/month', ar: '200 دولار/شهر' },
      image: (
        <div className="w-full h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-4 relative overflow-hidden">
          <div className="absolute top-2 left-2 w-16 h-12 bg-white rounded shadow-sm border-2 border-green-300"></div>
          <div className="absolute top-2 right-2 w-16 h-12 bg-white rounded shadow-sm border-2 border-green-300"></div>
          <div className="absolute bottom-2 left-2 w-16 h-12 bg-white rounded shadow-sm border-2 border-green-300"></div>
          <div className="absolute bottom-2 right-2 w-16 h-12 bg-white rounded shadow-sm border-2 border-green-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Building className="w-8 h-8 text-primary opacity-60" />
          </div>
        </div>
      )
    },
    {
      id: 3,
      name: { en: 'Meeting Rooms', ar: 'غرف الاجتماعات' },
      capacity: 8,
      current: 6,
      amenities: {
        en: ['Video conferencing', 'Whiteboard', 'Projector', 'Sound system'],
        ar: ['مؤتمرات فيديو', 'لوحة بيضاء', 'جهاز عرض', 'نظام صوتي']
      },
      price: { en: '$25/hour', ar: '25 دولار/ساعة' },
      image: (
        <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-4 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-12 bg-white rounded shadow-md border-2 border-purple-300"></div>
          <div className="absolute top-2 left-2 right-2 h-3 bg-white rounded shadow-sm"></div>
          <div className="absolute bottom-2 left-2 w-6 h-6 bg-purple-300 rounded-full"></div>
          <div className="absolute bottom-2 left-10 w-6 h-6 bg-purple-300 rounded-full"></div>
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-purple-300 rounded-full"></div>
          <div className="absolute top-2 right-2 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
        </div>
      )
    },
    {
      id: 4,
      name: { en: 'Creative Studio', ar: 'الاستوديو الإبداعي' },
      capacity: 15,
      current: 12,
      amenities: {
        en: ['Photo equipment', 'Video setup', 'Audio recording', 'Editing stations'],
        ar: ['معدات تصوير', 'إعداد فيديو', 'تسجيل صوتي', 'محطات تحرير']
      },
      price: { en: '$35/hour', ar: '35 دولار/ساعة' },
      image: (
        <div className="w-full h-32 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-4 relative overflow-hidden">
          <div className="absolute top-2 left-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
            <Camera className="w-4 h-4 text-pink-500" />
          </div>
          <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
            <Video className="w-4 h-4 text-pink-500" />
          </div>
          <div className="absolute bottom-2 left-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
            <Mic className="w-4 h-4 text-pink-500" />
          </div>
          <div className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
            <Edit3 className="w-4 h-4 text-pink-500" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Lightbulb className="w-8 h-8 text-primary opacity-60" />
          </div>
        </div>
      )
    }
  ];

  const incubatorStartups = [
    {
      id: 1,
      name: 'AgriTech Solutions',
      industry: { en: 'AgriTech', ar: 'تقنية الزراعة' },
      stage: { en: 'Pre-Seed', ar: 'ما قبل البذرة' },
      founders: ['Amira Hassan', 'Nour Al-Din'],
      description: { 
        en: 'Smart irrigation systems for Syrian farmers using IoT sensors',
        ar: 'أنظمة ري ذكية للمزارعين السوريين باستخدام أجهزة استشعار إنترنت الأشياء'
      },
      metrics: {
        team: 4,
        months: 6,
        traction: { en: '50 farmers', ar: '50 مزارع' }
      },
      logo: (
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold">
          AS
        </div>
      ),
      workspace: { en: 'Private Office #3', ar: 'مكتب خاص #3' }
    },
    {
      id: 2,
      name: 'LearnHub Syria',
      industry: { en: 'EdTech', ar: 'تقنية التعليم' },
      stage: { en: 'Seed', ar: 'البذرة' },
      founders: ['Omar Khoury', 'Layla Mansour'],
      description: { 
        en: 'Online learning platform for Syrian students with AR features',
        ar: 'منصة تعلم عبر الإنترنت للطلاب السوريين مع ميزات الواقع المعزز'
      },
      metrics: {
        team: 8,
        months: 12,
        traction: { en: '1,000 students', ar: '1,000 طالب' }
      },
      logo: (
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
          LH
        </div>
      ),
      workspace: { en: 'Open Workspace', ar: 'مساحة العمل المفتوحة' }
    },
    {
      id: 3,
      name: 'HealthConnect',
      industry: { en: 'HealthTech', ar: 'تقنية الصحة' },
      stage: { en: 'Pre-Seed', ar: 'ما قبل البذرة' },
      founders: ['Dr. Yasmin Al-Ahmad'],
      description: { 
        en: 'Telemedicine platform connecting rural patients with specialists',
        ar: 'منصة طب عن بُعد تربط المرضى الريفيين بالأخصائيين'
      },
      metrics: {
        team: 3,
        months: 4,
        traction: { en: '200 consultations', ar: '200 استشارة' }
      },
      logo: (
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold">
          HC
        </div>
      ),
      workspace: { en: 'Private Office #1', ar: 'مكتب خاص #1' }
    },
    {
      id: 4,
      name: 'GreenEnergy Syria',
      industry: { en: 'CleanTech', ar: 'التقنية النظيفة' },
      stage: { en: 'Seed', ar: 'البذرة' },
      founders: ['Khaled Rashid', 'Maya Saleh'],
      description: { 
        en: 'Solar energy solutions for Syrian households and businesses',
        ar: 'حلول الطاقة الشمسية للأسر والشركات في سوريا'
      },
      metrics: {
        team: 6,
        months: 10,
        traction: { en: '100 installations', ar: '100 تركيب' }
      },
      logo: (
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold">
          GE
        </div>
      ),
      workspace: { en: 'Private Office #2', ar: 'مكتب خاص #2' }
    }
  ];

  const incubationServices = [
    {
      id: 'workspace',
      title: { en: 'Premium Workspace', ar: 'مساحة عمل مميزة' },
      icon: <Building className="w-8 h-8" />,
      color: 'from-primary to-primary-dark',
      description: { 
        en: 'Flexible co-working spaces, private offices, and specialized studios for creative work',
        ar: 'مساحات عمل مشتركة مرنة ومكاتب خاصة واستوديوهات متخصصة للعمل الإبداعي'
      },
      features: {
        en: ['24/7 access', 'High-speed internet', 'Meeting rooms', 'Kitchen facilities'],
        ar: ['وصول على مدار الساعة', 'إنترنت عالي السرعة', 'غرف اجتماعات', 'مرافق مطبخ']
      }
    },
    {
      id: 'mentorship',
      title: { en: 'Expert Mentorship', ar: 'إرشاد الخبراء' },
      icon: <Users className="w-8 h-8" />,
      color: 'from-primary to-accent',
      description: { 
        en: 'One-on-one guidance from successful entrepreneurs and industry experts',
        ar: 'توجيه فردي من رواد الأعمال الناجحين وخبراء الصناعة'
      },
      features: {
        en: ['Weekly mentoring sessions', 'Industry expert network', 'Peer-to-peer learning', 'Success tracking'],
        ar: ['جلسات إرشاد أسبوعية', 'شبكة خبراء الصناعة', 'التعلم بين الأقران', 'تتبع النجاح']
      }
    },
    {
      id: 'development',
      title: { en: 'Business Development', ar: 'تطوير الأعمال' },
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-accent to-accent-dark',
      description: { 
        en: 'Comprehensive business development support from idea to market launch',
        ar: 'دعم شامل لتطوير الأعمال من الفكرة إلى إطلاق السوق'
      },
      features: {
        en: ['Business model development', 'Market research', 'Financial planning', 'Legal support'],
        ar: ['تطوير نموذج العمل', 'بحث السوق', 'التخطيط المالي', 'الدعم القانوني']
      }
    },
    {
      id: 'networking',
      title: { en: 'Community & Networking', ar: 'المجتمع والتواصل' },
      icon: <Network className="w-8 h-8" />,
      color: 'from-primary-dark to-accent',
      description: { 
        en: 'Access to startup community, investors, and business partnership opportunities',
        ar: 'الوصول إلى مجتمع الشركات الناشئة والمستثمرين وفرص الشراكة التجارية'
      },
      features: {
        en: ['Monthly networking events', 'Investor pitch sessions', 'Partner matching', 'Alumni network'],
        ar: ['فعاليات تواصل شهرية', 'جلسات عرض المستثمرين', 'مطابقة الشركاء', 'شبكة الخريجين']
      }
    }
  ];

  const communityEvents = [
    {
      id: 1,
      title: { en: 'Startup Pitch Night', ar: 'ليلة عرض الشركات الناشئة' },
      date: { en: 'Every Friday 7PM', ar: 'كل جمعة 7 مساءً' },
      type: { en: 'Pitch Competition', ar: 'مسابقة عرض' },
      attendees: 50,
      description: { 
        en: 'Weekly pitch competition where startups present their ideas to investors and community',
        ar: 'مسابقة عرض أسبوعية حيث تقدم الشركات الناشئة أفكارها للمستثمرين والمجتمع'
      }
    },
    {
      id: 2,
      title: { en: 'Tech Talk Tuesday', ar: 'حديث التقنية الثلاثاء' },
      date: { en: 'Every Tuesday 6PM', ar: 'كل ثلاثاء 6 مساءً' },
      type: { en: 'Knowledge Sharing', ar: 'مشاركة المعرفة' },
      attendees: 30,
      description: { 
        en: 'Technical workshops and presentations by industry experts and startup founders',
        ar: 'ورش عمل تقنية وعروض تقديمية من خبراء الصناعة ومؤسسي الشركات الناشئة'
      }
    },
    {
      id: 3,
      title: { en: 'Mentor Meet & Greet', ar: 'لقاء والتعرف على الموجهين' },
      date: { en: 'First Monday Monthly', ar: 'الاثنين الأول شهرياً' },
      type: { en: 'Networking', ar: 'تواصل' },
      attendees: 40,
      description: { 
        en: 'Monthly networking event to connect startups with potential mentors and advisors',
        ar: 'فعالية تواصل شهرية لربط الشركات الناشئة بالموجهين والمستشارين المحتملين'
      }
    }
  ];

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={incubatorHeaderImage}
      />

      {/* Incubation Ecosystem Overview */}
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
              
              {/* Incubator Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">25+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'شركة ناشئة نشطة' : 'Active Startups'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent to-accent-dark rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'مساحات عمل' : 'Workspace Types'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-dark to-accent rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">15+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'موجه خبير' : 'Expert Mentors'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent-dark to-primary rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">85%</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'معدل الإشغال' : 'Occupancy Rate'}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Building className="w-5 h-5" />
                  {c.joinIncubator}
                </button>
                <button 
                  className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  {c.tourFacilities}
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
              {/* Workspace Dashboard */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-accent overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center">
                        <Building className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-accent-light">{language === 'ar' ? 'لوحة مساحة العمل' : 'Workspace Dashboard'}</h3>
                        <p className="text-xs opacity-75">{language === 'ar' ? 'إشغال الوقت الفعلي' : 'Real-time Occupancy'}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-accent-light">{occupancyRate}%</div>
                      <div className="text-xs opacity-75">{language === 'ar' ? 'مشغول' : 'Occupied'}</div>
                    </div>
                  </div>
                </div>

                {/* Workspace Overview */}
                <div className="p-6">
                  {/* Occupancy Progress */}
                  <div className="mb-6">
                    <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div 
                        className="bg-gradient-to-r from-primary to-accent h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${occupancyRate}%` }}
                        transition={{ duration: 2, delay: 0.5 }}
                      ></motion.div>
                    </div>
                  </div>

                  {/* Active Workspaces */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {workspaces.map((space, index) => (
                      <div 
                        key={space.id}
                        className={`p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                          activeSpace === index ? 'bg-gradient-to-br from-primary to-accent text-white' : 'bg-gray-50 text-gray-600'
                        }`}
                        onClick={() => setActiveSpace(index)}
                      >
                        <div className="text-center">
                          <div className="text-sm font-medium mb-1">{space.name[language]}</div>
                          <div className="text-xs">{space.current}/{space.capacity}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Current Activity */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-primary">{language === 'ar' ? 'النشاط الحالي' : 'Current Activity'}</span>
                    </div>
                    <div className="text-xs text-gray-600 mb-1">
                      {language === 'ar' ? 'اجتماع فريق AgriTech في غرفة الاجتماعات A' : 'AgriTech team meeting in Conference Room A'}
                    </div>
                    <div className="text-xs text-gray-500">
                      {language === 'ar' ? 'ينتهي في 30 دقيقة' : 'Ends in 30 minutes'}
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
                <Coffee className="w-6 h-6" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -left-6 bottom-16 bg-primary text-accent-light p-3 rounded-2xl shadow-xl"
              >
                <Lightbulb className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Premium Co-Working Spaces */}
      <Section background="light">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.workspaceTitle}
          </motion.h2>

          {/* Workspace Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
              <div className="flex gap-2">
                {workspaces.map((space, index) => (
                  <button
                    key={space.id}
                    onClick={() => setActiveSpace(index)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeSpace === index
                        ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      <span className="font-medium text-sm">{space.name[language]}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Workspace Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSpace}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Workspace Info */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white">
                      <Building className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{workspaces[activeSpace].name[language]}</h3>
                      <p className="text-accent font-medium">{workspaces[activeSpace].price[language]}</p>
                    </div>
                  </div>
                  
                  {/* Capacity */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-primary">{language === 'ar' ? 'الإشغال الحالي' : 'Current Occupancy'}</span>
                      <span className="text-accent font-bold">
                        {workspaces[activeSpace].current}/{workspaces[activeSpace].capacity}
                      </span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all duration-500"
                        style={{ width: `${(workspaces[activeSpace].current / workspaces[activeSpace].capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="font-bold text-primary mb-3">{language === 'ar' ? 'المرافق المتاحة' : 'Available Amenities'}</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {workspaces[activeSpace].amenities[language].map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700 text-sm">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="bg-primary hover:bg-primary-dark text-accent-light px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                    {language === 'ar' ? 'احجز الآن' : 'Book Now'}
                  </button>
                </div>

                {/* Workspace Visual */}
                <div>
                  <div className="mb-6">
                    {workspaces[activeSpace].image}
                  </div>
                  
                  {/* Workspace Features */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-bold text-primary mb-3">{language === 'ar' ? 'الميزات المتقدمة' : 'Advanced Features'}</h5>
                    <div className="space-y-2">
                      {[
                        { en: '24/7 secured access', ar: 'وصول آمن على مدار الساعة' },
                        { en: 'High-speed fiber internet', ar: 'إنترنت ليفي عالي السرعة' },
                        { en: 'Climate controlled environment', ar: 'بيئة مكيفة' },
                        { en: 'Professional cleaning service', ar: 'خدمة تنظيف مهنية' }
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-gray-700 text-sm">{feature[language]}</span>
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

      {/* Startup Community */}
      <Section background="white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.communityTitle}
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {incubatorStartups.map((startup, index) => (
              <motion.div
                key={startup.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 ${
                  selectedStartup === index ? 'ring-4 ring-accent' : ''
                }`}
                onClick={() => setSelectedStartup(index)}
              >
                <div className="flex items-start gap-4">
                  {/* Startup Logo */}
                  {startup.logo}
                  
                  {/* Startup Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-primary">{startup.name}</h3>
                      <span className="bg-accent text-white px-2 py-1 rounded-full text-xs">
                        {startup.stage[language]}
                      </span>
                    </div>
                    <p className="text-accent font-medium mb-2">{startup.industry[language]}</p>
                    <p className="text-sm text-gray-600 mb-3">{startup.description[language]}</p>
                    
                    {/* Founders */}
                    <div className="mb-3">
                      <span className="text-xs text-gray-500">{language === 'ar' ? 'المؤسسون:' : 'Founders:'}</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {startup.founders.map((founder, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {founder}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Metrics */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{startup.metrics.team} {language === 'ar' ? 'أعضاء' : 'members'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{startup.metrics.months} {language === 'ar' ? 'أشهر' : 'months'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{startup.metrics.traction[language]}</span>
                      </div>
                    </div>

                    {/* Workspace */}
                    <div className="text-xs text-gray-500">
                      <MapPin className="w-3 h-3 inline mr-1" />
                      {startup.workspace[language]}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Incubation Services */}
      <Section background="light">
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

          <div className="grid lg:grid-cols-2 gap-8">
            {incubationServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{service.title[language]}</h3>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">{service.description[language]}</p>
                
                <div className="space-y-2">
                  {service.features[language].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Community Events */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.eventsTitle}
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {communityEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  activeEvent === index ? 'ring-4 ring-accent' : ''
                }`}
                onClick={() => setActiveEvent(index)}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-primary mb-2">{event.title[language]}</h3>
                  <p className="text-accent font-medium mb-1">{event.date[language]}</p>
                  <p className="text-sm text-gray-600 mb-4">{event.description[language]}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="bg-primary text-accent-light px-3 py-1 rounded-full text-xs">
                      {event.type[language]}
                    </span>
                    <span className="text-sm text-gray-600">
                      <Users className="w-4 h-4 inline mr-1" />
                      {event.attendees}
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
              <div className="text-6xl mb-6">🏢</div>
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
                  <Building className="w-5 h-5" />
                  {c.joinIncubator}
                </button>
                <button 
                  className="bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  {c.tourFacilities}
                </button>
                <button 
                  className="bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-20 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  {c.meetCommunity}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default IncubatorProgram;
