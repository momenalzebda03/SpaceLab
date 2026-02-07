import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";

export const useDataNavigation = () => {
    const { t } = useTranslationSetup();

    return [
        { name: t("text"), href: '#', current: true },
        { name: t("text"), href: '#', current: false },
        { name: t("text"), href: '#', current: false },
        { name: t("text"), href: '#', current: false },
        { name: t("text"), href: '#', current: false },
        { name: t("text"), href: '#', current: false },
    ]
}