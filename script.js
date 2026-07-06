/* ==========================================
💖 PARA MI PRINCESA HERMOSA
SCRIPT.JS - PARTE 1
========================================== */

let currentQuestion = 0;

const app = document.getElementById("app");
const game = document.getElementById("game");

const title = document.getElementById("title");
const question = document.getElementById("question");
const content = document.getElementById("content");

/*==========================================
INICIO
==========================================*/

window.onload = () => {

    showMessage(
        "Bienvenida mi princesa ❤️",
        1800,
        () => {

            showStart();

        }
    );

};

/*==========================================
PANTALLA INICIAL
==========================================*/

function showStart(){

title.innerHTML="💖 Feliz cumpleaños 💖";

question.innerHTML="¿Quieres comenzar esta pequeña sorpresa?";

content.innerHTML=`

<div class="buttons">

<button id="yesBtn">

Sí ❤️

</button>

<button id="noBtn">

No 💔

</button>

</div>

`;

document.getElementById("yesBtn").onclick=askName;

document.getElementById("noBtn").onmouseover=moveButton;

}

/*==========================================
PREGUNTA NOMBRE
==========================================*/

function askName(){

fadeCard();

title.innerHTML="🌸 Pregunta 1";

question.innerHTML="¿Cuál es tu nombre?";

content.innerHTML=`

<input
id="playerName"
placeholder="Escribe tu nombre...">

<br><br>

<button onclick="checkName()">

Continuar ❤️

</button>

`;

}

/*==========================================
VERIFICAR NOMBRE
==========================================*/

function checkName(){

const value=document
.getElementById("playerName")
.value
.trim()
.toLowerCase();

if(

value==="sofia"

||

value==="sofía"

){

showMessage(

"💖 SIII mi niña hermosa 💖",

1800,

()=>{

askChocolate();

}

);

}

else{

showMessage(

"🥺 Mmm... creo que ese no es tu nombre.",

2000

);

}

}

/*==========================================
PREGUNTA CHOCOLATE
==========================================*/

function askChocolate(){

fadeCard();

title.innerHTML="🍫 Pregunta 2";

question.innerHTML="¿Soy alérgico al chocolate?";

content.innerHTML=`

<div class="buttons">

<button onclick="correctAnswer()">

Sí ❤️

</button>

<button onclick="wrongAnswer()">

No

</button>

</div>

`;

}

/*==========================================
RESPUESTA CORRECTA
==========================================*/

function correctAnswer(){

showMessage(

"💖 Correcto... aunque a mí me gusta muchísimo 😂❤️",

2300,

()=>{

startExperience();

}

);

}

/*==========================================
RESPUESTA INCORRECTA
==========================================*/

function wrongAnswer(){

showMessage(

"🥺 Esa no era... inténtalo otra vez.",

2000,

()=>{

askChocolate();

}

);

}

/*==========================================
MENSAJE BONITO
==========================================*/

function showMessage(text,time,next){

content.innerHTML=`

<div class="message">

${text}

</div>

`;

if(next){

setTimeout(next,time);

}

}

/*==========================================
ENTRAR A LA EXPERIENCIA
==========================================*/

function startExperience(){

game.classList.add("hidden");

app.classList.remove("hidden");

startHearts();

startSakura();

startConfetti();

startTimer();

}

/*==========================================
BOTÓN QUE HUYE
==========================================*/

function moveButton(){

const btn=document.getElementById("noBtn");

btn.style.position="absolute";

btn.style.left=Math.random()*70+"vw";

btn.style.top=Math.random()*70+"vh";

}

/*==========================================
ANIMACIÓN TARJETA
==========================================*/

function fadeCard(){

const card=document.querySelector(".card");

card.style.opacity="0";

card.style.transform="translateY(30px)";

setTimeout(()=>{

card.style.opacity="1";

card.style.transform="translateY(0px)";

},250);

}/* ==========================================
💖 SCRIPT.JS - PARTE 2
Carta, contador y animaciones
========================================== */

// ==========================================
// FECHA ESPECIAL ❤️
// ==========================================

// Cambia esta fecha por el día que comenzaron.
const startDate = new Date("2025-11-25T00:00:00");

// ==========================================
// CONTADOR
// ==========================================

function startTimer(){

const counter=document.getElementById("time-counter");

if(!counter) return;

updateTimer();

setInterval(updateTimer,1000);

function updateTimer(){

const now=new Date();

const diff=now-startDate;

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor((diff/(1000*60*60))%24);

const minutes=Math.floor((diff/(1000*60))%60);

counter.innerHTML=

`❤️

<b>${days}</b> días

<b>${hours}</b> horas

<b>${minutes}</b> minutos

junto a ti 💖`;

}

}

// ==========================================
// ABRIR CARTA
// ==========================================

let opened=false;

function openLetter(){

if(opened) return;

opened=true;

const container=document.querySelector(".letter-container");

container.classList.add("open");

startPetalsExplosion();

smallHearts();

setTimeout(writeLetter,900);

}

// ==========================================
// EFECTO ESCRITURA
// ==========================================

