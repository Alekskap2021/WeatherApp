const _baseUrl = "http://api.openweathermap.org/";
const _apiKey = "7d1067a32b1c9b1bfb2b49eeb7fc2a07";

const useWeatherService = () => {
  const getWeather = async (lat, lon) => {
    const answer = await fetch(
      `${_baseUrl}data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${_apiKey}&units=metric`
    );
    return await answer.json();
  };

  const getLocation = async (value) => {
    const answer = await fetch(`${_baseUrl}geo/1.0/direct?q=${value}&limit=5&appid=${_apiKey}`);
    return await answer.json();
  };
  return { getWeather, getLocation };
};

export default useWeatherService;

//Координаты города
//   const requestURL =
//     "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";
//   fetch(
//     "http://api.openweathermap.org/geo/1.0/direct?q=Almaty&limit=5&appid=7d1067a32b1c9b1bfb2b49eeb7fc2a07"
//   ).then((res) => res.json().then((res) => console.log(res)));
