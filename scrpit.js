function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const apiKey = '69a42cd457ca3ffd01727b1683afc748';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherDescription = document.getElementById('weatherDescription');
    const temperature = document.getElementById('temperature');
    const feelsLike = document.getElementById('feelsLike');
    const windSpeed = document.getElementById('windSpeed');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');
   
    const visibility = document.getElementById('visibility');
   

    if (data.cod === '404') {
        weatherDescription.textContent = '';
        temperature.textContent = '';
        feelsLike.textContent = '';
        windSpeed.textContent = '';
        sunrise.textContent = '';
        sunset.textContent = '';
       
        visibility.textContent = '';
        
        alert('City not found. Please enter a valid city name.');
        return;
    }

    
    // Set the weather icon using OpenWeatherMap's icon URL
    

    const description = data.weather[0].description;
    const temp = data.main.temp;
    const feelsLikeTemp = data.main.feels_like;
    const wind = data.wind.speed;
    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
   
    const visibilityValue = data.visibility / 1000; // Convert to kilometers


    weatherDescription.textContent = `Weather: ${description}`;
    temperature.textContent = `Temperature: ${temp}°C`;
    feelsLike.textContent = `Feels Like: ${feelsLikeTemp}°C`;
    windSpeed.textContent = `Wind Speed: ${wind} m/s`;
    sunrise.textContent = `Sunrise: ${sunriseTime}`;
    sunset.textContent = `Sunset: ${sunsetTime}`;
  
    visibility.textContent = `Visibility: ${visibilityValue} km`;
 
}
