document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#boton');
    btn.addEventListener('click', hacerCalculos);
    console.log('carga mi pagina correctamente');
});

const hacerCalculos = () => {
    console.log('#boton');
    const salarioInput = document.querySelector('#salarioBruto');
    const salario = parseFloat(salarioInput.value);


    const cargasSociales = salario * 0.1116;

    let impuesto = 0;

    if (salario <= 922000) {
        impuesto = 0;
    } else if (salario <= 1352000) {
        impuesto = (salario - 922000) * 0.10;
    } else if (salario <= 2373000) {
        impuesto = (1352000 - 922000) * 0.10 +
                   (salario - 1352000) * 0.15;
    } else if (salario <= 4745000) {
        impuesto = (1352000 - 922000) * 0.10 +
                   (2373000 - 1352000) * 0.15 +
                   (salario - 2373000) * 0.20;
    } else {
        impuesto = (1352000 - 922000) * 0.10 +
                   (2373000 - 1352000) * 0.15 +
                   (4745000 - 2373000) * 0.20 +
                   (salario - 4745000) * 0.25;
    }

    //total osea salario neto
    const salarioNeto = salario - cargasSociales - impuesto;

        //mostrar todo
    document.querySelector('#CS').textContent = cargasSociales.toFixed(2);
    document.querySelector('#IR').textContent = impuesto.toFixed(2);
    document.querySelector('#Total').textContent = salarioNeto.toFixed(2);
};
