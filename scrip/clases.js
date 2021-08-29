/* Ficha: 2252471
Fecha: 08 de abril de 2020
Aprendices: Kevin Fraile, Angely Rojas, Fabian Vargas, Michael Muñoz y Valentina Montenegro 
Objetivo: Desarrolar una pagina web funcional para un gimnasio con HTML5, JavaScripts, CSS y Bootstrap5*/

//FUNCION CON ALERTAS MAS BONITAS QUE GENERA UN NUMERO ALEATORIO ENTRE 0 Y 10 Y SI EN NUMERO ESTA ENTRE 0 Y 9 
//MOSTRATRA EL MENSAJE "¡FELICIDADES ! Su inscripcion fue realizada con exito success"

function resultado1() {

    var aleatorio = Math.round(Math.random() * 10);

    if (aleatorio < 9) {

        swal('¡ FELICIDADES !', 'Su inscripcion fue realizada con exito', 'success');

    } else {

        swal('¡ OOOOPS !', 'Al parecer algo salio mal (Puede ser que esta clases este llena o que los datos ingresados no sean correctos)', 'error')

    }

}

//FUNCION CON ALERTAS NORMALES QUE GENERA UN NUMERO ALEATORIO ENTRE 0 Y 10 Y SI EN NUMERO ESTA ENTRE 0 Y 9 
//MOSTRATRA EL MENSAJE "¡FELICIDADES ! Su inscripcion fue realizada con exito success"

function resultado() {

    var aleatorio = Math.round(Math.random() * 10);

    if (aleatorio < 9) {

        alert('Su inscripcion fue realizada con exito');

    } else {

        alert('Al parecer algo salio mal (Puede ser que esta clases este llena o que los datos ingresados no sean correctos)')

    }

}