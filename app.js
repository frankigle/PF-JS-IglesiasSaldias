const p50 = 120
const p100 = 150
carrito = []
const scooters = [
    { id: '1', modelo: 'black', marca: 'Sym', cc: 50, precio: p50, img: './Pictures/symBlack.jpg', info: ['Surf Rack disponible', 'Baulera disponible', 'Casco incluido'] },
    { id: '2', modelo: 'lead', marca: 'Honda', cc: 50, precio: p50, img: './Pictures/honda.jpg', info: ['Surf Rack disponible', 'Baulera disponible', 'Casco incluido'] },
    { id: '3', modelo: 'Sicilian Lemon', marca: 'some', cc: 50, precio: p50, img: './Pictures/sicilianLemon.jpg', info: ['Surf Rack disponible', 'Baulera disponible', 'Casco incluido'] },
    { id: '4', modelo: 'Blanca', marca: 'Aprilia', cc: 100, precio: p100, img: './Pictures/apriliaWhite.jpg', info: ['Surf Rack disponible', 'Baulera disponible', 'Casco y Porta celular disponible'] },
    { id: '5', modelo: 'luxury', marca: 'Vespa', cc: 100, precio: p100, img: './Pictures/57__30300.1570097252.jpg', info: ['Surf Rack disponible', 'Baulera disponible', 'Casco y Porta celular disponible'] },
    { id: '6', modelo: 'biz', marca: 'Honda', cc: 100, precio: p100, img: './Pictures/images.jpeg', info: ['Surf Rack disponible', 'Baulera No Disponible', 'Casco y Porta celular disponible'] },
    { id: '7', modelo: 'Vespa Europa', marca: 'Vespa', cc: 100, precio: p100, img: './Pictures/vespa.jpeg', info: ['Surf Rack disponible', 'Baulera No Disponible', 'Casco y Porta celular disponible'] }
]
const scootersJson = JSON.stringify(scooters)
localStorage.setItem('scooters', scootersJson)

const main = document.querySelector('main')
const header = document.createElement('header')
header.innerHTML = `
<h1>Bienvenido a For you Scooter</h1>
<p>Aqui podras ver nuestros scooters disponibles</p>
<div class='contBoton'>

    <div class='dirBoton 50'>
        <h3>Scooters 50cc</h3>
        <img src="./Pictures/57__30300.1570097252.jpg" alt="">
        <ul class="lista">
            <li>sarasa</li>
            <li>Es super Economica</li>
            <li>Y mas segura</li>
        </ul>
        
        <button class='chica btn btn-success'>50CC</button>
        </div>
        <div class='dirBoton 100'>
        <h3>Scooters 100cc</h3>
        <img src="./Pictures/images.jpeg" alt="">
        <ul class="lista">
            <li>Requiere Licencia de Motos</li>
            <li>Es mas Veloz</li>
            <li>Puedes recorrer grandes distancias</li>
        </ul>
        <button class='grande btn btn-success'>100CC</button>
    </div >
</div>`
header.className = 'header'
main.appendChild(header)
const boton50 = document.querySelector('.chica')
boton50.addEventListener('click', () => {
    const array = traerVarLS()
    const fil50 = filtrar50(array)
    crearTarjeta(fil50)
})
function traerVarLS() {
    const scootersLS = localStorage.getItem('scooters')
    const scootersParse = JSON.parse(scootersLS)
    return scootersParse
}
const boton100 = document.querySelector('.grande')
boton100.addEventListener('click', () => {
    const array = traerVarLS()
    const fil100 = filtrar100(array)
    crearTarjeta(fil100)
})
function filtrar50(sec) {
    const secFiltrada = sec.filter((x) => x.cc === 50)
    return secFiltrada
}
function filtrar100(sec) {
    const secFiltrada = sec.filter((x) => x.cc === 100)
    return secFiltrada
}

const gridFotos = document.querySelector('.gridFotos')
function crearTarjeta(parametro) {

    gridFotos.innerHTML = ''
    for (let x of parametro) {
        const tituloTarjeta = document.createElement('div')

        tituloTarjeta.innerHTML = `
            <h2>${x.modelo}</h2>
            <img id='imgTarj' src="${x.img}" alt="${x.modelo}">
            <ul class="lista">
                <li>${x.info[0]}</li>
                <li>${x.info[1]}</li>
                <li>${x.info[2]}</li>
            </ul>
            <p>$${x.precio}</p>
            <button id='${x.id}' class='boton btn btn-success'>Alquilar</button>`;
        tituloTarjeta.className = 'tarjeta'
        gridFotos.appendChild(tituloTarjeta)
        main.appendChild(gridFotos)
    }
    const botn = document.querySelectorAll('.boton')
    for (var i = 0; i < botn.length; i++) {
        botn[i].addEventListener('click', () => {
            const opciones = document.createElement('div')
            opciones.classList.add('agregados')
            gridFotos.innerHTML = ''

            opciones.innerHTML = `
            <h3>Seleccione las Siguientes Opciones</h3>
            <p>Surf Rack</p>
            <button class="surfRack">agregar</button>
            <p>Baulera</p>
            <button class="baulera">agregar</button>
            <p>Phone Holder</p>
            <button class="phoneHolder">agregar</button>
            `
            gridFotos.appendChild(opciones)
        });
    }
}
/* ingresarUsuario()
function ingresarUsuario() {
    const form = document.createElement('div')
    form.classList.add('formu')
    form.innerHTML = `
    <h3>Desea dejar su Comentario?</h3>
    <div>
        <label for="Name">Ingreser su Nombre y apellido<label>
        <div>
            <input type="Name">
        </div>
    </div>
    <div>
        <label for="Email">Ingreser su Email<label>
        <input type="Email">
    </div>
    <textarea name="opinion" id="" cols="30" rows="10"></textarea>
    <button class='valForm'>Enviar</button>
    `
    main.appendChild(form)
} */

