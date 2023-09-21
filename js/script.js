const pc_input = document.getElementById('pc_input');
const pc_submit = document.getElementById('pc_submit');
const inputError = document.getElementById('inputError');
const newSearch = document.getElementById('newSearch');

let codeInsee
let pc
let cityN = 0 //1st city out of all with the same code
let day = 0 //1st day out of 14
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
            codeInsee = data[cityN]['code']
        }
        catch{
            inputError.textContent="The post code entered is unknown";
            return;
        }
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