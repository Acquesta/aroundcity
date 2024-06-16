let usuarios = [
    {
        nome: 'Teste 1',
        email: 'teste1@gmail.com',
        senha: '123456',
        tipo: 'admin',
        meta: 10,
        moedas: 500,
        km: 10,
        nivel: 1,
        interesses: ['Eletricidade', 'Quiz', 'Corrida', 'Campeonato', 'Formula1']
    },
    {
        nome: 'Teste 2',
        email: 'teste2@gmail.com',
        senha: '123456',
        tipo: 'admin',
        meta: 10,
        moedas: 250,
        km: 5,
        nivel: 1,
        interesses: ['Esportes', 'Corrida', 'Campeonato', 'Competição']
    }
]

const email = document.querySelector('#email')
const password = document.querySelector('#senha')
const button = document.querySelector('#button')

// Indentificação do Ususario
button.addEventListener('click', () => {
    if(!email.value || !password.value){
        alert('Preencha todos os campos')
    }
    else{
        const usuario = usuarios.find(usuario => {
            return usuario.email === email.value && usuario.senha === senha.value
        })
        if(usuario){
            alert(`Bem-vindo ${usuario.nome}!`)
            window.location.href= "./pages/inicio.html"
        }else{
            alert('Email ou senha incorretos')
        }
        console.log(usuario);
    }
})
