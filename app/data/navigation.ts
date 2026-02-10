import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";

export const useDataNavigation = () => {
    const { t } = useTranslationSetup();

    return [
        { name: t("home"), href: '#' },
        { name: t("our-partners"), href: '#our-partners' },
        { name: t("who-we-are"), href: '#who-we-are' },
        { name: t("services"), href: '#services' },
        { name: t("the-operation"), href: '#the-operation' },
        { name: t("our-works"), href: '#our-works' },
        { name: t("contact-us"), href: '#contact-us' },
    ]
}