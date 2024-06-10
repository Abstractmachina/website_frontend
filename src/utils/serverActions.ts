import BlogPostPreview from "@/types/blogPostPreview";
import { Footer, Header } from "@/types/payload-types"


export async function fetchGlobals() : Promise<{
    header: Header | undefined,
    footer: Footer | undefined,
  }>{
    const headerData = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/globals/header`, {
        method: 'GET',
    }).then(res => res.json());
      
    const footerData = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/globals/footer`, {
        method: 'GET',
    }).then(res => res.json());
    
      return {
        header: headerData as Header,
        footer: footerData as Footer,
      }
}

export async function fetchRecentBlogPosts() : Promise<{
    recentBlogPosts: BlogPostPreview[],
  }> {
    const recentBlogPostsData = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogPosts?limit=3&depth=0`, {
        method: 'GET',
    }).then(res => res.json());

    const recentBlogPosts = recentBlogPostsData.docs.map((blogPost:any) => {
        return {
            title: blogPost.title,
            slug: blogPost.slug,
            body: blogPost.body,
            id: blogPost.id,
        } as BlogPostPreview
    })

    return {
        recentBlogPosts: recentBlogPosts as BlogPostPreview[],
      }
}