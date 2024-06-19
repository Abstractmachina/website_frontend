import ProjectPageContent from "@/components/ProjectPageContent";
import RenderBlocks from "@/components/RenderBlocks";
import { useArchActions } from "@/stores/archStore";
import { Project } from "@/types/payload-types";
import React from "react";

export async function generateStaticParams() {
  const pages = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/api/pages"
  ).then((res) => res.json());

  return pages.docs.map((doc: any) => ({
    slug: [doc.slug],
  }));
}

async function fetchProject(slug: string | undefined): Promise<Project | undefined> {
  const projectRequest = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects?where[slug][equals]=${slug}`, { next: { tags: ['projects'] } }
  );
  const projectData = await projectRequest.json();

  if (projectData.docs.length === 1) {
    console.log("project found");
    const page = projectData.docs[0] as Project;
    return page;
  } else if (projectData.docs.length === 0) {
    console.log("project not found");
    return undefined;
  } else {
    throw new Error("Something is not right with the query");
  }
}

async function ProjectPage({ params }: { params: { slug?: string[] } }) {

  // const{setProjectOpen} = useArchActions();
  // if no slugs are present, show home page
  if (!params.slug) {
    return <div>Architecture Home Page</div>;
    
  }

  const project = await fetchProject(params.slug? params.slug[0] : '');

  if (!project) {
    return <div>no project</div>;
    
  }
  console.log(project);
  return (
    <ProjectPageContent project={project} slug={params.slug} />
  )


  // if (!project) {

  //   return <div>Page not found</div>;
  // }


  // return (
  //   <article className="px-4 pt-4">
  //     <h2>{project.title}</h2>
  //     <h4>{project.subtitle}</h4>
  //     <div>{project.year}</div>
  //     <div>{project.location}</div>
  //     <section className="overflow-y-auto flex flex-col h-auto w-full">
  //       <RenderBlocks layout={project.layout} />
  //     </section>
  //   </article>
  // );
}

export default ProjectPage;
