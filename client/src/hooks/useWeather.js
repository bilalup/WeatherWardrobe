import { useState } from 'react';
import axios from 'axios';

const ServerApiUrl = import.meta.env.VITE_SERVER_API_URL;

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    
    try {
      // Make a GET request to the server to fetch the weather data
      const response = await axios.get(`${ServerApiUrl}/api/weather/${city}`);
      
      // Set the weather data to the state
      setWeatherData(response.data.data);
    } catch (err) {
      // If the fetch fails, set the error to the state
      setError(err.response?.data?.error || 'Failed to fetch weather data');
      // Reset the weather data to null
      setWeatherData(null);
    } finally {
      // Set the loading state to false when the fetch is complete
      setLoading(false);
    }
  };
/*******  220bde46-b681-4a95-8aa0-dcb56b69589c  *******/

  return { weatherData, loading, error, fetchWeather };
};

export default useWeather;