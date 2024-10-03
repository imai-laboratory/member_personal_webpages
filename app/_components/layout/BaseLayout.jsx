import {Footer, Header} from "@/app/_components";

export default function BaseLayout({ children, email, navItems }) {
  return (
    <div className="base-layout">
      <Header navItems={navItems} />
      <main>{children}</main>
      <Footer email={email} />
    </div>
  );
}
