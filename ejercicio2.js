import inquirer from 'inquirer';

// Ejercicio 2: Cobro del parqueadero

const preguntas = [
    {
        type: 'number',
        name: 'Horas',
        message: 'Ingresa el numero de horas: '
    },
    {
        type: 'select',
        name: 'esCoder', 
        message: '¿Eres coder de riwi?',
        choices: [
         {value: true, name: 'Si'},
         {value: false, name: 'No'}
        ]
    },
]

inquirer
    .prompt(preguntas)
    .then ((parqueadero) => {
        const horasParqueadas = parqueadero.Horas
        const coder = parqueadero.esCoder
        let primeraHora = 3000
        let horaAdicional = 2000
        let horaTotal = (horasParqueadas - 1) * horaAdicional + primeraHora

        if (horaTotal >= 20000 && coder == false){
            console.log(`El total a pagar es de: ${horaTotal}, estuviste un total de: ${horasParqueadas} horas.`)
        } else if (coder == true){
            horaTotal -= horaTotal * 0.15
            console.log(`Por ser coder de Riwi se te aplico un descuento del 15%.
El Total a pagar es de ${horaTotal}, estuviste un total de: ${horasParqueadas} horas.`)
        }
    })
