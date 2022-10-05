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

        document.querySelector('.weather__temp').innerText = temp + "°C";
        document.querySelector('.weather__summary').innerText = weather;
        document.querySelector('.weather__location').innerText = location;

    }

    // Valorant API
    getPhoenix() {
        const url = `https://valorant-api.com/v1/agents/eb93336a-449b-9c1b-0a54-a891f7921d69`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                this.displayAgent(data.data);
            });
    }

    getSage() {
        const url = `https://valorant-api.com/v1/agents/569fdd95-4d10-43ab-ca70-79becc718b46`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                this.displayAgent(data.data);
            });
    }

    getOmen() {
        const url = `https://valorant-api.com/v1/agents/8e253930-4c05-31dd-1b6c-968525494517`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                this.displayAgent(data.data);
            });
    }

    getJett() {
        const url = `https://valorant-api.com/v1/agents/add6443a-41bd-e414-f6ad-e58d267f4e95`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.data);
                this.displayAgent(data.data);
            });
    }

    displayAgent(data) {
        let name = data.displayName;
        let portrait = data.fullPortrait;

        document.querySelector('.agent__name').innerText = `Let's play with ${name} today`;
        document.querySelector('.agent__portrait').src = portrait;
    }
}