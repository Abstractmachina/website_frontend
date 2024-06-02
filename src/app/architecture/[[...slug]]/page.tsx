import RenderBlocks from '@/components/RenderBlocks'
import { Page } from '@/types/payload-types';
import React from 'react'

export async function generateStaticParams() {
  const pages = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/pages').then((res) => res.json())
  
  return pages.docs.map((doc:any) => ({
    slug: [doc.slug],
  }));
}


async function fetchPage(slug: string) : Promise<Page | undefined> {
  const pageRequest = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/pages?where[slug][equals]=${slug}`);
  const pageData = await pageRequest.json();


  if (pageData.docs.length === 1) {
    console.log("page found");
    const page = pageData.docs[0] as Page;
    return page;
  } else if (pageData.docs.length === 0){
    console.log("page not found");
    return undefined;
  } else {
    throw new Error('Something is not right with the query');
  }
}

async function ProjectPage({ params }: { params: { slug?: string[] } }) {


  // if no slugs are present, show home page
  if (!params.slug) {
    return (<div>Architecture Home Page</div>);
  }

  const page = await fetchPage(params.slug[0]);

  if (!page) {
    return (
      <div>Page not found</div>
    )
  }

  return (
    <section className='overflow-y-auto flex flex-col h-auto'>
      <RenderBlocks layout={page.layout} />
    </section>
  );
}

export default ProjectPage;