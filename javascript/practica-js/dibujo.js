var atributosDeLienzo1 = document.getElementById("dibujito");
var lienzo = atributosDeLienzo1.getContext("2d"); 


lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(100, 100);
lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.closePath();
