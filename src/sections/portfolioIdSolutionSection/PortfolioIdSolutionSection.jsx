import OrderButton from "@/components/buttons/OrderButton/OrderButton";
import styles from "./PortfolioIdSolutionSection.module.scss";

const PortfolioIdSolutionSection = ({ lang, dictionary, data }) => {
  // console.log("data", data);

  return (
    <section className="section">
      <div className="container">
        PortfolioIdSolutionSection
        <OrderButton customClass="" text={dictionary.orderBtnText} />
      </div>
    </section>
  );
};

export default PortfolioIdSolutionSection;
