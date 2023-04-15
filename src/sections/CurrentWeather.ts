import { getWeatherForecast, vremeCurenta } from "../services/weather";
import { displayDateInfo, getDayByDT,getForecastHour} from "./currentDate";

export function displayCurrentWeather(currentCity: string) {

  getWeatherForecast(currentCity).then(forecast => {
    console.log(forecast);
    const forecastBox = document.getElementById("forecast");
    forecastBox!.innerHTML = '';//reset 
    const prognoza: Record<string, any[]> = {};

    for (const currentPrognosis of forecast.list) {
      const day = getDayByDT(currentPrognosis.dt);
      if (prognoza[day]) {
        prognoza[day].push(currentPrognosis)
      } else {
        prognoza[day] = [currentPrognosis];
      }
      // console.log("Day of current prognosis",getDayByDT(currentPrognosis.dt),currentPrognosis);
    }

    // const obiect = {
    //   key1:"valoare1",
    //   key2:"valoare2"
    // }
    // for of
    // valoare1 -> valoare2


    // for in
    // key1 -> key2

    console.log(prognoza);
    for (const day in prognoza) {
      const progonzPerDay = prognoza[day];
      forecastBox!.innerHTML += ` <h3> ${day}</h3>`;//ca sa nu se adauge de prea multe ori
      progonzPerDay.forEach(function (p) {

        const temp = Math.round(p.main.temp); 
        const tempFeelsLike = Math.round(p.main.feels_like);
        const whMiniIcon = p.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${whMiniIcon}.png`;
    const whDescription = p.weather[0].description;
    const hourOfTheForecast = getForecastHour(p.dt);
    
        forecastBox!.innerHTML += `
        
        <div class="forecastinfo">
        <h4>${hourOfTheForecast}</h4>
          
          <img src="${iconUrl}" alt="vreme" />
          <strong>${temp} °C</strong>
          <p>${whDescription} </p>
          <p>Se simte ca:<strong> ${tempFeelsLike} °C</strong></p>
        </div>
       `
      })


    }

  });

  vremeCurenta(currentCity).then((cityInfo) => {

    console.log("Informatii despre vremea curenta: ", cityInfo);
    const celsiusParagraph = document.getElementById("grade-celsius");
    const temp = Math.round(cityInfo.main.temp);
    const windSpeed = Math.round(cityInfo.wind.speed * 3.6);    //este default in miles/h => convertesc in km/h

    const dataOra = displayDateInfo(cityInfo.dt);

    const tempFeelsLike = Math.round(cityInfo.main.feels_like);
    const whDescription = cityInfo.weather[0].description;
    const whMiniIcon = cityInfo.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${whMiniIcon}.png`;
    console.log("Temp is", temp);

    if (celsiusParagraph) {
      celsiusParagraph.innerHTML = `
       
        <div class="box-shortInfo" >
        <strong class="currentCity">${currentCity}</strong>

            <p>${dataOra}</p>

            <strong>${temp} °C</strong>
            <img src="${iconUrl}" alt="vreme" />
          </div>
          <div class="box-shortInfo" >
            <p>Se simte ca:<strong> ${tempFeelsLike} °C</strong></p>
            <p>${whDescription} </p>
            <p>Viteza vantului:<strong>  ${windSpeed} km/h</strong></p>
          
           
        </div>
      `;
    }
  });
}
