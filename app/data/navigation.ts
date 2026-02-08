import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";

export const useDataNavigation = () => {
    const { t } = useTranslationSetup();

    return [
        { name: t("home"), href: '#', current: true },
        { name: t("our-partners"), href: '#', current: false },
        { name: t("who-we-are"), href: '#', current: false },
        { name: t("services"), href: '#', current: false },
        { name: t("the-operation"), href: '#', current: false },
        { name: t("our-works"), href: '#', current: false },
        { name: t("contact-us"), href: '#', current: false },
    ]
}