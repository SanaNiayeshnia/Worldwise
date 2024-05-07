import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import useUrlPosition from "../Hooks/useUrlPosition";
import Loader from "./Loader";
import DatePicker from "react-datepicker";
import { useCities } from "../contexts/CitiesContext";

function Form() {
  const [date, setDate] = useState(new Date());
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [notes, setNotes] = useState("");

  const { createCity } = useCities();
  const navigate = useNavigate();
  const [lat, lng] = useUrlPosition();
  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);

  useEffect(() => {
    if (!lat && !lng) return;
    async function fetchCityData() {
      try {
        setIsLoadingGeoCoding(true);
        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );
        const data = await res.json();
        setCityName(data.city || data.locality);
        setCountryName(data.countryName);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoadingGeoCoding(false);
      }
    }
    fetchCityData();
  }, [lat, lng]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!cityName || !date) return;
    const newCity = {
      cityName,
      country: countryName,
      emoji: "",
      date,
      notes,
      position: { lat, lng },
    };
    await createCity(newCity);
    navigate("/app");
  }

  return isLoadingGeoCoding ? (
    <Loader />
  ) : !lat && !lng ? (
    <p style={{ textAlign: "center" }}>
      👋 Start by selecting somewhere on the map.
    </p>
  ) : (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <label htmlFor="cityName">City name</label>
        <input
          type="text"
          id="cityName"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="date">When did you go to?</label>
        <DatePicker selected={date} onChange={(date) => setDate(date)} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="note">Notes about your trip to</label>
        <textarea
          id="note"
          cols="30"
          rows="3"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>

      <div className={styles.buttonsWrapper}>
        <button>add</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          <i className="fa-solid fa-arrow-left" />
          back
        </button>
      </div>
    </form>
  );
}

export default Form;
