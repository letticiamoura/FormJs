function cadastroUsuario() {

    const input_name = document.getElementById('name');
    var valor_input_name = input_name.value;
    
    const input_sobrenome = document.getElementById('sobrenome');
    var valor_input_sobrenome = input_sobrenome.value;
    
    const input_email = document.getElementById('email');
    var valor_input_email = input_email.value;
    
    console.log(valor_input_name)
    console.log(valor_input_sobrenome)
    console.log(valor_input_email)
    
    
    
    var formulario = document.getElementById('Formulario')
    
    var Nome2 = formulario.name.value;
    var criar_nome = document.createElement("p");
    var nome = document.createTextNode(Nome2);
    criar_nome.appendChild(nome); // insiro o texto no elemento <p>
    document.body.appendChild(criar_nome); // insiro na página
    
    var Sobrenome_escolha_texto = formulario.sobrenome.value;
    var criar_sobrenome = document.createElement("p");
    var sobrenome = document.createTextNode(Sobrenome_escolha_texto);
    criar_sobrenome.appendChild(sobrenome); // insiro o texto no elemento <p>
    document.body.appendChild(criar_sobrenome); // insiro na página
    

    var Email_escolha_texto = formulario.email.value;
    var criar_email = document.createElement("p");  // criação do elemento <p>
    var email_novo = document.createTextNode(Email_escolha_texto); //defino o texto
    criar_email.appendChild(email_novo); // insiro o texto no elemento <p>
    document.body.appendChild(criar_email); // insiro na página
}
