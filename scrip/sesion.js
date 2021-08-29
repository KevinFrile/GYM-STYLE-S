/* Ficha: 2252471
Fecha: 08 de abril de 2020
Aprendices: Kevin Fraile, Angely Rojas, Fabian Vargas, Michael Muñoz y Valentina Montenegro 
Objetivo: Desarrolar una pagina web funcional para un gimnasio con HTML5, JavaScripts, CSS y Bootstrap5*/

/////////////////////////////*    REGISTRARSE  *////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////



listaUsuarios1 = []; //AREGLO EN DONDE GUARDAREMOS LOS DATOS DEL USUARIO

function obtenerNombre() {  // OBTENGO EL NOMBRE DEL INPUT

    var obtenerU = document.getElementById("NOMBRE").value;

    return obtenerU


}

function obtenerCorreo() {  // OBTENGO LA CORREO DEL INPUT

    var obtenerN = document.getElementById("CORREO").value;
    return obtenerN;

}

function obtenerContraseña() { // OBTENGO LA CONTRASEÑA DEL INPUT

    var obtenerE = document.getElementById("CONTRASEÑA").value;

    return obtenerE;
}


//CREAMOS EL USUARIO Y VALIDAMOS QUE SE HAYAN INGRESADO LOS DATOS OBLIGATORIOS COMO NOMBRE,CORREO Y CONTRASEÑA

function crearUsuario() {

    verdadera = true; // UNA VARIABLE VERDADERA QUE NOS SERVIRA PARA MIRAR SI EL USUARIO NO INGRESO ALGUN DATO

    var nombre = obtenerNombre(); //OBTENEMOS EL NOMBRE

    if (NOMBRE.value.length === 0) { // SI ENTRA ES POR QUE NO DIGITO EN NOMBRE

        nombreNull(); // ALERTA

        var verdadera = false; // CAMBIA LA VARIABLE A FALSO

        return verdadera;

    }

    var correo = obtenerCorreo(); // EXACTAMNETE LO MISMO QUE ARRIBA PERO VERIFICAMOS EL CORREO

    if (CORREO.value.length === 0) {

        correoNull(); // ALERTA

        var verdadera = false;

        return verdadera;

    }

    var contraseña = obtenerContraseña(); // EXACTAMNETE LO MISMO QUE ARRIBA PERO VERIFICAMOS EL CORREO

    if (CONTRASEÑA.value.length === 0) {

        contraseñaNull(); // ALERTA

        var verdadera = false;

        return verdadera;

    }

    if (verdadera = true) { // ENTRA AQUI EN CASO DE QUE LA VARIBLE SE VERDADERA LO QUE NOS DICE QUE LOS CAMPOS NO ESTAN VACIOS Y PODEMOS GUARDAR LOS DATOS

        listaUsuarios1.push(nombre); // GUARDAMOS LOS DATOS DEL NOMBRE COOREO Y CONTRASEÑA
        listaUsuarios1.push(correo);
        listaUsuarios1.push(contraseña);

        registroCompletado();

    }


}

function nombreNull() {

    window.location.href = 'sesion.html'

    alert('digite un nombre'); // ALERTA

}

function correoNull() {

    window.location.href = 'sesion.html'

    alert('digite un correo'); // ALERTA

}

function contraseñaNull() {

    window.location.href = 'sesion.html'

    alert('digite una contraseña'); // ALERTA

}

function registroCompletado() {


    alert('Registro completado'); // ALERTA

}



/////////////////////////////*     INGRESAR  *////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


document.querySelector('#INGRESAR').addEventListener('click', iniciarSesion);

function iniciarSesion() {


    sCorreo = document.querySelector('#I-CORREO').value; // TRAEMOS EL VALOR QUE EL USUARIO PUSO EN EL APARTADO CORREO AL INICIAR SESION

    sContrasenna = document.querySelector('#I-CONTRASENNA').value; // TRAEMOS EL VALOR QUE EL USUARIO PUSO EN EL APARTADO CONTRASEÑA AL INICIAR SESION


    bAcceso = validarCredenciales(sCorreo, sContrasenna); // PASAMOS A VALIDAR DATOS

    if (bAcceso == true) { // SI LA VARIABLE ES VERDADERA ES POR QUE LA VALIDACION FUE CORRECTA

        window.location.href = 'regis-inicio.html' // MANDAMOS A LA PAGINA DE INICIO YA INICIADO SESION 


    }

}

function validarCredenciales(sCorreo, sContrasenna) {  // VALIDAMOS LOS DATOS

    var listaUsuarios = listaUsuarios1; // TRAEMOS LOS DATOS QUE ESTEN EN EL ARREGLO DE LISTA DE USUARIOS

    var bAcceso = false; // CREAMOS UNA VARIABLE FALSA QUE NOS SERVIRA PARA VERIFICAR LOS DATOS


    for (var i = 2; i < listaUsuarios.length; i++) { // ENTRA AL CICLO

        if (sCorreo == listaUsuarios[1] && sContrasenna == listaUsuarios[2]) {   /*  ENTRA EN CASO DE QUE LO QUE HAYA EN LA LISTA DE USUSARIOS EN LA POSICION [1] Y TAMBIEN LO QUE HAYA EN LISTA DE USUARIOS EN LA POSICION [2] SEAN IGUAL A LOS VALORES TRAIOS RESPECTIVAMENTE DE CORREO Y CONTRASEÑA  */

            bAcceso = true;// EN CASO DE QUE ENTRE LA VARIABLE CAMBIA A VERDADERO                                                           

            sessionStorage.setItem('usuarioActivo', listaUsuarios1[0]);  // GUARDAMOS EL DATO DEL NOMBRE EN EL CACHE PARA DESPUES PODERLO PONER EN EL HTML 
        }
    }

    return bAcceso;


}




