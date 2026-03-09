function calculaTuEdad() {

var fechaNacimiento = new Date(document.getElementById("fecha").value);
var hoy = new Date();

var años = hoy.getFullYear() - fechaNacimiento.getFullYear();
var meses = hoy.getMonth() - fechaNacimiento.getMonth();

if (meses < 0) {
    años--;
    meses += 12;
}

document.getElementById("resultado").innerHTML =
"Tu edad es: " + años + " años y " + meses + " meses";

}

