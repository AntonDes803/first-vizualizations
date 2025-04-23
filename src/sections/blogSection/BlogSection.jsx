import { stringSplittingByDelimiter } from "@/helpers/stringSplittingByDelimiter";
import { arrOfBlogs } from "@/data/blog/arrOfBlogs";
import styles from "./BlogSection.module.scss";

const BlogSection = ({ lang, dictionary }) => {
  // console.log("arrOfBlogs", arrOfBlogs);
  const sectionTitle = dictionary.title.toUpperCase();
  const titleArray = stringSplittingByDelimiter(sectionTitle, "&");

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <h1 className={styles.title}>
          {titleArray[0]}
          <span className="ampersandColor">{titleArray[1]}</span>
          {titleArray[2]}
        </h1>
      </div>
    </section>
  );
};

export default BlogSection;
