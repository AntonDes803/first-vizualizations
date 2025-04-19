import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import ServicesHeroSection from "@/sections/servicesHeroSection/ServicesHeroSection";
import ServicesSection from "@/sections/servicesSection/ServicesSection";
import { getDictionary } from "@/helpers/getDictionary";
import { servicesFaqData } from "@/data/faq/servicesFaqData";

const ServicesPage = async ({ params }) => {
  const { lang } = await params;
  const { servicesHeroSection, servicesSection, homeFaqSection } =
    await getDictionary(lang);

  return (
    <>
      <ServicesHeroSection lang={lang} dictionary={servicesHeroSection} />
      <ServicesSection lang={lang} dictionary={servicesSection} />
      <HomeFaqSection
        lang={lang}
        dictionary={homeFaqSection}
        data={servicesFaqData}
      />
    </>
  );
};

export default ServicesPage;
