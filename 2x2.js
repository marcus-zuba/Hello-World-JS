import {Matriz} from '/matriz.js';

let root = document.documentElement;
root.style.setProperty('--larguraMatriz', 2);
root.style.setProperty('--alturaMatriz', 2);

let matrizPratica1 = document.querySelector("#praticaMatriz");

let inputsMatrizPratica1 = matrizPratica1.childNodes;

function coletarNumerosMatriz(inputs) {
    let numsMatriz = [];
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].nodeName=="INPUT"){
            numsMatriz.push(inputs[i].value);
        }
    }
    return numsMatriz;
}


function calcularDeterminante(nums){
    let resultados = [];
    resultados.push(nums[0]*nums[3]);
    resultados.push(nums[1]*nums[2]);
    resultados.push(resultados[0]-resultados[1]);
    return resultados;
}

function printarProcessoEResultado(){



}

function verificarEntrada() {
    let todosNumerosPresentes = true;
    inputsMatrizPratica1.forEach(function (x) {
        if(x.nodeName=="INPUT"){
            if(x.value == ""){
                todosNumerosPresentes = false;
            }
        }
    })
    if(todosNumerosPresentes){
        let nums = coletarNumerosMatriz(inputsMatrizPratica1);
        console.log(calcularDeterminante(nums));
    }
}

for(let i=0;i<inputsMatrizPratica1.length;i++){
    if(inputsMatrizPratica1[i].nodeName=="INPUT"){
        inputsMatrizPratica1[i].addEventListener("keyup", verificarEntrada);
        inputsMatrizPratica1[i].addEventListener("focus", function () {
            inputsMatrizPratica1[i].value = "";
        })
    }
}

