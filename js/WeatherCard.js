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