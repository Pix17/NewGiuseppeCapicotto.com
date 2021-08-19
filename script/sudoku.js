var tabella = [];
tabella[0] = ["aa","ab","ac", "ad","ae","af", "ag","ah","ai"];
tabella[1] = ["ba","bb","bc", "bd","be","bf", "bg","bh","bi"];    
tabella[2] = ["ca","cb","cc", "cd","ce","cf", "cg","ch","ci"];    

tabella[3] = ["da","db","dc", "dd","de","df", "dg","dh","di"];    
tabella[4] = ["ea","eb","ec", "ed","ee","ef", "eg","eh","ei"];    
tabella[5] = ["fa","fb","fc", "fd","fe","ff", "fg","fh","fi"];   

tabella[6] = ["ga","gb","gc", "gd","ge","gf", "gg","gh","gi"];    
tabella[7] = ["ha","hb","hc", "hd","he","hf", "hg","hh","hi"];    
tabella[8] = ["ia","ib","ic", "id","ie","if", "ig","ih","ii"];  



document.getElementById("ezy").onclick = () => {
     let x = Math.floor(Math.random() * livelli[0].length);
    inizializza(livelli[0][x]);
    // inizializza(test);
     document.getElementById("bottoni").style.display = "none";
     document.getElementById("verifica").style.display = "inherit";
}
document.getElementById("mid").onclick = () => {
    let x = Math.floor(Math.random() * livelli[1].length);
    inizializza(livelli[1][x]);
    document.getElementById("bottoni").style.display = "none";
    document.getElementById("verifica").style.display = "inherit";
}
document.getElementById("hrd").onclick = () => {
    let x = Math.floor(Math.random() * livelli[2].length);
    inizializza(livelli[2][x]);
    document.getElementById("bottoni").style.display = "none";
    document.getElementById("verifica").style.display = "inherit";
}




var ripetizioni = false;
document.getElementById("verifica").onclick = verifica; 

//permette di limitare ad un solo numero l'imput number
function solouno(){
    if (this.value.length > 1) {
        this.value = this.value.slice(0,1); 
    }
    return false;
}
for(let i=0; i<(tabella.length*tabella[0].length); i++){
    document.getElementsByTagName("input")[i].oninput = solouno;
}

// funzione principale di verifica
function verifica(){
    console.clear();
    ripetizioni = false;
    
    //verifica orizzontale
     for(let i=0; i<tabella.length; i++){
         for(let j=0; j<tabella.length; j++){
             for(let k=j+1; k<tabella.length; k++){
                 if( document.getElementById(tabella[i][j]).value == document.getElementById(tabella[i][k]).value){
                    // console.log("righe: "+tabella[i][j] +" "+ tabella[i][k] +" ripetizione si!") ;
                    ripetizioni = true;
                 }else{
                    //  console.log(tabella[i][j] +" "+ tabella[i][k] +" ripetizione no!");
                 }
             }
         }
     }
     //verifica verticale
     for(let i=0; i<tabella.length; i++){
        for(let j=0; j<tabella.length; j++){
            for(let k=j+1; k<(tabella.length); k++){
                if( document.getElementById(tabella[j][i]).value == document.getElementById(tabella[k][i]).value){
                    // console.log("colonne: "+tabella[j][i] +" "+ tabella[k][i] +" ripetizione si!") ;
                    ripetizioni = true;
                }else{
                //  console.log(tabella[j][i] +" "+ tabella[k][i] +" ripetizione no!") ;
                }
            }
        }
    }
    var ris = document.getElementById("risultato");
    var sqr = document.getElementsByClassName("square");

    //verifica blocco 3x3
    var boxctrl = [
        box1 = ["aa","ab","ac", "ba","bb","bc", "ca","cb","cc"],
        box2 = ["ad","ae","af", "bd","be","bf", "cd","ce","cf"],
        box3 = ["ag","ah","ai", "bg","bh","bi", "cg","ch","ci"],

        box4 = ["da","db","dc", "ea","eb","ec", "fa","fb","fc"],
        box5 = ["dd","de","df", "ed","ee","ef", "fd","fe","ff"],
        box6 = ["dg","dh","di", "eg","eh","ei", "fg","fh","fi"],

        box1 = ["ga","gb","gc", "ha","hb","hc", "ia","ib","ic"],
        box2 = ["gd","ge","gf", "hd","he","hf", "id","ie","if"],
        box3 = ["gg","gh","gi", "hg","hh","hi", "ig","ih","ii"],
    ];

    function boxcontroll(box){
        var temp = 0;
        var totbox = 0;
        var valido = false;

        for(let i=0; i<box.length; i++){
            for(let j=0; j<box[i].length; j++){
                temp = parseInt(document.getElementById(box[i][j]).value);
                totbox = totbox + temp;
                console.log(totbox);
            }
            if(totbox == 45){
                valido = true;
            }else{
                return false;
            }
            totbox = 0;
        }
        return valido;
    }

    // console.log(boxcontroll(boxctrl));

    //controllo finale
    var tot = 0;
    var n = 0;
    for(let i=0; i<document.getElementsByTagName("input").length; i++){
        n = parseInt(document.getElementsByTagName("input")[i].value)
        tot = tot + n;
    }
    if(ripetizioni || isNaN(tot) || tot < 405 || (!boxcontroll(boxctrl))){
        // console.log("ci sono ripetizioni")
        document.getElementById("patina").style.display = "inherit";
        ris.style.display = "flex";
        ris.style.backgroundColor = "darkorange";
        if(isNaN(tot)){
            ris.innerHTML = "<h1>Non è completo</h1><h3>Controlla meglio...</h3>";
        }else{
            ris.innerHTML = "<h1>Non è corretto</h1><h3>Controlla meglio...</h3>";
        }
        document.getElementById("continua").style.display = "inherit";
        document.getElementById("verifica").style.display = "none";
        for(let i=0; i<sqr.length; i++){
            sqr[i].style.opacity = "60%";
        }
     }else if (tot == 405){
        //  console.log("non ci sono ripetizioni")
        //  console.log("hai vinto");
        ris.style.display = "flex";
        ris.style.backgroundColor = "chartreuse";
        ris.innerHTML = "<h1>Hai vinto!!</h1><h3>Gioca ancora</h3>";
        document.getElementById("verifica").style.display = "none";
        document.getElementById("bottoni").style.display = "inherit";

    }

return false;
}


document.getElementById("continua").onclick = () => {
    document.getElementById("patina").style.display = "none";
    document.getElementById("risultato").style.display = "none";
    document.getElementById("continua").style.display = "none";
    document.getElementById("verifica").style.display = "inherit";
    for(let i=0; i<document.getElementsByClassName("square").length; i++){
        document.getElementsByClassName("square")[i].style.opacity = "100%";
    }
}




//inizializza nuovo sudoku
function inizializza(matr){
    for(var i=0; i<tabella.length; i++){
        for(var j=0; j<tabella.length; j++){
            let elem = document.getElementById(tabella[i][j]);
            elem.value = ""
            elem.style.backgroundColor = "white";
            elem.removeAttribute("readonly");
            
        }
    }
    
    document.getElementById("risultato").style.display = "none";
    
    for(var i=0; i<tabella.length; i++){
        for(var j=0; j<tabella.length; j++){
            let selected = tabella[i][j];
            let elem = document.getElementById(selected);
            elem.value = matr[i][j];
            if(elem.value != ""){
                elem.style.backgroundColor = "lightgreen";
                elem.setAttribute("readonly","");
            }
        }
    }
}