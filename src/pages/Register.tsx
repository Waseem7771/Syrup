import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Building, FileText, Scale, Info } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Section from '../components/common/Section';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';
import { sendEmailNotification } from '../lib/emailNotification';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  // Add this state for the initial choice
  const [startChoice, setStartChoice] = useState<'idea' | 'company' | null>(null);
  const [ideaTopic, setIdeaTopic] = useState('');
  const [ideaText, setIdeaText] = useState('');
  const [ideaContact, setIdeaContact] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const ideaTopics = [
    language === 'ar' ? 'تكنولوجيا' : 'Technology',
    language === 'ar' ? 'طعام' : 'Food',
    language === 'ar' ? 'تعليم' : 'Education',
    language === 'ar' ? 'صحة' : 'Health',
    language === 'ar' ? 'خدمات' : 'Services',
    language === 'ar' ? 'أخرى' : 'Other',
  ];

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Company Information
    company_name: '',
    company_type: '',
    business_activity: '',
    
    // Step 2: Founder Information
    founder_name: '',
    founder_email: '',
    founder_phone: '',
    founder_nationality: language === 'ar' ? 'سوري' : 'Syrian',
    partners_count: '1',
    
    // Step 3: Additional Information
    estimated_capital: '',
    has_location: 'no',
    location_city: '',
    requires_consultation: false,
    
    // Step 4: Service Selection
    services: {
      fullfinancial: true,
      technicalConsultation: false,
      businessPlan: false,
      workspace: false
    }
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const updateServiceSelection = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: checked
      }
    }));
  };
  
  const nextStep = () => {
    setStep(prev => Math.min(prev + 1, 4));
  };
  
  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit to Supabase
      const { data, error } = await supabase
        .from('registrations')
        .insert([
          {
            company_name: formData.company_name,
            company_type: formData.company_type,
            business_activity: formData.business_activity,
            founder_name: formData.founder_name,
            founder_email: formData.founder_email,
            founder_phone: formData.founder_phone,
            founder_nationality: formData.founder_nationality,
            partners_count: formData.partners_count,
            estimated_capital: formData.estimated_capital,
            has_location: formData.has_location === 'yes',
            location_city: formData.location_city,
            requires_consultation: formData.requires_consultation,
            services: formData.services
          }
        ]);
      
      if (error) throw error;
      console.log('Supabase insert data:', data);
      
      // Send email notification
      if (data) {
        console.log('Attempting to send email notification...');
        
        await sendEmailNotification(
          {
            company_name: formData.company_name,
            company_type: formData.company_type,
            business_activity: formData.business_activity,
            founder_name: formData.founder_name,
            founder_email: formData.founder_email,
            founder_phone: formData.founder_phone,
            founder_nationality: formData.founder_nationality,
            partners_count: formData.partners_count,
            estimated_capital: formData.estimated_capital,
            has_location: formData.has_location === 'yes',
            location_city: formData.location_city,
            requires_consultation: formData.requires_consultation,
            services: formData.services
          }, 
          'registration'
        );
      }
      console.log('Email notification function called.');
      
      toast.success(t('register.success.message'));
      
      // Reset form
      setFormData({
        company_name: '',
        company_type: '',
        business_activity: '',
        founder_name: '',
        founder_email: '',
        founder_phone: '',
        founder_nationality: language === 'ar' ? 'سوري' : 'Syrian',
        partners_count: '1',
        estimated_capital: '',
        has_location: 'no',
        location_city: '',
        requires_consultation: false,
        services: {
          fullfinancial: true,
          technicalConsultation: false,
          businessPlan: false,
          workspace: false
        }
      });
      
      // Navigate to home page after successful submission
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(language === 'ar' 
        ? 'حدث خطأ أثناء تقديم الطلب. يرجى المحاولة مرة أخرى.'
        : 'An error occurred while submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleIdeaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit to Supabase contact_messages table as an idea submission
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: ideaContact.name,
            email: ideaContact.email,
            phone: ideaContact.phone,
            subject: `Idea Submission: ${ideaTopic}`,
            message: ideaText,
            status: 'unread'
          }
        ]);
      
      if (error) throw error;
      console.log('Supabase insert data:', data);
      
      // Send email notification
      if (data) {
        console.log('Attempting to send email notification...');
        
        await sendEmailNotification(
          {
            name: ideaContact.name,
            email: ideaContact.email,
            phone: ideaContact.phone,
            subject: `Idea Submission: ${ideaTopic}`,
            message: ideaText
          }, 
          'idea'
        );
      }
      console.log('Email notification function called.');
      
      toast.success(language === 'ar' 
        ? 'تم إرسال فكرتك بنجاح!' 
        : 'Your idea has been submitted successfully!');
      
      // Reset form data
      setStartChoice(null);
      setIdeaTopic('');
      setIdeaText('');
      setIdeaContact({ name: '', email: '', phone: '' });
      
      // Navigate to the home page
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting idea:', error);
      toast.error(language === 'ar' 
        ? 'حدث خطأ أثناء إرسال فكرتك. يرجى المحاولة مرة أخرى.'
        : 'An error occurred while submitting your idea. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const companyTypes = [
    { id: 'llc', name: t('register.companyInfo.companyType.types.llc.name'), description: t('register.companyInfo.companyType.types.llc.description') },
    { id: 'jsc', name: t('register.companyInfo.companyType.types.jsc.name'), description: t('register.companyInfo.companyType.types.jsc.description') },
    { id: 'sp', name: t('register.companyInfo.companyType.types.sp.name'), description: t('register.companyInfo.companyType.types.sp.description') },
    { id: 'partnership', name: t('register.companyInfo.companyType.types.partnership.name'), description: t('register.companyInfo.companyType.types.partnership.description') }
  ];
  
  const businessActivities = t('register.companyInfo.businessActivity.options', { returnObjects: true }) as string[];
  const cities = t('register.additionalInfo.locationCity.cities', { returnObjects: true }) as string[];
  
  const stepInfo = [
    { number: 1, title: t('register.steps.companyInfo'), icon: <Building size={18} /> },
    { number: 2, title: t('register.steps.founderInfo'), icon: <FileText size={18} /> },
    { number: 3, title: t('register.steps.additionalInfo'), icon: <Info size={18} /> },
    { number: 4, title: t('register.steps.serviceSelection'), icon: <Scale size={18} /> }
  ];
  
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-primary">{t('register.companyInfo.title')}</h2>
            <p className="text-gray-600">{t('register.companyInfo.description')}</p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="company_name" className="block text-gray-700 font-medium mb-2">
                  {t('register.companyInfo.companyName.label')}
                </label>
                <input
                  id="company_name"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={t('register.companyInfo.companyName.placeholder')}
                  value={formData.company_name}
                  onChange={(e) => updateFormData('company_name', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {t('register.companyInfo.companyType.label')}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {companyTypes.map((type) => (
                    <div 
                      key={type.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        formData.company_type === type.id ? 'border-primary bg-primary-light/10' : 'border-gray-200 hover:border-primary-light'
                      }`}
                      onClick={() => updateFormData('company_type', type.id)}
                    >
                      <div className="flex items-start">
                        <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center mr-3 ${
                          formData.company_type === type.id ? 'border-primary bg-primary' : 'border-gray-300'
                        }`}>
                          {formData.company_type === type.id && <Check size={12} className="text-white" />}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">{type.name}</h3>
                          <p className="text-sm text-gray-500 mt-1">{type.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="business_activity" className="block text-gray-700 font-medium mb-2">
                  {t('register.companyInfo.businessActivity.label')}
                </label>
                <select
                  id="business_activity"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.business_activity}
                  onChange={(e) => updateFormData('business_activity', e.target.value)}
                  required
                >
                  <option value="">{t('register.companyInfo.businessActivity.placeholder')}</option>
                  {businessActivities.map((activity, index) => (
                    <option key={index} value={activity}>{activity}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex justify-end pt-4">
              <button 
                type="button" 
                className="btn-primary flex items-center gap-2"
                onClick={nextStep}
              >
                {t('register.steps.next')}
                {language === 'ar' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </button>
            </div>
          </motion.div>
        );
      
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-primary">{t('register.founderInfo.title')}</h2>
            <p className="text-gray-600">{t('register.founderInfo.description')}</p>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="founder_name" className="block text-gray-700 font-medium mb-2">
                    {t('register.founderInfo.founderName.label')}
                  </label>
                  <input
                    id="founder_name"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t('register.founderInfo.founderName.placeholder')}
                    value={formData.founder_name}
                    onChange={(e) => updateFormData('founder_name', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="founder_nationality" className="block text-gray-700 font-medium mb-2">
                    {t('register.founderInfo.nationality.label')}
                  </label>
                  <select
                    id="founder_nationality"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.founder_nationality}
                    onChange={(e) => updateFormData('founder_nationality', e.target.value)}
                    required
                  >
                    <option value={language === 'ar' ? 'سوري' : 'Syrian'}>
                      {t('register.founderInfo.nationality.options.syrian')}
                    </option>
                    <option value={language === 'ar' ? 'غير سوري' : 'Non-Syrian'}>
                      {t('register.founderInfo.nationality.options.nonSyrian')}
                    </option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="founder_email" className="block text-gray-700 font-medium mb-2">
                    {t('register.founderInfo.email.label')}
                  </label>
                  <input
                    id="founder_email"
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t('register.founderInfo.email.placeholder')}
                    value={formData.founder_email}
                    onChange={(e) => updateFormData('founder_email', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="founder_phone" className="block text-gray-700 font-medium mb-2">
                    {t('register.founderInfo.phone.label')}
                  </label>
                  <input
                    id="founder_phone"
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t('register.founderInfo.phone.placeholder')}
                    value={formData.founder_phone}
                    onChange={(e) => updateFormData('founder_phone', e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="partners_count" className="block text-gray-700 font-medium mb-2">
                  {t('register.founderInfo.partnersCount.label')}
                </label>
                <select
                  id="partners_count"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.partners_count}
                  onChange={(e) => updateFormData('partners_count', e.target.value)}
                  required
                >
                  <option value="1">{t('register.founderInfo.partnersCount.options.single')}</option>
                  <option value="2">{t('register.founderInfo.partnersCount.options.two')}</option>
                  <option value="3">{t('register.founderInfo.partnersCount.options.three')}</option>
                  <option value="4">{t('register.founderInfo.partnersCount.options.four')}</option>
                  <option value="5+">{t('register.founderInfo.partnersCount.options.moreThanFive')}</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-between pt-4">
              <button 
                type="button" 
                className="btn-outline flex items-center gap-2"
                onClick={prevStep}
              >
                {language === 'ar' ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                {t('register.steps.previous')}
              </button>
              <button 
                type="button" 
                className="btn-primary flex items-center gap-2"
                onClick={nextStep}
              >
                {t('register.steps.next')}
                {language === 'ar' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </button>
            </div>
          </motion.div>
        );
      
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-primary">{t('register.additionalInfo.title')}</h2>
            <p className="text-gray-600">{t('register.additionalInfo.description')}</p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="estimated_capital" className="block text-gray-700 font-medium mb-2">
                  {t('register.additionalInfo.estimatedCapital.label')}
                </label>
                <select
                  id="estimated_capital"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.estimated_capital}
                  onChange={(e) => updateFormData('estimated_capital', e.target.value)}
                  required
                >
                  <option value="">{t('register.additionalInfo.estimatedCapital.placeholder')}</option>
                  <option value="lessThan5k">{t('register.additionalInfo.estimatedCapital.options.lessThan5k')}</option>
                  <option value="from5kTo10k">{t('register.additionalInfo.estimatedCapital.options.from5kTo10k')}</option>
                  <option value="from10kTo50k">{t('register.additionalInfo.estimatedCapital.options.from10kTo50k')}</option>
                  <option value="from50kTo100k">{t('register.additionalInfo.estimatedCapital.options.from50kTo100k')}</option>
                  <option value="moreThan100k">{t('register.additionalInfo.estimatedCapital.options.moreThan100k')}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {t('register.additionalInfo.hasLocation.label')}
                </label>
                <div className="flex space-x-4 space-x-reverse">
                  <div 
                    className={`border rounded-lg p-3 cursor-pointer transition-all flex items-center ${
                      formData.has_location === 'yes' ? 'border-primary bg-primary-light/10' : 'border-gray-200 hover:border-primary-light'
                    }`}
                    onClick={() => updateFormData('has_location', 'yes')}
                  >
                    <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center ml-2 ${
                      formData.has_location === 'yes' ? 'border-primary bg-primary' : 'border-gray-300'
                    }`}>
                      {formData.has_location === 'yes' && <Check size={12} className="text-white" />}
                    </div>
                    <span>{t('register.additionalInfo.hasLocation.yes')}</span>
                  </div>
                  
                  <div 
                    className={`border rounded-lg p-3 cursor-pointer transition-all flex items-center ${
                      formData.has_location === 'no' ? 'border-primary bg-primary-light/10' : 'border-gray-200 hover:border-primary-light'
                    }`}
                    onClick={() => updateFormData('has_location', 'no')}
                  >
                    <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center ml-2 ${
                      formData.has_location === 'no' ? 'border-primary bg-primary' : 'border-gray-300'
                    }`}>
                      {formData.has_location === 'no' && <Check size={12} className="text-white" />}
                    </div>
                    <span>{t('register.additionalInfo.hasLocation.no')}</span>
                  </div>
                </div>
              </div>
              
              {formData.has_location === 'yes' && (
                <div>
                  <label htmlFor="location_city" className="block text-gray-700 font-medium mb-2">
                    {t('register.additionalInfo.locationCity.label')}
                  </label>
                  <select
                    id="location_city"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.location_city}
                    onChange={(e) => updateFormData('location_city', e.target.value)}
                    required
                  >
                    <option value="">{t('register.additionalInfo.locationCity.placeholder')}</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              )}
              
              <div className="pt-2">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={formData.requires_consultation}
                    onChange={(e) => updateFormData('requires_consultation', e.target.checked)}
                  />
                  <span className="mr-2 text-gray-700">
                    {t('register.additionalInfo.requiresConsultation')}
                  </span>
                </label>
              </div>
            </div>
            
            <div className="flex justify-between pt-4">
              <button 
                type="button" 
                className="btn-outline flex items-center gap-2"
                onClick={prevStep}
              >
                {language === 'ar' ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                {t('register.steps.previous')}
              </button>
              <button 
                type="button" 
                className="btn-primary flex items-center gap-2"
                onClick={nextStep}
              >
                {t('register.steps.next')}
                {language === 'ar' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </button>
            </div>
          </motion.div>
        );
      
      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-primary">{t('register.serviceSelection.title')}</h2>
            <p className="text-gray-600">{t('register.serviceSelection.description')}</p>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={formData.services.fullfinancial}
                    onChange={(e) => updateServiceSelection('fullfinancial', e.target.checked)}
                  />
                  <div className="mr-3">
                    <h3 className="font-medium text-gray-800">{t('register.serviceSelection.services.fullfinancial.title')}</h3>
                    <p className="text-sm text-gray-500 mt-1">{t('register.serviceSelection.services.fullfinancial.description')}</p>
                  </div>
                </label>
              </div>
              
              <div className="border rounded-lg p-4">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={formData.services.technicalConsultation}
                    onChange={(e) => updateServiceSelection('technicalConsultation', e.target.checked)}
                  />
                  <div className="mr-3">
                    <h3 className="font-medium text-gray-800">{t('register.serviceSelection.services.technicalConsultation.title')}</h3>
                    <p className="text-sm text-gray-500 mt-1">{t('register.serviceSelection.services.technicalConsultation.description')}</p>
                  </div>
                </label>
              </div>
              
              <div className="border rounded-lg p-4">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={formData.services.businessPlan}
                    onChange={(e) => updateServiceSelection('businessPlan', e.target.checked)}
                  />
                  <div className="mr-3">
                    <h3 className="font-medium text-gray-800">{t('register.serviceSelection.services.businessPlan.title')}</h3>
                    <p className="text-sm text-gray-500 mt-1">{t('register.serviceSelection.services.businessPlan.description')}</p>
                  </div>
                </label>
              </div>
              
              <div className="border rounded-lg p-4">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={formData.services.workspace}
                    onChange={(e) => updateServiceSelection('workspace', e.target.checked)}
                  />
                  <div className="mr-3">
                    <h3 className="font-medium text-gray-800">{t('register.serviceSelection.services.workspace.title')}</h3>
                    <p className="text-sm text-gray-500 mt-1">{t('register.serviceSelection.services.workspace.description')}</p>
                  </div>
                </label>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start">
              <Info size={20} className="text-yellow-500 mt-1 ml-3 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-800 mb-1">{t('register.serviceSelection.note.title')}</h4>
                <p className="text-sm text-gray-700">
                  {t('register.serviceSelection.note.content')}
                </p>
              </div>
            </div>
            
            <div className="flex justify-between pt-4">
              <button 
                type="button" 
                className="btn-outline flex items-center gap-2"
                onClick={prevStep}
                disabled={isSubmitting}
              >
                {language === 'ar' ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                {t('register.steps.previous')}
              </button>
              <button 
                type="submit" 
                className="btn-primary flex items-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {language === 'ar' ? 'جاري الإرسال...' : 'Submitting...'}
                  </span>
                ) : (
                  <>
                    {t('register.steps.submit')}
                    <Check size={16} />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        );
      
      default:
        return null;
    }
  };
  
  const progressBarWidth = `${(step / 4) * 100}%`;
  
  // Add this render for the initial choice
  if (!startChoice) {
    return (
      <>
        <PageHeader
          title={language === 'ar' ? 'ابدأ رحلتك' : 'Start Your Journey'}
          subtitle={language === 'ar'
            ? 'هل لديك فكرة مشروع أم لديك شركة قائمة؟ اختر الطريقة التي تناسبك للمتابعة.'
            : 'Do you have a business idea or already have a company? Choose how you want to proceed.'}
          backgroundImage="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
        />
        <Section background="white">
          <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-8 mt-10 text-center">
            <h2 className="text-2xl font-bold mb-6 text-primary">
              {language === 'ar' ? 'اختر نوع التسجيل' : 'Choose Registration Type'}
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button
                className="flex-1 btn-primary py-6 px-8 text-lg rounded-xl shadow hover:shadow-lg transition-all"
                onClick={() => setStartChoice('idea')}
              >
                {language === 'ar' ? 'لدي فكرة' : 'I have an idea'}
              </button>
              <button
                className="flex-1 btn-secondary py-6 px-8 text-lg rounded-xl shadow hover:shadow-lg transition-all"
                onClick={() => setStartChoice('company')}
              >
                {language === 'ar' ? 'لدي شركة' : 'I already have a company'}
              </button>
            </div>
          </div>
        </Section>
      </>
    );
  }

  // If user chooses "I have an idea"
  if (startChoice === 'idea') {
    return (
      <>
        <PageHeader
          title={language === 'ar' ? 'شارك فكرتك معنا' : 'Share Your Idea'}
          subtitle={language === 'ar'
            ? 'اختر المجال الذي تتعلق به فكرتك ثم اكتب وصفاً مختصراً عنها.'
            : 'Select the topic related to your idea and write a brief description.'}
          backgroundImage="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
        />
        <Section background="white">
          <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-8 mt-10">
            <form
              onSubmit={handleIdeaSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  {language === 'ar' ? 'إلى أي مجال تتعلق فكرتك؟' : 'Which topic is your idea related to?'}
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={ideaTopic}
                  onChange={e => setIdeaTopic(e.target.value)}
                  required
                >
                  <option value="">{language === 'ar' ? 'اختر المجال' : 'Select a topic'}</option>
                  {ideaTopics.map(topic => (
                    <option key={topic} value={topic}>{topic}</option>
                  ))}
                </select>
                
                {/* Add conditional rendering for "Other" option */}
                {ideaTopic === (language === 'ar' ? 'أخرى' : 'Other') && (
                  <div className="mt-3">
                    <label className="block mb-2 font-medium text-gray-700">
                      {language === 'ar' ? 'حدد المجال' : 'Specify topic'}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder={language === 'ar' ? 'اكتب المجال الخاص بك...' : 'Write your specific topic...'}
                      required
                    />
                  </div>
                )}
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  {language === 'ar' ? 'اكتب فكرتك' : 'Describe your idea'}
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary"
                  value={ideaText}
                  onChange={e => setIdeaText(e.target.value)}
                  required
                  placeholder={language === 'ar' ? 'اكتب وصفاً لفكرتك...' : 'Write a description of your idea...'}
                />
              </div>
              
              {/* Contact information section */}
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  {language === 'ar' ? 'بيانات الاتصال' : 'Contact Information'}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      {language === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      value={ideaContact.name}
                      onChange={e => setIdeaContact({...ideaContact, name: e.target.value})}
                      required
                      placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        {language === 'ar' ? 'البريد الإلكتروني *' : 'Email *'}
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        value={ideaContact.email}
                        onChange={e => setIdeaContact({...ideaContact, email: e.target.value})}
                        required
                        placeholder={language === 'ar' ? 'example@example.com' : 'example@example.com'}
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        {language === 'ar' ? 'رقم الهاتف *' : 'Phone Number *'}
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        value={ideaContact.phone}
                        onChange={e => setIdeaContact({...ideaContact, phone: e.target.value})}
                        required
                        placeholder={language === 'ar' ? '+963 00 000 0000' : '+963 00 000 0000'}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 mt-8">
                <button
                  type="submit"
                  className="btn-primary flex-1 py-3 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {language === 'ar' ? 'جاري الإرسال...' : 'Submitting...'}
                    </span>
                  ) : (
                    language === 'ar' ? 'إرسال الفكرة' : 'Submit Idea'
                  )}
                </button>
                <button
                  type="button"
                  className="btn-outline flex-1 py-3 text-lg"
                  onClick={() => setStartChoice(null)}
                  disabled={isSubmitting}
                >
                  {language === 'ar' ? 'عودة' : 'Back'}
                </button>
              </div>
            </form>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title={t('register.header.title')}
        subtitle={t('register.header.subtitle')}
      />
      
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="hidden md:flex items-center justify-between mb-8">
              {stepInfo.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col items-center ${step >= item.number ? 'text-primary' : 'text-gray-400'}`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= item.number ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                    {item.icon}
                  </div>
                  <span className="text-sm">{item.title}</span>
                </div>
              ))}
            </div>
            
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
              <div 
                className="absolute top-0 left-0 h-full bg-primary transition-all duration-300"
                style={{ width: progressBarWidth }}
              ></div>
            </div>
            
            <div className="md:hidden flex justify-between mb-4">
              <span className="text-sm font-medium text-primary">{stepInfo[step-1].title}</span>
              <span className="text-sm text-gray-500">
                {t('register.steps.step')} {step} {t('register.steps.of')} 4
              </span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              {renderStep()}
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Register;