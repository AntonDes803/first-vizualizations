import AboutUsHeroSection from "@/sections/aboutUsHeroSection/AboutUsHeroSection";
import AboutUsSection from "@/sections/aboutUsSection/AboutUsSection";
import AboutUsValuesSection from "@/sections/aboutUsValuesSection/AboutUsValuesSection";
import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import { getDictionary } from "@/helpers/getDictionary";
import { aboutUsFaqData } from "@/data/faq/aboutUsFaqData";

const AboutUsPage = async ({ params }) => {
  const { lang } = await params;
  const {
    aboutUsHeroSection,
    aboutUsSection,
    aboutUsValuesSection,
    homeFaqSection,
  } = await getDictionary(lang);

  return (
    <>
      <AboutUsHeroSection lang={lang} dictionary={aboutUsHeroSection} />
      <AboutUsSection lang={lang} dictionary={aboutUsSection} />
      <AboutUsValuesSection lang={lang} dictionary={aboutUsValuesSection} />
      <HomeFaqSection
        lang={lang}
        dictionary={homeFaqSection}
        data={aboutUsFaqData}
      />
    </>
  );
};

export default AboutUsPage;
