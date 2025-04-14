import { allBlogs } from "@/data/blog/allBlogs";
import styles from "./BlogSection.module.scss";

const BlogSection = ({ lang, dictionary }) => {
  // console.log("allBlogs", allBlogs);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">BlogSection</div>
    </section>
  );
};

export default BlogSection;
