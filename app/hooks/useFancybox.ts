"use client";

import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";

export const useFancybox = (selector = '[data-fancybox="gallery"]') => {
    useEffect(() => {
        Fancybox.bind(selector, {});
        return () => {
            Fancybox.destroy();
        };
    }, [selector]);
};
