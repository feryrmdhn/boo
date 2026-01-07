import id from './id.json';
import en from './en.json';
import ms from './ms.json';

export type Language = 'id' | 'en' | 'ms';

export const translations = {
    id,
    en,
    ms,
};

export const getTranslation = (lang: Language = 'en') => {
    return translations[lang] || translations.en;
};

export const t = (lang: Language, key: string): string => {
    const keys = key.split('.');
    let value: Record<string, unknown> | unknown = translations[lang];

    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = (value as Record<string, unknown>)[k];
        } else {
            return key;
        }
    }

    return typeof value === 'string' ? value : key;
};
