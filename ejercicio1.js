// Condicionales y Ciclos en JavaScript Nivel Bajo

// Ejercicio 1: CLasificador de temperatura

import inquirer from 'inquirer';

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

