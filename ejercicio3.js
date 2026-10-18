import inquirer from 'inquirer';

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
