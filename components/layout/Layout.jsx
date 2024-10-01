import Head from 'next/head';
import {Footer, Header} from "@/components";


export default function Layout({ children, title = "Default Title", description = "Default Description" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
