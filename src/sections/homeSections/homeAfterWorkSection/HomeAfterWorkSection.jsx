import { afterWorkData } from "@/data/afterWorkData";
import styles from "./HomeAfterWorkSection.module.scss";

const HomeAfterWorkSection = ({ lang, dictionary }) => {
  // console.log("afterWorkData", afterWorkData);

  return (
    <section className="section">
      <div className="container">
        {/* HomeAfterWorkSection */}
        <h2>{dictionary.title}</h2>
      </div>
    </section>
  );
};

export default HomeAfterWorkSection;
