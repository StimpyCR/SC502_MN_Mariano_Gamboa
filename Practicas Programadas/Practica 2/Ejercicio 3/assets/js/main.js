document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#boton');
    btn.addEventListener('click', revisarEdad);
    console.log('carga mi pagina correctamente');
});

const revisarEdad = () => {
    const edad = document.getElementById('Edad').value;
    console.log('carga mi funcion revisarEdad correctamente');
    console.log('#boton')


    if (edad <= 18) {
        console.log('Eres menor de edad');
        alert('Eres menor de edad');
    }
    else{
        console.log('eres mayor de edad');
        alert('eres mayor de edad')
    }
}