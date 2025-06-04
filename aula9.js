/*function mapi2(ls,f){
    //[1,2,3].map(x =>2*x)
    let aux = [];
    for(let i = 0; i < ls.length; i++){
        aux.push(f(ls[i]));
    }

    return aux;
}
    */

/*function mapi(f){
    //[1,2,3].map(x =>2*x)
    let aux = [];
    for(let i = 0; i <this.length; i++){
        aux.push(f(this[i]));
    }

    return aux;
}
    */

function mapf(f){
    if(this.length == 0){
        return [];
    }
    //x é a cabeça, o primeiro elemento, elemento 0
    //xs é todo o restante, do elemento 1 até o fim
    [x, ...xs] = this
    return [f(x)].concat(xs.mapf(f))
}


function teste(){
    Array.prototype.mapf = mapf;
    let res = [1,2,3,4].mapf(x => 2 * x);
    console.log(res);
    
    //Array.prototype.mapi = mapi;

    //para as linhas abaixo funcionarem, a linha 24 deve ser exercutada
    //let res = [1,2,3].mapi(x => 2 * x);
    //console.log(res);

    //incluimos uma variável chamada mapi em todas as listas, que contém a função mapi definida acima
    
    //let res = mapi([1,2,3], x => x*2);
    //console.log(res);

}

/* 

[head, tail ] = [1, 2, 3, 4]
head = 1
tail = 2, 3, 4

se chama "pattern matching" em programação funcional, ou "list desctructor" em js

filter: função do protótipo das listas que recebe um predicato (função que retorna true ou false) e devolve uma lista com os elementos que tiveram retorno verdadeiro ao predicado 

exemplos: [3, 4, 5, 6, 7, 8].filter(x => x % 2 == 0) vai filtrar e devolver todos os pares

["thiago", "y", 2, 3, "cachorro"].map(xs => typeof(xs)=== string) vai filtrar e devolver somente strings

[1,2,3,4,5,6,7].filter(x => x%2 == 0).map(x => x+1) vai filtrar os numeros pares e somar um a eles

reduce (ou fold): é uma função do protótipo das listas que recebe uma função de dois parâmetros e um valor inicial. A função retornará um valor que corresponde à sucessivas aplicações de f

exemplos: [1,2,3,4].reduce((x, y) => x + y, 0) = [2,3,4].reduce(s, s(0,1)) = [3, 4].reduce(s, s(2, 2(0,1))) = 4.reduce(s, s(3, s(2, s(0,1)))) = [].reduce(s,s(4,s(3,s(2,s(0,1))))) = 4 + 3 + 2 + 0 + 1 = 10

[1,2,3,4].reduce((x,y) => x+y,0)

*/