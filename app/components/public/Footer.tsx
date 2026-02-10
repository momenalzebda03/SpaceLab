"use client";

import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";
import TitleSpaceLab from "./TitleSpaceLab";
import Image from "next/image";
import { useDataFooter } from "@/app/data/footer";
import LinksFooter from "./LinksFooter";

export default function Footer() {
    const { t, mounted } = useTranslationSetup();
    const { countrys, contactUs, otherLinks, helpCenter, socialMedia, ourServices } = useDataFooter();

    return (
        <footer className="overflow-hidden relative">
            <div className="footer-container">
                <div className="px-5 md:px-0 mt-[100px] mb-[30px]">
                    <div className="text-white grid md:grid-cols-[4fr_7fr_1fr] gap-[20px]">
                        <div className="md:w-[330px] flex flex-col gap-[24px]">
                            <div className="flex flex-col gap-[15px]">
                                <div>
                                    <TitleSpaceLab />
                                </div>
                                <span className="text-[var(--is-color-text-hero)] text-xs font-normal">{mounted ? t("footer-message") : '...'}</span>
                            </div>
                            <ul className="flex gap-[18px] flex-wrap">
                                {
                                    socialMedia.map((item, index) => {
                                        return <li key={index}>
                                            <a href={item.link} title={item.icon}>
                                                <div className="hover:opacity-[0.7] relative w-5 h-5">
                                                    <Image src={`/assets/icons/${item.icon}.svg`} alt={item.icon} fill />
                                                </div>
                                            </a>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="flex flex-col md:flex-row gap-[62px]">
                            <LinksFooter data={ourServices} parentTitle={mounted ? t("our-services") : '...'} />
                            <LinksFooter data={helpCenter} parentTitle={mounted ? t("help-center") : '...'} />
                            <LinksFooter data={otherLinks} parentTitle={mounted ? t("other-links") : '...'} />
                        </div>
                        <div className="flex md:justify-end">
                            <div className="font-normal text-base flex flex-col gap-[28px]">
                                <div className="flex">
                                    <div className="pb-[24px] border-b-2">
                                        <h2 className="font-Changa">{mounted ? t("contact-us-form") : '...'}</h2>
                                    </div>
                                </div>
                                <ul className="flex flex-col gap-[20px]">
                                    {
                                        contactUs.map((item, index) => {
                                            return <li key={index}>
                                                <a href={item.link} className="text-sm flex gap-[10px] items-center text-[var(--is-color-links-footer)] hover:text-white" title={mounted ? item.title : "..."}>
                                                    <span dir="ltr">{mounted ? item.title : "..."}</span>
                                                    <Image src={`/assets/icons/${item.icon}.svg`} alt={item.icon} width={15} height={15} />
                                                </a>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[40px] mt-[30px]">
                        <hr className="text-[var(--is-color-line-top)]" />
                        <div className="flex flex-col items-center gap-[30px]">
                            <div className="flex items-center justify-center gap-[16px]">
                                <h2 className="text-xs text-[var(--is-color-text-hero)] font-bold font-Changa">{mounted ? t("start-our-services") : '...'}</h2>
                                <ul className="flex gap-[10px] flex-wrap">
                                    {
                                        countrys.map((item, index) => {
                                            return <li key={index}>
                                                <div className="w-6 h-6 relative">
                                                    <Image src={`/assets/icons/${item}.svg`} alt="countrys" fill className="rounded-full" />
                                                </div>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                            <span className="text-center text-xs font-normal text-[var(--is-color-links-footer)]">{mounted ? t("copy-right") : '...'}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Image src="/assets/icons/air.svg" alt="air" width={696} height={404} className="object-cover absolute top-20 md:-left-12" />
        </footer>
    )
}