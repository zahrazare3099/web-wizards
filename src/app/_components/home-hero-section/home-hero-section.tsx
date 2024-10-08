"use client";
import Image from "next/image";
import { Button } from "../button";
import { IconArrowLeftFill } from "../icons/icons";

export const HomeHeroSection = () => {
  return (
    <section className="bg-hero-pattern mt-5 bg-no-repeat bg-center md:bg-center lg:bg-left xl:bg-left">
      <div className="container flex flex-col-reverse items-center xl:flex-row">
        <div className="flex-1 flex flex-col gap-5 pb-5 text-center xl:text-right">
          <h3 className="text-xl dark:text-info xl:text-2xl">
            خوش اومدی به ...
          </h3>
          <h1 className="font-black text-3xl lg:text-3xl xl:text-4xl gradient">
            مسیر صعود به قله های برنامه نویسی
          </h1>
          <p className="font-bold text-lg leading-8 text-wrap">
            هر جای مسیر برنامه نویسی که باشی، با همراهی استاد های با تجربه ما می
            تونی بدون محدودیت به قله های بالاتر صعود کنی، ما همیشه هواتو داریم.
          </p>
          <div className="flex gap-4 py-4 justify-center lg:justify-start">
            <Button variant="primary" size="large" className="animated-icon">
              مشاهده دوره ها
              <IconArrowLeftFill fill="currentColor" />
            </Button>
            <Button variant="neutral" size="large">
              مشاوره برنامه نویسی
            </Button>
          </div>
          <Image
            src="/images/frameworks.png"
            alt="frameworksPicture"
            className="grayscale mt-4 opacity-70 m-auto xl:m-0"
            height={39}
            width={412}
          />
        </div>
        <Image
          src="/images/programmer-landing.svg"
          alt="programmerLanding"
          width={702}
          height={521}
        />
      </div>
    </section>
  );
};
