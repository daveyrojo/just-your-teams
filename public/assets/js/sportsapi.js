//include moment
//const moment = require('moment');  
//const fetch = require("node-fetch");

const access_level = 't'
const version = 3
var league_group = 'eu'
var language_code = 'en'
const format="json"
var your_api_key 

var PLteamkeys;


function getSchedule(name){ //returns next 5 games, who's home, who's away
    PLteamkeys  = {
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
    your_api_key = "tjvrmmgbecfp8t6k4n7njuys"
    console.log(name)
    console.log(PLteamkeys)
    var id = PLteamkeys[name]
    var query = `https://cors-anywhere.herokuapp.com/https://api.sportradar.us/soccer-t3/eu/en/teams/sr:competitor:${id}/schedule.json?api_key=${your_api_key}`
    
    fetch(query)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log(data.team.name);
            //get next 5 games
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
            console.log("Schedule", allGames)
            return allGames;
        })
}
function getResults(name){ //returns list of 5 most recent games
    var query = `https://cors-anywhere.herokuapp.com/https://api.sportradar.us/soccer-t3/eu/en/teams/sr:competitor:${PLteamkeys[name]}/results.json?api_key=${your_api_key}`
    fetch(query)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log(data.team.name);
            var allGames = [];
            for(var i=0;i<5;i++){
                var gameData = [{},{},{}]
                var res = data.results[i];
                gameData[0]["name"] = res.sport_event.competitors[0].name;
                gameData[0]["role"] = "home";
                gameData[0]["score"] = res.sport_event_status.home_score; //home team given first
                gameData[1]["name"] = res.sport_event.competitors[1].name;
                gameData[1]["role"] = "away";
                gameData[1]["score"] = res.sport_event_status.away_score;
                gameData[2]["date"] = res.sport_event.scheduled;
                gameData[2]["season"] = res.sport_event.season.name;
                allGames.push(gameData);
            }
            console.log("results ", allGames)
            return allGames;
        })
    
}

//team names, home/away, scores for results
//date, league
//module.exports = {getSchedule,getResults}