import {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };
    case "cities/created":
      return { ...state, isLoading: false, cities: action.payload };
    case "cities/deleted":
      return { ...state, isLoading: false, cities: action.payload };
    case "rejected":
      return { ...state, error: action.payload, isLoading: false };
    default:
      throw new Error("Invalid action");
  }
}

function CitiesProvider({ children }) {
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLoading, cities } = state;

  useEffect(() => {
    dispatch({ type: "loading" });
    fetch("http://localhost:9000/cities")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "cities/loaded", payload: data }))
      .catch((err) => {
        alert(err);
        dispatch({ type: "rejected", payload: err });
      });
  }, []);

  function createCity(newCity) {
    dispatch({ type: "loading" });
    fetch("http://localhost:9000/cities", {
      method: "POST",
      body: JSON.stringify(newCity),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "cities/created", payload: [...cities, data] });
      })
      .catch((err) => {
        alert(err);
        dispatch({ type: "rejected", payload: err });
      });
  }

  function deleteCity(id) {
    dispatch({ type: "loading" });
    fetch(`http://localhost:9000/cities/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        dispatch({
          type: "cities/deleted",
          payload: cities.filter((city) => city.id !== id),
        });
      })
      .catch((err) => {
        alert(err);
        dispatch({ type: "rejected", payload: err });
      });
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const c = useContext(CitiesContext);
  if (c === undefined)
    throw new Error("CitiesContext was used outside the contextProvider!");
  return c;
}

export { CitiesProvider, useCities };
