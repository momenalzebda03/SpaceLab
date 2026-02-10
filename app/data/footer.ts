"use client";

import { useTranslationSetup } from "../hooks/useTranslationSetup";

export const useDataFooter = () => {
    const { t } = useTranslationSetup();

    const socialMedia = [
        { link: "", icon: "meta" },
        { link: "", icon: "x" },
        { link: "", icon: "instagram" },
        { link: "", icon: "linkedin" },
    ]

    const ourServices = [
        { link: "", title: t("footer-seo") },
        { link: "", title: t("footer-marketing-campaigns") },
        { link: "", title: t("website-development") },
        { link: "", title: t("desginer") }
    ]

    const helpCenter = [
        { link: "", title: t("frequently-asked-questions") },
        { link: "", title: t("lessons-and-articles") },
        { link: "", title: t("instructions-for-use") },
        { link: "", title: t("tech-support") }
    ]

    const otherLinks = [
        { link: "", title: t("who-we-are") },
        { link: "", title: t("services") },
        { link: "", title: t("gallary") },
        { link: "", title: t("contact-us") }
    ]

    const contactUs = [
        { link: "", title: "+96651234567", icon: "call" },
        { link: "", title: "info@spacelab.com", icon: "message" }
    ]

    const countrys = ["sa", "ae", "kw", "qa", "om", "eg", "bh", "tr", "sb"]

    return { countrys, contactUs, socialMedia, ourServices, helpCenter, otherLinks }
}