import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "@/shared/styles/styles.css";

const montserrat = Montserrat({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Стоматологическая клиника Смайл-А",
    description:
        "Стоматологическая клиника Смайл-А в Санкт-Петербурге в Выборгском районе",
    keywords: [
        "стоматология акции",
        "стоматология",
        "спб",
        "санкт-петербурге",
        "озерки",
        "смайл-а",
        "стоматология в озерках",
        "стоматология на просвещения",
        "спб акции стоматологии",
        "стоматология выборгский район",
        "стоматология на луначарского",
    ],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="ru">
            <head>
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="57x57"
                    href="/apple-touch-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="114x114"
                    href="/apple-touch-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="72x72"
                    href="/apple-touch-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="144x144"
                    href="/apple-touch-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="60x60"
                    href="/apple-touch-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="120x120"
                    href="/apple-touch-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="76x76"
                    href="/apple-touch-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="152x152"
                    href="/apple-touch-icon-152x152.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon-196x196.png"
                    sizes="196x196"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon-96x96.png"
                    sizes="96x96"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon-32x32.png"
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon-16x16.png"
                    sizes="16x16"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon-128.png"
                    sizes="128x128"
                />
                <meta name="application-name" content="&nbsp;" />
                <meta name="msapplication-TileColor" content="#FFFFFF" />
                <meta
                    name="msapplication-TileImage"
                    content="/mstile-144x144.png"
                />
                <meta
                    name="msapplication-square70x70logo"
                    content="/mstile-70x70.png"
                />
                <meta
                    name="msapplication-square150x150logo"
                    content="/mstile-150x150.png"
                />
                <meta
                    name="msapplication-wide310x150logo"
                    content="/mstile-310x150.png"
                />
                <meta
                    name="msapplication-square310x310logo"
                    content="/mstile-310x310.png"
                />
                <meta property="og:image" content="<generated>" />
                <meta property="og:image:type" content="<generated>" />
                <meta property="og:image:width" content="<generated>" />
                <meta property="og:image:height" content="<generated>" />
            </head>
            <body className={montserrat.className}>
                {children}
                <Script id="yandex-metrika" strategy="afterInteractive">
           {`
                (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],
                k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(103953677, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });
        `}
       </Script>
    <noscript>
    <div>
        <div 
            style={{
                position: 'absolute', 
                left: '-9999px',
                width: '1px',
                height: '1px',
                backgroundImage: 'url("https://mc.yandex.ru/watch/103953677")'
            }}
            aria-hidden="true"
        />
    </div>
</noscript>
            </body>
        </html>
    );
}