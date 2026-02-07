"use client";
import { usePathname } from 'next/navigation';
import "./assets/css/globals.css";
import Header from "./components/public/Header";
// import AOSWrapper from "./component/AOSWrapper";
// import Footer from "./component/public/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const hideLayoutPrefixes = ['/download-app'];

  const showLayout = !hideLayoutPrefixes.some(prefix =>
    pathname.startsWith(prefix)
  );

  return (
    <html lang="ar" dir="rtl">
      <body
      >
        <link rel="icon" type="image/svg+xml" href="/assets/icons/favicon.svg" />
        <title>Money Sand</title>
        {/* <AOSWrapper /> */}
        {showLayout && <Header />}
        {children}
        {/* {showLayout && <Footer />} */}
      </body>
    </html >
  );
}