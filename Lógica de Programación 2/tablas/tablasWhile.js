function jump(){  
    document.write("<br>");
    
}

function imprimir(mensaje){
    document.write(mensaje);
}
tablaDe = parseInt(prompt("Ingrese el numero para calcular sus tablas:"));



var n = 1

while (n <= 10){
    imprimir(tablaDe + " * " + n + "= " + tablaDe * n);
    jump();
    n = n + 1; 
}