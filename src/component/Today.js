//REACT

//CONTEXT

//COMPONENT
import Card from "../ui/Card";
import sun from "../icon/1.png";
import wind from "../icon/5.png";
import set from "../icon/3.png";
import hum from "../icon/2.png";
import land from "../icon/7.png";
import sea from "../icon/8.png";

const Today = (props) => {
  const { data } = props;
  return (
    <div className="row">
      <div className="col-xl-4 col-lg-4 col-md-4 col-xs-6 col-mn-12 p-3">
        <Card>
          <p className="fs-5 cl-2 mg-b-5">UV index</p>
          <div className="text-center">
            <img src={sun} className="w-80" alt="" />
            <p className="fs-3 cl-1">{data.current?.uvi}</p>
          </div>
        </Card>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-4 col-xs-6 col-mn-12 p-3">
        <Card>
          <p className="fs-5 cl-2 mg-b-5">Wind Status</p>
          <div className="text-center">
            <img src={wind} className="w-80" alt="" />
            <p className="fs-3 cl-1">
              {data.current ? (data.current.wind_speed * 3.6).toFixed(2) : ""}{" "}
              km/h
            </p>
          </div>
        </Card>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-4 col-xs-6 col-mn-12 p-3">
        <Card>
          <p className="fs-5 cl-2 mg-b-5">Sunrise & Sunset</p>
          <div className="text-center">
            <img src={set} className="w-80" alt="" />
            <p>
            <span className="fs-5 cl-1">
              {data.current
                ? new Date(data.current.sunrise * 1000).toLocaleDateString("en-GB", {
                    hour12: true,
                    hour: "numeric",
                    minute: "2-digit",
                  }).split(',')[1]
                : ""}
            </span>
             <span className="fs-5 cl-1"> & </span>
            <span className="fs-5 cl-1">{data.current
                ? new Date(data.current.sunset * 1000).toLocaleDateString("en-GB", {
                    hour12: true,
                    hour: "numeric",
                    minute: "2-digit",
                  }).split(',')[1]
                : ""}</span>
            </p>
          </div>
        </Card>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-4 col-xs-6 col-mn-12 p-3">
        <Card>
          <p className="fs-5 cl-2 mg-b-5">Humidity</p>
          <div className="text-center">
            <img src={hum} className="w-80" alt="" />
            <p className="fs-3 cl-1">{data.current? data.current.humidity : ''}%</p>
          </div>
        </Card>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-4 col-xs-6 col-mn-12 p-3">
        <Card>
          <p className="fs-5 cl-2 mg-b-5">Visibility</p>
          <div className="text-center">
            <img src={land} className="w-80" alt="" />
            <p className="fs-3 cl-1">{data.current? (data.current.visibility/1000): ''} km</p>
          </div>
        </Card>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-4 col-xs-6 col-mn-12 p-3">
        <Card>
          <p className="fs-5 cl-2 mg-b-5">Pressure</p>
          <div className="text-center">
            <img src={sea} className="w-80" alt="" />
            <p className="fs-3 cl-1">{data.current? data.current.pressure : ''}hPa</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Today;
