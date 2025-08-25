const imgVisibilityOff  = document.getElementById("imageLoginEyeVisibility")

imgVisibilityOff.addEventListener('click', function(){
    if (imgVisibilityOff.src.endsWith("visibilityOff24px.svg")) {
        imgVisibilityOff.src = "../images/loginPage/visibilityOn24px.svg";
    } else {
        imgVisibilityOff.src = "../images/loginPage/visibilityOff24px.svg";
    }

});