import {Matriz} from './matriz.js';

let root = document.documentElement;
root.style.setProperty('--larguraMatriz', 2);
root.style.setProperty('--alturaMatriz', 2);

let matrizPratica1 = document.querySelector("#praticaMatriz");

let inputsMatrizPratica1 = matrizPratica1.childNodes;
let inputsMatrizPratica2;
let jaAdicionouMatrizExercicio=false;
let jaAdicionouExercicio=false;
let resultadoExercicio;

function coletarNumerosMatriz(inputs) {
    let numsMatriz = [];
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].nodeName == "INPUT") {
            numsMatriz.push(inputs[i].value);
        }
    }
    return numsMatriz;
}


function calcularDeterminante(nums) {
    let resultados = [];
    resultados.push(nums[0] * nums[3]);
    resultados.push(nums[1] * nums[2]);
    resultados.push(resultados[0] - resultados[1]);
    return resultados;
}

function printarProcessoEResultadoUm(nums, secaoPraticaMatriz) {
    let divLinha = document.createElement("div");
    divLinha.classList.add("row");
    let h3 = document.createElement("h3");
    let texto = document.createTextNode("Então essa é a nossa matriz: ");
    h3.appendChild(texto);
    divLinha.appendChild(h3);
    let matriz = new Matriz(2, divLinha);
    matriz.definirMatriz(nums);
    matriz.desativarEditavel();
    h3 = document.createElement("h3");
    texto = document.createTextNode("Vamos multiplicar a diagonal principal:");
    h3.appendChild(texto);
    divLinha.appendChild(h3);
    let matrizDiagPrinc = new Matriz(2, divLinha);
    matrizDiagPrinc.definirMatriz(nums);
    matrizDiagPrinc.desativarEditavel();
    matrizDiagPrinc.descatarPosicao(0);
    matrizDiagPrinc.descatarPosicao(3);
    h3 = document.createElement("h3");
    texto = document.createTextNode(nums[0] + "x" + nums[3] + " = " + nums[0] * nums[3]);
    h3.appendChild(texto);
    divLinha.appendChild(h3);
    h3 = document.createElement("h3");
    texto = document.createTextNode("Agora a diagonal secundária:");
    h3.appendChild(texto);
    divLinha.appendChild(h3);
    let matrizDiagSec = new Matriz(2, divLinha);
    matrizDiagSec.definirMatriz(nums);
    matrizDiagSec.desativarEditavel();
    matrizDiagSec.descatarPosicao(1);
    matrizDiagSec.descatarPosicao(2);
    h3 = document.createElement("h3");
    texto = document.createTextNode(nums[1] + "x" + nums[2] + " = " + nums[1] * nums[2]);
    h3.appendChild(texto);
    divLinha.appendChild(h3);
    let divLinha2 = document.createElement("div");
    divLinha2.classList.add("row");
    h3 = document.createElement("h3");
    texto = document.createTextNode(`Então o determinante será: ${nums[0] * nums[3]}-${nums[1] * nums[2]} = 
    ${nums[0] * nums[3] - nums[1] * nums[2]}`);
    h3.appendChild(texto);
    divLinha2.appendChild(h3);
    secaoPraticaMatriz.innerHTML = "";
    secaoPraticaMatriz.appendChild(divLinha);
    secaoPraticaMatriz.appendChild(divLinha2);
    if(!jaAdicionouMatrizExercicio){
        printarMatrizPratica2();
        jaAdicionouMatrizExercicio = true;
    }
}

function printarMatrizPratica2() {
    jaAdicionouExercicio=false;
    let secaoExercicioMatriz = document.querySelector('#exePratica2x2');
    secaoExercicioMatriz.innerHTML='';
    let divLinha1 = document.createElement('div');
    divLinha1.classList.add('row');
    let h3 = document.createElement('h3');
    h3.append(document.createTextNode("Bacana, né?! Vamos fazer o seguinte agora, preencha a matriz abaixo com os"+
    " valores que você quiser, calcule o determinante e teste se você acertou!"));
    divLinha1.append(h3);
    secaoExercicioMatriz.appendChild(divLinha1);
    let divLinha2 = document.createElement('div');
    divLinha2.classList.add('row');
    divLinha2.setAttribute('id', 'LinhaExercicio');
    let matriz = new Matriz(2, divLinha2);
    inputsMatrizPratica2 = matriz.getArrayInputs();
    for (let i = 0; i < inputsMatrizPratica2.length; i++) {
        if (inputsMatrizPratica2[i].nodeName == "INPUT") {
            inputsMatrizPratica2[i].addEventListener("keyup", verificarEntradaDois);
            inputsMatrizPratica2[i].addEventListener("focus", function () {
                inputsMatrizPratica2[i].value = "";
            })
        }
    }
    
    secaoExercicioMatriz.appendChild(divLinha2);

}

