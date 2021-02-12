import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import CityInput from "./components/cityInput";
import CityWeather from "./components/cityWheather"

function App() {
  const [city,setCity] = useState("");
  const [weather, setWeather] = useState("");

  const fetchCityWheather =async() => {
    try{
      let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3240fef444134d8679e3cac64db6e676`)
      let json = await response.json();
      let data = await json;
      
      setWeather(data);
    }catch(e){
      console.log(e)
    }
  }

  return (
    <>
      <CityInput city={city} setCity={setCity} fetchCityWheather={fetchCityWheather}/>
      <CityWeather weather={weather}/>  
    </>
  );
}

export default App;
