// console.log(`hola mundo ${numero2}`) no hacerlo

// no es buena practica
// numero=5;
// tampoco es buena practica
// var numero2=10
// forma si correcta o que es buena practica
// let numero3=15
// forma mas utilizada para declarar variables o constantes
// const numero4=20

// formas de hacer un hola mundo
// console.log ("Hola mundo")
// forma2
// console.log('hola mundo')
// es mejor porque se pueden concatenar variables si necesidad de usar + o colocar mas ``
// console.log(`Numero :  ${numero3}`)


// funcion anonima no tiene nombre despues del function
// document.addEventListener('DOMContentLoaded',function(){
// console.log(`Mi funcion anonima`)

// });

// document.addEventListener('DOMContentLoaded',miFuncion);

// funcion con nombre
// lo usual pero ya viejo
// function miFuncion(){
//     console.log(`se ejecuto mi funcion con nombre`)

// }

// Actual y mejor hacer esto
// const miFuncionConst= () => {

// }


// funcion anonima no tiene nombre despues del function
document.addEventListener('DOMContentLoaded',function(){
console.log(`Mi funcion anonima`);

const btn=document.querySelector('#button');
console.log(btn);

btn.addEventListener('click', accion);
});

const accion = () =>{
console.log('Precionando un boton')

}
