'use client';
import Link from "next/link";
import { CONFIGS } from "@/constants/configs";
import Image from "next/image";
import { Link as Scroll } from 'react-scroll';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from "@nextui-org/react";
import {useEffect, useRef, useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header({ navItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(0);
  const headerHeight = 64;

  useEffect(() => {
    setMenuTop(window.scrollY + headerHeight);
  }, [isMenuOpen]);

  return (
    <Navbar position="sticky" onMenuOpenChange={setIsMenuOpen} className="bg-blue-600 p-2 top-0 z-50"
            style={{ height: `${headerHeight}px` }}>
      <NavbarContent justify="start">
        <NavbarBrand className="flex items-center max-h-full">
          <Link href={CONFIGS.HOMEPAGE_URL}>
            <Image
              src={CONFIGS.LOGO_IMAGE}
              alt="logo"
              width={120}
              height={120}
              className="object-cover"
              priority={true}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden md:flex space-x-12 pr-20 text-white font-bold items-center">
        {navItems?.map((item) => (
          <NavbarItem key={item.id}>
            <Scroll to={item.id} smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer hover:underline">
              {item.title}
            </Scroll>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="md:hidden px-4">
        <NavbarMenuToggle
          icon={isMenuOpen ? <CloseIcon className="text-white" /> : <MenuIcon className="text-white" />}
        />
      </NavbarContent>

      <NavbarMenu
        className="absolute right-0 w-1/3 bg-gradient-to-b from-blue-500 to-blue-300 z-50 max-h-[40vh]"
        style={{
          top: `${menuTop}px`,
          overflowY: 'auto',
      }}
      >
        {navItems?.map((item) => (
          <NavbarMenuItem key={item.id} className="flex p-4 justify-center">
            <Scroll
              to={item.id}
              smooth={true}
              duration={500}
              offset={-headerHeight}
              className="cursor-pointer hover:underline text-white font-bold"
            >
              {item.title}
            </Scroll>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
