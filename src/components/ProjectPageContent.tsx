"use client";

import React, { FC, useEffect } from "react";
import RenderBlocks from "./RenderBlocks";
import { Project } from "@/types/payload-types";
import useArchStore from "@/stores/archStore";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, useAnimate } from "framer-motion";

type ProjectPageProps = {
  project: Project | undefined;
  slug: string[] | undefined;
};

const ProjectPageContent: FC<ProjectPageProps> = ({ project, slug }) => {
  const router = useRouter();
  const [scope, animate] = useAnimate();
  const setProjectOpen = useArchStore((state) => state.setProjectOpen);
  const isProjectOpen = useArchStore((state) => state.isProjectOpen);

  if (!project) {
    // setProjectOpen(false);
    return <div>Page not found</div>;
  }

  // useEffect(() => {}, []);
  // setProjectOpen(true);

  async function handleCloseProject() {
    setProjectOpen(false);
    // animate('#project_template', { y: 20, opacity: 0 });
    await delay(1200);
    router.push("/architecture");
  }



  return (
    <motion.article
      className={`flex flex-col flex-grow pt-4 mt-14 w-screen overflow-y-auto scrollbar-hide h-full ${isProjectOpen ? '' : ''}`}
      initial={false}
      animate={{
        // width: isProjectOpen ? '100%' : "50%",
      }}
      transition={{
        duration: 1,
        ease: "circInOut",
    }}
    >
      <Button
        id='close_project_button'
        className="fixed right-4 z-10"
        variant={"ghost"}
        onClick={handleCloseProject}>
        <X />
      </Button>
      <h2>{project.title}</h2>
      <h4>{project.subtitle}</h4>
      <div>{project.year}</div>
      <div>{project.location}</div>
      <section className="overflow-y-auto flex flex-col h-auto">
        <RenderBlocks layout={project.layout} />
      </section>
    </motion.article>
  );
};

export default ProjectPageContent;


const delay = (ms:number) => new Promise(
  resolve => setTimeout(resolve, ms)
);