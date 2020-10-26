var testo="";

var dimensione = ["40","60","80","100","120"];
var num_car = ["28","19","15","12","10"];
var colori = ["white","orange"];
var ind=0; 
var ind_c=0;
var i_pos=-1;
var tempo = 0;
var i=-1; //indice posizione nel testo
var nc=0; //numero caratteri da visualizzare
var nc_max=28; //numero massimo caratteri da visualizzare
var current_string="";
var monocolore = false;
var kd = false;

window.addEventListener("keydown", keypress_handler, false);
//window.addEventListener("keyup", keyup_handler, false);

$(document).ready(function(){
    $("#testoCompleto").load("https://docs.google.com/document/d/e/2PACX-1vRDihSpthOhnhcIbIi7Z1OfArt2KtozYcXuglANaXJk-xDDWgN9AXM6go_HFLoCaufZjWZV5EEKpq_P/pub span");
});

function keypress_handler(event) {
  if (event.keyCode == 32) {
     if (tempo == 0) {
	elaboraTesto();
     }
     if (tempo > 0) {
	if (!this.kd) {  //false
	   this.kd = true;
           elaboraTesto();
	}
        else {
	   resetInt();
	   this.kd = false;
	}
     }  
  }
}

function keyup_handler(event) {
  if (event.keyCode == 32) {
     this.kd = false;
     /* resetInt(); */
  }
}

function resetInt() {
    try {clearInterval(myTimer);}
		catch(err){}
}

function elaboraTesto() {
    if (i == -1) {
     testoRaw=document.getElementById("testoCompleto").innerHTML;
     testo=testoRaw.substr(testoRaw.indexOf("#")+1);	    
    }
    if (tempo == 0) {
	while (nc < nc_max) {
	  avanti();
	}
	document.getElementById("testo").innerHTML = current_string;
	current_string=""; 
        nc=0;
    }
    else {
       if (this.kd) {	       
          resetInt();
	  this.kd = false;
       }
       else {
          myTimer = setInterval(avanti, tempo);
	  this.kd = true;
       }
    }
}
	    
function avanti() {
    if (i < testo.length-1) {
      if (nc < 0) { //giro a vuoto
	 nc = 0;
      } else {
	 document.getElementById("testo").style.borderRightColor = "#4285F4";
         i+=1;
         r_t = testo[i];
	 ind_c+=1;
	 if (ind_c > colori.length-1 || monocolore) ind_c=0; 
	 if (r_t == " ") {
	    current_string = current_string.concat('<span style="color:black;">-</span>'); 
	 }
	 else {
	    current_string = current_string.concat('<span style="color:'+colori[ind_c]+';">'+r_t+'</span>');
	 }
	 nc+=1;
	 if (tempo > 0) {
             document.getElementById("testo").innerHTML = current_string;
	     if (nc > nc_max-1) {
		document.getElementById("testo").style.borderRightColor = "white";
                current_string=""; 
                nc=-1;
	     }
         }
      }
    }
}

function cambioVelocita() {
  if (tempo == 0) {
	tempo = 1300;
  }
  tempo -= 100;
  if (tempo < 500) {
    tempo=0;
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
function cambioColore() {
  if (monocolore) {
     monocolore=false;
     document.getElementById("monocolore").innerHTML = "COL";
  }
  else {
     monocolore=true;
     document.getElementById("monocolore").innerHTML = "BIA";
  }
}
