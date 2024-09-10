import {
  HomeExperienceSection,
  HomeFeaturesSection,
  HomeNewestBlogPostSection,
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
      <HomeNewestBlogPostSection />
      <HomeExperienceSection />
    </>
  );
}
