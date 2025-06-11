import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { Users, Target, Award, User } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import OurStoryPage from '../../assets/images/LogoIndividual.png';

// const OurStoryPage = "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&w=600";

const About: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      header: {
        title: "About Us",
        subtitle: "Empowering startups in Syria and entrepreneurs to thrive."
      },
      story: {
        title: "Our Story",
        paragraph1: "Syria Startups is dedicated to supporting the next generation of entrepreneurs. Our mission is to provide resources, mentorship, and a collaborative community to help startups grow and succeed.",
        paragraph2: "We believe in the power of innovation and the impact of entrepreneurship on economic development. Our team brings together experienced professionals, industry experts, and passionate mentors to guide you at every stage of your journey.",
        paragraph3: "Join us as we build a vibrant ecosystem for startups in Syria ideas turn into reality and businesses make a difference.",
        imageAlt: "Our team working together"
      },
      vision: {
        title: "Vision, Mission & Values",
        subtitle: "What drives us forward.",
        vision: {
          title: "Our Vision",
          description: "To be the leading platform for empowering Syrian entrepreneurs and startups."
        },
        mission: {
          title: "Our Mission",
          description: "To provide resources, mentorship, and a collaborative community for sustainable growth."
        },
        values: {
          title: "Our Values",
          description: "Innovation, collaboration, integrity, and impact."
        }
      },
      team: {
        title: "Meet Our Team",
        subtitle: "A passionate group of professionals and mentors.",
        members: [
          {
            name: "Omar Alshami",
            role: "Founder & CEO",
            bio: "Omar is a serial entrepreneur with 12+ years of experience in building and scaling startups."
          },
          {
            name: "Sara Khaled",
            role: "Community Manager",
            bio: "Sara connects founders and mentors, building a supportive startup ecosystem."
          },
          {
            name: "Rami Suleiman",
            role: "Financial Advisor",
            bio: "Rami specializes in startup finance, investment, and business planning."
          },
          {
            name: "Layla Haddad",
            role: "Marketing Lead",
            bio: "Layla helps startups grow through creative marketing and brand strategies."
          }
        ]
      }
    },
    ar: {
      header: {
        title: "من نحن",
        subtitle: "نُمكّن الشركات الناشئة ورواد الأعمال السوريين لتحقيق النجاح."
      },
      story: {
        title: "قصتنا",
        paragraph1: "تهدف Syria Startups إلى دعم الجيل القادم من رواد الأعمال. رسالتنا هي توفير الموارد والإرشاد وبناء مجتمع تعاوني لمساعدة الشركات الناشئة على النمو والنجاح.",
        paragraph2: "نؤمن بقوة الابتكار وأثر ريادة الأعمال في التنمية الاقتصادية. يجمع فريقنا بين خبراء محترفين ومستشارين متحمسين لدعمك في كل مرحلة من رحلتك.",
        paragraph3: "انضم إلينا لبناء منظومة نابضة بالحياة للشركات الناشئة في سوريا تتحول الأفكار إلى واقع وتُحدث الأعمال فرقاً حقيقياً.",
        imageAlt: "فريقنا يعمل معًا"
      },
      vision: {
        title: "الرؤية والرسالة والقيم",
        subtitle: "ما الذي يدفعنا للأمام.",
        vision: {
          title: "رؤيتنا",
          description: "أن نكون المنصة الرائدة لتمكين رواد الأعمال والشركات الناشئة في سوريا."
        },
        mission: {
          title: "رسالتنا",
          description: "توفير الموارد والإرشاد وبناء مجتمع تعاوني لتحقيق نمو مستدام."
        },
        values: {
          title: "قيمنا",
          description: "الابتكار، التعاون، النزاهة، والأثر."
        }
      },
      team: {
        title: "فريقنا",
        subtitle: "مجموعة من المحترفين والمرشدين المتحمسين.",
        members: [
          {
            name: "عمر الشامي",
            role: "المؤسس والرئيس التنفيذي",
            bio: "عمر رائد أعمال متسلسل بخبرة تزيد عن 12 عامًا في بناء وتطوير الشركات الناشئة."
          },
          {
            name: "سارة خالد",
            role: "مديرة المجتمع",
            bio: "تربط سارة المؤسسين بالمرشدين وتبني منظومة داعمة للشركات الناشئة."
          },
          {
            name: "رامي سليمان",
            role: "مستشار مالي",
            bio: "رامي متخصص في تمويل الشركات الناشئة والاستثمار والتخطيط المالي."
          },
          {
            name: "ليلى حداد",
            role: "قائدة التسويق",
            bio: "تساعد ليلى الشركات الناشئة على النمو من خلال التسويق الإبداعي واستراتيجيات العلامة التجارية."
          }
        ]
      }
    }
  };

  const c = content[language] || content.en;

  return (
    <>
      <PageHeader
        title={c.header.title}
        subtitle={c.header.subtitle}
        backgroundImage={OurStoryPage}
      />

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">{c.story.title}</h2>
            <p className="text-gray-700 mb-4">{c.story.paragraph1}</p>
            <p className="text-gray-700 mb-4">{c.story.paragraph2}</p>
            <p className="text-gray-700">{c.story.paragraph3}</p>
          </div>
          <div>
            <img
              src={OurStoryPage}
              alt={c.story.imageAlt}
              className="rounded-lg shadow-lg bg-white p-6"
              style={{ maxWidth: 400, margin: '0 auto' }}
            />
          </div>
        </div>
      </Section>

      <Section background="light">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{c.vision.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{c.vision.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary-light/20 flex items-center justify-center mx-auto mb-4">
              <Target size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">{c.vision.vision.title}</h3>
            <p className="text-gray-600">{c.vision.vision.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary-light/20 flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">{c.vision.mission.title}</h3>
            <p className="text-gray-600">{c.vision.mission.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary-light/20 flex items-center justify-center mx-auto mb-4">
              <Award size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">{c.vision.values.title}</h3>
            <p className="text-gray-600">{c.vision.values.description}</p>
          </motion.div>
        </div>
      </Section>

      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{c.team.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{c.team.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {c.team.members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30"></div>
                {/* Inner circle with gradient background */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <User size={40} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary-dark">{member.name}</h3>
              <p className="text-primary mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;