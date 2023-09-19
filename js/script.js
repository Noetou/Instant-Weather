let codeInsee
let cp = 76570
let cityN = 0 //1st city out of all with the same code
let day = 0 //1st day out of 14

fetch('https://geo.api.gouv.fr/communes?codePostal='.concat(cp))
    .then(response => response.json())
    .then(data => {
        codeInsee = data[cityN]['code']
        fetch(`https://api.meteo-concept.com/api/forecast/daily?token=9fc5110929e9db4b61fcc700441c5d39e82c9e6d6aeeacc3223498621f238c38&insee=${codeInsee}`)
        .then(response => response.json())
        .then(data => {
            let maxTemp = data['forecast'][day]['tmax']
            let minTemp = data['forecast'][day]['tmin']
            let rainProb = data['forecast'][day]['probarain']
            let dailySunHours = data['forecast'][day]['sun_hours']
            console.log(maxTemp)
            console.log(minTemp)
            console.log(rainProb)
            console.log(dailySunHours)
        })
        .catch(error => {
            console.error('Erreur lors de la requête API:', error)
        })
    })