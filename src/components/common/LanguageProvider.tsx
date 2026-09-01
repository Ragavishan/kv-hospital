"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { translations } from "@/constants/translations";

export type Language = "en" | "ta" | "ml" | "te" | "hi";

type Translation =
  (typeof translations)[keyof typeof translations];

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
}

const LanguageContext =
  createContext<LanguageContextType | undefined>(
    undefined
  );

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] =
    useState<Language>("en");

  // =====================================================
  // LOAD SAVED LANGUAGE
  // =====================================================

  useEffect(() => {
    const savedLanguage =
      localStorage.getItem("iswarya hospital-language");

    if (
      savedLanguage === "en" ||
      savedLanguage === "ta" ||
      savedLanguage === "ml" ||
      savedLanguage === "te" ||
      savedLanguage === "hi"
    ) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // =====================================================
  // CHANGE LANGUAGE
  // =====================================================

  const setLanguage = (
    newLanguage: Language
  ) => {
    setLanguageState(newLanguage);

    localStorage.setItem(
      "iswarya hospital-language",
      newLanguage
    );
  };

  // =====================================================
  // CURRENT TRANSLATION
  // =====================================================

  const t =
    translations[language] as Translation;

  // =====================================================
  // PROVIDER
  // =====================================================

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// =======================================================
// USE LANGUAGE HOOK
// =======================================================

export function useLanguage() {
  const context =
    useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}