class WeatherCard{

    constructor(data){
        this.tMax=data['forecast'][day]['tmax'];
        this.tMin=data['forecast'][day]['tmin'];
        this.latitude=data['forecast'][day]['latitude'];
        this.longitude=data['forecast'][day]['longitude'];
        this.cumulation=data['forecast'][day]['latitude'];
        this.windSpeed=data['forecast'][day]['wind10m'];
        this.windDirection=data['forecast'][day]['dirwind10m'];
    };
    displayCard(){
        
    }
}