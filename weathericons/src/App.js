import React from "react";
import "./styles.css";
import WeatherIcons from "./components/WeatherIcons";
import data from "./weatherData"

const weatherCard = data.map((data, index) => {
  return (
    <WeatherIcons
    key = {index}
    img = {data.img}
    conditions = {data.conditions}
    time = {data.day}
    />
  )
})

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      {weatherCard}
    </div>
  );
}
