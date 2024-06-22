"use client";

import NavbarLeft from "@/components/NavbarLeft";
import { Button } from "@/components/ui/button";
import { delay } from "@/lib/utils";
import useArchStore from "@/stores/archStore";
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


  
  async function handleOpenProject(item : any) {
    setProjectOpen(true);
    await delay(1000);
    router.push(`/${"architecture"}/${item["slug"]}`)
  }

  return (
    <div className=" h-full w-full overflow-y-scroll flex scrollbar-hide">
      <div id="project_content" className="flex flex-row w-full h-full">
        <motion.nav
          id="table_of_content"
          className="flex h-full justify-center pt-20 px-4 border-r w-1/4"
          initial={false}
          animate={{
            width: isProjectOpen ? 10 : "25%",
          }}
          // exit={{ width: "25%" }}
        >
          <ul className="flex flex-col gap-4">
            {items
              ? items.map((item, index: number) => {
                  return (
                    <li key={index} className="hover:bg-gray-100 text-xs">
                      <Button variant={'ghost'} onClick={() => handleOpenProject(item)}>
                        {item["name"]}
                      </Button>
                    </li>
                  );
                })
              : null}
          </ul>
        </motion.nav>

        {/* <div className="bg-red-300 h-full w-28"></div> */}

        {children}
      </div>
    </div>
  );
}

export default TemplateArchitecture;
