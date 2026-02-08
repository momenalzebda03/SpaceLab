"use client";

import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function OurSuccessPartenrs() {
    const { t, mounted } = useTranslationSetup();

    const items = ["SmartSys", "WebForce", "AppMakers", "CodeLab", "DevStudio", "TechCorp", "InnovateX", "FutureSpace", "DigitalHub", "CloudTech", "SmartSys", "WebForce", "AppMakers", "CodeLab", "DevStudio", "TechCorp", "InnovateX", "FutureSpace", "DigitalHub", "CloudTech"];

    return (
        <section>
            <div className="flex flex-col gap-[70px] mt-[56px]">
                <div className="container">
                    <div className="text-white flex justify-center text-center">
                        <div className="flex flex-col gap-[40px] w-[751px]">
                            <h2 className="font-Changa font-semibold text-4xl">{mounted ? t("our-success-partners") : '...'}</h2>
                            <span className="text-lg font-normal text-[var(--is-color-text-hero)]">{mounted ? t("our-success-partners-description") : '...'}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <Swiper
                        breakpoints={{
                            0: { slidesPerView: 3 },
                            700: { slidesPerView: 8 },
                        }}
                        spaceBetween={30}
                        centeredSlides={true}
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        className="mySwiper"
                    >
                        {items.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="py-[16px] px-[32px] flex justify-center items-center rounded-[10px] border border-[var(--is-border-btn)] rounded-lg">
                                    <span className="text-lg font-normal text-[var(--is-color-text-hero)]">{item}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section >
    )
}