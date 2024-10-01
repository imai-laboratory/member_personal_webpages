import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: '%s | Imai Lab Personal Webpages',
  description: 'Imai Lab Personal Webpages',
  metadataBase: {
    title: 'Imai Lab Personal Webpages',
    description: 'Imai Lab Personal Webpages',
    keywords: 'Imai Lab, Keio University, Imai, Lab, Personal Webpages',
  }
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
