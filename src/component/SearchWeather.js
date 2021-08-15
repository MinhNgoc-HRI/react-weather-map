//REACT
import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
// ANTD vì lười :))
import { message } from "antd";
//CONTEXT
import { WeaterContext } from "../store/WeatherProvider";
//CSS
import classes from "./SearchWeather.module.css";
//IMG
import rainimg from "../icon/rain.jpg";
//COMPONENT
import Loading from "../ui/Loading";
//CONST
const key = "80a9ad015d8ce64e904fc91dc142562c";
let init = true;

const SearchWeather = (props) => {
  const { weatherAPI, weather } = useContext(WeaterContext);
  const searchInputRef = useRef();
  useEffect(() => {
    if (init) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=nam+dinh&units=metric&APPID=${key}`
      ).then((res) => {
        if (!res.ok) {
          message.error("Không tìm thấy dữ liệu", 3);
          return;
        }
        res.json().then((data) => {
          weatherAPI(data);
        });
      });
      init = false;
    }
  }, [weatherAPI]);
  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      const value = searchInputRef.current.value;
      if (value.trim().length === 0) {
        return;
      }
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=${key}`
      ).then((res) => {
        if (!res.ok) {
          message.error("Không tìm thấy dữ liệu", 3);
          return;
        }
        res.json().then((data) => {
          message.success(`Tìm kiếm thành công`, 3);
          searchInputRef.current.value = "";
          weatherAPI(data);
        });
      });
    },
    [weatherAPI]
  );
  const day = new Date(Date.now())
    .toLocaleDateString("en-US", {
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
    .replace(" ", ", ");
  return useMemo(() => {
    return (
      <Fragment>
        <form className={classes.form} onSubmit={submitHandler}>
          <input
            className={classes["form-control"]}
            type="text"
            placeholder="Search"
            title="Press city name then Enter"
            ref={searchInputRef}
          />
        </form>
        {weather.weather ? (
          <>
            <img
              src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt=""
              style={{ width: "15rem", height: "auto" }}
            />
            <div className="fs-2 fw-bold">{weather.name}</div>
            <div className="fs-1 fw-bold">
              {Number.parseInt(weather.main.temp)}&#8451;
            </div>
            <div className="fs-5 ">{day}</div>
            <div className="fs-5 cl-1 mg-b-1">
              Overcast Clouds
              <br />
              Clouds {weather.clouds.all}%
            </div>
            <div className="ps-r jus-cen alg-cen flex">
              <div className="ps-a cl-white fs-2 fw-bold">{weather.name}</div>
              <img alt="" src={rainimg} className={`${classes.img} bdr`} />
            </div>
          </>
        ) : (
          <Loading />
        )}
      </Fragment>
    );
  }, [
    weather.clouds?.all,
    weather.main?.temp,
    weather.name,
    weather.weather,
    submitHandler,
    day,
  ]);
};

export default React.memo(SearchWeather);
