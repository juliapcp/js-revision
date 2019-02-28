let nome = 'Bruce';
console.log(nome);
nome = 'Peter'; //da pra mudar uma let
console.log(nome);
//se colocar algo sem var, let ou const na frente vira um var "sobrenome="B.";" é uma var
const sobrenome = 'Parker' //não vai mudar então é uma constante
console.log(sobrenome);
console.log(nome,sobrenome);
console.log(nome+''+sobrenome); //concatenação
console.log(`${nome} isso continua sendo string porque ta entre crases ${sobrenome} ${2+2}`); //interpolação, onde as coisas ficam interpretadas ao inves de apenas juntadas, resolvendo o que poder ser resolvido como 2+2
let v1 = null;
console.log(v1); //null = sem valor!
v1=undefined;
console.log(v1); //valor indefinido, diferente de uma variavel não definida, um valor indefinido mas que pode ser definido em algum momento porque pertence a uma variável definida;

let v3 = 8;
let v4 = v3;
v3 = 5;
console.log(v3, v4); //cada uma tem o seu espaço na memória (saída: 5 8)

//tipo (number, array, string, object)
console.log(typeof(v3)); //number
console.log(typeof("oi")); //string
console.log(typeof([[1],[2]]));
console.log(typeof([1,2]));


