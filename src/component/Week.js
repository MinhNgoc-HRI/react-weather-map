import { useState } from "react";
import Card from "../ui/Card";

const Week = (props) => {
  const { data } = props;
  const [selected, setSelected] = useState(0);

  const selectedHandler = (e) => {
    setSelected(+e.currentTarget.dataset.id);
  };
  return (
    <>
      <div className="row mg-b-1">
        {data.daily
          ? data.daily.map((v, i) => (
              <div
                className={`col-xl-3 col-lg-3 col-md-3 col-xs-6 col-mn-12 pd-1 cur`}
                key={i}
                data-id={i}
                onClick={selectedHandler}
              >
                <Card className={`${i === selected ? "bg-blue" : ""}`}>
                  <p className="fs-5 cl-2 mg-b-5">
                    {new Date(v.dt * 1000).toLocaleDateString("en-GB", {
                      weekday: "short",
                      day: "numeric",
                      month: "numeric",
                    })}
                  </p>
                  <div className="text-center">
                    <img
                      src={`https://openweathermap.org/img/w/${v.weather[0].icon}.png`}
                      alt=""
                    />
                    <p className="fs-3 cl-1">
                      {Number.parseInt(v.temp.min)}° -{" "}
                      {Number.parseInt(v.temp.max)}°
                    </p>
                  </div>
                </Card>
              </div>
            ))
          : ""}
      </div>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-mn-12">
          <Card>
            {data.daily ? (
              <div className="row">
                <h3 style={{width: '100%'}} className='fs-3 cl-1'>
                  {new Date(data.daily[selected].dt * 1000).toLocaleDateString(
                    "en-GB",
                    {
                      weekday: "short",
                      month: "numeric",
                      day: "numeric",
                    }
                  )}
                </h3>
                <div className="col-xl-6">
                  <p className='fs-5 cl-1'>Temp current : {data.daily[selected].temp.morn}&#8451;</p>
                  <p className='fs-5 cl-1'>Temp : {Number.parseInt(data.daily[selected].temp.min)}&#8451; - {Number.parseInt(data.daily[selected].temp.max)}&#8451;</p>
                  <p className='fs-5 cl-1'>Humidity : {data.daily[selected].humidity}%</p>
                  <p className='fs-5 cl-1'>Wind speed : {(data.daily[selected]['wind_speed'] * 3.6).toFixed(2)}km/h</p>
                </div>
                <div className="col-xl-6">
                  <p className='fs-5 cl-1'>Sunrise : {new Date(data.daily[selected].sunrise * 1000).toLocaleDateString("en-GB", {
                    hour12: true,
                    hour: "numeric",
                    minute: "2-digit",
                  }).split(',')[1]}</p>
                  <p className='fs-5 cl-1'>Sunset : {new Date(data.daily[selected].sunset * 1000).toLocaleDateString("en-GB", {
                    hour12: true,
                    hour: "numeric",
                    minute: "2-digit",
                  }).split(',')[1]}</p>
                  <p className='fs-5 cl-1'>Description : {data.daily[selected].weather[0].description}</p>
                  <p className='fs-5 cl-1'>Atmospheric pressure : {data.daily[selected].pressure}hPa</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </Card>
        </div>
      </div>
    </>
  );
};

export default Week;
