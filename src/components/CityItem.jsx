import { Link, useNavigate } from "react-router-dom";
import styles from "./CityItem.module.css";
import proptypes from "prop-types";
import { useCities } from "../contexts/CitiesContext";

CityItem.propTypes = {
  city: proptypes.object,
};
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function CityItem({ city }) {
  const date = new Date(city.date);
  const { deleteCity } = useCities();

  function deleteCityHandler(e) {
    e.preventDefault();
    deleteCity(city.id);
  }

  return (
    <Link
      className={styles.cityItem}
      to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
    >
      <p>{city.cityName}</p>
      <div>
        <p>
          ({months[date.getMonth()]} {date.getDate()}, {date.getFullYear()})
        </p>
        <i className="fa-solid fa-close" onClick={deleteCityHandler}></i>
      </div>
    </Link>
  );
}

export default CityItem;
