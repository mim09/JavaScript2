
function hijackGoogleLogo() {
  const googleLogo = document.getElementById('hplogo'); //select the element googlelogo
  googleLogo.src = "https://www.hackyourfuture.dk/static/logo-dark.svg" // change the source
  googleLogo.srcset = "https://www.hackyourfuture.dk/static/logo-dark.svg" //change srcset

}

hijackGoogleLogo();