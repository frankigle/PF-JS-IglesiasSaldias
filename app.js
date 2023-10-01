const usuario = 'Carlitos'
const contrasena = '1234'
let saldo = 100
//Validacion usuario
function usuarioCheck() {
    for (i = 3; i >= 0; i--) {
        let usuarioIngresado = prompt('ingrese Nombre de Usuario')
        if (i == 0) {
            alert('Usted a superado los intentos permitidos')
            break

        } else if (usuario == usuarioIngresado) {

            contrasenacheck()
            i = 0
            break
        } else {
            let e = i - 1
            alert(`El usuario ingresado es Incorrecto, le quedan ${e} intentos `)
        }

    }
}
//Validacion contrasena
function contrasenacheck() {
    for (i = 3; i >= 0; i--) {
        let contrasenaIngresada = prompt('ingrese Contrasena')
        if (i == 0) {
            alert('Usted a superado los intentos permitidos')
            break

        } else if (contrasena == contrasenaIngresada) {
            alert(`Bienvenido ${usuario}`)
            i = 0
            acciones()
            break
        } else {
            let e = i - 1
            alert(`La contrasena ingresado es Incorrecta, le quedan ${e} intentos `)
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
        alert(`Muchas Gracias ${nombre} por usar nuestro servicio, hasta pronto!`)
    }

}

usuarioCheck()


