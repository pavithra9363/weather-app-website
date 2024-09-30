start=()=>{
   let  input=document.getElementById("input");
   
    whether(input.value);
    input.value=" ";
    
}

 async function whether(city){
try{
let apikey=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=c20776154b234b4b9c0eaa5e7cd25c27&units=metric`)
let api= await apikey;
// console.log(api);
let image=document.getElementById("img")


let data= await api.json();
console.log(data);
// console.log(api);


if(api.status==404 ){
 document.getElementById("temp").innerHTML="0&deg;C";
document.getElementById("city").innerHTML="enter valid cityName";
document.getElementById("humidity").innerHTML="0%";
document.getElementById("wind").innerHTML="0Km/h";
image.src="./think.png"; 
image.style.size="100px";

}
else{
document.getElementById("temp").innerHTML=data.main.temp+"&deg;C";
document.getElementById("city").innerHTML=data.name;
document.getElementById("humidity").innerHTML=data.main.humidity+"%";
document.getElementById("wind").innerHTML=data.wind.speed+"Km/h";

      if(data.weather[0].main=="Clouds"){
        image.src="./clouds.png"
      }
      else if(data.weather[0].main=="Clear"){
        image.src="./clear.png";
      }
      else if(data.weather[0].main=="Rain"){
        image.src="./rain.png";
      }
      else if(data.weather[0].main=="Drizzle"){
        image.src="./trizzle.jpg";
      }
      else if(data.weather[0].main=="Mist"){
        image.src="./mist.png";
      }

    
 }
}
catch(error){
    console.log("failure",error);
}
 
}
 


