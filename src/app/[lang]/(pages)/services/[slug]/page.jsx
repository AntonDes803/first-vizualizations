import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import HomeWorkProcessSection from "@/sections/homeSections/homeWorkProcessSection/HomeWorkProcessSection";
import ServiceIdHeroSection from "@/sections/serviceIdHeroSection/ServiceIdHeroSection";
import ServiceIdSection from "@/sections/serviceIdSection/ServiceIdSection";
import { getDictionary } from "@/helpers/getDictionary";
import { faqHomeData } from "@/data/faqHomeData";

const ServicesIdPage = async ({ params }) => {
  const { lang } = params;
  const {
    serviceIdHeroSection,
    serviceIdSection,
    homeWorkProcessSection,
    homeFaqSection,
  } = await getDictionary(lang);
  const faqData = faqHomeData;

  return (
    <>
      <ServiceIdHeroSection lang={lang} dictionary={serviceIdHeroSection} />
      <ServiceIdSection lang={lang} dictionary={serviceIdSection} />
      <HomeWorkProcessSection lang={lang} dictionary={homeWorkProcessSection} />
      <HomeFaqSection lang={lang} dictionary={homeFaqSection} data={faqData} />
    </>
  );
};

export default ServicesIdPage;
