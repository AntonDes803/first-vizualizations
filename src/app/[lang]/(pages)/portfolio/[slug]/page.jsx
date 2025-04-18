import PortfolioIdHeroSection from "@/sections/portfolioIdHeroSection/PortfolioIdHeroSection";
import PortfolioIdSolutionSection from "@/sections/portfolioIdSolutionSection/PortfolioIdSolutionSection";
import PortfolioIdVideoSection from "@/sections/portfolioIdVideoSection/PortfolioIdVideoSection";
import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import { getDictionary } from "@/helpers/getDictionary";
import { faqHomeData } from "@/data/faqHomeData";

const PortfolioIdPage = async ({ params }) => {
  const { lang, slug } = await params;
  const {
    portfolioIdHeroSection,
    portfolioIdVideoSection,
    portfolioIdSolutionSection,
    homeFaqSection,
  } = await getDictionary(lang);

  const faqData = faqHomeData;

  return (
    <>
      <PortfolioIdHeroSection lang={lang} dictionary={portfolioIdHeroSection} />
      <PortfolioIdVideoSection
        lang={lang}
        dictionary={portfolioIdVideoSection}
      />
      <PortfolioIdSolutionSection
        lang={lang}
        dictionary={portfolioIdSolutionSection}
      />
      <HomeFaqSection lang={lang} dictionary={homeFaqSection} data={faqData} />
    </>
  );
};

export default PortfolioIdPage;
