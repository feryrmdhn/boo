import { useState, useRef, useEffect } from 'react';
import { languages } from '@/utils';

interface Language {
    code: string;
    name: string;
}

export default function LanguageSelector() {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleSelect = (language: Language) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={containerRef}>
            {isOpen && (
                <div className="absolute bottom-full mb-2 w-full bg-black border border-gray-700 rounded-xl overflow-hidden">
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => handleSelect(language)}
                            className={`w-full text-left px-3 py-2 text-xs cursor-pointer hover:bg-gray-800 transition-colors focus:outline-none ${selectedLanguage.code === language.code
                                ? 'bg-black text-teal-400'
                                : 'text-white'
                                }`}
                        >
                            {language.name}
                        </button>
                    ))}
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer text-left text-white text-xs py-2 px-3 bg-black rounded-full hover:bg-gray-800 transition-colors focus:outline-none"
            >
                {selectedLanguage.name}
            </button>
        </div>
    );
}
