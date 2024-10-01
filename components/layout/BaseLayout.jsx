import {Footer, Header} from "@/components";

export default function BaseLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
