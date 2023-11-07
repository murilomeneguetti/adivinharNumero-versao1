alert('Boa vindas ao jogo do número secreto');
let maxnum = 100;
let numeroSecreto = parseInt(Math.random() * maxnum) + 1;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto)  {
    chute = prompt(`Escolha um número entre 1 e ${maxnum}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        tentativas++;
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
    }
}

//ao inves de usar um if, da pra usar o operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você acertou após ${tentativas} ${palavraTentativa}! Número secreto: ${numeroSecreto}`);

/*
if (tentativas > 1) {
    alert(`Parabéns! Você acertou após ${tentativas} tentativas! Número secreto: ${numeroSecreto}`);
} else {
    alert(`Parabéns! Você acertou após 1 tentativa! Número secreto: ${numeroSecreto}`);
}
*/

