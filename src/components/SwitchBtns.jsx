import { NavLink } from "react-router-dom";
import styles from "./SwitchBtns.module.css";
function SwitchBtns() {
  return (
    <div className={styles.switchBtns}>
      <NavLink to="cities" className={`${styles.left} `}>
        CITIES
      </NavLink>
      <NavLink to="countries" className={styles.right}>
        COUNTRIES
      </NavLink>
    </div>
  );
}

export default SwitchBtns;
