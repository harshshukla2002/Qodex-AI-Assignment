import axios from "axios";

import "./App.css";
import SearchInput from "./components/SearchInput";
import WeatherData from "./components/WeatherData";
import {
  setIsError,
  setIsLoading,
  setWeatherData,
  setWeatherForecast,
} from "./redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

const API_KEY = "6232f5c6ce9568579010cc0f724c0e96";

function App() {
  const { city } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const intervalRef = useRef(null);
  const [tempType, setTempType] = useState("c");

  const fetchWeatherData = async (text = city) => {
    dispatch(setIsLoading());
    try {
      const weather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_KEY}&units=${
          tempType === "c" ? "metric" : "imperial"
        }`
      );
      const forecast = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${text}&appid=${API_KEY}&units=${
          tempType === "c" ? "metric" : "imperial"
        }`
      );
      const dailyForecasts = forecast.data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );

      const today = new Date();
      const todayDate = today.getDate();

      const forecastData = dailyForecasts
        .filter((day) => new Date(day.dt * 1000).getDate() !== todayDate) // Remove today's data
        .slice(0, 5) // Take next 5 days

        .map((day) => ({
          date: new Date(day.dt * 1000).toLocaleDateString("en-US", {
            weekday: "short",
          }),
          temperature: day.main.temp,
          weather: day.weather[0].description,
          icon: day.weather[0].icon,
        }));
      dispatch(setWeatherData(weather.data));
      dispatch(setWeatherForecast(forecastData));
    } catch (error) {
      console.error(error);
      dispatch(setIsError());
    }
  };

  useEffect(() => {
    if (city) {
      intervalRef.current = setTimeout(() => fetchWeatherData(), 30000);
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  useEffect(() => {
    fetchWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempType]);

  return (
    <div className="App">
      <SearchInput fetchWeatherData={fetchWeatherData} />
      <WeatherData tempType={tempType} setTempType={setTempType} />
    </div>
  );
}

export default App;
