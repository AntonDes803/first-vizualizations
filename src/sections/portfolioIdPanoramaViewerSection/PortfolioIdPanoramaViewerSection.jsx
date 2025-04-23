import { i18n } from "@/dictionaries/i18n.config";
import styles from "./PortfolioIdPanoramaViewerSection.module.scss";
import MultiPanoramaViewer from '@/components/MultiPanoramaViewer/MultiPanoramaViewer';

const PortfolioIdPanoramaViewerSection = ({ data, lang }) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className={styles.title}>{lang === i18n.locales[0] ? data.panoramaTitleUk : data.panoramaTitleEn}</h2>
        {/* <PanoramaViewer imagePath={imagePath} previewImage={previewImage}/> */}
        <MultiPanoramaViewer data={data} lang={lang} />
      </div>
    </section>
  );
};

export default PortfolioIdPanoramaViewerSection;
