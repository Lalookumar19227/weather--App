let countryName=document.getElementById("countryName")
let city=document.getElementById("city")
let  temp=document.getElementById("temp")
let  tempMin=document.getElementById("tempMin")
let  mainWeather=document.getElementById("mainWeather")
let  lon=document.getElementById("lon")
let lat=document.getElementById("lat")
let  grLevel=document.getElementById("grLevel")
let  seaLevel=document.getElementById("seaLevel")
let  windSpeed=document.getElementById("windSpeed")
let windDeg=document.getElementById("windDeg")
let  humidity=document.getElementById("humidity")
let  pressure=document.getElementById("pressure")
let sunrise=document.getElementById("sunrise")
let  sunset=document.getElementById("sunset")

let loc=prompt("enter your city name")  

const fetching = async()=>{  
    const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=c5d72a776bde47f10e91bed3b5e5220c`)

const  jsonData=await data.json()
console.log(jsonData)
updaterFunction(jsonData)

}
fetching()
let updaterFunction=(data)=>{
    console.log(data);
    countryName.innerText=data.sys.country
    city.innerText=data.name
    temp.innerText=data.main.temp-273.15
    tempMin.innerText=data.main.temp_min
}