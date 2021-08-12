// Array base da 15 lettere (massima dimensione possibile della parola)
var lettere = [
  (lettera1 = document.getElementById("letter1")),
  (lettera2 = document.getElementById("letter2")),
  (lettera3 = document.getElementById("letter3")),
  (lettera4 = document.getElementById("letter4")),
  (lettera5 = document.getElementById("letter5")),
  (lettera6 = document.getElementById("letter6")),
  (lettera7 = document.getElementById("letter7")),
  (lettera8 = document.getElementById("letter8")),
  (lettera9 = document.getElementById("letter9")),
  (lettera10 = document.getElementById("letter10")),
  (lettera11 = document.getElementById("letter11")),
  (lettera12 = document.getElementById("letter12")),
  (lettera13 = document.getElementById("letter13")),
  (lettera14 = document.getElementById("letter14")),
  (lettera15 = document.getElementById("letter15")),
];

// Array delle parole possibili
// const parola = ["fotocopiatrice"]
const parola = [
  "ala","albero","acqua","aceto","abisso","acaro","alligatore","anatra","antilope","aragosta","avvoltoio",
  "amsterdam","abbaco","accappatoio","accendino","aereoplano","almanacco","ambulanza","aquilone",
  "bar","baco","babbuino","balena","barracuda","bradipo","berlino","baionetta","bambola","bambolotto",
  "bandiera","baule","banana","bicicletta","boomerang",
  "cane","camaleonte","cammello","canarino","canguro","capodoglio","cavallo","cerbiatto","chiocciola",
  "coccinella","coccodrillo","coniglio","copenaghen","calcolatrice","calendario","calzamaglia","camomilla",
  "cannocchiale","cappello","cassaforte","castello","clavicembalo","comodino","colla","computer","congelatore",
  "cristallo","cucchiaio","chitarra",
  "dado","dama","dito","daino","delfino","dinosauro","dobermann","drago","damasco","dublino","dardo",
  "denaro","dentifricio","deodorante","diaframma","distintivo",
  "elefante","ermellino","edimburgo","elicottero","equalizzatore","evidenziatore","etichettatrice",
  "foglia","facocero","falco","fenicottero","formica","furetto","fantoccio","fagotto","farmacia","fiaccola","fiammifero","filigrana",
  "finestra","fisarmonica","fioretto","fischietto","fuoco","forchetta","formaggio","fotocamera","fotocopiatrice","francobollo","frusta",
  "gioco","gabbiano","gallina","gamberone","gazzella","ghepardo","granchio","gufo","gorilla","gavettone",
  "gemelli","gigante","giocattolo","gioiello","giroscopio","gondola","grammofono","grappa",
  "hotel",
  "istrice","iena","iguana","ippopotamo","insetto","idrovolante","imbuto","impermeabile","inchiostro","ingranaggio","insalatiera",
  "juventus",
  "koala",
  "lana","labrador","lamantino","lucertola","lussemburgo","lacrimogeno","lampadario","lampadina","lanciafiamme","lavatrice","legna","locomotiva","lubrificante",
  "mare","maggiolino","macaco","maremmano","martello","merluzzo","montecarlo","macchina","medaglia","maglia","magnete",
  "mangiacassette","mappamondo","matassa","materasso","mattarello","metropolitana","microprocessore","mongolfiera","mulinello",
  "naso","nastro","nave","navigatore","navicella","negozio","nebulizzatore","neon","noccioline",
  "orca","ornitorinco","orso","obliteratrice","occhiali","ombrello","ombrellone","ossigeno","osso",
  "pinguino","panda","pappagallo","pastore","pellicano","pipistrello","porcospino","panama","pechino","parigi","pianoforte","pagliaccio","paladino","palla","pallone",
  "pallottola","pannolino","pantaloni","pennello","paracadute","parafulmine","passaporto","passamontagna","patata","penna","piccone","pneumatico","portafogli","puzzle",
  "quad","quercia","quaderno","quadro",
  "rana","rinoceronte","roditore","roma","racchetta","radio","rastrello","riflettore","rimorchio","rivoltella","rompighiaccio","rossetto",
  "serpente","salamandra","scarabeo","scimmia","squalo","sirena","singapore","stoccolma","sirena","sarcofago","sapone","satellite","scala","scanner",
  "sciarpa","scorpione","schiaccianoci","scolapasta","scooter","scudetto","semaforo","sfigmomanometro","sigarette","smeraldo",
  "soprammobile","spaventapasseri","spazzacamino",
  "tonno","torta","tacchino","tarantola","tartaruga","talismano","tamburo","tappeto","tassametro","tastiera","telegramma",
  "telecamera","telecomando","telefono","televisore","temperamatite","termometro","termosifone","torpediniera","tosaerba","trampolino","transatlantico",
  "uva",
  "uccello","uragano","umidificatore","utilitaria",
  "vagone","varano","vespa","vitello","volpe","vienna","vapore","vascello","valanga","vespa","vetro","videocamera","violoncello","vocabolario","wireless",
  "xilofono",
  "yoga",
  "zanzara","zaino","zaffiro","zebra","zerbino","zucchero"
];
// Array delle immagini
var immagini = [
  '<img src="img/impiccato0.png" alt="Traliccio dell impiccato">',
  '<img src="img/impiccato1.png" alt="Traliccio dell impiccato">',
  '<img src="img/impiccato2.png" alt="Traliccio dell impiccato">',
  '<img src="img/impiccato3.png" alt="Traliccio dell impiccato">',
  '<img src="img/impiccato4.png" alt="Traliccio dell impiccato">',
];

