let valor1 = prompt("Digite um número");
let valor2 = prompt("Digite um número");

let operador = prompt("Digite o operador(+ - * /)");

switch (operador) {
    case '*':
        console.log(valor1*valor2);
        break;
    case '/':
        console.log("Número inteiro:" + Math.abs(valor1/valor2));
        console.log("Resto da divisao:" + valor1%valor2);
        break;
    case '+':
        console.log(valor1+valor2);
        break;
    case '-':
        console.log(valor1-valor2);
        break;

    default:
        console.log("Vc digitou errado");
        break;
}