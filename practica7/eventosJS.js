var imagen;

function ramoRosas() {
    alert('Hermosas Flores');
}

function activaRamo(){
    imagen=document.getElementsByTagName("img")[0];
    imagen.addEventListener("mouseover", crecer, false);
    imagen.addEventListener("mouseout", normal, false);
}

function crecer() {
    imagen.width=220;
    imagen.height=270;
 
}

function normal() {
    imagen.width=193;
    imagen.height=250;
 
}


window.onload=activaRamo;