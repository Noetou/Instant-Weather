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
        let index = 0;
        this.tab.forEach(element => {
            if(element != null && usersChoice[index]){
                let newDiv = document.createElement("div");
                newDiv.classList.add("card");
                newDiv.innerHTML = `${this.labels[index]} : ${element}`;
                placeholder.appendChild(newDiv);
            }
            index++;
        });
    }
}