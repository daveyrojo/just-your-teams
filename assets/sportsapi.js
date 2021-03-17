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
/*
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
    


}*/

function getSchedule(name){ //next game is data.schedule[0], data.schedule[0].competitors[0].qualifier gives home/away
    var query = `https://api.sportradar.us/soccer-t3/eu/en/teams/sr:competitor:${PLteamkeys[name]}/schedule.json?api_key=${your_api_key}`
    //console.log(query)
    fetch(query)
        .then(function (response) {
        // console.log(response);
        return response.json();
        })
        .then(function (data) {
            console.log(data.team.name);
            //console.log(data.schedule[0])
            //did we get it
            
            var allGames = [];
            for(var i=0;i<5;i++){
                var gameData = [{},{},{}]
                var res = data.schedule[i];
                gameData[0]["name"] = res.competitors[0].name;
                gameData[0]["role"] = "home";
                gameData[1]["name"] = res.competitors[1].name;
                gameData[1]["role"] = "away";
                gameData[2]["date"] = res.scheduled;
                gameData[2]["season"] = res.season.name;
                allGames.push(gameData);
            }
            console.log(allGames)
            return allGames;
        })
}
function getResults(name){ //most recent game is data.results[0]
    var query = `https://api.sportradar.us/soccer-t3/eu/en/teams/sr:competitor:${PLteamkeys[name]}/results.json?api_key=${your_api_key}`
    fetch(query)
        .then(function (response) {
        // console.log(response);
        return response.json();
        })
        .then(function (data) {
            console.log(data.team.name);
            //console.log(data.results[0])
            //did we get it
            var allGames = [];
            for(var i=0;i<5;i++){
                var gameData = [{},{},{}]
                var res = data.results[i];
                gameData[0]["name"] = res.sport_event.competitors[0].name;
                gameData[0]["role"] = "home";
                gameData[0]["score"] = res.sport_event_status.home_score;
                gameData[1]["name"] = res.sport_event.competitors[1].name;
                gameData[1]["role"] = "away";
                gameData[1]["score"] = res.sport_event_status.away_score;
                gameData[2]["date"] = res.sport_event.scheduled;
                gameData[2]["season"] = res.sport_event.season.name;
                allGames.push(gameData);
            }
            console.log(allGames)
            return allGames;
        })
    
}

//getSchedule("Chelsea FC");
//getResults("Chelsea FC");


//HTML routes first
//router.get
//after landing page
//email to authenticate?
//uniqueness

//17: Man city
//https://api.sportradar.us/soccer-t3/eu/en/teams/sr:competitor:[insertnumber1+ here]/schedule.json?api_key=tjvrmmgbecfp8t6k4n7njuys



//team names, home/away, scores for results
//date, league