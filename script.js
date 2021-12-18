var colori = ["white","black","transparent"];
var ind_r = 0;

$(document).ready(function(){
    $("#testoCompleto").load("https://docs.google.com/document/d/e/2PACX-1vR2wy7N8nsgFMNHXOhIozb2PXqPEyEx0Xff6BXvgE6L2ywGaE0_NDZ46fjef7Z8sqSpMGvPgKQH1CZT/pub span");
});

function elaboraTesto() {
  testo=document.getElementById("testoCompleto").innerHTML;
  testo=testo.replace(/&lt;/g,"<");
  testo=testo.replace(/&gt;/g,">");
  testo=testo.replace(/\s+/g," ");
  document.getElementById("logo").innerHTML = testo;
}

function randomColor() {
    var hex = '0123456789ABC'.split('');
    var color = '#';
    for (i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random() * 13)];
    }
    return color;
}

function cambiaColore() {
    for (ix = 0; ix < 10; ix++) {
        x = document.getElementsByClassName("i"+ix);
        if (x.length > 0) {
            colore=randomColor();
            for (i = 0; i < x.length; i++) {
               x[i].style.fill = colore;
            }
        }
    }
}

function cambiaTraccia() {
     ind_r+=1;
     if (ind_r > colori.length-1) ind_r=0;
     var x = document.getElementsByTagName("svg");
     for (i = 0; i < x.length; i++) {
       x[i].style.stroke = colori[ind_r];
     }
    }

function cambiaSfondo() {
  if (document.body.style.backgroundColor == "black") {
      newColor = randomColor();
      document.body.style.backgroundColor=newColor;
  }
  else {
    document.body.style.backgroundColor="black";
  }
}

function myFunc() {
  a=1; //funzione fittizia per far scattare hover su disp.touch
}
