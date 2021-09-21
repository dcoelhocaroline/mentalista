var numeroSecreto = Math.round(Math.random() * (10 - 1) + 1);
var tentativas = 3;

function chutar() {

    var valor = document.getElementById("valor").value;

    if (parseInt(valor) == numeroSecreto && tentativas > 0) {
        tentativas == 0;
        document.getElementById("resultado").innerHTML = `Acertou! O número era ${numeroSecreto}`;
    } else if (parseInt(valor) < numeroSecreto && tentativas > 0) {
        tentativas--;
        document.getElementById("resultado").innerHTML = `Errou!<br>Tente um número maior.<br>Você tem mais ${tentativas} tentativas.`;
    } else if (parseInt(valor) > numeroSecreto && tentativas > 0) {
        tentativas--;
        document.getElementById("resultado").innerHTML = `Errou!<br>Tente um número menor.<br>Você tem mais ${tentativas} tentativas.`;
    } else if (tentativas == 0){
        document.getElementById("resultado").innerHTML = `Acabaram suas tentativas!`
    }
}