//JSON JavaScript Objet Notation

let curso = {
   titulo: 'Curso JavaScript',
   duracion: 2.2,
   formato: 'video',
   bloque: ['Introducci�n', 'Funciones'],
   inscribir: function (usuario){
     console.log(usuario + ' ahora est� inscrito');
   }
}

//console.log(curso.inscribir('Christopher'));
curso.inscribir('Christopher');

