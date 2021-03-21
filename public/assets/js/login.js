const loginFormHandler = async function(event) {
  event.preventDefault();
    console.log("loginFormHandler");
  const usernameEl = document.querySelector('#username-input-login');
  const passwordEl = document.querySelector('#password-input-login');
//unsure what /api/user/login is refering to?
  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  console.log('Incoming Data');
  console.log(JSON.stringify(response));
  console.log('Above is line 15');gi

  // const id = await fetch('/api/user')

  if (response.ok) {
    // document.location.replace(`/user/${response.id}`);
  } else {
    alert('Failed to login');
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
