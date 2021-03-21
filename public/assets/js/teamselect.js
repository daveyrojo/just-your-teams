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

const updateAboutMe = async function (event) {
  event.preventDefault();
  const aboutme = document.querySelector('#aboutme');

  const response = await fetch(`/api/user/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      about_me: aboutme.value,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(aboutme.value);

  if (response.ok) {
    document.location.replace("/user");
  } else {
    alert("Failed to update about me.");
  }
}

document
  .querySelector("#about-me-button")
  .addEventListener("submit", updateAboutMe);