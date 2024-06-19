let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let logado = document.querySelector('#logado')
logado.innerHTML = 'Olá '+ userLogado.user

if (localStorage.getItem('token') == null) {
    alert('Faça Login primeiro!')
    window.location.href = 'login.html'
}

function sair() {
    localStorage.removeItem('token')
    window.location.href = 'login.html'
}