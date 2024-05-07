import { useAuth } from "../contexts/FakeAuthContext";
import LogoutBtn from "./LogoutBtn";
import styles from "./User.module.css";
function User() {
  const { user } = useAuth();
  return (
    <div className={`user ${styles.user}`}>
      <img src={user?.avatar} alt="avatar" />
      <p>Welcome, {user?.name}</p>
      <LogoutBtn />
    </div>
  );
}

export default User;
