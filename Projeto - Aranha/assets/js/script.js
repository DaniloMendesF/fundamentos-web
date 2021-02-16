let nome = window.document.getElementById('nome')
let email = window.document.getElementById('email')
let descricao = window.document.getElementById('descricao')
let nomeOk = false
let emailOk = false
let descricaoOk = false

function validaNome(){
    if (nome.value.length < 3 && nome.value.length>0){
        nome.style.background = 'red url(assets/img/denied.svg) no-repeat 98%'
        nome.style.backgroundSize = '20px'
        nome.style.color = 'white'
        nomeOk = false

    }
    else if(nome.value.length == 0){
        nome.style.background = 'white'
    }
    else{
        nome.style.background = 'green url(assets/img/checked.svg) no-repeat 98%'
        nome.style.backgroundSize = '20px'
        nome.style.color = 'white'
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
        email.style.color = 'white'
        emailOk = false
    }
    else{
        email.style.background = 'green url(assets/img/checked.svg) no-repeat 98%'
        email.style.backgroundSize = '20px'
        email.style.color = 'white'
        emailOk = true
    }
}

function validaDescricao(){
    if (descricao.value.length < 2 && descricao.value.length>0){
        descricao.style.background = 'red url(assets/img/denied.svg) no-repeat 98%'
        descricao.style.backgroundSize = '20px'
        descricao.style.color = 'white'
        descricaoOk = false
    }
    else if(descricao.value.length == 0){
        descricao.style.background = 'white'
    }
    else{
        descricao.style.background = 'green url(assets/img/checked.svg) no-repeat 98%'
        descricao.style.backgroundSize = '20px'
        descricao.style.color = 'white'
        descricaoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && descricaoOk == true){
        alert ('Formulário enviado com sucesso')
    }
    else{
        alert ('Preencha todos os campos corretamente')
    }
}