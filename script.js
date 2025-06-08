let i = 0;
let p = document.getElementById("parrafo")
const boton = document.getElementById("boton");
p.innerHTML = i;
function contar(){
    if (i <= 9) 
        p.innerHTML=++i;
    else{
        i=0;
        p.innerHTML=i;
    }       
}