import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import propTypes from "prop-types";
import Loader from "./Loader";
import { useCities } from "../contexts/CitiesContext";

CountryList.propTypes = {
  cities: propTypes.array,
  isLoading: propTypes.bool,
};

function CountryList() {
  const { cities, isLoading } = useCities();

  return !isLoading ? (
    <div className={styles.countryList}>
      {cities
        .reduce((arr, city) => {
          if (!arr.includes(city.country) && city.country !== undefined)
            return [...arr, city.country];
          else return arr;
        }, [])
        .map((country, i) => (
          <CountryItem key={i}>{country}</CountryItem>
        ))}
    </div>
  ) : (
    <Loader />
  );
}

export default CountryList;
