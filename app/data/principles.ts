import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";

export const useDataPrinciples = () => {
    const { t } = useTranslationSetup();

    return [
        {
            icon: "creativity",
            title: t("creativity"),
            description: t("resault-experiment-description"),
        },
        {
            icon: "experiment",
            title: t("resault-experiment"),
            description: t("design-experiment-description"),
        },
    ]
}