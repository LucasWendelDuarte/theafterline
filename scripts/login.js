function entrar() {
    let usuario = document.querySelector('#usuario')
    let labelUser = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let labelSenha = document.querySelector('#senhaLabel')

    let msgErro = document.querySelector('#msgError')

    let listaUser = []
    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }
    listaUser = JSON.parse(localStorage.getItem('listacad'))
    
    listaUser.forEach((item) => {
        if (usuario.value == item.userCad && senha.value == item.senhaCad) {
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })
    if (usuario.value == userValid.user && senha.value == userValid.senha) {

        window.location.href = 'index.html'
        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        localStorage.setItem('token', token)
        localStorage.setItem('userLogado', JSON.stringify(userValid))
        
    } else {
        labelUser.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        labelSenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgErro.setAttribute('style', 'display:block')
        msgErro.innerHTML = 'Usuário ou senha incorreto!'
        usuario.focus()
    }
}