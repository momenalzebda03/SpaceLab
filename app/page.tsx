"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootRedirect() {
    const router = useRouter();

    useEffect(() => {
        const savedLang = localStorage.getItem("i18nextLng");

        if (savedLang === "en" || savedLang === "ar") {
            router.replace(`/${savedLang}`);
        } else {
            router.replace("/ar");
        }
    }, []);

    return null;
}
