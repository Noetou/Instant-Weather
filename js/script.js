const pc_input = document.getElementById('pc_input');
const pc_submit = document.getElementById('pc_submit');
const inputError = document.getElementById('inputError');
const newSearch = document.getElementById('newSearch');
const placeholder = document.getElementById('placeholder');
const displayParam = document.getElementsByClassName('displayParam')[0];
const dayDisplay = document.getElementById('day');
const dayRange = document.getElementById('vol');

let days = 0
let codeInsee
let pc
let cityN = 0 //1st city out of all with the same code
let valueInput;



pc_input.addEventListener('input', () => {
    inputError.textContent = "";
    valueInput = pc_input.value;
    let regex = /^[0-9]+$/;

    if (valueInput.length == 5) {
        if (regex.test(valueInput)) { 
            fetch('https://geo.api.gouv.fr/communes?codePostal='.concat(pc_input.value))
                .then(response => response.json())
                .then(data => {
                    try {
                        codeInsee = data[cityN]['code']
                        pc = pc_input.value
                    }
                    catch {
                        inputError.textContent = "The post code entered is unknown";
                        return;
                    }
                    pc_submit.disabled = false;
                    if(!document.querySelectorAll("select").length==0){
                        document.querySelector("select").remove();
                    }
                    if (data.length > 1 ) {
                        const selectInput = document.createElement("select")
                        for (let index = 0; index < data.length; index++) {
                            let option = document.createElement("option")
                            option.value = index
                            option.innerHTML = data[index]['nom']
                            selectInput.append(option)
                        }
                        displayParam.insertBefore(selectInput, placeholder)
                        selectInput.addEventListener("change", () => {
                            codeInsee = data[selectInput.value]['code']
                        })
                    }

                })
        }
        else {
            inputError.textContent = "Error you cannot input characters";
            pc_input.value = "";
        }
    }
});

pc_submit.addEventListener('click', () => {
    pc = valueInput;
    pc_input.disabled = true;

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
            console.table(data);
    
            let weatherTmin = document.createElement('div');
            let weatherTmax = document.createElement('div');
            let weatherPrain = document.createElement('div');
            let weatherSunHours = document.createElement('div');
            // Ajouter du contenu aux divs
            weatherTmin.innerHTML = `Lowest temperature : ${data['forecast'][days]['tmin']}°C`;
            weatherTmax.innerHTML = `Highest temperature : ${data['forecast'][days]['tmax']}°C`;
            weatherPrain.innerHTML = `Rain probability : ${data['forecast'][days]['probarain']}%`;
            weatherSunHours.innerHTML = `Daily sun hours : ${data['forecast'][days]['sun_hours']}h`;
            placeholder.appendChild(weatherTmax);
            placeholder.appendChild(weatherTmin);
            placeholder.appendChild(weatherPrain);
            placeholder.appendChild(weatherSunHours);
    })
        .catch(error => {
            console.error('Error during API request:', error);
        })

    pc_submit.style.display = 'none';
    newSearch.style.display = 'block';
    })
})

function loading() {
    pc_submit.disabled = true;
    newSearch.style.display = 'none';
}

newSearch.addEventListener("click", () => {
    location.reload();
});

document.addEventListener("DOMContentLoaded",loading);

dayRange.addEventListener("change", () => {
    dayDisplay.innerHTML = `${vol.value}`;
    days = vol.value - 1;
    console.log(days);
})