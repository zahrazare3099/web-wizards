import { CourseSummary } from "@/types/course-summery.interface";
import CourseCard from "./course-card";

type CourseCardListProps = {
  courses: CourseSummary[];
};
export const CourseCardList: React.FC<CourseCardListProps> = ({
  courses,
}: CourseCardListProps) => {
  return (
    <div className="flex gap-5 flex-wrap justify-center xl:justify-start mt-7">
      {courses.map((course) => (
        <CourseCard key={`course-${course.slug}`} {...course} />
      ))}
    </div>
  );
};
