import NavBar from "../components/NavBar";
import styles from "./ProductPage.module.css";

function ProductPage() {
  return (
    <div className={styles.productPage}>
      <NavBar />
      <section className={styles.contentWrapper}>
        <img src="../img-1.jpg" alt="product" />
        <div>
          <h1>About WorldWise</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            consequatur ut beatae, aperiam consequuntur doloremque similique
            quas. Rem aliquam necessitatibus enim beatae amet, minus assumenda
            maiores. Eos animi tenetur sint nam hic odit officia? Repellendus
            eveniet enim vero beatae quasi consectetur? Ex voluptatem quod fugit
            libero recusandae eveniet deleniti minima?
          </p>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
