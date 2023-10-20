const clientes = []
const contador = 0
let usuarioIngresado = ''
let saldo = 0

//Crear Nuevo Usuario
function crearUsuario() {
    class Customer {
        constructor(nombre, contrasena, saldo) {
            this.nombre = nombre
            this.contrasena = contrasena
            this.saldo = 0
        }
    }
    let usuario = prompt('ingrese su nuevo Nombre de Usuario')
    let contrasena = prompt('Cree una Contrasena')
    const customer = new Customer(usuario, contrasena, saldo)
    clientes.push(customer)


}
//Validacion usuario
function usuarioCheck() {
    for (i = 3; i >= 0; i--) {
        usuarioIngresado = prompt('ingrese Nombre de Usuario')
        /*function buscarUsuario(clientes) {
        return clientes.nombre
        } */
        const valUsuario = clientes.findIndex((p) => p.nombre == usuarioIngresado)

        if (i == 0) {
            alert('Usted a superado los intentos permitidos')
            break

        } else {
            if (valUsuario == -1) {
                alert('El usuario ingresado no existe, pruebe de nuevo')
                break
            } else {
                for (e = 3; e >= 0; e--) {
                    const valContrasena = clientes[valUsuario].contrasena
                    contrasenaIngresada = prompt('ingrese su Contrasena')
                    if (valContrasena == contrasenaIngresada) {
                        alert(`Bienvenido senor ${usuarioIngresado}`)
                        break

                    } else {
                        alert('contrasena incorrecta')

                    }
                }
                break

            }


        }
    }
}





//opciones de la app una vez validado el usuario.
function acciones() {
    let opciones = parseInt(prompt('Buen dia, que accion desea realizar hoy? 1-Depositar dinero, 2-Extraer dinero, 3-Consultar Saldo'))
    switch (opciones) {
        case 1:
            deposito()
            break;
        case 2:
            extraccion()
            break;
        case 3:
            conSaldo()
            break;
        default:
            alert('Opcion incorrecta')
            acciones()
            break;
    }
}
//opcion deposito
function deposito() {
    let dinero = parseInt(prompt('Caunto dinero quiere Ingresar?'))
    saldo = saldo + dinero
    conSaldo()
    deNuevo()
}
//opcion extraccion
function extraccion() {
    let dinero = parseInt(prompt('Ingrese el monto que desea Extraer'))
    if (saldo < dinero) {
        alert('Usted no tiene suficiente dinero para extraer, intente con otro monto.')
        extraccion()
    }
    saldo -= dinero
    conSaldo()
    deNuevo()

}
//opcion consulta de saldo 
function conSaldo() {
    alert(`Su saldo actual es de: $ ${saldo}`)
    deNuevo()
}
function deNuevo() {
    let again = prompt('desea realizar otra operacion? (si/no)')
    if (again == 'si') {
        acciones()
    } else if (again == 'no') {
        alert(`Muchas Gracias ${usuarioIngresado} por usar nuestro servicio, hasta pronto!`)
        inicio()

    }

}

function inicio() {
    const estado = prompt('Usted ya tiene un usuario creado? (si/no)')
    if (estado == 'si') {
        usuarioCheck()
        acciones()
    } else {
        crearUsuario()
        inicio()
        acciones()
    }
    for (const customer of clientes) {
        console.log('nombre: ' + customer.nombre)
    }
}
inicio()


