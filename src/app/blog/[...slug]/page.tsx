import { BlogPost } from "@/types/payload-types";
import RichTextParser from "@/utils/RichTextParser";
import React, { FC } from "react";

type BlogPostProps = {
  title: string;
  body: string;
};

export async function generateStaticParams() {
    const pages = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/blogPosts').then((res) => res.json())
    
    return pages.docs.map((doc:any) => ({
      slug: [doc.slug],
    }));
}
  
async function fetchBlogPost(slug: string) : Promise<BlogPost | undefined> {
    const pageRequest = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogPosts?where[slug][equals]=${slug}`);
    const pageData = await pageRequest.json();
  
    if (pageData.docs.length === 1) {
      console.log("page found");
      const page = pageData.docs[0] as BlogPost;
      return page;
    } else if (pageData.docs.length === 0){
      console.log("page not found");
      return undefined;
    } else {
      throw new Error('Something is not right with the query');
    }
  }

const BlogPostPage: FC<BlogPostProps> = async ({ title, body }) => {
    const post = await fetchBlogPost('firstBlogPost');

    if (!post) {
        return (
            <div>No Blog Post found!</div>
        )
    }

  return (
    <div>
      <h2>{post.title}</h2>
      <RichTextParser content={post.body} />
    </div>
  );
};

export default BlogPostPage;
