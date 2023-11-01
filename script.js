
const apiKey='091cb63b7894a589752fe8c109c153f2';
const apiURL='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if (response.status === 404){
        document.querySelector('.error').style.display='block';
        document.querySelector('.weather').style.display='none';
    } else {
    let data = await response.json();

   

    console.log(data);

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+'°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity+'%';
    document.querySelector('.wind').innerHTML=data.wind.speed+'KM/H';

    if (data.weather[0].main === 'Clouds'){
        weatherIcon.src = 'Assets/clouds.png'
    } else if (data.weather[0].main === 'Clear'){
        weatherIcon.src = 'Assets/clear.png'
    } else if (data.weather[0].main === 'Drizzle'){
        weatherIcon.src = 'Assets/drizzle.png'
    } else if (data.weather[0].main === 'Rain'){
        weatherIcon.src = 'Assets/rain.png'
    } else if (data.weather[0].main === 'Snow'){
        weatherIcon.src = 'Assets/snow.png'
    } else if (data.weather[0].main === 'Mist'){
        weatherIcon.src = 'Assets/mist.png'
    }

    document.querySelector('.weather').style.display='block';
    document.querySelector('.error').style.display='none';
}
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value)
})

searchBox.addEventListener('keypress', (event)=>{
    if (event.key==='Enter'){
    checkWeather(searchBox.value)
    }
})



checkWeather();