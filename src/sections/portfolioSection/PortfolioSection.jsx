import PortfolioFilter from "@/components/PortfolioFilter/PortfolioFilter";

const PortfolioSection = ({ lang, dictionary }) => {
  return (
    <section className="section" id="portfolioSection">
      <div className="container">
        <PortfolioFilter lang={lang} dictionary={dictionary} />
      </div>
    </section>
  );
};

export default PortfolioSection;
