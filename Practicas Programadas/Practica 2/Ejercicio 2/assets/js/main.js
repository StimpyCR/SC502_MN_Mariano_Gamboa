document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#boton');
    btn.addEventListener('click', cambiarParrafo);
    console.log('carga mi pagina correctamente');
});

const cambiarParrafo = () =>{
        document.getElementById('parrafo').innerHTML = '<strong>Python es un lenguaje de programación creado por Guido van Rossum en 1991. Su diseño se centra en la legibilidad del código y la simplicidad. Es ampliamente utilizado en ciencia de datos, desarrollo web y automatización.</strong>';
}