import "./style.css";
import { currentCity, handleCityUpdate } from "./sections/ChooseLocation";
import { displayCurrentWeather } from "./sections/CurrentWeather";
import { scrollToTop } from "./sections/scrollTop";

// handle the current city
handleCityUpdate(currentCity);

// display currentWeather
displayCurrentWeather(currentCity);
scrollToTop()
// display weather forecast
