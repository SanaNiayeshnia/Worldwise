import LoginForm from "../components/LoginForm";
import NavBar from "../components/NavBar";
import styles from "./LoginPage.module.css";
function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <NavBar />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
