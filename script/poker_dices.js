const dado = document.getElementsByClassName("dado");
const giocatore1 = document.getElementsByClassName("giocatore1");
const giocatore2 = document.getElementsByClassName("giocatore2");
const giocatore3 = document.getElementsByClassName("giocatore3");
const giocatore4 = document.getElementsByClassName("giocatore4");
const giocatore5 = document.getElementsByClassName("giocatore5");
const section = document.getElementsByTagName("section");
const bottone = document.getElementById("bottone");

// giocatore1[0].onclick = ()=>{alert("ciao")}

bottone.onclick = timing;

function timing() {
  bottone.disabled = true;
  window.timer = setInterval(roll, 100);
  setTimeout(lancia, 1500);
}

function roll() {
  for (var i = 0; i < dado.length; i++) {
    let rand = Math.ceil(Math.random() * 6);
    dado[i].value = rand;
    let inclinazione = Math.ceil(Math.random() * 70) - 35;
    dado[i].style.backgroundColor = "black";
    dado[i].style.color = "white";
    dado[i].style.transform = "scale(1) rotate(" + inclinazione + "deg)";
    dado[i].style.boxShadow = "none";
  }
}

function lancia() {
  clearInterval(timer);
  bottone.disabled = false;
  console.clear();
  for (var i = 0; i < dado.length; i++) {
    let rand = Math.ceil(Math.random() * 6);
    dado[i].value = rand;
  }

  const giocata = [];
  giocata[0] = verifica(giocatore1);
  giocata[1] = verifica(giocatore2);
  giocata[2] = verifica(giocatore3);
  giocata[3] = verifica(giocatore4);
  giocata[4] = verifica(giocatore5);
  console.log(giocata);

  var max = Math.max(...giocata);
  var maxindex = giocata.indexOf(max);
  console.log("vince " + maxindex);
  section[maxindex].style.background = "var(--winner-gradiente)";
}

function verifica(arr) {
  var cont = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].value == arr[j].value) {
        cont++;
        let inclinazionei = Math.ceil(Math.random() * 30) - 15;
        let inclinazionej = Math.ceil(Math.random() * 30) - 15;
        arr[i].style.transform = "scale(1.2) rotate(" + inclinazionei + "deg)";
        arr[i].style.color = "lightgoldenrodyellow";
        arr[j].style.transform = "scale(1.2) rotate(" + inclinazionej + "deg)";
        arr[j].style.color = "lightgoldenrodyellow";
      }
    }
    section[i].style.background = "none";
  }
  if (cont != 0) {
    if (cont == 4) {
      cont += puntoMaggioreFull(arr);
    } else {
      cont += puntoMaggioreMinore(arr);
    }
  } else {
    cont += scala(arr);
  }
  return cont;
}

function puntoMaggioreMinore(arr) {
  var pmax = 0;
  var pmin = 10;
  var nmax = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].value == arr[j].value) {
        if (pmax < arr[i].value) {
          pmax = arr[i].value;
        }
        if (pmin > arr[i].value) {
          pmin = arr[i].value;
        }
      }
    }
    if (arr[i].value > nmax && arr[i].value != pmax && arr[i].value != pmin) {
      nmax = arr[i].value;
    }
  }
  if (nmax == 0) {
    if (pmax == 6) {
      for (let i = 0; i < arr.length; i++) {
        arr[i].style.transform = "scale(1.2)";
        arr[i].style.color = "gold";
        arr[i].style.boxShadow = "0 0 3rem gold";
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        arr[i].style.transform = "scale(1.2)";
        arr[i].style.color = "gold";
      }
    }
  }
  return pmax / 10 + pmin / 100 + nmax / 1000;
}

function puntoMaggioreFull(arr) {
  var pmax = 0;
  for (let i = 0; i < arr.length; i++) {
    var temp = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].value == arr[j].value) {
        temp++;
      }
    }
    if (temp == 2) {
      pmax = arr[i].value;
    }
    if (temp == 1 && arr[i].value != pmax) {
      pmin = arr[i].value;
    }
  }
  return pmax / 10 + pmin / 100;
}

function scala(arr) {
  var temp = 0;
  for (var i = 0; i < arr.length; i++) {
    var val = 0 + parseInt(arr[i].value);
    temp = temp + val;
  }
  console.log(temp);
  if (temp == 15) {
    for (var i = 0; i < arr.length; i++) {
      arr[i].style.transform = "scale(1.2)";
      arr[i].style.color = "#f0f0f0";
    }
    return 9;
  } else if (temp == 20) {
    for (var i = 0; i < arr.length; i++) {
      arr[i].style.transform = "scale(1.2)";
      arr[i].style.color = "#cd7f32";
    }
    return 8;
  } else {
    var nmax = 0;
    if (val > nmax) {
      nmax = val;
    }
  }
  return nmax / 10;
}

// Punteggi:
// niente = 0
// coppia = 1
// doppia coppia = 2
// tris = 3
// full = 4
// poker = 6
// 5 uguali = 10
// scala 2-6 = 8       {Da aggiungere manualmente}
// scala reale 1-5 = 9 {Da aggiungere manualmente}

// Spareggio:
//
