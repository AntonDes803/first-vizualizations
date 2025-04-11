import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import ServicesHeroSection from "@/sections/servicesHeroSection/ServicesHeroSection";
import ServicesSection from "@/sections/servicesSection/ServicesSection";
import { getDictionary } from "@/helpers/getDictionary";
import { faqHomeData } from "@/data/faqHomeData";

const ServicesPage = async ({ params }) => {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const faqData = faqHomeData;

  return (
    <>
      <ServicesHeroSection lang={lang} dictionary={dictionary} />
      <ServicesSection lang={lang} dictionary={dictionary} />
      <HomeFaqSection lang={lang} dictionary={dictionary} data={faqData} />
    </>
  );
};

export default ServicesPage;
