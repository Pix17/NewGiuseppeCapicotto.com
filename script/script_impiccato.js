// Array base da 15 lettere
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
const parola = [
    "ala","albero","acqua","aceto","abisso","acaro","alligatore","anatra","antilope","aragosta","avvoltoio","amsterdam","abbaco","accappatoio","accendino","aereoplano","almanacco","ambulanza","aquilone",
    "bar","baco","babbuino","balena","barracuda","bradipo","berlino","baionetta","bambola","bambolotto","bandiera","baule","banana","bicicletta","boomerang",
    "cane","camaleonte","cammello","canarino","canguro","capodoglio","cavallo","cerbiatto","chiocciola","coccinella","coccodrillo","coniglio","copenaghen","calcolatrice","calendario","calzamaglia","camomilla",
        "cannocchiale","cappello","cassaforte","castello","clavicembalo","comodino","colla","computer","congelatore","cristallo","cucchiaio","chitarra",
    "dado","dama","dito","daino","delfino","dinosauro","dobermann","drago","damasco","dublino","dardo","denaro","dentifricio","deodorante","diaframma","distintivo",
    "elefante","ermellino","edimburgo","elicottero","equalizzatore","evidenziatore","etichettatrice",
    "foglia","facocero","falco","fenicottero","formica","furetto","fantoccio","fagotto","farmacia","fiaccola","fiammifero","filigrana","finestra","fisarmonica","fioretto","fischietto","fuoco","forchetta","formaggio",
        "fotocamera","fotocopiatrice","francobollo","frusta",
    "gioco","gabbiano","gallina","gamberone","gazzella","ghepardo","granchio","gufo","gorilla","gavettone","gemelli","gigante","giocattolo","gioiello","giroscopio","gondola","grammofono","grappa",
    "hotel",
    "istrice","iena","iguana","ippopotamo","insetto","idrovolante","imbuto","impermeabile","inchiostro","ingranaggio","insalatiera",
    "juventus",
    "koala",
    "lana","labrador","lamantino","lucertola","lussemburgo","lacrimogeno","lampadario","lampadina","lanciafiamme","lavatrice","legna","locomotiva","lubrificante",
    "mare","maggiolino","macaco","maremmano","martello","merluzzo","montecarlo","macchina","medaglia","maglia","magnete","mangiacassette","mappamondo","matassa","materasso","mattarello","metropolitana","microprocessore","mongolfiera","mulinello",
    "naso","nastro","nave","navigatore","navicella","negozio","nebulizzatore","neon","noccioline",
    "orca","ornitorinco","orso","obliteratrice","occhiali","ombrello","ombrellone","ossigeno","osso",
    "pinguino","panda","pappagallo","pastore","pellicano","pipistrello","porcospino","panama","pechino","parigi","pianoforte","pagliaccio","paladino","palla","pallone","pallottola","pannolino","pantaloni","pennello","paracadute","parafulmine",
        "passaporto","passamontagna","patata","penna","piccone","pneumatico","portafogli","puzzle",
    "quad","quercia","quaderno","quadro",
    "rana","rinoceronte","roditore","roma","racchetta","radio","rastrello","riflettore","rimorchio","rivoltella","rompighiaccio","rossetto",
    "serpente","salamandra","scarabeo","scimmia","squalo","sirena","singapore","stoccolma","sirena","sarcofago","sapone","satellite","scala","scanner","sciarpa","scorpione","schiaccianoci","scolapasta","scooter","scudetto","semaforo","sfigmomanometro",
        "sigarette","smeraldo","soprammobile","spaventapasseri","spazzacamino",
    "tonno","torta","tacchino","tarantola","tartaruga","talismano","tamburo","tappeto","tassametro","tastiera","telegramma","telecamera","telecomando","telefono","televisore","temperamatite","termometro","termosifone","torpediniera","tosaerba","trampolino","transatlantico",
    "uva","uccello","uragano","umidificatore","utilitaria",
    "vagone","varano","vespa","vitello","volpe","vienna","vapore","vascello","valanga","vespa","vetro","videocamera","violoncello","vocabolario",
    "wireless",
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

for(let i=0; i<lettere.length; i++){
    if(parola_scelta[i] == undefined){
        lettere[i].style.display = "none";
    }else{
        trovate[i]=false;
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
        var tentativo = input.value.toLowerCase();
        
        for(let i=0; i<parola_length; i++){
            if(parola_scelta[i] == tentativo){
                lettere[i].innerHTML = tentativo;
                presente=true;
                trovate[i]=presente;
                indovinati++;

                lettere[i].style.transition = ".8s";
                lettere[i].style.backgroundColor = "var(--indovinata)";
                if(+screen.width > 768){
                    lettere[i].style.transform = "rotate(-360deg) scale(1.5)";
                }else{
                    lettere[i].style.transform = "rotate(-360deg)";

                }
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
        if(!trovate[i]){   
            lettere[i].style.transition = ".8s";   
            lettere[i].style.transform = "translateY(1rem)";      
            lettere[i].style.backgroundColor = "var(--non-indovinata)";
            }
    }
    res.style.display = "none";
    return false;
}



