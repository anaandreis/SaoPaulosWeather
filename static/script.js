let weather = {
  apiKey: "c24ef9b8d51816dd327fe64435809675",
  fetchWeather: function () {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=S%C3%A3o%20Paulo,BR-SP,SP&units=metric&units=metric&appid=c24ef9b8d51816dd327fe64435809675")
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const { icon, description } = data.weather[0];
    const { temp } = data.main;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".current-weather").classList.remove("loading");
  }
};

weather.fetchWeather("São Paulo");

const d = new Date();
let day = d.getDate();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let name = month[d.getMonth()];
document.getElementById("date").innerHTML = name + "/" + day + "th" ;
document.getElementById("date2").innerHTML = name + "/" + day + "th" ;