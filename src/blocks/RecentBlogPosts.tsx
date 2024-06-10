import { fetchRecentBlogPosts } from "@/utils/serverActions";
import Link from "next/link";
import React from "react";

async function RecentBlogPostsBlock({ heading }: { heading: string }) {
  const {recentBlogPosts} = await fetchRecentBlogPosts();

  return (
    <div className="w-full">
      <h2 className="text-2xl font-medium max-w-4xl">{heading}</h2>
      <div className="grid grid-cols-3 mt-4 mx-auto max-w-4xl w-full gap-2">
      {recentBlogPosts.map((post) => {
        return (
            <Link
                key={post.id}
                href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/blog/${post.slug}`}
                className=" w-28 bg-gray-100 rounded-md p-4">
                <h4>{post.title}</h4>

            </Link>
        );
    })}
    </div>
    </div>
  );
}

export default RecentBlogPostsBlock;
