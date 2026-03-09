// creacion de variables
let nombreusuario = "Flor";
let num1 = 40;
let num2 = 30;

//estructuras de control

if(num1 > num2){
    nombreusuario = 'danilo franco';
}else{
    nombreusuario = 'nahuel montiel';
}

//miTitulo2.textContent = "USUARIO: " + nombreusuario;

//funciones en js
const miTitulo2 = document.querySelector("h2");

function comparar(n1, n2){
    let resultado = n1 > n2;
    return resultado;
}

if(comparar(num1, num2)){
    miTitulo2.textContent = "is true!";
}
//eventos
document.querySelector("html").onclick = function (){
    alert("dejate de hinchar!!!");
}