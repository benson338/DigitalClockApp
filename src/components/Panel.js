import { useState, useEffect } from 'react';
// https://www.weatherbit.io/static/img/icons/t01d.png

const Panel = () => {
  const [state, setState] = useState({ loading: true });

  const getLocation = async () => {
    const response = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_GEOLOCATION_API_KEY}`
    );
    const responseData = await response.json();

    return responseData;
  };

  const getWeather = async () => {
    const { city, country_code2 } = await getLocation();

    fetch(
      `https://api.weatherbit.io/v2.0/current?city=${city}&country=${country_code2}&key=${process.env.REACT_APP_WEATHERBIT_API_KEY}`
    )
      .then((res) => res.json())
      .then((resData) => {
        const {
          city_name,
          app_temp,
          weather: { icon, description },
        } = resData.data[0];
        // console.log(city_name, app_temp, icon, description);
        setState({
          city: city_name,
          temperature: app_temp,
          weatherIcon: icon,
          imgDescription: description,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!state.loading) {
    return (
      <div className="panel">
        <div className="weather">
          <img
            src={`https://www.weatherbit.io/static/img/icons/${state.weatherIcon}.png`}
            alt={state.imgDescription}
          />
          <small>{`${state.temperature}°C`}</small>
        </div>
        <span>{state.city}</span>
      </div>
    );
  }

  return null;
};

export default Panel;
