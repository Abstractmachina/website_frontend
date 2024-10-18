"use client";

import React, { FC, MouseEventHandler, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { delay } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import ProjectTableItem from "./projectNavbar/ProjectTableItem";
import useArchStore from "../_stores/archStore";
import useWindowDimensions from "@/_hooks/useWindowDimensions";

type NavbarLeftProps = {
  baseUrl: string;
  items: { slug: string; name: string }[] | null;
};

const NavbarLeft: FC<NavbarLeftProps> = ({ baseUrl, items }) => {
  // const router = useRouter();
  const isProjectOpen = useArchStore((state) => state.isProjectOpen);
  const setProjectOpen = useArchStore((state) => state.setProjectOpen);
  const setTrackpointAX = useArchStore((state) => state.setTrackpointAX);
  const { x } = useWindowDimensions();
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTrackpointAX(isProjectOpen ? 88 : (x!/4));
  }, [isProjectOpen, x])
  
  // async function handleOpenProject(slug: string) {
  //   setProjectOpen(true);
  //   await delay(800);
  //   router.push(`/${baseUrl}/${slug}`);
  // }

  

  if (!items) return null;

  return (
    <motion.nav
      className={`flex flex-row h-full`}
      animate={{
        // minWidth: isProjectOpen ? "0%" : "50%",
      }}
      transition={{
        duration: 2,
        ease: "circInOut",
      }}
    >
      <motion.div
        className="flex flex-col border-r overflow-clip justify-center"
        initial={false}
        animate={{
          width: isProjectOpen ? 88 : (x!/4),
        }}
        // exit={{ width: '25%' }}
        transition={{
          duration: 1,
          ease: "circInOut",
        }}>
        <motion.ul
          className=""
          initial={false}
          animate={{
            opacity: isProjectOpen ? 0 : 1,
          }}
          // exit={{ width: '25%' }}
          transition={{
            duration: 1,
            ease: "circInOut",
          }}
        >
          {items.map((item, index: number) => {
            return (
              <li key={index} className="hover:bg-gray-100 text-xs">
                {/* <Button
                  variant={"ghost"}
                  onMouseEnter={handleOnMouseEnter}
                  onClick={() => handleOpenProject(item["slug"])}
                  className=""
                  ref={ref}
                >
                  {item["name"]}
                </Button> */}
                <ProjectTableItem baseUrl={baseUrl } item={item} />
              </li>
            );
          })}
        </motion.ul>
      </motion.div>
      <motion.div
        className="h-full border-r"
        initial={false}
        animate={{
          width: isProjectOpen ? 20 : x!/4,
        }}
        // exit={{ width: '25%' }}
        transition={{
          duration: 1,
          ease: "circInOut",
        }}
      ></motion.div>
    </motion.nav>
  );
};

export default NavbarLeft;
