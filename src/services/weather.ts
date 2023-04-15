import { fetchAndParse } from "./utils";

// cheia de autorizare, care ne identifica pe noi ca persoana care face request-ul
// pt ca avem limita de 1000 de cereri/zi, asa suntem identificati
const API_KEY = "02af79c812b06f74199e287583d73e2c";

// URL de baza pentru toate requesturile catre OpenWeather
const API_URL = "https://api.openweathermap.org/data/2.5";

const DEFAULT_QUERY_PARAMS = `&lang=ro&appid=${API_KEY}&units=metric`;

// functia va citii informatiile de pe openweatherapi
// despre un oras
export function vremeCurenta(city: string) {
  // constrium url-ul ( endpoint ) catre requestul de current weather, folosind variabilele predefinite
  //https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&appid={API key}&units=metric
  return fetchAndParse(`${API_URL}/weather?q=${city}&${DEFAULT_QUERY_PARAMS}`);
}
export function getWeatherForecast(city: string) {
  // constrium url-ul ( endpoint ) catre requestul de current weather, folosind variabilele predefinite
  //https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&appid={API key}&units=metric
  return fetchAndParse(`${API_URL}/forecast?q=${city}&${DEFAULT_QUERY_PARAMS}`);
}
