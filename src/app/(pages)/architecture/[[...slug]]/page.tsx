import { fetchProjectBySlug, fetchProjectIndex } from "@/lib/fetch/projects";
import React from "react";
import ProjectPageContent from "./_components/ProjectPageContent";

export async function generateStaticParams() {
  const index =await fetchProjectIndex();

  return index?.map((item) => ([{ slug: item.slug }]));
}





async function ProjectPage({ params }: { params: { slug?: string[] } }) {
  const { slug } = params;


  // if no slugs are present, show home page
  if (!slug) {
    return <div className="w-full h-full mt-14">Architecture Home Page</div>;
    
  }

  const project = await fetchProjectBySlug(params.slug? params.slug[0] : '');

  if (!project) {
    return <div>no project</div>;
    
  }
  return (
    <ProjectPageContent project={project} slug={params.slug} />
  )
}

export default ProjectPage;
