
const arregloMaterias = [];
const arregloPromedios = [];

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
        arregloPromedios.push(resultado);
    }
    else{
        alert("notas ingresadas incorrectas");
    }
}
function armarStringMaterias (nombreMateria, promedio, salidaMateria){
    let aprobacion;
    if (promedio > 4) {
        aprobacion = "aprobado";
    } else {
        aprobacion = "desaprobado";
    }
    salidaMateria = salidaMateria + "En la materia " + nombreMateria + " su promedio es " + promedio.toFixed(2) + ", por lo tanto está " + aprobacion +"." + "\n";
    return salidaMateria;
}


alert("Agrege sus materias (ingrese listo para dejar de ingresar)");
let materiaNom = prompt("Ingrese el nombre de la materia:");
while (materiaNom.toUpperCase() != "LISTO"){
    arregloMaterias.push(materiaNom);
    materiaNom = prompt("Ingrese el nombre de la materia: (recuerde ingresar listo para finalizar el ingreso)");
}
let salida = "";
for (i=0;i<arregloMaterias.length;i++){
    cadaMateria(arregloMaterias[i]);
}
for (i=0;i<arregloMaterias.length;i++){
    salida = armarStringMaterias(arregloMaterias[i],arregloPromedios[i],salida);
}
alert(salida);

// faltaria usar busqueda para encontrar mi mejor materia, y agregar aquellas que desaprobe a otro arreglo.
//agregar todo lo de arriba al string