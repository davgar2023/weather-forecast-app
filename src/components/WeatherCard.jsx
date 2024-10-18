
import { useWeather } from '../hooks/useWeather';

// WeatherCard component to display current weather
function WeatherCard() {
  const { weatherData, units } = useWeather();

  // Return null if no data
  if (!weatherData || !weatherData.current) return null;

  const { name, main, weather, wind } = weatherData.current;
  const unitSymbol = units === 'metric' ? '°C' : '°F';

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
      />
      <h3>{weather[0].main}</h3>
      <p>{weather[0].description}</p>
      <div className="weather-details">
        <p>Temperature: {main.temp}{unitSymbol}</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed} {units === 'metric' ? 'm/s' : 'mph'}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
