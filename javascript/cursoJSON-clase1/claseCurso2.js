//
function Curso(titulo){
  this.titulo = titulo;
  
  this.inscribir = function(usuario){
    console.log(usuario + ' ahora está inscrito en ' + titulo);
  }
}


let cursoRuby = new Curso('Curso Profesional de Ruby');
let cursoJava = new Curso('Curso Básico de Java');

//console.log(cursoRuby.titulo);
//console.log(cursoJava.titulo);

cursoRuby.inscribir('Christopher');
cursoJava.inscribir('Christopher');