import styles from "./HomeTeamSection.nodule.scss";

const HomeTeamSection = ({ lang, dictionary }) => {
  return (
    <section className="section">
      <div className="container">
        {/* HomeTeamSection */}
        <h2>{dictionary.title}</h2>
      </div>
    </section>
  );
};

export default HomeTeamSection;
