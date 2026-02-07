"use client";
import Image from 'next/image';
import { Disclosure, DisclosureButton } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
// import Btn from './Btn';

const navigation = [
    { name: 'اسعار الصرف', href: '#', current: true },
    { name: 'المزايا', href: '#', current: false },
    { name: 'من نحن', href: '#', current: false },
]

export default function Header() {
    const [open, setOpen] = useState(false);

    const [activeDropdown, setActiveDropdown] = useState<null | string>(null);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const dropdownRefs = useRef<Map<string, HTMLElement>>(new Map());

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
    ${scrollY > 200 && "shadow-xl bg-black"}
    ${isScrollingDown ? "-translate-y-full" : "translate-y-0"}
  `}
        >
            <div className="container">
                <div className="py-15 relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton onClick={() => setOpen(!open)} className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <Link href="/" title='صرافة موني'>
                        <Image src="/assets/icons/logo.svg" alt="Your Company" width={270} height={29} />
                    </Link>
                    <div className="hidden sm:ml-6 sm:block">
                        <ul className="flex gap-[24px]">
                            {navigation.map((item) => (
                                <li key={item.name} className='text-white hover:text-[var(--is-color-button)]' title={item.name}>
                                    <Link href={item.href} className='font-medium text-xl'>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='hidden md:block'>
                        <span>test</span>
                        {/* <Btn title="تحميل التطبيق الأن" href="/download-app" isShowIcon={true} /> */}
                    </div>
                </div>
            </div>

            <div className={`p-5 transition-all duration-800 absolute w-full md:hidden rounded-lg bg-white text-black ${open ? 'right-0' : 'right-[-1000px]'}`}>
                <ul className="flex flex-col gap-[4px] container">
                    {navigation.map((item) => (
                        <li className='p-2' title={item.name} key={item.name}>
                            <Link href={item.href} className='font-medium text-sm'>{item.name}</Link>
                        </li>
                    ))}
                </ul>
                <div className='flex'>
                    <span>test</span>
                    {/* <Btn title="تحميل التطبيق الأن" href="/download-app" isShowIcon={true} /> */}
                </div>
            </div>
        </Disclosure>
    )
}