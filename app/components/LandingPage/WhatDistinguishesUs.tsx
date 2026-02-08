"use client";

import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";
import Btn from "../public/Btn";
import IsTitle from "../public/IsTitle";
import Image from "next/image";
import { useDataPrinciples } from "@/app/data/principles";

export default function WhatDistinguishesUs() {
    const { t, mounted } = useTranslationSetup();
    const principles = useDataPrinciples();

    return (
        <section>
            <div className="pb-20 relative before:content-[''] before:absolute before:w-full before:h-full before:bg-[url('/images/bgWhyUs.webp')] before:opacity-30 before:z-[-1]">
                <div className="padding-all-sections">
                    <div className="container">
                        <div data-aos="fade-up">
                            <div className="pt-20 grid lg:grid-cols-2 gap-10 md:gap-0">
                                <div className="relative text-white">
                                    <div className="rounded-[24px] before:rounded-[24px] shadow-[0_0_15px_rgba(100,100,100,0.3)] bg-[var(--is-color-tow-image)] w-full lg:w-[90%] h-full before:content-[''] before:absolute before:w-full before:lg:w-[90%] before:h-full before:bg-[url('/assets/icons/astronaut.png')] before:bg-center before:bg-cover before:z-[-1]">
                                        <div className="flex flex-col gap-[40px] md:gap-[80px] py-10 px-7 md:py-18 md:px-13">
                                            <div className="flex flex-col gap-5">
                                                <div className="flex">
                                                    <div className="border border-2 border-[var(--is-border-btn)] rounded-full px-7 py-[7px] md:py-[7px]">
                                                        <h3 className="text-sm md:text-xl font-semibold">{mounted ? t("what-distinguishes-us") : '...'}</h3>
                                                    </div>
                                                </div>
                                                <h2 className="md:leading-15 text-xl md:text-5xl font-Changa font-bold">
                                                    {mounted ? t("enhance-digital-impact") : '...'}
                                                </h2>
                                                <span className="font-semibold text-sm md:text-xl leading-8 text-[var(--is-color-in-platform)]">
                                                    {mounted ? t("in-platform-space") : '...'}
                                                </span>
                                            </div>
                                            <div>
                                                <Btn value={mounted ? t("start-your-journey") : '...'} padding='px-7 py-[7px] md:px-10 md:py-[11px]' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative text-white flex flex-col gap-5">

                                    <Image src="/assets/icons/air.svg" alt="هواء" width={696} height={404} className="-top-15 md:left-20 absolute" />

                                    <IsTitle padding="px-5 py-2 md:px-5 md:py-1" title={mounted ? t("why-choose-us") : '...'} />

                                    <h2 className="font-Changa text-xl md:text-5xl font-bold">{mounted ? t("confirm-designs") : '...'} <span className="text-[var(--is-color-active)]">{mounted ? t("sales") : '...'}</span></h2>

                                    <span className="text-[var(--is-color-in-platform)] font-semibold text-sm md:text-xl leading-8 text-[var(--color-text-why-choose)]">
                                        {mounted ? t("we-provide-solutions") : '...'}
                                    </span>

                                    <div className="mt-5 bg-[var(--color-body)] rounded-lg">
                                        <ul className="flex flex-col gap-5">
                                            {principles.map((item, index) => (
                                                <li key={index} className="flex gap-5">
                                                    <div className="flex gap-5 group w-full">
                                                        <div className="hidden md:block">
                                                            <div className="bg-[var(--is-border-btn)] rounded-[16px] px-[9px] py-[10px]">
                                                                <Image src={`/assets/icons/${item.icon}.svg`} alt={item.title} width={24} height={24} />
                                                            </div>
                                                        </div>
                                                        <div className="md:w-[600px] flex flex-col gap-2">
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
                    </div>
                </div>
            </div>
        </section>
    );
}