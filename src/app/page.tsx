import {
  HomeExperienceSection,
  HomeFeaturesSection,
  HomeFifthSection,
  HomeFourthSection,
  HomeHeroSection,
  HomeNewestCourseSection,
} from "./_components/section-index";

export default async function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeFeaturesSection />
      <HomeNewestCourseSection />
      <HomeFourthSection />
      <HomeFifthSection />
      <HomeExperienceSection />
    </>
  );
}
