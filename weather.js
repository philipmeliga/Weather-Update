const apiEndpoint='https://api.openweathermap.org/data/2.5/weather';
const apiKey=`openweathermap.org`;
const cityInput=document.getElementById('city');
const searchBtn=document.getElementById('search-btn');
const weatherDataDiv=document.getElementById('weather-data');

searchBtn.addEventListener('click', getWeatherData());

function getWeatherData (){
const city=cityInput.value.trim();
if (city ===''){
    alert('Please enter a city name');
    return;
 } 
 const url=
 '${apiEndpoint}?q=${city}&appid=${apikey}&units=metric';
 fetch (url)
    .then(response=>response.json())
      . then(data=>{
       const weatherData= `<p>city:${data.name}</p>
          <p>Temperature:${data.main.temp}°C</p>
          <p>Humidity:${data.main.humidity}%</p>
          <p>Weather:${data.weather[0].description}</p>;`
       weatherDataDiv.innerHTML=weatherData;
       })
         .catch(error=>
             console.error('Error:', error));
      }
