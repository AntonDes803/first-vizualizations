import OrderBtn from "@/components/buttons/OrderBtn/OrderBtn";
import styles from "./PortfolioIdSolutionSection.module.scss";

const PortfolioIdSolutionSection = ({ lang, dictionary, data }) => {
  // console.log("data", data);

  return (
    <section className="section">
      <div className="container">
        PortfolioIdSolutionSection
        <OrderBtn customClass="" text={dictionary.orderBtnText} />
      </div>
    </section>
  );
};

export default PortfolioIdSolutionSection;