// Prendo un elemento nell array delle parole e la sua lunghezza
var select = Math.floor(Math.random() * parola.length);
var parola_scelta = parola[select];
var parola_length = parola[select].length;
var trovate = [];

for (let i = 0; i < lettere.length; i++) {
  if (parola_scelta[i] == undefined) {
    lettere[i].style.display = "none";
  } else {
    trovate[i] = false;
  }
}
// Semplifico tramite costanti gli elementi riutilizzati piu volte
const try_btn = document.getElementById("sub");
const input = document.getElementById("try");
const h3 = document.getElementById("vite");
const res = document.getElementById("res");
const img = document.getElementById("container");
const sug = document.getElementById("sug");

// Variabili utili
var vite = 4;
var indovinati = 0;
var presente = false;
var fine = false;
var letterePikkate = [];
var pikkata;

//bottoni smartphone
document.getElementById("A").onclick = function(){insertB("a")};
document.getElementById("B").onclick = function(){insertB("b")};
document.getElementById("C").onclick = function(){insertB("c")};
document.getElementById("D").onclick = function(){insertB("d")};
document.getElementById("E").onclick = function(){insertB("e")};
document.getElementById("F").onclick = function(){insertB("f")};
document.getElementById("G").onclick = function(){insertB("g")};
document.getElementById("H").onclick = function(){insertB("h")};
document.getElementById("I").onclick = function(){insertB("i")};
document.getElementById("J").onclick = function(){insertB("j")};
document.getElementById("K").onclick = function(){insertB("k")};
document.getElementById("L").onclick = function(){insertB("l")};
document.getElementById("M").onclick = function(){insertB("m")};
document.getElementById("N").onclick = function(){insertB("n")};
document.getElementById("O").onclick = function(){insertB("o")};
document.getElementById("P").onclick = function(){insertB("p")};
document.getElementById("Q").onclick = function(){insertB("q")};
document.getElementById("R").onclick = function(){insertB("r")};
document.getElementById("S").onclick = function(){insertB("s")};
document.getElementById("T").onclick = function(){insertB("t")};
document.getElementById("U").onclick = function(){insertB("u")};
document.getElementById("V").onclick = function(){insertB("v")};
document.getElementById("W").onclick = function(){insertB("w")};
document.getElementById("X").onclick = function(){insertB("x")};
document.getElementById("Y").onclick = function(){insertB("y")};
document.getElementById("Z").onclick = function(){insertB("z")};

// gestione tasti
sug.onclick = aiuto;
try_btn.onclick = insert;

function insert(){
  var tent = input.value.toLowerCase();
  if(!fine){
    check(tent);
  }
  else{
    return true;
  }
  return false;
}

function insertB(tentB){
  if(!fine){
    check(tentB);
  }
  else{
    return true;
  }
  return false;
}



