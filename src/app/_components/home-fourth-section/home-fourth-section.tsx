import { Button } from "../button";
import { IconArrowLeftFill } from "../icons/icons";

export const HomeFourthSection = () => {
  return (
    <section className="HomeFourthSection px-2 my-40">
      <div className="relative pt-0 text-center">
        <div className="bg-primary pointer-events-none absolute left-1/2 aspect-square w-1/2 -translate-x-1/2 -top-96 rounded-full opacity-10 blur-3xl"></div>
        {/* <div className="bg-primary pointer-events-none absolute left-1/2 aspect-square w-1/2 -translate-x-1/2 -top-36 rounded-full opacity-20 blur-3xl"></div> */}
        <h2
          lang="en"
          className="gradient-reverse leading-[1.3] relative z-10 mx-auto inline-block text-[clamp(2rem,6vw,5.5rem)] font-black"
        >
          ReactJs & Next.js
        </h2>
        <p className="text-base-content/70  relative z-[2] py-4 m-auto md:text-3xl max-w-5xl font-light !leading-[1.7]">
          ری‌اکت و نکست‌جی‌اس برترین کتابخونه‌های فرانت‌اند و یکه‌تاز دنیای وب!
          پیشرفته‌ترین مباحث رو اینجا می تونی پیدا کنی. پس همین الان یادگیری رو
          شروع کن ما هم از ابتدای مسیر با آموزش‌های تخصصی و کاملاً کاربردی کنارت
          هستیم.
        </p>
        <div className="flex gap-3 justify-center">
          <Button
            variant="primary"
            size="large"
            className="mt-7"
            animatedIcon={true}
          >
            دوره‌های ری اکت و نکست‌ جی‌اس
            <IconArrowLeftFill fill="currentColor" />
          </Button>
          <Button
            variant="neutral"
            size="large"
            className="mt-7"
            animatedIcon={true}
          >
            مقالات ری اکت و نکست‌ جی‌اس
          </Button>
        </div>
      </div>
    </section>
  );
};
