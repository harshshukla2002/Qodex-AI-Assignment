# 🌤 React Weather Dashboard

A simple **React.js weather dashboard** that fetches real-time weather data from OpenWeatherMap API.  
It displays the **current weather** and a **5-day forecast** with temperature, humidity, wind speed, and conditions.

## 🚀 Features

✅ **Search for a city** and display weather details  
✅ **5-day forecast** starting from tomorrow  
✅ **Real-time API polling** (updates every 30 seconds)  
✅ **Weather icons & temperature conversion (Celsius/Fahrenheit)**  
✅ **Local Storage Support** (Saves last searched city)  
✅ **Redux Toolkit** for state management

---

## 📌 Project Setup

### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/harshshukla2002/Qodex-AI-Assignment.git
cd weather-app
npm install
npm start
```

---

## 🎯 My Approach

### Component-Based Architecture:

- SearchBar.js: Handles user input
- WeatherCard.js: Displays current weather

### Redux Toolkit for State Management

- Stored API responses and user search input

### Efficient API Calls

- Used Axios for API integration
- Implemented polling every 30s for updates

### Error Handling & Local Storage

- Handled invalid city errors
- Stored the last searched city for a better UX

---

Live Demo - https://weather-climate-react-app.netlify.app/
