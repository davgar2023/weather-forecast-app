const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
// Fetch current weather data
export const fetchCurrentWeather = async (city, units) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  if (!response.ok) throw new Error('City not found');
  return response.json();
};

// Fetch 5-day weather forecast
export const fetchForecast = async (city, units) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  if (!response.ok) throw new Error('Forecast data not available');
  return response.json();
};
