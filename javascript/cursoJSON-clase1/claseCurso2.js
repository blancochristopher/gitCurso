//
function Curso(titulo){
  this.titulo = titulo;
  
  this.inscribir = function(usuario){
    console.log(usuario + ' ahora est� inscrito en ' + titulo);
  }
}


let cursoRuby = new Curso('Curso Profesional de Ruby');
let cursoJava = new Curso('Curso B�sico de Java');

//console.log(cursoRuby.titulo);
//console.log(cursoJava.titulo);

cursoRuby.inscribir('Christopher');
cursoJava.inscribir('Christopher');