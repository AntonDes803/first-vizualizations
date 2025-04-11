import PortfolioIdHeroSection from "@/sections/portfolioIdHeroSection/PortfolioIdHeroSection";
import PortfolioIdSolutionSection from "@/sections/portfolioIdSolutionSection/PortfolioIdSolutionSection";
import PortfolioIdVideoSection from "@/sections/portfolioIdVideoSection/PortfolioIdVideoSection";
import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import { getDictionary } from "@/helpers/getDictionary";
import { faqHomeData } from "@/data/faqHomeData";

const PortfolioIdPage = async ({ params }) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const faqData = faqHomeData;

  return (
    <>
      <PortfolioIdHeroSection lang={lang} dictionary={dictionary} />
      <PortfolioIdVideoSection lang={lang} dictionary={dictionary} />
      <PortfolioIdSolutionSection lang={lang} dictionary={dictionary} />
      <HomeFaqSection lang={lang} dictionary={dictionary} data={faqData} />
    </>
  );
};

export default PortfolioIdPage;
