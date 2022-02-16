/*Abre e fecha o menu ao clicar no icone: hamburguer e X*/
const nav = document.querySelector('#cabecalho nav')
const toggle = document.querySelectorAll('nav .toggle') //Procura na classe nav, todas as classes toggle

for (const element of toggle) {
  //Para cada toggle:
  //Detecta um evento do tipo 'click' e chama a função anônima.
  element.addEventListener('click', function () {
    nav.classList.toggle('show') //Se tiver a classe 'show' no nav, ele é retirado, se não, coloca.
  })
}

/*Quando clicar no link, esconder o menu:*/
const links = document.querySelectorAll('nav ul li a')

for (const element of links) {
  element.addEventListener('click', function () {
    nav.classList.remove('show') //Remove a classe show se ela estiver na lista de classes da nav.
  })
}

/*Comportamento do header ao dar um Scroll na página:*/
const header = document.querySelector('#cabecalho')
const navHeight = header.offsetHeight //Deslocamento da altura.
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    //Se o movimento de scroll passar da altura do header:
    header.classList.add('scroll') //Adiciona a classe 'scroll' no header.
  } else {
    //Scroll menor que a altura do header:
    header.classList.remove('scroll') //Remove a classe 'scroll' do header.
  }
}

/*Depoimentos - Carrosel/slide (SWIPER):*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, //Ver apenas um slide por vez.
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    /*Acima de 767px*/
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/*ScrollReveal: Mostrar elementos quando der scroll na página*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700, //700 ms
  reset: true //Chegou no final da página: Volta todos os elementos, mantendo a animação.
})

scrollReveal.reveal(
  `#inicio .inicio-img, #inicio .inicio-texto,
  #sobre .image, #sobre .text,
  #servicos header, #servicos .card,
  #depoimentos header, #depoimentos .depoimentos,
  #contato .text, #contato .links,
  footer .brand, footer .social`,
  {
    interval: 100
  }
)

/*Botão: voltar para topo*/
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (this.window.scrollY >= 650) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*Menu ativo conforme a seção visível na página:*/
const sections =
  document.querySelectorAll(
    'main section[id]'
  ) /* Busca no main todas as classes section que possui um ID*/
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 2.8

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav div ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/*When Scroll:*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

/*Button's*/

function entrarEmContato() {
  open('https://api.whatsapp.com/send?phone=+550040028922&text=Olá!')
}

/*
   Atualizações: 
01. Swiper - ajuste.
02. chekpoint - regular ponto de partida e final.
*/
