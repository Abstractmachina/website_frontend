"use client";

import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import useArchStore from "@/stores/archStore";
import { delay } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

type NavbarLeftProps = {
  baseUrl: string;
  items: { slug: string; name: string }[];
};

const NavbarLeft: FC<NavbarLeftProps> = ({ baseUrl, items }) => {
  const router = useRouter();
  const isProjectOpen = useArchStore((state) => state.isProjectOpen);
  const setProjectOpen = useArchStore((state) => state.setProjectOpen);

  async function handleOpenProject(slug: string) {
    setProjectOpen(true);
    await delay(800);
    router.push(`/${"architecture"}/${slug}`);
  }

  if (!items) return null;

  return (
    <motion.nav
      className={`flex flex-row h-full w-[50%] ${
        isProjectOpen ? "" : ""
      }`}
      animate={{
        // minWidth: isProjectOpen ? "0%" : "50%",
      }}
      transition={{
        duration: 2,
        ease: "circInOut",
      }}
    >
      <motion.div
        className="flex flex-col border-r pt-20 overflow-clip"
        initial={false}
        animate={{
          width: isProjectOpen ? "8rem" : "50%",
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
                <Button
                  variant={"ghost"}
                  onClick={() => handleOpenProject(item["slug"])}
                  className=""
                >
                  {item["name"]}
                </Button>
              </li>
            );
          })}
        </motion.ul>
      </motion.div>
      <motion.div
        className="h-full border-r"
        initial={false}
        animate={{
          width: isProjectOpen ? "1rem" : "50%",
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

NavbarLeft.propTypes = {};

export default NavbarLeft;
