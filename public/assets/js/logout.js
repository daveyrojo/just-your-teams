const logout = async function() {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out');
  }
};

const userpage = async function () {
    let browserUrl = document.location.href;
    
    let id = browserUrl.split("/")[browserUrl.split("/").length - 1];
     
    document.location.replace("/user/" + id);
  
};

const teamSearch = async function () {
    let browserUrl = document.location.href;

    let id = browserUrl.split("/")[browserUrl.split("/").length - 1];

    document.location.replace("/team-search/" + id);
}

document.querySelector('#logout-link').addEventListener('click', logout);

document.querySelector("#team-search").addEventListener("click", teamSearch);

document.querySelector("#userpage").addEventListener("click", userpage);