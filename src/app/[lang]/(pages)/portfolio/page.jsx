import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import PortfolioHeroSection from "@/sections/portfolioHeroSection/PortfolioHeroSection";
import PortfolioSection from "@/sections/portfolioSection/PortfolioSection";
import { getDictionary } from "@/helpers/getDictionary";
import { faqHomeData } from "@/data/faqHomeData";

const PortfolioPage = async ({ params }) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const faqData = faqHomeData;

  return (
    <>
      <PortfolioHeroSection lang={lang} dictionary={dictionary} />
      <PortfolioSection lang={lang} dictionary={dictionary} />
      <HomeFaqSection lang={lang} dictionary={dictionary} data={faqData} />
    </>
  );
};

export default PortfolioPage;
