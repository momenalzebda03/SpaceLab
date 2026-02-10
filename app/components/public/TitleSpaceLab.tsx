import Link from 'next/link';

export default function TitleSpaceLab() {
    return (
        <Link href="/" title='SpaceLab' className="font-Arial font-bold text-2xl bg-clip-text text-transparent gradient-text bg-[linear-gradient(90deg,var(--is-color-one-text),var(--is-color-tow-text))]">
            SpaceLab
        </Link>
    )
}