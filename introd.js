function mudarConteudoMotivacao(indice) {
    let $div = $('#conteudo-motivacao');
    let h2 = document.createElement("H2");
    let p = document.createElement("P");
    let tp;
    if (indice === 0) {
        tp = document.createTextNode("Que as matrizes são muito utilizadas em diversas áreas a maioria das pessoas sabe. " +
            "O que não é óbvio pra todo mundo é que algumas operações com matrizes só podem ser realizadas com determinantes! " +
            "Dois exemplos disso são a Matriz Inversa e o Cálculo de Autovalores e Autovetores, " +
            "que possuem muitas aplicações na engenharia.");
    } else if (indice === 1) {
        tp = document.createTextNode("Os sistemas lineares são ferramentas matemáticas extremamente importantes em " +
            "diversas áreas. Seja em equações diferenciais de engenharia, seja em equações de balanceamento na química, os " +
            "sistemas lineares são essenciais para a resolução desses problemas. O melhor disso tudo é que os determinantes " +
            "podem ser utilizados para facilitar (e muito) esses sistemas lineares, sendo necessários em diversos momentos " +
            "dos cálculos matemáticos!");
    } else if (indice === 2) {
        tp = document.createTextNode("Os Determinantes também são muito úteis na geometria! Triângulos são " +
            "constantemente usados para a resolução de problemas geométricos, e com a ajuda de determinantes, é " +
            "possível calcular a área desses polígonos de maneira bem simples!");
    }
    p.appendChild(tp);
    $div.fadeOut('fast', function () {
        $div.empty();
        $div.append(p);
        $div.fadeIn('fast');
    });
}

mudarConteudoMotivacao(0);

function selecionarMotivacao(evt) {
    let item = evt.currentTarget;
    let menu = document.querySelector('#menu-motivacao');
    let itensMenu = menu.childNodes;
    for (let itemMenu of itensMenu) {
        if (itemMenu.tagName === "LI") {
            itemMenu.classList.remove('menu-motivacao-selecionado');
        }
    }
    item.classList.add('menu-motivacao-selecionado');
    if (item.innerHTML === "Cálculos com Matrizes") {
        mudarConteudoMotivacao(0);
    } else if (item.innerHTML === "Sistemas de Equações Lineares") {
        mudarConteudoMotivacao(1);
    } else if (item.innerHTML === "Geometria") {
        mudarConteudoMotivacao(2);
    }
}

let menu = document.querySelector('#menu-motivacao');
let itensMenu = menu.childNodes;
for (let itemMenu of itensMenu) {
    if (itemMenu.tagName === "LI") {
        itemMenu.addEventListener('click', selecionarMotivacao);
    }
}

function exibirConclusao() {
    let $conclusao = $('#conclusao');
    let h3a = document.createElement("h3");
    let text1 = document.createTextNode("Como você pôde perceber, o determinante de uma matriz que só possui " +
        "um elemento é o próprio elemento! Fácil né?");
    let text2 = document.createTextNode(" Pronto para continuar aprendendo? Só clicar no botão abaixo para " +
        "começarmos a ver como calcular os determinantes em matrizes com quatro elementos, ou seja, matrizes 2x2!");
    h3a.appendChild(text1);
    h3a.appendChild(document.createElement('br'));
    h3a.appendChild(text2);
    let a = document.createElement('a');
    a.innerHTML='Determinantes em Matrizes 2x2';
    a.setAttribute('href','2x2.html');
    a.setAttribute('id','botaoConclusao');
    $conclusao.fadeOut('fast', function () {
        $conclusao.append(h3a);
        $conclusao.append(a);
        $conclusao.fadeIn('fast');
    });
}

$inputMatriz = $(".matriz-value");

let foiMudado = false;

function processaMudancaMatriz() {
    if (foiMudado === false) {
        foiMudado = true;
        exibirConclusao();
    }
    let root = document.documentElement;
    let text = $inputMatriz.val();
    if (text.length !== 0) {
        root.style.setProperty('--largura', (text.length));
    } else {
        root.style.setProperty('--largura', (1));
        text = "0";
    }
    let $div = $('matriz1x1');
    let $det = $('#det');
    $det.empty();
    $det.append(text);
    $div.append($det);
}

$inputMatriz.keyup(processaMudancaMatriz);
$inputMatriz.focusout(processaMudancaMatriz);
$inputMatriz.focus(function () {
    $(this).val('');
});

