import { whyMeData } from "@/data/whyMeData";
import styles from "./HomeWhyMeSection.module.scss";

const HomeWhyMeSection = ({ lang, dictionary }) => {
  // console.log("whyMeData", whyMeData);

  return (
    <section className="section">
      <div className="container">
        {/* HomeWhyMeSection */}
        <h2>{dictionary.title}</h2>
      </div>
    </section>
  );
};

export default HomeWhyMeSection;
