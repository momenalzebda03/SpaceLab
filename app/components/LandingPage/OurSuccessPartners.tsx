"use client";

import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useDataOurSuccess } from "@/app/data/itemsOurSuccess";

export default function OurSuccessPartenrs() {
    const { t, mounted } = useTranslationSetup();
    const items = useDataOurSuccess();

    return (
        <section id="our-partners">
            <div className="flex flex-col gap-[30px] md:gap-[70px] mt-[56px]">
                <div className="container">
                    <div className="text-white flex justify-center text-center">
                        <div className="flex flex-col gap-[20px] md:gap-[40px] md:w-[751px]">
                            <h2 className="font-Changa font-semibold text-xl md:text-4xl">{mounted ? t("our-success-partners") : '...'}</h2>
                            <span className="text-xs md:text-lg font-normal text-[var(--is-color-text-hero)]">{mounted ? t("our-success-partners-description") : '...'}</span>
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