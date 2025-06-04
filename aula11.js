/*

function teste(){
    alert("Hello, world!");
}


function popularEvento(){
    //equivalente a <button onclick="teste">. ele fica ouvindo até o botao ser clicado, e chama a função assim que é feito
    document.querySelector("button")
        .addEventListener("click", teste)
/*
    document.querySelector("div")
        .addEventListener("mouseenter", evt => {
                evt.target.style.backgroundColor="green"
        })

    document.querySelector("div")
        .addEventListener("mouseleave", evt => {
                evt.target.style.backgroundColor="red"
        })

    document.querySelectorAll("div")
        .forEach(div => {
            div.addEventListener("mouseenter", evt => {
                evt.target.style.backgroundColor="green"
            })
        })

    document.querySelectorAll("div")
        .forEach(div => {
            div.addEventListener("mouseleave", evt => {
                evt.target.style.backgroundColor="red"
            })
        })

window.onload = popularEvento;

*/

/*

function aumentarContador(){
let i = 0
document.querySelector("#btn")
    .addEventListener("click", evt => {
        i++
        evt.target.innerHTML = i
    })
}

window.onload = aumentarContador

function sumirLI(){
    document.querySelectorAll("li")
    forEach(li => {
        li.addEventListener("click", evt => {
            evt.target.display="none"
        })
    })
}

window.onload = sumirLI
*/

function principal(){
        let i = 0
        $(".gdp").click(function (){
            i++
            $(this).html(i)
        })
    
        $("div").click(function() {
            $(this).css("background-color", "pink")
        })
    
        $("li").hover(function() {
            $(this).css("background-color", "red")
        })
    
        $("li").mouseleave(function() {
            $(this).css("background-color", "white")
        })
    }
    
    $(principal)