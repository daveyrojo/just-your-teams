const signupFormHandler = async function (event) {
  event.preventDefault();

  //sport, league, team elements
  const sportEl = document.querySelector("#sport-input-signup");
  const leagueEl = document.querySelector("#league-input-signup");
  const teamEl = docuent.querySelector("#team-input-signup");

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
    alert("Failed to sign up");
  }
};