"use client";

import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";
import Image from "next/image";
import Btn from "../public/Btn";
import { useFancybox } from "@/app/hooks/useFancybox";

export default function ContactUs() {
    const { t, mounted } = useTranslationSetup();

    useFancybox();

    return (
        <section id="contact-us" className="bg-gradient-to-t from-[var(--is-background-contact-us)] to-[var(--is-background-body)]">
            <div className="py-10 md:py-30 relative padding-all-sections">
                <div className="absolute w-full h-full">
                    <Image src="/assets/icons/container-contact-us.svg" alt="contact us background" fill className="object-cover" />
                </div>
                <div className="container">
                    <div className="text-white grid md:grid-cols-2" data-aos="fade-up">
                        <a className="overflow-hidden relative w-full h-[400px] md:h-full" href="/assets/icons/contact-us.svg" data-fancybox="gallery">
                            <Image src="/assets/icons/contact-us.svg" alt="contact us" fill className="transition-all duration-500 scale-100 hover:scale-105 object-cover" />
                        </a>
                        <div className="rounded-[24px] py-[30px] md:py-[64px] px-[12px] md:px-[32px] w-full bg-gradient-to-r to-(--is-bg-lang) from-(--is-color-tow-contact-us)">
                            <div className="flex flex-col gap-[14px] md:gap-[44px]">
                                <div className="flex flex-col gap-[6px] md:gap-[16px] items-center">
                                    <h2 className="text-[var(--is-color-title-contact)] text-xs font-normal">{mounted ? t("contact-us-form") : '...'}</h2>
                                    <span className="text-white font-Changa font-bold text-2xl md:text-3xl">{mounted ? t("welcome-contact-us") : '...'}</span>
                                </div>
                                <form className="relative">
                                    <Image src="/assets/icons/air.svg" alt="air" width={696} height={404} className="absolute -top-55 md:-left-12" />
                                    <div className="grid grid-cols-2 gap-[24px]">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-medium">{mounted ? t("full-name") : '...'}</label>
                                            <div className="relative bg-[var(--is-bg-lang)] rounded-[26px] border border-2 border-[var(--is-color-in-border)] flex items-center">
                                                <input type="text" placeholder={mounted ? t("enter-full-name") : '...'} className="text-[var(--is-color-placeholder)] text-sm font-normal rounded-[16px] w-full py-[6px] px-[35px]" />
                                                <div className="absolute right-3">
                                                    <Image src="/assets/icons/profile.svg" alt="profile" width={17} height={17} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-medium">{mounted ? t("email") : '...'}</label>
                                            <div className="relative bg-[var(--is-bg-lang)] rounded-[26px] border border-2 border-[var(--is-color-in-border)] flex items-center">
                                                <input type="text" placeholder={mounted ? t("enter-email") : '...'} className="text-[var(--is-color-placeholder)] text-sm font-normal rounded-[16px] w-full py-[6px] px-[35px]" />
                                                <div className="absolute right-3">
                                                    <Image src="/assets/icons/message.svg" alt="Message" width={15} height={14} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-medium">{mounted ? t("phone-number") : '...'}</label>
                                            <div className="relative bg-[var(--is-bg-lang)] rounded-[26px] border border-2 border-[var(--is-color-in-border)] flex items-center">
                                                <input type="text" placeholder={mounted ? t("enter-phone-number") : '...'} className="text-[var(--is-color-placeholder)] text-sm font-normal rounded-[16px] w-full py-[6px] px-[35px]" />
                                                <div className="absolute right-3">
                                                    <Image src="/assets/icons/call.svg" alt="call" width={17} height={17} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-medium">{mounted ? t("serivces") : '...'}</label>
                                            <div className="relative bg-[var(--is-bg-lang)] rounded-[26px] border border-2 border-[var(--is-color-in-border)] flex items-center">
                                                <div className="relative w-full">
                                                    <select
                                                        name=""
                                                        id=""
                                                        className="appearance-none text-[var(--is-color-placeholder)] text-sm font-normal rounded-[16px] w-full py-[6px] px-[35px]"
                                                    >
                                                        <option value={mounted ? t("enter-serivces") : '...'}>
                                                            {mounted ? t("enter-serivces") : '...'}
                                                        </option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                                                        <Image src="/assets/icons/select-arraw.svg" alt="select-arraw" width={8} height={4} />
                                                    </div>
                                                </div>
                                                <div className="absolute right-3">
                                                    <Image src="/assets/icons/category.svg" alt="category" width={17} height={17} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-[24px]">
                                        <Btn icon="arraw-submit" value={mounted ? t("submit") : '...'} isStyle='flex justify-center w-full px-7 py-[7px]' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}