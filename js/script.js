const pc_input = document.getElementById('pc_input');
const pc_submit = document.getElementById('pc_submit');


let codeInsee
let pc
let cityN = 0 //1st city out of all with the same code
let day = 0 //1st day out of 14

pc_input.onchange = function(){
    if(pc_input.value.length == 5){
        pc_submit.disabled=false;
        pc_input
    }
    else{
        pc_submit.disabled=true;
    }
}

pc_submit.addEventListener('click', () => {
    pc = pc_input.value

    fetch('https://geo.api.gouv.fr/communes?codePostal='.concat(pc))
    .then(response => response.json())
    .then(data => {
        codeInsee = data[cityN]['code']
        fetch(`https://api.meteo-concept.com/api/forecast/daily?token=9fc5110929e9db4b61fcc700441c5d39e82c9e6d6aeeacc3223498621f238c38&insee=${codeInsee}`)
        .then(response => response.json())
        .then(data => {
            let maxTemp = data['forecast'][day]['tmax']
            let minTemp = data['forecast'][day]['tmin']
            let rainProb = data['forecast'][day]['probarain']
            let dailySunHours = data['forecast'][day]['sun_hours']
            
            let array = []
            array[0] = maxTemp
            array[1] = minTemp
            array[2] = rainProb
            array[3] = dailySunHours
            const newDiv = document.createElement("div");
            array.forEach(element => {
                const newContent = document.createTextNode(element.toString())
                newDiv.appendChild(newContent)
            });
            document.body.insertBefore(newDiv, document.getElementById('placeholder'))
        })
        .catch(error => {
            console.error('Erreur lors de la requête API:', error)
        })
    })
})

function loading(){
    pc_submit.disabled=true;
    console.log("hello");
}

document.addEventListener("DOMContentLoaded",loading);