 async function getData(){
    let city=document.getElementById("city").value
    try {
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8883e849dc32c2ce1613ef3c1b844d5a`
   let res=await fetch(url)
   let data=await res.json()
   append(data)
// console.log(data.name)
//    console.log(data)
console.log(data)
console.log(data.weather[0].description,"aaa")
    } catch (error) {
        console.log(error)
    }
 }

function kelvinToCelcius(a){
    let celcius = a - 273;

    return celcius.toFixed();
}
 






function append(data){

    let countener = document.getElementById("countener")
    countener.innerHTML = null
let h3 = document.createElement("h1")
h3.innerText=` ${data.name} `
h3.setAttribute("id","ashraff")

let h1=document.createElement("h1")
h1.innerText=` ${kelvinToCelcius(data.main.temp_min)} C°`
h1.setAttribute("id","ashraff")

let p=document.createElement("h1")
p.innerText=`   ${data.weather[0].description} `
p.setAttribute("id","ashraf")


let h4=document.createElement("h3")
h4.innerHTML= new Date().toISOString().slice(0, 10)
// h4.setAttribute("id","ashraff")
// let p1=document.createElement("p")
// p1.innerText=`  lat:${data.coord.lat} `



// let p3=document.createElement("p")
// p3.innerText=`Gust:${data.wind.gust} `


// let p4=document.createElement("p")
// p4.innerText=`Description:${data.weather[0].description} `




countener.append(h3,h4,h1,p)
}


 

 
 



 


// <-- https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=8883e849dc32c2ce1613ef3c1b844d5a -->
 