import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import PortfolioHeroSection from "@/sections/portfolioHeroSection/PortfolioHeroSection";
import PortfolioSection from "@/sections/portfolioSection/PortfolioSection";
import { getDictionary } from "@/helpers/getDictionary";
import { faqHomeData } from "@/data/faqHomeData";

const PortfolioPage = async ({ params }) => {
  const { lang } = await params;
  const { portfolioHeroSection, portfolioSection, homeFaqSection } =
    await getDictionary(lang);
  const faqData = faqHomeData;

  return (
    <>
      <PortfolioHeroSection lang={lang} dictionary={portfolioHeroSection} />
      <PortfolioSection lang={lang} dictionary={portfolioSection} />
      <HomeFaqSection lang={lang} dictionary={homeFaqSection} data={faqData} />
    </>
  );
};

export default PortfolioPage;
