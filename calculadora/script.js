const pantalla = document.getElementById("eys");
function mostrarPantalla(input){
    pantalla.value+=input;
}
function limpiar (){
    pantalla.value="";
}
function resolver (){
    try{
        pantalla.value=eval(pantalla.value)
    }
    catch{
        pantalla.value="ERROR";
    }
}