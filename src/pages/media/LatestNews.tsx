import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import Section from '../../components/common/Section';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';
import headerImage from '../../assets/images/1.png';

const News: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const newsArticles = [
    {
      id: 1,
      title: t('news.articles.article1.title'),
      excerpt: t('news.articles.article1.excerpt'),
      date: '2024-02-15',
      author: t('news.articles.article1.author'),
      category: t('news.categories.supportPrograms'),
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: t('news.articles.article2.title'),
      excerpt: t('news.articles.article2.excerpt'),
      date: '2024-02-10',
      author: t('news.articles.article2.author'),
      category: t('news.categories.legislation'),
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: t('news.articles.article3.title'),
      excerpt: t('news.articles.article3.excerpt'),
      date: '2024-02-05',
      author: t('news.articles.article3.author'),
      category: t('news.categories.workspaces'),
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      title: t('news.articles.article4.title'),
      excerpt: t('news.articles.article4.excerpt'),
      date: '2024-02-01',
      author: t('news.articles.article4.author'),
      category: t('news.categories.funding'),
      image: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const categories = [
    t('news.categories.all'),
    t('news.categories.supportPrograms'),
    t('news.categories.legislation'),
    t('news.categories.workspaces'),
    t('news.categories.funding'),
    t('news.categories.successStories'),
    t('news.categories.events')
  ];

  return (
    <>
      <PageHeader
        title={t('news.header.title')}
        subtitle={t('news.header.subtitle')}
        backgroundImage={headerImage}
      />

      <Section background="white">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 gap-8">
              {newsArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User size={16} />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag size={16} />
                          {article.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-primary-dark mb-3">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <a
                        href={`/news/${article.id}`}
                        className="text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
                      >
                        {t('news.readMore')}
                        {language === 'ar' ? (
                          <ArrowLeft size={16} className="rotate-180" />
                        ) : (
                          <ArrowLeft size={16} />
                        )}
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <button className="btn-outline">
                {t('news.loadMore')}
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-1/4">
            {/* Categories */}
            <div className="card mb-6">
              <h3 className="text-lg font-bold text-primary-dark mb-4">{t('news.categoriesTitle')}</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`block w-full text-right py-2 px-4 rounded-lg transition-colors ${
                      index === 0
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="card bg-primary-dark text-white">
              <h3 className="text-lg font-bold mb-4">{t('news.newsletter.title')}</h3>
              <p className="text-sm text-gray-200 mb-4">
                {t('news.newsletter.description')}
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder={t('news.newsletter.emailPlaceholder')}
                  className="w-full px-4 py-2 rounded-lg text-gray-900"
                />
                <button type="submit" className="btn-secondary w-full">
                  {t('news.newsletter.subscribeButton')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default News;