function jump(){  
    document.write("<br>");
    
}

function imprimir(mensaje){
    document.write(mensaje);
}
tablaDe = parseInt(prompt("Ingrese el numero para calcular sus tablas:"))


for (var n = 1;n <= 10;n++) {

imprimir(tablaDe + " * " + n + "= " + tablaDe * n);
jump();

}
