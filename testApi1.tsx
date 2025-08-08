import {  useEffect, useState, type ChangeEvent } from "react";
import axios from "axios";


interface WeatherData {
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  name: string;
  weather: { description: string }[];
}


const Counter = () => {
  const [count, setCount] = useState<WeatherData | null[]>([]);
  const [newCity, setNewCity] = useState("");

  const startApi = async () => {
    try {
      if (newCity.trim() === "")return
        const apiKey = '5a7405f0c4feeb68243b5f049d09eb67';
        const currentWeatherData = await axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(newCity)}&appid=${encodeURIComponent(apiKey)}`);
        setCount(currentWeatherData.data);
       

    } catch (err) {
      console.log("بووووووووق", err);
    }
  }

  useEffect(() => {
    startApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  const cityName = (event: ChangeEvent<HTMLInputElement>) => {
    setNewCity(event.target.value);
  };

  const sss = () => {
    console.log(count);
    // setNewCity("")
  };

  return (
    <div>
      {/* <h1>{count}</h1> */}
      <input type="text" placeholder="name City..." value={newCity} onChange={cityName} />
      <button onClick={startApi}>startApi</button>
      <button onClick={sss}>click</button>
    </div>
  );

}


export default Counter;