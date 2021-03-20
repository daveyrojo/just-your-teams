var scheduleArea = document.querySelector("#futureSchedule");
var resultsArea = document.querySelector("#pastResults");

//const moment = require('moment');  
var userName = document.querySelector("#username"); //?
//import {getSchedule,getResults} from "sportsapi.js";

function getTeam(){//get team name from username

}

 function displayStuff(name){
    
    var schedule// = getSchedule(name);
    var results//= getResults(name);
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
            schedule = [];
            for(var i=0;i<5;i++){
                var gameData = [{},{},{}]
                var res = data.schedule[i];
                gameData[0]["name"] = res.competitors[0].name;
                gameData[0]["role"] = "home";
                gameData[1]["name"] = res.competitors[1].name;
                gameData[1]["role"] = "away";
                gameData[2]["date"] = res.scheduled;
                gameData[2]["season"] = res.season.name;
                schedule.push(gameData);
            }
            console.log("Schedule", schedule)
            

            query = `https://cors-anywhere.herokuapp.com/https://api.sportradar.us/soccer-t3/eu/en/teams/sr:competitor:${PLteamkeys[name]}/results.json?api_key=${your_api_key}`
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

                results = allGames;



                console.log("schedule gotten?")
                console.log(schedule);
                console.log(results);
                for (var i=0;i<schedule.length;i++){
                    const game = document.createElement('div');
            
                    //create element with 3 rows: league name + space 
                    var formattedDate = moment(schedule[i][2].date).format('MMMM Do, h:mm a')
                    var leagueAndTime = document.createElement('p')
                    leagueAndTime.textContent = schedule[i][2].season+" \n";
                    var time = document.createElement('p')
                    
                    time.textContent = formattedDate+"\n" ;
            
            
                    //home team
                    var home = document.createElement('p')
                    home.textContent = "\nHome: "+schedule[i][0].name+"\n";
                    //away team
                    var away = document.createElement('p')
                    away.textContent = "\nAway: "+schedule[i][1].name+"\n";
                    var empty = document.createElement('p');
                    empty.textContent = "====";
                    game.appendChild(leagueAndTime);
                    game.appendChild(time);
                    game.appendChild(home);
                    game.appendChild(away);
                    game.appendChild(empty);
                    scheduleArea.appendChild(game);
                }
                for (var i=0;i<results.length;i++){
                    const game = document.createElement('div');
            
                    //create element with 3 rows: league name + space 
                    var formattedDate = moment(results[i][2].date).format('MMMM Do, h:mm a')
                    var leagueAndTime = document.createElement('p')
                    leagueAndTime.textContent = results[i][2].season+" \n"
                    var time = document.createElement('p')
                    time.textContent = formattedDate+"\n" ;
            
            
                    //home team
                    var home = document.createElement('p')
                    home.textContent = "Home: "+results[i][0].name+" "+results[i][0].score;
                    //away team
                    var away = document.createElement('p')
                    away.textContent = "Away: "+results[i][1].name+" "+results[i][1].score+"\n";
                    var empty = document.createElement('p');
                    empty.textContent = "====";
                    game.appendChild(leagueAndTime);
                    game.appendChild(time);
                    game.appendChild(home);
                    game.appendChild(away);
                    game.appendChild(empty);
                    resultsArea.appendChild(game);
                }
            })
        })
    
   



}

displayStuff("Chelsea FC")