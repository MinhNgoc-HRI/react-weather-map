import {createContext, useCallback, useReducer} from 'react'
export const WeaterContext = createContext({
    weather: {},
    onecall: {},
    weatherAPI: (data) => {},
    onecallAPI: (data) => {} 
});

const defaultWeather = {
    weather: {},
    onecall: {},
}
const WeatherReducer = (state, action) => {
    if(action.type === 'WEATHER') {
        return {
            onecall: state.onecall,
            weather: action.payload
        }
    }
    if(action.type === 'ONECALL') {
        return {
            weather:state.weather,
            onecall: action.payload
        }
    }
    return {
        ...state
    }
}
const WeatherProvider = (props) => {
    const [weatherState, dispatchWeather] = useReducer(WeatherReducer, defaultWeather);
    const {weather, onecall} = weatherState;
    const searchWeatherHandler = useCallback((data) => {
        dispatchWeather({
            type: 'WEATHER',
            payload: data
        })
    }, [])
    const oneCallHandler = useCallback((data) => {
        dispatchWeather({
            type: 'ONECALL',
            payload: data
        })
    },[])
    const weatherContext = {
        weather: weather,
        onecall: onecall,
        weatherAPI: searchWeatherHandler,
        onecallAPI: oneCallHandler
    }
    return (
        <WeaterContext.Provider value={weatherContext} >
            {props.children}
        </WeaterContext.Provider>
    )
}


export default WeatherProvider;
