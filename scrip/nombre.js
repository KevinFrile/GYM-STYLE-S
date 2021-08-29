/* Ficha: 2252471
Fecha: 08 de abril de 2020
Aprendices: Kevin Fraile, Angely Rojas, Fabian Vargas, Michael Muñoz y Valentina Montenegro 
Objetivo: Desarrolar una pagina web funcional para un gimnasio con HTML5, JavaScripts, CSS y Bootstrap5*/

//ESTE JS NOS PERMITE COLOCAR EL NOMBRE DEL USUARIO UNA VEZ INICIADO SESION

var nombre;

// HACEMOS REFERENCIA A LA ETIQUETA QUE VAMOS A REMPLAZAR EL CONTENIDO CON EL ID Y LO REMPLAZAMOS

nombre = document.getElementById("NombreUsuario");

nombre.innerHTML = sessionStorage.getItem('usuarioActivo');
