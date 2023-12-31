const pc_input = document.getElementById('pc_input');
const pc_submit = document.getElementById('pc_submit');
const inputError = document.getElementById('inputError');
const newSearch = document.getElementById('newSearch');
const displayParam = document.getElementsByClassName('displayParam')[0];
const dayDisplay = document.getElementById('day');
const dayRange = document.getElementById('vol');
const header = document.getElementsByTagName('header')[0];

let days = 0;
let codeInsee;
let pc;
let valueInput;
let usersChoice = new Array();
let dataCopy;

let checkboxTMax;
let checkboxTMin;
let checkboxRainProb;
let checkboxSunHours;
let checkboxLatitude;
let checkboxLongitude;
let checkboxCumulatedRain;
let checkboxAverageWindSpeed;
let checkboxWindDirection;

/**
 * On page load
 */
document.addEventListener("DOMContentLoaded", (event) => {
    divCheckboxes = document.createElement('div');
    divCheckboxes.id='checkbox';
    divCheckboxes2 = document.createElement('div');
    divCheckboxes2.id='hot';
    var image = document.createElement('img');
    image.src = 'images/chaud.png';
    image.id='icone';
    divCheckboxes2.appendChild(image);
    checkboxTMax = document.createElement('input');
    checkboxTMax.type = "checkbox";
    checkboxTMax.id = "TMax";
    checkboxTMax.checked = true;
    let labelTMax = document.createElement('label');
    labelTMax.htmlFor = "TMax";
    labelTMax.appendChild(document.createTextNode("Highest temperature : "));
    divCheckboxes2.appendChild(labelTMax);
    divCheckboxes2.appendChild(checkboxTMax);
    divCheckboxes2.appendChild(document.createElement('br'));
    divCheckboxes.appendChild(divCheckboxes2);

    divCheckboxes2 = document.createElement('div');
    divCheckboxes2.id='cold';
    var image = document.createElement('img');
    image.src = 'images/froid.png';
    image.id='icone';
    divCheckboxes2.appendChild(image);
    checkboxTMin = document.createElement('input');
    checkboxTMin.type = "checkbox";
    checkboxTMin.id = "TMin";
    checkboxTMin.checked = true;
    let labelTMin = document.createElement('label');
    labelTMin.htmlFor = "TMin";
    labelTMin.appendChild(document.createTextNode("Lowest temperature : "));
    divCheckboxes2.appendChild(labelTMin);
    divCheckboxes2.appendChild(checkboxTMin);
    divCheckboxes2.appendChild(document.createElement('br'));
    divCheckboxes.appendChild(divCheckboxes2);

    divCheckboxes2 = document.createElement('div');
    divCheckboxes2.id='rain';
    var image = document.createElement('img')
    image.src = 'images/pluie.png';
    image.id='icone';
    divCheckboxes2.appendChild(image);
    checkboxRainProb = document.createElement('input');
    checkboxRainProb.type = "checkbox";
    checkboxRainProb.id = "RainProb";
    checkboxRainProb.checked = true;
    let labelRainProb = document.createElement('label');
    labelRainProb.htmlFor = "RainProb";
    labelRainProb.appendChild(document.createTextNode("Rain probability : "));
    divCheckboxes2.appendChild(labelRainProb);
    divCheckboxes2.appendChild(checkboxRainProb);
    checkboxSunHours = document.createElement('input');
    divCheckboxes2.appendChild(document.createElement('br'));
    divCheckboxes.appendChild(divCheckboxes2);

    divCheckboxes2 = document.createElement('div');
    divCheckboxes2.id='sun';
    var image = document.createElement('img');
    image.src = 'images/soleil.png';
    image.id='icone';
    divCheckboxes2.appendChild(image);
    checkboxSunHours.type = "checkbox";
    checkboxSunHours.id = "SunHours";
    checkboxSunHours.checked = true;
    let labelSunHours = document.createElement('label');
    labelSunHours.htmlFor = "SunHours";
    labelSunHours.appendChild(document.createTextNode("Daily Sun Hours : "));
    divCheckboxes2.appendChild(labelSunHours);
    divCheckboxes2.appendChild(checkboxSunHours);
    divCheckboxes2.appendChild(document.createElement('br'));
    divCheckboxes.appendChild(divCheckboxes2);

    divCheckboxes2 = document.createElement('div');
    divCheckboxes2.id='latitude';
    var image = document.createElement('img');
    image.src = 'images/fleche.png';
    image.id='fleche1';
    divCheckboxes2.appendChild(image);
    checkboxLatitude = document.createElement('input');
    checkboxLatitude.type = "checkbox";
    checkboxLatitude.id = "Latitude";
    let labelLatitude = document.createElement('label');
    labelLatitude.htmlFor = "Latitude";
    labelLatitude.appendChild(document.createTextNode("Latitude : "));
    divCheckboxes2.appendChild(labelLatitude);
    divCheckboxes2.appendChild(checkboxLatitude);
    divCheckboxes2.appendChild(document.createElement('br'));
    divCheckboxes.appendChild(divCheckboxes2);

    divCheckboxes2 = document.createElement('div');
    divCheckboxes2.id='longitude';
    var image = document.createElement('img');
    image.src = 'images/fleche.png';
    image.id='fleche2';
    divCheckboxes2.appendChild(image);
    checkboxLongitude = document.createElement('input');
    checkboxLongitude.type = "checkbox";
    checkboxLongitude.id = "Longitude";
    let labelLongitude = document.createElement('label');
    labelLongitude.htmlFor = "Longitude";
    labelLongitude.appendChild(document.createTextNode("Longitude : "));
    divCheckboxes2.appendChild(labelLongitude);
    divCheckboxes2.appendChild(checkboxLongitude);
    divCheckboxes2.appendChild(document.createElement('br'));
    divCheckboxes.appendChild(divCheckboxes2);

    divCheckboxes2 = document.createElement('div');
    divCheckboxes2.id='rain';
    var image = document.createElement('img');
    image.src = 'images/pluie.png';
    image.id='icone';
    divCheckboxes2.appendChild(image);
    checkboxCumulatedRain = document.createElement('input');
    checkboxCumulatedRain.type = "checkbox";
    checkboxCumulatedRain.id = "CumulatedRain";
    let labelCumulatedRain = document.createElement('label');
    labelCumulatedRain.htmlFor = "CumulatedRain";
    labelCumulatedRain.appendChild(document.createTextNode("Cumulated rain : "));
    divCheckboxes2.appendChild(labelCumulatedRain);
    divCheckboxes2.appendChild(checkboxCumulatedRain);
    divCheckboxes2.appendChild(document.createElement('br'));
    divCheckboxes.appendChild(divCheckboxes2);

    divCheckboxes2 = document.createElement('div');
    divCheckboxes2.id='wind';
    var image = document.createElement('img');
    image.src = 'images/vent.png';
    image.id='icone';
    divCheckboxes2.appendChild(image);
    checkboxAverageWindSpeed = document.createElement('input');
    checkboxAverageWindSpeed.type = "checkbox";
    checkboxAverageWindSpeed.id = "AverageWindSpeed";
    let labelAverageWindSpeed = document.createElement('label');
    labelAverageWindSpeed.htmlFor = "AverageWindSpeed";
    labelAverageWindSpeed.appendChild(document.createTextNode("Average wind speed : "));
    divCheckboxes2.appendChild(labelAverageWindSpeed);
    divCheckboxes2.appendChild(checkboxAverageWindSpeed);
    divCheckboxes2.appendChild(document.createElement('br'));
    divCheckboxes.appendChild(divCheckboxes2);

    divCheckboxes2 = document.createElement('div');
    divCheckboxes2.id='wind';
    var image = document.createElement('img');
    image.src = 'images/manche_à_air.png';
    image.id='icone';
    divCheckboxes2.appendChild(image);
    checkboxWindDirection = document.createElement('input');
    checkboxWindDirection.type = "checkbox";
    checkboxWindDirection.id = "WindDirection";
    let labelWindDirection = document.createElement('label');
    labelWindDirection.htmlFor = "WindDirection";
    labelWindDirection.appendChild(document.createTextNode("Wind direction : "));
    divCheckboxes2.appendChild(labelWindDirection);
    divCheckboxes2.appendChild(checkboxWindDirection);
    divCheckboxes2.appendChild(document.createElement('br'));
    divCheckboxes.appendChild(divCheckboxes2);

    placeholder.appendChild(divCheckboxes);
});

