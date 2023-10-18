function Cliente(nombre, contrasena) {
    this.nombre = nombre
    this.contrasena = contrasena
}

const cliente1 = new Cliente('Carlitos', 1234)
console.log(cliente1)

class Customer {
    constructor(nombre, contrasena) {
        this.nombre = nombre
        this.contrasena = contrasena
    }
}

const customer1 = new Customer('filipe', 12351)
const customer2 = new Customer('el pela', 1111)
console.log(customer1)
console.log(customer2)