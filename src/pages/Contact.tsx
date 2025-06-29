import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import Section from '../components/common/Section';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';
import { sendEmailNotification } from '../lib/emailNotification';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };
  
  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === '',
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: formData.message.trim() === ''
    };
    
    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log('Submitting contact form...');
      console.log('Form data:', JSON.stringify(formData, null, 2));
      
      // Submit to Supabase
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            status: 'unread'
          }
        ])
        .select()
        .single();
      
      if (error) {
        console.error('Error submitting to Supabase:', error);
        throw error;
      }
      
      console.log('Contact form submitted successfully to Supabase:', data);
      
      // Send email notification
      if (data) {
        console.log('Attempting to send email notification for contact form...');
        
        const emailResult = await sendEmailNotification(data, 'contact');
        
        console.log('Email notification result:', emailResult);
        
        if (!emailResult.success) {
          console.warn('Email notification failed but form was submitted:', emailResult.error);
        } else {
          console.log('Email notification for contact form completed successfully');
        }
      }
      
      setSubmitSuccess(true);
      toast.success(t('contact.form.success'));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error(language === 'ar' 
        ? 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.'
        : 'An error occurred while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const contactMethods = [
    {
      icon: <Mail size={24} className="text-primary" />,
      title: t('contact.methods.email.title'),
      details: t('contact.methods.email.value'),
      link: 'mailto:info@syriastartups.com'
    },
    {
      icon: <Phone size={24} className="text-primary" />,
      title: t('contact.methods.phone.title'),
      details: t('contact.methods.phone.value'),
      link: 'tel:+963000000000'
    },
    {
      icon: <MapPin size={24} className="text-primary" />,
      title: t('contact.methods.address.title'),
      details: t('contact.methods.address.value'),
      link: '#'
    }
  ];
  
  // Get subject options with a fallback to an empty array if not an array
  const subjectOptions = (() => {
    try {
      const options = t('contact.form.subject.options', { returnObjects: true });
      return Array.isArray(options) ? options : [];
    } catch {
      return [];
    }
  })();
  
  return (
    <>
      <PageHeader
        title={t('contact.header.title')}
        subtitle={t('contact.header.subtitle')}
      />
      
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-primary mb-6">{t('contact.info.title')}</h2>
            <p className="text-gray-600 mb-8">
              {t('contact.info.description')}
            </p>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="p-3 rounded-full bg-primary-light/20 ml-4">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{method.title}</h3>
                    <a href={method.link} className="text-primary hover:text-primary-dark transition-colors">
                      {method.details}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10">
              <h3 className="font-bold text-gray-800 mb-4">{t('contact.social.title')}</h3>
              <div className="flex space-x-4 space-x-reverse">
                <a href="#" className="p-2 bg-primary-light/20 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="p-2 bg-primary-light/20 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="p-2 bg-primary-light/20 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">{t('contact.form.title')}</h2>
              
              {submitSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
                >
                  <p>{t('contact.form.success')}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        {t('contact.form.name.label')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder={t('contact.form.name.placeholder')}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-red-500 text-sm">{t('contact.form.name.error')}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        {t('contact.form.email.label')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder={t('contact.form.email.placeholder')}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-red-500 text-sm">{t('contact.form.email.error')}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        {t('contact.form.phone.label')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder={t('contact.form.phone.placeholder')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        {t('contact.form.subject.label')}
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">{t('contact.form.subject.placeholder')}</option>
                        {subjectOptions.map((option: string, index: number) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      {t('contact.form.message.label')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-36 ${formErrors.message ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder={t('contact.form.message.placeholder')}
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-red-500 text-sm">{t('contact.form.message.error')}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>{t('contact.form.submitting')}</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>{t('contact.form.submit')}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
      
      <Section background="light">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary mb-2">{t('contact.location.title')}</h2>
          <p className="text-gray-600">{t('contact.location.subtitle')}</p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-md h-96 w-full">
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">{t('contact.location.map')}</p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;