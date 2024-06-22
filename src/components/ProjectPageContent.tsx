"use client";

import React, { FC, useEffect } from "react";
import RenderBlocks from "./RenderBlocks";
import { Project } from "@/types/payload-types";
import useArchStore from "@/stores/archStore";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAnimate } from "framer-motion";

type ProjectPageProps = {
  project: Project | undefined;
  slug: string[] | undefined;
};

const ProjectPageContent: FC<ProjectPageProps> = ({ project, slug }) => {
  const router = useRouter();
  const [scope, animate] = useAnimate();
  const setProjectOpen = useArchStore((state) => state.setProjectOpen);
  if (!project) {
    setProjectOpen(false);
    return <div>Page not found</div>;
  }

  if (!slug) {
    setProjectOpen(false);
    return <div>Architecture Home Page</div>;
  }

  // useEffect(() => {}, []);
  setProjectOpen(true);

  async function handleCloseProject() {
    setProjectOpen(false);
    await delay(1000);
    router.push("/architecture");
  }
  return (
    <article className="px-4 pt-4">
      <Button
        className="fixed right-4 z-10"
        variant={"ghost"}
        onClick={handleCloseProject}>
        <X />
      </Button>
      <h2>{project.title}</h2>
      <h4>{project.subtitle}</h4>
      <div>{project.year}</div>
      <div>{project.location}</div>
      <section className="overflow-y-auto flex flex-col h-auto w-full">
        <RenderBlocks layout={project.layout} />
      </section>
    </article>
  );
};

export default ProjectPageContent;


const delay = (ms:number) => new Promise(
  resolve => setTimeout(resolve, ms)
);