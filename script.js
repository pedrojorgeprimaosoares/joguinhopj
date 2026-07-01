const perguntas = [
{
pergunta:"O que é um átomo?",
opcoes:[
"A menor unidade de um elemento químico",
"Um planeta",
"Uma estrela",
"Uma molécula"
],
correta:0
},
{
pergunta:"Qual partícula possui carga positiva?",
opcoes:[
"Elétron",
"Nêutron",
"Próton",
"Fóton"
],
correta:2
},
{
pergunta:"Qual partícula não possui carga elétrica?",
opcoes:[
"Próton",
"Elétron",
"Nêutron",
"Íon"
],
correta:2
},
{
pergunta:"Onde ficam os elétrons?",
opcoes:[
"No núcleo",
"Na eletrosfera",
"No próton",
"No nêutron"
],
correta:1
},
{
pergunta:"O núcleo do átomo é formado por:",
opcoes:[
"Prótons e nêutrons",
"Apenas elétrons",
"Apenas prótons",
"Elétrons e fótons"
],
correta:0
}
];

let perguntaAtual = 0;
let pontos = 0;
let vidas = 3;
let tempo = 20;
let cronometro;

const quiz = document.getElementById("quiz");
const pergunta = document.getElementById("pergunta");
const respostas = document.getElementById("respostas");

function iniciarJogo(){

document.querySelector("button").style.display="none";

quiz.classList.remove("oculto");

mostrarPergunta();

iniciarTempo();

}

function mostrarPergunta(){

const atual = perguntas[perguntaAtual];

pergunta.innerHTML = atual.pergunta;

respostas.innerHTML="";

document.getElementById("score").innerHTML="⭐ "+pontos;

document.getElementById("vidas").innerHTML=
"❤️".repeat(vidas);

atual.opcoes.forEach((texto,index)=>{

const botao=document.createElement("button");

botao.innerHTML=texto;

botao.onclick=()=>responder(index);

respostas.appendChild(botao);

});

}function responder(resposta){

clearInterval(cronometro);

if(resposta===perguntas[perguntaAtual].correta){

pontos+=10;

}else{

vidas--;

}

perguntaAtual++;

if(vidas<=0){

fimDeJogo();

return;

}

if(perguntaAtual>=perguntas.length){

vitoria();

return;

}

mostrarPergunta();

iniciarTempo();

}

function iniciarTempo(){

tempo=20;

document.getElementById("tempo").innerHTML=tempo+"s";

cronometro=setInterval(()=>{

tempo--;

document.getElementById("tempo").innerHTML=tempo+"s";

if(tempo<=0){

clearInterval(cronometro);

vidas--;

if(vidas<=0){

fimDeJogo();

}else{

perguntaAtual++;

if(perguntaAtual>=perguntas.length){

vitoria();

}else{

mostrarPergunta();

iniciarTempo();

}

}

}

},1000);

}

function vitoria(){

clearInterval(cronometro);

quiz.classList.add("oculto");

document.getElementById("final").classList.remove("oculto");

document.getElementById("resultado").innerHTML=
"🎉 Parabéns!<br><br>Você fez <b>"+pontos+
"</b> pontos e concluiu a Missão Átomo!";

}

function fimDeJogo(){

clearInterval(cronometro);

quiz.classList.add("oculto");

document.getElementById("final").classList.remove("oculto");

document.getElementById("resultado").innerHTML=
"💥 Você perdeu todas as vidas.<br><br>Pontuação: <b>"+pontos+"</b>";

}

function reiniciar(){

location.reload();

}
