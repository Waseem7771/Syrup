import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import HowWeHelp from './pages/HowWeHelp';
import StartupToolkit from './pages/StartupToolkit';
import Consulting from './pages/Consulting';
import Partners from './pages/community/Partners';
import Register from './pages/Register';
import OurArticles from './pages/media/OurArticles';
import EntrepreneurSuccessStories from './pages/media/EntrepreneurSuccessStories';
import LatestNews from './pages/media/LatestNews';
import AboutUs from './pages/community/AboutUs';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import LegalStructureSelection from './pages/services/LegalStructureSelection';
import CommercialLicenseIssuance from './pages/services/CommercialLicenseIssuance';
import BankAccountOpening from './pages/services/BankAccountOpening';
import OfficialRegistration from './pages/services/OfficialRegistration';
import EstablishmentCostCalculation from './pages/services/EstablishmentCostCalculation';
import WebsiteDesignDevelopment from './pages/services/WebsiteDesignDevelopment';
import AppDevelopment from './pages/services/AppDevelopment';
import HostingInfrastructure from './pages/services/HostingInfrastructure';
import ERPCRMSystems from './pages/services/ERPCRMSystems';
import AIAnalyticsSolutions from './pages/services/AIAnalyticsSolutions';
import ReadyOfficeRental from './pages/services/ReadyOfficeRental';
import SharedOffices from './pages/services/SharedOffices';
import FinancialStatementPreparation from './pages/services/FinancialStatementPreparation';
import FinancialPlanningBudgeting from './pages/services/FinancialPlanningBudgeting';
import TaxZakatConsulting from './pages/services/TaxZakatConsulting';
import MarketingPlanPreparation from './pages/services/MarketingPlanPreparation';
import SocialMediaCampaignManagement from './pages/services/SocialMediaCampaignManagement';
import LicensesAndContractReview from './pages/services/LicensesAndContractReview';
import OfficialAndFinancialDocumentAuditing from './pages/services/OfficialAndFinancialDocumentAuditing';
import PreparingCompanyFilesForInvestors from './pages/services/PreparingCompanyFilesForInvestors';
import MediaProduction from './pages/services/MediaProduction';
import SpecializedTalentSearch from './pages/services/SpecializedTalentSearch';
import BuildFreelancerNetwork from './pages/services/BuildFreelancerNetwork';
import LogoColorFontSelection from './pages/services/LogoColorFontSelection';
import VisualIdentityPreparation from './pages/services/VisualIdentityPreparation';
import WebsiteInterfaceDesign from './pages/services/WebsiteInterfaceDesign';
import BusinessAcceleratorProgram from './pages/programs/BusinessAcceleratorProgram';
import IncubatorProgram from './pages/programs/IncubatorProgram';
import SeedFundingPrograms from './pages/programs/SeedFundingPrograms';
import BusinessEstablishmentConsulting from './pages/consulting/BusinessEstablishmentConsulting';
import LegalConsulting from './pages/consulting/LegalConsulting';
import SeedFinancialConsulting from './pages/consulting/SeedFinancialConsulting';
import MarketingConsulting from './pages/consulting/MarketingConsulting';
import { useLanguage } from './contexts/LanguageContext';
import { useEffect } from 'react';
import SyriaCities from './pages/SyriaCities';
import VisaResidency from './pages/VisaResidency';

function App() {
  const { language } = useLanguage();

  useEffect(() => {
    // Set both lang and dir attributes
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="how-we-help" element={<HowWeHelp />} />
        <Route path="startup-toolkit" element={<StartupToolkit />} />
        <Route path="consulting" element={<Consulting />} />
        <Route path="partners" element={<Partners />} />
        <Route path="register" element={<Register />} />
        <Route path="news" element={<LatestNews />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="services/legal-structure" element={<LegalStructureSelection />} />
        <Route path="services/commercial-license" element={<CommercialLicenseIssuance />} />
        <Route path="services/bank-account" element={<BankAccountOpening />} />
        <Route path="services/official-registration" element={<OfficialRegistration />} />
        <Route path="services/establishment-cost" element={<EstablishmentCostCalculation />} />
        <Route path="services/web-dev" element={<WebsiteDesignDevelopment />} />
        <Route path="services/app-dev" element={<AppDevelopment />} />
        <Route path="services/hosting" element={<HostingInfrastructure />} />
        <Route path="services/erp-crm" element={<ERPCRMSystems />} />
        <Route path="services/ai" element={<AIAnalyticsSolutions />} />
        <Route path="services/office-rental" element={<ReadyOfficeRental />} />
        <Route path="services/shared-offices" element={<SharedOffices />} />
        <Route path="services/statements" element={<FinancialStatementPreparation />} />
        <Route path="services/planning" element={<FinancialPlanningBudgeting />} />
        <Route path="services/tax" element={<TaxZakatConsulting />} />
        <Route path="services/marketing-plan" element={<MarketingPlanPreparation />} />
        <Route path="services/social-media" element={<SocialMediaCampaignManagement />} />
        <Route path="services/review" element={<LicensesAndContractReview />} />
        <Route path="services/doc-audit" element={<OfficialAndFinancialDocumentAuditing />} />
        <Route path="services/investor-files" element={<PreparingCompanyFilesForInvestors />} />
        <Route path="services/content" element={<MediaProduction />} />
        <Route path="services/talent-search" element={<SpecializedTalentSearch />} />
        <Route path="services/network" element={<BuildFreelancerNetwork />} />
        <Route path="services/logo" element={<LogoColorFontSelection />} />
        <Route path="services/visual-identity" element={<VisualIdentityPreparation />} />
        <Route path="services/ui-design" element={<WebsiteInterfaceDesign />} />
        <Route path="programs/accelerators" element={<BusinessAcceleratorProgram />} />
        <Route path="programs/incubators" element={<IncubatorProgram />} />
        <Route path="programs/seed-funding" element={<SeedFundingPrograms />} />
        <Route path="consulting/business" element={<BusinessEstablishmentConsulting />} />
        <Route path="consulting/legal" element={<LegalConsulting />} />
        <Route path="consulting/financial" element={<SeedFinancialConsulting />} />
        <Route path="consulting/marketing" element={<MarketingConsulting />} />
        <Route path="media/articles" element={<OurArticles />} />
        <Route path="media/success-stories" element={<EntrepreneurSuccessStories />} />
        <Route path="media/news" element={<LatestNews />} />
        <Route path="community/about" element={<AboutUs />} />
        <Route path="community/partners" element={<Partners />} />
        <Route path="/syria-cities" element={<SyriaCities />} />
        <Route path="/visa-residency" element={<VisaResidency />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;