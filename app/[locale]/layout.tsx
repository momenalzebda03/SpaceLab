"use client";

import { I18nextProvider } from "react-i18next";
import React, { useEffect, useState } from "react";
import "../assets/css/globals.css";
import Header from "../components/public/Header";
import i18n, { setLanguageFromLocale } from "../lib/i18n";
import AOSWrapper from "../components/AOSWrapper";
import Footer from "../components/public/Footer";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = React.use(params);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLanguageFromLocale(locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    setMounted(true);
  }, [locale]);

  if (!mounted) return null;

  return (
    <I18nextProvider i18n={i18n}>
      <AOSWrapper />
      <Header />
      {children}
      <Footer />
    </I18nextProvider>
  );
}