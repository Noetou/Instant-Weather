const pc_input = document.getElementById('pc_input');
const pc_submit = document.getElementById('pc_submit');
const inputError = document.getElementById('inputError');
const newSearch = document.getElementById('newSearch');
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
                    if (data.length > 1) {
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

    fetch(`https://api.meteo-concept.com/api/forecast/daily?token=9fc5110929e9db4b61fcc700441c5d39e82c9e6d6aeeacc3223498621f238c38&insee=${codeInsee}`)
        .then(response => response.json())
        .then(data => {
            divCheckboxes = document.createElement('div');

            let checkboxTMax = document.createElement('input');
            checkboxTMax.type = "checkbox";
            checkboxTMax.id = "TMax";
            checkboxTMax.checked = true;
            let labelTMax = document.createElement('label');
            labelTMax.htmlFor = "TMax";
            labelTMax.appendChild(document.createTextNode("Highest temperature : "));
            divCheckboxes.appendChild(labelTMax);
            divCheckboxes.appendChild(checkboxTMax);

            let checkboxTMin = document.createElement('input');
            checkboxTMin.type = "checkbox";
            checkboxTMin.id = "TMin";
            checkboxTMin.checked = true;
            let labelTMin = document.createElement('label');
            labelTMin.htmlFor = "TMin";
            labelTMin.appendChild(document.createTextNode("Lowest temperature : "));
            divCheckboxes.appendChild(labelTMin);
            divCheckboxes.appendChild(checkboxTMin);

            let checkboxRainProb = document.createElement('input');
            checkboxRainProb.type = "checkbox";
            checkboxRainProb.id = "RainProb";
            checkboxRainProb.checked = true;
            let labelRainProb = document.createElement('label');
            labelRainProb.htmlFor = "RainProb";
            labelRainProb.appendChild(document.createTextNode("Rain probability : "));
            divCheckboxes.appendChild(labelRainProb);
            divCheckboxes.appendChild(checkboxRainProb);

            let checkboxSunHours = document.createElement('input');
            checkboxSunHours.type = "checkbox";
            checkboxSunHours.id = "SunHours";
            checkboxSunHours.checked = true;
            let labelSunHours = document.createElement('label');
            labelSunHours.htmlFor = "SunHours";
            labelSunHours.appendChild(document.createTextNode("Daily Sun Hours : "));
            divCheckboxes.appendChild(labelSunHours);
            divCheckboxes.appendChild(checkboxSunHours);

            let checkboxLatitude = document.createElement('input');
            checkboxLatitude.type = "checkbox";
            checkboxLatitude.id = "Latitude";
            let labelLatitude = document.createElement('label');
            labelLatitude.htmlFor = "Latitude";
            labelLatitude.appendChild(document.createTextNode("Latitude : "));
            divCheckboxes.appendChild(labelLatitude);
            divCheckboxes.appendChild(checkboxLatitude);
            let checkboxLongitude = document.createElement('input');
            checkboxLongitude.type = "checkbox";
            checkboxLongitude.id = "Longitude";
            let labelLongitude = document.createElement('label');
            labelLongitude.htmlFor = "Longitude";
            labelLongitude.appendChild(document.createTextNode("Longitude : "));
            divCheckboxes.appendChild(labelLongitude);
            divCheckboxes.appendChild(checkboxLongitude);
            let checkboxCumulatedRain = document.createElement('input');
            checkboxCumulatedRain.type = "checkbox";
            checkboxCumulatedRain.id = "CumulatedRain";
            let labelCumulatedRain = document.createElement('label');
            labelCumulatedRain.htmlFor = "CumulatedRain";
            labelCumulatedRain.appendChild(document.createTextNode("Cumulated rain in mm : "));
            divCheckboxes.appendChild(labelCumulatedRain);
            divCheckboxes.appendChild(checkboxCumulatedRain);

            let checkboxAverageWindSpeed = document.createElement('input');
            checkboxAverageWindSpeed.type = "checkbox";
            checkboxAverageWindSpeed.id = "AverageWindSpeed";
            let labelAverageWindSpeed = document.createElement('label');
            labelAverageWindSpeed.htmlFor = "AverageWindSpeed";
            labelAverageWindSpeed.appendChild(document.createTextNode("Average wind speed in Km/H : "));
            divCheckboxes.appendChild(labelAverageWindSpeed);
            divCheckboxes.appendChild(checkboxAverageWindSpeed);

            let checkboxWindDirection = document.createElement('input');
            checkboxWindDirection.type = "checkbox";
            checkboxWindDirection.id = "WindDirection";
            let labelWindDirection = document.createElement('label');
            labelWindDirection.htmlFor = "WindDirection";
            labelWindDirection.appendChild(document.createTextNode("Wind direction :  : "));
            divCheckboxes.appendChild(labelWindDirection);
            divCheckboxes.appendChild(checkboxWindDirection);

            placeholder.appendChild(divCheckboxes);
            let x = new WeatherCard(data);
            x.displayCard();
    })
        .catch(error => {
            console.error('Error during API request:', error);
        })

    pc_submit.style.display = 'none';
    newSearch.style.display = 'block';
})



function loading() {
    pc_submit.disabled = true;
    newSearch.style.display = 'none';
}

newSearch.addEventListener("click", () => {
    location.reload();
});

document.addEventListener("DOMContentLoaded", loading);

dayRange.addEventListener("input", () => {
    dayDisplay.innerHTML = `${vol.value}`;
    days = vol.value - 1;
    console.log(days);
})
