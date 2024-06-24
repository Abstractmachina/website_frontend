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

  useEffect(() => {
    // set to true when component mounts, so it also expands when not coming from architecture page. (e.g. reload)
    setProjectOpen(true);
  }, []);
  if (!project) {
    // setProjectOpen(false);
    return <div>Page not found</div>;
  }


  async function handleCloseProject() {
    setProjectOpen(false);
    // animate('#project_template', { y: 20, opacity: 0 });
    await delay(1200);
    router.push("/architecture");
  }



  return (
    <article
      className={`flex flex-col flex-grow pt-4 px-4 mt-14 overflow-y-auto h-full lg:px-40 xl:px-80 2xl:px-96`}
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
      <section className="overflow-y-auto flex flex-col scrollbar-hide ">
        <RenderBlocks layout={project.layout} />
      </section>
    </article>
  );
};

export default ProjectPageContent;


const delay = (ms:number) => new Promise(
  resolve => setTimeout(resolve, ms)
);