//REACT
import React,{Suspense} from 'react';
// ANTD vì lười :))
import 'antd/dist/antd.css'; 
//CONTEXT
import WeatherProvider from "./store/WeatherProvider";
//Component
import Loading from './ui/Loading';
//CSS
import "./App.css";
//LAZY COMPONENT
const SearchWeather = React.lazy(()=> import('./component/SearchWeather'));
const DetailWeather = React.lazy(()=> import("./component/DetailWeather"));

// import SearchWeather from "./component/SearchWeather";
// import DetailWeather from "./component/DetailWeather";


function App() {
  return (
    <WeatherProvider> 
      <div className="container">
        <div className="row">
          <div className="col col-xl-3 p-4 bg-white">
            <Suspense fallback={<Loading />}>
            <SearchWeather />
            </Suspense>
          </div>
          <div className="col col-xl-9 p-4 bg-w h-90-vh">
          <Suspense fallback={<Loading />}>
          <DetailWeather />
            </Suspense>
           
          </div>
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;
