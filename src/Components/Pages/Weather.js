import React, { useState,useEffect } from 'react'
import '../Styles/Weather.css';
import search from '../Assets/search.png';
import cloud from '../Assets/cloud.png';
import celcius from '../Assets/thermometer.png';
import fever from '../Assets/fever.png';
import low from '../Assets/low-temperature.png';
import humidityimg from '../Assets/humidity.png';
import pressureimg from '../Assets/gauge.png';
import x from '../Assets/x-circle-regular-24.png';
import DotLoader from "react-spinners/DotLoader";

export default function Weather() {
  const[loading,setloading] = useState(true);
  const[city ,setcity] = useState('');
  const[rescity,setrescity] = useState('');
  const[temp,settemp] = useState(0);
  const[mintemp,setmintemp] = useState(0);
  const[maxtemp,setmaxtemp] = useState(0);
  const[pressure,setpressure] = useState(0);
  const[humidity,sethumidity] = useState(0);

    const key = 'ca54b60110f8729eb2d253fd0df08552';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

   
    const send = async() =>
    {
        const wapp =  await fetch(url);
        const wappres = await wapp.json();
        setrescity(wappres.name)
        settemp(wappres.main.temp)
        setmintemp(wappres.main.temp_min)
        setmaxtemp(wappres.main.temp_max)
        setpressure(wappres.main.pressure)
        sethumidity(wappres.main.humidity) 
    }

    const cancel = () => {
      settemp(0)
      setmintemp(0)
      setmaxtemp(0)
      setpressure(0)
      sethumidity(0) 
      setcity('')
      setrescity('')
    }

    useEffect(()=> {
      setloading(true)
      setTimeout(()=>{
      setloading(false)
      },2000) 
  },[])
  return (
    <div className='body'>
    {loading ? (
      <div className='loading-div'>
        <DotLoader
          color='black'
          loading={loading}
          size={50}
          margin={2}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    ):
    (<>
      <div className='weather'>
        <img src={cloud} alt='weather'></img>
      </div>
      <div className='search'>
        <input onChange={(e)=>setcity(e.target.value)} placeholder='search city' className='search-box' value={city}></input>
        <div className='search-icon'>
          <img src={search} alt='searchicon' onClick={send}></img>
        </div>
        <div className='search-icon'>
          <img src={x} alt='searchicon' onClick={cancel}></img>
        </div>
      </div>
      <div className='labels'>
        <div className='city'>
            <h1>{rescity}</h1>
        </div>
        <div className='label-images'>
          <img src={celcius} alt='' width={100}></img>
          <img src={low} alt='' width={100}></img>
          <img src={fever} alt='' width={100}></img>
          <img src={pressureimg} alt='' width={100}></img>
          <img src={humidityimg} alt='' width={100}></img>
        </div>
        <div className='label-values'>
          <h1>{temp}°c</h1>
          <h1>{mintemp}°c</h1>
          <h1>{maxtemp}°c</h1>
          <h1>{pressure} Pa</h1>
          <h1>{humidity} %</h1>
        </div>
      </div>
    </>
    )}
    </div>
  )
}
