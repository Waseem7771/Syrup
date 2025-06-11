import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { 
  Users, 
  Zap, 
  Coffee, 
  Wifi, 
  Calendar, 
  Clock, 
  MapPin, 
  Star, 
  ArrowRight, 
  Play, 
  Pause,
  Volume2,
  Heart,
  MessageCircle,
  Share2,
  Eye,
  Network,
  Lightbulb,
  Target,
  Award,
  Handshake,
  Rocket,
  TrendingUp
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import sharedOfficeHeaderImage from '../../assets/images/20.png';

const SharedOffices: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeSpace, setActiveSpace] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [liveCounter, setLiveCounter] = useState(47);

  // Animate live members counter
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCounter(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newValue = prev + change;
        return Math.max(35, Math.min(65, newValue));
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      title: "Shared Coworking Spaces",
      subtitle: "Join Syria's most vibrant coworking community - where startups collaborate, grow, and succeed together",
      hero: "Where Innovation Meets Community",
      heroDesc: "Experience the future of work in our premium coworking spaces designed for Syrian entrepreneurs, freelancers, and growing teams.",
      liveMembers: "Active Members Right Now",
      spacesTitle: "Explore Our Spaces",
      communityTitle: "Thriving Community",
      membershipTitle: "Membership Plans",
      amenitiesTitle: "Premium Amenities",
      eventsTitle: "Community Events",
      testimonialsTitle: "Member Stories",
      ctaTitle: "Ready to Join Our Community?",
      ctaDesc: "Start your coworking journey today and connect with Syria's most innovative minds.",
      bookTour: "Book a Tour",
      joinNow: "Join Community",
      watchVideo: "Watch Tour",
      viewAll: "View All Events"
    },
    ar: {
      title: "مساحات العمل المشتركة",
      subtitle: "انضم لأكثر مجتمعات العمل المشترك حيوية في سوريا - حيث تتعاون الشركات الناشئة وتنمو وتنجح معاً",
      hero: "حيث يلتقي الابتكار بالمجتمع",
      heroDesc: "اختبر مستقبل العمل في مساحات العمل المشترك المتميزة المصممة لرجال الأعمال السوريين والمستقلين والفرق المتنامية.",
      liveMembers: "الأعضاء النشطون الآن",
      spacesTitle: "استكشف مساحاتنا",
      communityTitle: "مجتمع مزدهر",
      membershipTitle: "خطط العضوية",
      amenitiesTitle: "وسائل راحة متميزة",
      eventsTitle: "فعاليات المجتمع",
      testimonialsTitle: "قصص الأعضاء",
      ctaTitle: "مستعد للانضمام لمجتمعنا؟",
      ctaDesc: "ابدأ رحلة العمل المشترك اليوم وتواصل مع أكثر العقول إبداعاً في سوريا.",
      bookTour: "احجز جولة",
      joinNow: "انضم للمجتمع",
      watchVideo: "شاهد الجولة",
      viewAll: "عرض جميع الفعاليات"
    }
  };

  const spaces = [
    {
      id: 'open',
      name: { en: 'Open Workspace', ar: 'مساحة العمل المفتوحة' },
      capacity: '50+',
      emoji: '🌟',
      color: 'from-primary to-accent', // Changed to website colors
      features: {
        en: ['Hot desks', 'Natural lighting', 'Collaborative environment', 'Flexible seating'],
        ar: ['مكاتب متنقلة', 'إضاءة طبيعية', 'بيئة تعاونية', 'مقاعد مرنة']
      }
    },
    {
      id: 'private',
      name: { en: 'Private Offices', ar: 'المكاتب الخاصة' },
      capacity: '2-8',
      emoji: '🏢',
      color: 'from-accent to-primary', // Changed to website colors
      features: {
        en: ['Dedicated space', 'Soundproof', 'Custom branding', 'Team privacy'],
        ar: ['مساحة مخصصة', 'عازل للصوت', 'علامة تجارية مخصصة', 'خصوصية الفريق']
      }
    },
    {
      id: 'meeting',
      name: { en: 'Meeting Rooms', ar: 'قاعات الاجتماعات' },
      capacity: '4-20',
      emoji: '📊',
      color: 'from-primary-dark to-primary', // Changed to website colors
      features: {
        en: ['Video conferencing', 'Presentation tools', 'Booking system', 'Professional setup'],
        ar: ['مؤتمرات فيديو', 'أدوات العرض', 'نظام الحجز', 'إعداد محترف']
      }
    },
    {
      id: 'creative',
      name: { en: 'Creative Lounge', ar: 'صالة الإبداع' },
      capacity: '15+',
      emoji: '🎨',
      color: 'from-accent-dark to-accent', // Changed to website colors
      features: {
        en: ['Relaxed atmosphere', 'Brainstorming areas', 'Comfortable seating', 'Inspiration walls'],
        ar: ['جو مريح', 'مناطق العصف الذهني', 'مقاعد مريحة', 'جدران الإلهام']
      }
    }
  ];

  const memberships = [
    {
      type: { en: 'Day Pass', ar: 'تذكرة يومية' },
      price: '$15',
      period: { en: '/day', ar: '/يوم' },
      features: {
        en: ['Full day access', 'All amenities', 'Networking events', 'Basic support'],
        ar: ['وصول لليوم الكامل', 'جميع الوسائل', 'فعاليات التواصل', 'دعم أساسي']
      },
      popular: false,
      color: 'bg-blue-50 border-blue-200 text-blue-600'
    },
    {
      type: { en: 'Hot Desk', ar: 'مكتب متنقل' },
      price: '$199',
      period: { en: '/month', ar: '/شهر' },
      features: {
        en: ['Unlimited access', 'All spaces', 'Priority booking', 'Community perks'],
        ar: ['وصول غير محدود', 'جميع المساحات', 'حجز بأولوية', 'مزايا المجتمع']
      },
      popular: true,
      color: 'bg-primary text-accent-light'
    },
    {
      type: { en: 'Dedicated Desk', ar: 'مكتب مخصص' },
      price: '$399',
      period: { en: '/month', ar: '/شهر' },
      features: {
        en: ['Your own desk', 'Storage space', 'Mail handling', 'Phone booth access'],
        ar: ['مكتبك الخاص', 'مساحة تخزين', 'معالجة البريد', 'وصول لكابينة الهاتف']
      },
      popular: false,
      color: 'bg-purple-50 border-purple-200 text-purple-600'
    }
  ];

  const amenities = [
    { icon: <Wifi className="w-8 h-8" />, name: { en: 'Ultra-fast WiFi', ar: 'واي فاي فائق السرعة' }, color: 'text-blue-500' },
    { icon: <Coffee className="w-8 h-8" />, name: { en: 'Premium Coffee', ar: 'قهوة متميزة' }, color: 'text-amber-600' },
    { icon: <Users className="w-8 h-8" />, name: { en: 'Community Events', ar: 'فعاليات مجتمعية' }, color: 'text-green-500' },
    { icon: <Zap className="w-8 h-8" />, name: { en: 'Power Outlets', ar: 'منافذ كهرباء' }, color: 'text-yellow-500' },
    { icon: <Calendar className="w-8 h-8" />, name: { en: 'Room Booking', ar: 'حجز القاعات' }, color: 'text-purple-500' },
    { icon: <Clock className="w-8 h-8" />, name: { en: '24/7 Access', ar: 'وصول على مدار الساعة' }, color: 'text-red-500' }
  ];

  const upcomingEvents = [
    {
      title: { en: 'Startup Pitch Night', ar: 'ليلة عرض الشركات الناشئة' },
      date: { en: 'Tomorrow, 7:00 PM', ar: 'غداً، 7:00 مساءً' },
      attendees: 24,
      type: { en: 'Networking', ar: 'تواصل' },
      emoji: '🚀'
    },
    {
      title: { en: 'Tech Talk: AI in Business', ar: 'محاضرة تقنية: الذكاء الاصطناعي في الأعمال' },
      date: { en: 'Friday, 2:00 PM', ar: 'الجمعة، 2:00 مساءً' },
      attendees: 18,
      type: { en: 'Workshop', ar: 'ورشة عمل' },
      emoji: '🤖'
    },
    {
      title: { en: 'Coffee & Connections', ar: 'قهوة وتواصل' },
      date: { en: 'Next Week', ar: 'الأسبوع القادم' },
      attendees: 35,
      type: { en: 'Social', ar: 'اجتماعي' },
      emoji: '☕'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmad Al-Hassan',
      role: { en: 'Tech Startup Founder', ar: 'مؤسس شركة تقنية ناشئة' },
      avatar: '👨‍💻',
      quote: {
        en: "This coworking space transformed my business. The networking opportunities are incredible!",
        ar: "هذه المساحة المشتركة حولت أعمالي. فرص التواصل مذهلة!"
      },
      rating: 5
    },
    {
      name: 'Lina Mahmoud',
      role: { en: 'Freelance Designer', ar: 'مصممة حرة' },
      avatar: '👩‍🎨',
      quote: {
        en: "Perfect environment for creativity. I've made amazing connections here.",
        ar: "بيئة مثالية للإبداع. لقد كونت علاقات مذهلة هنا."
      },
      rating: 5
    },
    {
      name: 'Omar Khalil',
      role: { en: 'Digital Marketing Expert', ar: 'خبير تسويق رقمي' },
      avatar: '👨‍💼',
      quote: {
        en: "The facilities are top-notch and the community is very supportive.",
        ar: "المرافق من الدرجة الأولى والمجتمع داعم جداً."
      },
      rating: 5
    }
  ];

  const communityStats = [
    { number: '250+', label: { en: 'Active Members', ar: 'عضو نشط' }, icon: <Users className="w-6 h-6" />, color: 'text-blue-600' },
    { number: '50+', label: { en: 'Companies', ar: 'شركة' }, icon: <Network className="w-6 h-6" />, color: 'text-green-600' },
    { number: '120+', label: { en: 'Events/Year', ar: 'فعالية/سنة' }, icon: <Calendar className="w-6 h-6" />, color: 'text-purple-600' },
    { number: '98%', label: { en: 'Satisfaction', ar: 'رضا' }, icon: <Star className="w-6 h-6" />, color: 'text-amber-600' }
  ];

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={sharedOfficeHeaderImage}
      />

      {/* Hero Section with Live Counter */}
      <Section background="white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-primary mb-6"
            >
              {c.hero}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              {c.heroDesc}
            </motion.p>

            {/* Live Members Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-accent-light">{c.liveMembers}</span>
              </div>
              <motion.div
                key={liveCounter}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold text-accent"
              >
                {liveCounter}
              </motion.div>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => navigate('/register')}
              className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Users className="w-5 h-5" />
              {c.joinNow}
            </button>
            <button 
              onClick={() => navigate('/register')}
              className="bg-white hover:bg-gray-50 text-primary border-2 border-primary font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Eye className="w-5 h-5" />
              {c.bookTour}
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-accent hover:bg-accent-dark text-primary font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              {c.watchVideo}
            </button>
          </div>
        </div>
      </Section>

      {/* Interactive Spaces Explorer */}
      <Section background="light">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.spacesTitle}
          </motion.h2>

          {/* Space Navigator */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {spaces.map((space, index) => (
              <button
                key={space.id}
                onClick={() => setActiveSpace(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeSpace === index
                    ? 'bg-primary text-accent-light shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:text-primary hover:shadow-md'
                }`}
              >
                <span className="text-2xl">{space.emoji}</span>
                <span>{space.name[language]}</span>
                <span className="text-sm opacity-75">({space.capacity})</span>
              </button>
            ))}
          </div>

          {/* Active Space Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSpace}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
            >
              <div className={`h-64 bg-gradient-to-br ${spaces[activeSpace].color} flex items-center justify-center relative`}>
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">{spaces[activeSpace].emoji}</div>
                  <h3 className="text-2xl font-bold mb-2">{spaces[activeSpace].name[language]}</h3>
                  <p className="text-lg opacity-90">Capacity: {spaces[activeSpace].capacity} people</p>
                </div>
                
                {/* Floating Feature Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  {spaces[activeSpace].features[language].slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-4">
                      {language === 'ar' ? 'الميزات' : 'Features'}
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {spaces[activeSpace].features[language].map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700">
                          <Star className="w-4 h-4 text-accent" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <button className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
                      <ArrowRight className="w-5 h-5" />
                      {language === 'ar' ? 'احجز هذه المساحة' : 'Book This Space'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>

      {/* Community Stats & Vibes */}
      <Section background="primary">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-accent text-center mb-12"
          >
            {c.communityTitle}
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`${stat.color} bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label[language]}</div>
              </motion.div>
            ))}
          </div>

          {/* Community Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-yellow-500" />
                <h3 className="text-lg font-bold text-primary">
                  {language === 'ar' ? 'بيئة إبداعية' : 'Creative Environment'}
                </h3>
              </div>
              <p className="text-gray-600">
                {language === 'ar' 
                  ? 'مساحة مصممة لتحفيز الإبداع والابتكار بين الأعضاء'
                  : 'Space designed to inspire creativity and innovation among members'
                }
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Handshake className="w-8 h-8 text-blue-500" />
                <h3 className="text-lg font-bold text-primary">
                  {language === 'ar' ? 'شراكات قوية' : 'Strong Partnerships'}
                </h3>
              </div>
              <p className="text-gray-600">
                {language === 'ar' 
                  ? 'فرص لا محدودة للتعاون وبناء شراكات تجارية مثمرة'
                  : 'Unlimited opportunities for collaboration and building fruitful partnerships'
                }
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-green-500" />
                <h3 className="text-lg font-bold text-primary">
                  {language === 'ar' ? 'نمو مستمر' : 'Continuous Growth'}
                </h3>
              </div>
              <p className="text-gray-600">
                {language === 'ar' 
                  ? 'برامج ودعم مستمر لنمو وتطوير أعمال الأعضاء'
                  : 'Ongoing programs and support for member business growth and development'
                }
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Premium Amenities Showcase */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.amenitiesTitle}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`${amenity.color} group-hover:scale-110 transition-transform duration-300 mb-4`}>
                  {amenity.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {amenity.name[language]}
                </h3>
                <div className={`w-12 h-1 ${amenity.color} bg-current rounded-full mx-auto opacity-50`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Upcoming Events Feed */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary"
            >
              {c.eventsTitle}
            </motion.h2>
            <button className="text-primary hover:text-primary-dark font-medium flex items-center gap-2">
              {c.viewAll}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{event.emoji}</div>
                  <span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {event.type[language]}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-primary-dark transition-colors">
                  {event.title[language]}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{event.date[language]}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} {language === 'ar' ? 'مشارك' : 'attendees'}</span>
                  </div>
                  <button className="text-primary hover:text-primary-dark font-medium text-sm">
                    {language === 'ar' ? 'انضم' : 'Join'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Member Testimonials Carousel */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.testimonialsTitle}
          </motion.h2>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 text-white text-center"
              >
                <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                <blockquote className="text-xl italic mb-6 text-accent-light">
                  "{testimonials[currentTestimonial].quote[language]}"
                </blockquote>
                <div className="mb-4">
                  <h4 className="text-lg font-bold text-accent">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-accent-light opacity-90">{testimonials[currentTestimonial].role[language]}</p>
                </div>
                <div className="flex justify-center gap-1">
                  {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentTestimonial === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Membership Plans */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.membershipTitle}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {memberships.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                  plan.popular 
                    ? 'transform scale-105 border-2 border-primary' 
                    : 'bg-white border border-gray-200'
                } ${plan.color}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-primary px-4 py-1 rounded-full text-sm font-bold">
                      {language === 'ar' ? 'الأكثر شعبية' : 'Most Popular'}
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-accent' : 'text-primary'}`}>
                    {plan.type[language]}
                  </h3>
                  <div className={`mb-6 ${plan.popular ? 'text-accent' : 'text-primary'}`}>
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-lg opacity-75">{plan.period[language]}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features[language].map((feature, idx) => (
                      <li key={idx} className={`flex items-center gap-3 ${plan.popular ? 'text-accent-light' : 'text-gray-700'}`}>
                        <Star className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-accent' : 'text-accent'}`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-accent hover:bg-accent-dark text-primary'
                        : 'bg-primary hover:bg-primary-dark text-accent-light'
                    }`}
                  >
                    {language === 'ar' ? 'اختر هذه الخطة' : 'Choose Plan'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                {c.ctaTitle}
              </h2>
              <p className="text-primary text-lg mb-8 leading-relaxed">
                {c.ctaDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                  {c.joinNow}
                </button>
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-accent hover:bg-accent-dark text-primary font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  {c.bookTour}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SharedOffices;