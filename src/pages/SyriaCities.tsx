// src/pages/SyriaCities.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import Section from '../components/common/Section';
import { useLanguage } from '../contexts/LanguageContext';
import DamascusImg   from '../assets/images/دمشق.png';
import RifDimashqImg from '../assets/images/ريف دمشق.png';
import AleppoImg     from '../assets/images/حلب.png';
import IdlibImg      from '../assets/images/إدلب.png';
import HomsImg       from '../assets/images/حمص.png';
import HamaImg       from '../assets/images/حماة.png';
import LatakiaImg    from '../assets/images/اللاذقية.png';
import TartusImg     from '../assets/images/طرطوس.png';
import DeirEzzorImg  from '../assets/images/دير الزور.png';
import DaraaImg      from '../assets/images/درعا.png';
import AsSuwaydaImg  from '../assets/images/السويداء.png';
import HasakahImg    from '../assets/images/الحسكة.png';
import QuneitraImg   from '../assets/images/القنيطرة.png';
import RaqqaImg      from '../assets/images/الرقة.png';
import {
  MapPin,
  Users,
  Thermometer,
  Building,
  Plane,
  Ship,
  Train,
  Factory,
  Wheat,
  Eye,
  ChevronRight,
  X,
  Check
} from 'lucide-react';
import { image } from 'framer-motion/client';

