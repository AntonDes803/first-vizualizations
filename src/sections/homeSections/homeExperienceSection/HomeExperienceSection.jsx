import styles from "./HomeExperienceSection.module.scss";

const HomeExperienceSection = ({ lang, dictionary }) => {
  return (
    <section className="section">
      <div className="container">
        {/* HomeExperienceSection */}
        <h2>{dictionary.title}</h2>
      </div>
    </section>
  );
};

export default HomeExperienceSection;
