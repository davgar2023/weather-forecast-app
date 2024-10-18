import { useContext, useEffect } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';
import { fetchCurrentWeather, fetchForecast } from '../utils/api';

// Custom hook for weather data
export const useWeather = () => {
  const { weatherData, setWeatherData, units, setUnits,  city,  setCity } = useContext(WeatherContext);

  // Fetch weather data based on city
  const getWeather = async (city) => {
    try {
      const current = await fetchCurrentWeather(city, units);
      const forecast = await fetchForecast(city, units);
      setWeatherData({ current, forecast });
      setCity(city); 
    } catch (error) {
      alert(error.message);
    }
  };

   // Re-fetch weather data when units change
   useEffect(() => {
    if (city) {
      getWeather(city);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [units]);

  return { weatherData, getWeather, units, setUnits };
};
