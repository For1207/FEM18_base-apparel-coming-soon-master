const form = document.getElementById('form');
const form_btn = document.getElementById('form-btn');
const email = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');
let userInput, userName, domainName;
let emailValid = 0;
let errorMsgImg = document.createElement("img");




// Add the click-listener and invoke the handler 
form_btn.addEventListener("click", function(event) {
  event.preventDefault(); // Prevents the form submitting and the screen from refreshing
  userInput = email.value;
  emailCheck();
});

function emailCheck() {
  errorMsgImg.src = "./images/icon-error.svg";


  errorMsg.style.visibility = 'hidden';
  form.style.border = "1px solid hsl(0, 36%, 70%)";

  emailValid = 0;
  if(charATpresent() && userNameValid(userName) && domainNameValid(domainName)) {
    errorMsgImg.style.visibility = "hidden";
    return emailValid = 1;
  }
  errorMsg.style.visibility = 'visible';
  form.style.border = "1px solid red";
  email.after(errorMsgImg);
}

// Check the email address for `@` character and splits the address on user name and domain name parts
function charATpresent() {
  for (char of userInput) {
    if (char === '@') {
      userName = userInput.substr(0, userInput.indexOf('@')); //Extracts the username from the email
      domainName = userInput.substr(userInput.indexOf('@')); //Extracts the domain name from the email
      return 1;
    }
  }
}

// Check the validity of the username
function userNameValid(uName) {
  if(uName.length <= 64 && uName.match(/[a-zA-Z0-9_\-\.]/)) {
    return 1;
  }
}
// Check the validity of the domain name
function domainNameValid(dName) {
  if(domainName.length <= 253 && domainName.match(/[a-zA-Z0-9_\-\.]/)) {
    return 1;
  }
}