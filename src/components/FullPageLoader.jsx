import styles from "./FullPageLoader.module.css";
import Loader from "./Loader";
function FullPageLoader() {
  return (
    <div className={styles.fullPageLoader}>
      <Loader />
    </div>
  );
}

export default FullPageLoader;
