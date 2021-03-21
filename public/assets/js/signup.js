const signupFormHandler = async function(event) {
  event.preventDefault();

  //user model elements
  const usernameEl = document.querySelector("#username-input");
  const passwordEl = document.querySelector("#password-input");
  const emailEl = document.querySelector("#email-input");

  //sport, league, team elements - saved from when we were tryig to create two modelswith one function.
  const sportEl = document.querySelector("#sport-input");
  const leagueEl = document.querySelector("#league-input");
  const teamEl = document.querySelector("#teams-input");

  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl.value,
      email: emailEl.value,
      about_me: null,
      sport: sportEl.value,
      league: leagueEl.value,
      team: teamEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/user");
  } else {
    alert("Failed to sign up");
  }
};

document
  .querySelector('#sign-up-form')
  .addEventListener('submit', signupFormHandler);


 