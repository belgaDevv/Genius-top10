/* ---------------------------animação header-----------------------------------*/
const header = document.querySelector("header"); // seleciona o elemento <header>

window.addEventListener("scroll", () => { // adiciona evento ao rolar a página
  if (window.scrollY > 50) { // se a rolagem vertical for maior que 50px
    header.classList.add("scrolled"); // adiciona a classe 'scrolled' ao header
  } else {
    header.classList.remove("scrolled"); // remove a classe 'scrolled' se rolagem < 50
  }
});


/* ---------------------------pós click--------------------------------*/
const cards = document.querySelectorAll(".card"); // seleciona todos os cards
const sobreposição = document.getElementById("sobreposição"); // seleciona a sobreposição
const cardExpandido = sobreposição.querySelector(".card-expandido"); // seleciona o card expandido dentro da sobreposição
const imgExpandida = cardExpandido.querySelector("img"); // seleciona a imagem do card expandido
const nomeExpandido = cardExpandido.querySelector("h2"); // seleciona o título do card expandido
const personalText = cardExpandido.querySelector("p"); // seleciona o texto do card expandido

cards.forEach(card => {
  card.addEventListener("click", () => { // adiciona evento de clique a cada card
    const imgSrc = card.querySelector("img").src; // pega src da imagem clicada
    const nome = card.querySelector("p").innerText; // pega o nome do card clicado
    const personaDescricao = card.dataset.texto; // pega o texto extra do card (data-texto)

    imgExpandida.src = imgSrc; // atualiza a imagem do card expandido
    nomeExpandido.innerText = nome; // atualiza o nome do card expandido
    personalText.innerText = personaDescricao; // atualiza a descrição do card expandido
    sobreposição.classList.add("active"); // mostra a sobreposição
  });
});

sobreposição.addEventListener("click", () => { // fecha a sobreposição ao clicar fora
  sobreposição.classList.remove("active"); // remove a classe 'active'
});
