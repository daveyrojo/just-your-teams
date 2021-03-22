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

  // console.log('Incoming Data');
  // console.log(JSON.stringify(response));
  // console.log('Above is line 15');

  // const id = await fetch('/api/user')

  if (response.ok) {
    
    const data = await response.json();
    // console.log('----Look Below----')
    // console.log(data.user.id);
    document.location.replace(`/user/${data.user.id}`);
  } else {
    alert('Failed to login');
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
