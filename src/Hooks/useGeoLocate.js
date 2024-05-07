import { useState } from "react";
export function useGeoLocate() {
  const [position, setPosition] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function getPosition() {
    setIsLoading(true);

    if (!navigator.geolocation) {
      setError("Your browser does not support geolocation!");
      return null;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { position, getPosition, error, isLoading };
}
