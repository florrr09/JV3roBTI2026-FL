// ejercicio - hallar el iva
let precioinicial = prompt("ingresar precio");
let iva10 = 0.1;
let ivaresultado = precioinicial * iva10;
//console.log("el iva a pagar es:"  ,ivaresultado);
const mostrarprecio = document.getElementById('precioInicial');
const mostrariva = document.getElementById('calculoIva');

mostrarprecio.textContent =  "el precio ingresado es:", precioinicial;
mostrariva.textContent = "el iva ingresado es:", ivaresultado;

//ejercicio 2 - area y  perimetro de un cuadrado
let ladodelCuadrado = 40;
let areaDelcuadrado = ladodelCuadrado + ladodelCuadrado;
let perimetroDelcuadrado = ladodelCuadrado * 4;
const lado = document. getElementById("ladoCuadrado");
const area = document.getElementById("areaCuedrado" );
const perimetro= document. getElementyld("perimetroCuadrado"); I
// mostramos los resultados en el html
lado. textContent = "Lado" + ladoDelcuadrado;
area. textContent = "El area es: " + areaDelCuadrado;
perimetro. textContent = "El perimetro es:" + perimetrodelCuadrado;
//ejercicio 3 - saludos con alert
let nameuser =  prompt('cual es tu nombre?');
alert('hola' + nameuser);

//ejercicio 4 - promedio de tres numeros ingresados En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.
//Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3
let numa =  prompt('ingresa primer numero');
let numb =  prompt('ingresa segundo numero');
let numc =  prompt('ingresa tercer numero');
let promedio = (parseInt(numa)+parseInt(numb)+parseInt(numc))/3;
alert('promedio es ' + promedio);
// Ejercicio 5 - KL
let Lit  = prompt ("Ingresar cantidad de litros")
let kilo = prompt ("Ingresar Kilometros")
let resultados = lit / kilo 
alert ("Resultado " + resultados + "L/KM")
// Ejercicio 6 - SEG HORAS
let horaIn = prompt ("Ingrese hora:");
let horaxmin = horaIn * 60;
let horaxseg = horaxmin *60;
alert (horaIn + "Hora es igual a " + horaxmin + "segundos")
// Ejercicio 7 
let numingr  = prompt ("INGRESAR  NUMERO");
let decenas = numingr /  10 ;
let unidades = numingr % 10;
alert ("El nro ingresado tiene" + decenas + "decenas.\n" + "Y" + unidades + "unidades")
// Ejercicio 8 
let porcionesSoli = prompt ("INGRESAR NUMEROS DE PORCIONES")
let patataNecegr = 200  * porcionesSoli;
let huevosNece =  1 *porcionesSoli;
let cebollasnece = 60 * porcionesSoli;
alert (
  "Se necesitaran" + patataNecegr + "KG DE PATATAS.\n" + huevosNece + "huevos.\n" + cebollasnece + "cebollas necesarias"
)