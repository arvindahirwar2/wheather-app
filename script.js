const apiKey = "b1ed3c02fc40cbb36a21ccb9445f691c"; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const cityName = data.name;
            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            // Display the weather information
            document.getElementById("city").innerText = `${cityName}`;
            document.getElementById("temperature").innerHTML = `${temperature}°C`;
            document.getElementById("description").innerText = description;
            document.getElementById("humidity").innerText = `Humidity: ${humidity}%`;
            document.getElementById("windSpeed").innerText = `Wind Speed: ${windSpeed} m/s`;
            document.getElementById("weatherIcon").src = weatherIcon;

            document.getElementById("weatherInfo").style.display = "block";
        })
        .catch(error => {
            alert(error.message);
        });
}
