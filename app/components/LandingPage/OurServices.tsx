"use client";

import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";
import IsTitleOne from "../public/IsTitleOne";
import Link from "next/link";
import Image from "next/image";
import { useDataOurServices } from "@/app/data/ourServices";

export default function OurServices() {
    const { i18n, t, mounted } = useTranslationSetup();
    const ourServices = useDataOurServices();

    return (
        <section id="services">
            <div className="padding-all-sections">
                <div className="container">
                    <div className="mt-13 md:mt-0 gap-[40px] md:gap-[77px] flex flex-col">
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
                        <div className="grid md:grid-cols-2 gap-[16px]">
                            {
                                ourServices.map((item, index) => {
                                    return <div key={index} data-aos="fade-up" className={`
                             relative 
                            [&:nth-child(odd)_.image]:right-0
    [&:nth-child(even)_.image]:left-0
    [&:nth-child(4n+1)]:bg-[var(--is-color-card-1)]
    [&:nth-child(4n+4)]:bg-[var(--is-color-card-1)]
    [&:nth-child(4n+2)]:bg-gradient-to-r
    [&:nth-child(4n+3)]:bg-gradient-to-r 
    rounded-[32px]
    from-(--is-color-one-card) to-(--is-color-tow-card)
                                `}>
                                        <div className="rounded-[32px] image absolute w-full md:w-[264px] h-full">
                                            <Image src={`/assets/icons/${item.image}.svg`} alt="services" fill className="object-cover" />
                                        </div>
                                        <div className="text-white px-[24px] py-[40px] h-full">
                                            <div className="flex flex-col justify-between gap-[40px] h-full">
                                                <div className="flex flex-col gap-[16px]">
                                                    <h2 className="font-bold font-Changa text-lg">{mounted ? item.title : '...'}</h2>
                                                    <div className="w-[80%] md:w-[430px]">
                                                        <span className="leading-[1.5] text-sm font-semibold">{mounted ? item.text : '...'}</span>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <Link href={item.link} title={mounted ? t("start-now") : '...'} className="items-center flex relative group font-bold text-sm overflow-hidden pe-7">
                                                        <span>{mounted ? t("start-now") : '...'}</span>
                                                        <Image
                                                            src="/assets/icons/arraw.svg"
                                                            alt="arrow"
                                                            className={`${mounted ? i18n.language === 'ar' ? "left-0 group-hover:left-5" : "rotate-[-80deg] right-0 group-hover:right-5" : ""} absolute top-[-2px] transition-all duration-300 group-hover:-top-5`}
                                                            width={24}
                                                            height={24}
                                                        />
                                                        <Image
                                                            src="/assets/icons/arraw.svg"
                                                            alt="arrow"
                                                            className={`${mounted ? i18n.language === 'ar' ? "-left-5 group-hover:left-0" : "rotate-[-80deg] -right-5 group-hover:right-0" : ""} absolute top-[30px] transition-all duration-300 group-hover:top-[-2px]`}
                                                            width={24}
                                                            height={24}
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}