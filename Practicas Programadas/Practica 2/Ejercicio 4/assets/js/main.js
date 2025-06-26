document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#boton');
    btn.addEventListener('click', revisarEdad);
    console.log('carga mi pagina correctamente');
});

const form = document.getElementById('formEstudiante');
const listaDiv = document.getElementById('listaEstudiantes');
const promedioDiv = document.getElementById('promedio');

const estudiantes = [];

const actualizarLista = () => {
    console.log('#boton');
  listaDiv.innerHTML = '';
  let sumaNotas = 0;

  estudiantes.forEach(estudiante => {
    const estudianteDiv = document.createElement('div');
    estudianteDiv.classList.add('list-group-item');
    estudianteDiv.textContent = `${estudiante.nombre} ${estudiante.apellido} - Nota: ${estudiante.nota}`;
    listaDiv.appendChild(estudianteDiv);

    sumaNotas += estudiante.nota;
  });

  const promedio = estudiantes.length ? (sumaNotas / estudiantes.length) : 0;
  promedioDiv.textContent = `Promedio de notas: ${promedio.toFixed(2)}`;
};

const agregarEstudiante = (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const nota = Number(document.getElementById('nota').value);

  if (nombre && apellido && nota >= 0 && nota <= 100) {
    estudiantes.push({ nombre, apellido, nota });
    actualizarLista();

    form.reset();
    document.getElementById('nombre').focus();
  } else {
    alert('Por favor ingresa datos válidos. Nota entre 0 y 100.');
  }
};

form.addEventListener('submit', agregarEstudiante);
