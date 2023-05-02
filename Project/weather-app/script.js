const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", () => {
  getData(cityInput.value);
});

function getData(name) {
  const API = "bf77b413d99d7748984632dc9da6ac9b";
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`;
  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
      const {
        name,
        sys: { country },
        main: { temp, feels_like },
        weather: [{ description }],
      } = data;
      const city = document.querySelector(".city");
      const temperature = document.querySelector(".temp");
      const weather = document.querySelector(".weather");
      const feel = document.querySelector(".feel");

      city.textContent = `${name}, ${country}`;
      weather.textContent = `${description}`;
      temperature.textContent = `${temp} °C`;
      feel.textContent = `${feels_like} °C`;
    })
    .catch((err) => console.warn(err));
}
