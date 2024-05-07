import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import Logo from "./Logo";
import { useAuth } from "../contexts/FakeAuthContext";
import LogoutBtn from "./LogoutBtn";
import User from "./User";
function NavBar() {
  const { isAuthenticated } = useAuth();
  return (
    <div className={styles.navbar}>
      <Logo />
      <ul className={styles.navList}>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        {isAuthenticated ? (
          <User />
        ) : (
          <li className={styles.loginBtn}>
            <NavLink to="/login">login</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default NavBar;
