import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../common/Logo';
import { useLanguage } from '../../contexts/LanguageContext';
import {
	 useTranslation } from '../../hooks/useTranslation';

// --- Import megaMenu from Header or define it here if not shar
// --					

const megaMenu = [
	{
		key: 'services',
		label: { ar: 'خدماتنا', en: 'Our Services' },
		submenu: [
			{
				key: 'business',
				label: {
					ar: 'تأسيس الأعمال وتسجيل الشركات',
					en: 'Business Establishment & Registration'
				},
				children: [
					{
						key: 'legal-structure',
						label: { ar: 'اختيار الشكل القانوني', en: 'Legal Structure Selection' },
						to: '/services/legal-structure-selection',
					},
					{
						key: 'license',
						label: { ar: 'إصدار الرخص التجارية', en: 'Commercial License Issuance' },
						to: '/services/commercial-license',
					},
					{
						key: 'bank',
						label: { ar: 'فتح حسابات بنكية', en: 'Bank Account Opening' },
						to: '/services/bank-account',
					},
					{
						key: 'registration',
						label: {
							ar: 'تسجيل في الجهات الرسمية (اقتصاد، ضرائب)',
							en: 'Registration with Official Authorities',
						},
						to: '/services/official-registration',
					},
					{
						key: 'cost',
						label: { ar: 'حساب تكلفة التأسيس', en: 'Establishment Cost Calculation' },
						to: '/services/establishment-cost',
					},
				],
			},
			{
				key: 'technical',
				label: { ar: 'الخدمات التقنية', en: 'Technical Services' },
				children: [
					{
						key: 'web-dev',
						label: { ar: 'تصميم وتطوير مواقع الشركة', en: 'Website Design & Development' },
						to: '/services/web-dev',
					},
					{
						key: 'app-dev',
						label: { ar: 'تطوير التطبيقات', en: 'App Development' },
						to: '/services/app-dev',
					},
					{
						key: 'hosting',
						label: { ar: 'خدمات الاستضافة والبنية التحتية', en: 'Hosting & Infrastructure Services' },
						to: '/services/hosting',
					},
					{
						key: 'erp-crm',
						label: { ar: 'أنظمة إدارة الأعمال ERP/CRM', en: 'ERP/CRM Business Systems' },
						to: '/services/erp-crm',
					},
					{
						key: 'ai',
						label: { ar: 'حلول الذكاء الاصطناعي والتحليلات', en: 'AI & Analytics Solutions' },
						to: '/services/ai',
					},
				],
			},
			// ...other categories as in your Header...
		],
	},
	// ...other main nav items if needed...
];

function getRandomSubservices(language: string, count = 4) {
	// Flatten all subservices
	const allSubservices = megaMenu[0].submenu.flatMap((cat) =>
		(cat.children || []).map((child) => ({
			label: child.label[language],
			to: child.to,
		}))
	);
	// Shuffle and pick random ones
	const shuffled = allSubservices.sort(() => 0.5 - Math.random());
	return shuffled.slice(0, count);
}

const Footer: React.FC = () => {
	const { language } = useLanguage();
	const { t } = useTranslation(language);

	// Memoize so it only changes on reload
	const randomSubservices = useMemo(() => getRandomSubservices(language, 4), [language]);

	return (
		<footer className="bg-primary-dark text-white pt-12 pb-6">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Logo and About */}
					<div>
						<div className="flex items-center mb-4">
							<Logo className="h-10 w-auto text-white" />
							<span className="font-bold text-xl md:text-2xl mr-2">
								{t('footer.brand')}
							</span>
						</div>
						<p className="mb-4">{t('footer.about')}</p>
						<div className="flex space-x-4 space-x-reverse">
							<a
								href="#"
								className="hover:text-accent transition-colors"
							>
								<Facebook size={20} />
							</a>
							<a
								href="#"
								className="hover:text-accent transition-colors"
							>
								<Twitter size={20} />
							</a>
							<a
								href="#"
								className="hover:text-accent transition-colors"
							>
								<Instagram size={20} />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-bold mb-4 text-accent">
							{t('footer.quickLinks')}
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/"
									className="hover:text-accent-light transition-colors"
								>
									{t('footer.home')}
								</Link>
							</li>
							<li>
								<Link
									to="/startup-toolkit"
									className="hover:text-accent-light transition-colors"
								>
									{t('footer.toolkit')}
								</Link>
							</li>
							<li>
								<Link
									to="/consulting"
									className="hover:text-accent-light transition-colors"
								>
									{t('footer.consulting')}
								</Link>
							</li>
							<li>
								<Link
									to="/register"
									className="hover:text-accent-light transition-colors"
								>
									{language === 'ar' ? 'سجّل شركتك' : 'Register Your Company'}
								</Link>
							</li>
						</ul>
					</div>

					{/* Random Subservices */}
					<div>
						<h3 className="text-lg font-bold mb-4 text-accent">
							{language === 'ar' ? 'خدماتنا' : 'Our Services'}
						</h3>
						<ul className="space-y-2">
							{randomSubservices.map((sub, idx) => (
								<li key={idx}>
									<Link
										to={sub.to}
										className="hover:text-accent-light transition-colors"
									>
										{sub.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-lg font-bold mb-4 text-accent">
							{t('footer.contactUs')}
						</h3>
						<ul className="space-y-3">
							<li className="flex items-center">
								<Mail size={18} className="ml-2" />
								<a
									href="mailto:info@syriastartups.com"
									className="hover:text-accent-light transition-colors"
								>
									info@syriastartups.com
								</a>
							</li>
							<li className="flex items-center">
								<Phone size={18} className="ml-2" />
								<a
									href="tel:+963000000000"
									className="hover:text-accent-light transition-colors"
								>
									+963 00 000 0000
								</a>
							</li>
							<li className="flex items-start">
								<MapPin size={18} className="ml-2 mt-1" />
								<span>{t('footer.address')}</span>
							</li>
						</ul>
					</div>
				</div>

				<hr className="my-6 border-primary-light" />

				{/* Copyright */}
				<div className="text-center text-sm">
					<p>
						© {new Date().getFullYear()} Syria Startups. {t('footer.rights')}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;