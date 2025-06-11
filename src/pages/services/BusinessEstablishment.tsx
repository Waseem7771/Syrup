import React from 'react';
import { FileText, Scale, Building2, Landmark, Calculator } from 'lucide-react';
import ServiceCategoryTemplate from '../../components/services/ServiceCategoryTemplate';
import businessEstablishmentBg from '../../assets/images/services/business-establishment-bg.jpg';

// Import sub-service images
import legalStructureImg from '../../assets/images/services/legal-structure.jpg';
import commercialLicenseImg from '../../assets/images/services/commercial-license.jpg';
import bankAccountImg from '../../assets/images/services/bank-account.jpg';
import officialRegistrationImg from '../../assets/images/services/official-registration.jpg';
import costCalculationImg from '../../assets/images/services/cost-calculation.jpg';

const BusinessEstablishment: React.FC = () => {
  const subServices = [
    {
      id: 'legal-structure',
      title: {
        en: 'Legal Structure Selection',
        ar: 'اختيار الشكل القانوني'
      },
      description: {
        en: 'Expert guidance on choosing the optimal legal structure for your business based on your goals, capital, and operational needs.',
        ar: 'إرشاد خبير لاختيار الشكل القانوني الأمثل لعملك بناءً على أهدافك ورأس مالك واحتياجات التشغيل.'
      },
      icon: <Scale className="w-5 h-5 text-primary" />,
      imageSrc: legalStructureImg,
      path: '/services/legal-structure'
    },
    {
      id: 'commercial-license',
      title: {
        en: 'Commercial License Issuance',
        ar: 'إصدار الرخص التجارية'
      },
      description: {
        en: 'Streamlined process for obtaining all necessary commercial licenses and permits for your business operations in Syria.',
        ar: 'عملية مبسطة للحصول على جميع التراخيص والتصاريح التجارية اللازمة لعمليات عملك في سوريا.'
      },
      icon: <FileText className="w-5 h-5 text-primary" />,
      imageSrc: commercialLicenseImg,
      path: '/services/commercial-license'
    },
    {
      id: 'bank-account',
      title: {
        en: 'Bank Account Opening',
        ar: 'فتح حسابات بنكية'
      },
      description: {
        en: 'Assistance with opening business bank accounts with partner banks, including all required documentation and procedures.',
        ar: 'مساعدة في فتح حسابات مصرفية للأعمال مع البنوك الشريكة، بما في ذلك جميع الوثائق والإجراءات المطلوبة.'
      },
      icon: <Landmark className="w-5 h-5 text-primary" />,
      imageSrc: bankAccountImg,
      path: '/services/bank-account'
    },
    {
      id: 'official-registration',
      title: {
        en: 'Registration with Official Authorities',
        ar: 'تسجيل في الجهات الرسمية'
      },
      description: {
        en: 'Complete handling of all registration requirements with government bodies, tax authorities, and regulatory agencies.',
        ar: 'التعامل الكامل مع جميع متطلبات التسجيل لدى الجهات الحكومية والسلطات الضريبية والوكالات التنظيمية.'
      },
      icon: <Building2 className="w-5 h-5 text-primary" />,
      imageSrc: officialRegistrationImg,
      path: '/services/official-registration'
    },
    {
      id: 'establishment-cost',
      title: {
        en: 'Establishment Cost Calculation',
        ar: 'حساب تكلفة التأسيس'
      },
      description: {
        en: 'Detailed analysis and calculation of all costs associated with establishing your business, including fees, taxes, and service charges.',
        ar: 'تحليل مفصل وحساب لجميع التكاليف المرتبطة بتأسيس عملك، بما في ذلك الرسوم والضرائب ورسوم الخدمة.'
      },
      icon: <Calculator className="w-5 h-5 text-primary" />,
      imageSrc: costCalculationImg,
      path: '/services/establishment-cost'
    }
  ];

  return (
    <ServiceCategoryTemplate
      title={{
        en: 'Business Establishment & Registration',
        ar: 'تأسيس الأعمال وتسجيل الشركات'
      }}
      subtitle={{
        en: 'Complete guidance for legally establishing your business in Syria',
        ar: 'إرشاد كامل لتأسيس عملك بشكل قانوني في سوريا'
      }}
      description={{
        en: 'We provide comprehensive support throughout the entire business establishment process, from selecting the right legal structure to obtaining all necessary licenses and registrations. Our team of legal experts ensures a smooth and compliant process, saving you time and preventing costly mistakes.',
        ar: 'نقدم دعمًا شاملًا طوال عملية تأسيس الأعمال بالكامل، من اختيار الهيكل القانوني المناسب إلى الحصول على جميع التراخيص والتسجيلات اللازمة. يضمن فريق الخبراء القانونيين لدينا عملية سلسة ومتوافقة، مما يوفر لك الوقت ويمنع الأخطاء المكلفة.'
      }}
      icon={<FileText className="w-8 h-8 text-primary" />}
      subServices={subServices}
      backgroundImage={businessEstablishmentBg}
    />
  );
};

export default BusinessEstablishment;