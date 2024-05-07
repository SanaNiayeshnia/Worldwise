import { useEffect, useState } from "react";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    login(email, password);
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/app");
  }, [isAuthenticated, navigate]);

  return (
    <form action="" className={styles.loginForm} onSubmit={submitHandler}>
      <div>
        <label htmlFor="userEmail">Email Address:</label>
        <input
          type="email"
          id="userEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="userPass">Password:</label>
        <input
          type="password"
          id="userPass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button>login</button>
    </form>
  );
}

export default LoginForm;
