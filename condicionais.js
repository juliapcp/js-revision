//if, if/else, if/ else if, ..../else
//switch/case/default
//?: (operador ternário)
// operadores lógicos && (E) || (OU, PIPE)

let idade = parseInt(prompt('Idade:'));
if(idade < 10){
    console.log('criança');
} else if (idade < 12) {
    console.log('pré-adolescente');
} else if (idade < 21){
    console.log('adolescente');
} else if (idade < 60){
    console.log('adulto');
} else {
    console.log('idoso');
}

let ano = "2019";
if (ano==2019){ //perguntando se tem uma igualdade "fraca"
console.log("é 2019!");
}
if (ano===2019){ //perguntando se tem uma igualdade mais forte, inclusive se é igual em tipo
console.log("é 2019!");
}
//não usaremos == ou !=, apenas === ou !== 

const temp = prompt("Temperatura:");
if(temp >= 20 && temp <= 30){
    console.log('Temperatura agradável!')
}
if(temp<0 || temp > 40){
    console.log("Temperatura insuportável!");
}

const tipo = 2;
switch(tipo){ //tinha que dar break se não a partir do lugar onde a condicional entrou, vai continuar imprimindo (fall through)
    case 1: console.log ("Tipo 1");
    case 2: console.log("Tipo 2");
    case 3: console.log("Tipo 3");
    default: console.log("Inválido")
}