function writeLetter(){

const text=document.getElementById("letter-text");

const message=`Feliz cumpleaños mi vida ❤️

Espero hoy la pases muy bien.

Creo que estoy enviando esto unas horas antes por la diferencia de horario, así que perdón mi amor.

Pero quería asegurarme de que este pequeño detalle llegara para ti.

Quiero que sepas que me has hecho muy feliz desde que te conocí.

Me has salvado muchísimas veces.

Me has regalado sonrisas cuando más las necesitaba.

Me encanta tu forma de ser.

Me encanta lo romántica que eres.

Me encanta que te guste Hello Kitty.

Me encantan las fresas.

Me encantan los chocolates.

Y sobre todo...

Me encanta poder compartir mi vida contigo.

Espero que hoy la pases de 10.

Y nunca olvides...

que te amo con todo mi corazón.

❤️ Feliz cumpleaños mi princesa ❤️`;

text.innerHTML="";

let i=0;

function type(){

if(i<message.length){

text.innerHTML+=message.charAt(i);

i++;

setTimeout(type,24);

}else{

finishLetter();

}

}

type();

}

// ==========================================
// FINAL CARTA
// ==========================================

function finishLetter(){

showMessage(

"💖 Gracias por leer mi corazón ❤️",

3500

);

}

// ==========================================
// EXPLOSIÓN DE PÉTALOS
// ==========================================

function startPetalsExplosion(){

for(let i=0;i<35;i++){

const petal=document.createElement("div");

petal.className="sakura";

petal.innerHTML="🌸";

petal.style.left=(40+Math.random()*20)+"vw";

petal.style.animationDuration=(3+Math.random()*3)+"s";

petal.style.fontSize=(14+Math.random()*18)+"px";

document
.getElementById("sakura-container")
.appendChild(petal);

setTimeout(()=>{

petal.remove();

},6000);

}

}

// ==========================================
// CORAZONES ALREDEDOR
// ==========================================

function smallHearts(){

for(let i=0;i<20;i++){

setTimeout(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=(45+Math.random()*10)+"vw";

heart.style.fontSize=(16+Math.random()*18)+"px";

document
.getElementById("hearts-container")
.appendChild(heart);

setTimeout(()=>{

heart.remove();

},4000);

},i*120);

}

} /* ==========================================
💖 SCRIPT.JS - PARTE 3
Animaciones finales
========================================== */

let confetti = [];
let canvas;
let ctx;

// ==========================================
// CONFETTI
// ==========================================

function startConfetti(){

canvas=document.getElementById("confetti");

if(!canvas) return;

ctx=canvas.getContext("2d");

resizeCanvas();

window.addEventListener("resize",resizeCanvas);

confetti=[];

for(let i=0;i<180;i++){

confetti.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height-canvas.height,

size:Math.random()*8+3,

speed:Math.random()*3+2,

angle:Math.random()*360,

rotation:Math.random()*6,

color:randomColor()

});

}

animateConfetti();

}

function resizeCanvas(){

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

}

function randomColor(){

const colors=[

"#ff5fa8",
"#ff8fc7",
"#ffd166",
"#ffffff",
"#ffc6e5",
"#ff7eb3"

];

return colors[Math.floor(Math.random()*colors.length)];

}

function animateConfetti(){

ctx.clearRect(0,0,canvas.width,canvas.height);

confetti.forEach(c=>{

ctx.save();

ctx.translate(c.x,c.y);

ctx.rotate(c.angle);

ctx.fillStyle=c.color;

ctx.fillRect(0,0,c.size,c.size);

ctx.restore();

c.y+=c.speed;

c.angle+=0.02;

if(c.y>canvas.height){

c.y=-20;

c.x=Math.random()*canvas.width;

}

});

requestAnimationFrame(animateConfetti);

}

// ==========================================
// CORAZONES FLOTANTES
// ==========================================

function startHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*20)+"px";

heart.style.animationDuration=(4+Math.random()*3)+"s";

document
.getElementById("hearts-container")
.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

},450);

}

// ==========================================
// PÉTALOS
// ==========================================

function startSakura(){

setInterval(()=>{

const petal=document.createElement("div");

petal.className="sakura";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(15+Math.random()*18)+"px";

petal.style.animationDuration=(4+Math.random()*3)+"s";

document
.getElementById("sakura-container")
.appendChild(petal);

setTimeout(()=>{

petal.remove();

},7000);

},500);

}

// ==========================================
// FINAL DE LA CARTA
// ==========================================

function finishLetter(){

showMessage(

"❤️ Gracias por leer esta pequeña sorpresa ❤️",

4000

);

setTimeout(()=>{

bigCelebration();

},1500);

}

// ==========================================
// CELEBRACIÓN FINAL
// ==========================================

function bigCelebration(){

for(let i=0;i<60;i++){

setTimeout(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

document
.getElementById("hearts-container")
.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

},i*60);

}

for(let i=0;i<50;i++){

setTimeout(()=>{

const petal=document.createElement("div");

petal.className="sakura";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(18+Math.random()*22)+"px";

petal.style.animationDuration=(4+Math.random()*2)+"s";

document
.getElementById("sakura-container")
.appendChild(petal);

setTimeout(()=>{

petal.remove();

},7000);

},i*70);

}

}

// ==========================================
// PEQUEÑA SORPRESA
// ==========================================

setInterval(()=>{

const titles=document.querySelectorAll("h1,h2");

titles.forEach(title=>{

title.style.transform="scale(1.02)";

setTimeout(()=>{

title.style.transform="scale(1)";

},300);

});

},5000);