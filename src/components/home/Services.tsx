// import React from 'react';
// import { motion } from 'framer-motion';
// import { FileText, Users, Cpu, Truck, Building, BadgeDollarSign, Megaphone } from 'lucide-react'; // updated icons
// import Button from '../common/Button';
// import { useLanguage } from '../../contexts/LanguageContext';
// import { useTranslation } from '../../hooks/useTranslation';

// const Services: React.FC = () => {
//   const { language } = useLanguage();
//   const { t } = useTranslation(language);

//   const services = [
//     {
//       icon: <FileText size={32} className="text-primary" />,
//       title: t('services.licenses.title'),
//       description: t('services.licenses.description'),
//       link: '/how-we-help#licenses'
//     },
//     {
//       icon: <Users size={32} className="text-primary" />,
//       title: t('services.talent.title'),
//       description: t('services.talent.description'),
//       link: '/how-we-help#talent'
//     },
//     {
//       icon: <Cpu size={32} className="text-primary" />,
//       title: t('services.technical.title'),
//       description: t('services.technical.description'),
//       link: '/how-we-help#technical'
//     },
//     {
//       icon: <Truck size={32} className="text-primary" />,
//       title: t('services.logistics.title'),
//       description: t('services.logistics.description'),
//       link: '/how-we-help#logistics'
//     },
//     {
//       icon: <Building size={32} className="text-primary" />,
//       title: t('services.workspaces.title'),
//       description: t('services.workspaces.description'),
//       link: '/how-we-help#workspaces'
//     },
//     {
//       icon: <BadgeDollarSign size={32} className="text-primary" />,
//       title: t('services.financial.title'),
//       description: t('services.financial.description'),
//       link: '/how-we-help#financial'
//     },
//     {
//       icon: <Megaphone size={32} className="text-primary" />, // <-- Marketing icon
//       title: t('services.marketing.title'),
//       description: t('services.marketing.description'),
//       link: '/how-we-help#marketing'
//     }
//   ];

//   // ...rest of the file remains the same...
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
//   };

//   return (
//     <div className="py-16">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-primary mb-4">{t('services.title')}</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">{t('services.description')}</p>
//         </div>
        
//         <motion.div 
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.1 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {services.map((service, index) => (
//             <motion.div 
//               key={index} 
//               variants={item}
//               className="card hover:border-primary hover:border"
//             >
//               <div className="flex items-start">
//                 <div className="mr-4 p-3 rounded-full bg-primary-light/20">
//                   {service.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-primary-dark mb-2">{service.title}</h3>
//                   <p className="text-gray-600 mb-4">{service.description}</p>
//                   <Button to={service.link} variant="outline" className="text-sm px-4 py-1">
//                     {t('common.learnMoreButton')}
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
        
//         <div className="text-center mt-12">
//           <Button to="/how-we-help" variant="primary">
//             {t('common.learnMoreButton')}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,         // Business Registration
  Users,             // Talent Acquisition
  Cpu,               // Technical Services
  Truck,             // Logistics
  Building2,         // Workspaces (alternative icon)
  BadgeDollarSign,   // Financial Services
  Megaphone,         // Marketing
  ClipboardCheck,    // File Auditing
  Palette            // Branding & Identity
} from 'lucide-react';
import Button from '../common/Button';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';

const Services: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  // Updated services array with correct anchor links
  const services = [
    {
      icon: <Briefcase size={32} className="text-primary" />,
      title: t('services.licenses.title'),
      description: t('services.licenses.description'),
      link: '/how-we-help#business' // Updated to match id in HowWeHelp
    },
    {
      icon: <Users size={32} className="text-primary" />,
      title: t('services.talent.title'),
      description: t('services.talent.description'),
      link: '/how-we-help#talent' // This one is already correct
    },
    {
      icon: <Cpu size={32} className="text-primary" />,
      title: t('services.technical.title'),
      description: t('services.technical.description'),
      link: '/how-we-help#technical' // This one is already correct
    },
    {
      icon: <Truck size={32} className="text-primary" />,
      title: t('services.logistics.title'),
      description: t('services.logistics.description'),
      link: '/how-we-help#logistics' // This one is already correct
    },
    {
      icon: <Building2 size={32} className="text-primary" />,
      title: t('services.workspaces.title'),
      description: t('services.workspaces.description'),
      link: '/how-we-help#workspaces' // This one is already correct
    },
    {
      icon: <BadgeDollarSign size={32} className="text-primary" />,
      title: t('services.financial.title'),
      description: t('services.financial.description'),
      link: '/how-we-help#financial' // This one is already correct
    },
    {
      icon: <Megaphone size={32} className="text-primary" />,
      title: t('services.marketing.title'),
      description: t('services.marketing.description'),
      link: '/how-we-help#logistics' // Updated to use logistics since marketing is part of logistics
    },
    {
      icon: <ClipboardCheck size={32} className="text-primary" />,
      title: t('services.auditing.title'),
      description: t('services.auditing.description'),
      link: '/how-we-help#auditing' // This one is already correct
    },
    {
      icon: <Palette size={32} className="text-primary" />,
      title: t('services.branding.title'),
      description: t('services.branding.description'),
      link: '/how-we-help#branding' // This one is already correct
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{t('services.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('services.description')}</p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="card hover:border-primary hover:border"
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-primary-light/20">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-dark mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button to={service.link} variant="outline" className="text-sm px-4 py-1">
                    {t('common.learnMoreButton')}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button to="/how-we-help" variant="primary">
            {t('common.learnMoreButton')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;