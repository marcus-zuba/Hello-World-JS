function criarInput() {
    let inputMatriz = document.createElement('input');
    inputMatriz.classList.add('matriz-value');
    inputMatriz.classList.add('editavel');
    inputMatriz.setAttribute('type', 'number');
    inputMatriz.setAttribute('placeholder', '0');
    inputMatriz.setAttribute('value', '1');
    return inputMatriz;
}

export default class Matriz {

    constructor(dimensao, elemento) {
        let divMatriz  = document.createElement('div');
        divMatriz.classList.add('matriz');
        for(let i=0;i<(dimensao*dimensao);i++){
            let inputMatriz = criarInput();
            divMatriz.appendChild(inputMatriz);
        }
        elemento.appendChild('divMatriz');
    }


}