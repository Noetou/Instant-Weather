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
        this.date = data['forecast'][days]['datetime'];
        this.weather = data['forecast'][days]['weather'];



        this.weatherConditions = [
            'Soleil',
            'Peu nuageux',
            'Ciel voilé',
            'Nuageux',
            'Très nuageux',
            'Couvert',
            'Brouillard',
            'Brouillard givrant',
            'Pluie faible',
            'Pluie modérée',
            'Pluie forte',
            'Pluie faible verglaçante',
            'Pluie modérée verglaçante',
            'Pluie forte verglaçante',
            'Bruine',
            'Neige faible',
            'Neige modérée',
            'Neige forte',
            'Pluie et neige mêlées faibles',
            'Pluie et neige mêlées modérées',
            'Pluie et neige mêlées fortes',
            'Averses de pluie locales et faibles',
            'Averses de pluie locales',
            'Averses locales et fortes',
            'Averses de pluie faibles',
            'Averses de pluie',
            'Averses de pluie fortes',
            'Averses de pluie faibles et fréquentes',
            'Averses de pluie fréquentes',
            'Averses de pluie fortes et fréquentes',
            'Averses de neige localisées et faibles',
            'Averses de neige localisées',
            'Averses de neige localisées et fortes',
            'Averses de neige faibles',
            'Averses de neige',
            'Averses de neige fortes',
            'Averses de neige faibles et fréquentes',
            'Averses de neige fréquentes',
            'Averses de neige fortes et fréquentes',
            'Averses de pluie et neige mêlées localisées et faibles',
            'Averses de pluie et neige mêlées localisées',
            'Averses de pluie et neige mêlées localisées et fortes',
            'Averses de pluie et neige mêlées faibles',
            'Averses de pluie et neige mêlées',
            'Averses de pluie et neige mêlées fortes',
            'Averses de pluie et neige mêlées faibles et nombreuses',
            'Averses de pluie et neige mêlées fréquentes',
            'Averses de pluie et neige mêlées fortes et fréquentes',
            'Orages faibles et locaux',
            'Orages locaux',
            'Orages fort et locaux',
            'Orages faibles',
            'Orages',
            'Orages forts',
            'Orages faibles et fréquents',
            'Orages fréquents',
            'Orages forts et fréquents',
            'Orages faibles et locaux de neige ou grésil',
            'Orages locaux de neige ou grésil',
            'Orages locaux de neige ou grésil',
            'Orages faibles de neige ou grésil',
            'Orages de neige ou grésil',
            'Orages de neige ou grésil',
            'Orages faibles et fréquents de neige ou grésil',
            'Orages fréquents de neige ou grésil',
            'Orages fréquents de neige ou grésil',
            'Orages faibles et locaux de pluie et neige mêlées ou grésil',
            'Orages locaux de pluie et neige mêlées ou grésil',
            'Orages fort et locaux de pluie et neige mêlées ou grésil',
            'Orages faibles de pluie et neige mêlées ou grésil',
            'Orages de pluie et neige mêlées ou grésil',
            'Orages forts de pluie et neige mêlées ou grésil',
            'Orages faibles et fréquents de pluie et neige mêlées ou grésil',
            'Orages fréquents de pluie et neige mêlées ou grésil',
            'Orages forts et fréquents de pluie et neige mêlées ou grésil',
            'Pluies orageuses',
            'Pluie et neige mêlées à caractère orageux',
            'Neige à caractère orageux',
            'Pluie faible intermittente',
            'Pluie modérée intermittente',
            'Pluie forte intermittente',
            'Neige faible intermittente',
            'Neige modérée intermittente',
            'Neige forte intermittente',
            'Pluie et neige mêlées',
            'Pluie et neige mêlées',
            'Pluie et neige mêlées',
            'Averses de grêle'
        ];

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
        let date = this.dateTimeFormatting();
        let index = 0;
        this.tab.forEach(element => {
            if(element != null && usersChoice[index]){
                let newDiv = document.createElement("div");
                newDiv.classList.add("card");
                newDiv.innerHTML = `${this.labels[index]} : ${element}`;
                placeholder.appendChild(newDiv);
            }
            index ++;
        });
    }
    dateTimeFormatting(){
        let dateTab = this.date.split("-");
        let dateDays = dateTab[2].substr(0,2);
        let finalDate= dateDays+"-"+dateTab[1]+"-"+dateTab[0];
        this.date=finalDate;
        const weekDays = ["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

        
        const formattedDate = new Date(dateTab[0], dateTab[1]-1, dateDays);   
        const weekDay = weekDays[formattedDate.getDay()];
        const day = formattedDate.getDate();
        const month = months[formattedDate.getMonth()];
        const year = dateTab[0];
        return weekDay + " " + day + " "+ month + " " + year;
          
    }
}