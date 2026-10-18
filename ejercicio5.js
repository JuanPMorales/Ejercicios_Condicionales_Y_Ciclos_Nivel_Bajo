import inquirer from 'inquirer';

// Ejercicio 5: Adivina el numero


// let numeroSecreto = 11
let numeroSecreto = Math.floor(Math.random() * 21)
let intentos = 5

console.log("¡Bienvenido al juego de adivinar el número secreto!")
console.log("Tienes 5 intentos para adivinar el número secreto (entre 1 y 20).")

while (intentos > 0){
    const respuesta = await inquirer.prompt([
        {
            type: "number",
            name:"numeroUsuario",
            message: "Adivina el numero secreto (entre 1 y 20): "
        }
    ])

    intentos--
    console.log(`Intentos restantes: ${intentos}`)

    let numeroUsuario = respuesta.numeroUsuario

    if (numeroUsuario === numeroSecreto) {
        console.log(`¡Ganaste en el intento ${5 - intentos}!`)
        break
    }
    
    if (numeroUsuario < numeroSecreto) {
        console.log(`El numero secreto es mayor.`)
    } else{
        console.log(`El numero secreto es menor.`)
    }
}

if (intentos === 0) {
    console.log(`Perdiste, el numero era ${numeroSecreto}.`)
}
