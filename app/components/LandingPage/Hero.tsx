"use client";

import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";
import Image from "next/image";
import Btn from "../public/Btn";
import Link from "next/link";
import IsTitleOne from "../public/IsTitleOne";

export default function Hero() {
    const { i18n, t, mounted } = useTranslationSetup();

    return (
        <main>
            <div className="py-5 md:py-0 flex justify-center items-center relative">
                <div className="overflow-hidden -z-1 absolute w-full h-[1100px] -top-65">
                    <div className="relative w-full h-full">
                        <Image src="/assets/icons/lines-hero.svg" alt="الخلفية" fill className="object-cover" />
                    </div>
                </div>
                <div className="md:mt-15 container flex items-center justify-center h-full text-center" data-aos="fade-up">
                    <div className="hidden md:flex absolute h-full w-full z-[-1]">
                        <div className={`${mounted ? i18n.language === 'en' && "right-0" : ""} flex flex-col gap-[100px] top-25 absolute`}>
                            <Image src="/assets/icons/moon.svg" alt="moon" width={136} height={136} className="moon" />
                            <Image src="/assets/icons/moon.svg" alt="moon" width={50} height={50} className="moon" />
                        </div>
                        <div className="flex flex-col items-end gap-[100px] left-0 top-25 absolute">
                            <Image src="/assets/icons/moon.svg" alt="moon" width={136} height={136} className="moon" />
                            <Image src="/assets/icons/moon.svg" alt="moon" width={50} height={50} className="moon" />
                        </div>
                    </div>
                    <div className="text-white flex flex-col items-center gap-[20px] md:gap-[56px]">
                        <IsTitleOne padding="px-5 py-2 md:px-7 md:py-4" isTitle={mounted ? t("space-platform") : '...'} isTitleOne={`
    <h2 class="text-sm md:text-5xl leading-[1.5] font-semibold">
      ${mounted ? t("travel-through-space") : "..."}
      <span class="text-[var(--is-color-active)]">
        ${mounted ? t("the-universe") : "..."}
      </span>
      ${mounted ? t("we-create-solutions") : "..."}
      <span class="text-[var(--is-color-active)]">
        ${mounted ? t("solutions") : "..."}
      </span>
      ${mounted ? t("beyond-earth") : "..."}
    </h2>
  `}
                            text={mounted ? t("we-create-solutions-numbers") : "..."} />
                        <div className="flex gap-[22px] md:gap-[32px]">
                            <Btn value={mounted ? t("contact-us") : '...'} padding='px-5 py-[7px] md:px-10 md:py-[11px]' />
                            <Link href="/">
                                <div title={mounted ? t("our-portfolio") : '...'}
                                    className="flex items-center gap-1 border border-2 border-[var(--is-border-btn)] rounded-full px-5 py-[7px] md:py-[11px] text-[16px] cursor-pointer hover:bg-[var(--is-border-btn)] transition-all duration-200">
                                    <span className="mt-[0.1px]">{mounted ? t("our-portfolio") : '...'}</span>
                                    <div className="relative w-[15px] h-[15px] md:w-[24px] md:h-[24px]">
                                        <Image src="/assets/icons/network.svg" alt="ايقونة الاعمال" fill />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* <Image src="/assets/icons/test.svg" alt="صورة الكوكب" width={564} height={626} className="object-cover" /> */}
                    </div>
                </div>
            </div>
        </main >
    )
}