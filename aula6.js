function pintar(){
    let lis = document.querySelectorAll("li")
    lis.forEach(li => {
        li.style.backgroundColor = "green";
        li.style.color = "grey";
    })
}