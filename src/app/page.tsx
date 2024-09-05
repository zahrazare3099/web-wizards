import { CourseCardList } from "./(courses)/__components/course-card-list";
import { HomeHeroSection } from "./_components/home-hero-section";

// fetch Courses summery
async function getNewestCourses(count: number) {
  const res = await fetch(
    `https://api.classbon.com/api/courses/newest/${count}`,
    { next: { revalidate: 24 * 3600 } }
  );
  return res.json();
}

export default async function Home() {
  const newestCourses = await getNewestCourses(4);

  return (
    <>
      <HomeHeroSection />
      <section className="container pt-20">
        <div className="text-center xl:text-right">
          <h2 className="text-2xl font-extrabold">تازه ترین دوره های آموزشی</h2>
          <p>برای بروز ماندن یادگرفتن پروژه های تازه ضروریه!</p>
          <CourseCardList courses={newestCourses} />
        </div>
      </section>
    </>
  );
}
