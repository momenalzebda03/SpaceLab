"use client";
import Image from 'next/image';
import { Disclosure, DisclosureButton } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from "next/navigation";
import { useTranslationSetup } from '@/app/hooks/useTranslationSetup';
import { useDataNavigation } from '@/app/data/navigation';

export default function Header() {
    const { mounted, i18n } = useTranslationSetup();

    const locale = i18n.language;
    const router = useRouter();
    const pathname = usePathname();

    const [open, setOpen] = useState(false);

    const [activeDropdown, setActiveDropdown] = useState<null | string>(null);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const dropdownRefs = useRef<Map<string, HTMLElement>>(new Map());

    const navigation = useDataNavigation();

    const handleScroll = () => {
        const currentScroll = window.scrollY;
        setIsScrollingDown(currentScroll > lastScrollTop);
        setScrollY(currentScroll);

        if (currentScroll > lastScrollTop) setActiveDropdown(null);

        setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (!activeDropdown) return;

        const el = dropdownRefs.current.get(activeDropdown);
        if (el && !el.contains(event.target as Node)) setActiveDropdown(null);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("click", handleClickOutside);
        };
    }, [activeDropdown, lastScrollTop]);

    const toggleLanguage = () => {
        const newLang = locale === "ar" ? "en" : "ar";
        i18n.changeLanguage(newLang);
        const segments = pathname.split("/");
        segments[1] = newLang;
        const newPath = segments.join("/");
        router.push(newPath);
    };

    return (
        <Disclosure
            as="nav"
            className={`
    w-full
    sticky
    z-50
    transition-all
    duration-300
    top-0
    border border-b-2 border-[var(--is-border-header)]
    ${scrollY > 200 && "shadow-xl bg-black"}
    ${isScrollingDown ? "-translate-y-full" : "translate-y-0"}
  `}
        >
            <div className="container">
                <div className="py-6 relative flex items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton onClick={() => setOpen(!open)} className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className='flex gap-[24px]'>
                        <button
                            type="button"
                            title="أبدأ مشروعك"
                            className="rounded-full px-5 py-[11px] relative text-[16px] cursor-pointer bg-gradient-to-r from-(--is-color-one-text) to-(--is-color-tow-text) hover:from-(--is-color-tow-text) hover:to-(--is-color-one-text) transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                        >
                            <span className="relative z-1 text-white text-md">أبدأ مشروعك</span>
                            <Image src="/assets/icons/phone.svg" alt='phone' width={20} height={20} />
                        </button>
                        <button
                            onClick={toggleLanguage}
                            type="button"
                            className="cursor-pointer bg-[var(--is-bg-lang)] border border-2 border-[var(--is-bg-lang)] rounded-full px-3 py-[5px] relative text-[16px] cursor-pointer flex items-center gap-[8px] whitespace-nowrap"
                        >
                            <Image src="/assets/icons/lang.svg" alt='lang' width={16} height={16} />
                            <span className="relative z-1 text-white text-md">{locale.toUpperCase()}</span>
                        </button>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <ul className="flex gap-[65px]">
                            {navigation.map((item, index) => (
                                <li key={index} className='text-white hover:text-[var(--is-color-active)]' title={mounted ? item.name : '...'}>
                                    <Link href={item.href} className='font-normal text-base'>{mounted ? item.name : '...'}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link href="/" title='SpaceLab' className='font-Arial font-bold text-2xl bg-clip-text text-transparent gradient-text bg-[linear-gradient(90deg,var(--is-color-one-text),var(--is-color-tow-text))]'>
                        SpaceLab
                    </Link>
                </div>
            </div>

            <div className={`p-5 transition-all duration-800 absolute w-full md:hidden rounded-lg bg-white text-black ${open ? 'right-0' : 'right-[-1000px]'}`}>
                <ul className="flex flex-col gap-[4px] container">
                    {navigation.map((item, index) => (
                        <li key={index} className='text-white hover:text-[var(--is-color-active)]' title={mounted ? item.name : '...'}>
                            <Link href={item.href} className='font-normal text-base'>{mounted ? item.name : '...'}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Disclosure >
    )
}