"use client";

import NavbarLeft from "@/app/_components/NavbarLeft";
import { Button } from "@/app/_components/ui/button";
import { delay } from "@/lib/utils";
import useArchStore from "@/app/_stores/archStore";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

function TemplateArchitecture({
  children,
  items,
}: {
  children: React.ReactNode;
  items: { slug: string; name: string }[];
  }) {
  const router = useRouter();
  const isProjectOpen = useArchStore((state) => state.isProjectOpen);
  const setProjectOpen = useArchStore((state) => state.setProjectOpen)


  
  

  return (
    <motion.div
      id='project_template'
      className=" h-full w-full overflow-y-scroll flex scrollbar-hide"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}>
        {children}
    </motion.div>
  );
}

export default TemplateArchitecture;
