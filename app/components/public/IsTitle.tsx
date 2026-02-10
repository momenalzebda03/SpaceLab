interface dataTitle {
    title: string;
    padding: string;
}

export default function IsTitle({ padding, title }: dataTitle) {
    return <div className="flex">
        <div className={`${padding} font-light text-sm rounded-full bg-[var(--is-color-title)]`}>
            <h2>{title}</h2>
        </div>
    </div>
}