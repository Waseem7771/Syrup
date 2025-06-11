import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { useLanguage } from '../../contexts/LanguageContext';
import seedFundingHeaderImage from '../../assets/images/12.png';
import {
  DollarSign,
  TrendingUp,
  PieChart,
  BarChart3,
  Target,
  Users,
  Briefcase,
  Calendar,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Building,
  Rocket,
  Crown,
  Award,
  Shield,
  Gem,
  Eye,
  FileText,
  Download,
  Upload,
  Share2,
  Heart,
  Bookmark,
  Phone,
  Mail,
  Globe,
  MapPin,
  Filter,
  Search,
  Settings,
  MoreHorizontal,
  Plus,
  Minus,
  X,
  Check,
  AlertTriangle,
  Info,
  Lightbulb,
  Brain,
  Network,
  Handshake,
  Zap
} from 'lucide-react';

const SeedFundingPrograms: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [selectedFundingStage, setSelectedFundingStage] = useState(0);
  const [activePortfolioCompany, setActivePortfolioCompany] = useState(0);
  const [investmentMetrics, setInvestmentMetrics] = useState({
    totalFunding: 0,
    activeInvestments: 0,
    successRate: 0
  });
  const [fundingCalculator, setFundingCalculator] = useState({
    fundingAmount: 50000,
    equityPercentage: 15,
    valuation: 333333
  });

  // Animate metrics
  useEffect(() => {
    const timer = setTimeout(() => {
      setInvestmentMetrics({
        totalFunding: 2500000,
        activeInvestments: 18,
        successRate: 78
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-cycle through portfolio companies
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePortfolioCompany(prev => (prev + 1) % portfolioCompanies.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      title: "Seed Funding Programs",
      subtitle: "Accelerate your startup growth with our comprehensive seed funding programs, strategic investment, and post-investment support for Syrian entrepreneurs",
      
      // Overview
      overview: "Investment Ecosystem",
      overviewDesc: "Our seed funding program provides early-stage startups in Syria with the capital, strategic guidance, and network access needed to scale from idea to market success.",
      
      // Funding Stages
      fundingTitle: "Funding Stages & Criteria",
      
      // Portfolio
      portfolioTitle: "Portfolio Companies",
      
      // Process
      processTitle: "Investment Process",
      
      // Support
      supportTitle: "Post-Investment Support",
      
      // CTA
      ctaTitle: "Ready to Secure Funding?",
      ctaDesc: "Join our portfolio of successful startups in Syria and accelerate your growth with strategic investment and comprehensive support.",
      
      // Buttons
      applyFunding: "Apply for Funding",
      pitchDeck: "Submit Pitch Deck",
      fundingGuide: "Funding Guide",
      scheduleCall: "Schedule Call"
    },
    ar: {
      title: "برامج التمويل الأولي",
      subtitle: "عجّل نمو شركتك الناشئة مع برامج التمويل الأولي الشاملة والاستثمار الاستراتيجي ودعم ما بعد الاستثمار لرواد الأعمال السوريين",
      
      // Overview
      overview: "النظام البيئي للاستثمار",
      overviewDesc: "يوفر برنامج التمويل الأولي لدينا للشركات الناشئة في سوريا في المراحل المبكرة رأس المال والتوجيه الاستراتيجي والوصول إلى الشبكة اللازمة للتوسع من الفكرة إلى نجاح السوق.",
      
      // Funding Stages
      fundingTitle: "مراحل التمويل والمعايير",
      
      // Portfolio
      portfolioTitle: "شركات المحفظة",
      
      // Process
      processTitle: "عملية الاستثمار",
      
      // Support
      supportTitle: "دعم ما بعد الاستثمار",
      
      // CTA
      ctaTitle: "مستعد لتأمين التمويل؟",
      ctaDesc: "انضم إلى محفظة الشركات الناشئة في سوريا الناجحة واعزز نموك بالاستثمار الاستراتيجي والدعم الشامل.",
      
      // Buttons
      applyFunding: "تقدم للتمويل",
      pitchDeck: "قدم عرض الفكرة",
      fundingGuide: "دليل التمويل",
      scheduleCall: "حدد موعد مكالمة"
    }
  };

  const fundingStages = [
    {
      id: 'pre-seed',
      name: { en: 'Pre-Seed', ar: 'ما قبل البذور' },
      range: { en: '$10K - $50K', ar: '10 - 50 ألف دولار' },
      equity: { en: '10-20%', ar: '10-20%' },
      stage: { en: 'Idea to MVP', ar: 'من الفكرة إلى النموذج الأولي' },
      criteria: {
        en: ['Strong founding team', 'Market validation', 'Basic product development', 'Clear business model'],
        ar: ['فريق تأسيس قوي', 'تحقق من السوق', 'تطوير المنتج الأساسي', 'نموذج عمل واضح']
      },
      color: 'from-primary to-primary-dark',
      icon: <Lightbulb className="w-8 h-8" />,
      companies: 8
    },
    {
      id: 'seed',
      name: { en: 'Seed Round', ar: 'جولة البذور' },
      range: { en: '$50K - $200K', ar: '50 - 200 ألف دولار' },
      equity: { en: '15-25%', ar: '15-25%' },
      stage: { en: 'MVP to Market', ar: 'من النموذج الأولي إلى السوق' },
      criteria: {
        en: ['Product-market fit', 'Revenue traction', 'Scalable business model', 'Growth potential'],
        ar: ['ملاءمة المنتج للسوق', 'جذب الإيرادات', 'نموذج عمل قابل للتوسع', 'إمكانية النمو']
      },
      color: 'from-accent to-accent-dark',
      icon: <Rocket className="w-8 h-8" />,
      companies: 6
    },
    {
      id: 'series-a',
      name: { en: 'Series A', ar: 'السلسلة أ' },
      range: { en: '$200K - $500K', ar: '200 - 500 ألف دولار' },
      equity: { en: '20-30%', ar: '20-30%' },
      stage: { en: 'Scale & Growth', ar: 'التوسع والنمو' },
      criteria: {
        en: ['Proven revenue model', 'Market expansion', 'Strong team growth', 'Regional presence'],
        ar: ['نموذج إيرادات مثبت', 'توسع السوق', 'نمو قوي للفريق', 'وجود إقليمي']
      },
      color: 'from-primary-dark to-accent',
      icon: <TrendingUp className="w-8 h-8" />,
      companies: 4
    }
  ];

  const portfolioCompanies = [
    {
      id: 1,
      name: 'TechMed Syria',
      industry: { en: 'HealthTech', ar: 'تقنية الصحة' },
      fundingStage: { en: 'Series A', ar: 'السلسلة أ' },
      fundingAmount: { en: '$350K', ar: '350 ألف دولار' },
      valuation: { en: '$1.4M', ar: '1.4 مليون دولار' },
      roi: '+240%',
      description: {
        en: 'Digital health platform connecting patients with healthcare providers across Syria',
        ar: 'منصة صحة رقمية تربط المرضى بمقدمي الرعاية الصحية عبر سوريا'
      },
      metrics: {
        users: { en: '15K+ patients', ar: '15 ألف+ مريض' },
        revenue: { en: '$45K MRR', ar: '45 ألف دولار شهرياً' },
        growth: '+150%'
      },
      founders: ['Dr. Layla Kassem', 'Ahmad Nouri'],
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-xl">
          TM
        </div>
      )
    },
    {
      id: 2,
      name: 'EduFlow Syria',
      industry: { en: 'EdTech', ar: 'تقنية التعليم' },
      fundingStage: { en: 'Seed', ar: 'البذور' },
      fundingAmount: { en: '$120K', ar: '120 ألف دولار' },
      valuation: { en: '$600K', ar: '600 ألف دولار' },
      roi: '+180%',
      description: {
        en: 'AI-powered learning management system for Syrian educational institutions',
        ar: 'نظام إدارة تعلم مدعوم بالذكاء الاصطناعي للمؤسسات التعليمية السورية'
      },
      metrics: {
        users: { en: '8K+ students', ar: '8 آلاف+ طالب' },
        revenue: { en: '$28K MRR', ar: '28 ألف دولار شهرياً' },
        growth: '+120%'
      },
      founders: ['Noor Al-Zahra', 'Khalil Mansour'],
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-2xl flex items-center justify-center text-white font-bold text-xl">
          EF
        </div>
      )
    },
    {
      id: 3,
      name: 'GreenTech Damascus',
      industry: { en: 'CleanTech', ar: 'التقنية النظيفة' },
      fundingStage: { en: 'Pre-Seed', ar: 'ما قبل البذور' },
      fundingAmount: { en: '$35K', ar: '35 ألف دولار' },
      valuation: { en: '$175K', ar: '175 ألف دولار' },
      roi: '+95%',
      description: {
        en: 'Solar energy solutions and smart grid technology for Syrian communities',
        ar: 'حلول الطاقة الشمسية وتقنية الشبكة الذكية للمجتمعات السورية'
      },
      metrics: {
        users: { en: '200+ installations', ar: '200+ تركيب' },
        revenue: { en: '$12K MRR', ar: '12 ألف دولار شهرياً' },
        growth: '+85%'
      },
      founders: ['Rami Khalil'],
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-primary-dark to-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl">
          GT
        </div>
      )
    },
    {
      id: 4,
      name: 'FinanceFlow',
      industry: { en: 'FinTech', ar: 'تقنية المالية' },
      fundingStage: { en: 'Seed', ar: 'البذور' },
      fundingAmount: { en: '$180K', ar: '180 ألف دولار' },
      valuation: { en: '$900K', ar: '900 ألف دولار' },
      roi: '+210%',
      description: {
        en: 'Digital banking and payment solutions for Syrian SMEs and entrepreneurs',
        ar: 'حلول مصرفية رقمية ودفع للشركات الصغيرة والمتوسطة ورواد الأعمال السوريين'
      },
      metrics: {
        users: { en: '5K+ businesses', ar: '5 آلاف+ شركة' },
        revenue: { en: '$32K MRR', ar: '32 ألف دولار شهرياً' },
        growth: '+160%'
      },
      founders: ['Sara Habib', 'Yousef Al-Ahmad'],
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-accent-dark to-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl">
          FF
        </div>
      )
    }
  ];

  const investmentProcess = [
    {
      step: 1,
      title: { en: 'Application & Screening', ar: 'التقديم والفحص' },
      description: {
        en: 'Submit your pitch deck and business plan through our online portal',
        ar: 'قدم عرض فكرتك وخطة العمل من خلال بوابتنا الإلكترونية'
      },
      duration: { en: '1-2 weeks', ar: '1-2 أسبوع' },
      icon: <FileText className="w-6 h-6" />,
      color: 'from-primary to-primary-dark'
    },
    {
      step: 2,
      title: { en: 'Initial Review', ar: 'المراجعة الأولية' },
      description: {
        en: 'Our investment committee evaluates your startup against our criteria',
        ar: 'تقيم لجنة الاستثمار لدينا شركتك الناشئة وفقاً لمعاييرنا'
      },
      duration: { en: '2-3 weeks', ar: '2-3 أسابيع' },
      icon: <Eye className="w-6 h-6" />,
      color: 'from-accent to-accent-dark'
    },
    {
      step: 3,
      title: { en: 'Pitch Presentation', ar: 'عرض الفكرة' },
      description: {
        en: 'Present your startup to our investment panel and answer questions',
        ar: 'اعرض شركتك الناشئة على لجنة الاستثمار وأجب على الأسئلة'
      },
      duration: { en: '1 week', ar: 'أسبوع واحد' },
      icon: <Users className="w-6 h-6" />,
      color: 'from-primary-dark to-accent'
    },
    {
      step: 4,
      title: { en: 'Due Diligence', ar: 'العناية الواجبة' },
      description: {
        en: 'Comprehensive evaluation of your business model, finances, and team',
        ar: 'تقييم شامل لنموذج عملك والمالية والفريق'
      },
      duration: { en: '3-4 weeks', ar: '3-4 أسابيع' },
      icon: <Search className="w-6 h-6" />,
      color: 'from-accent-dark to-primary'
    },
    {
      step: 5,
      title: { en: 'Investment Decision', ar: 'قرار الاستثمار' },
      description: {
        en: 'Final investment decision and term sheet negotiation',
        ar: 'قرار الاستثمار النهائي والتفاوض على شروط الاستثمار'
      },
      duration: { en: '1-2 weeks', ar: '1-2 أسبوع' },
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'from-primary to-accent'
    }
  ];

  const postInvestmentSupport = [
    {
      id: 'mentorship',
      title: { en: 'Strategic Mentorship', ar: 'الإرشاد الاستراتيجي' },
      description: {
        en: 'Regular guidance from experienced entrepreneurs and industry experts',
        ar: 'توجيه منتظم من رواد الأعمال المتمرسين وخبراء الصناعة'
      },
      icon: <Brain className="w-8 h-8" />,
      color: 'from-primary to-primary-dark'
    },
    {
      id: 'network',
      title: { en: 'Network Access', ar: 'الوصول للشبكة' },
      description: {
        en: 'Connect with investors, partners, customers, and fellow entrepreneurs',
        ar: 'تواصل مع المستثمرين والشركاء والعملاء ورواد الأعمال الآخرين'
      },
      icon: <Network className="w-8 h-8" />,
      color: 'from-accent to-accent-dark'
    },
    {
      id: 'followup',
      title: { en: 'Follow-up Funding', ar: 'التمويل التتابعي' },
      description: {
        en: 'Support for future funding rounds and investor introductions',
        ar: 'دعم لجولات التمويل المستقبلية والتعريف بالمستثمرين'
      },
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-primary-dark to-accent'
    },
    {
      id: 'operations',
      title: { en: 'Operational Support', ar: 'الدعم التشغيلي' },
      description: {
        en: 'Legal, financial, and administrative support for business operations',
        ar: 'دعم قانوني ومالي وإداري للعمليات التجارية'
      },
      icon: <Settings className="w-8 h-8" />,
      color: 'from-accent-dark to-primary'
    }
  ];

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={seedFundingHeaderImage}
      />

      {/* Investment Ecosystem Overview */}
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
              
              {/* Investment Stats */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-accent-light">
                        ${(investmentMetrics.totalFunding / 1000000).toFixed(1)}M
                      </div>
                      <div className="text-accent-light opacity-75">
                        {language === 'ar' ? 'إجمالي التمويل المستثمر' : 'Total Funding Deployed'}
                      </div>
                    </div>
                    <DollarSign className="w-12 h-12 text-accent-light opacity-50" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-accent to-accent-dark rounded-2xl p-4 text-white text-center">
                    <div className="text-2xl font-bold">{investmentMetrics.activeInvestments}</div>
                    <div className="text-xs opacity-75">
                      {language === 'ar' ? 'استثمارات نشطة' : 'Active Investments'}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary-dark to-accent rounded-2xl p-4 text-white text-center">
                    <div className="text-2xl font-bold">{investmentMetrics.successRate}%</div>
                    <div className="text-xs opacity-75">
                      {language === 'ar' ? 'معدل النجاح' : 'Success Rate'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  {c.applyFunding}
                </button>
                <button 
                  className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Upload className="w-5 h-5" />
                  {c.pitchDeck}
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
              {/* Investment Dashboard */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-accent overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center">
                        <PieChart className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-accent-light text-lg">
                          {language === 'ar' ? 'لوحة الاستثمار' : 'Investment Dashboard'}
                        </h3>
                        <p className="text-accent-light opacity-75">
                          {language === 'ar' ? 'نظرة عامة على المحفظة' : 'Portfolio Overview'}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent-light">18</div>
                      <div className="text-accent-light opacity-75">
                        {language === 'ar' ? 'شركات' : 'Companies'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Portfolio Breakdown */}
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-bold text-primary mb-4">
                      {language === 'ar' ? 'توزيع المحفظة' : 'Portfolio Distribution'}
                    </h4>
                    <div className="space-y-3">
                      {fundingStages.map((stage, index) => (
                        <div key={stage.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${stage.color}`}></div>
                            <span className="text-sm font-medium text-gray-700">
                              {stage.name[language]}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">{stage.companies}</span>
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full bg-gradient-to-r ${stage.color}`}
                                style={{ width: `${(stage.companies / 18) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-bold text-primary mb-3">
                      {language === 'ar' ? 'النشاط الأخير' : 'Recent Activity'}
                    </h5>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-gray-600">
                          {language === 'ar' ? 'تمويل جديد: TechMed Syria $350K' : 'New funding: TechMed Syria $350K'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-600">
                          {language === 'ar' ? 'مراجعة محفظة: FinanceFlow' : 'Portfolio review: FinanceFlow'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-accent-dark rounded-full"></div>
                        <span className="text-gray-600">
                          {language === 'ar' ? 'طلبات جديدة: 5 تطبيقات' : 'New applications: 5 pending'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating ROI Indicator */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-6 top-20 bg-gradient-to-br from-accent to-accent-dark text-white p-4 rounded-2xl shadow-xl"
              >
                <div className="text-center">
                  <TrendingUp className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-sm font-bold">+178%</div>
                  <div className="text-xs opacity-75">Avg ROI</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Funding Stages & Criteria */}
      <Section background="light">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.fundingTitle}
          </motion.h2>

          {/* Stage Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
              <div className="flex gap-2">
                {fundingStages.map((stage, index) => (
                  <button
                    key={stage.id}
                    onClick={() => setSelectedFundingStage(index)}
                    className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                      selectedFundingStage === index
                        ? `bg-gradient-to-r ${stage.color} text-white shadow-md`
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {stage.icon}
                      <div className="text-left">
                        <div className="font-medium">{stage.name[language]}</div>
                        <div className="text-xs opacity-75">{stage.range[language]}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Stage Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFundingStage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Stage Overview */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${fundingStages[selectedFundingStage].color} rounded-2xl flex items-center justify-center text-white`}>
                      {fundingStages[selectedFundingStage].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">
                        {fundingStages[selectedFundingStage].name[language]}
                      </h3>
                      <p className="text-accent font-medium">
                        {fundingStages[selectedFundingStage].stage[language]}
                      </p>
                    </div>
                  </div>

                  {/* Funding Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary">
                        {fundingStages[selectedFundingStage].range[language]}
                      </div>
                      <div className="text-sm text-gray-600">
                        {language === 'ar' ? 'مبلغ التمويل' : 'Funding Range'}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-accent">
                        {fundingStages[selectedFundingStage].equity[language]}
                      </div>
                      <div className="text-sm text-gray-600">
                        {language === 'ar' ? 'حصة الأسهم' : 'Equity Range'}
                      </div>
                    </div>
                  </div>

                  {/* Investment Criteria */}
                  <div>
                    <h4 className="font-bold text-primary mb-4">
                      {language === 'ar' ? 'معايير الاستثمار' : 'Investment Criteria'}
                    </h4>
                    <div className="space-y-3">
                      {fundingStages[selectedFundingStage].criteria[language].map((criterion, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-gray-700">{criterion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Funding Calculator */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                  <h4 className="font-bold text-primary mb-4">
                    {language === 'ar' ? 'حاسبة التمويل' : 'Funding Calculator'}
                  </h4>
                  
                  <div className="space-y-4">
                    {/* Funding Amount */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'ar' ? 'مبلغ التمويل المطلوب' : 'Funding Amount Needed'}
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="number"
                          value={fundingCalculator.fundingAmount}
                          onChange={(e) => setFundingCalculator(prev => ({
                            ...prev,
                            fundingAmount: parseInt(e.target.value) || 0,
                            valuation: Math.round((parseInt(e.target.value) || 0) / (prev.equityPercentage / 100))
                          }))}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="50000"
                        />
                      </div>
                    </div>

                    {/* Equity Percentage */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'ar' ? 'نسبة الأسهم المقترحة' : 'Proposed Equity %'}
                      </label>
                      <div className="relative">
                        <input
                          type="range"
                          min="5"
                          max="35"
                          value={fundingCalculator.equityPercentage}
                          onChange={(e) => setFundingCalculator(prev => ({
                            ...prev,
                            equityPercentage: parseInt(e.target.value),
                            valuation: Math.round(prev.fundingAmount / (parseInt(e.target.value) / 100))
                          }))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-primary"
                          style={{
                            background: `linear-gradient(to right, #00285C 0%, #00285C ${fundingCalculator.equityPercentage}%, #e5e7eb ${fundingCalculator.equityPercentage}%, #e5e7eb 100%)`
                          }}
                        />
                        <div className="text-center mt-2 font-bold text-accent">
                          {fundingCalculator.equityPercentage}%
                        </div>
                      </div>
                    </div>

                    {/* Calculated Valuation */}
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">
                          {language === 'ar' ? 'التقييم المحسوب' : 'Calculated Valuation'}
                        </div>
                        <div className="text-2xl font-bold text-primary">
                          ${fundingCalculator.valuation.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>

      {/* Portfolio Companies */}
      <Section background="white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.portfolioTitle}
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {portfolioCompanies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                  activePortfolioCompany === index ? 'border-accent' : 'border-gray-100'
                }`}
                onClick={() => setActivePortfolioCompany(index)}
              >
                <div className="flex items-start gap-4 mb-4">
                  {company.logo}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-primary">{company.name}</h3>
                      <div className="flex items-center gap-1 bg-accent bg-opacity-10 text-accent px-2 py-1 rounded-full text-sm">
                        <TrendingUp className="w-3 h-3" />
                        {company.roi}
                      </div>
                    </div>
                    <p className="text-accent font-medium mb-1">{company.industry[language]}</p>
                    <p className="text-sm text-gray-600 mb-3">{company.description[language]}</p>
                  </div>
                </div>

                {/* Funding Details */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-primary">{company.fundingAmount[language]}</div>
                    <div className="text-xs text-gray-600">
                      {language === 'ar' ? 'التمويل' : 'Funding'}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-accent">{company.valuation[language]}</div>
                    <div className="text-xs text-gray-600">
                      {language === 'ar' ? 'التقييم' : 'Valuation'}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-primary-dark">{company.fundingStage[language]}</div>
                    <div className="text-xs text-gray-600">
                      {language === 'ar' ? 'المرحلة' : 'Stage'}
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{language === 'ar' ? 'المستخدمون:' : 'Users:'}</span>
                    <span className="font-medium text-primary">{company.metrics.users[language]}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{language === 'ar' ? 'الإيرادات:' : 'Revenue:'}</span>
                    <span className="font-medium text-accent">{company.metrics.revenue[language]}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{language === 'ar' ? 'النمو:' : 'Growth:'}</span>
                    <span className="font-medium text-accent-dark">{company.metrics.growth}</span>
                  </div>
                </div>

                {/* Founders */}
                <div>
                  <span className="text-xs text-gray-500">{language === 'ar' ? 'المؤسسون:' : 'Founders:'}</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {company.founders.map((founder, idx) => (
                      <span key={idx} className="bg-primary text-accent-light px-2 py-1 rounded text-xs">
                        {founder}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Investment Process */}
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
            {/* Process Timeline - moved behind with lower z-index */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent rounded-full hidden lg:block z-0"></div>
            
            <div className="space-y-8 relative z-10">
              {investmentProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <div className={`bg-white rounded-2xl shadow-lg p-6 ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white`}>
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-primary">{step.title[language]}</h3>
                          <p className="text-accent text-sm">{step.duration[language]}</p>
                        </div>
                      </div>
                      <p className="text-gray-700">{step.description[language]}</p>
                    </div>
                  </div>

                  {/* Step Number - with higher z-index and background */}
                  <div className="hidden lg:block relative z-20">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg border-4 border-white">
                      {step.step}
                    </div>
                  </div>

                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Post-Investment Support */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.supportTitle}
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {postInvestmentSupport.map((support, index) => (
              <motion.div
                key={support.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${support.color} rounded-2xl flex items-center justify-center text-white`}>
                    {support.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary">{support.title[language]}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{support.description[language]}</p>
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
              <div className="text-6xl mb-6">💰</div>
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
                  <FileText className="w-5 h-5" />
                  {c.applyFunding}
                </button>
                <button 
                  className="bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Upload className="w-5 h-5" />
                  {c.pitchDeck}
                </button>
                <button 
                  className="bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-20 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {c.fundingGuide}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SeedFundingPrograms;