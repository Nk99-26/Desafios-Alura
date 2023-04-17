var input = document.querySelector("input");
var para = document.getElementById("msj-encriptado");
var container = document.getElementById("ocultar");
var msjEncontrado = document.getElementById("msj-encontrado");
var divEscribible = document.getElementById("div-ecribible");
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

var e = "enter";
var i = "imes";
var a = "ai";
var o = "ober";
var u = "ufat";

//llamada para evitar q aparezcar el boton de copiar zzz al inicio
ocultar();
divEscribible.focus();


async function copiar(){
    //tmb se puede hacer añadiendo un input fantasme y luego eliminandolo 
    try {
        await navigator.clipboard.writeText(para.textContent);
        divEscribible.textContent="";
        alert('Mensaje Copiado');
        divEscribible.focus();
        //ese alert no me gusta zzz podria crear un mensaje temporal... hmm pendiente!
    } catch (err) {
        console.error('Error in copying text: ', err);
    }
}

// para q salga el muñeco y mensaje encontrado si no hay mensaje
function ocultar(){
    if(para.textContent=="")
    {
    msjEncontrado.style.display="none";
    container.style.display="";
    }
    else
    {
    msjEncontrado.style.display="";
    container.style.display="none";   
    }
}
    

function encriptar() {
    input.value = divEscribible.textContent;
    let txtEncrip = input.value.toLowerCase().replace(/e/gi, "enter")
    .replace(/i/gi, i).replace(/a/gi, a).replace(/o/gi, o).replace(/u/gi,u);
    para.textContent=txtEncrip;
    ocultar();
   
}

function desencriptar() {
    input.value = divEscribible.textContent;
    let txtDesencrip = input.value.toLowerCase().replaceAll("ai","a")
    .replaceAll(e,"e").replaceAll(i,"i").replaceAll(o,"o").replaceAll(u,"u");
    para.textContent=txtDesencrip;
    ocultar();
    
}

//Se utiliza para que el campo de texto solo acepte letras
function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "abcdefghijklmnñopqrstuvwxyz 1234567890";//Se define todo el abecedario que se quiere que se muestre.
    especiales = [8,37, 39, 46, 6]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.

    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
      }
}