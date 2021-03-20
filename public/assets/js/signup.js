const signupFormHandler = async function(event) {
  event.preventDefault();

  //user model elements
  const usernameEl = document.querySelector('#username-input-signup');
  const passwordEl = document.querySelector('#password-input-signup');
  const emailEl = document.querySelector('#email-input-signup');
  const aboutmeEl = document.querySelector('#aboutme-input-signup');

  //sport, league, team elements
  const sportEl = document.querySelector('#sport-input-signup');
  const leagueEl = document.querySelector('#league-input-signup');
  const teamEl = docuent.querySelector('#team-input-signup');

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
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
