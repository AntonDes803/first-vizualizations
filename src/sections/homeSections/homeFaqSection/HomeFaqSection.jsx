import styles from "./HomeFaqSection.module.scss";

const HomeFaqSection = ({ lang, dictionary, data }) => {
  // console.log("data", data);

  return (
    <section className="section">
      <div className="container">
        {/* HomeFaqSection */}
        <h2>{dictionary.title}</h2>
      </div>
    </section>
  );
};

export default HomeFaqSection;
