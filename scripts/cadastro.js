let usuarios = [
    {
        nome: 'Teste 1',
        email: 'teste1@gmail.com',
        telefone: '123456789',
        senha: '123456',
        tipo: 'admin',
        moedas: 500,
        km: 10,
        nivel: 1,
        interesses: ['Eletricidade', 'Quiz', 'Corrida', 'Campeonato', 'Formula1']
    },
    {
        nome: 'Teste 2',
        email: 'teste2@gmail.com',
        telefone: '123456789',
        senha: '123456',
        tipo: 'admin',
        moedas: 250,
        km: 5,
        nivel: 1,
        interesses: ['Esportes', 'Corrida', 'Campeonato', 'Competição']
    }
]

const nome = document.querySelector('#nome')
const telefone = document.querySelector('#telefone')
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const confirmaSenha = document.querySelector('#confirmaSenha')

const button = document.querySelector('#button')

button.addEventListener('click', () =>{
    if(!nome.value || !telefone.value || !email.value || !senha.value || !confirmaSenha.value ){
        alert('Preencha todos os campos')
    }
    else{
        const usuario = usuarios.find(usuario => usuario.email === email.value)
        if(usuario){
            alert('Email já cadastrado')
        }
        else{
            if(senha.value !== confirmaSenha.value){
                alert('Senhas não conferem')
            }
            else{
                const novoUsuario = {
                    nome: nome.value,
                    email: email.value,
                    telefone: telefone.value,
                    senha: senha.value,
                    tipo: 'normal'
                }
                usuarios.push(novoUsuario)
                console.log(usuarios);
            }

        }
    }
})
