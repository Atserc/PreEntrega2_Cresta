
const arregloNombres = [];
const arregloMaterias = [];

class Materia {
    constructor(nombre,promedio,aprobado){
        this.nombre = nombre;
        this.promedio = promedio;
        this.aprobado = aprobado;
    }
    volverString(){
        let aux = "En la materia " + this.nombre + " obtuvo un promedio de " + this.promedio + " por lo que está " + this.aprobado + ". \n";
        return aux;
    }
}

function promedio(nota1,nota2,nota3){
    if (nota3 != 0){
        resultado = (nota1 + nota2 + nota3) / 3;
    } else if(nota2 != 0) {
        resultado = (nota1 + nota2) / 2;
    } else {
        resultado = nota1; 
    }
    return resultado;
}

function cadaMateria (nombreMateria){
    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 0;
    let resultado;
    alert("Ingreso de notas de " + nombreMateria);
    let cantExamenes = parseFloat(prompt("¿Rindió uno, dos o tres examenes?"));
    switch (cantExamenes) {
        case 1:
            nota1 = parseFloat(prompt("Ingrese la nota del primer examen:"));
            break;
        case 2:
            nota1 = parseFloat(prompt("Ingrese la nota del primer examen:"));
            nota2 = parseFloat(prompt("Ingrese la nota del segundo examen:"));
            break;
        case 3:
            nota1 = parseFloat(prompt("Ingrese la nota del primer examen:"));
            nota2 = parseFloat(prompt("Ingrese la nota del segundo examen:"));
            nota3 = parseFloat(prompt("Ingrese la nota del tercer examen:"));
            break;
        default:
            alert("numero incorrecto de examenes ingresado");
            break;
    }
    if (((nota1 <= 10)&&(nota2 <= 10)&&(nota3 <= 10)) && ((nota1 >= 0)&&(nota2 >= 0)&&(nota3 >= 0))){
        resultado = promedio(nota1,nota2,nota3);
        let aprobacion;
        if (resultado > 4) {
            aprobacion = "aprobado";
        } else {
            aprobacion = "desaprobado";
        }
        const materiaNueva = new Materia(nombreMateria,resultado,aprobacion);
        arregloMaterias.push(materiaNueva);
    }
    else{
        alert("notas ingresadas incorrectas");
    }
}
function armarStringMaterias (arregloMaterias){
    let salidaMaterias;
    for (let i=0; i < arregloMaterias.length;i++) {
        salidaMaterias += arregloMaterias[i].volverString();
    }
    return salidaMaterias;
}


alert("Agrege sus materias (ingrese listo para dejar de ingresar)");
let materiaNom = prompt("Ingrese el nombre de la materia:");
while (materiaNom.toUpperCase() != "LISTO"){
    arregloNombres.push(materiaNom);
    materiaNom = prompt("Ingrese el nombre de la materia: (recuerde ingresar listo para finalizar el ingreso)");
}
let salida = "";
for (i=0;i<arregloNombres.length;i++){
    cadaMateria(arregloNombres[i]);
}
salida = armarStringMaterias(arregloMaterias);
alert(salida);

// faltaria usar busqueda para encontrar mi mejor materia, y agregar aquellas que desaprobe a otro arreglo.
//agregar todo lo de arriba al string