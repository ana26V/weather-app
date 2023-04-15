import { displayCurrentWeather } from "./CurrentWeather";

const timisoaraInput = document.getElementById("timisoara");
const clujInput = document.getElementById("cluj");
const aradInput = document.getElementById("arad");

//export let currentCity = "Timisoara";
//localStorage.setItem("new_city","Timisoara");
export let currentCity =( localStorage.getItem("new_city")!);//currentCity =>item key="new_city" 

const currentCityTextField = document.getElementById("currentCity");

export function handleCityUpdate(newCity: string) {
  localStorage.setItem("new_city",newCity);
  if (currentCityTextField) {
    currentCityTextField.innerHTML = newCity;
  }
  else{
    localStorage.setItem("new_city","Timisoara");
    // if the currentCityTextField is null=> default city will be Timi
  }
  currentCity = newCity;
  displayCurrentWeather(newCity);
}

timisoaraInput?.addEventListener("click", () => {
  console.log("Am apasat pe Timisoara");
  handleCityUpdate("Timisoara");
});

clujInput?.addEventListener("click", () => {
  console.log("Am apasat pe Cluj");
  handleCityUpdate("Cluj");
});

aradInput?.addEventListener("click", () => {
  console.log("Am apasat pe Arad");
  handleCityUpdate("Arad");
});
