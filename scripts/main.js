function loadJS(url) {
  const script = document.createElement('script');
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
}

// loadJS('scripts/jtScript.js');
loadJS('scripts/mobileMenu.js');
loadJS('scripts/dynamicCards.js');
loadJS('scripts/popup.js');

const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});
