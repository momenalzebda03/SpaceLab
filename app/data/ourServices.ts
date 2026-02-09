import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";

export const useDataOurServices = () => {
    const { t } = useTranslationSetup();

    return [
        {
            image: "bg-services-1",
            title: t("marketing-campaigns"),
            text: t("marketing-campaigns-des"),
            link: "/"
        },
        {
            image: "bg-services-2",
            title: t("seo"),
            text: t("seo-des"),
            link: "/"
        },
        {
            image: "bg-services-3",
            title: t("manager"),
            text: t("manager-des"),
            link: "/"
        },
        {
            image: "bg-services-4",
            title: t("ecoomerce"),
            text: t("ecoomerce-des"),
            link: "/"
        },
        {
            image: "bg-services-5",
            title: t("desginer"),
            text: t("desginer-des"),
            link: "/"
        },
        {
            image: "bg-services-4",
            title: t("ecosystem"),
            text: t("ecosystem-des"),
            link: "/"
        }
    ]
}