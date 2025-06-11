import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { Building2, MapPin, Calendar, Users, Wifi, Car, Coffee, Shield, Phone, Mail, CheckCircle, ArrowRight, Clock, DollarSign, Star, Camera, Monitor, Printer, Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import officeHeaderImage from '../../assets/images/19.png';

const ReadyOfficeRental: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeOfficeType, setActiveOfficeType] = useState('ready');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBookTour = () => {
    navigate('/register');
  };

  const handleGetQuote = () => {
    navigate('/consulting/legal');
  };

  // Simulate office gallery rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      title: "Ready & Virtual Office Rental",
      subtitle: "Premium office solutions for startups and businesses in Syria - from physical spaces to virtual addresses",
      overview: "Flexible Office Solutions",
      overviewDesc: "Whether you need a fully equipped physical office or a prestigious virtual address, we provide comprehensive office solutions tailored for Syrian businesses. Our spaces are designed to enhance productivity and establish your professional presence.",
      officeTypes: "Office Solutions",
      locations: "Prime Locations",
      amenities: "Premium Amenities",
      pricing: "Pricing Plans",
      features: "Key Features",
      virtualBenefits: "Virtual Office Benefits",
      cta: "Ready to Establish Your Office?",
      ctaDesc: "Choose the perfect office solution that fits your business needs and budget.",
      bookTour: "Book Office Tour",
      getQuote: "Get Pricing Quote",
      readyTab: "Ready Offices",
      virtualTab: "Virtual Offices",
      hybridTab: "Hybrid Solutions"
    },
    ar: {
      title: "تأجير المكاتب الجاهزة والافتراضية",
      subtitle: "حلول مكتبية متميزة للشركات الناشئة والأعمال في سوريا - من المساحات الفعلية إلى العناوين الافتراضية",
      overview: "حلول مكتبية مرنة",
      overviewDesc: "سواء كنت تحتاج إلى مكتب فعلي مجهز بالكامل أو عنوان افتراضي مرموق، نحن نقدم حلول مكتبية شاملة مصممة للشركات في سوريا. مساحاتنا مصممة لتعزيز الإنتاجية وترسيخ حضورك المهني.",
      officeTypes: "حلول المكاتب",
      locations: "مواقع متميزة",
      amenities: "وسائل راحة متميزة",
      pricing: "خطط الأسعار",
      features: "الميزات الرئيسية",
      virtualBenefits: "فوائد المكتب الافتراضي",
      cta: "مستعد لتأسيس مكتبك؟",
      ctaDesc: "اختر الحل المكتبي المثالي الذي يناسب احتياجات أعمالك وميزانيتك.",
      bookTour: "احجز جولة المكتب",
      getQuote: "احصل على عرض سعر",
      readyTab: "المكاتب الجاهزة",
      virtualTab: "المكاتب الافتراضية",
      hybridTab: "الحلول المختلطة"
    }
  };

  const officeTypes = [
    {
      id: 'ready',
      icon: <Building2 className="w-8 h-8" />,
      en: {
        title: "Ready Offices",
        description: "Fully furnished, move-in ready offices with all essential amenities",
        features: ["Furnished workspaces", "High-speed internet", "Reception services", "Meeting rooms access", "24/7 security", "Utilities included"]
      },
      ar: {
        title: "المكاتب الجاهزة",
        description: "مكاتب مفروشة بالكامل وجاهزة للانتقال مع جميع الوسائل الأساسية",
        features: ["مساحات عمل مفروشة", "إنترنت عالي السرعة", "خدمات الاستقبال", "الوصول لقاعات الاجتماعات", "أمن على مدار الساعة", "المرافق مشمولة"]
      }
    },
    {
      id: 'virtual',
      icon: <Monitor className="w-8 h-8" />,
      en: {
        title: "Virtual Offices",
        description: "Professional business address with mail handling and call forwarding services",
        features: ["Prestigious address", "Mail forwarding", "Call answering", "Meeting room access", "Business registration", "Professional receptionist"]
      },
      ar: {
        title: "المكاتب الافتراضية",
        description: "عنوان تجاري محترف مع خدمات معالجة البريد وتحويل المكالمات",
        features: ["عنوان مرموق", "إعادة توجيه البريد", "الرد على المكالمات", "الوصول لقاعات الاجتماعات", "تسجيل الأعمال", "موظف استقبال محترف"]
      }
    },
    {
      id: 'hybrid',
      icon: <Users className="w-8 h-8" />,
      en: {
        title: "Hybrid Solutions",
        description: "Combination of virtual address with flexible physical workspace access",
        features: ["Virtual address", "Flexible desk access", "Meeting room hours", "Coworking spaces", "Networking events", "Storage solutions"]
      },
      ar: {
        title: "الحلول المختلطة",
        description: "مزيج من العنوان الافتراضي مع وصول مرن لمساحة العمل الفعلية",
        features: ["عنوان افتراضي", "وصول مرن للمكتب", "ساعات قاعة الاجتماعات", "مساحات العمل المشترك", "فعاليات التواصل", "حلول التخزين"]
      }
    }
  ];

  const locations = [
    {
      name: { en: "Damascus Business District", ar: "منطقة دمشق التجارية" },
      address: { en: "Al-Mazzeh, Damascus", ar: "المزة، دمشق" },
      features: { en: ["Prime location", "Metro access", "Parking available"], ar: ["موقع متميز", "وصول للمترو", "مواقف متاحة"] },
      price: "$800/month",
      image: "🏢"
    },
    {
      name: { en: "Aleppo Commercial Center", ar: "مركز حلب التجاري" },
      address: { en: "New Aleppo, Aleppo", ar: "حلب الجديدة، حلب" },
      features: { en: ["Business hub", "Conference facilities", "Restaurant nearby"], ar: ["مركز أعمال", "مرافق المؤتمرات", "مطعم قريب"] },
      price: "$600/month",
      image: "🏙️"
    },
    {
      name: { en: "Lattakia Port Area", ar: "منطقة ميناء اللاذقية" },
      address: { en: "Port District, Lattakia", ar: "منطقة الميناء، اللاذقية" },
      features: { en: ["Sea view", "Import/Export access", "Modern facilities"], ar: ["إطلالة بحرية", "وصول للاستيراد/التصدير", "مرافق حديثة"] },
      price: "$500/month",
      image: "🌊"
    }
  ];

  const amenities = [
    { icon: <Wifi className="w-6 h-6" />, en: "High-Speed Internet", ar: "إنترنت عالي السرعة" },
    { icon: <Car className="w-6 h-6" />, en: "Parking Spaces", ar: "مساحات وقوف" },
    { icon: <Coffee className="w-6 h-6" />, en: "Coffee & Kitchen", ar: "قهوة ومطبخ" },
    { icon: <Shield className="w-6 h-6" />, en: "24/7 Security", ar: "أمن على مدار الساعة" },
    { icon: <Phone className="w-6 h-6" />, en: "Phone System", ar: "نظام هاتف" },
    { icon: <Printer className="w-6 h-6" />, en: "Printing Services", ar: "خدمات الطباعة" },
    { icon: <Users className="w-6 h-6" />, en: "Meeting Rooms", ar: "قاعات اجتماعات" },
    { icon: <Mail className="w-6 h-6" />, en: "Mail Handling", ar: "معالجة البريد" }
  ];

  const pricingPlans = [
    {
      type: { en: "Virtual Starter", ar: "الافتراضي المبتدئ" },
      price: "$99/month",
      features: {
        en: ["Business address", "Mail forwarding", "Phone answering", "2 hours meeting room"],
        ar: ["عنوان تجاري", "إعادة توجيه البريد", "الرد على الهاتف", "ساعتين قاعة اجتماعات"]
      },
      popular: false
    },
    {
      type: { en: "Ready Office", ar: "المكتب الجاهز" },
      price: "$599/month",
      features: {
        en: ["Private office", "All amenities", "Reception services", "Unlimited meeting rooms"],
        ar: ["مكتب خاص", "جميع الوسائل", "خدمات الاستقبال", "قاعات اجتماعات غير محدودة"]
      },
      popular: true
    },
    {
      type: { en: "Hybrid Premium", ar: "المختلط المتميز" },
      price: "$299/month",
      features: {
        en: ["Virtual address", "10 days office access", "Meeting rooms", "Coworking space"],
        ar: ["عنوان افتراضي", "10 أيام وصول للمكتب", "قاعات اجتماعات", "مساحة عمل مشترك"]
      },
      popular: false
    }
  ];

  const virtualBenefits = [
    {
      icon: <MapPin className="w-12 h-12" />,
      en: { title: "Prestigious Address", description: "Establish credibility with a premium business address" },
      ar: { title: "عنوان مرموق", description: "ارسخ المصداقية بعنوان تجاري متميز" }
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      en: { title: "Cost Effective", description: "Professional presence without the overhead costs" },
      ar: { title: "فعال من ناحية التكلفة", description: "حضور مهني بدون تكاليف إضافية" }
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      en: { title: "Flexible Terms", description: "Monthly contracts with no long-term commitments" },
      ar: { title: "شروط مرنة", description: "عقود شهرية بدون التزامات طويلة الأمد" }
    },
    {
      icon: <Globe className="w-12 h-12" />,
      en: { title: "Business Registration", description: "Use address for official business registration" },
      ar: { title: "تسجيل الأعمال", description: "استخدم العنوان لتسجيل الأعمال الرسمي" }
    }
  ];

  const c = content[language];
  const currentOfficeType = officeTypes.find(type => type.id === activeOfficeType);

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={officeHeaderImage}
      />

      {/* Overview Section with Office Showcase */}
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
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 text-center border-l-4 border-blue-500">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">
                    {language === 'ar' ? 'موقع متاح' : 'Available Locations'}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 text-center border-l-4 border-green-500">
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-600">
                    {language === 'ar' ? 'دعم متاح' : 'Support Available'}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4 text-center border-l-4 border-purple-500">
                  <div className="text-2xl font-bold text-purple-600">48hrs</div>
                  <div className="text-sm text-gray-600">
                    {language === 'ar' ? 'إعداد سريع' : 'Quick Setup'}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4 text-center border-l-4 border-orange-500">
                  <div className="text-2xl font-bold text-orange-600">98%</div>
                  <div className="text-sm text-gray-600">
                    {language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction'}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Office Showcase Carousel */}
              <div className="relative bg-white rounded-3xl shadow-2xl border border-accent overflow-hidden">
                <div className="h-80 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center relative">
                  {/* Simulated Office Images */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="text-8xl mb-4">
                        {['🏢', '💼', '🖥️', '📞'][currentImageIndex]}
                      </div>
                      <p className="text-accent-light font-medium">
                        {['Modern Offices', 'Equipped Workspaces', 'Virtual Solutions', 'Professional Services'][currentImageIndex]}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Image Navigation */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          currentImageIndex === index ? 'bg-accent' : 'bg-white bg-opacity-50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {language === 'ar' ? 'معرض المكاتب' : 'Office Gallery'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'ar' 
                      ? 'استكشف مساحاتنا المتنوعة والحديثة'
                      : 'Explore our diverse and modern spaces'
                    }
                  </p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-4 top-8 bg-accent text-primary p-3 rounded-full shadow-lg"
              >
                <Building2 className="w-6 h-6" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -left-4 bottom-8 bg-primary text-accent p-3 rounded-full shadow-lg"
              >
                <MapPin className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Office Types with Interactive Selection */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.officeTypes}
          </motion.h2>

          {/* Office Type Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-accent">
              {officeTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveOfficeType(type.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeOfficeType === type.id
                      ? 'bg-primary text-accent-light shadow-md'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {type.icon}
                  <span>{type[language].title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Office Type Content */}
          <AnimatePresence mode="wait">
            {currentOfficeType && (
              <motion.div
                key={activeOfficeType}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-accent"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {currentOfficeType[language].title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6">
                      {currentOfficeType[language].description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {currentOfficeType[language].features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-accent"
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Office Type Visualization */}
                  <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
                    <div className="text-center">
                      <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                        <div className="text-primary text-3xl">
                          {currentOfficeType.icon}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold mb-4">
                        {language === 'ar' ? 'ابدأ اليوم' : 'Get Started Today'}
                      </h4>
                      <p className="text-accent-light mb-6">
                        {language === 'ar' 
                          ? 'احجز جولة أو احصل على عرض سعر مخصص'
                          : 'Book a tour or get a custom quote'
                        }
                      </p>
                      <div className="flex flex-col gap-3">
                        <button 
                          onClick={handleBookTour}
                          className="bg-accent hover:bg-accent-dark text-primary font-medium py-2 px-4 rounded-lg transition-colors"
                        >
                          {language === 'ar' ? 'احجز جولة' : 'Book Tour'}
                        </button>
                        <button 
                          onClick={handleGetQuote}
                          className="border border-accent-light text-accent-light hover:bg-accent-light hover:text-primary font-medium py-2 px-4 rounded-lg transition-colors"
                        >
                          {language === 'ar' ? 'احصل على عرض سعر' : 'Get Quote'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>

      {/* Locations Showcase */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.locations}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-accent overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-6xl relative overflow-hidden">
                  {location.image}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {location.name[language]}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {location.address[language]}
                  </p>
                  <div className="space-y-2 mb-4">
                    {location.features[language].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-accent" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{location.price}</span>
                    <button className="bg-primary hover:bg-primary-dark text-accent-light px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Amenities Grid */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.amenities}
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-accent hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-primary text-accent-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {amenity.icon}
                </div>
                <h3 className="font-semibold text-primary">
                  {amenity[language]}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Virtual Office Benefits */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.virtualBenefits}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {virtualBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-primary to-primary-dark text-accent-light rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {benefit[language].title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit[language].description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing Plans */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.pricing}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl relative ${
                  plan.popular ? 'border-primary' : 'border-accent'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-accent-light px-4 py-1 rounded-full text-sm font-medium">
                      {language === 'ar' ? 'الأكثر شعبية' : 'Most Popular'}
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    {plan.type[language]}
                  </h3>
                  <div className="text-3xl font-bold mb-6 text-primary">
                    {plan.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features[language].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary-dark text-accent-light' 
                        : 'bg-accent hover:bg-accent-dark text-primary'
                    }`}
                  >
                    {language === 'ar' ? 'اختر هذه الخطة' : 'Choose This Plan'}
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
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-accent">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">
                {c.cta}
              </h2>
              <p className="text-primary text-lg mb-8 leading-relaxed">
                {c.ctaDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleBookTour}
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Camera className="w-5 h-5" />
                  {c.bookTour}
                </button>
                <button 
                  onClick={handleGetQuote}
                  className="bg-accent hover:bg-accent-dark text-primary font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <ArrowRight className="w-5 h-5" />
                  {c.getQuote}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ReadyOfficeRental;