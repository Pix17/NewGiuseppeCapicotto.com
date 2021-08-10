// Array standard da 15 lettere
var lettere = [
 lettera1 = document.getElementById("letter1"),
 lettera2 = document.getElementById("letter2"),
 lettera3 = document.getElementById("letter3"),
 lettera4 = document.getElementById("letter4"),
 lettera5 = document.getElementById("letter5"),
 lettera6 = document.getElementById("letter6"),
 lettera7 = document.getElementById("letter7"),
 lettera8 = document.getElementById("letter8"),
 lettera9 = document.getElementById("letter9"),
 lettera10 = document.getElementById("letter10"),
 lettera11 = document.getElementById("letter11"),
 lettera12 = document.getElementById("letter12"),
 lettera13 = document.getElementById("letter13"),
 lettera14 = document.getElementById("letter14"),
 lettera15 = document.getElementById("letter15"),
];

// Array delle parole possibili
const parola = ["casa","canino","criceto","mobilio","arcivescovo","pokemon","troll","apple","windows","gatto","cane","ragazza"];

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

for(let i=0; i<lettere.length; i++){
    if(parola_scelta[i] == undefined){
        lettere[i].style.display = "none";
    }
}
// Mi semplifico tramite costanti gli elementi riutilizzati piu volte
const try_btn = document.getElementById("sub");
const input = document.getElementById("try");
const h1 = document.getElementById("vite");
const res = document.getElementById("res");
const img = document.getElementById("container");
// Variabili utili
var vite = 4;
var indovinati = 0;
var presente = false;
var fine = false;

// Funzione principale
try_btn.onclick = function(){
    if(!fine){
        var tentativo = input.value;
        
        for(let i=0; i<parola_length; i++){
            if(parola_scelta[i] == tentativo){
                lettere[i].innerHTML = tentativo;
                presente=true;
                indovinati++;
            }
        }

        if(!presente){
            vite--;
            h1.innerHTML = "Hai a disposizione "+vite+" vite";
            container.innerHTML = immagini[vite];

        }

        presente=false;
        if(indovinati == parola_length){
            h1.innerHTML = "Hai vinto!";
            try_btn.innerHTML = "Gioca ancora";
            input.style.display = "none";
            container.innerHTML = '<img src="img/impiccatoWin.png" alt="Traliccio dell impiccato">';
            fine = true;     
        }else if(vite == 0){
            h1.innerHTML = "Hai perso..";
            try_btn.innerHTML = "Gioca ancora"; 
            input.style.display = "none"; 
            res.style.display = "inherit";
            // container.innerHTML = '<img src="img/impiccato0.png" alt="Traliccio dell impiccato">';
            fine = true;     
        }

        input.value = "";
        res.onclick = visualizza;
        return false;
    }
    else if(fine){
        return true;
    }
}

// Funzione accessoria
function visualizza(){
    for(let i=0; i<parola_length; i++){
        lettere[i].innerHTML = parola_scelta[i];
    }
    res.style.display = "none";
    return false;
}



