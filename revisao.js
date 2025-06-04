//EXERCICIO 1
function adicionar(){
    let h2= document.querySelectorAll("div>h1.aqui+h2") // retorna uma nodeList
    for(let i=0; i<h2.length; i++){
        h2[i].classList.add("remover");
    }
}

//EXERCICIO 2

// function vogais(palavra){
//     let vogais=""
//     for(let i=0; i<palavra.length; i++){
//         if(palavra[i]=="a"|| palavra[i]=="e"|| palavra[i]=="o"|| palavra[i]=="u"||palavra[i]=="i"|| palavra[i]=="A"|| palavra[i]=="E"|| palavra[i]=="O"|| palavra[i]=="U"|| palavra[i]=="I"){
//             vogais+=palavra[i];
//         }
//     }
//     return vogais
// }
// console.log(vogais("MORANGO"))

function vogais(palavra){
    let todasVogais="aeiouAEIOU";
    let vogais=""
    for(let i=0; i<palavra.length; i++){
        if(todasVogais.includes(palavra[i])){
            vogais+= palavra[i]
        }
    }
    return vogais
}
console.log(vogais("MORANGO"))


//EXERCICIO 4
function mudar(){
    let a= document.querySelectorAll("a");
    let p= document.querySelectorAll("p");

    for(let i=0; i<a.length; i++){
        a[i].style.backgroundColor="yellow";
    }

    for (let i=0; i<p.length; i++){
        p[i].style.backgroundColor="blue"
    }
}

//EXERCICIO 3
lista= [
    {"nome": "Celular", "valor": 1500, "tipo": "eletronico"},
    {"nome": "Televisor", "valor": 3000, "tipo": "eletronico"}, 
    {"nome": "Mesa", "valor": 450, "tipo": "mobiliario"}  
    ]

function soma(obj){
    let soma=0;
    for(let i=0; i<obj.length; i++){
        if(obj[i].tipo=="eletronico"){
            soma= soma + obj[i].valor
        }
    }
    return soma
}
console.log(soma(lista))

function tabela(obj){
    let table= document.createElement("table")
    let thead= document.createElement("thead")
    thead.innerHTML="Tabela de produtos"
    let tbody=document.createElement("tbody")
    for(let i=0; i<obj.length; i++){
        let tr= document.createElement("tr"); // linha
        let td= document.createElement("td"); // quadrado
        td.innerHTML=obj[i].nome
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    table.appendChild(thead);
    table.appendChild(tbody);
    document.body.appendChild(table)
}

// {/* <table> */}
//     // <thead> Tabela de produtos </thead>
//     // <tbody>
//         <tr> <td> </td> </tr> 
//         <tr> <td> </td></tr>
//         <tr> <td> </td></tr>
//     </tbody>
// </table>

