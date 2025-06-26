document.addEventListener('DOMContentLoaded', function () {
    console.log('Cargo mi pagina');
    cargarTarjetas();
    const btn = document.querySelector('#btn_crear_tarjeta');
    btn.addEventListener('click', crearTarjeta);
});

//Objetos literales (son como los objetos de java)
// metodo 1 para designar un objeto
let tarjetas = [
    {
        titulo: 'Background gamer calidad pa',
        descripcion: 'Pa el mejor background gamer que existe.',
        boton: 'Click aqui maetro',
        imagen: 'https://shorturl.at/ET5HO'
    },
    {
        titulo: 'Tarjeta2',
        descripcion: 'background 2 pa el segundo mejor',
        boton: 'Click aqui maetro',
        imagen: 'https://shorturl.at/542MM'
    },
    {
        titulo: 'Tarjeta3',
        descripcion: 'background 3 pa el tercero mejor',
        boton: 'Click aqui maetro',
        imagen: 'https://shorturl.at/Nk0BY'
    }


];

// crear trajetas dinamicamente
//metodo 1
// const cargarTarjetas = () => {
//     console.log('Llamando a mi funcion cargarTarjetas');
//     const tarjetas_section = document.querySelector('#tarjetas_section');
//     console.log(tarjetas_section);

//     tarjetas_section.innerHTML = '';

//     let content = '';
    

//     tarjetas.forEach(tarjeta => {
//         console.log('creacion de las tarjetas dinamicamentes');
//         console.log(tarjeta);

//         const{imagen,titulo,descripcion,boton}= tarjeta;

//         content += `<div class="col-4">
//                         <div class="card" style="width: 18rem;">
//                             <img src="${imagen}" class="card-img-top" alt="...">
//                             <div class="card-body">
//                                 <h5 class="card-title">${titulo}</h5>
//                                 <p class="card-text">${descripcion}</p>
//                                 <a href="pagina2.html" class="btn btn-primary">${boton}</a>
//                             </div>
//                         </div>
//                     </div>`
//     });
//     //referencia
//     // tarjetas_section.append(content);
//     //creacion de las tarjetas y que las reconozca como html
//     tarjetas_section.innerHTML=content;

// }

//metodo 2
const cargarTarjetas = () => {
    console.log('Llamando a mi funcion cargarTarjetas');
    //guardar las tarjetas dentro del local storage de la pagina

    const localStorageTarjetas = localStorage.getItem('tarjetas')

    console.log('tarjetas obtenidas del localStorage', localStorageTarjetas);
    if (localStorageTarjetas == null){
        localStorage.setItem('tarjetas', JSON.stringify(tarjetas));

    } else{
        const getTarjetas = localStorage.getItem('tarjetas');
        tarjetas = JSON.parse(getTarjetas);
    }
    //fin del guardar tarjetas

    const tarjetas_section = document.querySelector('#tarjetas_section');
    console.log(tarjetas_section);

    tarjetas_section.innerHTML = '';

    

    tarjetas.forEach(tarjeta => {
        console.log('creacion de las tarjetas dinamicamentes');
        console.log(tarjeta);

        const{imagen,titulo,descripcion,boton}= tarjeta;

        const col= document.createElement('div')

        col.classList.add('col-4');
        col.classList.add('mb-3');

        col.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="${imagen}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${titulo}</h5>
                                <p class="card-text">${descripcion}</p>
                                <a href="pagina2.html" class="btn btn-primary">${boton}</a>
                            </div>
                        </div>`

        
                    tarjetas_section.append(col)
    });
    //referencia
    // tarjetas_section.append(content);
    //creacion de las tarjetas y que las reconozca como html si usamos el primer metodo
    // tarjetas_section.innerHTML=content;




}

const crearTarjeta = () => {
    console.log('Mi funcion crear tarjeta');

    const form = document.querySelector('#formulario');

    const formData = new FormData(form);
    const entries = Object.fromEntries(formData.entries());

    //se crea los atributos que va a tener mi objeto
    const {titulo,descripcion,boton,imagen} = entries;

    //convertir un objeto a json
    const jsonEntries = JSON.stringify(entries)
    //convertir un json a objeto
    const objetEntries = JSON.parse(jsonEntries);

    //se le meten los datos que hicimos en la constante con {} aunque se puede hacer de la forma que vimos mas arria
    const nuevaTarjeta = {titulo,descripcion,boton,imagen};

    console.log(nuevaTarjeta);

    tarjetas.push(nuevaTarjeta);
    //importante para que se guarden las tarjetas dentro de la pagina
    localStorage.setItem('tarjetas', JSON.stringify(tarjetas));
    form.reset();
    cargarTarjetas();

    
}






