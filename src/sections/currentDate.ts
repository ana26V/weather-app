export function displayDateInfo(dt: number): string {
    const currentDate = new Date(dt * 1000);

    const daysOfWeek = ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];
    const dayOfWeek = daysOfWeek[currentDate.getDay()]; // Obține ziua săptămânii curente

    let hours: string = currentDate.getHours().toString().padStart(2, "0");
    let minutes: string = currentDate.getMinutes().toString().padStart(2, "0");
    const theFinalDate: string = `${dayOfWeek}, ${hours}:${minutes}`;

    //const addDataToText=  document.getElementById('data-curenta');
    //addDataToText!.innerHTML=theFinalDate;
    //addDataToText!.textContent=theFinalDate;
    return theFinalDate;
}


export function getDayByDT(dt: number) {
    const date = new Date(dt * 1000);
    const daysOfWeek = ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];
    const dayOfWeek = daysOfWeek[date.getDay()]; // Obține ziua săptămânii curente
    return dayOfWeek;
}
export function getForecastHour(dt: number) {
    const date = new Date(dt * 1000);
    return `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")} `
}