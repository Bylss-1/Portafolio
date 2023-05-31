
function Ocultar(){
    document.getElementById("Humames").style.visibility = "hidden";}

function Transmutar(){
    Ocultar();
   
    var frase = document.querySelector(".ting").value.toLowerCase();

    var Texen = frase.replace(/e/img,"enter");
    var Texen= Texen.replace(/i/img, "imes");
    var Texen= Texen.replace(/a/img, "ai");
    var Texen= Texen.replace(/o/img, "ober");
    var Texen= Texen.replace(/u/img, "ufat");
    
    document.querySelector(".tres").innerHTML = Texen;}

function Revertir(){
    Ocultar();
    var frase = document.querySelector(".ting").value.toLowerCase();

    var Texen = frase.replace(/enter/img,"e");
    var Texen= Texen.replace(/imes/img, "i");
    var Texen= Texen.replace(/ai/img, "a");
    var Texen= Texen.replace(/ober/img, "o");
    var Texen= Texen.replace(/ufat/img, "u");
    
    document.querySelector(".tres").innerHTML = Texen;
}

function copiar(){
    var ob = document.querySelector(".tres").textContent;
    navigator.clipboard.writeText(ob);}


   //document.execCommand("copy");
   /*function formato(texto){
if (texto.constructor !=String)
return null;

let patron = /[^\x20\x2D0-9A-Z\x5Fa-z]/g;

return texto.replace(patron, "")

//\xC0-\xD6\xD8-\xF6\xF8-\-xFF*/