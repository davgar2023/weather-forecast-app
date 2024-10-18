//import React from 'react';
import { useWeather } from '../hooks/useWeather';
import { CSSTransition } from 'react-transition-group';

// Forecast component to display 5-day forecast
function Forecast() {
  const { weatherData, units } = useWeather();

  // Return null if no data
  if (!weatherData || !weatherData.forecast) return null;

  // Process forecast data to get daily forecasts
  const dailyData = weatherData.forecast.list.filter((reading) =>
    reading.dt_txt.includes('12:00:00')
  );

  const unitSymbol = units === 'metric' ? '°C' : '°F';

  return (

    <CSSTransition
    in={!!weatherData}
    timeout={500}
    classNames="fade"
    unmountOnExit
  >
    <div className="forecast-container">
      {dailyData.map((day, index) => (
        <div className="forecast-card" key={index}>
          <h4>{new Date(day.dt_txt).toLocaleDateString()}</h4>
          <img
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt={day.weather[0].description}
          />
          <p>{day.weather[0].main}</p>
          <p>Temp: {day.main.temp}{unitSymbol}</p>
        </div>
      ))}
    </div>

    </CSSTransition>
  );
}

export default Forecast;