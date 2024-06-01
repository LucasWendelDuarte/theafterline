let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let logado = document.querySelector('#logado')
logado.innerHTML = 'Olá '+userLogado.user

if (localStorage.getItem('token') == null) {
    alert('Você não tem permissão para entar aqui, faça Login primeiro!')
    window.location.href = 'login.html'
}

function sair() {
    localStorage.removeItem('token')
    window.location.href = 'login.html'
}