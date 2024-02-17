let vitorias = 78
let derrotas = 10
let resultado = ""
let subtracao = ""

sub(vitorias, derrotas)

function sub(vitorias, derrotas){
	subtracao = vitorias - derrotas
    return subtracao
}

if(subtracao <= 10){
	resultado = "Ferro"
    
} else if (subtracao > 10 && subtracao <= 20){
	resultado = "Bronze"
} else if (subtracao > 20 && subtracao <= 50){
	resultado = "Prata"
} else if (subtracao > 50 && subtracao <= 80){
	resultado = "Ouro"
} else if (subtracao > 80 && subtracao <= 90){
	resultado = "Diamante"
} else if (subtracao > 90 && subtracao <= 100){
	resultado = "Lendário"
} else {
	resultado = "Imortal"
}
console.log("O Heroi tem o saldo de " + subtracao + " e está no nivel " + resultado)