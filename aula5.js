function criarTable(obj){
        let dados = obj.dados;
        let table = document.createElement("table");
        let thead = document.createElement("thead");
        let thNome = document.createElement("th");
        let thp1 = document.createElement("th");
        let thp2 = document.createElement("th");
        let thSituacao = document.createElement("th");
        let trhead = document.createElement("tr");
        thNome.innerHTML = "Nome";
        thp1.innerHTML = "P1";
        thp2.innerHTML = "P2";
        thSituacao.innerHTML = "Situacao";
        let tbody = document.createElement("tbody");
        //percorre o array de alunos
        for(let i =0; i <dados.length; i++){
            let tdNome = document.createElement("td");
            let tdp1 = document.createElement("td");
            let tdp2 = document.createElement("td");
            let tdSituacao = document.createElement("td");
            let trBody = document.createElement("tr");
            tdNome.innerHTML = dados[i].nome;
            tdp1.innerHTML = dados[i].p1;
            tdp2.innerHTML = dados[i].p2;
            let media = 0.5*(dados[i].p1 + dados[i].p2);
            let situacao = media >= 6;
            tdSituacao.innerHTML = situacao ? "Aprovado" : "Reprovado";
            tdSituacao.style.color = situacao ? "green" : "red";
            tdSituacao.style.fontWeight = "bold";
            trBody.appendChild(tdNome);
            trBody.appendChild(tdp1); 
            trBody.appendChild(tdp2); 
            trBody.appendChild(tdSituacao); 
            tbody.appendChild(trBody);
        }
        trhead.appendChild(thNome);
        trhead.appendChild(thp1);
        trhead.appendChild(thp2);
        trhead.appendChild(thSituacao);
        table.appendChild(trhead);
        table.appendChild(thead);
        table.appendChild(tbody);
        document.body.appendChild(table);
    }

/*
function criarUL(lista){
    let ul = document.createElement("ul");
    for(let i=0; i <lista.length; i++){
        let li = document.createElement("li");
        li.innerHTML = lista[i];
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}
*/

/*function teste(){
    criarUL(["FATEC", "JS", "SEP", "HASKELL", "LANCHE"]);
} */
function teste(){
    let obj = {
        dados : [
            {nome : "ALUNO1", p1 : 8, p2 : 7},
            {nome : "ALUNO2", p1 : 2, p2 : 10},
            {nome : "ALUNO3", p1 : 4, p2 : 3},
            {nome : "ALUNO4", p1 : 9, p2 : 9.5},
            {nome : "ALUNO5", p1 : 7, p2 : 5},
            {nome : "ALUNO6", p1 : 6, p2 : 5},
            {nome : "ALUNO7", p1 : 10, p2 : 10}
        ]
    };
    criarTable(obj);
}

function teste2(){
    let p = document.createElement("p");
    p.innerHTML = "Paragrafo criado";
    let div = document.querySelector("#div1");
    div.parentNode.replaceChild(p,div);
    let div2 = document.querySelector("#div2");
    div2.parentNode.removeChild(div2);
}