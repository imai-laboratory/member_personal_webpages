import Link from "next/link";
import {CONFIGS} from "@/constants/configs";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex bg-blue-400 p-2 h-16 sticky top-0 z-50 rounded-xl">
      <Link href={CONFIGS.HOMEPAGE_URL}>
        <Image
          src={CONFIGS.LOGO_IMAGE}
          alt="logo"
          width={100}
          height={100}
          className="w-auto h-full"
          priority={true}
        />
      </Link>

      <div className="md:hidden">
        <button className="text-white">Menu</button>
      </div>
    </header>
  );
}
