'use client';

import React, { FC } from 'react'
import RenderBlocks from './RenderBlocks';
import { Project } from '@/types/payload-types';
import { useArchActions } from '@/stores/archStore';


type ProjectPageProps = {
  project: Project | undefined;
  slug: string[] | undefined;
}

const ProjectPageContent: FC<ProjectPageProps> = ({ project, slug }) => {
    
    const { setProjectOpen } = useArchActions();
    if (!project) {
        setProjectOpen(false);
        return <div>Page not found</div>;
  }
  
  if (!slug) {
    setProjectOpen(false);
    return <div>Architecture Home Page</div>;
  }
      
    setProjectOpen(true);
    
      return (
        <article className="px-4 pt-4">
          <h2>{project.title}</h2>
          <h4>{project.subtitle}</h4>
          <div>{project.year}</div>
          <div>{project.location}</div>
          <section className="overflow-y-auto flex flex-col h-auto w-full">
            <RenderBlocks layout={project.layout} />
          </section>
        </article>
      );
}

export default ProjectPageContent