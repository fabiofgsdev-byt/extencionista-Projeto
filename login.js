const form = document.querySelector("#loginForm");
const erro = document.querySelector("#erro");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const usuario = document.querySelector("#usuario").value;
    const senha = document.querySelector("#senha").value;

    if(usuario === "admin" && senha === "1234"){

        sessionStorage.setItem("logado", "true");

        window.location.href = "index.html";

    }else{

        erro.textContent = "Usuário ou senha incorretos.";

    }

});