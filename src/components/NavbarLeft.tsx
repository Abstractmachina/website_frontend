'use client';

import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useArchProjectIsOpen } from "@/stores/archStore";



type NavbarLeftProps = {
    baseUrl: string
    items: { slug:string, name:string}[]
};

const NavbarLeft: FC<NavbarLeftProps> = ({ baseUrl, items }) => {
  const isProjectOpen: boolean = useArchProjectIsOpen();
  
  console.log(isProjectOpen);
    
  return (
    <motion.nav className="flex h-full justify-center pt-20 px-4 border-r w-1/4"
      initial={{
        width: '25%',
      }}
      animate={{
        width: isProjectOpen ?  10 : '25%',
      }}
    exit={{width: '25%'}}>
      <ul className="flex flex-col gap-4">
        {items.map((item, index: number) => {
          return (
            <li key={index} className="hover:bg-gray-100 text-xs">
              <Link href={`/${baseUrl}/${item["slug"]}`}>{item["name"]}</Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

NavbarLeft.propTypes = {};

export default NavbarLeft;
