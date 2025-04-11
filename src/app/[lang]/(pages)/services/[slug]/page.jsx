import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import HomeWorkProcessSection from "@/sections/homeSections/homeWorkProcessSection/HomeWorkProcessSection";
import ServiceIdHeroSection from "@/sections/serviceIdHeroSection/ServiceIdHeroSection";
import ServiceIdSection from "@/sections/serviceIdSection/ServiceIdSection";
import { getDictionary } from "@/helpers/getDictionary";
import { faqHomeData } from "@/data/faqHomeData";

const ServicesIdPage = async ({ params }) => {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const faqData = faqHomeData;

  return (
    <>
      <ServiceIdHeroSection lang={lang} dictionary={dictionary} />
      <ServiceIdSection lang={lang} dictionary={dictionary} />
      <HomeWorkProcessSection lang={lang} dictionary={dictionary} />
      <HomeFaqSection lang={lang} dictionary={dictionary} data={faqData} />
    </>
  );
};

export default ServicesIdPage;
