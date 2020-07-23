var testo="Le infrastrutture, a partire dall’Alta velocità ferroviaria al Sud, che oggi fa capolinea a Salerno";

window.addEventListener("keydown", keypress_handler, false);
window.addEventListener("keyup", keyup_handler, false);

function keypress_handler(event) {
  avanti();
}

function keyup_handler(event) {
  resetInt();
}
  
function avanti() {
    var raw_text=testo;
    var i;
  
    var reading_complete_list=[];
    var current_string="";
    var p=0; //base partenza lettura caratteri
  
    try {clearInterval(myTimer);}
       catch(err){}
  
    myTimer = setInterval(function() {
	   for (i = p; i < p+10; i++) { 
       //per ogni lettera nel testo
       r_t = raw_text[i];
       current_string = current_string.concat(r_t); 
       document.getElementById("testo").innerHTML = current_string;
     }
     p+=10;
     current_strinmg="";
	}, 800);
}

function resetInt() {
    try {clearInterval(myTimer);}
		catch(err){}
}
