import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";

export const useDataMethodology = () => {
    const { t } = useTranslationSetup();

    return [
        {
            title: t("understanding-the-client"),
            description: t("understanding-the-client-des"),
        },
        {
            title: t("good-idea"),
            description: t("good-idea-des"),
        },
        {
            title: t("strategic-planning"),
            description: t("strategic-planning-des"),
        },
        {
            title: t("execution-with-precision"),
            description: t("execution-with-precision-des"),
        },
        {
            title: t("review-and-improvement"),
            description: t("review-and-improvement-des"),
        },
        {
            title: t("delivery-and-follow-up"),
            description: t("delivery-and-follow-up-des"),
        },
    ]
}