//f é uma lei de formação: é uma função que recebe uma semente e vai retornar null caso uma condição falhe ou uma lista contendo o elemento que irá na lista (2 elementos) a ser criada e uma nova semente; essa função criará novas sementes\

//b é uma semente
function unfold(f,b){
    const res = f(b)
    if(res == null){
        return []
    }
    //res[0] é o elemento a ser colocado na lista, e o res[1] é a nova semente
    return [res[0]].concat(unfold(f, res[1]))
}

//ex= gerar uma lista com os 100 primeiros números naturais

function teste(){
    //a semente neste primeiro exemplo é um contador
    //let lf1 = b => b >= 100 ? null : [b, b+1]
    //console.log(unfold(lf1,0))

    let lf2 = n => b => b > n ? null : [b, b+1]
    let fatorial = n => unfold(lf2(n), 1).reduce((x, y) => x*y)
    console.log(fatorial(5))
}


//ex2 = gerar uma lista de a até z

function teste2(){
    let lf3 = b => b >= 91 ? null : [String.fromCharCode(b), b+1]
    console.log(unfold(lf3, "A".charCodeAt()).join(""))
}

//ex3 = gerar uma lista com 2 lis referentes as letras pares do alfabeto

function teste3(){
    let lf4 = b => b > 90 ? null : [String.fromCharCode(b), b+1]
    unfold (lf4, "A".charCodeAt())
            .filter(c => c.charCodeAt() % 2 == 0) //letras pares segundo o ASCII
            .map(c => {
                let li = document.createElement("li")
                li.innerHTML = c
                li.style.backgroundColor = "green";
                return li
            })
    .forEach(li => {
        let ul = document.querySelector("#ul")
        ul.appendChild(li)
    })
    
}


/*
unfold (expand): uma função de alta ordem que recebe uma lei de formação (função) e uma semente (um valor qualquer); retorna uma lista de acordo com esses parâmetros
*/


/*exercicios em aula

1 - Gere a lista [3, 6, 9, 12, ..., 60]

2 - Exiba o valor da soma da lista gerada

3 - Gere a lista [1, 3, 5, 7, 11, 15, 17, 19, 21, 23]

4 - Mostre a lista acima na página

5 - Faça uma função que converta um inteiro em um binário: 8 -> 1000; 11 -> 1011

*/

/*function listaMultiplosde3(){
    let lm3 = b => b > 60 ? null : [b, b + 3]
    let res = unfold(lm3, 3)
    console.log(res)
}
    */


function geradorDeListaIrregular(){
    let lir = b => b > 24 ? null : [b, b + 1]
    let res = unfold(lir, 1).filter(b => b < 7 && b % 2 === 1 || b === 11 || b < 24 && b % 2 === 1);
    console.log(res)
}

function binario(){
    const lfb = b => == 0 ? null : [b % 2, b >> 1]
    const res = n => unfold(lfb, n).reverse().join("")
    console.log(res(8))
    console.log(res(12))
    console.log(res(7))
}