import styles from "./PortfolioIdPanoramaViewerSection.module.scss";
import MultiPanoramaViewer from '@/components/MultiPanoramaViewer/MultiPanoramaViewer';

const PortfolioIdPanoramaViewerSection = ({ panoramas }) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className={styles.title}>360 Панорама</h2>
        {/* <PanoramaViewer imagePath={imagePath} previewImage={previewImage}/> */}
        <MultiPanoramaViewer panoramas={panoramas} />
      </div>
    </section>
  );
};

export default PortfolioIdPanoramaViewerSection;
