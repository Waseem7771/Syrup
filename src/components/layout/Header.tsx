import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import Logo from '../common/Logo';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';
import { useNavigation } from '../../contexts/NavigationContext';

// --- Mega Menu Data Structure ---
const megaMenu = [
  {
    key: 'services',
    label: { ar: 'خدماتنا', en: 'Our Services' },
    submenu: [
      {
        key: 'business',
        label: { ar: 'تأسيس الأعمال وتسجيل الشركات', en: 'Business Establishment & Registration' },
        children: [
          { key: 'legal-structure', label: { ar: 'اختيار الشكل القانوني', en: 'Legal Structure Selection' }, to: '/services/legal-structure' },
          { key: 'license', label: { ar: 'إصدار الرخص التجارية', en: 'Commercial License Issuance' }, to: '/services/commercial-license' },
          { key: 'bank', label: { ar: 'فتح حسابات بنكية', en: 'Bank Account Opening' }, to: '/services/bank-account' },
          { key: 'registration', label: { ar: 'تسجيل في الجهات الرسمية (اقتصاد، ضرائب)', en: 'Registration with Official Authorities' }, to: '/services/official-registration' },
          { key: 'cost', label: { ar: 'حساب تكلفة التأسيس', en: 'Establishment Cost Calculation' }, to: '/services/establishment-cost' },
          { key: 'visaandreidency', label: { ar: 'إصدار فيزا أو إقامة لغير السوريين', en: 'Visa & Residency Service for Non-Syrians' }, to: '/visa-residency' }
        ]
      },
      {
        key: 'technical',
        label: { ar: 'الخدمات التقنية', en: 'Technical Services' },
        children: [
          { key: 'web-dev', label: { ar: 'تصميم وتطوير مواقع الشركة', en: 'Website Design & Development' }, to: '/services/web-dev' },
          { key: 'app-dev', label: { ar: 'تطوير التطبيقات', en: 'App Development' }, to: '/services/app-dev' },
          { key: 'hosting', label: { ar: 'خدمات الاستضافة والبنية التحتية', en: 'Hosting & Infrastructure Services' }, to: '/services/hosting' },
          { key: 'erp-crm', label: { ar: 'أنظمة إدارة الأعمال ERP/CRM', en: 'ERP/CRM Business Systems' }, to: '/services/erp-crm' },
          { key: 'ai', label: { ar: 'حلول الذكاء الاصطناعي والتحليلات', en: 'AI & Analytics Solutions' }, to: '/services/ai' },
        ]
      },
      {
        key: 'workspaces',
        label: { ar: 'مساحات الأعمال', en: 'Workspaces' },
        children: [
          { key: 'office-rental', label: { ar: 'تأجير مكاتب جاهزة أو افتراضية', en: 'Ready or Virtual Office Rental' }, to: '/services/office-rental' },
          { key: 'shared-offices', label: { ar: 'مكاتب مشاركة', en: 'Shared Offices' }, to: '/services/shared-offices' },
        ]
      },
      {
        key: 'financial',
        label: { ar: 'الخدمات المالية والمحاسبية', en: 'Financial & Accounting Services' },
        children: [
          { key: 'statements', label: { ar: 'إعداد القوائم المالية', en: 'Financial Statement Preparation' }, to: '/services/statements' },
          { key: 'planning', label: { ar: 'التخطيط المالي والميزانيات', en: 'Financial Planning & Budgeting' }, to: '/services/planning' },
          { key: 'tax', label: { ar: 'استشارات ضريبية وزكوية', en: 'Tax & Zakat Consulting' }, to: '/services/tax' },
        ]
      },
      {
        key: 'auditing',
        label: { ar: 'تدقيق الملفات', en: 'File Auditing' },
        children: [
          { key: 'review', label: { ar: 'مراجعة التراخيص والعقود', en: 'License & Contract Review' }, to: '/services/review' },
          { key: 'doc-audit', label: { ar: 'تدقيق المستندات الرسمية والمالية', en: 'Official & Financial Document Auditing' }, to: '/services/doc-audit' },
          { key: 'investor-files', label: { ar: 'إعداد ملفات الشركة للعرض على المستثمرين', en: 'Preparing Company Files for Investors' }, to: '/services/investor-files' },
        ]
      },
      {
        key: 'logistics',
        label: { ar: 'الخدمات اللوجستية', en: 'Logistics Services' },
        children: [
          { key: 'marketing-plan', label: { ar: 'إعداد الخطط التسويقية', en: 'Marketing Plan Preparation' }, to: '/services/marketing-plan' },
          { key: 'social-media', label: { ar: 'إدارة حملات التواصل الاجتماعي', en: 'Social Media Campaign Management' }, to: '/services/social-media' },
          { key: 'content', label: { ar: 'صناعة المحتوى والصور والفيديوهات', en: 'Content, Photo & Video Production' }, to: '/services/content' },
        ]
      },
      {
        key: 'talent',
        label: { ar: 'خدمات التوظيف واستقطاب المواهب', en: 'Talent Acquisition & Recruitment' },
        children: [
          { key: 'talent-search', label: { ar: 'البحث عن المواهب المتخصصة محليًا ودوليًا', en: 'Specialized Talent Search' }, to: '/services/talent-search' },
          { key: 'network', label: { ar: 'بناء شبكة من المستقلين والموهوبين حسب التخصص', en: 'Building a Network of Freelancers & Talents' }, to: '/services/network' },
        ]
      },
      {
        key: 'branding',
        label: { ar: 'تصميم الهويات والعلامات التجارية', en: 'Branding & Identity Design' },
        children: [
          { key: 'logo', label: { ar: 'تصميم الشعار واختيار الألوان والخطوط', en: 'Logo, Color & Font Selection' }, to: '/services/logo' },
          { key: 'visual-identity', label: { ar: 'إعداد الهوية البصرية', en: 'Visual Identity Preparation' }, to: '/services/visual-identity' },
          { key: 'ui-design', label: { ar: 'تصميم واجهات المواقع', en: 'Website Interface Design' }, to: '/services/ui-design' },
        ]
      },
    ]
  },
  {
    key: 'programs',
    label: { ar: 'برامجنا', en: 'Our Programs' },
    submenu: [
      { key: 'accelerators', label: { ar: 'برامج مسرعات الأعمال', en: 'Business Accelerator Programs' }, to: '/programs/accelerators' },
      { key: 'incubators', label: { ar: 'برامج حاضنات الأعمال', en: 'Incubator Programs' }, to: '/programs/incubators' },
      { key: 'seed-funding', label: { ar: 'برامج التمويل الأولي', en: 'Seed Funding Programs' }, to: '/programs/seed-funding' },
    ]
  },
  {
    key: 'consulting',
    label: { ar: 'الاستشارات', en: 'Consulting' },
    submenu: [
      { key: 'business-consult', label: { ar: 'استشارات تأسيس الأعمال', en: 'Business Establishment Consulting' }, to: '/consulting/business' },
      { key: 'legal-consult', label: { ar: 'استشارات قانونية', en: 'Legal Consulting' }, to: '/consulting/legal' },
      { key: 'financial-consult', label: { ar: 'استشارات مالية', en: 'Financial Consulting' }, to: '/consulting/financial' },
      { key: 'marketing-consult', label: { ar: 'استشارات تسويقية', en: 'Marketing Consulting' }, to: '/consulting/marketing' },
    ]
  },
  {
    key: 'media',
    label: { ar: 'الإعلام', en: 'Media' },
    submenu: [
      { key: 'articles', label: { ar: 'مقالاتنا', en: 'Our Articles' }, to: '/media/articles' },
      { key: 'success-stories', label: { ar: 'قصص نجاح رواد الأعمال', en: 'Entrepreneurs’ Success Stories' }, to: '/media/success-stories' },
      { key: 'news', label: { ar: 'آخر أخبارنا', en: 'Latest News' }, to: '/media/news' },
    ]
  },
  {
    key: 'community',
    label: { ar: 'مجتمعنا', en: 'Community' },
    submenu: [
      { key: 'about', label: { ar: 'من نحن / فريقنا', en: 'About Us / Our Team' }, to: '/about' },
      { key: 'partners', label: { ar: 'الشركاء', en: 'Partners' }, to: '/partners' },
    ]
  }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [expandedMobileCategories, setExpandedMobileCategories] = useState<string[]>([]);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation(language);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  // Get navigation context
  const { activeMainMenu, setActiveMainMenu, activeSubMenu, setActiveSubMenu } = useNavigation();

  // Toggle functions
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };
  
  const toggleLanguage = () => setLanguage(language === 'ar' ? 'en' : 'ar');
  
  const toggleMobileCategory = (categoryKey: string) => {
    setExpandedMobileCategories(prev => 
      prev.includes(categoryKey) 
        ? prev.filter(key => key !== categoryKey) 
        : [...prev, categoryKey]
    );
  };

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset state on navigation
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenMenu(null);
    setOpenSubMenu(null);
    setExpandedMobileCategories([]);
    document.body.style.overflow = '';
  }, [location]);

  // Update from NavigationContext
  useEffect(() => {
    if (activeMainMenu) {
      setOpenMenu(activeMainMenu);
      
      // For mobile, also expand the relevant category
      if (window.innerWidth < 1024) {
        setExpandedMobileCategories(prev => 
          prev.includes(activeMainMenu) ? prev : [...prev, activeMainMenu]
        );
        
        // Open the mobile menu if on mobile
        setIsMenuOpen(true);
      }
    }
  }, [activeMainMenu]);

  // Update for submenus
  useEffect(() => {
    if (activeSubMenu && activeMainMenu) {
      setOpenSubMenu(activeSubMenu);
      
      // For mobile, also expand the relevant subcategory
      if (window.innerWidth < 1024) {
        setExpandedMobileCategories(prev => 
          prev.includes(activeSubMenu) ? prev : [...prev, activeSubMenu, activeMainMenu]
        );
      }
    }
  }, [activeSubMenu, activeMainMenu]);

  // Debug to check if context is working
  useEffect(() => {
    console.log("Active main menu:", activeMainMenu);
    console.log("Active submenu:", activeSubMenu);
  }, [activeMainMenu, activeSubMenu]);

  // Home link (make style match the other main nav buttons)
  const homeLink = (
    <Link
      to="/"
      className={`px-3 py-2 rounded-md text-base font-medium transition-colors
        ${scrolled ? 'text-gray-700 hover:text-primary' : 'text-primary hover:text-accent-light'}
      `}
      style={{ fontSize: '1.1rem' }}
    >
      {t('nav.home')}
    </Link>
  );

  // Desktop Mega Menu
  const renderMegaMenu = () => (
    <nav className="hidden lg:flex items-center space-x-1 space-x-reverse">
      <div className="flex items-center gap-2 bg-white/80 border border-primary-dark rounded-full px-3 py-1 shadow-sm">
        {homeLink}
        {megaMenu.map(menu => (
          <div
            key={menu.key}
            className="relative group"
            onMouseEnter={() => setOpenMenu(menu.key)}
            onMouseLeave={() => { setOpenMenu(null); setOpenSubMenu(null); }}
          >
            <button
              className={`px-3 py-2 rounded-md text-base font-medium ${
                scrolled ? 'text-gray-700 hover:text-primary' : 'text-primary hover:text-accent-light'
              } transition-colors`}
              style={{ fontSize: '1.1rem' }}
            >
              {menu.label[language]}
            </button>
            {openMenu === menu.key && (
              <div className="absolute top-full right-0 bg-white shadow-lg rounded-lg p-4 min-w-[250px] z-50 flex">
                <div>
                  {menu.submenu.map((sub, idx) => (
                    <React.Fragment key={sub.key}>
                      {sub.children ? (
                        <div
                          className="py-2 px-4 hover:bg-gray-100 cursor-pointer relative"
                          onMouseEnter={() => setOpenSubMenu(sub.key)}
                        >
                          {sub.label[language]}
                          {openSubMenu === sub.key && (
                            <div className="absolute top-0 right-full bg-white shadow-lg rounded-lg p-4 min-w-[220px] z-50">
                              {sub.children.map((child, cidx) => (
                                <React.Fragment key={child.key}>
                                  <Link
                                    to={child.to}
                                    className="block py-1 px-2 hover:bg-primary-light hover:text-primary rounded"
                                  >
                                    {child.label[language]}
                                  </Link>
                                  {cidx < sub.children.length - 1 && (
                                    <div className="border-t border-gray-200 my-1" />
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={sub.to}
                          className="block py-2 px-4 hover:bg-gray-100 rounded"
                        >
                          {sub.label[language]}
                        </Link>
                      )}
                      {idx < menu.submenu.length - 1 && (
                        <div className="border-t border-gray-200 my-1" />
                      )}
                    </React.Fragment>
                  ))} {/* <-- This parenthesis closes the .map */}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );

  // Modified Mobile Menu to show subcategories only on interaction
  const renderMobileMenu = () => (
    <div 
      ref={mobileMenuRef}
      className={`lg:hidden fixed top-0 inset-0 bg-white z-50 transition-all duration-300 ${
        isMenuOpen 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-[-100%] pointer-events-none'
      }`}
      style={{
        top: scrolled ? '56px' : '72px',
        height: 'calc(100vh - 56px)',
        maxHeight: 'calc(100vh - 56px)'
      }}
    >
      <div className="h-full overflow-y-auto pb-20">
        <div className="container mx-auto px-4 py-2">
          <Link 
            to="/" 
            className="block py-3 border-b border-gray-100 text-gray-700 hover:text-primary"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            {t('nav.home')}
          </Link>
          
          {megaMenu.map(menu => (
            <div key={menu.key} className="py-2 border-b border-gray-100">
              <button
                className="w-full flex justify-between items-center font-bold text-primary py-2"
                onClick={() => toggleMobileCategory(menu.key)}
              >
                <span>{menu.label[language]}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className={`transition-transform ${expandedMobileCategories.includes(menu.key) ? 'transform rotate-180' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              {expandedMobileCategories.includes(menu.key) && (
                <div className="mt-2 ml-4">
                  {menu.submenu.map(sub =>
                    sub.children ? (
                      <div key={sub.key} className="mb-3">
                        <button
                          className="w-full flex justify-between items-center font-semibold py-1 text-gray-700 text-left"
                          onClick={() => toggleMobileCategory(sub.key)}
                        >
                          <span>{sub.label[language]}</span>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="14" 
                            height="14" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className={`transition-transform ${expandedMobileCategories.includes(sub.key) ? 'transform rotate-180' : ''}`}
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </button>
                        
                        {expandedMobileCategories.includes(sub.key) && (
                          <div className="pl-4 mt-1">
                            {sub.children.map(child => (
                              <Link 
                                key={child.key} 
                                to={child.to} 
                                className="block py-1.5 text-sm text-gray-600 hover:text-primary"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  document.body.style.overflow = '';
                                }}
                              >
                                • {child.label[language]}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link 
                        key={sub.key} 
                        to={sub.to} 
                        className="block py-2 text-gray-600 hover:text-primary"
                        onClick={() => {
                          setIsMenuOpen(false);
                          document.body.style.overflow = '';
                        }}
                      >
                        {sub.label[language]}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
          
          <div className="py-6">
            <Link 
              to="/register" 
              className="btn-primary block text-center"
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              {t('common.registerButton')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  // Reset expanded categories when closing the menu or navigating
  useEffect(() => {
    if (!isMenuOpen) {
      setExpandedMobileCategories([]);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setExpandedMobileCategories([]);
  }, [location.pathname]);

  // Add all routes where you want the navbar to be solid
  const forceScrolledRoutes = [
    '/services/legal-structure-selection'
    // add more routes if needed
  ];
  const forceScrolled = forceScrolledRoutes.includes(location.pathname);

  // Use your existing scroll logic, but override if forceScrolled is true
  const isScrolled = scrolled || forceScrolled;

  return (
    <header className={`fixed w-full transition-all duration-300 z-50 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo className={`h-10 w-auto ${isScrolled ? 'text-primary' : 'text-white'}`} />
          <span className={`font-bold text-xl md:text-2xl mr-2 ${isScrolled ? 'text-primary' : 'text-white'}`}>
            {t('common.siteTitle')}
          </span>
        </Link>
        
        {/* Desktop Mega Menu (remains unchanged) */}
        {renderMegaMenu()}
        
        {/* Language Switcher and CTA Button (remains unchanged) */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
              scrolled 
                ? 'text-gray-700 hover:text-primary border border-gray-300 hover:border-primary' 
                : 'text-white hover:text-accent-light border border-white/30 hover:border-white'
            }`}
          >
            <Globe size={18} />
            <span className="font-medium">{language === 'ar' ? 'English' : 'العربية'}</span>
          </button>
          <Link 
            to="/register" 
            className={`${scrolled ? 'btn-primary' : 'border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-2 rounded-lg transition-all duration-300'}`}
          >
            {t('common.registerButton')}
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className={`p-2 rounded-md transition-colors ${
              scrolled 
                ? 'text-gray-700 hover:text-primary border border-gray-300 hover:border-primary' 
                : 'text-white hover:text-accent-light border border-white/30 hover:border-white'
            }`}
          >
            <Globe size={20} />
          </button>
          <button 
            className={`${scrolled ? 'text-primary' : 'text-white'} p-2`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {renderMobileMenu()}
    </header>
  );
};

export default Header;