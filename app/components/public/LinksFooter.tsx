"use client";

import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";
import Link from "next/link";

interface Items {    
    link: string;
    title: string;
}

interface DataLinks {
    data: Items[];
    parentTitle: string;
}

export default function LinksFooter({ parentTitle, data }: DataLinks) {
    const { t, mounted } = useTranslationSetup();

    return (
        <div className="font-normal flex flex-col gap-[28px]">
            <div className="flex text-sm">
                <div className="pb-[24px] border-b-2">
                    <h2 className="font-Changa">{parentTitle}</h2>
                </div>
            </div>
            <ul className="text-xs flex flex-col gap-[20px]">
                {
                    data.map((item, index) => {
                        return <li key={index}>
                            <Link href={item.link} className="text-[var(--is-color-links-footer)] hover:text-white" title={mounted ? item.title : "..."}>
                                {mounted ? item.title : "..."}
                            </Link>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}