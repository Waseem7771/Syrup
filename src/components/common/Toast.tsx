import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useLanguage } from '../../contexts/LanguageContext';

const Toast = () => {
  const { language } = useLanguage();
  const [position, setPosition] = useState<'top-right' | 'top-left'>('top-right');

  useEffect(() => {
    // Set toast position based on language direction
    setPosition(language === 'ar' ? 'top-left' : 'top-right');
  }, [language]);

  return (
    <Toaster
      position={position}
      toastOptions={{
        duration: 5000,
        style: {
          background: '#fff',
          color: '#333',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '0.5rem',
          padding: '1rem',
        },
        success: {
          style: {
            border: '1px solid #10B981',
          },
          iconTheme: {
            primary: '#10B981',
            secondary: '#FFFFFF',
          },
        },
        error: {
          style: {
            border: '1px solid #EF4444',
          },
          iconTheme: {
            primary: '#EF4444',
            secondary: '#FFFFFF',
          },
        },
      }}
    />
  );
};

export default Toast;