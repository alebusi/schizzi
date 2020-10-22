var testo="";

var dimensione = ["40","60","80","100","120"];
var num_car = ["28","19","15","12","10"];
var ind=0; 
var tempo = 1200;
var i=-1; //indice posizione nel testo
var nc=0; //numero caratteri da visualizzare
var nc_max=28; //numero massimo caratteri da visualizzare
var current_string="";
kd = false;
up = false;

window.addEventListener("keydown", keypress_handler, false);
window.addEventListener("keyup", keyup_handler, false);

$(document).ready(function(){
    $("#testoCompleto").load("https://docs.google.com/document/d/e/2PACX-1vRDihSpthOhnhcIbIi7Z1OfArt2KtozYcXuglANaXJk-xDDWgN9AXM6go_HFLoCaufZjWZV5EEKpq_P/pub span");
});

function keypress_handler(event) {
  if (event.keyCode == 32) { 
    if (!this.kd) {  //false
	this.kd = true;
        avanti();
    }
    elsif (this.up) {
	this.kd = false;
        resetInt();
    }
  }
}

function keyup_handler(event) {
  if (event.keyCode == 32) {
     if (this.
     this.kd = false;
     this.up = true;
     /* resetInt(); */
  }
}
  
function avanti() {
    if (i == -1) {
     testoRaw=document.getElementById("testoCompleto").innerHTML;
     testo=testoRaw.substr(testoRaw.indexOf("#")+1);	    
    }	
    try {clearInterval(myTimer);}
       catch(err){}
  
    myTimer = setInterval(function() {
       if (i < testo.length-1) {
         i+=1;
         r_t = testo[i];
	 if (r_t == " ") {
	    current_string = current_string.concat('<span style="color:black;">-</span>'); 
	 }
	 else {
            current_string = current_string.concat(r_t);
	 }
	 //current_string = current_string.concat('<span style="color:'+color[ind_c]+';">'+r_t+'-</span>'); 
         document.getElementById("testo").innerHTML = current_string;
	 nc+=1;
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

function cambioCase() {
    if (document.getElementById("case").style.textTransform == "lowercase") {
	 document.getElementById("case").style.textTransform = "uppercase";
	 document.getElementById("testo").style.textTransform = "uppercase"; 
    }
    else {
	 document.getElementById("case").style.textTransform = "lowercase";
	 document.getElementById("testo").style.textTransform = "lowercase";
    }
}
