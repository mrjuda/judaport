function loadJS(url){
  let script = document.createElement('script');
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
}

loadJS('scripts/jtScript.js');
loadJS('scripts/mobileMenu.js');


// The main.js document


