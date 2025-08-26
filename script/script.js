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

async function hashSenha(senha) {
  const encoder = new TextEncoder();
  const data = encoder.encode(senha);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  // Converter ArrayBuffer para hexadecimal
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

hashSenha("minhaSenha123").then(console.log);
