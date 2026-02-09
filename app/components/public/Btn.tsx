import Image from "next/image";

interface BtnProps {
    value: string;
    isStyle: string;
    icon?: string;
}

export default function Btn({ icon = "phone", value, isStyle }: BtnProps) {
    return <button
        type="button"
        title={value}
        className={`${isStyle} rounded-full relative cursor-pointer bg-gradient-to-r from-(--is-color-one-text) to-(--is-color-tow-text) hover:from-(--is-color-tow-text) hover:to-(--is-color-one-text) transition-all duration-300 flex items-center gap-2 whitespace-nowrap`}
    >
        <span className="relative z-1 text-white text-sm md:text-base font-normal">{value}</span>
        <div className="relative w-[15px] h-[15px] md:w-[20px] md:h-[20px]">
            <Image src={`/assets/icons/${icon}.svg`} alt={icon} fill />
        </div>
    </button>
}