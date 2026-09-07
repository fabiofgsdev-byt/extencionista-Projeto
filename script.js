const form = document.getElementById("formCadastro");

const nomeAssistido = document.getElementById("nomeAssistido");

const dataNascimento = document.getElementById("dataNascimento");

const documento = document.getElementById("documento");

const projeto = document.getElementById("projeto");

// Dados do responsável

const nomeResponsavel = document.getElementById("nomeResponsavel");

const rgResponsavel = document.getElementById("rg");

const cpfResponsavel = document.getElementById("cpf");

const telefoneResponsavel = document.getElementById("telefone");

const endereco = document.getElementById("endereco");

form.addEventListener("submit", function (event) {
  event.preventDefault();
const assistido = {
    nome: nomeAssistido.value,
    nascimento: dataNascimento.value,
    documento: documento.value,
    projeto: projeto.value,
};

const responsavel = {
  nome: nomeResponsavel.value,
  rg: rgResponsavel.value,
  cpf: cpfResponsavel.value,
  telefone: telefoneResponsavel.value,
  endereço: endereco.value
  
};


const cadastro = {
  assistido: assistido,
  responsavel: responsavel
}; 

const cadastros =
  JSON.parse(localStorage.getItem("cadastros")) || [];

cadastros.push(cadastro);

localStorage.setItem(
  "cadastros",
  JSON.stringify(cadastros)
);

console.log("Cadastros salvos:", cadastros);

});
