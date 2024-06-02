import RenderBlocks from '@/components/RenderBlocks'
import React from 'react'

export async function generateStaticParams() {
  const pages = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/pages').then((res) => res.json())
  
  pages.docs.forEach(doc => {
    console.log(doc.slug);
  });
  return pages.docs.map((doc:any) => ({
    slug: [doc.slug],
  }));
}
  
async function getData() {

}


function Page({ params }: { params: { slug?: string[] } }) {


  if (!params.slug) {
    return (<div>Architecture Home Page</div>);
  }
  return (
    <div>
      {/* <RenderBlocks layout='' /> */}
      {params.slug}
    </div>
  );
}

export default Page