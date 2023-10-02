class WeatherCard{

    constructor(data){      
        this.tMax=data['forecast'][days]['tmax'];
        this.tMin=data['forecast'][days]['tmin'];
        this.latitude=data['forecast'][days]['latitude'];
        this.longitude=data['forecast'][days]['longitude'];
        this.cumulation=data['forecast'][days]['rr10'];
        this.windSpeed=data['forecast'][days]['wind10m'];
        this.windDirection=data['forecast'][days]['dirwind10m'];
        this.date = data['forecast'][days]['datetime'];

        this.tab = new Array();
        this.tab.push(this.tMax);
        this.tab.push(this.tMin);
        this.tab.push(this.latitude);
        this.tab.push(this.longitude);
        this.tab.push(this.cumulation);
        this.tab.push(this.windSpeed);
        this.tab.push(this.windDirection);
    };
    displayCard(){
        const placeholder = document.getElementById('placeholder');
        this.dateTimeFormatting();
        this.tab.forEach(element => {
            if(element != null ){
                let newDiv = document.createElement("div");
                newDiv.classList.add("card");
                newDiv.innerHTML = `${element}`;
                placeholder.appendChild(newDiv);
            }
        });
    }
    dateTimeFormatting(){
        console.log(this.date);
        let dateTab = this.date.split("-");
        let dateDays = dateTab[2].substr(0,2);
        let finalDate= dateDays+"-"+dateTab[1]+"-"+dateTab[0];
        this.date=finalDate;
        console.log(this.date)

        const weekDays = ["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

        
        const formattedDate = new Date(dateTab[0], dateTab[1]-1, dateDays);   
        console.log(formattedDate);
        const weekDay = weekDays[formattedDate.getDay()];
        const day = formattedDate.getDate();
        const month = months[formattedDate.getMonth()];
        const year = dateTab[0];
        console.log(weekDay + " " + day + " "+ month + " " + year);
          
    }
}