
let a = 100;
function primera_function(){
    let a = "hola";
    console.log(a);

}
function segunda_function(){
    console.log(a);
}
console.log(a);
/*
let b = confirm("¿Quieres empezar?");
if(b){
    let c = prompt("Datos de usuario");
    document.getElementById("titulo").innerHTML = c;
}else{
    alert("Cierra la pagina");
}*/

//estructuras

let d = ['manzana','pera','naranja','sandia'];

let e = {
    nombre: 'kenny',
    tamaño: 1.8,
    skills: ['saltar','correr','esquivar'],
    comer: function(){
        console.log("comiendo");
    }
}

console.log(e.skills[1]);

function boton(){
    document.getElementById("animal").src = "https://cdn.britannica.com/50/155250-050-8ACEF41E/armadillo-human-hand.jpg";
}

function go_back(){
    document.getElementById("animal").src = "https://atlasanimal.com/wp-content/uploads/2021/02/topo.jpg.webp";
}