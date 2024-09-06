import { homeFeatures } from "@/data/home-features";
import Feature from "../feature/feature";

export const HomeFeaturesSection = () => {
  return (
    <section className="dark:bg-base-75 mt-5">
      <div className="container py-10 px-0 md:px-5 flex flex-col lg:flex-row gap-10 xl:gap-5">
        {homeFeatures.map((item) => {
          return <Feature key={`feature-${item.title}`} {...item} />;
        })}
      </div>
    </section>
  );
};
