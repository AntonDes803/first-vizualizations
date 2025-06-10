import PortfolioHeroSection from "@/sections/portfolioHeroSection/PortfolioHeroSection";
import { Suspense } from "react";
import Loader from "@/components/Loader/Loader";
import PortfolioSection from "@/sections/portfolioSection/PortfolioSection";
import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import { getDictionary } from "@/helpers/getDictionary";
import { portfolioFaqData } from "@/data/faq/portfolioFaqData";

const PortfolioPage = async ({ params }) => {
  const { lang } = await params;
  const { portfolioHeroSection, portfolioSection, homeFaqSection } =
    await getDictionary(lang);

  return (
    <>
      <PortfolioHeroSection lang={lang} dictionary={portfolioHeroSection} />
      <Suspense fallback={<Loader />}>
        <PortfolioSection lang={lang} dictionary={portfolioSection} />
      </Suspense>
      <HomeFaqSection
        lang={lang}
        dictionary={homeFaqSection}
        data={portfolioFaqData}
      />
    </>
  );
};

export default PortfolioPage;