// Funzione principale
function check(tentativo) {

  pikkata = false;
  for (let i = 0; i < letterePikkate.length; i++) {
    if (tentativo == letterePikkate[i]) {
      pikkata = true;
    }
  }

  if (pick(tentativo) && !pikkata) {
      for (let i = 0; i < parola_length; i++) {
        if (parola_scelta[i] == tentativo) {
          lettere[i].innerHTML = tentativo;
          presente = true;
          trovate[i] = presente;
          indovinati++;
          lettere[i].style.transition = ".8s";
          lettere[i].style.backgroundColor = "var(--indovinata)";
          if (+screen.width > 2820) {
            lettere[i].style.transform = "rotate(-360deg) scale(2)";
          } else if (+screen.width > 768) {
            lettere[i].style.transform = "rotate(-360deg) scale(1.3)";
          } else {
            lettere[i].style.transform = "rotate(-360deg)";
          }
        }
      }
      if (!presente) {
        vite--;
        h3.innerHTML = "Hai a disposizione " + vite + " vite";
        container.innerHTML = immagini[vite];
      }
      presente = false;
      if (indovinati + 1 == parola_length) {
        sug.style.display = "none";
      }
      if (indovinati == parola_length) {
        document.getElementById("sub").style.display = "inherit";
        h3.innerHTML = "Hai vinto!";
        try_btn.innerHTML = "Gioca ancora";
        input.style.display = "none";
        container.innerHTML =
          '<img src="img/impiccatoWin.png" alt="Traliccio dell impiccato">';
        fine = true;
      } else if (vite == 0) {
        document.getElementById("sub").style.display = "inherit";
        h3.innerHTML = "Hai perso..";
        try_btn.innerHTML = "Gioca ancora";
        input.style.display = "none";
        res.style.display = "inherit";
        sug.style.display = "none";
        // container.innerHTML = '<img src="img/impiccato0.png" alt="Traliccio dell impiccato">';
        fine = true;
      }
      input.value = "";
      res.onclick = visualizza;
      return false;
  }else {
    input.value = "";
    return false;
  }
}

// Funzione visualizza numeri non indovinati
function visualizza() {
  for (let i = 0; i < parola_length; i++) {
    lettere[i].innerHTML = parola_scelta[i];
    if (!trovate[i]) {
      lettere[i].style.transition = ".8s";
      lettere[i].style.transform = "translateY(1rem)";
      lettere[i].style.backgroundColor = "var(--non-indovinata)";
    }
  }
  res.style.display = "none";
  return false;
}

// Funzione aiuto, scopre una lettera ( o piu se ripetute)
function aiuto() {
  var fatto = false;
  do {
    var fortunata = Math.floor(Math.random() * parola_length);
    if (!trovate[fortunata]) {
      lettere[fortunata].innerHTML = parola_scelta[fortunata];
      fatto = true;
    }
  } while (!fatto);

  sug.style.display = "none";

  for (let i = 0; i < parola_length; i++) {
    if (parola_scelta[i] == parola_scelta[fortunata]) {
      pick(parola_scelta[i]);
      lettere[i].innerHTML = parola_scelta[i];
      trovate[i] = true;
      indovinati++;
      lettere[i].style.transition = ".8s";
      lettere[i].style.backgroundColor = "var(--suggerita)";
      if (+screen.width > 768) {
        lettere[i].style.transform = "rotate(355deg) scale(1.3)";
      } else {
        lettere[i].style.transform = "rotate(-360deg)";
      }
    }
  }

  return false;
}

// Ricorda le lettere pikkate
function pick(picked) {
  var pkd = document.getElementById(picked);
  switch (picked) {
    case "a":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "b":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "c":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "d":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "e":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "f":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "g":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "h":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "i":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "j":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "k":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "l":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "m":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "n":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "o":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "p":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "q":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "r":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "s":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "t":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "u":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "v":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "w":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "x":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "y":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    case "z":
      letterePikkate.push(picked);
      pkd.style.transition = "1s";
      pkd.style.transform = "scale(1) rotateY(1440deg)";
      pkd.style.backgroundColor = "lightgreen";
      return true;
    default:
      console.log(letterePikkate);
      return false;
  }
}



