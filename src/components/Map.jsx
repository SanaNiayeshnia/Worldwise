import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import { useGeoLocate } from "../Hooks/useGeoLocate.js";
import useUrlPosition from "../Hooks/useUrlPosition.js";
import User from "./User.jsx";
import { useAuth } from "../contexts/FakeAuthContext.jsx";

function Map() {
  const [position, setPosition] = useState([40, 0]);
  const { cities } = useCities();
  const { isAuthenticated } = useAuth();

  const {
    position: geoLocatePosition,
    getPosition: getGeoLocatePosition,
    isLoadingPosition,
  } = useGeoLocate();
  const [lat, lng] = useUrlPosition();
  const navigate = useNavigate();

  useEffect(() => {
    if (lat && lng) setPosition([lat, lng]);
  }, [lat, lng]);

  useEffect(() => {
    if (geoLocatePosition) {
      setPosition([geoLocatePosition.lat, geoLocatePosition.lng]);
    }
  }, [geoLocatePosition]);

  return (
    <div className={styles.mapContainer}>
      <button className={styles.myPositionBtn} onClick={getGeoLocatePosition}>
        {isLoadingPosition ? "loading..." : "USE MY POSITION"}
      </button>
      {isAuthenticated && <User />}
      <MapContainer
        center={position}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>cityName</Popup>
        </Marker>

        {cities.map((city) => (
          <Marker position={city.position} key={city.id}>
            <Popup>{city.cityName}</Popup>
          </Marker>
        ))}
        <ChangeCenter position={position} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
