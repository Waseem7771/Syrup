import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { 
  Calculator, 
  FileText, 
  Shield, 
  Calendar, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  TrendingUp,
  AlertCircle,
  Book,
  Scale,
  Crown,
  Coins,
  PiggyBank,
  Building,
  Wheat,
  Gem,
  Eye,
  Download,
  Users,
  Award,
  Clock,
  Target,
  Home
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const TaxZakatConsulting: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [zakatInputs, setZakatInputs] = useState({
    cash: 0,
    gold: 0,
    business: 0,
    debts: 0
  });
  const [zakatResult, setZakatResult] = useState<{
    amount: number;
    eligible: boolean;
    netWealth: number;
    nisabStatus: string;
  } | null>(null);
  const [animatedStats, setAnimatedStats] = useState({
    clients: 0,
    saved: 0,
    compliance: 0
  });

  // Nisab values (as of 2024 - should be updated regularly)
  const nisabValues = {
    gold: 87.48, // grams (85 grams * current gold price)
    silver: 612.36, // grams (595 grams * current silver price)
    cash: 4340 // USD equivalent to gold nisab
  };

  // Animate stats on load
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats(prev => ({
        clients: Math.min(prev.clients + 5, 350),
        saved: Math.min(prev.saved + 2, 85),
        compliance: Math.min(prev.compliance + 1, 100)
      }));
    }, 50);

    setTimeout(() => clearInterval(interval), 3000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      title: "Tax & Zakat Consulting",
      subtitle: "Expert Islamic financial consulting with comprehensive tax planning services for Syrian businesses - ensuring Sharia compliance and tax optimization",
      overview: "Islamic Finance Expertise",
      overviewDesc: "We provide comprehensive tax and Zakat consulting services that combine modern financial expertise with Islamic principles, ensuring your business operates in full compliance with both Syrian tax laws and Sharia requirements.",
      zakatTitle: "Zakat Calculator",
      taxTitle: "Tax Planning Services",
      processTitle: "Our Consulting Process",
      ctaTitle: "Ready for Expert Tax & Zakat Guidance?",
      ctaDesc: "Let our Islamic finance experts handle your tax planning and Zakat calculations while ensuring full Sharia compliance.",
      calculate: "Calculate Zakat",
      getTaxAdvice: "Get Tax Advice",
      bookConsultation: "Book Consultation",
      viewReport: "View Sample Report"
    },
    ar: {
      title: "استشارات الزكاة والضرائب",
      subtitle: "استشارات مالية إسلامية متخصصة مع خدمات شاملة للتخطيط الضريبي للشركات في سوريا - ضمان الامتثال للشريعة وتحسين الضرائب",
      overview: "خبرة في التمويل الإسلامي",
      overviewDesc: "نقدم خدمات استشارية شاملة للضرائب والزكاة تجمع بين الخبرة المالية الحديثة والمبادئ الإسلامية، مما يضمن عمل أعمالك في امتثال كامل لكل من قوانين الضرائب السورية ومتطلبات الشريعة.",
      zakatTitle: "حاسبة الزكاة",
      taxTitle: "خدمات التخطيط الضريبي",
      processTitle: "عملية الاستشارة لدينا",
      ctaTitle: "مستعد للحصول على إرشادات خبيرة في الضرائب والزكاة؟",
      ctaDesc: "دع خبراءنا في التمويل الإسلامي يتولون تخطيطك الضريبي وحسابات الزكاة مع ضمان الامتثال الكامل للشريعة.",
      calculate: "احسب الزكاة",
      getTaxAdvice: "احصل على نصيحة ضريبية",
      bookConsultation: "احجز استشارة",
      viewReport: "عرض نموذج تقرير"
    }
  };

  const taxServices = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: { en: 'Tax Return Preparation', ar: 'إعداد الإقرارات الضريبية' },
      description: { en: 'Professional tax return filing for individuals and businesses', ar: 'تقديم الإقرارات الضريبية المهنية للأفراد والشركات' },
      features: {
        en: ['Individual tax returns', 'Corporate tax filings', 'VAT submissions', 'Quarterly reports'],
        ar: ['إقرارات ضرائب الأفراد', 'إيداعات ضرائب الشركات', 'تقديم ضريبة القيمة المضافة', 'التقارير الفصلية']
      }
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: { en: 'Tax Planning & Optimization', ar: 'التخطيط الضريبي والتحسين' },
      description: { en: 'Strategic tax planning to minimize liability legally', ar: 'التخطيط الضريبي الاستراتيجي لتقليل المسؤولية قانونياً' },
      features: {
        en: ['Tax-efficient structures', 'Deduction optimization', 'Investment planning', 'Succession planning'],
        ar: ['هياكل فعالة ضريبياً', 'تحسين الخصومات', 'تخطيط الاستثمار', 'تخطيط الخلافة']
      }
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: { en: 'Compliance & Representation', ar: 'الامتثال والتمثيل' },
      description: { en: 'Ensure compliance and represent clients before authorities', ar: 'ضمان الامتثال وتمثيل العملاء أمام السلطات' },
      features: {
        en: ['Compliance audits', 'Authority representation', 'Penalty mitigation', 'Appeal assistance'],
        ar: ['مراجعات الامتثال', 'تمثيل السلطات', 'تخفيف العقوبات', 'مساعدة الاستئناف']
      }
    }
  ];

  const consultingProcess = [
    {
      step: 1,
      icon: <Eye className="w-6 h-6" />,
      title: { en: 'Financial Assessment', ar: 'التقييم المالي' },
      description: { en: 'Comprehensive review of your financial situation', ar: 'مراجعة شاملة لوضعك المالي' }
    },
    {
      step: 2,
      icon: <Book className="w-6 h-6" />,
      title: { en: 'Sharia Compliance Review', ar: 'مراجعة الامتثال للشريعة' },
      description: { en: 'Ensure all activities comply with Islamic principles', ar: 'ضمان امتثال جميع الأنشطة للمبادئ الإسلامية' }
    },
    {
      step: 3,
      icon: <Calculator className="w-6 h-6" />,
      title: { en: 'Calculations & Planning', ar: 'الحسابات والتخطيط' },
      description: { en: 'Accurate Zakat and tax calculations with planning', ar: 'حسابات دقيقة للزكاة والضرائب مع التخطيط' }
    },
    {
      step: 4,
      icon: <FileText className="w-6 h-6" />,
      title: { en: 'Documentation & Filing', ar: 'التوثيق والتقديم' },
      description: { en: 'Prepare and submit all required documents', ar: 'إعداد وتقديم جميع المستندات المطلوبة' }
    }
  ];

  const calculateZakat = () => {
    const totalWealth = zakatInputs.cash + zakatInputs.gold + zakatInputs.business;
    const netWealth = totalWealth - zakatInputs.debts;
    
    if (netWealth >= nisabValues.cash) {
      const zakatAmount = netWealth * 0.025; // 2.5%
      setZakatResult({
        amount: zakatAmount,
        eligible: true,
        netWealth: netWealth,
        nisabStatus: 'above'
      });
    } else {
      setZakatResult({
        amount: 0,
        eligible: false,
        netWealth: netWealth,
        nisabStatus: 'below'
      });
    }
  };

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
      />

      {/* Overview with Islamic Finance Stats */}
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
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center bg-primary rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-accent">{animatedStats.clients}+</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'عميل' : 'Clients'}</div>
                </div>
                <div className="text-center bg-accent rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold">{animatedStats.saved}%</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'توفير ضريبي' : 'Tax Savings'}</div>
                </div>
                <div className="text-center bg-primary-dark rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-center mb-2">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-accent">{animatedStats.compliance}%</div>
                  <div className="text-xs opacity-75">{language === 'ar' ? 'امتثال' : 'Compliance'}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-primary hover:bg-primary-dark text-accent-light font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  {c.bookConsultation}
                </button>
                <button 
                  onClick={calculateZakat}
                  className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  {c.calculate}
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
              {/* Islamic Finance Dashboard */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-accent overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-accent-light flex items-center gap-2">
                      <Home className="w-6 h-6" />
                      {language === 'ar' ? 'لوحة التمويل الإسلامي' : 'Islamic Finance Dashboard'}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="text-accent-light text-sm">{language === 'ar' ? 'النصاب' : 'Nisab Threshold'}</div>
                      <div className="text-xl font-bold">${nisabValues.cash.toLocaleString()}</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="text-accent-light text-sm">{language === 'ar' ? 'معدل الزكاة' : 'Zakat Rate'}</div>
                      <div className="text-xl font-bold">2.5%</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">{language === 'ar' ? 'أنواع الزكاة' : 'Zakat Types'}</span>
                    <Star className="w-5 h-5 text-yellow-500" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="text-primary"><Coins className="w-6 h-6" /></div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">{language === 'ar' ? 'المال والمدخرات' : 'Money & Savings'}</div>
                        <div className="text-sm text-gray-600">2.5%</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="text-primary"><Crown className="w-6 h-6" /></div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">{language === 'ar' ? 'الذهب' : 'Gold'}</div>
                        <div className="text-sm text-gray-600">2.5%</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="text-primary"><Building className="w-6 h-6" /></div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">{language === 'ar' ? 'أصول الأعمال' : 'Business Assets'}</div>
                        <div className="text-sm text-gray-600">2.5%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Islamic Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-4 top-8 bg-yellow-500 text-white p-3 rounded-full shadow-lg"
              >
                <Star className="w-6 h-6" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -left-4 bottom-8 bg-green-500 text-white p-3 rounded-full shadow-lg"
              >
                <Home className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Interactive Zakat Calculator */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.zakatTitle}
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Input */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-accent">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-accent" />
                {language === 'ar' ? 'أدخل أموالك' : 'Enter Your Wealth'}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'النقد والحسابات البنكية' : 'Cash & Bank Accounts'}
                  </label>
                  <input
                    type="number"
                    value={zakatInputs.cash}
                    onChange={(e) => setZakatInputs({...zakatInputs, cash: parseFloat(e.target.value) || 0})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="0"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'الذهب (بالدولار)' : 'Gold (in USD)'}
                  </label>
                  <input
                    type="number"
                    value={zakatInputs.gold}
                    onChange={(e) => setZakatInputs({...zakatInputs, gold: parseFloat(e.target.value) || 0})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="0"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'أصول الأعمال' : 'Business Assets'}
                  </label>
                  <input
                    type="number"
                    value={zakatInputs.business}
                    onChange={(e) => setZakatInputs({...zakatInputs, business: parseFloat(e.target.value) || 0})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="0"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'الديون المستحقة عليك' : 'Outstanding Debts'}
                  </label>
                  <input
                    type="number"
                    value={zakatInputs.debts}
                    onChange={(e) => setZakatInputs({...zakatInputs, debts: parseFloat(e.target.value) || 0})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="0"
                  />
                </div>
                
                <button
                  onClick={calculateZakat}
                  className="w-full bg-primary hover:bg-primary-dark text-accent-light font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  {c.calculate}
                </button>
              </div>
            </div>

            {/* Calculator Results */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-accent">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-accent" />
                {language === 'ar' ? 'نتيجة حساب الزكاة' : 'Zakat Calculation Result'}
              </h3>
              
              {zakatResult ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className={`text-4xl font-bold mb-2 ${zakatResult.eligible ? 'text-green-600' : 'text-gray-500'}`}>
                      ${zakatResult.amount.toFixed(2)}
                    </div>
                    <div className="text-gray-600">
                      {language === 'ar' ? 'مبلغ الزكاة المستحقة' : 'Zakat Amount Due'}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-blue-600 text-sm font-medium">
                        {language === 'ar' ? 'إجمالي الثروة' : 'Total Wealth'}
                      </div>
                      <div className="text-xl font-bold text-blue-700">
                        ${zakatResult.netWealth.toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-green-600 text-sm font-medium">
                        {language === 'ar' ? 'حالة النصاب' : 'Nisab Status'}
                      </div>
                      <div className={`text-lg font-bold ${zakatResult.eligible ? 'text-green-700' : 'text-red-700'}`}>
                        {zakatResult.eligible 
                          ? (language === 'ar' ? 'مؤهل' : 'Eligible')
                          : (language === 'ar' ? 'غير مؤهل' : 'Not Eligible')
                        }
                      </div>
                    </div>
                  </div>
                  
                  {zakatResult.eligible && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <div className="font-medium text-green-800">
                            {language === 'ar' ? 'مبارك! أنت مؤهل لدفع الزكاة' : 'Congratulations! You are eligible to pay Zakat'}
                          </div>
                          <div className="text-sm text-green-700 mt-1">
                            {language === 'ar' 
                              ? 'يجب أن تكون هذه الأموال في حيازتك لمدة عام هجري كامل'
                              : 'This wealth must be in your possession for a full lunar year'
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {!zakatResult.eligible && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-gray-600 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-800">
                            {language === 'ar' ? 'لا زكاة مستحقة' : 'No Zakat Due'}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {language === 'ar' 
                              ? `ثروتك أقل من النصاب ($${nisabValues.cash.toLocaleString()})`
                              : `Your wealth is below the Nisab threshold ($${nisabValues.cash.toLocaleString()})`
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>{language === 'ar' ? 'أدخل بياناتك لحساب الزكاة' : 'Enter your information to calculate Zakat'}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Tax Services */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            {c.taxTitle}
          </motion.h2>

          <div className="space-y-8">
            {taxServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-accent p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary text-accent-light rounded-2xl p-4">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary">
                          {service.title[language]}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6">
                      {service.description[language]}
                    </p>
                    <button className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                      <ArrowRight className="w-5 h-5" />
                      {language === 'ar' ? 'تعرف أكثر' : 'Learn More'}
                    </button>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-primary mb-4">
                      {language === 'ar' ? 'الخدمات المشمولة:' : 'Services Included:'}
                    </h4>
                    <div className="space-y-3">
                      {service.features[language].map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Consulting Process */}
      <Section background="primary">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-accent text-center mb-12"
          >
            {c.processTitle}
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {consultingProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-primary font-bold text-xl">{step.step}</span>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-primary mb-3 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">
                    {step.title[language]}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description[language]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-6">🕌</div>
              <h2 className="text-3xl font-bold text-accent-light mb-4">
                {c.ctaTitle}
              </h2>
              <p className="text-accent-light text-lg mb-8 leading-relaxed">
                {c.ctaDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-accent-light hover:bg-white text-primary font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  {c.bookConsultation}
                </button>
                <button 
                  onClick={() => navigate('/consulting')}
                  className="bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 text-accent-light border border-accent-light font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  {c.getTaxAdvice}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default TaxZakatConsulting;