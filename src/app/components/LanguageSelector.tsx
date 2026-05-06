import { Languages } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { useState } from 'react';
import { FlagIcon } from './FlagIcon';

export function LanguageSelector() {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; label: string; flag: 'br' | 'gb' | 'es' }[] = [
    { code: 'pt', label: 'Português', flag: 'br' },
    { code: 'en', label: 'English', flag: 'gb' },
    { code: 'es', label: 'Español', flag: 'es' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (newLanguage: Language) => {
    changeLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2d48bd] focus:ring-offset-2"
        aria-label="Select language"
      >
        <Languages className="w-4 h-4 text-gray-600" />
        <div className="hidden sm:flex">
          {currentLanguage && (
            <FlagIcon country={currentLanguage.flag} className="w-4 h-4" />
          )}
        </div>
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[160px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors flex items-center gap-3 ${
                  language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
              >
                <FlagIcon country={lang.flag} className="w-5 h-5" />
                <span className="font-medium">{lang.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}