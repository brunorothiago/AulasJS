function clicar(botao){
    let aux = "http://127.0.0.1:5500/botaoClicado.jpeg" 
    if(botao.src === aux){
        botao.src = "botao.jpg";
    return
    }
    botao.src = "botaoClicado.jpeg"
}



//representará a div clicada
function mudar(objThisDiv){
    objThisDiv.innerHTML = "clicado"
    objThisDiv.style.backgroundColor = "green"

}



function teste(){
    //a variável global "document" contém a tradução da página html para o DOM (document object model)
    //let li = document.getElementById("li2");
    //let li = document.querySelector("#li2");
    //li.style.backgroundColor = "yellow";
    //let li3 = document.querySelector(".li3");
    //li3.style.backgroundColor = "green";
    //li3.innerHTML = "buscado pelo js";

}