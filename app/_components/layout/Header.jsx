'use client';

import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Link as Scroll } from 'react-scroll';
import {CONFIGS} from "@/app/_common/constants/configs";
import Link from "next/link";
import Image from "next/image";

export default function Header({ navItems }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const headerHeight = 64;

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar position="sticky" className="bg-blue-600" sx={{ height: `${headerHeight}px` }}>
      <Toolbar className="flex h-full justify-between items-center">
        <Typography variant="h6" className="text-white font-bold">
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
        </Typography>

        <Box className="hidden md:flex overflow-hidden max-w-[70%] h-full mr-10">
          {navItems?.map((item) => (
            <div key={item.id} className="w-auto h-full  cursor-pointer hover:bg-blue-700 px-6">
              <Scroll
                to={item.id}
                smooth={true}
                duration={500}
                offset={-headerHeight}
                className="h-full flex items-center hover:underline"
              >
                <span className="font-bold text-white">{item.title}</span>
              </Scroll>
            </div>
          ))}
        </Box>

        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className="w-14 h-14 md:hidden text-white"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
          <Box className="w-64 flex flex-col h-full overflow-y-auto bg-gradient-to-b from-blue-500 to-blue-300 text-white hover:bg-blue-700">
            <IconButton onClick={toggleDrawer} className="self-end text-white">
              <CloseIcon />
            </IconButton>
            <List>
              {navItems?.map((item) => (
                <ListItem className="hover:bg-blue-600" onClick={toggleDrawer} key={item.id}>
                  <Scroll
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-headerHeight}
                    className="cursor-pointer"
                  >
                    <ListItemText>
                      <span className="font-bold">{item.title}</span>
                    </ListItemText>
                  </Scroll>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
