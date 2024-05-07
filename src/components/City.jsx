import { useNavigate, useParams } from "react-router-dom";
import styles from "./City.module.css";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function City() {
  const { id } = useParams();
  const [currentCity, setCurrentCity] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    async function getCity() {
      try {
        setIsLoading(true);
        const res = await fetch(`http://localhost:9000/cities/${id}`);
        const data = await res.json();
        setCurrentCity(data);
      } catch (err) {
        throw new Error(err);
      } finally {
        setIsLoading(false);
      }
    }
    getCity();
  }, [id]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={styles.city}>
      <div className={styles.cityName}>
        <p className={styles.title}>CITY NAME</p>
        <p className={styles.content}>{currentCity.cityName}</p>
      </div>
      <div>
        <p className={styles.title}>
          YOU WENT TO {currentCity.cityName.toUpperCase()} ON
        </p>
        <p className={styles.content}>{currentCity.date}</p>
      </div>
      <div>
        <p className={styles.title}>YOUR NOTE</p>
        <p className={styles.content}>{currentCity.notes}</p>
      </div>
      <div className={styles.learnMore}>
        <p className={styles.title}>LEARN MORE</p>
        <a
          className={styles.content}
          target="blank"
          href={`https://en.wikipedia.org/wiki/${currentCity.cityName}`}
        >
          Check out {currentCity.cityName} on Wikipedia
        </a>
      </div>

      <button onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left" />
        Back
      </button>
    </div>
  );
}

export default City;
