import Link from "next/link";
import {CONFIGS} from "@/constants/configs";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center md:items-stretch bg-blue-400 p-2 h-16 sticky top-0 z-50">
      <Link href={CONFIGS.HOMEPAGE_URL}>
        <Image
          src={CONFIGS.LOGO_IMAGE}
          alt="logo"
          width={100}
          height={100}
          className="md:w-auto md:h-full"
          priority={true}
        />
      </Link>
    </header>
  );
}
