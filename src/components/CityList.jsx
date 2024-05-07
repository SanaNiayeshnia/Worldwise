import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import propTypes from "prop-types";
import Loader from "./Loader";
import { useCities } from "../contexts/CitiesContext";

CityList.propTypes = {
  cities: propTypes.array,
  isLoading: propTypes.bool,
};

function CityList() {
  const { cities, isLoading } = useCities();
  return !isLoading ? (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </div>
  ) : (
    <Loader />
  );
}

export default CityList;
