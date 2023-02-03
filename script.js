function script(){

let ultimoBotao = null;
let valorAnterior = null;
let valorAtual = null;
let primeiro = true;
let primeiroStack = true;
let primeiroResultado = true;
let displayStack = 0;
let stack = 0;
let resultado = 0;
let resultadoAnterior = 0;
const display = document.getElementById("displayContent");
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btnMais = document.getElementById("btnMais");
const btnMenos = document.getElementById("btnMenos");
const btnVezes = document.getElementById("btnVezes");
const btnDivisao = document.getElementById("btnDivisao");
btn1.addEventListener("click", () =>{apertarBotao("1")});
btn2.addEventListener("click", () =>{apertarBotao("2")});
btn3.addEventListener("click", () =>{apertarBotao("3")});
btn4.addEventListener("click", () =>{apertarBotao("4")});
btn5.addEventListener("click", () =>{apertarBotao("5")});
btn6.addEventListener("click", () =>{apertarBotao("6")});
btn7.addEventListener("click", () =>{apertarBotao("7")});
btn8.addEventListener("click", () =>{apertarBotao("8")});
btn9.addEventListener("click", () =>{apertarBotao("9")});
btnMais.addEventListener("click", () =>{operacao("+"); apertarBotao(" + ");});
btnMenos.addEventListener("click", () =>{operacao("-"); apertarBotao(" - ");});
btnVezes.addEventListener("click", () =>{operacao("x"); apertarBotao(" x ");});
btnDivisao.addEventListener("click", () =>{operacao("/"); apertarBotao(" / ");});


function apertarBotao(botao){
    addStack(botao);
    mudarDisplay(botao);
}

function addStack(numero){
    if(!isNaN(parseInt(numero))){
    if (primeiroStack === true){
        stack = numero;
        primeiroStack = false;
        }else{
        stack += numero;
        }
    // console.log(stack);
    }
}

function mudarDisplay(botaoApertado){
    if (primeiro === true){
    displayStack = botaoApertado
    primeiro = false;
    }else{
    displayStack += botaoApertado;
    }
    display.innerHTML = displayStack;
}

function operacao(operador){
    console.log(parseInt(stack));
    // printarResultado();
    valorAnterior = parseInt(valorAtual);
    valorAtual = parseInt(stack);
    stack = 0;
    console.log(valorAnterior, typeof valorAnterior, "Valor Anterior");
    console.log(valorAtual, typeof valorAtual, "Valor Atual");
    switch(true){
        case operador === "+":
            if(primeiroResultado){}
            resultadoAnterior = resultado;
            resultado = resultadoAnterior + valorAtual;
        break;
        case operador === "-":
            resultadoAnterior = resultado;
            resultado = resultadoAnterior - valorAtual;
            console.log(resultadoAnterior, valorAtual);
        break;
        case operador === "x":
            resultadoAnterior = resultado;
            resultado = resultadoAnterior * valorAtual;
        break;
        case operador === "/":
            resultadoAnterior = resultado;
            resultado = valorAtual / resultadoAnterior;
        break;
    }
    console.log(resultadoAnterior, "Resultado anterior");
    console.log(resultado, "Resultado atual");
}

} //Dom