"use client";

import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";
import IsTitleOne from "../public/IsTitleOne";

export default function OurServices() {
    const { t, mounted } = useTranslationSetup();

    return (
        <section>
            <div className="padding-all-sections">
                <div className="flex flex-col">
                    <IsTitleOne padding="px-5 py-2 md:px-7 md:py-2" isTitle={mounted ? t("our-services") : '...'} isTitleOne={`
                 <h2 class="text-sm md:text-5xl leading-[1.5] font-semibold">
                   ${mounted ? t("how-change-our-ideas") : "..."}
                   <span class="text-[var(--is-color-active)]">
                     ${mounted ? t("reality") : "..."}
                   </span>
                 </h2>
               `}
                        text={mounted ? t("we-present") : "..."} />
                </div>
            </div>
        </section>
    )
}