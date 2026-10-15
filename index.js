// Condicionales y Ciclos en JavaScript Nivel Bajo

// Ejercicio 1: CLasificador de temperatura

import inquirer from 'inquirer';
/*
const pregunta = [
    {
    type: 'number',
    name: 'temperatura',
    message: 'Dame la temperaura del lugar'
    }
]


inquirer
    .prompt(pregunta)
    .then ((respuestas) => {
        const temperatura = respuestas.temperatura;
        let consejos


        if (temperatura < 10){
            consejos = "Hace frío, lleva chaqueta"
        } else if(temperatura < 24 ){
            consejos = "Clima templado"
        } else if (temperatura >= 25){
            consejos = "Hace calor, hidrátate"
        } else {
            consejos = "El valor ingresado no es un numero"
        }

        console.log(`La temperatura es de ${temperatura}°C, ${consejos}`);
    })

    */

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

/*

// Ejercicio 1: CLasificador de temperatura
let temperatura = 18
let consejos = "" 

if (temperatura < 10){
    consejos = "Hace frío, lleva chaqueta"
} else if(temperatura < 24 ){
    consejos = "Clima templado"
} else if (temperatura > 25){
    consejos = "Hace calor, hidrátate"
} else {
    consejos = "El valor ingresado no es un numero"
}

console.log(consejos)
*/
