import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import CityInput from "./components/cityInput";
import cityWheather from "./components/cityWheather"

function App() {
  const [city,setCity] = useState("");
  const [weather, setWeather] = useState("");

  const fetchCityWheather =() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3240fef444134d8679e3cac64db6e676`
    )
    .then((res)=>res.json())
    .then((data)=>{
      setWeather(data);
    })
  }

  return (
    <>
      <CityInput city={city} setCity={setCity} fetchCityWheather={fetchCityWheather}/>
      {}
      {}
    </>
  );
}

export default App;
