function criarInput() {
    let inputMatriz = document.createElement('input');
    inputMatriz.classList.add('matriz-value');
    inputMatriz.classList.add('editavel');
    inputMatriz.setAttribute('type', 'number');
    inputMatriz.setAttribute('placeholder', '0');
    return inputMatriz;
}

function matrizToArray(matriz) {
    let array = [];
    for(let i=0; i<matriz.length;i++){
        for(let j=0;j<matriz[i].length;j++){
            array.push(matriz[i][j]);
        }
    }
    return array;
}

export class Matriz {

    divMatriz;
    // arrayInputs = [];
    matriz;

    constructor(dimensao, elemento) {
        this.divMatriz  = document.createElement('div');
        this.divMatriz.classList.add('matriz');
        for(let i=0;i<(dimensao*dimensao);i++){
            let inputMatriz = criarInput();
            // this.arrayInputs.push(inputMatriz);
            this.divMatriz.appendChild(inputMatriz);
        }
        elemento.appendChild(this.divMatriz);
    }

    definirMatriz(matriz){
        this.matriz = matriz;
        let array = matrizToArray(this.matriz);
        let i=0;
        let arrayInputs = this.divMatriz.childNodes;
        for(let input=0;input<arrayInputs.length;input++){
            // alert(input.getAttribute('placeholder'));
            arrayInputs[input].value = array[i];
            i++;
        }
    }

    desativarEditavel(){
        let arrayInputs = this.divMatriz.childNodes;
        for(let i=0;i<arrayInputs.length;i++){
            arrayInputs[i].classList.remove('editavel');
            arrayInputs[i].disabled = true;
        }
    }


}