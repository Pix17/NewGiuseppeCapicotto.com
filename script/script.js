// // document.write('<p>Hello mate<p>');
// document.addEventListener('DOMContentLoaded', function(){
//     // Tutto quello che sta in questa funzione verrà eseguito DOPO aver
//     // caricato tutto il DOM

// });

const tag_main = document.getElementsByTagName("main")[0];
const tag_footer = document.getElementsByTagName("footer")[0];
const tag_header = document.getElementsByTagName("header")[0];
const btn_menu = document.getElementById("menu");
const btn_tema = document.getElementById("night-btn");
const btn_menu_tema = document.getElementById("menu-night-btn");

btn_tema.onclick = changecolor;
btn_menu_tema.onclick = changecolor;

function changecolor(){

    if(btn_tema.innerHTML == "Tema scuro"){
        tag_header.style.backgroundColor = "var(--colore-scuro-hf)";
        tag_header.style.boxShadow = "var(--ombra-scura)";
        tag_main.style.backgroundColor = "var(--colore-scuro-main)";
        tag_footer.style.backgroundColor = "var(--colore-scuro-hf)";
        tag_footer.style.boxShadow = "var(--ombra-scura)";
        btn_tema.style.backgroundColor = "var(--colore-scuro-hf)";
        btn_tema.innerHTML = "Tema chiaro";
        btn_menu_tema.style.backgroundColor = "var(--colore-scuro-hf)";
        btn_menu_tema.innerHTML = "Tema chiaro";
        btn_menu.style.backgroundColor = "var(--colore-scuro-hf)";

    }else if(btn_tema.innerHTML == "Tema chiaro"){
        tag_header.style.backgroundColor = "var(--colore-chiaro-hf)";
        tag_header.style.boxShadow = "var(--ombra-chiara)";
        tag_main.style.backgroundColor = "var(--colore-chiaro-main)";
        tag_footer.style.backgroundColor = "var(--colore-chiaro-hf)";
        tag_footer.style.boxShadow = "var(--ombra-chiara)";
        btn_tema.style.backgroundColor = "var(--colore-chiaro-hf)";
        btn_tema.innerHTML = "Tema scuro";
        btn_menu_tema.style.backgroundColor = "var(--colore-chiaro-hf)";
        btn_menu_tema.innerHTML = "Tema scuro";
        btn_menu.style.backgroundColor = "var(--colore-chiaro-hf)";


    }
}

btn_menu.onclick = function(){

    if(btn_menu.innerHTML == "="){      
        btn_menu.innerHTML = "V";
        document.getElementById("menu-scomparsa").style.display = "inherit";

    }else if(btn_menu.innerHTML == "V"){
        document.getElementById("menu-scomparsa").style.display = "none";
        btn_menu.innerHTML = "=";
    }
}

