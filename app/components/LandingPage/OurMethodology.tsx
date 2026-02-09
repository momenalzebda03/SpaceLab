"use client";

import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";
import IsTitleOne from "../public/IsTitleOne";
import { useDataMethodology } from "@/app/data/methodology";
import Image from "next/image";

export default function OurMethodology() {
    const { t, mounted } = useTranslationSetup();
    const methodology = useDataMethodology();

    return (
        <section className="relative">
            <div className="absolute w-full h-full">
                <Image src="/assets/icons/container.svg" alt="container" fill />
            </div>
            <div className="overflow-hidden padding-all-sections">
                <div className="relative container">
                    <div className="md:-left-50 top-40 absolute w-[696px] h-[404px]">
                        <Image src="/assets/icons/air.svg" alt="air" fill className="object-cover" />
                    </div>
                    <div className="mt-13 md:mt-0 gap-[40px] md:gap-[56px] flex flex-col">
                        <div className="flex flex-col">
                            <IsTitleOne padding="px-5 py-2 md:px-7 md:py-2" isTitle={mounted ? t("methodology") : '...'} isTitleOne={`
                       <h2 class="text-sm md:text-5xl leading-[1.5] font-semibold">
                         ${mounted ? t("he-methodology") : "..."}
                         <span class="text-[var(--is-color-active)]">
                           ${mounted ? t("space-lab") : "..."}
                         </span>
                         ${mounted ? t("in-work") : "..."}
                       </h2>
                     `}
                                text={mounted ? t("follow-methdology") : "..."} />
                        </div>
                        <div className="mt-5 bg-[var(--color-body)] rounded-lg">
                            <ul className="grid md:grid-cols-2 gap-[16px]">
                                {methodology.map((item, index) => (
                                    <li key={index} data-aos="fade-up" className="bg-gradient-to-r to-[var(--is-color-one-methodology)] from-[var(--is-color-tow-methodology)] text-white border border-1 border-[var(--is-color-in-border)] rounded-[24px] py-[28px] px-[24px] flex gap-5">
                                        <div className="flex gap-5 items-center group w-full">
                                            <div className="flex items-center justify-center bg-[var(--is-border-btn)] rounded-[16px] p-5 w-[60px] h-[60px]">
                                                <span className="font-Outfit font-bold text-4xl">{index + 1}</span>
                                            </div>
                                            <div className="md:w-[400px] flex flex-col gap-[16px]">
                                                <span className="font-Changa font-bold text-sm md:text-xl">{mounted ? t(item.title) : '...'}</span>
                                                <span className="font-normal text-sm md:text-xl leading-8 text-[var(--is-color-in-platform)]">
                                                    {item.description}
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}