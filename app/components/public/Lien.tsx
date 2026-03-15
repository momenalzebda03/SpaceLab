"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Lien() {
    const { scrollYProgress } = useScroll();

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="fixed top-[35%] right-12 h-[300px] w-[5px] rounded-full bg-[var(--is-color-tow-card)] overflow-hidden">
            <motion.div
                style={{ height }}
                className="absolute top-0 right-0 w-full rounded-full bg-[var(--is-color-card-three-1)]"
            />
        </div>
    );
}