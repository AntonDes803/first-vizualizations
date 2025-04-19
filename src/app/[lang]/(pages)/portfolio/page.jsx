import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import PortfolioHeroSection from "@/sections/portfolioHeroSection/PortfolioHeroSection";
import PortfolioSection from "@/sections/portfolioSection/PortfolioSection";
import { getDictionary } from "@/helpers/getDictionary";
import { portfolioFaqData } from "@/data/faq/portfolioFaqData";

const PortfolioPage = async ({ params }) => {
  const { lang } = await params;
  const { portfolioHeroSection, portfolioSection, homeFaqSection } =
    await getDictionary(lang);

  return (
    <>
      <PortfolioHeroSection lang={lang} dictionary={portfolioHeroSection} />
      <PortfolioSection lang={lang} dictionary={portfolioSection} />
      <HomeFaqSection
        lang={lang}
        dictionary={homeFaqSection}
        data={portfolioFaqData}
      />
    </>
  );
};

export default PortfolioPage;
