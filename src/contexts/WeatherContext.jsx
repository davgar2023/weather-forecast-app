import { createContext, useState } from 'react';
import propTypes from 'prop-types';
// Create WeatherContext
export const WeatherContext = createContext();

// WeatherProvider to wrap around the app
export const WeatherProvider = ({ children }) => {
  // State variables
  const [weatherData, setWeatherData] = useState(null);
  const [units, setUnits] = useState('metric');
  const [city, setCity] = useState('');

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        units,
        setUnits,
        city,
        setCity,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

WeatherProvider.propTypes = {
  children : propTypes.node.isRequired,
};
