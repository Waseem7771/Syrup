import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { Calculator, DollarSign, FileText, Building, Users, CheckCircle, ArrowRight, Download, RefreshCw } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import costHeaderImage from '../../assets/images/9.png';

interface CostItem {
  id: string;
  category: string;
  required: boolean;
  baseCost: number;
  variableCost?: number;
  minCost?: number;
  maxCost?: number;
}

const EstablishmentCostCalculation: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [businessType, setBusinessType] = useState('');
  const [capitalAmount, setCapitalAmount] = useState(0);
  const [numberOfPartners, setNumberOfPartners] = useState(1);
  const [hasEmployees, setHasEmployees] = useState(false);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [calculatedCosts, setCalculatedCosts] = useState<CostItem[]>([]);
  const [totalCost, setTotalCost] = useState(0);

  const content = {
    en: {
      title: "Business Establishment Cost Calculator",
      subtitle: "Get an accurate estimate of your business setup costs in Syria",
      step1: "Business Information",
      step2: "Service Selection",
      step3: "Cost Breakdown",
      businessTypeLabel: "Select Business Type",
      capitalLabel: "Initial Capital Amount (SYP)",
      partnersLabel: "Number of Partners",
      employeesLabel: "Will you have employees?",
      employeeCountLabel: "Number of Employees",
      servicesLabel: "Additional Services",
      calculate: "Calculate Costs",
      recalculate: "Recalculate",
      downloadReport: "Download Report",
      getQuote: "Get Professional Quote",
      totalEstimate: "Total Estimated Cost",
      requiredCosts: "Required Costs",
      optionalCosts: "Optional Services",
      governmentFees: "Government Fees",
      professionalFees: "Professional Services",
      otherCosts: "Other Expenses",
      note: "Note: All costs are estimates and may vary based on specific circumstances."
    },
    ar: {
      title: "حاسبة تكلفة تأسيس الأعمال",
      subtitle: "احصل على تقدير دقيق لتكاليف إنشاء شركتك في سوريا",
      step1: "معلومات الشركة",
      step2: "اختيار الخدمات",
      step3: "تفصيل التكاليف",
      businessTypeLabel: "اختر نوع النشاط",
      capitalLabel: "رأس المال الأولي (ليرة سورية)",
      partnersLabel: "عدد الشركاء",
      employeesLabel: "هل ستوظف موظفين؟",
      employeeCountLabel: "عدد الموظفين",
      servicesLabel: "خدمات إضافية",
      calculate: "احسب التكاليف",
      recalculate: "إعادة الحساب",
      downloadReport: "تحميل التقرير",
      getQuote: "احصل على عرض سعر مهني",
      totalEstimate: "إجمالي التكلفة المتوقعة",
      requiredCosts: "التكاليف المطلوبة",
      optionalCosts: "الخدمات الاختيارية",
      governmentFees: "الرسوم الحكومية",
      professionalFees: "الخدمات المهنية",
      otherCosts: "مصاريف أخرى",
      note: "ملاحظة: جميع التكاليف تقديرية وقد تختلف حسب الظروف المحددة."
    }
  };

  const businessTypes = [
    {
      en: "Solidarity Company (شركة التضامن)",
      ar: "شركة التضامن",
      value: "solidarity"
    },
    {
      en: "Limited Partnership (شركة التوصية)",
      ar: "شركة التوصية",
      value: "limited_partnership"
    },
    {
      en: "Limited Liability Company (ش.م.م)",
      ar: "الشركة المحدودة المسؤولية",
      value: "llc"
    },
    {
      en: "Joint Stock Company (ش.م.م)",
      ar: "الشركة المساهمة المغفلة",
      value: "jsc"
    },
    {
      en: "Individual Business",
      ar: "مؤسسة فردية",
      value: "individual"
    }
  ];

  const additionalServices = [
    {
      id: "accounting",
      en: "Accounting Setup",
      ar: "إعداد المحاسبة",
      cost: 50000
    },
    {
      id: "legal_consulting",
      en: "Legal Consulting",
      ar: "الاستشارة القانونية",
      cost: 75000
    },
    {
      id: "tax_consulting",
      en: "Tax Advisory",
      ar: "الاستشارة الضريبية",
      cost: 40000
    },
    {
      id: "trademark",
      en: "Trademark Registration",
      ar: "تسجيل العلامة التجارية",
      cost: 100000
    },
    {
      id: "website",
      en: "Business Website",
      ar: "موقع إلكتروني",
      cost: 200000
    }
  ];

  const calculateCosts = () => {
    const costs: CostItem[] = [];
    
    // Base registration costs
    const registrationCost = businessType === 'jsc' ? 200000 : 
                           businessType === 'llc' ? 150000 : 
                           businessType === 'individual' ? 75000 : 100000;
    
    costs.push({
      id: 'registration',
      category: 'government',
      required: true,
      baseCost: registrationCost
    });

    // Commercial license
    costs.push({
      id: 'commercial_license',
      category: 'government',
      required: true,
      baseCost: 80000
    });

    // Capital stamp duty (0.5% of capital)
    const capitalStamp = Math.max(capitalAmount * 0.005, 25000);
    costs.push({
      id: 'capital_stamp',
      category: 'government',
      required: true,
      baseCost: capitalStamp
    });

    // Partner fees
    if (numberOfPartners > 1) {
      costs.push({
        id: 'partner_fees',
        category: 'government',
        required: true,
        baseCost: (numberOfPartners - 1) * 30000
      });
    }

    // Tax registration
    costs.push({
      id: 'tax_registration',
      category: 'government',
      required: true,
      baseCost: 25000
    });

    // Social security registration
    if (hasEmployees && employeeCount > 0) {
      costs.push({
        id: 'social_security',
        category: 'government',
        required: true,
        baseCost: 40000 + (employeeCount * 5000)
      });
    }

    // Professional services
    costs.push({
      id: 'legal_documentation',
      category: 'professional',
      required: true,
      baseCost: businessType === 'jsc' ? 300000 : 150000
    });

    costs.push({
      id: 'bank_account',
      category: 'professional',
      required: true,
      baseCost: 35000
    });

    // Translation and authentication
    costs.push({
      id: 'translation',
      category: 'other',
      required: true,
      baseCost: 50000
    });

    // Additional services
    selectedServices.forEach(serviceId => {
      const service = additionalServices.find(s => s.id === serviceId);
      if (service) {
        costs.push({
          id: serviceId,
          category: 'optional',
          required: false,
          baseCost: service.cost
        });
      }
    });

    setCalculatedCosts(costs);
    setTotalCost(costs.reduce((sum, cost) => sum + cost.baseCost, 0));
  };

  useEffect(() => {
    if (currentStep === 3 && businessType) {
      calculateCosts();
    }
  }, [currentStep, businessType, capitalAmount, numberOfPartners, hasEmployees, employeeCount, selectedServices]);

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(language === 'ar' ? 'ar-SY' : 'en-US', {
      style: 'currency',
      currency: 'SYP',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const c = content[language];

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={costHeaderImage}
      />

      {/* Progress Bar */}
      <Section background="white">
        <div className="max-w-4xl mx-auto mb-8">
          {/* Numbers with circles and connecting lines */}
          <div className="relative flex justify-center items-center mb-6">
            {/* Connecting lines first (in background) */}
            <div className="absolute top-1/2 left-[calc(25%+12px)] right-[calc(25%+12px)] h-1 bg-gray-200 -translate-y-1/2 z-0">
              <div 
                className={`h-full bg-primary transition-all duration-300`}
                style={{ width: currentStep > 1 ? '100%' : '0%' }}
              ></div>
            </div>
            
            {/* Circle indicators */}
            <div className="relative flex justify-between w-full max-w-md z-10">
              {[1, 2, 3].map((step) => (
                <div 
                  key={step} 
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    currentStep >= step ? 'bg-primary text-accent-light' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {currentStep > step ? <CheckCircle className="w-4 h-4 md:w-5 md:h-5" /> : step}
                </div>
              ))}
            </div>
          </div>
          
          {/* Step labels with fixed width and proper spacing */}
          <div className="flex justify-between text-xs md:text-sm px-1 md:px-0 max-w-md mx-auto">
            <div className={`w-1/3 text-center ${currentStep >= 1 ? 'text-primary font-medium' : 'text-gray-500'}`}>
              {c.step1}
            </div>
            <div className={`w-1/3 text-center ${currentStep >= 2 ? 'text-primary font-medium' : 'text-gray-500'}`}>
              {c.step2}
            </div>
            <div className={`w-1/3 text-center ${currentStep >= 3 ? 'text-primary font-medium' : 'text-gray-500'}`}>
              {c.step3}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Step 1: Business Information */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 border-2 border-accent shadow-lg"
              >
                <h2 className="text-2xl font-bold text-primary mb-8 text-center">
                  {c.step1}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-primary font-medium mb-3">
                      {c.businessTypeLabel}
                    </label>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full p-3 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50"
                    >
                      <option value="">
                        {language === 'ar' ? 'اختر نوع النشاط' : 'Select business type'}
                      </option>
                      {businessTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type[language]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-primary font-medium mb-3">
                      {c.capitalLabel}
                    </label>
                    <input
                      type="number"
                      value={capitalAmount}
                      onChange={(e) => setCapitalAmount(Number(e.target.value))}
                      className="w-full p-3 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50"
                      placeholder="1000000"
                    />
                  </div>

                  <div>
                    <label className="block text-primary font-medium mb-3">
                      {c.partnersLabel}
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={numberOfPartners}
                      onChange={(e) => setNumberOfPartners(Number(e.target.value))}
                      className="w-full p-3 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-primary font-medium mb-3">
                      {c.employeesLabel}
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="employees"
                          checked={hasEmployees}
                          onChange={() => setHasEmployees(true)}
                          className="mr-2 text-primary"
                        />
                        <span className="text-primary">{language === 'ar' ? 'نعم' : 'Yes'}</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="employees"
                          checked={!hasEmployees}
                          onChange={() => {
                            setHasEmployees(false);
                            setEmployeeCount(0);
                          }}
                          className="mr-2 text-primary"
                        />
                        <span className="text-primary">{language === 'ar' ? 'لا' : 'No'}</span>
                      </label>
                    </div>
                  </div>

                  {hasEmployees && (
                    <div className="md:col-span-2">
                      <label className="block text-primary font-medium mb-3">
                        {c.employeeCountLabel}
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={employeeCount}
                        onChange={(e) => setEmployeeCount(Number(e.target.value))}
                        className="w-full p-3 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50"
                      />
                    </div>
                  )}
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    onClick={() => setCurrentStep(2)}
                    disabled={!businessType}
                    className="bg-primary hover:bg-primary-dark disabled:bg-gray-300 text-accent-light px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    {language === 'ar' ? 'التالي' : 'Next'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Service Selection */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 border-2 border-accent shadow-lg"
              >
                <h2 className="text-2xl font-bold text-primary mb-8 text-center">
                  {c.step2}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {additionalServices.map((service) => (
                    <div
                      key={service.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        selectedServices.includes(service.id)
                          ? 'border-primary bg-primary text-accent-light'
                          : 'border-gray-200 bg-gray-50 hover:border-primary hover:bg-gray-100'
                      }`}
                      onClick={() => handleServiceToggle(service.id)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{service[language]}</span>
                        <span className="text-sm font-bold">
                          {formatCurrency(service.cost)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    {language === 'ar' ? 'السابق' : 'Previous'}
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="bg-primary hover:bg-primary-dark text-accent-light px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    <Calculator className="w-5 h-5" />
                    {c.calculate}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Cost Breakdown */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="bg-primary text-accent-light rounded-2xl p-8 text-center shadow-xl">
                  <h2 className="text-3xl font-bold mb-4">{c.totalEstimate}</h2>
                  <div className="text-5xl font-bold text-accent">
                    {formatCurrency(totalCost)}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Government Fees */}
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <Building className="w-6 h-6" />
                      {c.governmentFees}
                    </h3>
                    <div className="space-y-3">
                      {calculatedCosts.filter(cost => cost.category === 'government').map((cost) => (
                        <div key={cost.id} className="flex justify-between">
                          <span className="text-gray-700">
                            {cost.id === 'registration' && (language === 'ar' ? 'رسوم التسجيل' : 'Registration Fee')}
                            {cost.id === 'commercial_license' && (language === 'ar' ? 'الرخصة التجارية' : 'Commercial License')}
                            {cost.id === 'capital_stamp' && (language === 'ar' ? 'رسم الطابع على رأس المال' : 'Capital Stamp Duty')}
                            {cost.id === 'partner_fees' && (language === 'ar' ? 'رسوم الشركاء' : 'Partner Fees')}
                            {cost.id === 'tax_registration' && (language === 'ar' ? 'التسجيل الضريبي' : 'Tax Registration')}
                            {cost.id === 'social_security' && (language === 'ar' ? 'الضمان الاجتماعي' : 'Social Security')}
                          </span>
                          <span className="font-medium text-primary">
                            {formatCurrency(cost.baseCost)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Professional Services */}
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <Users className="w-6 h-6" />
                      {c.professionalFees}
                    </h3>
                    <div className="space-y-3">
                      {calculatedCosts.filter(cost => cost.category === 'professional').map((cost) => (
                        <div key={cost.id} className="flex justify-between">
                          <span className="text-gray-700">
                            {cost.id === 'legal_documentation' && (language === 'ar' ? 'الوثائق القانونية' : 'Legal Documentation')}
                            {cost.id === 'bank_account' && (language === 'ar' ? 'فتح الحساب البنكي' : 'Bank Account Opening')}
                          </span>
                          <span className="font-medium text-primary">
                            {formatCurrency(cost.baseCost)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Other Costs */}
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <FileText className="w-6 h-6" />
                      {c.otherCosts}
                    </h3>
                    <div className="space-y-3">
                      {calculatedCosts.filter(cost => cost.category === 'other').map((cost) => (
                        <div key={cost.id} className="flex justify-between">
                          <span className="text-gray-700">
                            {cost.id === 'translation' && (language === 'ar' ? 'الترجمة والتصديق' : 'Translation & Authentication')}
                          </span>
                          <span className="font-medium text-primary">
                            {formatCurrency(cost.baseCost)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Optional Services */}
                  {calculatedCosts.some(cost => cost.category === 'optional') && (
                    <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-md">
                      <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                        <DollarSign className="w-6 h-6" />
                        {c.optionalCosts}
                      </h3>
                      <div className="space-y-3">
                        {calculatedCosts.filter(cost => cost.category === 'optional').map((cost) => {
                          const service = additionalServices.find(s => s.id === cost.id);
                          return (
                            <div key={cost.id} className="flex justify-between">
                              <span className="text-gray-700">
                                {service?.[language]}
                              </span>
                              <span className="font-medium text-primary">
                                {formatCurrency(cost.baseCost)}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-primary text-center">
                    {c.note}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    <RefreshCw className="w-5 h-5" />
                    {c.recalculate}
                  </button>
                  <button className="bg-accent hover:bg-accent-dark text-primary px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    {c.downloadReport}
                  </button>
                  <button 
                    onClick={() => navigate('/consulting/legal')}
                    className="bg-primary hover:bg-primary-dark text-accent-light px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5" />
                    {c.getQuote}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>
    </>
  );
};

export default EstablishmentCostCalculation;