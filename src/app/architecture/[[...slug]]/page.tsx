import React from 'react'

export async function generateStaticParams() {
    const pages = await fetch('https://.../posts').then((res) => res.json())
   
    return pages.map((post) => ({
      slug: post.slug,
    }))
}
  
async function getData() {
    
}


function Page({ params }: { params: { slug?: string[] } }) {
  return (
    <div>Page</div>
  )
}

export default Page