import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { Calendar, Clock, Video, Users, MessageSquare, Star, User } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const MarketingConsulting: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      header: {
        title: "Marketing Consulting",
        subtitle: "Grow your business with expert marketing strategies and support."
      },
      howItWorks: {
        title: "How It Works",
        description: "Our marketing consultants help you research your market, position your brand, and execute effective campaigns."
      },
      types: [
        {
          icon: <Video className="text-primary" size={32} />,
          title: "Remote Consultation",
          description: "Get marketing advice online from anywhere.",
          duration: "60 min"
        },
        {
          icon: <Users className="text-primary" size={32} />,
          title: "In-Person Consultation",
          description: "Meet our marketing experts face-to-face for tailored support.",
          duration: "90 min"
        },
        {
          icon: <MessageSquare className="text-primary" size={32} />,
          title: "Written Consultation",
          description: "Receive detailed written marketing plans and answers.",
          duration: "2-3 days"
        }
      ],
      ourConsultants: {
        title: "Our Marketing Consultants",
        description: "Meet our experienced marketing consultants."
      },
      consultants: [
        {
          name: "Layla Haddad",
          role: "Marketing Strategist",
          specialties: ["Market Research", "Digital Marketing", "Brand Positioning"],
          experience: "8+ years in marketing strategy and campaign management.",
          rating: 5,
          price: "60",
          availability: "Available: Mon-Fri"
        }
      ],
      perHour: "per hour",
      bookButton: "Book Now",
      cta: {
        title: "Ready to Boost Your Marketing?",
        description: "Contact us today to schedule your marketing consultation and grow your business.",
        button: "Contact Us"
      }
    },
    ar: {
      header: {
        title: "الاستشارات التسويقية",
        subtitle: "نمِّ عملك باستراتيجيات تسويقية وخبرات احترافية."
      },
      howItWorks: {
        title: "كيف تعمل الخدمة",
        description: "يساعدك مستشارونا التسويقيون في دراسة السوق، وتحديد موقع العلامة التجارية، وتنفيذ الحملات الفعالة."
      },
      types: [
        {
          icon: <Video className="text-primary" size={32} />,
          title: "استشارة عن بعد",
          description: "احصل على استشارات تسويقية عبر الإنترنت من أي مكان.",
          duration: "٦٠ دقيقة"
        },
        {
          icon: <Users className="text-primary" size={32} />,
          title: "استشارة حضورية",
          description: "قابل خبراء التسويق وجهاً لوجه لدعم مخصص.",
          duration: "٩٠ دقيقة"
        },
        {
          icon: <MessageSquare className="text-primary" size={32} />,
          title: "استشارة كتابية",
          description: "استلم خططاً تسويقية مكتوبة وإجابات مفصلة.",
          duration: "٢-٣ أيام"
        }
      ],
      ourConsultants: {
        title: "مستشارونا التسويقيون",
        description: "تعرف على مستشارينا ذوي الخبرة في التسويق."
      },
      consultants: [
        {
          name: "ليلى حداد",
          role: "خبيرة استراتيجيات تسويقية",
          specialties: ["دراسة السوق", "التسويق الرقمي", "تحديد موقع العلامة التجارية"],
          experience: "أكثر من 8 سنوات في استراتيجيات التسويق وإدارة الحملات.",
          rating: 5,
          price: "٦٠",
          availability: "متاحة: من الاثنين إلى الجمعة"
        }
      ],
      perHour: "لكل ساعة",
      bookButton: "احجز الآن",
      cta: {
        title: "جاهز لتعزيز تسويقك؟",
        description: "تواصل معنا اليوم لحجز استشارتك التسويقية وتنمية عملك.",
        button: "تواصل معنا"
      }
    }
  };

  const c = content[language] || content.en;

  return (
    <>
      <PageHeader
        title={c.header.title}
        subtitle={c.header.subtitle}
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&fit=crop&w=900&q=80"
      />

      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{c.howItWorks.title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{c.howItWorks.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {c.types.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-light/20 flex items-center justify-center mx-auto mb-4">
                {type.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-2">{type.title}</h3>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <div className="flex items-center justify-center text-gray-500">
                <Clock size={18} className="ml-2" />
                {type.duration}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="light">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{c.ourConsultants.title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{c.ourConsultants.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.consultants.map((consultant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="text-center mb-4">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30"></div>
                  {/* Inner circle with gradient background */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <User size={40} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary-dark">{consultant.name}</h3>
                <p className="text-primary">{consultant.role}</p>
              </div>
              <div className="flex items-center justify-center mb-4">
                {[...Array(consultant.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-accent fill-accent" />
                ))}
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600">{consultant.experience}</p>
                <div className="flex flex-wrap gap-2">
                  {consultant.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary-light/10 text-primary px-2 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center space-y-3">
                <p className="text-sm text-gray-500">{consultant.availability}</p>
                <p className="text-lg font-bold text-primary">
                  ${consultant.price} <span className="text-sm font-normal">{c.perHour}</span>
                </p>
                <button className="btn-primary w-full">
                  {c.bookButton}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="primary">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-6">{c.cta.title}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{c.cta.description}</p>
          <a href="/contact" className="btn-secondary inline-flex items-center gap-2">
            <Calendar size={18} />
            {c.cta.button}
          </a>
        </div>
      </Section>
    </>
  );
};

export default MarketingConsulting;