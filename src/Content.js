import React, { useState } from 'react';
import './Content.css';

function Content() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit

  const apiKey = '44aebb6e833344ed2e6e26c3102e71c8'; // Replace with your actual API key

  const fetchWeatherData = async () => {
    if (city === '') {
      setError('Please enter a city name');
      return;
    }

    try {
      const currentResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
      );
      if (!currentResponse.ok) {
        throw new Error('City not found');
      }
      const currentData = await currentResponse.json();

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unit}`
      );
      if (!forecastResponse.ok) {
        throw new Error('City not found');
      }
      const forecastData = await forecastResponse.json();

      setWeatherData(currentData);
      setForecastData(forecastData);
      setError('');
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
      setForecastData(null);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleUnitToggle = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  return (
    <div className="content">
      <div className="intro-text">
        <h1>Welcome to Your Personal Weather Hub</h1>
        <p>Stay ahead of the weather with accurate forecasts and current conditions. Enter your city to get started and plan your day with confidence.</p>
      </div>
      <div className="search-bar">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name"
          className="city-input"
        />
        <button onClick={fetchWeatherData} className="search-button">
          Search
        </button>
        <button onClick={handleUnitToggle} className="unit-toggle-button">
          Toggle °C/°F
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {weatherData && (
        <div className="weather-details">
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="Weather icon"
            className="weather-icon"
          />
          <p>Temperature: {weatherData.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
          <p>Min Temp: {weatherData.main.temp_min}°{unit === 'metric' ? 'C' : 'F'}</p>
          <p>Max Temp: {weatherData.main.temp_max}°{unit === 'metric' ? 'C' : 'F'}</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
        </div>
      )}
      {forecastData && (
        <div className="forecast-details">
          <h2>5-Day Forecast</h2>
          <div className="forecast-container">
            {forecastData.list
              .filter((item, index) => index % 8 === 0) // Use data every 8 hours to get a daily forecast
              .slice(0, 5) // Limit to 5 days
              .map((forecast, index) => (
                <div key={index} className="forecast-item">
                  <p>{new Date(forecast.dt_txt).toLocaleDateString()}</p>
                  <img
                    src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                    alt="Weather icon"
                    className="forecast-icon"
                  />
                  <p>Avg Temp: {forecast.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
                  <p>{forecast.weather[0].description}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Content;
