document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#boton');
    cargarEstudiante();
    btn.addEventListener('click', crearEstudiante);
    console.log('carga mi pagina correctamente');
});


let estudiantes = [
    {
        nombre: 'Maria',
        apellido: 'Mora Perez',
        nota: 90,
    },
    {
        nombre: 'Pedro',
        apellido: ' Sibaja Lopez',
        nota: 60,
    },
    {
        nombre: 'Marco',
        apellido: 'Rojas Castro',
        nota:78,
    }

];

const cargarEstudiante = () => {
    console.log('Llamando a mi funcion cargarEstudiantes');
    //guardar las tarjetas dentro del local storage de la pagina

    const localStorageEstudiante = localStorage.getItem('estudiantes')

    console.log('Estudiantes obtenidos del localStorage', localStorageEstudiante);
    if (localStorageEstudiante == null) {
        localStorage.setItem('estudiantes', JSON.stringify(estudiantes));

    } else {
        const getEstudiantes = localStorage.getItem('estudiantes');
        estudiantes = JSON.parse(getEstudiantes);
    }
    //fin del guardar tarjetas

    const listaEstudiantes = document.querySelector('#listaEstudiantes');
    console.log(listaEstudiantes);

    listaEstudiantes.innerHTML = '';



    estudiantes.forEach(estudiante => {

        if (nombre == null) { alert('no se puede agregar un estudiante sin nombre') }
        else if (apellido == null) { alert('no se puede agregar un estudiante sin apellido') }
        else if (nota == null) { alert('no se puede agregar un estudiante sin nota') }
        else {
            console.log('creacion de las estudiantes dinamicamentes');
            console.log(estudiante);

            const { nombre, apellido, nota } = estudiante;

            const col = document.createElement('table');

            
            col.classList.add('m-2');

            col.innerHTML = `
                                <tbody>
                                    <tr>
                                    <td>${nombre}</td>
                                    <td>${apellido}</td>
                                    <td>${nota}</td>
                                    </tr>
                                </tbody>
                                `;

            if (nota >= 80) {
                col.innerHTML = `<tbody>
                                    <tr>
                                    <td>${nombre}</td>
                                    <td>${apellido}</td>
                                    <td class='text-success'>${nota}</td>
                                    </tr>
                                </tbody>`
            }
            if (nota <= 65) {
                col.innerHTML = `<tbody>
                                    <tr>
                                    <td>${nombre}</td>
                                    <td>${apellido}</td>
                                    <td class='text-danger'>${nota}</td>
                                    </tr>
                                </tbody>`
            }


            listaEstudiantes.append(col)
        }
    }
    
    );
    const notas = estudiantes.map(est => parseFloat(est.nota));

    const notaAlta = Math.max(...notas);
    const notaBaja = Math.min(...notas);


    document.getElementById('notas').innerHTML = `
        <strong>Nota más baja:</strong> ${notaBaja} <br>
        <strong>Nota más alta:</strong> ${notaAlta} <br>
    `;
    
}


    


const crearEstudiante = () => {
    console.log('Mi funcion crear tarjeta');

    const form = document.querySelector('#formEstudiante');

    const formData = new FormData(form);
    const entries = Object.fromEntries(formData.entries());

    //se crea los atributos que va a tener mi objeto
    const { nombre, apellido, nota } = entries;

    //convertir un objeto a json
    const jsonEntries = JSON.stringify(entries)
    //convertir un json a objeto
    const objetEntries = JSON.parse(jsonEntries);

    const nuevoEstudiante = { nombre, apellido, nota };

    console.log(nuevoEstudiante);

    estudiantes.push(nuevoEstudiante);
    //importante para que se guarden los estudiantes dentro de la pagina
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
    form.reset();
    cargarEstudiante();


}

