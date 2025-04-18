import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import HomeWorkProcessSection from "@/sections/homeSections/homeWorkProcessSection/HomeWorkProcessSection";
import ServiceIdHeroSection from "@/sections/serviceIdHeroSection/ServiceIdHeroSection";
import ServiceIdSection from "@/sections/serviceIdSection/ServiceIdSection";
import { getDictionary } from "@/helpers/getDictionary";
import { faqHomeData } from "@/data/faqHomeData";
import { servicesData } from "@/data/servicesData";

const ServicesIdPage = async ({ params }) => {
  const { lang, slug } = await params;
  const {
    serviceIdHeroSection,
    serviceIdSection,
    homeWorkProcessSection,
    homeFaqSection,
  } = await getDictionary(lang);

  const faqData = faqHomeData;

  const serviceData = servicesData.find((item) => item.slug === slug);

  return (
    <>
      <ServiceIdHeroSection
        lang={lang}
        dictionary={serviceIdHeroSection}
        // data={serviceData}
        service={serviceData}
      />
      <ServiceIdSection
        lang={lang}
        dictionary={serviceIdSection}
        data={serviceData}
      />
      <HomeWorkProcessSection lang={lang} dictionary={homeWorkProcessSection} />
      <HomeFaqSection lang={lang} dictionary={homeFaqSection} data={faqData} />
    </>
  );
};

export default ServicesIdPage;
