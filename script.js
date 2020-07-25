var tempo = 1200;
var i=-1; //indice posizione nel testo
var nc=0; //numero caratteri da visualizzare
var current_string="";

window.addEventListener("keydown", keypress_handler, false);
window.addEventListener("keyup", keyup_handler, false);
/*
$(document).ready(function(){
    $("#testoCompleto").load("https://docs.google.com/document/d/e/2PACX-1vTYZ7j14zvmea0tzkWS8wdm54-6gxHFMuATwkWe7xBjW_KvD8zOrKGVpErNOLbkV4d5jEzphBLLWT-u/pub");
});
*/

function keypress_handler(event) {
  avanti();
}

function keyup_handler(event) {
  a=1;
  //alert("key-up");
  //resetInt();
}
  
function avanti() {
    if (i == -1) {
       testo=document.getElementById("testoCompleto").value;
    }
	
    try {clearInterval(myTimer);}
       catch(err){}
  
    myTimer = setInterval(function() {
       if (i < testo.length-1) {
         i+=1;
         nc+=1;
         r_t = testo[i];
         current_string = current_string.concat(r_t);
         document.getElementById("testo").innerHTML = current_string;
         if (nc > 9) {
           current_string=""; 
           nc=0;
         }
       }
       //resetInt();
	  }, tempo);
}

function resetInt() {
    try {clearInterval(myTimer);}
		catch(err){}
}

function cambioVelocita() {
  tempo -= 100;
  if (tempo < 500) {
    tempo=1200;
  }
  document.getElementById("velocita").innerHTML = tempo;
}
