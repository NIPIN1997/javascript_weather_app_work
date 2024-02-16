const api1="https://api.openweathermap.org/data/2.5/weather?q=";
const api2="&appid=0c8ad3128f981928e8934de5e0264b44&units=metric";
const tem=document.getElementById("temp");
const feel=document.getElementById("feel");
const min=document.getElementById("min");
const max=document.getElementById("max");
const p=document.getElementById("pressure");
const h=document.getElementById("humidity");
const speed=document.getElementById("speed");
const dir=document.getElementById("deg")

async function apiLoader(api){
    let response=await fetch(api);
    let data=await response.json();
    let obj={temp:data.main.temp,feels_like:data.main.feels_like,temp_min:data.main.temp_min,temp_max:data.main.temp_max,pressure:data.main.pressure,humidity:data.main.humidity,speed:data.wind.speed,dir:data.wind.deg} 
    tem.innerHTML=obj.temp;
    feel.innerHTML=obj.feels_like;
    min.innerHTML=obj.temp_min;
    max.innerHTML=obj.temp_max;
    pressure.innerHTML=obj.pressure;
    humidity.innerHTML=obj.humidity;
    speed.innerHTML=obj.speed;
    dir.innerHTML=obj.dir;
}
function getClimate(){
    let location=document.getElementById("location").value;
    let api=api1+location+api2;
    apiLoader(api);

}