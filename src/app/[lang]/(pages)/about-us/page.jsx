import AboutUsHeroSection from "@/sections/aboutUsHeroSection/AboutUsHeroSection";
import AboutUsSection from "@/sections/aboutUsSection/AboutUsSection";
import AboutUsValuesSection from "@/sections/aboutUsValuesSection/AboutUsValuesSection";
import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import { getDictionary } from "@/helpers/getDictionary";
import { faqHomeData } from "@/data/faqHomeData";

const AboutUsPage = async ({ params }) => {
  const { lang } = await params;
  const {
    aboutUsHeroSection,
    aboutUsSection,
    aboutUsValuesSection,
    homeFaqSection,
  } = await getDictionary(lang);
  const faqData = faqHomeData;

  return (
    <>
      <AboutUsHeroSection lang={lang} dictionary={aboutUsHeroSection} />
      <AboutUsSection lang={lang} dictionary={aboutUsSection} />
      <AboutUsValuesSection lang={lang} dictionary={aboutUsValuesSection} />
      <HomeFaqSection lang={lang} dictionary={homeFaqSection} data={faqData} />
    </>
  );
};

export default AboutUsPage;
