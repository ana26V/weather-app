
// URL catre cererea noastra (ex cerere catre openweather API)
export async function fetchAndParse(url: string) {
  // cuvantul cheie `await` asteapta pana cand vine raspunsul de la server
  const reponse = await fetch(url);

  // transformam raspunsul primit de la server in JSON
  return reponse.json();
}
