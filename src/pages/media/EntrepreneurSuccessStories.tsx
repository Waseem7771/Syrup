import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { useLanguage } from '../../contexts/LanguageContext';
import headerImage from '../../assets/images/21.png';
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  TrendingUp,
  Users,
  DollarSign,
  Award,
  Calendar,
  MapPin,
  Briefcase,
  Heart,
  Share2,
  BookOpen,
  Target,
  Rocket,
  Crown,
  Zap,
  Globe,
  Building,
  Coffee,
  Palette,
  Smartphone,
  ArrowRight,
  PlayCircle,
  Clock,
  CheckCircle,
  BarChart3,
  PieChart,
  Eye,
  MessageCircle,
  ThumbsUp,
  Bookmark,
  Trophy
} from 'lucide-react';

const EntrepreneurSuccessStories: React.FC = () => {
  const { language } = useLanguage();
  const [activeStory, setActiveStory] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [storyFilter, setStoryFilter] = useState('all');

  // Auto-advance story chapters
  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        const currentStory = successStories[activeStory];
        if (activeChapter < currentStory.timeline.length - 1) {
          setActiveChapter(prev => prev + 1);
        } else {
          setIsPlaying(false);
          setActiveChapter(0);
        }
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isPlaying, activeChapter, activeStory]);

  // Simulate reading progress
  useEffect(() => {
    const timer = setTimeout(() => {
      setReadingProgress(75);
    }, 2000);
    return () => clearTimeout(timer);
  }, [activeStory]);

  const content = {
    en: {
      title: "Entrepreneurs' Success Stories",
      subtitle: "Inspiring journeys of Syrian entrepreneurs who transformed challenges into opportunities and built thriving businesses from the ground up",
      
      // Navigation
      allStories: "All Stories",
      techStories: "Tech Ventures",
      businessStories: "Traditional Business",
      socialStories: "Social Impact",
      
      // Story Details
      readStory: "Read Full Story",
      watchVideo: "Watch Journey",
      shareStory: "Share Story",
      saveStory: "Save Story",
      nextChapter: "Next Chapter",
      previousChapter: "Previous Chapter",
      
      // Metrics
      readingTime: "min read",
      published: "Published",
      views: "views",
      likes: "likes",
      
      // Interactive
      playStory: "Play Story",
      pauseStory: "Pause Story",
      restartStory: "Restart",
      
      // CTA
      inspireOthers: "Share Your Story",
      joinCommunity: "Join Entrepreneur Community"
    },
    ar: {
      title: "قصص نجاح رواد الأعمال",
      subtitle: "رحلات ملهمة لرواد أعمال سوريين حولوا التحديات إلى فرص وبنوا أعمالاً مزدهرة من الصفر",
      
      // Navigation
      allStories: "جميع القصص",
      techStories: "المشاريع التقنية",
      businessStories: "الأعمال التقليدية",
      socialStories: "التأثير الاجتماعي",
      
      // Story Details
      readStory: "اقرأ القصة كاملة",
      watchVideo: "شاهد الرحلة",
      shareStory: "شارك القصة",
      saveStory: "احفظ القصة",
      nextChapter: "الفصل التالي",
      previousChapter: "الفصل السابق",
      
      // Metrics
      readingTime: "دقيقة قراءة",
      published: "نُشر في",
      views: "مشاهدة",
      likes: "إعجاب",
      
      // Interactive
      playStory: "تشغيل القصة",
      pauseStory: "إيقاف مؤقت",
      restartStory: "إعادة تشغيل",
      
      // CTA
      inspireOthers: "شارك قصتك",
      joinCommunity: "انضم لمجتمع رواد الأعمال"
    }
  };

  const successStories = [
    {
      id: 1,
      category: 'tech',
      entrepreneur: {
        name: 'Amira Hassan',
        age: 28,
        city: { en: 'Damascus', ar: 'دمشق' },
        title: { en: 'CEO & Founder', ar: 'المدير التنفيذي والمؤسس' },
        photo: (
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
            AH
          </div>
        )
      },
      company: {
        name: 'EduTech Syria',
        industry: { en: 'Educational Technology', ar: 'تقنية التعليم' },
        founded: 2019,
        employees: 35,
        revenue: { en: '$2.5M annually', ar: '2.5 مليون دولار سنوياً' },
        logo: <Smartphone className="w-8 h-8" />
      },
      story: {
        title: { 
          en: 'From Refugee Teacher to EdTech Pioneer', 
          ar: 'من معلمة لاجئة إلى رائدة تقنية التعليم' 
        },
        summary: {
          en: 'How Amira transformed her experience as a displaced teacher into a revolutionary educational platform serving over 100,000 Syrian students',
          ar: 'كيف حولت أميرة تجربتها كمعلمة نازحة إلى منصة تعليمية ثورية تخدم أكثر من 100,000 طالب سوري'
        },
        readingTime: 8,
        views: 15420,
        likes: 892,
        publishDate: 'March 2024'
      },
      timeline: [
        {
          year: 2015,
          title: { en: 'The Challenge', ar: 'التحدي' },
          description: {
            en: 'Amira was forced to leave her teaching job in Aleppo due to the conflict, finding herself in Damascus with limited resources but unlimited determination.',
            ar: 'أُجبرت أميرة على ترك عملها في التدريس في حلب بسبب النزاع، لتجد نفسها في دمشق بموارد محدودة لكن بعزيمة لا محدودة.'
          },
          icon: <Target className="w-6 h-6" />,
          color: 'from-primary to-primary-dark'
        },
        {
          year: 2017,
          title: { en: 'The Spark', ar: 'الشرارة' },
          description: {
            en: 'While volunteering at a refugee center, Amira noticed how technology could bridge educational gaps for displaced children.',
            ar: 'أثناء التطوع في مركز للاجئين، لاحظت أميرة كيف يمكن للتكنولوجيا أن تسد الفجوات التعليمية للأطفال النازحين.'
          },
          icon: <Zap className="w-6 h-6" />,
          color: 'from-accent to-accent-dark'
        },
        {
          year: 2019,
          title: { en: 'The Launch', ar: 'الإطلاق' },
          description: {
            en: 'With $5,000 in savings and a borrowed laptop, Amira launched EduTech Syria from her small apartment.',
            ar: 'بـ 5,000 دولار من مدخراتها وجهاز كمبيوتر محمول مستعار، أطلقت أميرة EduTech Syria من شقتها الصغيرة.'
          },
          icon: <Rocket className="w-6 h-6" />,
          color: 'from-primary-dark to-accent'
        },
        {
          year: 2021,
          title: { en: 'The Growth', ar: 'النمو' },
          description: {
            en: 'The platform reached 50,000 students and secured $500K in seed funding from international investors.',
            ar: 'وصلت المنصة إلى 50,000 طالب وحصلت على 500,000 دولار تمويل أولي من مستثمرين دوليين.'
          },
          icon: <TrendingUp className="w-6 h-6" />,
          color: 'from-accent-dark to-primary'
        },
        {
          year: 2024,
          title: { en: 'The Impact', ar: 'التأثير' },
          description: {
            en: 'Today, EduTech Syria serves over 100,000 students across the Middle East and employs 35 people.',
            ar: 'اليوم، تخدم EduTech Syria أكثر من 100,000 طالب عبر الشرق الأوسط وتوظف 35 شخصاً.'
          },
          icon: <Crown className="w-6 h-6" />,
          color: 'from-primary to-accent'
        }
      ],
      achievements: [
        { metric: '100K+', label: { en: 'Students Served', ar: 'طالب خدموا' } },
        { metric: '$2.5M', label: { en: 'Annual Revenue', ar: 'إيرادات سنوية' } },
        { metric: '35', label: { en: 'Team Members', ar: 'أعضاء الفريق' } },
        { metric: '15', label: { en: 'Countries', ar: 'دولة' } }
      ],
      quote: {
        en: "Every challenge taught me that innovation isn't about having resources—it's about seeing opportunities where others see obstacles.",
        ar: "علمني كل تحدي أن الابتكار ليس بامتلاك الموارد، بل برؤية الفرص حيث يرى الآخرون العقبات."
      }
    },
    {
      id: 2,
      category: 'business',
      entrepreneur: {
        name: 'Omar Al-Rashid',
        age: 35,
        city: { en: 'Aleppo', ar: 'حلب' },
        title: { en: 'Founder & Chairman', ar: 'المؤسس ورئيس مجلس الإدارة' },
        photo: (
          <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center text-white text-2xl font-bold">
            OR
          </div>
        )
      },
      company: {
        name: 'Heritage Coffee Co.',
        industry: { en: 'Food & Beverage', ar: 'الأغذية والمشروبات' },
        founded: 2018,
        employees: 120,
        revenue: { en: '$4.2M annually', ar: '4.2 مليون دولار سنوياً' },
        logo: <Coffee className="w-8 h-8" />
      },
      story: {
        title: { 
          en: 'Brewing Community Through Crisis', 
          ar: 'صنع المجتمع من خلال الأزمة' 
        },
        summary: {
          en: 'Omar turned his family\'s traditional coffee recipe into a thriving business that now employs 120 people and serves as a community hub',
          ar: 'حول عمر وصفة القهوة التقليدية لعائلته إلى مشروع مزدهر يوظف الآن 120 شخصاً ويعمل كمركز مجتمعي'
        },
        readingTime: 6,
        views: 12380,
        likes: 634,
        publishDate: 'February 2024'
      },
      timeline: [
        {
          year: 2016,
          title: { en: 'The Heritage', ar: 'التراث' },
          description: {
            en: 'Omar inherited his grandfather\'s secret coffee blend recipe, passed down through four generations in Aleppo.',
            ar: 'ورث عمر وصفة خلطة القهوة السرية لجده، المتوارثة عبر أربعة أجيال في حلب.'
          },
          icon: <Heart className="w-6 h-6" />,
          color: 'from-accent to-accent-dark'
        },
        {
          year: 2018,
          title: { en: 'The First Café', ar: 'المقهى الأول' },
          description: {
            en: 'With limited capital, Omar opened a small café in Damascus, focusing on authentic Syrian coffee culture.',
            ar: 'برأس مال محدود، افتتح عمر مقهى صغيراً في دمشق، مركزاً على ثقافة القهوة السورية الأصيلة.'
          },
          icon: <Building className="w-6 h-6" />,
          color: 'from-primary to-primary-dark'
        },
        {
          year: 2020,
          title: { en: 'Community Hub', ar: 'مركز مجتمعي' },
          description: {
            en: 'During the pandemic, Omar transformed his café into a community support center, providing free meals and job training.',
            ar: 'خلال الجائحة، حول عمر مقهاه إلى مركز دعم مجتمعي، يقدم وجبات مجانية وتدريب مهني.'
          },
          icon: <Users className="w-6 h-6" />,
          color: 'from-primary-dark to-accent'
        },
        {
          year: 2022,
          title: { en: 'Expansion', ar: 'التوسع' },
          description: {
            en: 'Heritage Coffee expanded to 8 locations across Syria, each designed to celebrate local culture and employ local talent.',
            ar: 'توسعت Heritage Coffee إلى 8 مواقع عبر سوريا، كل منها مصمم للاحتفال بالثقافة المحلية وتوظيف المواهب المحلية.'
          },
          icon: <Globe className="w-6 h-6" />,
          color: 'from-accent-dark to-primary'
        },
        {
          year: 2024,
          title: { en: 'Legacy', ar: 'الإرث' },
          description: {
            en: 'Today, Heritage Coffee is Syria\'s leading coffee chain, preserving tradition while creating modern opportunities.',
            ar: 'اليوم، Heritage Coffee هي سلسلة المقاهي الرائدة في سوريا، تحافظ على التقاليد بينما تخلق فرصاً عصرية.'
          },
          icon: <Award className="w-6 h-6" />,
          color: 'from-primary to-accent'
        }
      ],
      achievements: [
        { metric: '8', label: { en: 'Café Locations', ar: 'مواقع المقاهي' } },
        { metric: '120', label: { en: 'Employees', ar: 'موظف' } },
        { metric: '$4.2M', label: { en: 'Annual Revenue', ar: 'إيرادات سنوية' } },
        { metric: '50K+', label: { en: 'Monthly Customers', ar: 'عميل شهرياً' } }
      ],
      quote: {
        en: "Business isn't just about profit—it's about preserving culture, building community, and creating hope for the next generation.",
        ar: "العمل ليس فقط عن الربح - إنه عن حفظ الثقافة وبناء المجتمع وخلق الأمل للجيل القادم."
      }
    },
    {
      id: 3,
      category: 'social',
      entrepreneur: {
        name: 'Layla Mansour',
        age: 32,
        city: { en: 'Latakia', ar: 'اللاذقية' },
        title: { en: 'Creative Director', ar: 'المدير الإبداعي' },
        photo: (
          <div className="w-20 h-20 bg-gradient-to-br from-primary-dark to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
            LM
          </div>
        )
      },
      company: {
        name: 'Artisan Collective',
        industry: { en: 'Creative & Design', ar: 'الإبداع والتصميم' },
        founded: 2020,
        employees: 45,
        revenue: { en: '$1.8M annually', ar: '1.8 مليون دولار سنوياً' },
        logo: <Palette className="w-8 h-8" />
      },
      story: {
        title: { 
          en: 'Empowering Creativity Through Design', 
          ar: 'تمكين الإبداع من خلال التصميم' 
        },
        summary: {
          en: 'Layla built a creative empire that not only produces award-winning designs but also empowers young Syrian artists to build sustainable careers',
          ar: 'بنت ليلى إمبراطورية إبداعية لا تنتج فقط تصاميم حائزة على جوائز بل تمكن أيضاً الفنانين السوريين الشباب من بناء مهن مستدامة'
        },
        readingTime: 7,
        views: 9850,
        likes: 756,
        publishDate: 'January 2024'
      },
      timeline: [
        {
          year: 2017,
          title: { en: 'The Vision', ar: 'الرؤية' },
          description: {
            en: 'Layla recognized the untapped creative potential in Syria and envisioned a platform to showcase local artistic talent.',
            ar: 'أدركت ليلى الإمكانات الإبداعية غير المستغلة في سوريا وتصورت منصة لعرض المواهب الفنية المحلية.'
          },
          icon: <Eye className="w-6 h-6" />,
          color: 'from-accent-dark to-primary'
        },
        {
          year: 2019,
          title: { en: 'First Collective', ar: 'المجموعة الأولى' },
          description: {
            en: 'Started with 5 freelance designers, creating a collaborative workspace in a small studio in Latakia.',
            ar: 'بدأت مع 5 مصممين مستقلين، مخلقة مساحة عمل تعاونية في استوديو صغير في اللاذقية.'
          },
          icon: <Users className="w-6 h-6" />,
          color: 'from-primary to-accent'
        },
        {
          year: 2021,
          title: { en: 'Digital Breakthrough', ar: 'الاختراق الرقمي' },
          description: {
            en: 'Launched an online platform connecting Syrian designers with international clients, generating global recognition.',
            ar: 'أطلقت منصة إلكترونية تربط المصممين السوريين بالعملاء الدوليين، محققة اعترافاً عالمياً.'
          },
          icon: <Globe className="w-6 h-6" />,
          color: 'from-primary-dark to-accent'
        },
        {
          year: 2022,
          title: { en: 'Training Academy', ar: 'أكاديمية التدريب' },
          description: {
            en: 'Established a design academy offering free courses to underprivileged youth, training over 200 students.',
            ar: 'أسست أكاديمية تصميم تقدم دورات مجانية للشباب المحرومين، دربت أكثر من 200 طالب.'
          },
          icon: <BookOpen className="w-6 h-6" />,
          color: 'from-accent to-accent-dark'
        },
        {
          year: 2024,
          title: { en: 'International Recognition', ar: 'الاعتراف الدولي' },
          description: {
            en: 'Artisan Collective won the Middle East Creative Excellence Award and expanded to serve clients globally.',
            ar: 'فازت Artisan Collective بجائزة التميز الإبداعي للشرق الأوسط وتوسعت لخدمة العملاء عالمياً.'
          },
          icon: <Trophy className="w-6 h-6" />,
          color: 'from-primary to-accent'
        }
      ],
      achievements: [
        { metric: '45', label: { en: 'Designers', ar: 'مصمم' } },
        { metric: '200+', label: { en: 'Students Trained', ar: 'طالب مدرب' } },
        { metric: '$1.8M', label: { en: 'Annual Revenue', ar: 'إيرادات سنوية' } },
        { metric: '25', label: { en: 'Countries Served', ar: 'دولة تُخدم' } }
      ],
      quote: {
        en: "Art has the power to heal, inspire, and transform. By empowering creators, we're not just building businesses—we're rebuilding dreams.",
        ar: "للفن قوة على الشفاء والإلهام والتحويل. بتمكين المبدعين، لا نبني فقط أعمالاً - بل نعيد بناء الأحلام."
      }
    }
  ];

  const filteredStories = storyFilter === 'all' 
    ? successStories 
    : successStories.filter(story => story.category === storyFilter);

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={headerImage}
      />

      {/* Story Navigation */}
      <Section background="white">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-2xl p-2">
              <div className="flex gap-2">
                {[
                  { id: 'all', label: c.allStories, icon: <Star className="w-4 h-4" /> },
                  { id: 'tech', label: c.techStories, icon: <Smartphone className="w-4 h-4" /> },
                  { id: 'business', label: c.businessStories, icon: <Briefcase className="w-4 h-4" /> },
                  { id: 'social', label: c.socialStories, icon: <Heart className="w-4 h-4" /> }
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setStoryFilter(filter.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                      storyFilter === filter.id
                        ? 'bg-primary text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {filter.icon}
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Story Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {filteredStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                  activeStory === index ? 'ring-2 ring-accent' : ''
                }`}
                onClick={() => {
                  setActiveStory(index);
                  setActiveChapter(0);
                  setIsPlaying(false);
                }}
              >
                {/* Story Header */}
                <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    {story.entrepreneur.photo}
                    <div>
                      <h3 className="font-bold text-lg">{story.entrepreneur.name}</h3>
                      <p className="text-accent-light opacity-75">{story.entrepreneur.title[language]}</p>
                      <div className="flex items-center gap-1 text-accent-light opacity-75 text-sm">
                        <MapPin className="w-3 h-3" />
                        {story.entrepreneur.city[language]}
                      </div>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-accent-light mb-2">
                    {story.story.title[language]}
                  </h4>
                </div>

                {/* Story Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {story.story.summary[language]}
                  </p>

                  {/* Company Info */}
                  <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white">
                      {story.company.logo}
                    </div>
                    <div>
                      <div className="font-bold text-primary">{story.company.name}</div>
                      <div className="text-sm text-gray-600">{story.company.industry[language]}</div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{story.story.readingTime}</div>
                      <div className="text-xs text-gray-600">{c.readingTime}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent">{story.story.views.toLocaleString()}</div>
                      <div className="text-xs text-gray-600">{c.views}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent-dark">{story.story.likes}</div>
                      <div className="text-xs text-gray-600">{c.likes}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg transition-all duration-300 text-sm">
                      {c.readStory}
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-lg transition-all duration-300">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-lg transition-all duration-300">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Interactive Story Reader */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Story Reader Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {successStories[activeStory].entrepreneur.photo}
                  <div>
                    <h2 className="text-2xl font-bold text-accent-light">
                      {successStories[activeStory].story.title[language]}
                    </h2>
                    <p className="text-accent-light opacity-75">
                      {successStories[activeStory].entrepreneur.name} • {successStories[activeStory].story.publishDate}
                    </p>
                  </div>
                </div>
                
                {/* Story Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-accent-light hover:bg-white text-primary p-3 rounded-full transition-all duration-300"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={() => {
                      setActiveChapter(0);
                      setIsPlaying(false);
                    }}
                    className="bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 text-accent-light p-3 rounded-full transition-all duration-300"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Reading Progress */}
              <div className="mt-4">
                <div className="bg-white bg-opacity-20 rounded-full h-2">
                  <motion.div
                    className="bg-accent-light h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${readingProgress}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            </div>

            {/* Story Timeline */}
            <div className="p-8">
              <div className="flex justify-center mb-8">
                <div className="flex gap-2 bg-gray-100 rounded-2xl p-2">
                  {successStories[activeStory].timeline.map((chapter, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveChapter(index)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                        activeChapter === index
                          ? 'bg-primary text-white shadow-md'
                          : 'text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {chapter.icon}
                      <span className="font-medium">{chapter.year}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Chapter */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChapter}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center max-w-3xl mx-auto"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${successStories[activeStory].timeline[activeChapter].color} rounded-full flex items-center justify-center text-white mx-auto mb-6`}>
                    {successStories[activeStory].timeline[activeChapter].icon}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    {successStories[activeStory].timeline[activeChapter].title[language]}
                  </h3>
                  
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    {successStories[activeStory].timeline[activeChapter].description[language]}
                  </p>

                  {/* Chapter Navigation */}
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => setActiveChapter(Math.max(0, activeChapter - 1))}
                      disabled={activeChapter === 0}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      {c.previousChapter}
                    </button>
                    <button
                      onClick={() => setActiveChapter(Math.min(successStories[activeStory].timeline.length - 1, activeChapter + 1))}
                      disabled={activeChapter === successStories[activeStory].timeline.length - 1}
                      className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {c.nextChapter}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Story Footer */}
            <div className="border-t border-gray-100 p-6">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Achievements */}
                <div>
                  <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    {language === 'ar' ? 'الإنجازات الرئيسية' : 'Key Achievements'}
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {successStories[activeStory].achievements.map((achievement, index) => (
                      <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{achievement.metric}</div>
                        <div className="text-sm text-gray-600">{achievement.label[language]}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div>
                  <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <Quote className="w-5 h-5" />
                    {language === 'ar' ? 'رسالة ملهمة' : 'Inspiring Quote'}
                  </h4>
                  <blockquote className="italic text-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border-l-4 border-accent">
                    "{successStories[activeStory].quote[language]}"
                  </blockquote>
                  <div className="text-right mt-3 text-accent font-medium">
                    — {successStories[activeStory].entrepreneur.name}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">✨</div>
            <h2 className="text-3xl font-bold text-accent-light mb-4">
              {language === 'ar' ? 'هل لديك قصة نجاح ملهمة؟' : 'Have an Inspiring Success Story?'}
            </h2>
            <p className="text-accent-light text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'شارك رحلتك الريادية وألهم الجيل القادم من رواد الأعمال السوريين'
                : 'Share your entrepreneurial journey and inspire the next generation of Syrian entrepreneurs'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent-light hover:bg-white text-primary font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                {c.inspireOthers}
              </button>
              <button className="bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                {c.joinCommunity}
              </button>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default EntrepreneurSuccessStories;