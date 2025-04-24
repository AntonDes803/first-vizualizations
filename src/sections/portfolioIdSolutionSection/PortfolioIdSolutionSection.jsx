import PortfolioIdSolutionsOnePhotoBlock from "@/components/PortfolioIdSolutionsOnePhotoBlock/PortfolioIdSolutionsOnePhotoBlock";
import PortfolioIdSolutionsTwoPhotosBlock from "@/components/PortfolioIdSolutionsTwoPhotosBlock/PortfolioIdSolutionsTwoPhotosBlock";
import OrderButton from "@/components/buttons/OrderButton/OrderButton";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./PortfolioIdSolutionSection.module.scss";

const PortfolioIdSolutionSection = ({ lang, dictionary, data }) => {
  const floorPlanData = data[0];
  const designData = data[1];
  const visualizationData = data[2];

  return (
    <section className="section">
      <div className="container">
        {floorPlanData.images.length === 2 && (
          <PortfolioIdSolutionsTwoPhotosBlock
            lang={lang}
            customClass={styles.floorPlanBlock}
            data={floorPlanData}
          />
        )}
        {floorPlanData.images.length === 1 && (
          <PortfolioIdSolutionsOnePhotoBlock
            lang={lang}
            customClass={styles.floorPlanBlock}
            data={floorPlanData}
          />
        )}

        {designData.images.length === 1 && (
          <PortfolioIdSolutionsOnePhotoBlock
            lang={lang}
            customClass={styles.designBlock}
            data={designData}
          />
        )}
        {designData.images.length === 2 && (
          <PortfolioIdSolutionsTwoPhotosBlock
            lang={lang}
            customClass={styles.designBlock}
            data={designData}
          />
        )}

        <div className={styles.visualizationBlock}>
          <h2 className={styles.visualizationBlockTitle}>
            {lang === i18n.locales[0]
              ? visualizationData.titleUk.toUpperCase()
              : visualizationData.titleEn.toUpperCase()}
          </h2>
        </div>

        <OrderButton customClass="" text={dictionary.orderBtnText} />
      </div>
    </section>
  );
};

export default PortfolioIdSolutionSection;
