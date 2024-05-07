import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className={styles.loader}>
      <img src="../spinner.gif" alt="spinner" />
    </div>
  );
}

export default Loader;
