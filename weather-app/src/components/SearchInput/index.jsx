import React, { useState } from "react";

import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../../redux/reducer";

const SearchInput = ({ fetchWeatherData }) => {
  const { city } = useSelector((state) => state.weather);
  const [text, setText] = useState(city);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setCity(text));
    localStorage.setItem("city", text);
    fetchWeatherData(text);
  };

  return (
    <form onSubmit={handleSearch} className="form-container">
      <input
        type="text"
        placeholder="search city...."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchInput;
