import { useState } from 'react';
import { useWeather } from '../hooks/useWeather';

// SearchBar component for user input
function SearchBar() {
  const [city, setCity] = useState('');
  const { getWeather, units, setUnits } = useWeather();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      getWeather(city);
      setCity('');
    }
  };

  // Toggle temperature units
  const toggleUnits = () => {
    setUnits(units === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <button onClick={toggleUnits}>
        Switch to {units === 'metric' ? 'Fahrenheit' : 'Celsius'}
      </button>
    </div>
  );
}

export default SearchBar;
