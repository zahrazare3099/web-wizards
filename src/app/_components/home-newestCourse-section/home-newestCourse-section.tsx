import { CourseCardList } from "@/app/(courses)/__components/course-card-list";
import { API_URL } from "@/configs/global";

// fetch Courses summery
async function getNewestCourses(count: number) {
  const res = await fetch(`${API_URL}/courses/newest/${count}`, {
    next: { revalidate: 24 * 3600 },
  });
  return res.json();
}

export const HomeNewestCourseSection = async () => {
  const newestCourses = await getNewestCourses(4);
  return (
    <section className="container pt-20">
      <div className="text-center xl:text-right space-y-3">
        <h2 className="text-2xl font-extrabold">تازه ترین دوره های آموزشی</h2>
        <p>برای بروز ماندن یادگرفتن پروژه های تازه ضروریه!</p>
        <CourseCardList courses={newestCourses} />
      </div>
    </section>
  );
};
