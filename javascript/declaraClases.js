//Class declaration: example.
class Curso{

    constructor(titulo){
        this.titulo=titulo;
    }

    inscribir(usuario){
        console.log(usuario + " se ha inscrito");
    }
}


/*
Class expression: example 1.
    let Curso = class{} //esta es la forma más común
Class expression: example 2.
    let Usuario = class Usuario{}
*/

let javaScriptCurso = new Curso("Curso Profesional de JavaScript");
