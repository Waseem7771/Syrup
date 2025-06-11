import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md text-center">
        <div className="text-primary text-9xl font-bold mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">الصفحة غير موجودة</h1>
        <p className="text-gray-600 mb-8">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="btn-primary flex items-center justify-center gap-2 w-full md:w-auto"
          >
            <Home size={18} />
            العودة للرئيسية
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-outline flex items-center justify-center gap-2 w-full md:w-auto"
          >
            <ArrowLeft size={18} />
            الرجوع للخلف
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;