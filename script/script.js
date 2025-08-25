const imgVisibilityOff  = document.getElementById("imageLoginEyeVisibility")
const inputTypePassword = document.getElementById("idPassowordUser")

imgVisibilityOff.addEventListener('click', function(){
    if (imgVisibilityOff.src.endsWith("visibilityOff24px.svg")) {
        imgVisibilityOff.src = "images/loginPage/visibilityOn24px.svg";
        inputTypePassword.type = "text";
    } else {
        imgVisibilityOff.src = "images/loginPage/visibilityOff24px.svg";
        inputTypePassword.type = "password";
    }

});