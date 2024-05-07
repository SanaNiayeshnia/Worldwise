import styles from "./SideBar.module.css";
import SwitchBtns from "./SwitchBtns";
import Footer from "./footer";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <main className={styles.main}>
        <div>
          <SwitchBtns />
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default SideBar;
