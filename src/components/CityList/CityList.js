import { useEffect, useState } from "react";
import useStorageService from "../../services/storageService";

import "./cityList.css";

const CityList = () => {
  const [weatherArr, setWeatherArr] = useState([]);
  const [wathcer, setWather] = useState(0);

  const { getItems, removeItem } = useStorageService();

  useEffect(() => {
    setWeatherArr(getItems("Cities"));

    const interval = setInterval(() => {
      setWather(getItems("Cities").length);
    }, 500);

    return () => clearInterval(interval);
  }, [wathcer]);

  const transformDate = (date) => {
    const newDate = new Date(date);
    const newDateArr = newDate.toDateString().slice(0, -5).split(` `);
    newDateArr[0] = `${newDateArr[0]},`;
    return newDateArr.join(` `);
  };

  const deleteCity = (id) => {
    setWeatherArr(weatherArr.filter(({ city }) => city.id !== id));
  };

  const renderCityWeatherList = (arr) => {
    const list = arr.map(({ city, list }) => {
      return (
        <li className="cities__list-item" key={city.id}>
          <div className="cities__list-title">
            <h2 className="city__title">
              {city.name},{city.country}
            </h2>

            <button
              className="del-city fa-regular fa-circle-xmark"
              onClick={() => removeItem("Cities", city.id)}
            ></button>
          </div>

          <ul className="city__weather-list">
            <li className="city__weather-list-item">
              <h3 className="title">{transformDate(list[1].dt_txt)}</h3>
              <img
                src={`http://openweathermap.org/img/wn/${list[1].weather[0].icon}@2x.png`}
                alt="weather icon"
              />
              <p className="descr">{list[1].weather[0].description}</p>
              <p className="tepm">Avg.temp: {Math.round(list[1].main.temp)}</p>
              <p className="press">Pressure: {list[1].main.pressure} mb</p>
              <p className="wind-speed">Wind speed: {Math.round(list[1].wind.speed)} m/s</p>
              <p className="humidity">Humidity: {list[1].main.humidity} %</p>
            </li>
            <li className="city__weather-list-item">
              <h3 className="title">{transformDate(list[9].dt_txt)}</h3>
              <img
                src={`http://openweathermap.org/img/wn/${list[9].weather[0].icon}@2x.png`}
                alt="weather icon"
              />
              <p className="descr">{list[9].weather[0].description}</p>
              <p className="tepm">Avg.temp: {Math.round(list[9].main.temp)}</p>
              <p className="press">Pressure: {list[9].main.pressure} mb</p>
              <p className="wind-speed">Wind speed: {Math.round(list[9].wind.speed)} m/s</p>
              <p className="humidity">Humidity: {list[9].main.humidity} %</p>
            </li>
            <li className="city__weather-list-item">
              <h3 className="title">{transformDate(list[17].dt_txt)}</h3>
              <img
                src={`http://openweathermap.org/img/wn/${list[17].weather[0].icon}@2x.png`}
                alt="weather icon"
              />
              <p className="descr">{list[17].weather[0].description}</p>
              <p className="tepm">Avg.temp: {Math.round(list[17].main.temp)}</p>
              <p className="press">Pressure: {list[17].main.pressure} mb</p>
              <p className="wind-speed">Wind speed: {Math.round(list[17].wind.speed)} m/s</p>
              <p className="humidity">Humidity: {list[17].main.humidity} %</p>
            </li>
            <li className="city__weather-list-item">
              <h3 className="title">{transformDate(list[25].dt_txt)}</h3>
              <img
                src={`http://openweathermap.org/img/wn/${list[25].weather[0].icon}@2x.png`}
                alt="weather icon"
              />
              <p className="descr">{list[25].weather[0].description}</p>
              <p className="tepm">Avg.temp: {Math.round(list[25].main.temp)}</p>
              <p className="press">Pressure: {list[25].main.pressure} mb</p>
              <p className="wind-speed">Wind speed: {Math.round(list[25].wind.speed)} m/s</p>
              <p className="humidity">Humidity: {list[25].main.humidity} %</p>
            </li>
            <li className="city__weather-list-item">
              <h3 className="title">{transformDate(list[33].dt_txt)}</h3>
              <img
                src={`http://openweathermap.org/img/wn/${list[33].weather[0].icon}@2x.png`}
                alt="weather icon"
              />
              <p className="descr">{list[33].weather[0].description}</p>
              <p className="tepm">Avg.temp: {Math.round(list[33].main.temp)}</p>
              <p className="press">Pressure: {list[1].main.pressure} mb</p>
              <p className="wind-speed">Wind speed: {Math.round(list[33].wind.speed)} m/s</p>
              <p className="humidity">Humidity: {list[33].main.humidity} %</p>
            </li>
          </ul>
        </li>
      );
    });

    return <ul className="cities__list">{list}</ul>;
  };

  const content = weatherArr.length ? (
    renderCityWeatherList(weatherArr)
  ) : (
    <p className="empty">Города не выбраны</p>
  );

  return <>{content}</>;
};

export default CityList;
