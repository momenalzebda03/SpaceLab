import { useDataNavigation } from "@/app/data/navigation";
import { useTranslationSetup } from "@/app/hooks/useTranslationSetup";

export default function Links() {
    const { mounted } = useTranslationSetup();
    const navigation = useDataNavigation();

    return navigation.map((item, index) => (
        <li key={index} className='lg:text-white hover:text-[var(--is-color-active)]' title={mounted ? item.name : '...'}>
            <a href={item.href} className='text-sm font-normal'>{mounted ? item.name : '...'}</a>
        </li>
    ))
}