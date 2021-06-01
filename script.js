$(document).ready(function(){
    $("#testoCompleto").load("https://docs.google.com/document/d/e/2PACX-1vR2wy7N8nsgFMNHXOhIozb2PXqPEyEx0Xff6BXvgE6L2ywGaE0_NDZ46fjef7Z8sqSpMGvPgKQH1CZT/pub span");
});

function elaboraTesto() {
  testo=document.getElementById("testoCompleto").innerHTML;
  testo=testo.replace(/&lt;/g,"<");
  testo=testo.replace(/&gt;/g,">");
  document.getElementById("logo").innerHTML = testo;
}
