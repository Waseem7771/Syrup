import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { useLanguage } from '../../contexts/LanguageContext';
import freelancerHeaderImage from '../../assets/images/6.png';
import {
  Users,
  Network,
  Star,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  Code,
  Palette,
  Camera,
  Edit3,
  TrendingUp,
  Award,
  CheckCircle,
  MessageCircle,
  Heart,
  Share2,
  Filter,
  Search,
  Globe,
  Calendar,
  Video,
  Coffee,
  Target,
  Zap,
  Shield,
  Building,
  GraduationCap,
  BookOpen,
  Mic,
  Monitor,
  Smartphone,
  Database,
  Brain,
  Lightbulb,
  Activity,
  BarChart3,
  PieChart,
  Eye,
  Download,
  Plus,
  ArrowRight,
  ChevronRight,
  PlayCircle,
  UserPlus,
  UserCheck,
  Mail,
  Phone,
  Linkedin,
  Github,
  X,
  Instagram,
  Facebook
} from 'lucide-react';

const BuildFreelancerNetwork: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('development');
  const [selectedFreelancer, setSelectedFreelancer] = useState(0);
  const [networkSize, setNetworkSize] = useState(0);
  const [activeConnections, setActiveConnections] = useState(0);

  // Animate network stats
  useEffect(() => {
    const timer1 = setTimeout(() => setNetworkSize(2847), 1000);
    const timer2 = setTimeout(() => setActiveConnections(156), 1500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const content = {
    en: {
      title: "Building a Network of Freelancers and Talents",
      subtitle: "Comprehensive freelancer ecosystem - connecting Syrian talent with global opportunities through verified profiles, skill development, and collaborative community platform",
      
      // Overview
      overview: "Freelancer Community Hub",
      overviewDesc: "Our platform creates a thriving ecosystem where talented freelancers connect with opportunities, develop skills, and build lasting professional relationships. From project matching to skill development, we support every step of the freelancer journey.",
      
      // Network Features
      networkTitle: "Network Features",
      
      // Freelancer Categories
      categoriesTitle: "Freelancer Categories",
      
      // Success Stories
      successTitle: "Success Stories",
      
      // Community Events
      eventsTitle: "Community Events",
      
      // CTA
      ctaTitle: "Ready to Join Our Network?",
      ctaDesc: "Connect with thousands of skilled freelancers and businesses. Build your professional network and grow your career or business.",
      
      // Buttons
      joinNetwork: "Join Network",
      browseFreelancers: "Browse Freelancers",
      postProject: "Post Project",
      viewEvents: "View Events"
    },
    ar: {
      title: "بناء شبكة من المستقلين والمواهب",
      subtitle: "نظام بيئي شامل للمستقلين - ربط المواهب السورية بالفرص العالمية من خلال الملفات الشخصية المعتمدة وتطوير المهارات ومنصة المجتمع التعاوني",
      
      // Overview
      overview: "مركز مجتمع المستقلين",
      overviewDesc: "تنشئ منصتنا نظاماً بيئياً مزدهراً حيث يربط المستقلون الموهوبون بالفرص ويطورون المهارات ويبنون علاقات مهنية دائمة. من مطابقة المشاريع إلى تطوير المهارات، ندعم كل خطوة في رحلة المستقل.",
      
      // Network Features
      networkTitle: "ميزات الشبكة",
      
      // Freelancer Categories
      categoriesTitle: "فئات المستقلين",
      
      // Success Stories
      successTitle: "قصص النجاح",
      
      // Community Events
      eventsTitle: "فعاليات المجتمع",
      
      // CTA
      ctaTitle: "مستعد للانضمام إلى شبكتنا؟",
      ctaDesc: "تواصل مع آلاف المستقلين والشركات المهرة. ابن شبكتك المهنية وطور مسيرتك المهنية أو عملك.",
      
      // Buttons
      joinNetwork: "انضم للشبكة",
      browseFreelancers: "تصفح المستقلين",
      postProject: "انشر مشروع",
      viewEvents: "عرض الفعاليات"
    }
  };

  const freelancerCategories = [
    {
      id: 'development',
      title: { en: 'Development', ar: 'التطوير' },
      icon: <Code className="w-8 h-8" />,
      color: 'from-primary to-primary-dark',
      freelancerCount: 847,
      avgRate: '$35/hr',
      skills: {
        en: ['Frontend Development', 'Backend Development', 'Mobile Apps', 'Full Stack', 'DevOps', 'API Development'],
        ar: ['تطوير الواجهة الأمامية', 'تطوير الخلفية', 'تطبيقات الموبايل', 'Full Stack', 'DevOps', 'تطوير API']
      },
      availability: '89%'
    },
    {
      id: 'design',
      title: { en: 'Design', ar: 'التصميم' },
      icon: <Palette className="w-8 h-8" />,
      color: 'from-accent to-accent-dark',
      freelancerCount: 623,
      avgRate: '$28/hr',
      skills: {
        en: ['UI/UX Design', 'Graphic Design', 'Brand Identity', 'Web Design', 'Print Design', 'Illustration'],
        ar: ['تصميم UI/UX', 'التصميم الجرافيكي', 'هوية العلامة التجارية', 'تصميم الويب', 'تصميم الطباعة', 'الرسم التوضيحي']
      },
      availability: '92%'
    },
    {
      id: 'content',
      title: { en: 'Content Creation', ar: 'إنشاء المحتوى' },
      icon: <Edit3 className="w-8 h-8" />,
      color: 'from-primary-dark to-accent',
      freelancerCount: 456,
      avgRate: '$22/hr',
      skills: {
        en: ['Content Writing', 'Copywriting', 'Social Media', 'SEO Writing', 'Translation', 'Blogging'],
        ar: ['كتابة المحتوى', 'كتابة النصوص الإعلانية', 'وسائل التواصل', 'كتابة SEO', 'الترجمة', 'التدوين']
      },
      availability: '95%'
    },
    {
      id: 'marketing',
      title: { en: 'Digital Marketing', ar: 'التسويق الرقمي' },
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-accent-dark to-primary',
      freelancerCount: 389,
      avgRate: '$30/hr',
      skills: {
        en: ['Social Media Marketing', 'PPC Advertising', 'Email Marketing', 'SEO', 'Analytics', 'Growth Hacking'],
        ar: ['تسويق وسائل التواصل', 'الإعلان المدفوع', 'التسويق الإلكتروني', 'SEO', 'التحليلات', 'Growth Hacking']
      },
      availability: '87%'
    }
  ];

  // Artificial freelancer profiles
  const freelancerProfiles = [
    {
      id: 1,
      name: 'Sarah Al-Rashid',
      title: 'Full Stack Developer',
      category: 'Development',
      experience: '5 years',
      location: 'Damascus, Syria',
      rating: 4.9,
      completedProjects: 127,
      hourlyRate: '$40',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      avatar: (
        <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
          SR
        </div>
      ),
      availability: 'Available',
      responseTime: '2 hours',
      languages: ['Arabic', 'English'],
      portfolio: '25 projects',
      earnings: '$89K+',
      badge: 'Top Rated'
    },
    {
      id: 2,
      name: 'Karim Hassan',
      title: 'UI/UX Designer',
      category: 'Design',
      experience: '6 years',
      location: 'Aleppo, Syria',
      rating: 4.8,
      completedProjects: 94,
      hourlyRate: '$35',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
      avatar: (
        <div className="w-full h-full bg-gradient-to-br from-accent to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-xl">
          KH
        </div>
      ),
      availability: 'Available',
      responseTime: '1 hour',
      languages: ['Arabic', 'English', 'French'],
      portfolio: '18 projects',
      earnings: '$67K+',
      badge: 'Rising Talent'
    },
    {
      id: 3,
      name: 'Layla Mahmoud',
      title: 'Content Strategist',
      category: 'Content',
      experience: '4 years',
      location: 'Latakia, Syria',
      rating: 5.0,
      completedProjects: 156,
      hourlyRate: '$28',
      skills: ['Content Strategy', 'SEO', 'Social Media', 'Analytics'],
      avatar: (
        <div className="w-full h-full bg-gradient-to-br from-primary-dark to-accent-dark rounded-full flex items-center justify-center text-white font-bold text-xl">
          LM
        </div>
      ),
      availability: 'Busy',
      responseTime: '4 hours',
      languages: ['Arabic', 'English'],
      portfolio: '32 campaigns',
      earnings: '$54K+',
      badge: 'Expert'
    },
    {
      id: 4,
      name: 'Omar Al-Khoury',
      title: 'Digital Marketer',
      category: 'Marketing',
      experience: '7 years',
      location: 'Homs, Syria',
      rating: 4.9,
      completedProjects: 203,
      hourlyRate: '$38',
      skills: ['PPC', 'Facebook Ads', 'Google Analytics', 'Conversion Optimization'],
      avatar: (
        <div className="w-full h-full bg-gradient-to-br from-accent-dark to-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
          OK
        </div>
      ),
      availability: 'Available',
      responseTime: '30 minutes',
      languages: ['Arabic', 'English', 'German'],
      portfolio: '45 campaigns',
      earnings: '$112K+',
      badge: 'Top Rated Plus'
    }
  ];

  const networkFeatures = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: { en: 'Verified Profiles', ar: 'ملفات شخصية معتمدة' },
      description: { en: 'All freelancers undergo thorough verification including skills assessment and background checks', ar: 'جميع المستقلين يخضعون للتحقق الشامل بما في ذلك تقييم المهارات وفحص الخلفية' },
      stats: { en: '98% Verification Rate', ar: '98% معدل التحقق' }
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: { en: 'Smart Matching', ar: 'المطابقة الذكية' },
      description: { en: 'AI-powered matching system connects the right talent with the right projects based on skills and preferences', ar: 'نظام مطابقة مدعوم بالذكاء الاصطناعي يربط المواهب المناسبة بالمشاريع المناسبة بناءً على المهارات والتفضيلات' },
      stats: { en: '92% Match Success', ar: '92% نجاح المطابقة' }
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: { en: 'Skill Development', ar: 'تطوير المهارات' },
      description: { en: 'Continuous learning opportunities through workshops, courses, and mentorship programs', ar: 'فرص التعلم المستمر من خلال ورش العمل والدورات وبرامج الإرشاد' },
      stats: { en: '150+ Courses', ar: '150+ دورة' }
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: { en: 'Community Support', ar: 'دعم المجتمع' },
      description: { en: 'Active community forums, peer support, and regular networking events for professional growth', ar: 'منتديات مجتمعية نشطة ودعم الأقران وفعاليات تواصل منتظمة للنمو المهني' },
      stats: { en: '2,800+ Members', ar: '2,800+ عضو' }
    }
  ];

  const communityEvents = [
    {
      id: 1,
      title: { en: 'Freelancer Meetup Damascus', ar: 'لقاء المستقلين دمشق' },
      date: { en: 'June 15, 2025', ar: '15 يونيو 2025' },
      time: '6:00 PM',
      location: 'Damascus Tech Hub',
      attendees: 45,
      type: 'Networking',
      category: 'In-Person',
      image: (
        <div className="w-full h-full bg-gradient-to-br from-primary to-accent relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-accent-light rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Users className="w-16 h-16 text-white opacity-80" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: { en: 'Design Trends 2025 Workshop', ar: 'ورشة اتجاهات التصميم 2025' },
      date: { en: 'June 20, 2025', ar: '20 يونيو 2025' },
      time: '3:00 PM',
      location: 'Online',
      attendees: 127,
      type: 'Workshop',
      category: 'Virtual',
      image: (
        <div className="w-full h-full bg-gradient-to-br from-accent to-primary-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-3 left-3 w-6 h-6 bg-white rounded"></div>
            <div className="absolute bottom-3 right-3 w-4 h-4 bg-accent-light rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Palette className="w-16 h-16 text-white opacity-80" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: { en: 'Freelancing Success Stories', ar: 'قصص نجاح العمل الحر' },
      date: { en: 'June 25, 2025', ar: '25 يونيو 2025' },
      time: '7:00 PM',
      location: 'Aleppo Business Center',
      attendees: 67,
      type: 'Panel Discussion',
      category: 'Hybrid',
      image: (
        <div className="w-full h-full bg-gradient-to-br from-primary-dark to-accent-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-2 left-2 w-10 h-2 bg-white rounded"></div>
            <div className="absolute top-6 left-2 w-8 h-1 bg-accent-light rounded"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Award className="w-16 h-16 text-white opacity-80" />
            </div>
          </div>
        </div>
      )
    }
  ];

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={freelancerHeaderImage}
      />

      {/* Freelancer Community Hub Overview */}
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
              
              {/* Live Network Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">
                    {networkSize.toLocaleString()}+
                  </div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'مستقلين نشطين' : 'Active Freelancers'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent to-accent-dark rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold">{activeConnections}+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'اتصالات جديدة/يوم' : 'New Connections/Day'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-dark to-accent rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">95%</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'معدل الرضا' : 'Satisfaction Rate'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent-dark to-primary rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">$2.1M+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'إجمالي الأرباح' : 'Total Earnings'}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-5 h-5" />
                  {c.joinNetwork}
                </button>
                <button 
                  className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  {c.browseFreelancers}
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
              {/* Network Visualization Dashboard */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-accent overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center">
                        <Network className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-accent-light">{language === 'ar' ? 'شبكة المستقلين' : 'Freelancer Network'}</h3>
                        <p className="text-xs opacity-75">{language === 'ar' ? 'اتصالات حية' : 'Live Connections'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent-light rounded-full animate-pulse"></div>
                      <span className="text-xs text-accent-light">{language === 'ar' ? 'نشط' : 'Active'}</span>
                    </div>
                  </div>
                </div>

                {/* Category Tabs */}
                <div className="bg-gray-50 px-4 py-2">
                  <div className="flex gap-2 overflow-x-auto">
                    {freelancerCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                          activeCategory === category.id
                            ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                            : 'bg-white text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {category.icon}
                        <span className="text-sm font-medium">{category.title[language]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Network Visualization */}
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {freelancerCategories.map((category) => (
                        activeCategory === category.id && (
                          <div key={category.id}>
                            {/* Category Network Visualization */}
                            <div className="bg-gray-50 rounded-xl p-4 mb-4 relative overflow-hidden">
                              <div className="absolute inset-0 opacity-10">
                                {/* Network nodes visualization */}
                                <div className="absolute top-2 left-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                                <div className="absolute top-8 right-6 w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                                <div className="absolute bottom-4 left-8 w-4 h-4 bg-primary-dark rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                                <div className="absolute bottom-8 right-4 w-3 h-3 bg-accent-dark rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-primary rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                              </div>
                              
                              <div className="relative z-10">
                                <h4 className="font-bold text-primary mb-2">{category.title[language]} Network</h4>
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                  <div className="text-center">
                                    <div className="font-bold text-accent">{category.freelancerCount}</div>
                                    <div className="text-xs text-gray-600">{language === 'ar' ? 'مستقلين' : 'Freelancers'}</div>
                                  </div>
                                  <div className="text-center">
                                    <div className="font-bold text-primary">{category.avgRate}</div>
                                    <div className="text-xs text-gray-600">{language === 'ar' ? 'متوسط السعر' : 'Avg. Rate'}</div>
                                  </div>
                                  <div className="text-center">
                                    <div className="font-bold text-accent">{category.availability}</div>
                                    <div className="text-xs text-gray-600">{language === 'ar' ? 'متاح' : 'Available'}</div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Top Skills */}
                            <div className="grid grid-cols-2 gap-2">
                              {category.skills[language].slice(0, 6).map((skill, idx) => (
                                <div key={idx} className="bg-primary text-accent-light px-3 py-2 rounded-lg text-center text-sm font-medium">
                                  {skill}
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

              {/* Floating Network Elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-6 top-16 bg-accent text-white p-3 rounded-2xl shadow-xl"
              >
                <Users className="w-6 h-6" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -left-6 bottom-16 bg-primary text-accent-light p-3 rounded-2xl shadow-xl"
              >
                <Network className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Network Features */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.networkTitle}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {networkFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{feature.title[language]}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{feature.description[language]}</p>
                <div className="bg-accent text-white rounded-full px-4 py-2 text-sm font-medium inline-block">
                  {feature.stats[language]}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Freelancer Profiles Showcase */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {language === 'ar' ? 'مستقلين مميزين' : 'Featured Freelancers'}
          </motion.h2>

          {/* Featured Freelancer */}
          <div className="mb-12">
            <motion.div
              key={selectedFreelancer}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            >
              <div className="grid lg:grid-cols-2">
                {/* Freelancer Avatar & Info */}
                <div className="relative h-64 lg:h-full bg-gradient-to-br from-primary via-accent to-primary-dark flex flex-col items-center justify-center p-8">
                  <div className="w-24 h-24 mb-4">
                    {freelancerProfiles[selectedFreelancer].avatar}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">
                    {freelancerProfiles[selectedFreelancer].name}
                  </h3>
                  <p className="text-accent-light font-medium mb-2">
                    {freelancerProfiles[selectedFreelancer].title}
                  </p>
                  
                  {/* Badge */}
                  <div className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {freelancerProfiles[selectedFreelancer].badge}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-white font-bold">{freelancerProfiles[selectedFreelancer].rating}</span>
                  </div>
                </div>

                {/* Freelancer Details */}
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-primary mb-2">{language === 'ar' ? 'الخبرة:' : 'Experience:'}</h4>
                      <p className="text-gray-600">{freelancerProfiles[selectedFreelancer].experience}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">{language === 'ar' ? 'الموقع:' : 'Location:'}</h4>
                      <p className="text-gray-600">{freelancerProfiles[selectedFreelancer].location}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">{language === 'ar' ? 'المشاريع المكتملة:' : 'Completed:'}</h4>
                      <p className="text-accent font-bold">{freelancerProfiles[selectedFreelancer].completedProjects} projects</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">{language === 'ar' ? 'السعر/ساعة:' : 'Hourly Rate:'}</h4>
                      <p className="text-accent font-bold">{freelancerProfiles[selectedFreelancer].hourlyRate}</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="font-bold text-primary mb-3">{language === 'ar' ? 'المهارات:' : 'Skills:'}</h4>
                    <div className="flex flex-wrap gap-2">
                      {freelancerProfiles[selectedFreelancer].skills.map((skill, idx) => (
                        <span key={idx} className="bg-accent text-white px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <div className="font-bold text-primary">{freelancerProfiles[selectedFreelancer].responseTime}</div>
                      <div className="text-xs text-gray-600">{language === 'ar' ? 'وقت الاستجابة' : 'Response time'}</div>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <div className="font-bold text-accent">{freelancerProfiles[selectedFreelancer].portfolio}</div>
                      <div className="text-xs text-gray-600">{language === 'ar' ? 'المحفظة' : 'Portfolio'}</div>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <div className="font-bold text-primary">{freelancerProfiles[selectedFreelancer].earnings}</div>
                      <div className="text-xs text-gray-600">{language === 'ar' ? 'الأرباح' : 'Earnings'}</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-4 rounded-lg transition-all duration-300">
                      {language === 'ar' ? 'تواصل الآن' : 'Contact Now'}
                    </button>
                    <button className="bg-accent hover:bg-accent-dark text-white p-3 rounded-lg transition-all duration-300">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-primary p-3 rounded-lg transition-all duration-300">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Freelancer Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {freelancerProfiles.map((freelancer, index) => (
              <motion.button
                key={freelancer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedFreelancer(index)}
                className={`text-left bg-white rounded-xl p-4 transition-all duration-300 ${
                  selectedFreelancer === index
                    ? 'ring-4 ring-accent shadow-xl scale-105'
                    : 'shadow-lg hover:shadow-xl hover:scale-102'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12">
                    {freelancer.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">{freelancer.name}</h4>
                    <p className="text-accent text-xs">{freelancer.title}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
                  <span>{freelancer.hourlyRate}/hr</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span>{freelancer.rating}</span>
                  </div>
                </div>
                
                <div className={`text-xs px-2 py-1 rounded-full text-center ${
                  freelancer.availability === 'Available' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {freelancer.availability}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </Section>

      {/* Community Events */}
      <Section background="light">
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
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Event Image */}
                <div className="h-48 relative">
                  {event.image}
                  <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-xs font-bold text-primary">
                    {event.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                    {event.attendees} {language === 'ar' ? 'مشارك' : 'attendees'}
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-primary mb-2">{event.title[language]}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date[language]}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                      {event.type}
                    </span>
                    <button className="bg-primary hover:bg-primary-dark text-accent-light px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                      {language === 'ar' ? 'انضم' : 'Join Event'}
                    </button>
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
              <div className="text-6xl mb-6">🌐</div>
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
                  <UserPlus className="w-5 h-5" />
                  {c.joinNetwork}
                </button>
                <button 
                  className="bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Briefcase className="w-5 h-5" />
                  {c.postProject}
                </button>
                <button 
                  className="bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-20 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  {c.viewEvents}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default BuildFreelancerNetwork;