import { Badge } from "@/app/_components/badge";
import Price from "@/app/_components/price/price";
import { CourseSummary } from "@/types/course-summery.interface";
import Image from "next/image";
import Link from "next/link";

type CourseCardProps = CourseSummary & {};

const CourseCard: React.FC<CourseCardProps> = ({
  coverImageId,
  title,
  subTitle,
  level,
  recordStatus,
  basePrice,
  duration,
  slug,
}: CourseCardProps) => {
  return (
    <div className="card">
      <figure>
        <Image
          src={`https://api.classbon.com/api/picture/${coverImageId}`}
          alt={title}
          width={550}
          height={327}
        />
      </figure>
      <div className="py-2 px-3 flex gap-2 font-semibold ">
        <Badge variant="info"> {recordStatus}</Badge>
        <Badge variant="accent">{level}</Badge>
      </div>
      <div className="card-body text-start">
        <Link href={`/course/${slug}`}>{title}</Link>
        <p>{subTitle}</p>
        <div className="flex flex-col gap-1 ">
          <span className="flex">
            <Badge variant="warning">{duration}</Badge>
          </span>
          <Price price={basePrice} />
        </div>
      </div>
      <Link className="card-footer justify-center" href={`/course/${slug}`}>
        مشاهده جزئیات دوره
      </Link>
    </div>
  );
};

export default CourseCard;
