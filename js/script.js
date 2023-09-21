const pc_input = document.getElementById('pc_input');
const pc_submit = document.getElementById('pc_submit');
const inputError = document.getElementById('inputError');
const newSearch = document.getElementById('newSearch');
const result = document.getElementById('placeholder');
let codeInsee;
let pc;
let cityN = 0; //1st city out of all with the same code
let day = 0; //1st day out of 14
let valueInput;




pc_input.addEventListener('input',()=>{
    inputError.textContent="";
    valueInput = pc_input.value;   
    let regex = /^[0-9]+$/;

    if(valueInput.length == 5){
        if(regex.test(valueInput)){
            pc_submit.disabled=false;    
        }
        else{
            inputError.textContent="Error you cannot input characters";
            pc_input.value="";
        }      
    }   
});

pc_submit.addEventListener('click', () => {
    pc = valueInput;
    pc_input.disabled=true;

    fetch('https://geo.api.gouv.fr/communes?codePostal='.concat(pc))
    .then(response => response.json())
    .then(data => {
        try{
            codeInsee = data[cityN]['code'];
        }
        catch{
            inputError.textContent="The post code entered is unknown";
            return;
        }
        fetch(`https://api.meteo-concept.com/api/forecast/daily?token=9fc5110929e9db4b61fcc700441c5d39e82c9e6d6aeeacc3223498621f238c38&insee=${codeInsee}`)
        .then(response => response.json())
        .then(data => {
            let weatherTmin = document.createElement('div');
            let weatherTmax = document.createElement('div');
            let weatherPrain = document.createElement('div');
            let weatherSunHours = document.createElement('div');
            // Ajouter du contenu aux divs
            weatherTmin.innerHTML = `température minimale : ${data['forecast'][day]['tmax']}°C`;
            weatherTmax.innerHTML = `température maximale : ${data['forecast'][day]['tmin']}°C`;
            weatherPrain.innerHTML = `Probabilité de pluie : ${data['forecast'][day]['probarain']}%`;
            weatherSunHours.innerHTML = `Ensoleillement journalier : ${data['forecast'][day]['sun_hours']}h`;
            result.appendChild(weatherTmin);
            result.appendChild(weatherTmax);
            result.appendChild(weatherPrain);
            result.appendChild(weatherSunHours);
          
        })
        .catch(error => {
            console.error('Erreur lors de la requête API:', error);
        })
    })
    pc_submit.style.display = 'none';
    newSearch.style.display='block';
})

function loading(){
    pc_submit.disabled=true;
    newSearch.style.display='none';
}

newSearch.addEventListener("click",()=>{
    location.reload();
});

document.addEventListener("DOMContentLoaded",loading);
