var scheduleArea = document.querySelector("future schedule");
var resultsArea = document.querySelector("past results");

//const moment = require('moment');  
var userName = ""; //?
//import {getSchedule,getResults} from "sportsapi.js";

function getTeam(){//get team name from username

}

 function displayStuff(name){
    var schedule = getSchedule(name);
    var results= getResults(name);
    
    
    console.log("schedule gotten?")
    console.log(schedule);
    console.log(results);
    for (var i=0;i<schedule.length;i++){
        const game = document.createElement('div');

        //create element with 3 rows: league name + space 
        var formattedDate = moment(schedule[i][2].date).format('MMMM Do, h:mm a')
        const leagueAndTime = document.createTextNode(schedule[i][2].season+" "+formattedDate );


        //home team
        const home = document.createTextNode("Home: "+schedule[i][0].name);
        //away team
        const away = document.createTextNode("Away: "+schedule[i][1].name);
        game.appendChild(leagueAndTime);
        game.appendChild(home);
        game.appendChild(away);
        scheduleArea.appendChild(game);
    }
    for (var i=0;i<results.length;i++){
        const game = document.createElement('div');

        //create element with 3 rows: league name + space 
        var formattedDate = moment(results[i][2].date).format('MMMM Do, h:mm a')
        const leagueAndTime = document.createTextNode(results[i][2].season+" "+formattedDate );


        //home team
        const home = document.createTextNode("Home: "+results[i][0].name+" "+results[i][0].score);
        //away team
        const away = document.createTextNode("Away: "+results[i][1].name+" "+results[i][1].score);
        game.appendChild(leagueAndTime);
        game.appendChild(home);
        game.appendChild(away);
        scheduleArea.appendChild(game);
    }



}

displayStuff("Chelsea FC")