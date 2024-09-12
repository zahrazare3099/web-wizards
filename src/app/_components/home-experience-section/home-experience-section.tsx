import { testimonials } from "@/data/testimonials";
import { TestimonialList } from "../testimonial/testimonial-list";

export const HomeExperienceSection = () => {
  return (
    <div className="relative pt-32">
      <div className="bg-primary pointer-events-none absolute bottom-0 left-1/2 aspect-square w-1/2 -translate-x-1/2 rounded-full opacity-5 -top-52 blur-3xl"></div>
      <h2 className="text-info relative z-0 mx-auto text-3xl font-extrabold block w-fit">
        <span className="-z-10 w-8 h-8 absolute bg-info opacity-25 -top-2 rounded-full inline-block -right-3"></span>
        تجربه هم مسیر های کلاسبن
      </h2>
      <p className="pb-12 text-lg text-center mt-2">
        تو اینجا تنها نیستی. ببین هم‌مسیرهات نظرشون در مورد دوره‌های کلاسبن چیه
      </p>
      <TestimonialList testimonials={testimonials} />
    </div>
  );
};
