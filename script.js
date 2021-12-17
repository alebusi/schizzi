var colTraccia=["white","blue","red"];
var y=0;

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

function assColore() {
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

function traccia() {
    var x = document.getElementsByTagName("svg");
    y=y+1;
    if (y > 2) y=0;
    for (ix = 0; ix < x.length; ix++) {
       x[ix].style.fill = colTraccia[y];
    }
}

function myFunc() {
  a=1; //funzione fittizia per far scattare hover su disp.touch
}
