var x = 'exemplo bobo'; //var é uma variável global (acessível em qualquer lugar, ruim)
if(x==2){
    var y = 'outro exemplo bobo';
}
if(true){
    let z='variavel com escopo'; //variavel com escopo, só cria ela se entrar no if
    if (true){
        console.log(z); 
        //estar no mesmo escopo significa estar no mesmo conjunto de chaves, se tiver um if e nesse if for declarado um let, se for criado mais um if dentro desse if vai dar pra ver o valor do let, porque ainda ta no mesmo if externo (conjunto de chaves)
    }
}