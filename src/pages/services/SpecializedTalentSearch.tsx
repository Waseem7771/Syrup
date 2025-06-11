import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { useLanguage } from '../../contexts/LanguageContext';
import talentHeaderImage from '../../assets/images/22.png';
import {
  Users,
  Search,
  Target,
  Award,
  Brain,
  Code,
  Briefcase,
  GraduationCap,
  MapPin,
  Clock,
  Star,
  TrendingUp,
  CheckCircle,
  Filter,
  Eye,
  MessageCircle,
  Calendar,
  Download,
  FileText,
  UserPlus,
  UserCheck,
  Globe,
  Zap,
  Shield,
  Settings,
  BarChart3,
  PieChart,
  Activity,
  Layers,
  Network,
  Database,
  Cpu,
  Smartphone,
  Monitor,
  Palette,
  Camera,
  Mic,
  Edit3,
  DollarSign,
  TrendingDown,
  ArrowRight,
  ChevronRight,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  BookOpen,
  Certificate,
  Building,
  Mail,
  Phone,
  Linkedin,
  Github
} from 'lucide-react';

const SpecializedTalentSearch: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeSearchTab, setActiveSearchTab] = useState('tech');
  const [selectedCandidate, setSelectedCandidate] = useState(0);
  const [searchStep, setSearchStep] = useState(1);
  const [matchingScore, setMatchingScore] = useState(0);

  // Animate matching score
  useEffect(() => {
    const timer = setTimeout(() => {
      setMatchingScore(92);
    }, 1000);
    return () => clearTimeout(timer);
  }, [selectedCandidate]);

  const content = {
    en: {
      title: "Specialized Talent Search",
      subtitle: "Expert talent acquisition and recruitment services - connecting Syrian businesses with top-tier professionals in technology, engineering, healthcare, finance, and specialized industries",
      
      // Overview
      overview: "Talent Acquisition Hub",
      overviewDesc: "Our specialized recruitment team identifies, evaluates, and connects you with the most qualified professionals. We combine AI-powered matching with human expertise to ensure perfect cultural and technical fit.",
      
      // Search Process
      processTitle: "Our Search Process",
      
      // Talent Categories
      categoriesTitle: "Talent Categories",
      
      // Success Stories
      successTitle: "Success Stories",
      
      // CTA
      ctaTitle: "Ready to Find Your Next Star?",
      ctaDesc: "Let our expert recruiters find the perfect talent match for your organization's unique needs and culture.",
      
      // Buttons
      startSearch: "Start Talent Search",
      viewCandidates: "View Candidates",
      scheduleCall: "Schedule Consultation",
      downloadReport: "Download Report"
    },
    ar: {
      title: "البحث عن المواهب المتخصصة",
      subtitle: "خدمات اكتساب المواهب والتوظيف المتخصصة - ربط الشركات في سوريا بالمهنيين من الدرجة الأولى في التكنولوجيا والهندسة والرعاية الصحية والمالية والصناعات المتخصصة",
      
      // Overview
      overview: "مركز اكتساب المواهب",
      overviewDesc: "يقوم فريق التوظيف المتخصص لدينا بتحديد وتقييم وربطك بأكثر المهنيين المؤهلين. نجمع بين المطابقة المدعومة بالذكاء الاصطناعي والخبرة البشرية لضمان التوافق الثقافي والتقني المثالي.",
      
      // Search Process
      processTitle: "عملية البحث لدينا",
      
      // Talent Categories
      categoriesTitle: "فئات المواهب",
      
      // Success Stories
      successTitle: "قصص النجاح",
      
      // CTA
      ctaTitle: "مستعد للعثور على نجمك القادم؟",
      ctaDesc: "دع خبراء التوظيف لدينا يجدون المطابقة المثالية للمواهب لاحتياجات وثقافة مؤسستك الفريدة.",
      
      // Buttons
      startSearch: "ابدأ البحث عن المواهب",
      viewCandidates: "عرض المرشحين",
      scheduleCall: "جدولة استشارة",
      downloadReport: "تحميل التقرير"
    }
  };

  const talentCategories = [
    {
      id: 'tech',
      title: { en: 'Technology', ar: 'التكنولوجيا' },
      icon: <Code className="w-8 h-8" />,
      color: 'from-primary to-primary-dark',
      openPositions: 245,
      avgSalary: '$75K',
      skills: {
        en: ['Software Development', 'AI/ML', 'Cybersecurity', 'Cloud Computing', 'Mobile Development', 'DevOps'],
        ar: ['تطوير البرمجيات', 'الذكاء الاصطناعي', 'الأمن السيبراني', 'الحوسبة السحابية', 'تطوير الموبايل', 'DevOps']
      },
      candidateCount: 1247
    },
    {
      id: 'engineering',
      title: { en: 'Engineering', ar: 'الهندسة' },
      icon: <Settings className="w-8 h-8" />,
      color: 'from-accent to-accent-dark',
      openPositions: 189,
      avgSalary: '$68K',
      skills: {
        en: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Chemical Engineering', 'Architecture', 'Project Management'],
        ar: ['الهندسة المدنية', 'الهندسة الميكانيكية', 'الهندسة الكهربائية', 'الهندسة الكيميائية', 'العمارة', 'إدارة المشاريع']
      },
      candidateCount: 892
    },
    {
      id: 'healthcare',
      title: { en: 'Healthcare', ar: 'الرعاية الصحية' },
      icon: <Shield className="w-8 h-8" />,
      color: 'from-primary-dark to-accent',
      openPositions: 156,
      avgSalary: '$82K',
      skills: {
        en: ['Medical Practice', 'Nursing', 'Pharmacy', 'Medical Research', 'Healthcare Administration', 'Telemedicine'],
        ar: ['الممارسة الطبية', 'التمريض', 'الصيدلة', 'البحث الطبي', 'إدارة الرعاية الصحية', 'الطب عن بُعد']
      },
      candidateCount: 634
    },
    {
      id: 'finance',
      title: { en: 'Finance', ar: 'المالية' },
      icon: <DollarSign className="w-8 h-8" />,
      color: 'from-accent-dark to-primary',
      openPositions: 134,
      avgSalary: '$72K',
      skills: {
        en: ['Financial Analysis', 'Investment Banking', 'Risk Management', 'Accounting', 'FinTech', 'Auditing'],
        ar: ['التحليل المالي', 'الخدمات المصرفية الاستثمارية', 'إدارة المخاطر', 'المحاسبة', 'التكنولوجيا المالية', 'التدقيق']
      },
      candidateCount: 567
    }
  ];

  // Artificial candidate profiles
  const candidateProfiles = [
    {
      id: 1,
      name: 'Ahmad Al-Hassan',
      role: 'Senior Full Stack Developer',
      experience: '8 years',
      location: 'Damascus, Syria',
      skills: ['React', 'Node.js', 'AWS', 'MongoDB'],
      rating: 4.9,
      avatar: (
        <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
          AH
        </div>
      ),
      salary: '$78K',
      availability: 'Available',
      education: 'Computer Science, Damascus University',
      languages: ['Arabic', 'English', 'French'],
      portfolio: '15 projects',
      lastActive: '2 days ago'
    },
    {
      id: 2,
      name: 'Fatima Al-Zahra',
      role: 'AI/ML Engineer',
      experience: '6 years',
      location: 'Aleppo, Syria',
      skills: ['Python', 'TensorFlow', 'Computer Vision', 'NLP'],
      rating: 4.8,
      avatar: (
        <div className="w-full h-full bg-gradient-to-br from-accent to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-lg">
          FZ
        </div>
      ),
      salary: '$85K',
      availability: 'Available',
      education: 'AI Engineering, Aleppo University',
      languages: ['Arabic', 'English'],
      portfolio: '12 AI projects',
      lastActive: '1 day ago'
    },
    {
      id: 3,
      name: 'Omar Khoury',
      role: 'Cybersecurity Specialist',
      experience: '10 years',
      location: 'Latakia, Syria',
      skills: ['Penetration Testing', 'CISSP', 'Blockchain', 'Cloud Security'],
      rating: 5.0,
      avatar: (
        <div className="w-full h-full bg-gradient-to-br from-primary-dark to-accent-dark rounded-full flex items-center justify-center text-white font-bold text-lg">
          OK
        </div>
      ),
      salary: '$92K',
      availability: 'Open to offers',
      education: 'Information Security, Tishreen University',
      languages: ['Arabic', 'English', 'German'],
      portfolio: '20+ security audits',
      lastActive: '5 hours ago'
    }
  ];

  const searchProcess = [
    {
      step: 1,
      icon: <Target className="w-6 h-6" />,
      title: { en: 'Requirements Analysis', ar: 'تحليل المتطلبات' },
      description: { en: 'Deep dive into your specific needs, company culture, and role requirements', ar: 'الغوص العميق في احتياجاتك المحددة وثقافة الشركة ومتطلبات الدور' },
      duration: { en: '1-2 days', ar: '1-2 أيام' },
      deliverables: {
        en: ['Role specification', 'Skills matrix', 'Cultural fit criteria'],
        ar: ['مواصفات الدور', 'مصفوفة المهارات', 'معايير التوافق الثقافي']
      }
    },
    {
      step: 2,
      icon: <Search className="w-6 h-6" />,
      title: { en: 'Talent Sourcing', ar: 'البحث عن المواهب' },
      description: { en: 'AI-powered search across multiple platforms and our exclusive talent network', ar: 'البحث المدعوم بالذكاء الاصطناعي عبر منصات متعددة وشبكة المواهب الحصرية لدينا' },
      duration: { en: '3-5 days', ar: '3-5 أيام' },
      deliverables: {
        en: ['Candidate pipeline', 'Initial screening', 'Skills assessment'],
        ar: ['خط أنابيب المرشحين', 'الفرز الأولي', 'تقييم المهارات']
      }
    },
    {
      step: 3,
      icon: <Users className="w-6 h-6" />,
      title: { en: 'Evaluation & Matching', ar: 'التقييم والمطابقة' },
      description: { en: 'Comprehensive evaluation including technical, cultural, and soft skills assessment', ar: 'التقييم الشامل بما في ذلك التقييم التقني والثقافي والمهارات الناعمة' },
      duration: { en: '5-7 days', ar: '5-7 أيام' },
      deliverables: {
        en: ['Detailed profiles', 'Interview scheduling', 'Reference checks'],
        ar: ['الملفات الشخصية المفصلة', 'جدولة المقابلات', 'فحص المراجع']
      }
    },
    {
      step: 4,
      icon: <CheckCircle className="w-6 h-6" />,
      title: { en: 'Placement & Onboarding', ar: 'التوظيف والإدماج' },
      description: { en: 'Support through final selection, negotiation, and first 90 days onboarding', ar: 'الدعم من خلال الاختيار النهائي والتفاوض وأول 90 يوماً من الإدماج' },
      duration: { en: '2-4 weeks', ar: '2-4 أسابيع' },
      deliverables: {
        en: ['Offer negotiation', 'Contract support', 'Onboarding plan'],
        ar: ['التفاوض على العرض', 'دعم العقد', 'خطة الإدماج']
      }
    }
  ];

  const successStories = [
    {
      id: 1,
      company: 'Syrian Tech Hub',
      position: 'Lead AI Engineer',
      timeToHire: '12 days',
      salaryMatch: '98%',
      retention: '2+ years',
      challenge: { en: 'Finding AI expertise in Syria', ar: 'العثور على خبرة في الذكاء الاصطناعي في سوريا' },
      solution: { en: 'Identified local talent with international experience', ar: 'تحديد المواهب المحلية ذات الخبرة الدولية' },
      result: { en: 'Led development of award-winning AI platform', ar: 'قاد تطوير منصة ذكاء اصطناعي حائزة على جوائز' }
    },
    {
      id: 2,
      company: 'Damascus Medical Center',
      position: 'Senior Cardiac Surgeon',
      timeToHire: '18 days',
      salaryMatch: '95%',
      retention: '3+ years',
      challenge: { en: 'Specialized medical expertise shortage', ar: 'نقص الخبرة الطبية المتخصصة' },
      solution: { en: 'Recruited from international medical network', ar: 'تم التوظيف من الشبكة الطبية الدولية' },
      result: { en: 'Performed 200+ successful surgeries', ar: 'أجرى أكثر من 200 عملية جراحية ناجحة' }
    },
    {
      id: 3,
      company: 'Aleppo Engineering Firm',
      position: 'Project Manager',
      timeToHire: '10 days',
      salaryMatch: '100%',
      retention: '18+ months',
      challenge: { en: 'Complex infrastructure project leadership', ar: 'قيادة مشروع بنية تحتية معقد' },
      solution: { en: 'Matched with reconstruction specialist', ar: 'تم الربط مع متخصص إعادة الإعمار' },
      result: { en: 'Delivered $50M project ahead of schedule', ar: 'سلم مشروع بقيمة 50 مليون دولار قبل الموعد المحدد' }
    }
  ];

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={talentHeaderImage}
      />

      {/* Talent Acquisition Dashboard */}
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
              
              {/* Live Recruitment Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">3,400+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'مرشحين نشطين' : 'Active Candidates'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent to-accent-dark rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold">724</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'وظائف شاغرة' : 'Open Positions'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-dark to-accent rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">96%</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'معدل النجاح' : 'Success Rate'}</div>
                </div>
                <div className="text-center bg-gradient-to-br from-accent-dark to-primary rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-accent-light">8.5</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'أيام متوسط التوظيف' : 'Avg. Days to Hire'}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  {c.startSearch}
                </button>
                <button 
                  className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  {c.viewCandidates}
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
              {/* Recruitment Dashboard Mockup */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-accent overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-accent-light">{language === 'ar' ? 'لوحة التوظيف' : 'Recruitment Dashboard'}</h3>
                        <p className="text-xs opacity-75">{language === 'ar' ? 'مطابقة المواهب النشطة' : 'Active Talent Matching'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent-light rounded-full animate-pulse"></div>
                      <span className="text-xs text-accent-light">{language === 'ar' ? 'مباشر' : 'Live'}</span>
                    </div>
                  </div>
                </div>

                {/* Category Tabs */}
                <div className="bg-gray-50 px-4 py-2">
                  <div className="flex gap-2 overflow-x-auto">
                    {talentCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveSearchTab(category.id)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                          activeSearchTab === category.id
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

                {/* Candidate Matching Interface */}
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSearchTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Current Category Info */}
                      <div className="mb-4">
                        {talentCategories.map((category) => (
                          activeSearchTab === category.id && (
                            <div key={category.id} className="bg-gray-50 rounded-xl p-4">
                              <div className="flex justify-between items-center mb-3">
                                <h4 className="font-bold text-primary">{category.title[language]}</h4>
                                <span className="bg-accent text-white px-2 py-1 rounded-full text-xs">
                                  {category.candidateCount} {language === 'ar' ? 'مرشح' : 'candidates'}
                                </span>
                              </div>
                              
                              {/* Skills Tags */}
                              <div className="flex flex-wrap gap-1 mb-3">
                                {category.skills[language].slice(0, 4).map((skill, idx) => (
                                  <span key={idx} className="bg-primary text-accent-light px-2 py-1 rounded-full text-xs">
                                    {skill}
                                  </span>
                                ))}
                              </div>

                              {/* Category Stats */}
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="text-gray-600">{language === 'ar' ? 'الوظائف الشاغرة:' : 'Open Positions:'}</span>
                                  <span className="font-bold text-accent ml-2">{category.openPositions}</span>
                                </div>
                                <div>
                                  <span className="text-gray-600">{language === 'ar' ? 'متوسط الراتب:' : 'Avg. Salary:'}</span>
                                  <span className="font-bold text-primary ml-2">{category.avgSalary}</span>
                                </div>
                              </div>
                            </div>
                          )
                        ))}
                      </div>

                      {/* AI Matching Progress */}
                      <div className="bg-gradient-to-r from-primary-light to-accent-light rounded-xl p-4 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-primary font-medium text-sm">{language === 'ar' ? 'مطابقة بالذكاء الاصطناعي' : 'AI Matching'}</span>
                          <span className="text-accent font-bold text-sm">{matchingScore}%</span>
                        </div>
                        <div className="w-full bg-white bg-opacity-50 rounded-full h-2">
                          <motion.div 
                            className="bg-accent h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${matchingScore}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                          ></motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Floating Talent Elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-6 top-16 bg-accent text-white p-3 rounded-2xl shadow-xl"
              >
                <Target className="w-6 h-6" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -left-6 bottom-16 bg-primary text-accent-light p-3 rounded-2xl shadow-xl"
              >
                <Award className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Talent Categories Overview */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.categoriesTitle}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {talentCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${category.color} rounded-2xl p-4 inline-block mb-4 text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{category.title[language]}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{language === 'ar' ? 'المرشحين:' : 'Candidates:'}</span>
                    <span className="font-bold text-accent">{category.candidateCount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{language === 'ar' ? 'الوظائف:' : 'Jobs:'}</span>
                    <span className="font-bold text-primary">{category.openPositions}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{language === 'ar' ? 'الراتب:' : 'Salary:'}</span>
                    <span className="font-bold text-accent">{category.avgSalary}</span>
                  </div>
                </div>

                {/* Skills Preview */}
                <div className="space-y-1">
                  {category.skills[language].slice(0, 3).map((skill, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg px-3 py-1 text-xs text-primary font-medium">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Candidate Profiles Showcase */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {language === 'ar' ? 'ملفات المرشحين المميزة' : 'Featured Candidate Profiles'}
          </motion.h2>

          {/* Featured Candidate */}
          <div className="mb-12">
            <motion.div
              key={selectedCandidate}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            >
              <div className="grid lg:grid-cols-2">
                {/* Candidate Photo/Avatar */}
                <div className="relative h-64 lg:h-full bg-gradient-to-br from-primary via-accent to-primary-dark flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg">
                    {candidateProfiles[selectedCandidate].avatar}
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-bold text-primary">{candidateProfiles[selectedCandidate].rating}</span>
                    </div>
                  </div>

                  {/* Availability Status */}
                  <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {candidateProfiles[selectedCandidate].availability}
                  </div>
                </div>

                {/* Candidate Details */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-primary mb-1">
                      {candidateProfiles[selectedCandidate].name}
                    </h3>
                    <p className="text-accent font-medium mb-2">
                      {candidateProfiles[selectedCandidate].role}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {candidateProfiles[selectedCandidate].experience}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {candidateProfiles[selectedCandidate].location}
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="font-bold text-primary mb-2">{language === 'ar' ? 'المهارات:' : 'Skills:'}</h4>
                    <div className="flex flex-wrap gap-2">
                      {candidateProfiles[selectedCandidate].skills.map((skill, idx) => (
                        <span key={idx} className="bg-accent text-white px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="text-gray-600">{language === 'ar' ? 'الراتب المطلوب:' : 'Expected Salary:'}</span>
                      <p className="font-bold text-primary">{candidateProfiles[selectedCandidate].salary}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">{language === 'ar' ? 'التعليم:' : 'Education:'}</span>
                      <p className="font-bold text-accent">{candidateProfiles[selectedCandidate].education}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">{language === 'ar' ? 'المحفظة:' : 'Portfolio:'}</span>
                      <p className="font-bold text-primary">{candidateProfiles[selectedCandidate].portfolio}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">{language === 'ar' ? 'آخر نشاط:' : 'Last Active:'}</span>
                      <p className="font-bold text-accent">{candidateProfiles[selectedCandidate].lastActive}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-4 rounded-lg transition-all duration-300">
                      {language === 'ar' ? 'عرض الملف الكامل' : 'View Full Profile'}
                    </button>
                    <button className="bg-accent hover:bg-accent-dark text-white p-3 rounded-lg transition-all duration-300">
                      <MessageCircle className="w-5 h-5" />
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-primary p-3 rounded-lg transition-all duration-300">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Candidate Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {candidateProfiles.map((candidate, index) => (
              <motion.button
                key={candidate.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedCandidate(index)}
                className={`text-left bg-white rounded-xl p-4 transition-all duration-300 ${
                  selectedCandidate === index
                    ? 'ring-4 ring-accent shadow-xl scale-105'
                    : 'shadow-lg hover:shadow-xl hover:scale-102'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12">
                    {candidate.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">{candidate.name}</h4>
                    <p className="text-accent text-xs">{candidate.role}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-600">
                  <span>{candidate.experience}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span>{candidate.rating}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </Section>

      {/* Search Process */}
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
              {searchProcess.map((step, index) => (
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

      {/* Success Stories */}
      <Section background="white">
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

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-accent"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-primary mb-1">{story.company}</h3>
                  <p className="text-accent font-medium">{story.position}</p>
                </div>

                {/* Success Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center bg-gray-50 rounded-lg p-2">
                    <div className="text-sm font-bold text-primary">{story.timeToHire}</div>
                    <div className="text-xs text-gray-600">{language === 'ar' ? 'للتوظيف' : 'to hire'}</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-2">
                    <div className="text-sm font-bold text-accent">{story.salaryMatch}</div>
                    <div className="text-xs text-gray-600">{language === 'ar' ? 'مطابقة راتب' : 'salary match'}</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-2">
                    <div className="text-sm font-bold text-primary">{story.retention}</div>
                    <div className="text-xs text-gray-600">{language === 'ar' ? 'احتفاظ' : 'retention'}</div>
                  </div>
                </div>

                {/* Story Details */}
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-bold text-primary mb-1">{language === 'ar' ? 'التحدي:' : 'Challenge:'}</h4>
                    <p className="text-sm text-gray-600">{story.challenge[language]}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-accent mb-1">{language === 'ar' ? 'الحل:' : 'Solution:'}</h4>
                    <p className="text-sm text-gray-600">{story.solution[language]}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary mb-1">{language === 'ar' ? 'النتيجة:' : 'Result:'}</h4>
                    <p className="text-sm text-gray-600">{story.result[language]}</p>
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
              <div className="text-6xl mb-6">🎯</div>
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
                  {c.scheduleCall}
                </button>
                <button 
                  className="bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  {c.viewCandidates}
                </button>
                <button 
                  className="bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-20 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {c.downloadReport}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SpecializedTalentSearch;