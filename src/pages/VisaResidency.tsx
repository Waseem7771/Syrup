import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Upload, 
  AlertCircle, 
  Shield, 
  User, 
  Users, 
  File, 
  Calendar 
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Section from '../components/common/Section';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';
import { sendEmailNotification } from '../lib/emailNotification';

const VisaResidency: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const [step, setStep] = useState(1);
  
  // Form state
  const [formData, setFormData] = useState({
    serviceType: '',
    fullName: '',
    nationality: '',
    passportNumber: '',
    passportExpiry: '',
    email: '',
    phone: '',
    companyName: '',
    businessType: '',
    plannedStayDuration: '',
    entryDate: '',
    purposeOfStay: '',
    passportScan: null as File | null,
    photograph: null as File | null,
    businessDocuments: null as File | null
  });
  
  // Process state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  const handleServiceSelection = (service: string) => {
    setFormData({
      ...formData,
      serviceType: service
    });
    setStep(2);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Generate reference number
      const refNumber = 'VSA-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      
      // Handle file uploads if needed
      let passportScanUrl = null;
      let photographUrl = null;
      let businessDocumentsUrl = null;
      
      if (formData.passportScan) {
        const fileExt = formData.passportScan.name.split('.').pop();
        const fileName = `${refNumber}-passport.${fileExt}`;
        const { data: passportData, error: passportError } = await supabase.storage
          .from('visa-documents')
          .upload(fileName, formData.passportScan);
          
        if (passportError) throw passportError;
        passportScanUrl = passportData?.path;
      }
      
      if (formData.photograph) {
        const fileExt = formData.photograph.name.split('.').pop();
        const fileName = `${refNumber}-photo.${fileExt}`;
        const { data: photoData, error: photoError } = await supabase.storage
          .from('visa-documents')
          .upload(fileName, formData.photograph);
          
        if (photoError) throw photoError;
        photographUrl = photoData?.path;
      }
      
      if (formData.businessDocuments) {
        const fileExt = formData.businessDocuments.name.split('.').pop();
        const fileName = `${refNumber}-business.${fileExt}`;
        const { data: docsData, error: docsError } = await supabase.storage
          .from('visa-documents')
          .upload(fileName, formData.businessDocuments);
          
        if (docsError) throw docsError;
        businessDocumentsUrl = docsData?.path;
      }
      
      // Submit to Supabase
      const { data, error } = await supabase
        .from('visa_applications')
        .insert([
          {
            service_type: formData.serviceType,
            full_name: formData.fullName,
            nationality: formData.nationality,
            passport_number: formData.passportNumber,
            passport_expiry: formData.passportExpiry,
            email: formData.email,
            phone: formData.phone,
            company_name: formData.companyName,
            business_type: formData.businessType,
            planned_stay_duration: formData.plannedStayDuration,
            entry_date: formData.entryDate,
            purpose_of_stay: formData.purposeOfStay,
            passport_scan_url: passportScanUrl,
            photograph_url: photographUrl,
            business_documents_url: businessDocumentsUrl,
            reference_number: refNumber,
            status: 'pending'
          }
        ])
        .select()
        .single();
      
      if (error) throw error;
      
      // Send email notification
      if (data) {
        await sendEmailNotification(data, 'visa');
      }
      
      setReferenceNumber(refNumber);
      setSubmitted(true);
      toast.success(language === 'ar' 
        ? 'تم تقديم طلبك بنجاح!' 
        : 'Your application has been submitted successfully!');
      
    } catch (error) {
      console.error('Error submitting application', error);
      toast.error(language === 'ar' 
        ? 'حدث خطأ أثناء تقديم طلبك. يرجى المحاولة مرة أخرى.' 
        : 'An error occurred while submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepIndicator = () => {
    const stepTitles = language === 'ar' 
      ? ['اختيار الخدمة', 'المعلومات الشخصية', 'معلومات الأعمال', 'المستندات', 'المراجعة']
      : ['Service Selection', 'Personal Information', 'Business Information', 'Documents', 'Review'];
    
    return (
      <div className="flex items-center justify-center mb-10 overflow-x-auto py-2" dir="ltr">
        {stepTitles.map((title, index) => (
          <React.Fragment key={index}>
            <div className={`flex flex-col items-center ${index + 1 === step ? 'text-primary' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                index + 1 < step ? 'bg-primary text-white' : 
                index + 1 === step ? 'border-2 border-primary' : 'border-2 border-gray-300'
              }`}>
                {index + 1 < step ? <Check className="w-5 h-5" /> : index + 1}
              </div>
              <span className="text-xs mt-2 whitespace-nowrap">{title}</span>
            </div>
            {index < stepTitles.length - 1 && (
              <div className={`w-12 h-1 mx-1 ${
                index + 1 < step ? 'bg-primary' : 'bg-gray-300'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  // Step 1: Service Selection
  const renderServiceOptions = () => {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          {language === 'ar' ? 'اختر نوع الخدمة' : 'Select Service Type'}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Business Visa */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-md p-6 border-2 hover:border-primary cursor-pointer transition-all duration-300 hover:shadow-xl"
            onClick={() => handleServiceSelection('businessVisa')}
          >
            <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {language === 'ar' ? 'تأشيرة عمل' : 'Business Visa'}
            </h3>
            <p className="text-gray-600 mb-4">
              {language === 'ar'
                ? 'تأشيرة قصيرة المدى لاجتماعات العمل، دراسة السوق، والمفاوضات'
                : 'Short-term visa for business meetings, market research, and negotiations'}
            </p>
            <div className="bg-gray-100 rounded-full px-4 py-1 inline-block text-sm font-medium">
              {language === 'ar' ? 'عادةً 1-3 أشهر' : 'Typically 1-3 months'}
            </div>
          </motion.div>
          
          {/* Investor Residency */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md p-6 border-2 hover:border-primary cursor-pointer transition-all duration-300 hover:shadow-xl"
            onClick={() => handleServiceSelection('investorResidency')}
          >
            <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
              <User className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {language === 'ar' ? 'إقامة المستثمر' : 'Investor Residency'}
            </h3>
            <p className="text-gray-600 mb-4">
              {language === 'ar'
                ? 'إقامة طويلة المدى لأصحاب الأعمال والمستثمرين في سوريا'
                : 'Long-term residency for business owners and investors in Syria'}
            </p>
            <div className="bg-gray-100 rounded-full px-4 py-1 inline-block text-sm font-medium">
              {language === 'ar' ? 'قابلة للتجديد سنوياً' : 'Renewable annually'}
            </div>
          </motion.div>
          
          {/* Work Permit */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-md p-6 border-2 hover:border-primary cursor-pointer transition-all duration-300 hover:shadow-xl"
            onClick={() => handleServiceSelection('workPermit')}
          >
            <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
              <File className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {language === 'ar' ? 'تصريح عمل' : 'Work Permit'}
            </h3>
            <p className="text-gray-600 mb-4">
              {language === 'ar'
                ? 'الوثائق اللازمة للعمل في سوريا لغير السوريين'
                : 'Required documentation for non-Syrians to work in Syria'}
            </p>
            <div className="bg-gray-100 rounded-full px-4 py-1 inline-block text-sm font-medium">
              {language === 'ar' ? 'مرتبط بعقد العمل' : 'Tied to employment contract'}
            </div>
          </motion.div>
          
          {/* Family Residency */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-md p-6 border-2 hover:border-primary cursor-pointer transition-all duration-300 hover:shadow-xl"
            onClick={() => handleServiceSelection('familyResidency')}
          >
            <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {language === 'ar' ? 'إقامة عائلية' : 'Family Residency'}
            </h3>
            <p className="text-gray-600 mb-4">
              {language === 'ar'
                ? 'تصاريح إقامة لأفراد عائلة المستثمرين ورجال الأعمال'
                : 'Residency permits for family members of investors and business owners'}
            </p>
            <div className="bg-gray-100 rounded-full px-4 py-1 inline-block text-sm font-medium">
              {language === 'ar' ? 'مرتبطة بإقامة مقدم الطلب الأساسي' : 'Linked to primary applicant'}
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

  // Step 2: Personal Information Form
  const renderPersonalInfoForm = () => {
    return (
      <div className="space-y-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <h3 className="text-xl font-semibold">
          {language === 'ar' ? 'المعلومات الشخصية' : 'Personal Information'}
        </h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ar' ? 'الاسم الكامل (كما في جواز السفر) *' : 'Full Name (as in passport) *'}
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
            required
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'ar' ? 'الجنسية *' : 'Nationality *'}
            </label>
            <select
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">{language === 'ar' ? 'اختر الجنسية' : 'Select nationality'}</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
              <option value="LB">Lebanon</option>
              <option value="JO">Jordan</option>
              <option value="TR">Turkey</option>
              <option value="RU">Russia</option>
              <option value="IR">Iran</option>
              <option value="CN">China</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'ar' ? 'رقم جواز السفر *' : 'Passport Number *'}
            </label>
            <input
              type="text"
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={language === 'ar' ? 'أدخل رقم جواز السفر' : 'Enter passport number'}
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ar' ? 'تاريخ انتهاء صلاحية جواز السفر *' : 'Passport Expiry Date *'}
          </label>
          <input
            type="date"
            name="passportExpiry"
            value={formData.passportExpiry}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'ar' ? 'البريد الإلكتروني *' : 'Email Address *'}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={language === 'ar' ? 'بريدك الإلكتروني' : 'your@email.com'}
              required
              dir="ltr"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'ar' ? 'رقم الهاتف *' : 'Phone Number *'}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={language === 'ar' ? '+XXX XXXXXXXX' : '+XXX XXXXXXXX'}
              required
              dir="ltr"
            />
          </div>
        </div>
      </div>
    );
  };
  
  // Step 3: Business Information Form
  const renderBusinessInfoForm = () => {
    return (
      <div className="space-y-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <h3 className="text-xl font-semibold">
          {language === 'ar' ? 'معلومات الأعمال' : 'Business Information'}
        </h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ar' ? 'اسم الشركة (إن وجد)' : 'Company Name (if applicable)'}
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder={language === 'ar' ? 'أدخل اسم الشركة' : 'Enter company name'}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ar' ? 'نوع النشاط التجاري' : 'Business Type'}
          </label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">{language === 'ar' ? 'اختر نوع النشاط' : 'Select business type'}</option>
            <option value="technology">{language === 'ar' ? 'تكنولوجيا' : 'Technology'}</option>
            <option value="retail">{language === 'ar' ? 'تجارة تجزئة' : 'Retail'}</option>
            <option value="manufacturing">{language === 'ar' ? 'تصنيع' : 'Manufacturing'}</option>
            <option value="consulting">{language === 'ar' ? 'استشارات' : 'Consulting'}</option>
            <option value="hospitality">{language === 'ar' ? 'ضيافة وسياحة' : 'Hospitality & Tourism'}</option>
            <option value="healthcare">{language === 'ar' ? 'رعاية صحية' : 'Healthcare'}</option>
            <option value="education">{language === 'ar' ? 'تعليم وتدريب' : 'Education & Training'}</option>
            <option value="agriculture">{language === 'ar' ? 'زراعة' : 'Agriculture'}</option>
            <option value="other">{language === 'ar' ? 'أخرى' : 'Other'}</option>
          </select>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'ar' ? 'مدة الإقامة المخططة *' : 'Planned Stay Duration *'}
            </label>
            <select
              name="plannedStayDuration"
              value={formData.plannedStayDuration}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">{language === 'ar' ? 'اختر المدة' : 'Select duration'}</option>
              <option value="1-3months">{language === 'ar' ? '١-٣ أشهر' : '1-3 months'}</option>
              <option value="3-6months">{language === 'ar' ? '٣-٦ أشهر' : '3-6 months'}</option>
              <option value="6-12months">{language === 'ar' ? '٦-١٢ شهر' : '6-12 months'}</option>
              <option value="1-2years">{language === 'ar' ? '١-٢ سنة' : '1-2 years'}</option>
              <option value="2+years">{language === 'ar' ? 'أكثر من سنتين' : 'More than 2 years'}</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'ar' ? 'تاريخ الدخول المتوقع *' : 'Expected Entry Date *'}
            </label>
            <input
              type="date"
              name="entryDate"
              value={formData.entryDate}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ar' ? 'الغرض من الإقامة *' : 'Purpose of Stay *'}
          </label>
          <textarea
            name="purposeOfStay"
            value={formData.purposeOfStay}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
            placeholder={language === 'ar' ? 'اشرح بإيجاز الغرض من زيارتك أو إقامتك في سوريا' : 'Briefly explain the purpose of your visit or stay in Syria'}
            required
          />
        </div>
      </div>
    );
  };
  
  // Step 4: Document Upload Form
  const renderDocumentUploadForm = () => {
    return (
      <div className="space-y-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <h3 className="text-xl font-semibold">
          {language === 'ar' ? 'تحميل المستندات' : 'Document Upload'}
        </h3>
        
        <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ar' ? 'نسخة من جواز السفر (جميع الصفحات) *' : 'Passport Copy (all pages) *'}
          </label>
          <p className="text-sm text-gray-600 mb-3">
            {language === 'ar' 
              ? 'يرجى تحميل نسخة واضحة من جميع صفحات جواز السفر'
              : 'Please upload a clear scan of all passport pages'}
          </p>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              id="passportScan"
              name="passportScan"
              onChange={handleFileUpload}
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png"
              required
            />
            <label htmlFor="passportScan" className="cursor-pointer">
              <Upload className="mx-auto h-10 w-10 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">
                {language === 'ar' 
                  ? 'اسحب وأفلت أو انقر للتحميل' 
                  : 'Drag & drop or click to upload'}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {language === 'ar' 
                  ? 'الصيغ المقبولة: PDF، JPG، PNG (الحد الأقصى 5 ميجابايت)'
                  : 'Accepted formats: PDF, JPG, PNG (max 5MB)'}
              </p>
            </label>
            
            {formData.passportScan && (
              <div className="mt-4 py-2 px-4 bg-green-50 text-green-800 rounded-md flex items-center">
                <Check className="w-4 h-4 mr-2" />
                <span>{formData.passportScan.name}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ar' ? 'صورة شخصية حديثة *' : 'Recent Photograph *'}
          </label>
          <p className="text-sm text-gray-600 mb-3">
            {language === 'ar' 
              ? 'خلفية بيضاء، 4.5×3.5 سم، ملتقطة خلال الستة أشهر الأخيرة'
              : 'White background, 4.5x3.5cm, taken within the last 6 months'}
          </p>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              id="photograph"
              name="photograph"
              onChange={handleFileUpload}
              className="hidden"
              accept=".jpg,.jpeg,.png"
              required
            />
            <label htmlFor="photograph" className="cursor-pointer">
              <Upload className="mx-auto h-10 w-10 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">
                {language === 'ar' 
                  ? 'اسحب وأفلت أو انقر للتحميل' 
                  : 'Drag & drop or click to upload'}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {language === 'ar' 
                  ? 'الصيغ المقبولة: JPG، PNG (الحد الأقصى 2 ميجابايت)'
                  : 'Accepted formats: JPG, PNG (max 2MB)'}
              </p>
            </label>
            
            {formData.photograph && (
              <div className="mt-4 py-2 px-4 bg-green-50 text-green-800 rounded-md flex items-center">
                <Check className="w-4 h-4 mr-2" />
                <span>{formData.photograph.name}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ar' ? 'وثائق الأعمال' : 'Business Documents'}
          </label>
          <p className="text-sm text-gray-600 mb-3">
            {language === 'ar' 
              ? 'مثل: تسجيل الشركة، خطة العمل، رسالة دعوة، عقد عمل، أو وثائق أخرى ذات صلة'
              : 'Such as: company registration, business plan, invitation letter, employment contract, or other relevant documents'}
          </p>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              id="businessDocuments"
              name="businessDocuments"
              onChange={handleFileUpload}
              className="hidden"
              accept=".pdf,.docx,.doc"
            />
            <label htmlFor="businessDocuments" className="cursor-pointer">
              <Upload className="mx-auto h-10 w-10 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">
                {language === 'ar' 
                  ? 'اسحب وأفلت أو انقر للتحميل' 
                  : 'Drag & drop or click to upload'}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {language === 'ar' 
                  ? 'الصيغ المقبولة: PDF، DOCX، DOC (الحد الأقصى 10 ميجابايت)'
                  : 'Accepted formats: PDF, DOCX, DOC (max 10MB)'}
              </p>
            </label>
            
            {formData.businessDocuments && (
              <div className="mt-4 py-2 px-4 bg-green-50 text-green-800 rounded-md flex items-center">
                <Check className="w-4 h-4 mr-2" />
                <span>{formData.businessDocuments.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  // Step 5: Review Form
  const renderReviewStep = () => {
    const getServiceName = () => {
      switch (formData.serviceType) {
        case 'businessVisa': 
          return language === 'ar' ? 'تأشيرة عمل' : 'Business Visa';
        case 'investorResidency': 
          return language === 'ar' ? 'إقامة المستثمر' : 'Investor Residency';
        case 'workPermit': 
          return language === 'ar' ? 'تصريح عمل' : 'Work Permit';
        case 'familyResidency': 
          return language === 'ar' ? 'إقامة عائلية' : 'Family Residency';
        default: 
          return '';
      }
    };
    
    return (
      <div className="space-y-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <h3 className="text-xl font-semibold">
          {language === 'ar' ? 'مراجعة الطلب' : 'Review Application'}
        </h3>
        <p className="text-gray-600">
          {language === 'ar' 
            ? 'يرجى مراجعة المعلومات أدناه قبل تقديم الطلب.'
            : 'Please review your information below before submitting your application.'}
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-medium mb-2">
            {language === 'ar' ? 'الخدمة المختارة' : 'Selected Service'}
          </h4>
          <p>{getServiceName()}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-medium mb-2">
              {language === 'ar' ? 'المعلومات الشخصية' : 'Personal Information'}
            </h4>
            <ul className="space-y-2">
              <li><span className="text-gray-600">{language === 'ar' ? 'الاسم:' : 'Name:'}</span> {formData.fullName}</li>
              <li><span className="text-gray-600">{language === 'ar' ? 'الجنسية:' : 'Nationality:'}</span> {formData.nationality}</li>
              <li><span className="text-gray-600">{language === 'ar' ? 'رقم جواز السفر:' : 'Passport #:'}</span> {formData.passportNumber}</li>
              <li><span className="text-gray-600">{language === 'ar' ? 'تاريخ الانتهاء:' : 'Expiry Date:'}</span> {formData.passportExpiry}</li>
              <li><span className="text-gray-600">{language === 'ar' ? 'البريد الإلكتروني:' : 'Email:'}</span> {formData.email}</li>
              <li><span className="text-gray-600">{language === 'ar' ? 'الهاتف:' : 'Phone:'}</span> {formData.phone}</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-medium mb-2">
              {language === 'ar' ? 'معلومات الأعمال' : 'Business Information'}
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-600">{language === 'ar' ? 'الشركة:' : 'Company:'}</span> 
                {formData.companyName || (language === 'ar' ? 'غير محدد' : 'Not specified')}
              </li>
              <li>
                <span className="text-gray-600">{language === 'ar' ? 'نوع النشاط:' : 'Business Type:'}</span> 
                {formData.businessType || (language === 'ar' ? 'غير محدد' : 'Not specified')}
              </li>
              <li>
                <span className="text-gray-600">{language === 'ar' ? 'مدة الإقامة:' : 'Stay Duration:'}</span> 
                {formData.plannedStayDuration}
              </li>
              <li>
                <span className="text-gray-600">{language === 'ar' ? 'تاريخ الدخول:' : 'Entry Date:'}</span> 
                {formData.entryDate}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-medium mb-2">
            {language === 'ar' ? 'الغرض من الإقامة' : 'Purpose of Stay'}
          </h4>
          <p className="whitespace-pre-line">{formData.purposeOfStay}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-medium mb-2">
            {language === 'ar' ? 'المستندات المرفقة' : 'Uploaded Documents'}
          </h4>
          <ul className="space-y-2">
            <li>
              <span className="text-gray-600">{language === 'ar' ? 'جواز السفر:' : 'Passport Copy:'}</span> 
              {formData.passportScan?.name || (language === 'ar' ? 'لم يتم التحميل' : 'Not uploaded')}
            </li>
            <li>
              <span className="text-gray-600">{language === 'ar' ? 'الصورة الشخصية:' : 'Photograph:'}</span> 
              {formData.photograph?.name || (language === 'ar' ? 'لم يتم التحميل' : 'Not uploaded')}
            </li>
            <li>
              <span className="text-gray-600">{language === 'ar' ? 'وثائق الأعمال:' : 'Business Documents:'}</span> 
              {formData.businessDocuments?.name || (language === 'ar' ? 'لم يتم التحميل' : 'Not uploaded')}
            </li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-yellow-700">
            {language === 'ar' 
              ? 'بتقديم هذا الطلب، أنت تؤكد أن جميع المعلومات المقدمة دقيقة وكاملة. قد تتم مراجعتها من قبل السلطات المختصة.'
              : 'By submitting this application, you confirm that all provided information is accurate and complete. It may be reviewed by relevant authorities.'}
          </p>
        </div>
      </div>
    );
  };
  
  // Success Message
  const renderSuccessMessage = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-8"
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        
        <h2 className="text-2xl font-bold mb-3">
          {language === 'ar' 
            ? 'تم تقديم الطلب بنجاح'
            : 'Application Submitted Successfully'}
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-8">
          {language === 'ar' 
            ? 'تم تقديم طلب التأشيرة/الإقامة الخاص بك. سيقوم فريقنا بمراجعة معلوماتك والتواصل معك خلال 48 ساعة مع الخطوات التالية.'
            : 'Your visa/residency application has been submitted. Our team will review your information and contact you within 48 hours with next steps.'}
        </p>
        
        <div className="bg-gray-50 rounded-xl p-6 mb-8 inline-block">
          <p className="text-sm text-gray-500">
            {language === 'ar' ? 'رقم المرجع' : 'Reference Number'}
          </p>
          <p className="text-2xl font-mono font-semibold mt-1">{referenceNumber}</p>
          <p className="text-xs text-gray-500 mt-2">
            {language === 'ar' 
              ? 'يرجى الاحتفاظ بهذا الرقم للمتابعة المستقبلية'
              : 'Please save this number for future reference'}
          </p>
        </div>
        
        <p className="text-sm text-gray-600 mb-8">
          {language === 'ar' 
            ? 'إذا كانت لديك أي أسئلة، يرجى التواصل مع فريق دعم التأشيرات على visasupport@syriastartups.com'
            : 'If you have any questions, please contact our visa support team at visasupport@syriastartups.com'}
        </p>
        
        <button
          type="button"
          onClick={() => navigate('/')}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          {language === 'ar' ? 'العودة للصفحة الرئيسية' : 'Return to Home'}
        </button>
      </motion.div>
    );
  };
  
  // Display the current step content
  const renderCurrentStep = () => {
    if (submitted) return renderSuccessMessage();
    
    switch (step) {
      case 1: return renderServiceOptions();
      case 2: return renderPersonalInfoForm();
      case 3: return renderBusinessInfoForm();
      case 4: return renderDocumentUploadForm();
      case 5: return renderReviewStep();
      default: return null;
    }
  };
  
  // FAQ Section
  const renderFAQSection = () => {
    const faqs = [
      {
        question: language === 'ar' ? 'ما هي المدة التي تستغرقها معالجة طلب التأشيرة؟' : 'How long does the visa processing take?',
        answer: language === 'ar' 
          ? 'تستغرق معالجة تأشيرة العمل عادةً 10-15 يوم عمل، وتصاريح الإقامة من 30-45 يومًا. قد تختلف الأوقات الدقيقة حسب الجنسية والظروف المحددة.'
          : 'Business visa processing typically takes 10-15 business days, while residency permits take 30-45 days. Exact times may vary based on nationality and specific circumstances.'
      },
      {
        question: language === 'ar' ? 'هل يمكنني التقدم بطلب للحصول على تأشيرة عمل وأنا خارج سوريا؟' : 'Can I apply for a business visa while outside Syria?',
        answer: language === 'ar' 
          ? 'نعم، يجب الحصول على تأشيرات العمل قبل السفر إلى سوريا. يمكن لفريقنا مساعدتك في عملية التقديم عن بُعد.'
          : 'Yes, business visas should be obtained before traveling to Syria. Our team can assist with the remote application process.'
      },
      {
        question: language === 'ar' ? 'ما هي متطلبات الاستثمار للحصول على إقامة المستثمر؟' : 'What are the investment requirements for investor residency?',
        answer: language === 'ar' 
          ? 'تتطلب إقامة المستثمر عادةً حدًا أدنى للاستثمار قدره 50,000 دولار أمريكي في شركة أو مشروع تجاري سوري. يمكن لفريقنا تقديم توجيهات محددة بناءً على قطاع أعمالك.'
          : 'Investor residency typically requires a minimum investment of USD 50,000 in a Syrian company or business venture. Our team can provide specific guidance based on your business sector.'
      },
      {
        question: language === 'ar' ? 'هل يمكنني إحضار عائلتي معي بإقامة المستثمر؟' : 'Can I bring my family with an investor residency?',
        answer: language === 'ar' 
          ? 'نعم، يمكن للمستثمرين التقدم بطلب للحصول على تصاريح إقامة لأفراد الأسرة المباشرين (الزوج/الزوجة والأطفال دون سن 18).'
          : 'Yes, investors can apply for dependent residency permits for immediate family members (spouse and children under 18 years old).'
      },
      {
        question: language === 'ar' ? 'ما هي المستندات المطلوبة لتصريح العمل؟' : 'What documents are required for a work permit?',
        answer: language === 'ar' 
          ? 'تتضمن المستندات المطلوبة: عقد عمل من شركة سورية، نسخة من جواز السفر، صور شخصية، شهادات التعليم/المؤهلات، والسيرة الذاتية.'
          : 'Required documents include: employment contract with a Syrian company, passport copy, photographs, education/qualification certificates, and CV/resume.'
      }
    ];
    
    return (
      <Section background="gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-5" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    );
  };
  
  // Process steps section
  const renderProcessStepsSection = () => {
    const steps = [
      {
        title: language === 'ar' ? 'تقديم الطلب' : 'Submit Application',
        description: language === 'ar' 
          ? 'املأ النموذج وقدم المستندات المطلوبة'
          : 'Complete the form and submit required documents',
        icon: <File className="w-8 h-8 text-primary" />
      },
      {
        title: language === 'ar' ? 'المراجعة والتدقيق' : 'Review & Verification',
        description: language === 'ar' 
          ? 'سيراجع فريقنا طلبك ويتحقق من المستندات'
          : 'Our team reviews your application and verifies documents',
        icon: <Shield className="w-8 h-8 text-primary" />
      },
      {
        title: language === 'ar' ? 'المعالجة الرسمية' : 'Official Processing',
        description: language === 'ar' 
          ? 'يتم تقديم طلبك إلى السلطات المختصة'
          : 'Your application is submitted to relevant authorities',
        icon: <Calendar className="w-8 h-8 text-primary" />
      },
      {
        title: language === 'ar' ? 'استلام التأشيرة/الإقامة' : 'Receive Visa/Residency',
        description: language === 'ar' 
          ? 'استلام الوثائق النهائية وتعليمات الاستخدام'
          : 'Receive final documents and usage instructions',
        icon: <User className="w-8 h-8 text-primary" />
      }
    ];
    
    return (
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">
            {language === 'ar' ? 'كيف تعمل العملية' : 'How The Process Works'}
          </h2>
          <p className="text-center text-gray-600 mb-12">
            {language === 'ar' 
              ? 'خطوات بسيطة للحصول على التأشيرة أو الإقامة في سوريا للمستثمرين ورجال الأعمال'
              : 'Simple steps to obtain your visa or residency in Syria for investors and business people'}
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 relative" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {/* Horizontal connecting line - positioned behind the cards */}
            <div className="hidden md:block absolute top-[40px] left-[10%] w-[80%] h-1 bg-gray-200 z-0"></div>
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center relative z-10"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <div className="absolute w-6 h-6 rounded-full bg-white text-primary font-bold flex items-center justify-center top-0 right-0 border border-primary">
                    {index + 1}
                  </div>
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    );
  };

  return (
    <>
      <PageHeader
        title={language === 'ar' ? 'خدمات التأشيرة والإقامة' : 'Visa & Residency Services'}
        subtitle={language === 'ar' 
          ? 'خدمات متكاملة للمستثمرين ورجال الأعمال غير السوريين'
          : 'Comprehensive services for non-Syrian investors and business people'
        }
        backgroundImage="/assets/images/visa-header-bg.jpg"
      />
      
      <Section background="white">
        <div className="max-w-3xl mx-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <p className="text-center text-lg text-gray-700 mb-8">
            {language === 'ar'
              ? 'نقدم مساعدة شاملة لجميع إجراءات التأشيرة والإقامة المطلوبة للمواطنين غير السوريين الراغبين في تأسيس أو تشغيل الأعمال التجارية في سوريا.'
              : 'We provide comprehensive assistance for all visa and residency procedures required for non-Syrian nationals looking to establish or operate businesses in Syria.'
            }
          </p>
          
          {step > 1 && !submitted && renderStepIndicator()}
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
            <form onSubmit={handleSubmit}>
              {renderCurrentStep()}
              
              {step > 1 && step < 6 && !submitted && (
                <div className="flex justify-between mt-10" dir="ltr">
                  <button
                    type="button"
                    onClick={() => setStep(prev => prev - 1)}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    disabled={isSubmitting}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {language === 'ar' ? 'السابق' : 'Previous'}
                  </button>
                  
                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={() => setStep(prev => prev + 1)}
                      className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                      disabled={isSubmitting}
                    >
                      {language === 'ar' ? 'التالي' : 'Next'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors disabled:bg-primary/70"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {language === 'ar' ? 'جاري المعالجة...' : 'Processing...'}
                        </>
                      ) : (
                        language === 'ar' ? 'تقديم الطلب' : 'Submit Application'
                      )}
                    </button>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </Section>
      
      {/* Show process steps and FAQ only if not in review or submitted state */}
      {step < 5 && !submitted && (
        <>
          {renderProcessStepsSection()}
          {renderFAQSection()}
        </>
      )}
    </>
  );
};

export default VisaResidency;