import SideBar from "../components/SideBar";
import styles from "./AppPage.module.css";
import Map from "../components/Map";

function AppPage() {
  return (
    <div className={styles.appPage}>
      <SideBar />
      <Map />
    </div>
  );
}

export default AppPage;
