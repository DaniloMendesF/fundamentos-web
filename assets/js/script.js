/*
por tag: getElementByTagName()
por id: getElementById()
por classe: getElementsByClassName()
por seletor: querrySelector() Mais utilizado
*/
//Configurando o volume
var audio = document.getElementById("myaudio");
audio.volume = 0.1;

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let descricao = document.querySelector('#descricao')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let descricaoOk = false

function validaNome(){
    if (nome.value.length < 3 && nome.value.length>0){
        nome.style.background = 'red url(assets/img/denied.svg) no-repeat 98%'
        nome.style.backgroundSize = '20px'
    }
    else if(nome.value.length == 0){
        nome.style.background = 'white'
    }
    else{
        nome.style.background = 'green url(assets/img/checked.svg) no-repeat 98%'
        nome.style.backgroundSize = '20px'
        nomeOk = true
    }
}
function validaEmail(){
    if (email.value.length == 0){
        email.style.background = 'white'
    }
    else if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        email.style.background = 'red url(assets/img/denied.svg) no-repeat 98%'
        email.style.backgroundSize = '20px' 
    }
    else{
        email.style.background = 'green url(assets/img/checked.svg) no-repeat 98%'
        email.style.backgroundSize = '20px' 
        emailOk = true
    }
}

function validaAssunto(){
    if (assunto.value.length < 2 && assunto.value.length>0){
        assunto.style.background = 'red url(assets/img/denied.svg) no-repeat 98%'
        assunto.style.backgroundSize = '20px'
    }
    else if(assunto.value.length == 0){
        assunto.style.background = 'white'
    }
    else{
        assunto.style.background = 'green url(assets/img/checked.svg) no-repeat 98%'
        assunto.style.backgroundSize = '20px'
        assuntoOk = true
    }
}

function validaDescricao(){
    if (descricao.value.length < 2 && descricao.value.length>0){
        descricao.style.background = 'red url(assets/img/denied.svg) no-repeat 98%'
        descricao.style.backgroundSize = '20px'
    }
    else if(descricao.value.length == 0){
        descricao.style.background = 'white'
    }
    else{
        descricao.style.background = 'green url(assets/img/checked.svg) no-repeat 98%'
        descricao.style.backgroundSize = '20px'
        descricaoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true && descricaoOk == true){
        alert ('Formulário enviado com sucesso')
    }
    else{
        alert ('Preencha todos os campos corretamente')
    }
}