import AboutUsHeroSection from "@/sections/aboutUsHeroSection/AboutUsHeroSection";
import AboutUsSection from "@/sections/aboutUsSection/AboutUsSection";
import AboutUsValuesSection from "@/sections/aboutUsValuesSection/AboutUsValuesSection";
import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import { getDictionary } from "@/helpers/getDictionary";
import { faqHomeData } from "@/data/faqHomeData";

const AboutUsPage = async ({ params }) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const faqData = faqHomeData;

  return (
    <>
      <AboutUsHeroSection lang={lang} dictionary={dictionary} />
      <AboutUsSection lang={lang} dictionary={dictionary} />
      <AboutUsValuesSection lang={lang} dictionary={dictionary} />
      <HomeFaqSection lang={lang} dictionary={dictionary} data={faqData} />
    </>
  );
};

export default AboutUsPage;
