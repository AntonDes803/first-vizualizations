import styles from "./Loader.module.scss";

const Loader = ({ className }) => {
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <div className={styles.loader}></div>
    </div>
  );
};
export default Loader;
