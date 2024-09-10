import { BlogPostCardList } from "@/app/(blog)/_components/blog-post-card-list";
import { Button } from "../button";
import { IconArrowLeftFill } from "../icons/icons";
import { API_URL } from "@/config/global";

const getNewestPosts = async (count: number) => {
  const res = await fetch(`${API_URL}/blog/newest/${count}`, {
    next: { revalidate: 24 * 60 * 60 },
  });
  return res.json();
};
export const HomeNewestBlogPostSection = async () => {
  const newestBlogPosts = await getNewestPosts(4);
  return (
    <section className="container py-20">
      <div className="flex flex-col xl:flex-row gap-4 justify-center xl:justify-between items-center">
        <div className="text-center xl:text-right">
          <h2 className="text-2xl font-extrabold">
            تازه‌ترین مقاله‌های آموزشی
          </h2>
          <p className="mt-3 text-lg">
            به رایگان، به‌روزترین مقاله‌های دنیای تکنولوژی رو در اختیارت
            می‌ذاریم؛ چون پیشرفتت برامون مهمه!
          </p>
        </div>
        <Button variant="neutral" className="font-semibold" animatedIcon={true}>
          همه مقاله‌ها
          <IconArrowLeftFill fill="currentColor" />
        </Button>
      </div>
      <BlogPostCardList posts={newestBlogPosts} />
    </section>
  );
};
