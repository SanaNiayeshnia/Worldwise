import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "./PricingPage.module.css";
function PricingPage() {
  return (
    <div className={styles.pricingPage}>
      <NavBar />
      <section className={styles.contentWrapper}>
        <div>
          <h1>Simple Pricing</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            eum officiis rerum, asperiores exercitationem nesciunt commodi,
            fugiat odit, molestias consectetur voluptatem soluta nam cumque quae
            labore eius. Minus repellat eum mollitia atque officia, tenetur
            magnam numquam dignissimos hic excepturi placeat porro eaque debitis
            facilis? Commodi est eaque asperiores quasi vel!
          </p>
          <Link to="/app" className="start-btn">
            START TRACKING NOW
          </Link>
        </div>
        <img src="../img-2.jpg" alt="pricing" />
      </section>
    </div>
  );
}

export default PricingPage;
