//class contato
let listaContatos = [];

class contato {
  constructor(nome, email, cpf, sobrenome, telefone, contato, mensagem) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.sobrenome = sobrenome;
    this.telefone = telefone;
    this.contato = contato;
    this.mensagem = mensagem;
  }
}

function Post(form) {
  let data = new contato(
    form.elements.namedItem("nome").value,
    form.elements.namedItem("sobrenome").value,
    form.elements.namedItem("email").value,
    form.elements.namedItem("cpf").value,
    form.elements.namedItem("telefone").value,
    form.elements.namedItem("contato").value,
    form.elements.namedItem("mensagem").value,
  );

  listaContatos.push(data);
}

function Enviar() {
  var nome = document.getElementById("nomeid");

  if (nome.value != "") {
    console.log(listaContatos);
    alert(
      "Obrigado sr(a) " +
        nome.value +
        " os seus dados foram encaminhados com sucesso",
    );
  }
}
