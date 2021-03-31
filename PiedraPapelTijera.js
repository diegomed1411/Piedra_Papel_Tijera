/* piedra = 1 / papel = 2 / tijera = 3 */

var OpcionUsuario = 1;
//se puede cambiar la opción del usuario asignando un número entre 1 y 3

//Calculo de un numero random entre 1 y 3)
var NumeroRandom = Math.random()*(4-1) + 1;
//definiendo la opción de la maquina, tomando la parte entera de nuestro numero random
var OpcionMaquina = Math.floor(NumeroRandom);

//asignando strings correspondientes a cada numero tomando como referencia la tabla inicial piedra = 1 / papel = 2 / tijera = 3

function Opciones(a){
    if (a === 1)
    {var Opcion = "Piedra";
    } else if (a===2) {
        var Opcion = "Papel";
    } else {
        var Opcion = "Tijera";
    }
    return Opcion;
}

//declaración de la función de juego, estableciendo comparaciones y arrojando un resultado escrito de las opciones tomadas por el usuario y maquina
function Juego (OpcionUsuario){
if (OpcionUsuario === OpcionMaquina)
{
    console.log("Es un empate, ambos eligieron "+Opciones(OpcionUsuario));
} else if (OpcionUsuario === 1 && OpcionMaquina === 2){
    console.log("Ganó la maquina, tu elegiste "+Opciones(OpcionUsuario)+" y la Máquina "+Opciones(OpcionMaquina));
} else if (OpcionUsuario ===1 && OpcionMaquina === 3){
    console.log("Felicidades! Ganaste!, tu elegiste "+Opciones(OpcionUsuario)+" y la Máquina "+Opciones(OpcionMaquina));
} else if (OpcionUsuario ===2 && OpcionMaquina === 1){
    console.log("Felicidades! Ganaste!, tu elegiste "+Opciones(OpcionUsuario)+" y la Máquina "+Opciones(OpcionMaquina));
} else if (OpcionUsuario ===2 && OpcionMaquina === 3){
    console.log("Ganó la maquina, tu elegiste "+Opciones(OpcionUsuario)+" y la Máquina "+Opciones(OpcionMaquina));
} else if (OpcionUsuario ===3 && OpcionMaquina ===1){
    console.log("Ganó la maquina, tu elegiste "+Opciones(OpcionUsuario)+" y la Máquina "+Opciones(OpcionMaquina));
} else if (OpcionUsuario ===3 && OpcionMaquina ===2){
    console.log("Felicidades! Ganaste!, tu elegiste "+Opciones(OpcionUsuario)+" y la Máquina "+Opciones(OpcionMaquina));
} else {console.log("debe de elegir un numero entre 1 y 3, por favor digite Juego(1), Juego (2) o Juego (3)");}
}

console.log("digite Juego(número) para elegir su opción piedra = Juego(1) / papel = Juego(2) / tijera = Juego(3)");