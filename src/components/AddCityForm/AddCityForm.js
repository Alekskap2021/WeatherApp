import { useState } from "react";

import useWeatherService from "../../services/weatherService";
import useStorageService from "../../services/storageService";

import "./addCityForm.css";

const AddCityForm = () => {
  const [city, setCity] = useState("");
  const [citiesList, setCitieslist] = useState([]);

  const { getWeather, getLocation } = useWeatherService();
  const { setItem, removeAll } = useStorageService();

  const renderCitiesList = () => {
    const listClass = city && typeof city !== "object" ? "" : "hidden";
    const list = citiesList.map((cityName) => {
      return (
        <li
          onClick={() => {
            setCity(cityName);
            setCitieslist([]);
          }}
          key={cityName.lat}
        >
          {cityName.name}, {cityName.country}, {cityName.state}
        </li>
      );
    });
    return <ul className={`city-list ${listClass}`}>{list}</ul>;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    getWeather(city.lat, city.lon).then((res) => setItem("Cities", res));
    setCity("");
  };

  return (
    <>
      <div className="form-wrapper">
        <form className="addForm" action="" onSubmit={(e) => onSubmitHandler(e)}>
          <div className="search-city">
            <input
              className="addForm__city"
              type="text"
              placeholder="Введите город"
              onChange={(e) => {
                getLocation(e.target.value).then((res) => setCitieslist([...res]));
                setCity(e.target.value);
              }}
              value={city.name || city}
            />
            {renderCitiesList()}
          </div>

          <button className="addForm__submit">Добавить</button>
        </form>
        <button className="remove-all" onClick={() => removeAll()}>
          Очистить все
        </button>
      </div>
    </>
  );
};

export default AddCityForm;
