var testo="Radicalità per ricostruire È il titolo di un documento presentato oggi nella sede del Partito democratico da Gianni Cuperlo nel corso di un dibattito aperto che si è svolto in presenza, con non più di 40 persone per rispettare il distanziamento imposto dalle regole di contrasto al Covid, ma con molti collegamenti da remoto. Presidente della Fondazione Pd, ex deputato ed ex componente della segreteria con delega alle Riforme, è proprio sul riformismo di sinistra che Cuperlo punta l'accento. Riformismo che, a suo avviso, non può non essere radicale, specie in questa fase storica e politica. Perché la radicalità delle idee è adeguata, in questo momento, alla situazione estrema che stiamo vivendo";

var dimensione = ["40","60","80","100","120"];
var num_car = ["20","18","16","14","12"];
var ind=0; 
var tempo = 1200;
var i=-1; //indice posizione nel testo
var nc=0; //numero caratteri da visualizzare
var nc_max=12; //numero massimo caratteri da visualizzare
var current_string="";
kd = false;

window.addEventListener("keydown", keypress_handler, false);
window.addEventListener("keyup", keyup_handler, false);

function keypress_handler(event) {
  if (event.keyCode == 32) { 
    if (!this.kd) {
	      this.kd = true;
        avanti();
    }
  }
}

function keyup_handler(event) {
  if (event.keyCode == 32) {
     this.kd = false;
     resetInt();
  }
}
  
function avanti() {
 /*   if (i == -1) {
       testo=document.getElementById("testoCompleto").value;
    }
*/	
    try {clearInterval(myTimer);}
       catch(err){}
  
    myTimer = setInterval(function() {
       if (i < testo.length-1) {
         i+=1;
         nc+=1;
         r_t = testo[i];
         current_string = current_string.concat(r_t);
         document.getElementById("testo").innerHTML = current_string;
         if (nc > nc_max-1) {
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

function cambioDimensione() {
  ind+=1;
  if (ind > dimensione.length-1) ind=0;
  document.getElementById("testo").style.fontSize=dimensione[ind];
  document.getElementById("dimensione").innerHTML = dimensione[ind];
  nc_max=num_car[ind];
}