const SyriaCities: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('all');
  // Add state for the modal
  const [selectedCity, setSelectedCity] = useState(null);

  // Define imageMap at component level, not in getImage function
  const imageMap = {
    'damascus': DamascusImg,
    'damascus-countryside': RifDimashqImg,
    'aleppo': AleppoImg,
    'idlib': IdlibImg,
    'homs': HomsImg,
    'hama': HamaImg,
    'latakia': LatakiaImg,
    'tartus': TartusImg,
    'deir-al-zor': DeirEzzorImg,
    'daraa': DaraaImg,
    'as-suwayda': AsSuwaydaImg,
    'al-hasakah': HasakahImg,
    'quneitra': QuneitraImg,
    'raqqa': RaqqaImg
  };

  const content = {
    en: {
      title: 'Syrian Governorates',
      subtitle: 'Explore diverse investment opportunities and business potential across Syria\'s strategic regions',
      filterAll: 'All Governorates',
      filterCoastal: 'Coastal',
      filterInternal: 'Internal',
      filterBorder: 'Border',
      population: 'Population',
      area: 'Area',
      climate: 'Climate',
      knownFor: 'Known For',
      transportation: 'Transportation',
      landmarks: 'Famous Landmarks',
      businessOpp: 'Business Opportunities',
      learnMore: 'Learn More',
      exploreMore: 'Explore This Governorate'
    },
    ar: {
      title: 'المحافظات السورية',
      subtitle: 'استكشف الفرص الاستثمارية المتنوعة والإمكانيات التجارية عبر المناطق الاستراتيجية في سوريا',
      filterAll: 'جميع المحافظات',
      filterCoastal: 'ساحلية',
      filterInternal: 'داخلية',
      filterBorder: 'حدودية',
      population: 'عدد السكان',
      area: 'المساحة',
      climate: 'المناخ',
      knownFor: 'تشتهر بـ',
      transportation: 'وسائل النقل',
      landmarks: 'المعالم الشهيرة',
      businessOpp: 'الفرص التجارية',
      learnMore: 'اقرأ المزيد',
      exploreMore: 'استكشف هذه المحافظة'
    }
  };

  const governorates = [
    {
      id: 'damascus',
      name: { en: 'Damascus', ar: 'دمشق' },
      type: 'internal',
      shortDescription: {
        en: 'Capital and political center, hub for government services and historic trade',
        ar: 'العاصمة والمركز السياسي، مركز للخدمات الحكومية والتجارة التاريخية'
      },
      coordinates: { lat: 33.5138, lng: 36.2765 },
      population: '2.8 مليون',
      area: '105 km²',
      climate: { en: 'Semi-arid Mediterranean', ar: 'شبه قاحل متوسطي' },
      knownFor: {
        en: 'Government services, wholesale trade, food and textile industries',
        ar: 'خدمات حكومية، تجارة جملة، صناعات غذائية ونسيجية'
      },
      transportation: ['airport', 'train'],
      landmarks: {
        en: ['Umayyad Mosque', 'Hamidiyah Souq', 'Old City of Damascus', 'Straight Street'],
        ar: ['الجامع الأموي', 'سوق الحميدية', 'دمشق القديمة', 'الشارع المستقيم']
      },
      businessOpportunities: {
        en: ['Government Contracts', 'Financial Services', 'Tourism', 'Wholesale Trade'],
        ar: ['العقود الحكومية', 'الخدمات المالية', 'السياحة', 'تجارة الجملة']
      },
      wikipediaUrl: {
        en: 'https://en.wikipedia.org/wiki/Damascus',
        ar: 'https://ar.wikipedia.org/wiki/دمشق'
      },
      getImage: (language: string) => (
        <div className="w-full h-64 bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <Building className="w-24 h-24 text-white z-10" />
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <h4 className="font-bold text-lg">
              {language === 'ar' ? 'دمشق - Damascus' : 'Damascus - دمشق'}
            </h4>
            <p className="text-sm opacity-90">
              {language === 'ar' ? 'العاصمة والمركز السياسي' : 'Capital and political center'}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'damascus-countryside',
      name: { en: 'Damascus Countryside', ar: 'ريف دمشق' },
      type: 'internal',
      shortDescription: {
        en: 'Agricultural hub surrounding the capital, famous for Ghouta gardens and light industries',
        ar: 'مركز زراعي يحيط بالعاصمة، مشهور ببساتين الغوطة والصناعات الخفيفة'
      },
      coordinates: { lat: 33.6, lng: 36.3 },
      population: '2.8 مليون',
      area: '18,032 km²',
      climate: { en: 'Semi-arid Mediterranean', ar: 'شبه جاف متوسطي' },
      knownFor: {
        en: 'Ghouta agriculture (vegetables, fruits), food industries, light manufacturing',
        ar: 'زراعة الغوطة (خضار وفواكه)، صناعات غذائية وخفيفة'
      },
      transportation: ['airport'],
      landmarks: {
        en: ['Maaloula', 'Saidnaya Monastery', 'Barada Valley', 'Zabadani'],
        ar: ['معلولا', 'دير صيدنايا', 'وادي بردى', 'الزبداني']
      },
      businessOpportunities: {
        en: ['Agricultural Processing', 'Food Manufacturing', 'Tourism', 'Light Industries'],
        ar: ['تصنيع المنتجات الزراعية', 'صناعة الأغذية', 'السياحة', 'الصناعات الخفيفة']
      },
      wikipediaUrl: {
        en: 'https://en.wikipedia.org/wiki/Rif_Dimashq_Governorate',
        ar: 'https://ar.wikipedia.org/wiki/محافظة_ريف_دمشق'
      },
      getImage: (language: string) => (
        <div className="w-full h-64 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <Wheat className="w-24 h-24 text-white z-10" />
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <h4 className="font-bold text-lg">
              {language === 'ar' ? 'ريف دمشق - Damascus Countryside' : 'Damascus Countryside - ريف دمشق'}
            </h4>
            <p className="text-sm opacity-90">
              {language === 'ar' ? 'مركز زراعي حول العاصمة' : 'Agricultural center around capital'}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'aleppo',
      name: { en: 'Aleppo', ar: 'حلب' },
      type: 'internal',
      shortDescription: {
        en: 'Largest industrial center, famous for textiles, manufacturing and historic trade routes',
        ar: 'أكبر مركز صناعي، مشهور بالنسيج والصناعة وطرق التجارة التاريخية'
      },
      coordinates: { lat: 36.2021, lng: 37.1343 },
      population: '2.1 مليون',
      area: '18,482 km²',
      climate: { en: 'Semi-arid', ar: 'شبه جاف' },
      knownFor: {
        en: 'Largest industrial center (textiles, precious metals, food processing)',
        ar: 'أضخم مركز صناعي (نسيج، معادن ثمينة، تصنيع غذاء)'
      },
      transportation: ['airport', 'train'],
      landmarks: {
        en: ['Citadel of Aleppo', 'Great Mosque', 'Ancient Souks', 'Khan al-Jumruk'],
        ar: ['قلعة حلب', 'الجامع الكبير', 'الأسواق القديمة', 'خان الجمرك']
      },
      businessOpportunities: {
        en: ['Textile Manufacturing', 'Food Processing', 'Export Trade', 'Industrial Services'],
        ar: ['صناعة النسيج', 'تصنيع الأغذية', 'تجارة التصدير', 'الخدمات الصناعية']
      },
      wikipediaUrl: {
        en: 'https://en.wikipedia.org/wiki/Aleppo_Governorate',
        ar: 'https://ar.wikipedia.org/wiki/محافظة_حلب'
      },
      getImage: (language: string) => (
        <div className="w-full h-64 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <Factory className="w-24 h-24 text-white z-10" />
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <h4 className="font-bold text-lg">
              {language === 'ar' ? 'حلب - Aleppo' : 'Aleppo - حلب'}
            </h4>
            <p className="text-sm opacity-90">
              {language === 'ar' ? 'أكبر مركز صناعي' : 'Largest industrial center'}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'idlib',
      name: { en: 'Idlib', ar: 'إدلب' },
      type: 'internal',
      shortDescription: {
        en: 'Agricultural region known for olive oil, pistachios and traditional soap production',
        ar: 'منطقة زراعية معروفة بزيت الزيتون والفستق وإنتاج الصابون التقليدي'
      },
      coordinates: { lat: 35.9311, lng: 36.6348 },
      population: '2.9 مليون',
      area: '6,097 km²',
      climate: { en: 'Mediterranean moderate', ar: 'متوسطي معتدل' },
      knownFor: {
        en: 'Olive and pistachio cultivation, traditional soap production',
        ar: 'زراعة الزيتون والفستق والصابون التقليدي'
      },
      transportation: ['road'],
      landmarks: {
        en: ['Ebla Ruins', 'Idlib Museum', 'Al-Bara Ancient City', 'Dead Cities'],
        ar: ['أطلال إيبلا', 'متحف إدلب', 'مدينة الباراة الأثرية', 'المدن الميتة']
      },
      businessOpportunities: {
        en: ['Olive Oil Production', 'Agricultural Processing', 'Traditional Crafts', 'Tourism'],
        ar: ['إنتاج زيت الزيتون', 'تصنيع المنتجات الزراعية', 'الحرف التقليدية', 'السياحة']
      },
      wikipediaUrl: {
        en: 'https://en.wikipedia.org/wiki/Idlib_Governorate',
        ar: 'https://ar.wikipedia.org/wiki/محافظة_إدلب'
      },
      getImage: (language: string) => (
        <div className="w-full h-64 bg-gradient-to-br from-olive-500 to-yellow-600 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <Wheat className="w-24 h-24 text-white z-10" />
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <h4 className="font-bold text-lg">
              {language === 'ar' ? 'إدلب - Idlib' : 'Idlib - إدلب'}
            </h4>
            <p className="text-sm opacity-90">
              {language === 'ar' ? 'منطقة الزيتون والفستق' : 'Olive and pistachio region'}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'homs',
      name: { en: 'Homs', ar: 'حمص' },
      type: 'internal',
      shortDescription: {
        en: 'Oil refining center and transportation hub connecting Damascus and Aleppo',
        ar: 'مركز تكرير النفط ومحور المواصلات الذي يربط دمشق وحلب'
      },
      coordinates: { lat: 34.7394, lng: 36.7163 },
      population: '1.76 مليون',
      area: '42,223 km²',
      climate: { en: 'Semi-arid with cold winter', ar: 'شبه جاف بشتاء بارد' },
      knownFor: {
        en: 'Oil refining, grain and olive cultivation, transportation hub',
        ar: 'تكرير النفط، زراعة حبوب وزيتون، مركز المواصلات'
      },
      transportation: ['train'],
      landmarks: {
        en: ['Krak des Chevaliers', 'Khalid ibn al-Walid Mosque', 'Old City', 'Palmyra'],
        ar: ['قلعة الحصن', 'جامع خالد بن الوليد', 'المدينة القديمة', 'تدمر']
      },
      businessOpportunities: {
        en: ['Oil Refining', 'Agriculture', 'Manufacturing', 'Logistics', 'Tourism'],
        ar: ['تكرير النفط', 'الزراعة', 'الصناعة', 'اللوجستيات', 'السياحة']
      },
      wikipediaUrl: {
        en: 'https://en.wikipedia.org/wiki/Homs_Governorate',
        ar: 'https://ar.wikipedia.org/wiki/محافظة_حمص'
      },
      getImage: (language: string) => (
        <div className="w-full h-64 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <Factory className="w-24 h-24 text-white z-10" />
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <h4 className="font-bold text-lg">
              {language === 'ar' ? 'حمص - Homs' : 'Homs - حمص'}
            </h4>
            <p className="text-sm opacity-90">
              {language === 'ar' ? 'مركز تكرير النفط' : 'Oil refining center'}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'hama',
      name: { en: 'Hama', ar: 'حماة' },
      type: 'internal',
      shortDescription: {
        en: 'Agricultural center famous for cotton, grains and the historic Norias water wheels',
        ar: 'مركز زراعي مشهور بالقطن والحبوب ونواعير المياه التاريخية'
      },
      coordinates: { lat: 35.1347, lng: 36.7453 },
      population: '1.08 مليون',
      area: '8,883 km²',
      climate: { en: 'Semi-arid', ar: 'شبه جاف' },
      knownFor: {
        en: 'Cotton and grain cultivation, mills, food industries',
        ar: 'زراعة قطن وحبوب، مطاحن، صناعات غذائية'
      },
      transportation: ['train'],
      landmarks: {
        en: ['Hama Norias', 'Azem Palace (Hama)', 'Great Mosque of Hama', 'Orontes River'],
        ar: ['نواعير حماة', 'قصر العظم (حماة)', 'الجامع الكبير', 'نهر العاصي']
      },
      businessOpportunities: {
        en: ['Cotton Processing', 'Food Manufacturing', 'Mills & Grain', 'Agricultural Equipment'],
        ar: ['تصنيع القطن', 'صناعة الأغذية', 'المطاحن والحبوب', 'المعدات الزراعية']
      },
      wikipediaUrl: {
        en: 'https://en.wikipedia.org/wiki/Hama_Governorate',
        ar: 'https://ar.wikipedia.org/wiki/محافظة_حماة'
      },
      getImage: (language: string) => (
        <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="w-24 h-24 text-white z-10 flex items-center justify-center">⚙️</div>
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <h4 className="font-bold text-lg">
              {language === 'ar' ? 'حماة - Hama' : 'Hama - حماة'}
            </h4>
            <p className="text-sm opacity-90">
              {language === 'ar' ? 'مدينة النواعير' : 'City of Norias'}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'latakia',
      name: { en: 'Latakia', ar: 'اللاذقية' },
      type: 'coastal',
      shortDescription: {
        en: 'Main port city with Mediterranean climate, center for maritime trade and tourism',
        ar: 'المدينة الساحلية الرئيسية بمناخ متوسطي، مركز للتجارة البحرية والسياحة'
      },
      coordinates: { lat: 35.5197, lng: 35.7715 },
      population: '0.77 مليون',
      area: '2,297 km²',
      climate: { en: 'Mediterranean humid', ar: 'متوسطي رطب' },
      knownFor: {
        en: 'Main Syrian port, citrus fruits, food industries',
        ar: 'الميناء الرئيسي لسورية، حمضيات وصناعات غذائية'
      },
      transportation: ['port', 'airport'],
      landmarks: {
        en: ['Latakia Port', 'Saladin Castle', 'Blue Beach', 'Ugarit Archaeological Site'],
        ar: ['ميناء اللاذقية', 'قلعة صلاح الدين', 'الشاطئ الأزرق', 'موقع أوغاريت الأثري']
      },
      businessOpportunities: {
        en: ['Maritime Trade', 'Tourism Services', 'Citrus Export', 'Fishing Industry'],
        ar: ['التجارة البحرية', 'خدمات السياحة', 'تصدير الحمضيات', 'صناعة الأسماك']
      },
      wikipediaUrl: {
        en: 'https://en.wikipedia.org/wiki/Latakia_Governorate',
        ar: 'https://ar.wikipedia.org/wiki/محافظة_اللاذقية'
      },
      getImage: (language: string) => (
        <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <Ship className="w-24 h-24 text-white z-10" />
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <h4 className="font-bold text-lg">
              {language === 'ar' ? 'اللاذقية - Latakia' : 'Latakia - اللاذقية'}
            </h4>
            <p className="text-sm opacity-90">
              {language === 'ar' ? 'الميناء الرئيسي' : 'Main port'}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'tartus',
      name: { en: 'Tartus', ar: 'طرطوس' },
      type: 'coastal',
      shortDescription: {
        en: 'Second largest port with oil refinery, famous for Arwad Island and coastal tourism',
        ar: 'ثاني أكبر ميناء مع مصفاة نفط، مشهور بجزيرة أرواد والسياحة الساحلية'
      },
      coordinates: { lat: 34.8895, lng: 35.8872 },
      population: '0.50 مليون',
      area: '1,892 km²',
      climate: { en: 'Mediterranean', ar: 'متوسطي' },
      knownFor: {
        en: 'Second largest port, oil refinery, tobacco and coastal tourism',
        ar: 'ثاني أكبر ميناء، مصفاة النفط، التبغ والسياحة الساحلية'
      },
      transportation: ['port'],
      landmarks: {
        en: ['Tartus Port', 'Arwad Island', 'Margat Castle', 'Cathedral of Our Lady'],
        ar: ['ميناء طرطوس', 'جزيرة أرواد', 'قلعة المرقب', 'كاتدرائية سيدة طرطوس']
      },
      businessOpportunities: {
        en: ['Oil & Gas', 'Maritime Services', 'Tourism', 'Tobacco Processing'],
        ar: ['النفط والغاز', 'الخدمات البحرية', 'السياحة', 'تصنيع التبغ']
      },
      wikipediaUrl: {
        en: 'https://en.wikipedia.org/wiki/Tartus_Governorate',
        ar: 'https://ar.wikipedia.org/wiki/محافظة_طرطوس'
      },
      getImage: (language: string) => (
        <div className="w-full h-64 bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <Ship className="w-24 h-24 text-white z-10" />
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <h4 className="font-bold text-lg">
              {language === 'ar' ? 'طرطوس - Tartus' : 'Tartus - طرطوس'}
            </h4>
            <p className="text-sm opacity-90">
              {language === 'ar' ? 'ثاني أكبر ميناء' : 'Second largest port'}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'deir-al-zor',
      name: { en: 'Deir al-Zor', ar: 'دير الزور' },
      type: 'internal',
      shortDescription: {
        en: 'Eastern oil and gas hub along the Euphrates River, center of energy production',
        ar: 'مركز النفط والغاز الشرقي على نهر الفرات، مركز إنتاج الطاقة'
      },
      coordinates: { lat: 35.3394, lng: 40.1428 },
      population: '0.38 مليون',
      area: '33,060 km²',
      climate: { en: 'Desert climate', ar: 'مناخ صحراوي' },
      knownFor: {
        en: 'Largest oil fields (Omar), natural gas production, petroleum industries',
        ar: 'أكبر حقول النفط (العمر) وإنتاج الغاز الطبيعي والصناعات البترولية'
      },
      transportation: ['airport'],
      landmarks: {
        en: ['Deir al-Zor Suspension Bridge', 'Euphrates Museum', 'Omar Oil Field', 'Euphrates River'],
        ar: ['جسر دير الزور المعلق', 'متحف الفرات', 'حقل العمر النفطي', 'نهر الفرات']
      },
      businessOpportunities: {
        en: ['Oil & Gas Extraction', 'Energy Services', 'Agricultural Processing', 'Transportation Services'],
        ar: ['استخراج النفط والغاز', 'خدمات الطاقة', 'تصنيع المنتجات الزراعية', 'خدمات النقل']
      },
      wikipediaUrl: {
        en: 'https://en.wikipedia.org/wiki/Deir_ez-Zor_Governorate',
        ar: 'https://ar.wikipedia.org/wiki/محافظة_دير_الزور'
      },
      getImage: (language: string) => (
        <div className="w-full h-64 bg-gradient-to-br from-black to-gray-800 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="w-24 h-24 text-white z-10 flex items-center justify-center text-4xl">🛢️</div>
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <h4 className="font-bold text-lg">
              {language === 'ar' ? 'دير الزور - Deir al-Zor' : 'Deir al-Zor - دير الزور'}
            </h4>
            <p className="text-sm opacity-90">
              {language === 'ar' ? 'مركز النفط والغاز' : 'Oil and gas center'}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'daraa',
      name: { en: 'Daraa', ar: 'درعا' },
      type: 'border',
      shortDescription: {
        en: 'Southern border governorate famous for agriculture and the ancient city of Bosra',
        ar: 'محافظة حدودية جنوبية مشهورة بالزراعة ومدينة بصرى الأثرية'
      },
      coordinates: { lat: 32.6189, lng: 36.1022 },
      population: '0.92 مليون',
      area: '3,730 km²',
      climate: { en: 'Mediterranean semi-arid', ar: 'متوسطي شبه جاف' },
      knownFor: {
        en: 'Olives, pomegranates, grains in Hauran plains, border trade',
        ar: 'زيتون ورمان وحبوب في سهول حوران والتجارة الحدودية'
      },
      transportation: ['train'],
      landmarks: {
        en: ['Bosra Ancient Theatre', 'Daraa Museum', 'Al-Omari Mosque', 'Roman Ruins'],
        ar: ['المسرح الأثري في بصرى', 'متحف درعا', 'جامع العمري', 'الآثار الرومانية']
      },
      businessOpportunities: {
        en: ['Agricultural Export', 'Border Trade', 'Tourism', 'Food Processing', 'Logistics'],
        ar: ['تصدير المنتجات الزراعية', 'التجارة الحدودية', 'السياحة', 'تصنيع الأغذية', 'اللوجستيات']
      },
      wikipediaUrl: {
        en: 'https://en.wikipedia.org/wiki/Daraa_Governorate',
        ar: 'https://ar.wikipedia.org/wiki/محافظة_درعا'
      },
      getImage: (language: string) => (
        <div className="w-full h-64 bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <Wheat className="w-24 h-24 text-white z-10" />
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <h4 className="font-bold text-lg">
              {language === 'ar' ? 'درعا - Daraa' : 'Daraa - درعا'}
            </h4>
            <p className="text-sm opacity-90">
              {language === 'ar' ? 'سهول حوران الزراعية' : 'Hauran agricultural plains'}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'as-suwayda',
      name: { en: 'As-Suwayda', ar: 'السويداء' },
      type: 'internal',
      shortDescription: {
        en: 'Mountain governorate famous for vineyards, grape cultivation and Jabal al-Arab plateau',
        ar: 'محافظة جبلية مشهورة بالكروم وزراعة العنب وهضبة جبل العرب'
      },
      coordinates: { lat: 32.7090, lng: 36.5644 },
      population: '0.38 مليون',
      area: '5,550 km²',
      climate: { en: 'Moderate highland climate', ar: 'مناخ معتدل مرتفع' },
      knownFor: {
        en: 'Vineyards, grape cultivation, mountain agriculture',
        ar: 'كروم وعنب وزراعة جبلية'
      },
      transportation: ['road'],
      landmarks: {
        en: ['Qanawat Ruins', 'Shahba Ancient City', 'Temple of Dionysus', 'Jabal al-Arab'],
        ar: ['آثار قنوات', 'مدينة شهبا الأثرية', 'معبد ديونيسوس', 'جبل العرب']
      },
      businessOpportunities: {
        en: ['Grape Processing', 'Agricultural Tourism', 'Mountain Tourism', 'Traditional Crafts', 'Food Processing'],
        ar: ['تصنيع العنب', 'السياحة الزراعية', 'السياحة الجبلية', 'الحرف التقليدية', 'تصنيع الأغذية']
      },
      wikipediaUrl: {
        en: 'https://en.wikipedia.org/wiki/As-Suwayda_Governorate',
        ar: 'https://ar.wikipedia.org/wiki/محافظة_السويداء'
      },
      getImage: (language: string) => (
        <div className="w-full h-64 bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="w-24 h-24 text-white z-10 flex items-center justify-center text-4xl">🍇</div>
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <h4 className="font-bold text-lg">
              {language === 'ar' ? 'السويداء - As-Suwayda' : 'As-Suwayda - السويداء'}
            </h4>
            <p className="text-sm opacity-90">
              {language === 'ar' ? 'جبل العرب والكروم' : 'Jabal al-Arab and vineyards'}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'al-hasakah',
      name: { en: 'Al-Hasakah', ar: 'الحسكة' },
      type: 'border',
      shortDescription: {
        en: 'Northeastern breadbasket of Syria, largest wheat and cotton production region',
        ar: 'سلة خبز سوريا الشمالية الشرقية، أكبر منطقة إنتاج للقمح والقطن'
      },
      coordinates: { lat: 36.5000, lng: 40.7500 },
      population: '0.46 مليون',
      area: '23,334 km²',
      climate: { en: 'Semi-arid continental', ar: 'سهبي قاري' },
      knownFor: {
        en: 'Syria\'s breadbasket - largest wheat and cotton production, oil fields',
        ar: 'سلة خبز سوريا - أكبر إنتاج للقمح والقطن وحقول النفط'
      },
      transportation: ['airport'],
      landmarks: {
        en: ['Tell Brak', 'Khabur River', 'Qamishli Airport', 'Ancient Mesopotamian Sites'],
        ar: ['تل براك', 'نهر الخابور', 'مطار القامشلي', 'المواقع الآشورية القديمة']
      },
      businessOpportunities: {
        en: ['Wheat & Cotton Export', 'Agricultural Equipment', 'Food Processing', 'Oil Services', 'Cross-border Trade'],
        ar: ['تصدير القمح والقطن', 'المعدات الزراعية', 'تصنيع الأغذية', 'خدمات النفط', 'التجارة العابرة للحدود']
      },
      wikipediaUrl: {
        en: 'https://en.wikipedia.org/wiki/Al-Hasakah_Governorate',
        ar: 'https://ar.wikipedia.org/wiki/محافظة_الحسكة'
      },
      getImage: (language: string) => (
        <div className="w-full h-64 bg-gradient-to-br from-yellow-600 to-amber-700 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <Wheat className="w-24 h-24 text-white z-10" />
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <h4 className="font-bold text-lg">
              {language === 'ar' ? 'الحسكة - Al-Hasakah' : 'Al-Hasakah - الحسكة'}
            </h4>
            <p className="text-sm opacity-90">
              {language === 'ar' ? 'سلة خبز سوريا' : 'Syria\'s breadbasket'}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'quneitra',
      name: { en: 'Quneitra', ar: 'القنيطرة' },
      type: 'border',
      shortDescription: {
        en: 'Golan Heights region famous for apple cultivation and strategic border location',
        ar: 'منطقة الجولان المشهورة بزراعة التفاح والموقع الحدودي الاستراتيجي'
      },
      coordinates: { lat: 33.1263, lng: 35.8242 },
      population: '0.10 مليون',
      area: '1,861 km²',
      climate: { en: 'Mediterranean humid highlands', ar: 'متوسطي رطب مرتفع' },
      knownFor: {
        en: 'Golan apples cultivation, cross-border trade, strategic location',
        ar: 'تفاح الجولان والتجارة العابرة للمعبر والموقع الاستراتيجي'
      },
      transportation: ['border'],
      landmarks: {
        en: ['Quneitra Crossing', 'Old Quneitra Ruins', 'Mount Hermon View', 'Golan Heights'],
        ar: ['معبر القنيطرة', 'أنقاض القنيطرة القديمة', 'إطلالة جبل الشيخ', 'هضبة الجولان']
      },
      businessOpportunities: {
        en: ['Apple Export', 'Cross-border Trade', 'Agricultural Tourism', 'Transportation Services', 'Border Services'],
        ar: ['تصدير التفاح', 'التجارة العابرة للحدود', 'السياحة الزراعية', 'خدمات النقل', 'الخدمات الحدودية']
      },
      wikipediaUrl: {
        en: 'https://en.wikipedia.org/wiki/Quneitra_Governorate',
        ar: 'https://ar.wikipedia.org/wiki/محافظة_القنيطرة'
      },
      getImage: (language: string) => (
        <div className="w-full h-64 bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="w-24 h-24 text-white z-10 flex items-center justify-center text-4xl">🍎</div>
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <h4 className="font-bold text-lg">
              {language === 'ar' ? 'القنيطرة - Quneitra' : 'Quneitra - القنيطرة'}
            </h4>
            <p className="text-sm opacity-90">
              {language === 'ar' ? 'تفاح الجولان' : 'Golan apples'}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'raqqa',
      name: { en: 'Raqqa', ar: 'الرقة' },
      type: 'internal',
      shortDescription: {
        en: 'Euphrates river governorate known for cotton, wheat cultivation and hydroelectric power',
        ar: 'محافظة نهر الفرات المعروفة بزراعة القطن والقمح والطاقة الكهرومائية'
      },
      coordinates: { lat: 35.9500, lng: 39.0094 },
      population: '0.61 مليون',
      area: '19,616 km²',
      climate: { en: 'Desert-steppe climate', ar: 'مناخ صحراوي-سهبي' },
      knownFor: {
        en: 'Wheat and cotton cultivation via Euphrates Dam, hydroelectric power generation',
        ar: 'زراعة قمح وقطن بفضل سد الفرات وتوليد الكهرباء المائية'
      },
      transportation: ['dam'],
      landmarks: {
        en: ['Abbasid Walls', 'Qasr al-Banat Palace', 'Euphrates Dam', 'Lake Assad'],
        ar: ['أسوار العباسيين', 'قصر البنات', 'سد الفرات', 'بحيرة الأسد']
      },
      businessOpportunities: {
        en: ['Hydroelectric Power', 'Cotton Processing', 'Wheat Cultivation', 'Agricultural Machinery', 'Water Management'],
        ar: ['الطاقة الكهرومائية', 'تصنيع القطن', 'زراعة القمح', 'المعدات الزراعية', 'إدارة المياه']
      },
      wikipediaUrl: {
        en: 'https://en.wikipedia.org/wiki/Raqqa_Governorate',
        ar: 'https://ar.wikipedia.org/wiki/محافظة_الرقة'
      },
      getImage: (language: string) => (
        <div className="w-full h-64 bg-gradient-to-br from-blue-600 to-teal-700 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="w-24 h-24 text-white z-10 flex items-center justify-center text-4xl">⚡</div>
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <h4 className="font-bold text-lg">
              {language === 'ar' ? 'الرقة - Raqqa' : 'Raqqa - الرقة'}
            </h4>
            <p className="text-sm opacity-90">
              {language === 'ar' ? 'سد الفرات والطاقة' : 'Euphrates Dam and energy'}
            </p>
          </div>
        </div>
      )
    }
    // يمكنني إضافة باقي المحافظات...
  ];

  const filteredGovernorates = selectedTab === 'all' 
    ? governorates 
    : governorates.filter(gov => gov.type === selectedTab);

  const tabs = [
    { id: 'all', label: content[language].filterAll },
    { id: 'coastal', label: content[language].filterCoastal },
    { id: 'internal', label: content[language].filterInternal },
    { id: 'border', label: content[language].filterBorder }
  ];

  const c = content[language];

  const getImage = (gov, language) => {
    return (
      <div className="w-full h-64 relative overflow-hidden">
        <img 
          src={imageMap[gov.id]} 
          alt={gov.name[language]} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white z-10">
          <h4 className="font-bold text-lg text-center">
            {language === 'ar' ? gov.name.ar : gov.name.en}
          </h4>
        </div>
      </div>
    );
  };

  // The CityModal component now has access to the imageMap variable
  const CityModal = ({ city, onClose }) => {
    if (!city) return null;
    
    return (
      <AnimatePresence>
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              {/* Header Image */}
              <div className="h-48 md:h-64 relative overflow-hidden">
                <img 
                  src={imageMap[city.id]} 
                  alt={city.name[language]} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white backdrop-blur-sm transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-center">
                    {city.name[language]}
                  </h2>
                </div>
              </div>
              
              <div className="p-6 md:p-8">                
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{city.population}</span>
                  </div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{city.area}</span>
                  </div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Thermometer className="w-4 h-4" />
                    <span>{city.climate[language]}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  {city.shortDescription[language]}
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {content[language].knownFor}
                    </h3>
                    <p className="text-gray-700">{city.knownFor[language]}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {content[language].landmarks}
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {city.landmarks[language].map((landmark, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{landmark}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {content[language].businessOpp}
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {city.businessOpportunities[language].map((opp, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{opp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-4 border-t">
                  <button 
                    onClick={onClose}
                    className="bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-xl transition-colors duration-300 w-full"
                  >
                    {language === 'ar' ? 'إغلاق' : 'Close'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  };
  
  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage="/src/assets/images/Calligraphy.jpg"
      />

      {/* Filter Tabs */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-2xl p-2 flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                    selectedTab === tab.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Governorates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGovernorates.map((gov, index) => (
              <motion.div
                key={gov.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCity(gov)} // Use this instead of opening Wikipedia
              >
                {/* Image with Name Overlay */}
                <div className="relative">
                  {getImage(gov, language)}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-primary">{gov.name[language]}</h3>
                    <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                      {gov.population}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                    {gov.shortDescription[language]}
                  </p>

                  {/* Transportation Icons */}
                  <div className="flex gap-2 mb-4">
                    {gov.transportation.includes('airport') && (
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                        <Plane className="w-3 h-3" />
                        {language === 'ar' ? 'مطار' : 'Airport'}
                      </span>
                    )}
                    {gov.transportation.includes('port') && (
                      <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                        <Ship className="w-3 h-3" />
                        {language === 'ar' ? 'ميناء' : 'Port'}
                      </span>
                    )}
                    {gov.transportation.includes('train') && (
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                        <Train className="w-3 h-3" />
                        {language === 'ar' ? 'قطار' : 'Train'}
                      </span>
                    )}
                    {gov.transportation.includes('dam') && (
                      <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                        <div className="w-3 h-3 text-xs">🏗️</div>
                        {language === 'ar' ? 'سد' : 'Dam'}
                      </span>
                    )}
                    {gov.transportation.includes('border') && (
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                        <div className="w-3 h-3 text-xs">🚪</div>
                        {language === 'ar' ? 'معبر' : 'Border'}
                      </span>
                    )}
                    {gov.transportation.includes('road') && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                        <div className="w-3 h-3 text-xs">🛣️</div>
                        {language === 'ar' ? 'طريق' : 'Road'}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between hover:text-primary-dark transition-colors">
                    <span className="text-primary text-sm font-medium">
                      {c.exploreMore}
                    </span>
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Add the city modal */}
      {selectedCity && (
        <CityModal 
          city={selectedCity} 
          onClose={() => setSelectedCity(null)} 
        />
      )}
    </>
  );
};

export default SyriaCities;