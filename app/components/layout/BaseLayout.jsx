import {Footer, Header} from "@/app/components";

export default function BaseLayout({ children, email, navItems }) {
  return (
    <div>
      <Header navItems={navItems} />
      <main>{children}</main>
      <Footer email={email} />
    </div>
  );
}
