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


// Ejercicio 3: Cuenta Regresiva de lanzamiento

const cuenta = [
    {
        type: 'number',
        name: 'numeroComiezo',
        message: 'Ingresa el numero desde el que quieres comenzar la cuenta: ',
    }

]

inquirer 
    .prompt(cuenta)
    .then((regresiva) => {
        const cuentaRegresiva = regresiva.numeroComiezo

        if (cuentaRegresiva <= 0){
            console.log(`Número no válido`)
        } else {
            for (let i = cuentaRegresiva; i > 0; i--){
            console.log(i)
            }
            console.log("¡Despegue!")
        }        
    })




// Ejercicio 4: RiwiCoder

const FizzBuzz = [
    {
        type: 'number',
        name: 'numero',
        message: 'Ingresa el numero: ',
    }
] 

inquirer
 .prompt(FizzBuzz)
 .then((numeroRiwiCoder) =>{
    const numeroIngresado = numeroRiwiCoder.numero
        for (let i = 1; i <= numeroIngresado; i++){
            if (i % 3 ===0 && i % 5 === 0){
                console.log("RiwiCoder")
            } else if (i % 3 === 0 ){
                console.log("Riwi")
            } else if (i % 5 === 0){
                console.log("Coder")
            } else {
                console.log(i)
            }
        }
    })

 */

// Ejercicio 5: Adivina el numero


console.log(" ========== Adivina el número que la maquina piensa del 1 al 20 ====================")



let numeroAleatorio = 12
// for (let ramdom = 1; ramdom <= 1; ramdom++){
//     numeroAleatorio = Math.floor(Math.random() * 20)
// }
let maximoIntentos = 5
for(let intentos = 1; intentos <= maximoIntentos; intentos++){  

    const pregunta = await inquirer.prompt([
        {
            type: 'input',
            name: 'numeroIngresado',
            message: 'Ingresa el número del 1 al 20: '
        }
    ])

    const {numeroIngresado} = pregunta 

    

}