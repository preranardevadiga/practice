document.addEventListener("DOMContentLoaded",function(){
    const apiKey=`b1693ed7ad181ad79817cc99d0523aa3`;
    const fetchWeatherButton=document.getElementById("fetchWeather");
    const cityInput=document.getElementById("cityInput");
    const weatherResult=document.getElementById("weatherResult");

    fetchWeatherButton.addEventListener("click",function(){
        const city=cityInput.value;
        if(city.trim()===""){
            alert("Please enter a city name.");
            return 0;
        }

        const apiUrl=
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
        .then((response)=>response.json())
        .then((data)=>{
            const temperature=data.main.temp;
            const weatherDescription=data.weather[0].description;
            const weatherOutput= `
            <p>Temperature:${temperature} &deg:c;</p> 
            <p> Weather:${weatherDescription}</p>
            `;

            weatherResult.innerHTML=weatherOutput;
        })
        .catch(function (error) {
            weatherResult.innerHTML = "Weather data not available.";
        });            
        console.error("Error fetching weather data:", error);

    });
});