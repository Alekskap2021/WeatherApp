import axios from "axios";

const useLocationService = () => {
  const _url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/country";
  const _token = "6745bcb8097c4d85a716675f0c5c828b42c8010a";

  const getCountries = async (value) => {
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + _token,
      },
      body: JSON.stringify({ query: value }),
    };

    const res = await fetch(_url, options);
    return await res.json();
  };

  const getCities = async (value) => {
    const _url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";

    const res = await axios({
      method: "POST",
      url: _url,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + _token,
      },
      data: {
        query: value,
      },
    });

    return await res;
  };

  return { getCountries, getCities };
};

export default useLocationService;
