//for, while, do while, foreac

txt = "info"
tam = 10
caractere = "#"

let txt=prompt('Palavra:');
let tam=parseInt(prompt('Tamanho:'));
let caractere=prompt('Caractere:');
while(txt.length<tam){
    txt+=caractere;
}
console.log(txt);

const nomes=[]; //vetor/array
console.log(nomes.length); //0
nomes.push('Bernardo');
nomes.push('Marina');
console.log(nomes); 
console.table(nomes);//tabela

for(let i = 0; i< nomes.length; i++){
    console.log(`Nome ${i+1}, nomes[i]`);
}
//for each (para cada) nao tem índice, cada nome da lista nomes se tornou uma constante
for (const nome of nomes){
    console.log('Nome ', nome);
}