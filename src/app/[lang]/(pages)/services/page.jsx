import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import ServicesHeroSection from "@/sections/servicesHeroSection/ServicesHeroSection";
import ServicesSection from "@/sections/servicesSection/ServicesSection";
import { getDictionary } from "@/helpers/getDictionary";
import { faqHomeData } from "@/data/faqHomeData";

const ServicesPage = async ({ params }) => {
  const { lang } = await params;
  const { servicesHeroSection, servicesSection, homeFaqSection } =
    await getDictionary(lang);
  const faqData = faqHomeData;

  return (
    <>
      <ServicesHeroSection lang={lang} dictionary={servicesHeroSection} />
      <ServicesSection lang={lang} dictionary={servicesSection} />
      <HomeFaqSection lang={lang} dictionary={homeFaqSection} data={faqData} />
    </>
  );
};

export default ServicesPage;
