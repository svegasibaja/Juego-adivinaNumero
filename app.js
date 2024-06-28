
let numeroSecreto = 0;
let intentos = 0;
let maximoIntentos = 3;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function VerificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('ValorUsuario').value);
    
    if (numeroUsuario == numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número, felicidades! Lo hiciste en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            if (numeroUsuario < numeroSecreto) {
                asignarTextoElemento('p', 'El número secreto es mayor')
            }
        }
        intentos++;  
        limpiarCaja();
    }

}

function condicionesInicales() {
    asignarTextoElemento('h1', '¡Bienvenido! Adivina el número👌');
    asignarTextoElemento('p', 'Escribe un numero del 1 al 10');
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
}

function limpiarCaja() {
    document.querySelector('#ValorUsuario').value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

function ReiniciarIntento() {
    limpiarCaja();
    condicionesInicales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesInicales();





