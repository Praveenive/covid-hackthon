let heading = document.createElement("h1");
heading.innerHTML="Covid Tracker";
heading.style.textAlign="center";
heading.style.marginTop="80px";
let group = document.createElement("div");
group.style.textAlign="center";
let input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

let serch = document.createElement("button");
serch.setAttribute("type","submit");
serch.classList.add("btn","btn-primary");
serch.style.marginleft ="7px";
serch.innerHTML="Serch";
serch.addEventListener("click",serchCountry)
group.append(input,serch);

let output = document.createElement("div");
output.style.textAlign="center";
output.style.marginTop="10px";

let output1= document.createElement("div");

let output2 = document.createElement("div");
let output3 = document.createElement("div");
output.append(output1,output2,output3);
document.body.append(heading,group,output);

async function serchCountry()
{
    let getCountry = document.getElementById("country").value;
    let url = `https://api.covid19api.com/total/dayone/country/${getCountry}`;
    let res = await fetch(url);
    let res1 = await res.json();
    let finalData= res1.length-1;
    console.log(res1[finalData]);
    output1.innerHTML= `Total Active Cases: ${res1[finalData].Active}`;
    output2.innerHTML=`Total Deaths :${res1[finalData].Deaths}`;
    output3.innerHTML=`Total RecoveredCases:${res1[finalData].Recovered}`
}