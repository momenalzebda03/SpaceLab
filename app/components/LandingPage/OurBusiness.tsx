"use client";

import Image from "next/image";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";
import IsTitle from "../public/IsTitle";
import Btn from "../public/Btn";
import { useFancybox } from "@/app/hooks/useFancybox";

export default function OurBusiness() {
    const { t, mounted } = useTranslationSetup();

    useFancybox();

    return (
        <section>
            <div className="pt-20 padding-all-sections">
                <div className="container">
                    <div className="flex flex-col gap-[40px]">
                        <div className="grid md:grid-cols-[8.4fr_4.7fr] items-start gap-[41px] md:gap-[71px]">
                            <div className="h-full flex flex-col lg:flex-row gap-[24px]" data-aos="fade-up">
                                <a href="/assets/icons/our-business-1.svg" data-fancybox="gallery" className="overflow-hidden relative w-full h-[250px] md:h-full rounded-[32px]">
                                    <Image src="/assets/icons/our-business-1.svg" alt="our business" fill className="transition-all duration-500 scale-100 hover:scale-110 object-cover rounded-[32px]" />
                                </a>
                                <a href="/assets/icons/our-business-2.svg" data-fancybox="gallery" className="overflow-hidden relative w-full h-[250px] md:h-full rounded-[32px]">
                                    <Image src="/assets/icons/our-business-2.svg" alt="our business" fill className="transition-all duration-500 scale-100 hover:scale-110 object-cover rounded-[32px]" />
                                </a>
                            </div>
                            <div data-aos="fade-up" className="overflow-hidden relative text-center text-white flex flex-col justify-center items-center gap-[20px] md:gap-[16px]">
                                <div className="md:-left-25 top-30 absolute w-[696px] h-[404px]">
                                    <Image src="/assets/icons/air.svg" alt="air" fill />
                                </div>
                                <IsTitle padding="px-5 py-2 md:px-7 md:py-2" title={mounted ? t("grew-our-works") : '...'} />
                                <div className="flex flex-col gap-[10px] md:gap-[16px] font-Changa">
                                    <h2 className="text-sm md:text-7xl leading-[1.5] font-semibold">
                                        <span className="text-[var(--is-color-active)]">
                                            {mounted ? t("journey") : "..."}
                                        </span>
                                    </h2>
                                </div>
                                <span className="leading-[1.5] text-xs md:text-4xl font-normal text-[var(--is-color-text-hero)]">{mounted ? t("journey-des") : "..."}</span>
                                <Btn icon="network" value={mounted ? t("our-portfolio") : '...'} isStyle='px-7 py-[11px]' />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 h-[450px] md:h-[376px] gap-[24px]" data-aos="fade-up">
                            <a href="/assets/icons/our-business-3.svg" data-fancybox="gallery" className="overflow-hidden relative w-full h-full rounded-[32px]">
                                <Image src="/assets/icons/our-business-3.svg" alt="our business" fill className="transition-all duration-500 scale-100 hover:scale-110 object-cover rounded-[32px]" />
                            </a>
                            <a href="/assets/icons/our-business-4.svg" data-fancybox="gallery" className="overflow-hidden relative w-full h-full rounded-[32px]">
                                <Image src="/assets/icons/our-business-4.svg" alt="our business" fill className="transition-all duration-500 scale-100 hover:scale-110 object-cover rounded-[32px]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}