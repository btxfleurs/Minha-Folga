const elementoIdeia = document.querySelector("#ideia")
const buttonPergunta = document.querySelector('#buttonPergunta')
const ideias = [
  "Sair com algum amigo.",
  "Ir para a Liberdade.",
  "Ir para o Bom Retiro.",
  "Assistir um filme.",
  "Assistir um dorama.",
  "Maratonar algum conteúdo do BTS.",
  "Maratonar algum conteúdo do Stray Kids.",
  "Dormir o dia inteiro.",
  "Ir comer fora.",
  "Desenhar.",
  "Pintar um quadro.",
  "Organizar o quarto.",
  "Estudar!",
  "Programar alguma coisa.",
  "Fazer algumas páginas do Kpop Journal.",
  "Maratona de estudo de coreano.",
  "Se divertir cantando e dançando.",
  "Sinceramente? Fazer qualquer coisa para descansar",
  "Assistir video de study vlog no YouTube para se sentir motivada.",
]

function fazerPergunta() {

  buttonPergunta.setAttribute("disabled", true)
  
  const totalIdeias = ideias.length
  const numeroAleatorio = Math.floor(Math.random() * totalIdeias)

  elementoIdeia.innerHTML = ideias[numeroAleatorio]
  elementoIdeia.style.opacity = 1;

  setTimeout(function() {
    elementoIdeia.style.opacity = 0;
    buttonPergunta.removeAttribute("disabled")
  }, 3000)
}