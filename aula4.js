/* function inspecionar(obj){
    let aux = "";
    for (let ix in obj){
        aux = aux + ix + " => " + obj[ix] + "<br>";
    }
    let div = document.querySelector("#resultado");
    div.innerHTML = aux;
}

function teste(){
    let lisDivs = document.querySelectorAll("li, div");
    //inspecionar(lis);
    for(let i=0; i < lisDivs.length; i++){
        lisDivs[i].style.backgroundColor = "green";
    }
}
*/

/*function inspecionar(obj) {
    let aux = "";
    for(let ix in obj){
        aux = aux + ix + "=>" + obj[ix] + "<br>";
    }
    let div = document.querySelector("#resultado");
    div.innerHTML = aux;
}
    */

function sumir(){
    let divs = document.querySelectorAll("div");
    for(let i=0;i < divs.length; i++){
        divs[i].style.display = "none";
    }
}

function mudar(){
    let ps = document.querySelectorAll("p")
    for(let i=0;i < ps.length; i++)
        ps[i].innerHTML = "mudar";
}

function pintar(){
    let divs = document.querySelectorAll("div");
    for(i = 0; i < divs.length; i++){  
        if(i%2 == 0){
            divs[i].style.backgroundColor = "green";
        }
        else{
            divs[i].style.backgroundColor = "red";
        }
    }
}    