"use client";

import NavbarLeft from "@/components/NavbarLeft";
import { useArchActions, useArchProjectIsOpen } from "@/stores/archStore";
import { motion } from "framer-motion";
import Link from "next/link";

function TemplateArchitecture({
  children,
  items,
}: {
  children: React.ReactNode;
  items: { slug: string; name: string }[];
}) {
  const isProjectOpen: boolean = useArchProjectIsOpen();
  const { setProjectOpen } = useArchActions();

  // if (!items) return null;
  // console.log("template arch");
  // console.log(items);
  function setProjectClosed() {
    setProjectOpen(false);
  }

  return (
    <div className=" h-full w-full overflow-y-scroll flex">
      {/* <motion.div className="h-20 w-20 bg-red-300 fixed"
        initial={{width: '25%'}}
        animate={{
          width: isProjectOpen ? 10 : '25%',
          
        }}
        exit={{width: '25%'}}
      > <Link href={'/architecture'} onClick={setProjectClosed}>go back</Link>
      </motion.div> */}
      {/* <NavbarLeft baseUrl="architecture" items={items} /> */}
      <div id="project_content" className="flex flex-row w-full h-full">
        <motion.nav
          className="flex h-full justify-center pt-20 px-4 border-r w-1/4"
          initial={{
            width: "25%",
          }}
          animate={{
            width: isProjectOpen ? 10 : "25%",
          }}
          exit={{ width: "25%" }}
        >
          <ul className="flex flex-col gap-4">
            {items
              ? items.map((item, index: number) => {
                  return (
                    <li key={index} className="hover:bg-gray-100 text-xs">
                      <Link href={`/${"architecture"}/${item["slug"]}`}>
                        {item["name"]}
                      </Link>
                    </li>
                  );
                })
              : null}
          </ul>
        </motion.nav>

        <div className="bg-red-300 h-full w-28"></div>

        {children}
      </div>
    </div>
  );
}

export default TemplateArchitecture;
