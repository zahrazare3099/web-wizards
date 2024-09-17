import React from "react";
// import { CourseSummary } from "@/types/course-summary.interface";
import { BlogPostCard } from "./blog-post-card";
import { BlogPostSummary } from "@/types/blog-post-summary.interface";
import { API_URL } from "@/configs/global";

type BlogPostCardListProps = {
  posts: BlogPostSummary[];
};

const getNewestPosts = async (count: number) => {
  await new Promise((res) => setTimeout(res, 10000));
  const res = await fetch(`${API_URL}/blog/newest/${count}`, {
    next: { revalidate: 24 * 60 * 60 },
    cache: "no-store",
  });
  return res.json();
};

export const BlogPostCardList: React.FC<BlogPostCardListProps> = async ({
  posts,
}) => {
  const newestBlogPosts = await getNewestPosts(4);

  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {newestBlogPosts?.map((post: BlogPostSummary) => (
        <BlogPostCard key={`course-${post.slug}`} {...post} />
      ))}
    </div>
  );
};
