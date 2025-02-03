import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    isLoading: false,
    isError: false,
    weatherData: null,
    city: localStorage.getItem("city"),
    forecast: null,
  },
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    setIsError: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
    setWeatherData: (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.weatherData = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
      state.isError = false;
      state.isLoading = false;
    },
    setWeatherForecast: (state, action) => {
      state.forecast = action.payload;
    },
  },
});

export const {
  setIsLoading,
  setIsError,
  setCity,
  setWeatherData,
  setWeatherForecast,
} = weatherSlice.actions;

export default weatherSlice;
