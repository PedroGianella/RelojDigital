function updateClock() {
    const now = new Date();
    const options = { timeZone: 'America/Argentina/Buenos_Aires', hour12: false };
    const timeString = now.toLocaleTimeString('en-US', options);
    document.getElementById('time').textContent = timeString;
}

async function getWeather() {
    const apiKey = 'Pedro'; // Reemplaza con tu clave de API de OpenWeatherMap
    const city = 'Buenos Aires';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const weatherInfo = `${data.weather[0].description}, ${Math.round(data.main.temp)}°C`;
        document.getElementById('weather-info').textContent = weatherInfo;
    } catch (error) {
        console.error('Error al obtener la información del clima:', error);
        document.getElementById('weather-info').textContent = 'Error al cargar la información del clima';
    }
}

setInterval(updateClock, 1000);
updateClock();
getWeather();


try {
    // ... (código existente)
} catch (error) {
    console.error('Error al obtener la información del clima:', error);
    document.getElementById('weather-info').textContent = 'Error al cargar la información del clima';
}
