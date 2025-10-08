import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './api.css';
import { IoSearch } from "react-icons/io5";
import rainimg from "./image/rain.gif";
import sunimg from "./image/weather.gif";
import cloudimg from "./image/cloudy.gif";
import axios from 'axios';
import stormimg from "./image/storm.gif";
import { TiWeatherCloudy } from "react-icons/ti";
import { Button } from 'react-bootstrap';




const WeatherBox = () => {
  let [input, setInput] = useState()
  let [temp, setTemp] = useState()
  let [city, setCity] = useState()
  let [cloud, setCloud] = useState()
  let [tempimg, setTempimg] = useState(stormimg)

  function weather() {
    let API = "8e2dec6dc04ea5d7d2d78a2873b74dd4";
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API}`)
      .then(res => {
        let weat = res.data.main.temp

        let name = res.data.name
        let cloudall = res.data.clouds.all
        let celsius = weat - 273.15
        let result = Math.round(celsius)

        setTemp(result)
        setCity(name)
        setCloud(cloudall)


        if (result <= 25) {
          setTempimg(rainimg)
        }
        else if (result >= 24 || result <= 30) {
          setTempimg(cloudimg)
        }
        else if (result >= 31) {
          setTempimg(sunimg)
        }
      })
  }

  function resetWeather() {
    setInput('');
    setTemp();
    setCity();
    setCloud();
    setTempimg(stormimg);
  }

  return (
    <div className='main_box'>
      <div className='main_box2'>
        {/* <h2 className='title'><TiWeatherCloudy /> Weather App</h2> */}
        <div className="box1-row" style={{ marginBottom: '1.5rem' }}>
          <input
            type="text"
            placeholder="Enter city"
            value={input || ''}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={weather}><IoSearch /></button>

        </div>
        <div className="weather-glass-card">
          <img className='img'
            src={tempimg} alt='img' />
          <div className="weather-info-row">
            <div>
              <div className="info-label">City</div>
              <div className="info-value">{city || '--'}</div>
            </div>
            <div>
              <div className="info-label">Temperature</div>
              <div className="info-value">{temp || '--°C'}</div>
            </div>
            <div>
              <div className="info-label">Cloud</div>
              <div className="info-value">{cloud || '--'}</div>
            </div>

          </div>
        </div>
        <button className='reset' onClick={resetWeather} >Reset</button>
      </div>
    </div>
  )

}

export default WeatherBox;
