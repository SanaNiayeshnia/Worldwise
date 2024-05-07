import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./LogoutBtn.module.css";
function LogoutBtn() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        logout();
        navigate("/");
      }}
      className={styles.logoutBtn}
    >
      logout
    </button>
  );
}

export default LogoutBtn;
