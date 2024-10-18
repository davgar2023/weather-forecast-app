
# 🌤️ Weather Forecasting App using React and OpenWeatherMap API

Welcome to the **Weather Forecasting App**—a sleek, responsive, and user-friendly application built with **React** and powered by the **OpenWeatherMap API**. This app allows users to search for weather updates for any city, switch between temperature units, and view a detailed 5-day forecast, complete with dynamic backgrounds that reflect the current weather conditions. 


## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Design and Responsiveness](#design-and-responsiveness)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## 🌟 Features

- **Search Functionality**: Find current weather conditions and a 5-day forecast for any city.
- **Celsius/Fahrenheit Toggle**: Switch between Celsius and Fahrenheit units with a single click.
- **Detailed Weather Information**: Displays temperature, weather description, humidity, wind speed, and weather icons.
- **5-Day Forecast**: Get a glance at the weather for the upcoming days.
- **Dynamic Backgrounds**: Visually appealing backgrounds change based on weather conditions.
- **Error Handling**: Provides feedback for invalid inputs and handles API errors gracefully.
- **Fully Responsive**: Optimized for all devices, including desktops, tablets, and smartphones.

## 🛠️ Technology Stack

- **Frontend**: [React](https://reactjs.org/), [Context API](https://reactjs.org/docs/context.html) for state management, [CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- **API**: [OpenWeatherMap API](https://openweathermap.org/api) for fetching weather data


## 🏁 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** (version 12 or higher)
- **[npm](https://www.npmjs.com/)** (comes bundled with Node.js)
- **[OpenWeatherMap API Key](https://home.openweathermap.org/users/sign_up)**

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/davgar2023/git init.git
   cd weather-forecast-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   Sign up at [OpenWeatherMap](https://openweathermap.org/api) to obtain an API key.  
   Create a `.env` file in the root directory with the following content:

   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

4. **Run the App**:

   Start the development server with:

   ```bash
   npm start dev
   ```

   Your app will be running on `  http://localhost:5173`.

## 📂 Project Structure

The project is organized as follows:

```
weather-forecast-app/
├── public/
│   └── 
├── src/
│   ├── components/               # Reusable UI components
│   ├── contexts/                 # Context API for state management
│   ├── hooks/                    # Custom React hooks
│   ├── utils/                    # Utility functions, including API logic
│   ├── App.jsx                   # Root component
│   ├── main.jsx                  # Entry point
│   └── App.css                   # Global styles
├── .env                          # Environment variables
├── .gitignore                    # Ignored files
├── package.json                  # Project dependencies and scripts
└── README.md                     # Project documentation
```

## 💻 Design and Responsiveness

- **Responsive Layout**: Built with a mobile-first approach using CSS Flexbox and Grid.
- **Dynamic Backgrounds**: Changes background based on weather conditions for enhanced visual appeal.
- **User Experience**: Designed with intuitive inputs, clear typography, and immediate feedback for a seamless user experience.
  
## Code Explanation

 - **App.jsx**: This is the root component that brings together the different parts of the app. It uses useWeather to fetch the weather data and passes it down to other components.
 - **components/SearchBar.jsx**: A component that allows the user to input a city name and submit it to retrieve weather data.
 - **components/WeatherCard.jsx**: Displays the current weather conditions, including temperature, humidity, wind speed, and a weather icon.
 - **components/Forecast.jsx**: Displays the 5-day weather forecast with minimal details such as temperature and weather conditions.
 - **hooks/useWeather.jsx**: A custom hook that handles all the API calls, fetching the current weather and the 5-day forecast.
 - **utils/api.js**: Contains functions for interacting with the OpenWeatherMap API, making it easier to fetch data from the API without repeating the code.



## 📜 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute this software as long as the license remains intact.

## 🙏 Acknowledgements

- **[React](https://reactjs.org/)** for providing an amazing JavaScript library for building user interfaces.
- **[OpenWeatherMap](https://openweathermap.org/)** for their comprehensive and easy-to-use weather API.
- **[Netlify](https://www.netlify.com/)** for providing a seamless deployment experience.
