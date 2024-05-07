import propTypes from "prop-types";
import styles from "./CountryItem.module.css";
import { Link } from "react-router-dom";

CountryItem.propTypes = {
  children: propTypes.string,
};

function CountryItem({ children }) {
  return <Link className={styles.countryItem}>{children}</Link>;
}

export default CountryItem;
