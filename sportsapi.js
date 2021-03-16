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