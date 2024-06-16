//slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// usuarios cadastrados

let usuarios = [
    {
        nome: 'Teste 1',
        email: 'teste1@gmail.com',
        telefone: '123456789',
        senha: '123456',
        tipo: 'admin',
        meta: 10,
        moedas: 0,
        km: 1,
        nivel: 1,
        interesses: ['Eletricidade', 'Quiz', 'Corrida', 'Campeonato', 'Formula1']
    },
    {
        nome: 'Teste 2',
        email: 'teste2@gmail.com',
        telefone: '123456789',
        senha: '123456',
        tipo: 'admin',
        meta: 10,
        moedas: 250,
        km: 5,
        nivel: 1,
        interesses: ['Esportes', 'Corrida', 'Campeonato', 'Competição']
    }
]

// Interação com progresso de bike-e

const progresso = document.querySelector('#progresso')
const trajeto = document.querySelector('#trajeto')
const concluido = document.querySelector('#concluido')
const pontos = document.querySelector('#pontos')
const pontosSimulacao = document.querySelector('#pontosSimulacao')
const meta = document.querySelector('#meta')



function diminuiProgresso(){
    usuarios[0].km -= 1
    atualizaDados()
}

function aumentaProgresso(){
    usuarios[0].km += 1
    atualizaDados()
}

function calculaTrajeto(){
    let trajetoCalculado = usuarios[0].km / usuarios[0].meta * 100
    concluido.style.width = `${trajetoCalculado}%`
}

function atualizaDados(){
    meta.innerHTML = `Meta: ${usuarios[0].meta}km`

    progresso.innerHTML = `${usuarios[0].km}km`
    pontosSimulacao.innerHTML = `${usuarios[0].km}km`

    pontos.innerHTML = `Pontos: ${usuarios[0].km * 10}`

    calculaTrajeto()
}

atualizaDados()