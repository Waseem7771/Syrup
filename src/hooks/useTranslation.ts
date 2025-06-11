import { useCallback } from 'react';
import ar from '../locales/ar';
import en from '../locales/en';

type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}.${NestedKeyOf<T[K]>}`
          : K
        : never;
    }[keyof T]
  : never;

type TranslationKey = NestedKeyOf<typeof ar>;

const translations = {
  ar,
  en,
} as const;

export type Language = keyof typeof translations;

export function useTranslation(lang: Language = 'ar') {
  const t = useCallback(
    (key: TranslationKey) => {
      const keys = key.split('.');
      let value: any = translations[lang];
      
      for (const k of keys) {
        value = value[k];
        if (value === undefined) {
          console.warn(`Translation missing for key: ${key} in language: ${lang}`);
          return key;
        }
      }
      
      return value as string;
    },
    [lang]
  );

  return { t };
}