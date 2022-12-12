const _baseUrl = "https://api.openweathermap.org/";
const _apiKey = process.env.REACT_APP_API_KEY;

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
