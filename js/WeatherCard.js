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

        this.weatherCodes = {
            0: "Soleil",
            1: "Peu nuageux",
            2: "Ciel voilé",
            3: "Nuageux",
            4: "Très nuageux",
            5: "Couvert",
            6: "Brouillard",
            7: "Brouillard givrant",
            10: "Pluie faible",
            11: "Pluie modérée",
            12: "Pluie forte",
            13: "Pluie faible verglaçante",
            14: "Pluie modérée verglaçante",
            15: "Pluie forte verglaçante",
            16: "Bruine",
            20: "Neige faible",
            21: "Neige modérée",
            22: "Neige forte",
            30: "Pluie et neige mêlées faibles",
            31: "Pluie et neige mêlées modérées",
            32: "Pluie et neige mêlées fortes",
            40: "Averses de pluie locales et faibles",
            41: "Averses de pluie locales",
            42: "Averses locales et fortes",
            43: "Averses de pluie faibles",
            44: "Averses de pluie",
            45: "Averses de pluie fortes",
            46: "Averses de pluie faibles et fréquentes",
            47: "Averses de pluie fréquentes",
            48: "Averses de pluie fortes et fréquentes",
            60: "Averses de neige localisées et faibles",
            61: "Averses de neige localisées",
            62: "Averses de neige localisées et fortes",
            63: "Averses de neige faibles",
            64: "Averses de neige",
            65: "Averses de neige fortes",
            66: "Averses de neige faibles et fréquentes",
            67: "Averses de neige fréquentes",
            68: "Averses de neige fortes et fréquentes",
            70: "Averses de pluie et neige mêlées localisées et faibles",
            71: "Averses de pluie et neige mêlées localisées",
            72: "Averses de pluie et neige mêlées localisées et fortes",
            73: "Averses de pluie et neige mêlées faibles",
            74: "Averses de pluie et neige mêlées",
            75: "Averses de pluie et neige mêlées fortes",
            76: "Averses de pluie et neige mêlées faibles et nombreuses",
            77: "Averses de pluie et neige mêlées fréquentes",
            78: "Averses de pluie et neige mêlées fortes et fréquentes",
            100: "Orages faibles et locaux",
            101: "Orages locaux",
            102: "Orages fort et locaux",
            103: "Orages faibles",
            104: "Orages",
            105: "Orages forts",
            106: "Orages faibles et fréquents",
            107: "Orages fréquents",
            108: "Orages forts et fréquents",
            120: "Orages faibles et locaux de neige ou grésil",
            121: "Orages locaux de neige ou grésil",
            122: "Orages locaux de neige ou grésil",
            123: "Orages faibles de neige ou grésil",
            124: "Orages de neige ou grésil",
            125: "Orages de neige ou grésil",
            126: "Orages faibles et fréquents de neige ou grésil",
            127: "Orages fréquents de neige ou grésil",
            128: "Orages fréquents de neige ou grésil",
            130: "Orages faibles et locaux de pluie et neige mêlées ou grésil",
            131: "Orages locaux de pluie et neige mêlées ou grésil",
            132: "Orages fort et locaux de pluie et neige mêlées ou grésil",
            133: "Orages faibles de pluie et neige mêlées ou grésil",
            134: "Orages de pluie et neige mêlées ou grésil",
            135: "Orages forts de pluie et neige mêlées ou grésil",
            136: "Orages faibles et fréquents de pluie et neige mêlées ou grésil",
            137: "Orages fréquents de pluie et neige mêlées ou grésil",
            138: "Orages forts et fréquents de pluie et neige mêlées ou grésil",
            140: "Pluies orageuses",
            141: "Pluie et neige mêlées à caractère orageux",
            142: "Neige à caractère orageux",
            210: "Pluie faible intermittente",
            211: "Pluie modérée intermittente",
            212: "Pluie forte intermittente",
            220: "Neige faible intermittente",
            221: "Neige modérée intermittente",
            222: "Neige forte intermittente",
            230: "Pluie et neige mêlées",
            231: "Pluie et neige mêlées",
            232: "Pluie et neige mêlées",
            235: "Averses de grêle"
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
        if(this.imageIndex.includes(this.weather)) {
            image.src=`images/weather_icons/${this.weather}.png`;    
        }
        else {
            let countdown = this.weather;
            while(!this.imageIndex.includes(countdown)) {
                countdown--;
            }
            image.src=`images/weather_icons/${countdown}.png`;
        }
        divCards.appendChild(image);
        let dateText = document.createElement("h1");
        dateText.innerText = date;
        divCards.appendChild(dateText);
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
        this.date = weekDay + " the " + day + " of "+ month + " " + year;
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