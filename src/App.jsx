import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import { WeatherProvider } from './contexts/WeatherContext';
import './App.css';

// Root App component
function App() {
  return (
    <WeatherProvider>
      <div className="app">
        <SearchBar />
        <WeatherCard />
        <Forecast />
      </div>
    </WeatherProvider>
  );
}

export default App;
