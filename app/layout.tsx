import "./assets/css/globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                <title>SpaceLab</title>
                {children}
            </body>
        </html>
    );
}