"use client";

import { Header, Media } from "@/types/payload-types";
import React, { FC } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/app/_components/ui/navigation-menu";
import Link from "next/link";

import { LogoT, LogoC } from '../../graphics/Logo';

type HeaderProps = {
  content?: Header;
};

const HeaderBlock: FC<HeaderProps> = ({ content }) => {

  const logo = content!.logo as Media;
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

  return (
    <div className="w-screen bg-yellow-100 py-4 px-6 flex justify-between items-center">
      <div id="logo_container" className="w-12 h-12 relative">
        <LogoT />
        <LogoC/>
        
        {/* <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${logo.url!}`}
          alt={logo.alt}
          fill
          objectFit="cover"
        /> */}
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            {content?.navLinks?.map((l) => {
              return (
                <NavigationMenuItem key={l.id}>
                  <Link href={l.link ? `${baseUrl}/${l.link}` : ''} legacyBehavior passHref>
                    <NavigationMenuLink className="">
                      {l.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default HeaderBlock;
