class WeatherCard{

    constructor(data){      
        this.tMax=data['forecast'][days]['tmax'];
        this.tMin=data['forecast'][days]['tmin'];
        this.latitude=data['forecast'][days]['latitude'];
        this.longitude=data['forecast'][days]['longitude'];
        this.cumulation=data['forecast'][days]['latitude'];
        this.windSpeed=data['forecast'][days]['wind10m'];
        this.windDirection=data['forecast'][days]['dirwind10m'];

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
        this.tab.forEach(element => {
            if(element != null ){
                let newDiv = document.createElement("div");
                newDiv.classList.add("card");
                newDiv.innerHTML = `${element}`;
                placeholder.appendChild(newDiv);
            }
        });
    }
}