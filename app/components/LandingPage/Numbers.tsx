"use client";

import { useDataInitialNumbers } from "@/app/data/initialNumbers";
import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";
import Image from "next/image";
import CountUp from "react-countup";

export default function Numbers() {
    const { i18n, mounted } = useTranslationSetup();
    const initialNumbers = useDataInitialNumbers();

    return (
        <section>
            <div className="mt-20 bg-[linear-gradient(217deg,#702BDB_0%,#CCA63C_100%)] py-13 flex flex-col">
                <div className="container">
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-15">
                        {initialNumbers.map((item, index) => (
                            <li
                                key={index}
                                className={`${mounted ? i18n.language === 'ar' ? "last:before:hidden" : "first:before:hidden" : ""} md:text-center flex flex-col items-center gap-1 text-white relative
                  before:content-[''] before:absolute before:h-full ${mounted ? i18n.language === 'ar' ? "before:left-0" : "before:-left-6" : ""} before:top-2
                  before:w-[0.1px] before:md:bg-white`}
                            >
                                <h2 className="font-Outfit font-bold text-5xl md:text-7xl">
                                    <CountUp
                                        start={0}
                                        end={item.value}
                                        duration={3}
                                        enableScrollSpy
                                        separator=","
                                    >
                                        {({ countUpRef }) => (
                                            <span ref={countUpRef} />
                                        )}
                                    </CountUp>
                                </h2>
                                <span className="font-Changa font-bold text-xl md:text-3xl">{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
