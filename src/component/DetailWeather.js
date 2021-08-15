//REACT
import React,{ useState, useEffect, useContext, useMemo } from "react";
// ANTD vì lười :))
import {message} from 'antd';
//CONTEXT
import { WeaterContext } from "../store/WeatherProvider";
//COMPONENT
import Today from "./Today";
import Week from './Week';
import Hour from "./Hour";
import Loading from "../ui/Loading";
//CSS
// import classes from "./DetailWeather.module.css";
//ICON
import hans from "../icon/hans.jpeg";




const key = "80a9ad015d8ce64e904fc91dc142562c";

const DetailWeather = (props) => {
  const {weather,onecall,onecallAPI} = useContext(WeaterContext);
  useEffect(()=> {
    if(weather.coord){
      let {lat,lon} = weather.coord;
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&APPID=${key}`).then(res=>{
        if(!res.ok){
          message.error('Không tìm thấy dữ liệu', 3)
          return;
        }
        res.json().then(data=> {
          onecallAPI(data)
        })
      })
    }
  },[weather,onecallAPI])
  const [li, setLi] = useState(0);

  const arr = useMemo(()=>["Today", "Week", "Hour"],[]);

  const clickHandler = (e) => {
    setLi(+e.currentTarget.dataset.id);
  };

  // trick dùng useMemo để tránh re-render 2 lần
  return useMemo(()=> {
    return (
      <>
        <div className="flex jus-bet alg-cen">
          <ul className="nav flex alg-cen jus-str fs-5">
            {arr.map((v, i) => (
              <li
                onClick={clickHandler}
                key={i}
                data-id={i}
                className={`mg-r-1 cur ${i === li ? "bor-b" : ""}`}
              >
                {v}
              </li>
            ))}
          </ul>
          <img className="round-50" src={hans} alt="" />
        </div>
        {Object.keys(onecall).length === 0 && <Loading />}
        {li === 0 && Object.keys(onecall).length !== 0 && <Today data={onecall} />}
        {li === 1 && Object.keys(onecall).length !== 0 && <Week data={onecall} />}
        {li === 2 && Object.keys(onecall).length !== 0 && <Hour data={onecall} />}
      </>
    );
  },[arr,li,onecall])
};

export default DetailWeather;