/**
 * When users types in the post code bar
 */
pc_input.addEventListener('input', () => {
    inputError.textContent = "";
    valueInput = pc_input.value;
    let regex = /^[0-9]+$/; //allows for numbers only
    
    if (valueInput.length == 5) {
        if (regex.test(valueInput)) {
            //insee code API call
            fetch('https://geo.api.gouv.fr/communes?codePostal='.concat(pc_input.value))
                .then(response => response.json())
                .then(data => {
                    try {
                        codeInsee = data[0]['code'];
                        pc = pc_input.value;
                    }
                    catch {
                        inputError.textContent = "The post code entered is unknown";
                        return;
                    }
                    pc_submit.disabled = false;
                    if (!document.querySelectorAll("select").length == 0) {
                        document.querySelector("select").remove();
                    }
                    if (data.length > 1) {
                        const selectInput = document.createElement("select")
                        for (let index = 0; index < data.length; index++) {
                            let option = document.createElement("option");
                            option.value = index;
                            option.innerHTML = data[index]['nom'];
                            selectInput.append(option);
                        }
                        displayParam.insertBefore(selectInput, placeholder);
                        selectInput.addEventListener("change", () => {
                            codeInsee = data[selectInput.value]['code'];
                        });
                    }

                });
        }
        else { //as long as user doesn't input a 5 digits long post code
            inputError.textContent = "Error you cannot input characters";
            pc_input.value = "";
        }
    }
});