function verificarEntradaUm() {
    let todosNumerosPresentesUm = true;
    inputsMatrizPratica1.forEach(function (x) {
        if (x.nodeName == "INPUT") {
            if (x.value == "") {
                todosNumerosPresentesUm = false;
            }
        }
    })
    if (todosNumerosPresentesUm) {
        let nums = coletarNumerosMatriz(inputsMatrizPratica1);
        let secaoPraticaMatriz = document.querySelector("#expPratica2x2");
        printarProcessoEResultadoUm(nums, secaoPraticaMatriz);
    }
}

function verificarEntradaDois(){
    let todosNumerosPresentesDois = true;
    inputsMatrizPratica2.forEach(function (x) {
        if (x.nodeName == "INPUT") {
            if (x.value == "") {
                todosNumerosPresentesDois = false;
            }
        }
    })
    if (todosNumerosPresentesDois) {
        let nums = coletarNumerosMatriz(inputsMatrizPratica2);
        resultadoExercicio = calcularDeterminante(nums)[2];
        if(!jaAdicionouExercicio){
            jaAdicionouExercicio=true;
            let h3 = document.createElement('h3');
            h3.appendChild(document.createTextNode('Digite o determinante: '));
            let secaoPraticaMatriz = document.querySelector("#LinhaExercicio");
            let inputExercicio = document.createElement('input');
            inputExercicio.classList.add('matriz-value');
            inputExercicio.classList.add('editavel');
            inputExercicio.setAttribute('type', 'number');
            inputExercicio.setAttribute('id', 'inputExercicio');
            inputExercicio.addEventListener("focus", function () {
                inputExercicio.value = "";
            });
            let botaoExercicio = document.createElement('button');
            botaoExercicio.innerHTML = 'Conferir Resposta';
            botaoExercicio.classList.add('botao');
            botaoExercicio.onclick = conferirResultado;
            secaoPraticaMatriz.appendChild(h3);
            secaoPraticaMatriz.appendChild(inputExercicio);    
            secaoPraticaMatriz.appendChild(botaoExercicio);
        }
    }

}

function conferirResultado(){
    let input = document.querySelector('#inputExercicio');
    let resposta;
    if(input!=null)
        resposta = input.value;
    console.log(resultadoExercicio, resposta);
    printarConclusao(resultadoExercicio==resposta);
}

function printarConclusao(acertou){
    let secaoConclusao = document.querySelector('#conclusaoPratica2x2');
    secaoConclusao.innerHTML='';
    if(acertou){
        let h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode("Correto, parabéns! Já estamos prontos para ir para as matrizes 3x3, bora?"));
        let a = document.createElement('a');
        a.innerHTML='Determinantes em Matrizes 3x3';
        a.setAttribute('href','3x3.html');
        a.classList.add('botaoConclusao');
        secaoConclusao.appendChild(h3);
        secaoConclusao.appendChild(a);
    }else{
        let h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode("Que pena, resultado incorreto! Confira a resolução abaixo e tente de novo:"));
        secaoConclusao.appendChild(h3);
        let section = document.createElement('section');
        secaoConclusao.appendChild(section);
        let nums = coletarNumerosMatriz(inputsMatrizPratica2);
        printarProcessoEResultadoUm(nums, section);
        let botaoTentarNovamente = document.createElement('button');
        botaoTentarNovamente.innerHTML = 'Tentar Novamente';
        botaoTentarNovamente.classList.add('botao');
        botaoTentarNovamente.onclick = tentarNovamente;
        secaoConclusao.appendChild(botaoTentarNovamente);
    }
}

function tentarNovamente(){
    let secaoConclusao = document.querySelector('#conclusaoPratica2x2');
    secaoConclusao.innerHTML='';
    printarMatrizPratica2();
    // inputsMatrizPratica2.forEach( x => x.value='');
    // let inputExercicio = document.querySelector('#inputExercicio');
    // inputExercicio.value='';
}

for (let i = 0; i < inputsMatrizPratica1.length; i++) {
    if (inputsMatrizPratica1[i].nodeName == "INPUT") {
        inputsMatrizPratica1[i].addEventListener("keyup", verificarEntradaUm);
        inputsMatrizPratica1[i].addEventListener("focus", function () {
            inputsMatrizPratica1[i].value = "";
        })
    }
}

