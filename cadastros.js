const listaCadastros = document.getElementById("listaCadastros");

const cadastros =
    JSON.parse(localStorage.getItem("cadastros")) || [];

cadastros.forEach((cadastro) => {

    const div = document.createElement("div");

    div.innerHTML = `
        <h2>${cadastro.assistido.nome}</h2>

        <p>
            <strong>Data de nascimento:</strong>
            ${cadastro.assistido.nascimento}
        </p>

        <p>
            <strong>Documento:</strong>
            ${cadastro.assistido.documento}
        </p>

        <p>
            <strong>Projeto:</strong>
            ${cadastro.assistido.projeto}
        </p>

        <p>
            <strong>Responsável:</strong>
            ${cadastro.responsavel.nome}
        </p>
        <p>
            <strong>Rg do Responsável:</strong>
            ${cadastro.responsavel.rg}
        </p>
        <p>
            <strong>CPF doResponsável:</strong>
            ${cadastro.responsavel.cpf}
        </p>
        <p>
            <strong>Telefone:</strong>
            ${cadastro.responsavel.telefone}
        </p>
        
        <p>
            <strong>Endereço:</strong>
            ${cadastro.responsavel.endereco}
        </p>

        <hr>
    `;

    listaCadastros.appendChild(div);
});