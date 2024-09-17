"use client";
import { Badge } from "@/app/_components/badge";
import { IconArrowLeftFill, IconClock } from "@/app/_components/icons/icons";
import { Price } from "@/app/_components/price";
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
        <div className="flex items-center justify-between pt-3">
          <Badge variant="warning">
            <IconClock width={16} height={16} />
            {duration}
          </Badge>
          <Price price={basePrice} size="small" />
        </div>
      </div>
      <Link
        className="card-footer justify-center animated-icon"
        href={`/courses/${slug}`}
      >
        مشاهده جزئیات دوره
        <IconArrowLeftFill fill="currentColor" />
      </Link>
    </div>
  );
};

export default CourseCard;
