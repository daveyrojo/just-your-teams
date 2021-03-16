//include moment
const moment = require('moment');  
const fetch = require("node-fetch");

const access_level = 't'
const version = 3
var league_group = 'eu'
var language_code = 'en'
var day = moment().format("DD");
var month = moment().format("MM");
var year = moment().format("YYYY")
const format="json"
const your_api_key = "tjvrmmgbecfp8t6k4n7njuys"


function getSportsInfo(){
    //var query = `https://api.sportradar.us/soccer-${access_level}${version}/${league_group}/${language_code}/schedules/${year}-${month}-${day}/results.${format}?api_key=${your_api_key}`
    for(var i=0;i<30;i++){
        var query = `https://api.sportradar.us/soccer-t3/eu/en/teams/sr:competitor:${i}/schedule.json?api_key=${your_api_key}`
    console.log(query)
    fetch(query)
        .then(function (response) {
        // console.log(response);
        return response.json();
        })
        .then(function (data) {
            console.log(data.team.name," ",i);
            //did we get it
        })
    }
    


}

getSportsInfo();


//HTML routes first
//router.get
//after landing page
//email to authenticate?
//uniqueness

//17: Man city
//https://api.sportradar.us/soccer-t3/eu/en/teams/sr:competitor:[insertnumber1+ here]/schedule.json?api_key=tjvrmmgbecfp8t6k4n7njuys

var PLteamkeys = {
    "Arsenal FC":42,
    "Aston Villa FC":40,
    "Brighton & Hove Albion FC":30,
    "Burnley FC":6,
    "Chelsea FC":38,
    "Crystal Palace FC": 7,
    "Everton FC":48,
    "Fulham FC":43,
    "Leeds United":34,
    "Leicester City FC":31,
    "Liverpool FC":44,
    "Manchester City FC": 17,
    "Manchester United FC":35,
    "Newcastle United FC":39,
    "Sheffield United FC":15,
    "Southampton FC":45,
    "Tottenham Hotspur FC":33,
    "West Bromwich Albion": 8,
    "West Ham United FC":37,
    "Wolverhampton Wanderers FC":3,
}