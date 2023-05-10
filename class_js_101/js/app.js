

function primera_funcion(){
    let a = "hola";
    let b = " en tls"
    let c = " en sabado"
    console.log(a+b+c);
}

function segunda_function(a){
    if(a < 100){
        document.getElementById("titulo").innerHTML = "Bienvenido a clase de sabado. ";
    }
}

//objetos

let bebidas = {
    tipos: ['gaseosa','jugos'],
    embase: ['vidrio','plastico'],
    toxicidad: false,
    unidad: 'mL',
    beber: function(){
        console.log("estas bebiendo");
    }
}