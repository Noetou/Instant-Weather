class WeatherCard{

    constructor(data, usersChoice, day){  
        this.tMax=data['forecast'][day]['tmax'];
        this.tMin=data['forecast'][day]['tmin'];
        this.latitude=data['forecast'][day]['latitude'];
        this.longitude=data['forecast'][day]['longitude'];
        this.cumulation=data['forecast'][day]['rr10'];
        this.windSpeed=data['forecast'][day]['wind10m'];
        this.windDirection=data['forecast'][day]['dirwind10m'];
        this.sunHours=data['forecast'][day]['sun_hours'];
        this.rainProb=data['forecast'][day]['probarain'];
        this.date = data['forecast'][day]['datetime'];
        this.weather = data['forecast'][day]['weather'];

        this.imageIndex = [0, 1, 2, 6, 10, 20, 40, 100, 141];

        this.weatherIcons = {
            0: "clear-day.svg",
            1: "clear-day.svg",
            2: "partly-cloudy-day.svg",
            3: "overcast-day.svg",
            4: "extreme-day.svg",
            5: "extreme.svg",
            6: "fog-day.svg",
            7: "overcast-day-fog.svg",
            10: "partly-cloudy-day-drizzle.svg",
            11: "overcast-day-rain.svg",
            12: "extreme-rain.svg",
            13: "partly-cloudy-day-sleet.svg",
            14: "overcast-day-sleet.svg",
            15: "extreme-sleet.svg",
            16: "partly-cloudy-day-drizzle.svg",
            20: "partly-cloudy-day-snow.svg",
            21: "overcast-day-snow.svg",
            22: "extreme-snow.svg",
            30: "partly-cloudy-day-sleet.svg",
            31: "overcast-day-sleet.svg",
            32: "extreme-sleet.svg",
            40: "partly-cloudy-day-drizzle.svg",
            41: "overcast-day-rain.svg",
            42: "extreme-day-rain.svg",
            43: "partly-cloudy-day-drizzle.svg",
            44: "overcast-day-rain.svg",
            45: "extreme-day-rain.svg",
            46: "partly-cloudy-day-drizzle.svg",
            47: "overcast-day-rain.svg",
            48: "extreme-day-rain.svg",
            60: "partly-cloudy-day-snow.svg",
            61: "overcast-day-snow.svg",
            62: "extreme-day-snow.svg",
            63: "partly-cloudy-day-snow.svg",
            64: "overcast-day-snow.svg",
            65: "extreme-snow.svg",
            66: "partly-cloudy-day-snow.svg",
            67: "overcast-day-snow.svg",
            68: "extreme-snow.svg",
            70: "partly-cloudy-day-sleet.svg",
            71: "overcast-day-sleet.svg",
            72: "extreme-day-sleet.svg",
            73: "partly-cloudy-day-sleet.svg",
            74: "overcast-day-sleet.svg",
            75: "extreme-sleet.svg",
            76: "partly-cloudy-day-sleet.svg",
            77: "overcast-day-sleet.svg",
            78: "extreme-sleet.svg",
            100: "thunderstorms-day.svg",
            101: "thunderstorms-day-overcast.svg",
            102: "thunderstorms-day-extreme.svg",
            103: "thunderstorms-day.svg",
            104: "thunderstorms.svg",
            105: "thunderstorms-extreme.svg",
            106: "thunderstorms-day-overcast.svg",
            107: "thunderstorms-overcast.svg",
            108: "thunderstorms-extreme.svg",
            120: "thunderstorms-day-snow.svg",
            121: "thunderstorms-day-overcast-snow.svg",
            122: "thunderstorms-day-extreme-snow.svg",
            123: "thunderstorms-day-snow.svg",
            124: "thunderstorms-snow.svg",
            125: "thunderstorms-extreme-snow.svg",
            126: "thunderstorms-day-overcast-snow.svg",
            127: "thunderstorms-overcast-snow.svg",
            128: "thunderstorms-extreme-snow.svg",
            130: "thunderstorms-day-overcast-rain.svg",
            131: "thunderstorms-day-extreme-rain.svg",
            132: "thunderstorms-extreme-rain.svg",
            133: "thunderstorms-day-snow.svg",
            134: "thunderstorms-snow.svg",
            135: "thunderstorms-extreme-snow.svg",
            136: "thunderstorms-day-snow.svg",
            137: "thunderstorms-snow.svg",
            138: "thunderstorms-extreme-snow.svg",
            140: "thunderstorms-rain.svg",
            141: "thunderstorms-day-overcast-snow.svg",
            142: "thunderstorms-extreme-snow.svg",
            210: "partly-cloudy-day-rain.svg",
            211: "overcast-day-rain.svg",
            212: "extreme-day-rain.svg",
            220: "partly-cloudy-day-snow.svg",
            221: "overcast-day-snow.svg",
            222: "extreme-night-snow.svg",
            230: "partly-cloudy-day-snow.svg",
            231: "overcast-day-snow.svg",
            232: "extreme-night-snow.svg",
            235: "extreme-day-hail.svg"
          };
          
        
        // Exemple d'utilisation :
        //console.log(weatherCodes[10]); // Cela affichera "Pluie faible"
        

        this.labels = ['Highest temperature', 'Lowest temperature', 'Latitude', 'Longitude', 'Total rain over the day', 'Wind speed', 'Wind direction', 'Total sun hours', 'Rain probability'];
       
        this.tab = new Array();
        this.tab.push(this.tMax); //
        this.tab.push(this.tMin); //
        this.tab.push(this.latitude); //
        this.tab.push(this.longitude); //
        this.tab.push(this.cumulation); //
        this.tab.push(this.windSpeed); //
        this.tab.push(this.windDirection); //
        this.tab.push(this.sunHours); //
        this.tab.push(this.rainProb);

    
    }

    displayCard(){
        const placeholder = document.getElementById('placeholder');
        //this.chooseImage();
        let index = 0;
        let divCards = document.createElement("div");
        divCards.classList.add('divCards');
        let image = document.createElement("img");
        let date = this.dateTimeFormatting();
        image.src=`images/final/${this.weatherIcons[this.weather]}`;

        // if(this.imageIndex.includes(this.weather)) {
        //     image.src=`images/weather_icons/${this.weather}.png`;    
        // }
        // else {
        //     let countdown = this.weather;
        //     while(!this.imageIndex.includes(countdown)) {
        //         countdown--;
        //     }
        //     image.src=`images/weather_icons/${countdown}.png`;
        // }
        
        let dateText = document.createElement("h1");
        dateText.innerText = date;
        divCards.appendChild(dateText);
        divCards.appendChild(image);
        this.tab.forEach(element => {
            if(element != null && usersChoice[index]){
                let newDiv = document.createElement("div");
                newDiv.classList.add("card");
                newDiv.innerHTML = `${this.labels[index]} : ${element}`;
                divCards.appendChild(newDiv);
            }
            index ++;
        });
        
        divCards.style.backgroundColor = `rgb(128, 194, ${clamp(parseInt(this.tMax) * 2 + 200, 0, 255)})`;
        placeholder.appendChild(divCards);
        //picking the right image according to the weather
        
    }
    dateTimeFormatting(){
        let dateTab = this.date.split("-");
        let dateDays = dateTab[2].substr(0,2);
        let finalDate= dateDays+"-"+dateTab[1]+"-"+dateTab[0];
        this.date=finalDate;
        const weekDays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        
        const formattedDate = new Date(dateTab[0], dateTab[1]-1, dateDays);   
        const weekDay = weekDays[formattedDate.getDay()];
        const day = formattedDate.getDate();
        const month = months[formattedDate.getMonth()];
        const year = dateTab[0];
        if(day == 1 || day ==21 || day ==31){
            this.date = weekDay + " the " + day + "st of "+ month + " " + year;
        }
        else if(day == 2 || day ==22){
            this.date = weekDay + " the " + day + "nd of "+ month + " " + year;
        }
        else if(day == 3 || day ==23){
            this.date = weekDay + " the " + day + "rd of "+ month + " " + year;
        }
        else{
            this.date = weekDay + " the " + day + "th of "+ month + " " + year;
        }
        return this.date;
          
    }
    /*chooseImage(){
        let label = this.weatherConditions[this.weather];
        if()
    }*/
}

function clamp(value, min, max) {
    if(value < min) {
        return min;
    }
    if(value > max) {
        return max;
    }
    if(value < max && value > min) {
        return value;
    }
}