import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { useLanguage } from '../../contexts/LanguageContext';
import articlesHeaderImage from '../../assets/images/11.png';
import {
  Calendar,
  Clock,
  User,
  Tag,
  Search,
  Filter,
  TrendingUp,
  Eye,
  MessageCircle,
  Share2,
  Bookmark,
  ChevronRight,
  Star,
  BookOpen,
  Lightbulb,
  Target,
  DollarSign,
  Users,
  BarChart3,
  Rocket,
  Globe
} from 'lucide-react';

const OurArticles: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const content = {
    en: {
      title: "Knowledge Hub",
      subtitle: "Expert insights and actionable strategies to fuel your entrepreneurial journey in Syria and beyond",
      searchPlaceholder: "Search articles...",
      categories: "Categories",
      allCategories: "All Articles",
      readMore: "Read Full Article",
      publishedOn: "Published on",
      readTime: "min read",
      views: "views",
      comments: "comments",
      relatedArticles: "Related Articles",
      popularTags: "Popular Tags",
      latestArticles: "Latest Articles",
      featuredArticle: "Featured Article",
      trending: "Trending Now"
    },
    ar: {
      title: "مركز المعرفة",
      subtitle: "رؤى خبراء واستراتيجيات قابلة للتطبيق لتغذية رحلتك الريادية في سوريا وخارجها",
      searchPlaceholder: "البحث في المقالات...",
      categories: "التصنيفات",
      allCategories: "جميع المقالات",
      readMore: "اقرأ المقال كاملاً",
      publishedOn: "نُشر في",
      readTime: "دقيقة قراءة",
      views: "مشاهدة",
      comments: "تعليق",
      relatedArticles: "مقالات ذات صلة",
      popularTags: "الوسوم الشائعة",
      latestArticles: "أحدث المقالات",
      featuredArticle: "المقال المميز",
      trending: "الأكثر تداولاً"
    }
  };

  const categories = [
    { id: 'all', name: { en: 'All Articles', ar: 'جميع المقالات' }, icon: <BookOpen className="w-4 h-4" /> },
    { id: 'startup', name: { en: 'Startup Basics', ar: 'أساسيات الشركات الناشئة' }, icon: <Rocket className="w-4 h-4" /> },
    { id: 'funding', name: { en: 'Funding & Investment', ar: 'التمويل والاستثمار' }, icon: <DollarSign className="w-4 h-4" /> },
    { id: 'business', name: { en: 'Business Strategy', ar: 'استراتيجية الأعمال' }, icon: <Target className="w-4 h-4" /> },
    { id: 'marketing', name: { en: 'Marketing & Growth', ar: 'التسويق والنمو' }, icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'leadership', name: { en: 'Leadership', ar: 'القيادة' }, icon: <Users className="w-4 h-4" /> },
    { id: 'tech', name: { en: 'Technology', ar: 'التكنولوجيا' }, icon: <Globe className="w-4 h-4" /> }
  ];

  const articles = [
    {
      id: 1,
      category: 'startup',
      title: { 
        en: 'From Idea to MVP: A Syrian Entrepreneur\'s Complete Guide', 
        ar: 'من الفكرة إلى المنتج الأولي: دليل شامل لرائد الأعمال السوري' 
      },
      summary: {
        en: 'Learn how to transform your startup idea into a minimum viable product with practical steps, real examples from Syrian startups, and actionable frameworks.',
        ar: 'تعلم كيفية تحويل فكرة شركتك الناشئة إلى منتج أولي قابل للتطبيق مع خطوات عملية وأمثلة حقيقية من الشركات السورية الناشئة.'
      },
      author: 'Sarah Al-Khatib',
      publishDate: '15 مارس 2024',
      readTime: 8,
      views: 2340,
      comments: 42,
      isFeatured: true,
      isPopular: true,
      image: (
        <div className="w-full h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <Lightbulb className="w-16 h-16 text-white" />
        </div>
      ),
      tags: ['MVP', 'Product Development', 'Syria', 'Startups']
    },
    {
      id: 2,
      category: 'funding',
      title: { 
        en: 'Navigating Investment Landscape in MENA: Opportunities for Syrian Startups', 
        ar: 'التنقل في بيئة الاستثمار في الشرق الأوسط: فرص للشركات السورية الناشئة' 
      },
      summary: {
        en: 'Discover funding opportunities, investor networks, and strategies specifically tailored for Syrian entrepreneurs seeking investment in the MENA region.',
        ar: 'اكتشف فرص التمويل وشبكات المستثمرين والاستراتيجيات المصممة خصيصاً لرواد الأعمال السوريين الباحثين عن الاستثمار في منطقة الشرق الأوسط.'
      },
      author: 'Ahmad Mansour',
      publishDate: '12 مارس 2024',
      readTime: 12,
      views: 1890,
      comments: 28,
      isFeatured: false,
      isPopular: true,
      image: (
        <div className="w-full h-48 bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
          <DollarSign className="w-16 h-16 text-white" />
        </div>
      ),
      tags: ['Funding', 'Investment', 'MENA', 'Venture Capital']
    },
    {
      id: 3,
      category: 'business',
      title: { 
        en: 'Building Resilient Business Models in Challenging Markets', 
        ar: 'بناء نماذج أعمال مرنة في الأسواق الصعبة' 
      },
      summary: {
        en: 'How Syrian entrepreneurs are creating sustainable business models that thrive despite economic challenges and market volatility.',
        ar: 'كيف يخلق رواد الأعمال السوريون نماذج أعمال مستدامة تزدهر رغم التحديات الاقتصادية وتقلبات السوق.'
      },
      author: 'Layla Hassan',
      publishDate: '10 مارس 2024',
      readTime: 10,
      views: 1567,
      comments: 19,
      isFeatured: false,
      isPopular: false,
      image: (
        <div className="w-full h-48 bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center">
          <BarChart3 className="w-16 h-16 text-white" />
        </div>
      ),
      tags: ['Business Model', 'Resilience', 'Strategy', 'Syria']
    },
    {
      id: 4,
      category: 'marketing',
      title: { 
        en: 'Digital Marketing Strategies for Syrian Startups on a Budget', 
        ar: 'استراتيجيات التسويق الرقمي للشركات السورية الناشئة بميزانية محدودة' 
      },
      summary: {
        en: 'Cost-effective digital marketing tactics that Syrian startups can implement to reach their target audience and drive growth.',
        ar: 'تكتيكات التسويق الرقمي الفعالة من حيث التكلفة التي يمكن للشركات السورية الناشئة تطبيقها للوصول إلى جمهورها المستهدف ودفع النمو.'
      },
      author: 'Omar Khalil',
      publishDate: '8 مارس 2024',
      readTime: 6,
      views: 2150,
      comments: 35,
      isFeatured: false,
      isPopular: true,
      image: (
        <div className="w-full h-48 bg-gradient-to-br from-accent-dark to-accent flex items-center justify-center">
          <TrendingUp className="w-16 h-16 text-white" />
        </div>
      ),
      tags: ['Digital Marketing', 'Budget', 'Growth', 'Social Media']
    },
    {
      id: 5,
      category: 'leadership',
      title: { 
        en: 'Leading Through Crisis: Lessons from Syrian Entrepreneurs', 
        ar: 'القيادة في الأزمات: دروس من رواد الأعمال السوريين' 
      },
      summary: {
        en: 'Real-world leadership lessons from Syrian entrepreneurs who successfully navigated their companies through challenging times.',
        ar: 'دروس قيادية من العالم الحقيقي من رواد الأعمال السوريين الذين قادوا شركاتهم بنجاح خلال الأوقات الصعبة.'
      },
      author: 'Nour Al-Din',
      publishDate: '5 مارس 2024',
      readTime: 9,
      views: 1334,
      comments: 22,
      isFeatured: false,
      isPopular: false,
      image: (
        <div className="w-full h-48 bg-gradient-to-br from-primary to-accent-dark flex items-center justify-center">
          <Users className="w-16 h-16 text-white" />
        </div>
      ),
      tags: ['Leadership', 'Crisis Management', 'Resilience', 'Syria']
    },
    {
      id: 6,
      category: 'tech',
      title: { 
        en: 'Tech Startups in Syria: Overcoming Infrastructure Challenges', 
        ar: 'الشركات التقنية الناشئة في سوريا: التغلب على تحديات البنية التحتية' 
      },
      summary: {
        en: 'How Syrian tech entrepreneurs are building innovative solutions despite infrastructure limitations and creating global impact.',
        ar: 'كيف يبني رواد الأعمال التقنيون السوريون حلولاً مبتكرة رغم قيود البنية التحتية ويخلقون تأثيراً عالمياً.'
      },
      author: 'Rami Saleh',
      publishDate: '3 مارس 2024',
      readTime: 11,
      views: 1789,
      comments: 31,
      isFeatured: false,
      isPopular: true,
      image: (
        <div className="w-full h-48 bg-gradient-to-br from-accent to-primary flex items-center justify-center">
          <Globe className="w-16 h-16 text-white" />
        </div>
      ),
      tags: ['Technology', 'Infrastructure', 'Innovation', 'Global Impact']
    }
  ];

  const popularTags = ['Startups', 'Syria', 'Funding', 'Business Strategy', 'Innovation', 'Leadership', 'Growth', 'Technology'];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.summary[language].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const c = content[language];

  return (
    <>
      <PageHeader
        title={c.title}
        subtitle={c.subtitle}
        backgroundImage={articlesHeaderImage}
      />

      <Section background="white">
        <div className="max-w-6xl mx-auto">
          {/* Search and Filter Bar */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={c.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.icon}
                    {category.name[language]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Articles List */}
          <div className="space-y-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Article Image */}
                  <div className="lg:col-span-1 relative">
                    {article.image}
                    {article.isPopular && (
                      <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Popular
                      </div>
                    )}
                    {article.isFeatured && (
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Article Content */}
                  <div className="lg:col-span-2 p-8">
                    <div className="h-full flex flex-col">
                      {/* Category and Meta */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-4 py-2 bg-primary text-white text-sm rounded-full font-medium">
                          {categories.find(cat => cat.id === article.category)?.name[language]}
                        </span>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {article.publishDate}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {article.readTime} {c.readTime}
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-primary mb-4 leading-tight hover:text-accent transition-colors duration-300 cursor-pointer">
                        {article.title[language]}
                      </h2>

                      {/* Summary */}
                      <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                        {article.summary[language]}
                      </p>

                      {/* Author and Stats */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                            {article.author.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium text-primary">{article.author}</div>
                            <div className="text-sm text-gray-500">{c.publishedOn} {article.publishDate}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          {/* Stats */}
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {article.views.toLocaleString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-4 h-4" />
                              {article.comments}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-3">
                            <button className="text-gray-400 hover:text-accent transition-colors duration-300 p-2">
                              <Share2 className="w-5 h-5" />
                            </button>
                            <button className="text-gray-400 hover:text-accent transition-colors duration-300 p-2">
                              <Bookmark className="w-5 h-5" />
                            </button>
                            <button className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                              {c.readMore}
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              {language === 'ar' ? 'تحميل المزيد من المقالات' : 'Load More Articles'}
            </button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default OurArticles;