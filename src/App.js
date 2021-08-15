//REACT

// ANTD vì lười :))
import 'antd/dist/antd.css'; 
//CONTEXT
import WeatherProvider from "./store/WeatherProvider";
//Component
import SearchWeather from "./component/SearchWeather";
import DetailWeather from "./component/DetailWeather";
//CSS
import "./App.css";

function App() {
  return (
    <WeatherProvider> 
      <div className="container">
        <div className="row">
          <div className="col col-xl-3 p-4 bg-white">
            <SearchWeather />
          </div>
          <div className="col col-xl-9 p-4 bg-w h-90-vh">
            <DetailWeather />
          </div>
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;
