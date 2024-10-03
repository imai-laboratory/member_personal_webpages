import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./_common/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./_common/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Imai Lab Personal Webpages',
  description: 'Imai Lab Personal Webpages',
  keywords: 'Imai Lab, 今井研, Keio University, 慶應義塾大学',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
