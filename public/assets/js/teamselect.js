const sportTeamLeagueSelect = async function (event) {
  event.preventDefault();

    //sport, league, team elements
    const sportEl = document.querySelector("#sportinput");
    const leagueEl = document.querySelector("#leagueinput");
    const teamEl = document.querySelector("#teamsinput");

  const response = await fetch("/api/selected", {
    method: "POST",
    body: JSON.stringify({
      sport: sportEl.value,
      league: leagueEl.value,
      team: teamEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/user");
  } else {
    alert("Failed to update sport, team, or league.");
  }

  console.log(sportEl.value);
  console.log("----------------");
  console.log(leagueEl.value);
  console.log("----------------");
  console.log(teamEl.value);
};

document
  .querySelector("#sign-up-form")
  .addEventListener("submit", sportTeamLeagueSelect);


//update the about me
const updateAboutMe = async function (event) {
  event.preventDefault();
  const aboutme = document.querySelector('#aboutme');

  let browserUrl = document.location.href;
  console.log(browserUrl);

  let id = browserUrl.split("/")[browserUrl.split("/").length - 1];
  console.log("ID: " + id);

  const response = await fetch(`/api/user/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      id: id,
      about_me: aboutme.value,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  console.log('ABOUT ME VALUE BELOW');
  console.log(aboutme.value);

  if (response.ok) {
    document.location.replace(`/user/${id}`);
  } else {
    alert("Failed to update about me.");
  }
}

document
  .querySelector("#about-me-button")
  .addEventListener("submit", updateAboutMe);