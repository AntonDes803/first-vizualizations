import { workProcessData } from "@/data/workProcessData";
import styles from "./HomeWorkProcessSection.module.scss";

const HomeWorkProcessSection = ({ lang, dictionary }) => {
  // console.log('workProcessData', workProcessData);

  return (
    <section className="section">
      <div className="container">
        {/* HomeWorkProcessSection */}
        <h2>{dictionary.title}</h2>
      </div>
    </section>
  );
};

export default HomeWorkProcessSection;
