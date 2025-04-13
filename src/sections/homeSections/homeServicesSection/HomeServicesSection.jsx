import { servicesData } from "@/data/servicesData";
import styles from "./HomeServicesSection.module.scss";

const HomeServicesSection = ({ lang, dictionary }) => {
  // console.log('servicesData', servicesData);

  return (
    <section className="section">
      <div className="container">
        {/* HomeServicesSection */}
        <h2>{dictionary.title}</h2>
      </div>
    </section>
  );
};

export default HomeServicesSection;
