import React from "react";

import "./styles.css";
import { useSelector } from "react-redux";

function WeatherData({ tempType, setTempType }) {
  const { weatherData, isLoading, isError, forecast } = useSelector(
    (state) => state.weather
  );
  const date = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="weather-wrapper">
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>OOPS!!, error occured while fetching</h2>}
      {!isLoading && !isError && weatherData && (
        <div className="weather">
          <div className="change-temp-type-container">
            <p
              className={tempType === "c" ? "active" : ""}
              onClick={() => setTempType("c")}
            >
              C
            </p>
            <p
              className={tempType === "f" ? "active" : ""}
              onClick={() => setTempType("f")}
            >
              F
            </p>
          </div>
          <div className="weather-header">
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  fontSize: "25px",
                  marginBottom: "5px",
                }}
              >
                <p>{daysOfWeek[date.getDay()]}</p>
                <p>
                  {date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}
                </p>
              </div>
              <p>Today in {weatherData.name}</p>
            </div>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt=""
                style={{ width: "150%" }}
              />
              <p
                style={{
                  textAlign: "center",
                  textTransform: "capitalize",
                  fontSize: "20px",
                }}
              >
                {weatherData.weather[0].description}
              </p>
            </div>
            <div>
              <p style={{ fontSize: "30px" }}>
                {Math.floor(weatherData.main.temp)}°
              </p>
              <p>feels like {Math.floor(weatherData.main.feels_like)}°</p>
            </div>
          </div>
          <div className="weather-forecast">
            <p>Next 5 days...</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                gap: "20px",
                alignItems: "center",
                width: "90%",
                margin: "auto",
                marginBlock: "20px",
                textAlign: "center",
              }}
            >
              {forecast.map((day, index) => {
                return (
                  <div key={index}>
                    <p>{day.date}</p>
                    <img
                      src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                      alt=""
                      style={{ width: "60%" }}
                    />
                    <p>{Math.floor(day.temperature)}°</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherData;
