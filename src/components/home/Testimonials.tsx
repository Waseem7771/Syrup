import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react'; // Import User icon
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';

const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const testimonials = [
    {
      name: t('testimonials.testimonial1.name'),
      role: t('testimonials.testimonial1.role'),
      content: t('testimonials.testimonial1.content'),
      rating: 5
    },
    {
      name: t('testimonials.testimonial2.name'),
      role: t('testimonials.testimonial2.role'),
      content: t('testimonials.testimonial2.content'),
      rating: 5
    },
    {
      name: t('testimonials.testimonial3.name'),
      role: t('testimonials.testimonial3.role'),
      content: t('testimonials.testimonial3.content'),
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-primary-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('testimonials.title')}</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">{t('testimonials.description')}</p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-accent border border-accent rounded-2xl shadow-lg p-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary flex items-center justify-center mx-auto border-4 border-accent">
                  <User size={64} className="text-accent" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-primary fill-primary" />
                  ))}
                  {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i + testimonials[currentIndex].rating} size={18} className="text-primary-light" />
                  ))}
                </div>
                <div className="mb-4 text-lg text-primary">
                  "{testimonials[currentIndex].content}"
                </div>
                <h3 className="font-bold text-xl text-primary">{testimonials[currentIndex].name}</h3>
                <p className="text-primary-light">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary hover:bg-primary-light transition-colors"
              aria-label="Previous testimonial"
            >
              {language === 'ar' ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary hover:bg-primary-light transition-colors"
              aria-label="Next testimonial"
            >
              {language === 'ar' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;