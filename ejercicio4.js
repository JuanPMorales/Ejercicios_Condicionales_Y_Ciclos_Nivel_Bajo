import inquirer from 'inquirer';

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
