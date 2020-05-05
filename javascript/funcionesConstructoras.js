function Curso (titulo) {
    this.titulo = titulo;

    this.inscribir = function(usuario){
        console.log(usuario + " se ha inscrito" );
    }
}

let cursoJavaScript = new Curso("Curso Pro de JavaScript");
let cursoRuby = new Curso("Curso Ruby");

console.log(cursoJavaScript.titulo);
console.log(cursoRuby.titulo);

