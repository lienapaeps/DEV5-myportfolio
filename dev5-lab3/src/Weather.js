export default class Weather {
    constructor(api_key) {
        this.apiKey = api_key;
        // console.log("Weather class initialized " + this.apiKey);

        // check if weather data is in localstorage and if timestamp older than 10 minutes
        if (localStorage.getItem('weather') && Date.now() - localStorage.getItem('weather_timestamp') < 600000) {
            // get data from localstorage
            const weatherData = JSON.parse(localStorage.getItem('weather'));
            this.displayWeather(weatherData);
        } else {
            this.getLocation();
        }
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getWeather.bind(this));
        } else {
            console.log("Geolocation is not supported by this browser.");
        }      
    }

    getWeather(position) {
        console.log(this);
        console.log(position);
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        const url = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${lat},${lon}&aqi=no`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data);

                // save to localstorage
                localStorage.setItem('weather', JSON.stringify(data));
                // save timestamp
                localStorage.setItem('weather_timestamp', Date.now());

                this.displayWeather(data);
            });
    }

    displayWeather(data) {
        const temp = data.current.temp_c;
        const weather = data.current.condition.text;
        const location = data.location.name;

        const img = document.createElement("img");
        img.src = data.current.condition.icon;
        img.alt = weather;

        document.querySelector('.weather__temp').innerText = temp + "°C";
        document.querySelector('.weather__summary').innerText = weather;
        document.querySelector('.weather__location').innerText = location;

        this.getPlaylist();
    }

    getPlaylist() {
        // get playlist from deezer api
        const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${this.weather}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // save to localstorage
                localStorage.setItem('playlist', JSON.stringify(data));
                // save timestamp
                localStorage.setItem('playlist_timestamp', Date.now());

                this.displayPlaylist(data);
            });
    }

}