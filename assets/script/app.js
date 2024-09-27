document.getElementById('get-weather').addEventListener('click', function () {
    const city = document.getElementById('city').value;
    const apiKey = 'b04695fe93704f3ff1fd0e5172cf486c'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherResult = `
                <h3>Weather in ${data.name}, ${data.sys.country}:</h3>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>`;
                document.getElementById('weather-result').innerHTML = weatherResult;
            } else {
                document.getElementById('weather-result').innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            document.getElementById('weather-result').innerHTML = `<p>Failed to get data</p>`;
        });
});
