import PortfolioIdHeroSection from "@/sections/portfolioIdHeroSection/PortfolioIdHeroSection";
// import PortfolioIdVideoSection from "@/sections/portfolioIdVideoSection/PortfolioIdVideoSection";
import PortfolioIdPanoramaViewerSection from "@/sections/portfolioIdPanoramaViewerSection/PortfolioIdPanoramaViewerSection";
import PortfolioIdSolutionSection from "@/sections/portfolioIdSolutionSection/PortfolioIdSolutionSection";
import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import { getDictionary } from "@/helpers/getDictionary";
import { arrOfProjects } from "@/data/projects/arrOfProjects";
import { arrOfPortfolioIdFaqData } from "@/data/faq/arrOfPortfolioIdFaqData";

const PortfolioIdPage = async ({ params }) => {
  const { lang, slug } = await params;
  const {
    portfolioIdHeroSection,
    // portfolioIdVideoSection,
    portfolioIdSolutionSection,
    homeFaqSection,
  } = await getDictionary(lang);

  const projectIdData = arrOfProjects.find((item) => item.slug === slug);
  const projectIdFaqData = arrOfPortfolioIdFaqData.find(
    (item) => item.category === projectIdData.categoryEn
  );

  return (
    <>
      <PortfolioIdHeroSection
        lang={lang}
        dictionary={portfolioIdHeroSection}
        data={projectIdData}
      />
      {/* <PortfolioIdVideoSection
        lang={lang}
        dictionary={portfolioIdVideoSection}
        data={projectIdData}
      /> */}

      {projectIdData?.panoramaUrl && (
        <PortfolioIdPanoramaViewerSection
          // panoramas={projectIdData?.panoramaUrl}
          data={projectIdData}
          lang={lang}
        />
      )}

      <PortfolioIdSolutionSection
        lang={lang}
        dictionary={portfolioIdSolutionSection}
        data={projectIdData.solutions}
      />
      <HomeFaqSection
        lang={lang}
        dictionary={homeFaqSection}
        data={projectIdFaqData.blocks}
      />
    </>
  );
};

export default PortfolioIdPage;
