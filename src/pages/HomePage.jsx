import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "./HomePage.module.css";

function Homepage() {
  return (
    <div className={styles.homePage}>
      <NavBar />
      <section className={styles.contentWrapper}>
        <h1 className={styles.title}>You travel the world.</h1>
        <h1 className={styles.subtitle}>
          WorldWise keeps track of your adventures.
        </h1>
        <h3>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h3>
        <Link className="start-btn" to="/app">
          START TRACKING NOW
        </Link>
      </section>
    </div>
  );
}

export default Homepage;
