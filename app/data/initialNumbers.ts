import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";

export const useDataInitialNumbers = () => {
    const { t } = useTranslationSetup();

    return [
        { value: 1223, label: t("happy-client") },
        { value: 4, label: t("years-of-experience") },
        { value: 850, label: t("customer-reviews") },
        { value: 4.9, label: t("average-rating") },
    ]
}