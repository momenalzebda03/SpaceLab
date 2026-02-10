"use client";

import IsTitle from "./IsTitle";

interface dataTitle {
    isTitle: string;
    isTitleOne: string;
    text: string;
    padding: string;
}

export default function IsTitleOne({ padding, isTitle, isTitleOne, text }: dataTitle) {
    return (
        <div data-aos="fade-up" className="text-center text-white flex flex-col justify-center items-center gap-[20px] md:gap-[16px]">
            <IsTitle padding={padding} title={isTitle} />
            <div className="md:w-[570px] flex flex-col gap-[10px] md:gap-[16px] font-Changa">
                <div dangerouslySetInnerHTML={{ __html: isTitleOne }} />
            </div>
            <span className="text-sm font-normal text-[var(--is-color-text-hero)]">{text}</span>
        </div>
    )
}