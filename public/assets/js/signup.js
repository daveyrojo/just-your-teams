const signupFormHandler = async function(event) {
  event.preventDefault();

  //user model elements
  const usernameEl = document.querySelector('#username-input');
  const passwordEl = document.querySelector('#password-input');
  const emailEl = document.querySelector('#email-input');
  const aboutmeEl = document.querySelector('#aboutme-input');

  //sport, league, team elements
  const sportEl = document.querySelector('#sport-input');
  const leagueEl = document.querySelector('#league-input');
  const teamEl = docuent.querySelector('#teams-input');

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      email: emailEl.value,
      about_me: aboutmeEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/user');
  } else {
    alert('Failed to sign up');
  }

  const preferences = await fetch('/api/selected', {
    method: 'POST',
    body: JSON.stringify({
      sport: sportEl.value,
      leage: leagueEl.value,
      team: teamEl.value
    })
  })
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