/**
 * When the send button is clicked
 */
pc_submit.addEventListener('click', () => {
    pc = valueInput;
    pc_input.disabled = true;
    pc_submit.disabled = true;

    //manage users stat display choice
    usersChoice[0] = checkboxTMax.checked;
    usersChoice[1] = checkboxTMin.checked;
    usersChoice[2] = checkboxLatitude.checked;
    usersChoice[3] = checkboxLongitude.checked;
    usersChoice[4] = checkboxCumulatedRain.checked;
    usersChoice[5] = checkboxAverageWindSpeed.checked;
    usersChoice[6] = checkboxWindDirection.checked;
    usersChoice[7] = checkboxSunHours.checked;
    usersChoice[8] = checkboxRainProb.checked;

    //weather stats API call
    fetch(`https://api.meteo-concept.com/api/forecast/daily?token=9fc5110929e9db4b61fcc700441c5d39e82c9e6d6aeeacc3223498621f238c38&insee=${codeInsee}`)
        .then(response => response.json())
        .then(data => {
            for(let index = 0; index < days + 1; index++) {
                let card = new WeatherCard(data, usersChoice, index);
                card.displayCard();
            }
            dataCopy=data;
            newSearch.style.display ='block';
        })
        .catch(error => {
            console.error('Error during API request: ',error);
        })      
});


/**
 * To be done upon page load
 */
document.addEventListener("DOMContentLoaded", loading);

function loading() {
    pc_submit.disabled = true;
    newSearch.style.display = 'none';
}

/**
 * Resetting the page to allow for a new search
 */
newSearch.addEventListener("click", () => {
    location.reload();
});

/**
 * Updates the WeatherCard display according to the amount of days picked
 */
dayRange.addEventListener("input", () => {
    document.querySelectorAll(".divCards").forEach(e=> e.remove()); //remove all existing cards
    dayDisplay.innerHTML = `${vol.value}`;
    days = vol.value - 1;
    if(!(pc_input.value ==="")){
        if(dataCopy!=undefined){
            for(let index = 0; index < days + 1; index++) { //recreate the new requested amount
                let card = new WeatherCard(dataCopy, usersChoice, index);
                card.displayCard();
            }
        }      
    }
});

document.addEventListener("scroll", (event) => {
    let y = document.documentElement.scrollTop;
    if(y == 0) { //top of the page
        header.style = 'transform: translate(0px, -80px);';
    }
    else {
        header.style = 'transform: translate(0px, 0px);';
    }
});