const p50 = 120
const p100 = 150
carrito = []
const scooters = [
    { id: '1', modelo: 'black', marca: 'Sym', cc: 50, precio: p50, img: './Pictures/symBlack.jpg' },
    { id: '2', modelo: 'lead', marca: 'Honda', cc: 50, precio: p50, img: './Pictures/honda.jpg' },
    { id: '3', modelo: 'Sicilian Lemon', marca: 'some', cc: 50, precio: p50, img: './Pictures/sicilianLemon.jpg' },
    { id: '4', modelo: 'Blanca', marca: 'Aprilia', cc: 100, precio: p100, img: './Pictures/apriliaWhite.jpg' },
    { id: '5', modelo: 'luxury', marca: 'Vespa', cc: 100, precio: p100, img: './Pictures/' },
    { id: '6', modelo: 'biz', marca: 'Honda', cc: 100, precio: p100, img: './Pictures/' },
    { id: '7', modelo: 'cracatoa', marca: 'Yamaha', cc: 100, precio: p100, img: './Pictures/' }
]
const contenedorProductos = document.querySelector('.opciones')
botones = ['Scooter 50', 'Scooter 100', 'Conoce Noosa']

function renderizarBotones() {
    const contenedorBotones = document.querySelector('opciones')
    botones.forEach((categoria) => {
        const button = document.createElement('button')
        button.classList.add('btn')
        button.textContent = categoria
        button.addEventListener('click', () => {
            const productosFiltrados = filtrar50(categoria)
            renderizarProductos(productosFiltrados)
        })
        contenedorBotones.appendChild(button)
    });
}

function renderizarProductos(productos) {
    contenedorProductos.innerHTML = '';
    scooters.forEach((x) => {
        const div = document.createElement('div')
        div.classList.add('scooter')
        div.innerHTML = `
        <img src='${x.img}' alt='${x.modelo}'></img>
        <div class='productoInfo'>
            <h3>${x.modelo}</h3>
            <p>${x.marca}</p>
            <p>${x.precio}</p>
            <button id ='btn>agregar</button>
        
        </div>`
        contenedorProductos.appendChild(div)
    })
}
function filtrar50(sec) {
    const secFiltrada = scooters.filter((x) => x.cc === 50)
}
function filtrar100(sec) {
    const secFiltrada = scooters.filter((x) => x.cc === 100)
}
renderizarBotones()