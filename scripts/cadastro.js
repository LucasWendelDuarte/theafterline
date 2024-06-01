//Variáveis de atribuição

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmaSenha = document.querySelector('#confirme')
let labelConfirme = document.querySelector('#labelConfirma')
let validConfirmeSenha = false

//Variáveis de menssagens de erro ou correto

let msgErro = document.querySelector('#msgError')
let msgSucesso = document.querySelector('#msgSuccess')

//requisitos minímos dos campos

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 9) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome: Insira no minímo 10 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <=4) {
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuário: Insira o minímo 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length <=7) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha: Insira o minímo 8 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
    }
})

confirmaSenha.addEventListener('keyup', () => {
    if (senha.value != confirmaSenha.value) {
        labelConfirme.setAttribute('style', 'color: red')
        labelConfirme.innerHTML = 'Cnfirme a senha: As senhas são diferentes'
        confirmaSenha.setAttribute('style', 'border-color: red')
        validConfirmeSenha = false
    } else {
        labelConfirme.setAttribute('style', 'color: green')
        labelConfirme.innerHTML = 'Confirme a senha'
        confirmaSenha.setAttribute('style', 'border-color: green')
        validConfirmeSenha = true
    }
})

//Validação de cadastro

function cadastrar() {

    if (validNome && validUsuario && validSenha && validConfirmeSenha) {

        let listacad = JSON.parse(localStorage.getItem('listacad') || '[]')
        listacad.push({
            nomeCad: nome.value,
            userCad: usuario.value,
            senhaCad: senha.value
        })
        localStorage.setItem('listacad', JSON.stringify(listacad))

        msgSucesso.setAttribute('style', 'display: block')
        msgSucesso.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgErro.setAttribute('style', 'display: none')

        setTimeout(()=>{
            window.location.href = 'login.html'
        }, 2000)
    } else {
        
        msgErro.setAttribute('style', 'display: block')
        msgErro.innerHTML = 'Preencha todos os campos corretamente!'
        msgSucesso.setAttribute('style', 'display: none')
    }
    
}