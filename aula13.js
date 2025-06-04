function extrairNoticia(doc){
    //document -> nossa pagina
    //doc -> pagina da fatecrl
    let div = document.querySelector("#res")
    doc.querySelectorAll(".agenda-info").forEach(noticia => {
        div.appendChild(noticia)
    })
}

function baixarImagem(urlimg){
    fetch(urlimg)
        .then(resp => {
            return resp.blob()
        })
        .then(blob => {
            const imageObjectURL = URL.createObjectURL(blob);
            let img = document.createElement("img")
            img.src = imageObjectURL
            document.querySelector("#res").appendChild(img)
        })
}

function testeImagem(){
    const cursos = ["ge", "cd", "ads", "si", "grh", "log", "gp"]
    cursos.forEach(curso => {
            baixarImagem("https://fatecrl.edu.br/public/images/vestibular/courses/"+curso+".svg")
    })
}

function teste(){
    fetch("https://fatecrl.edu.br/")
        .then(resp => {
            if(resp.status != 200){
                throw new Error("Problemas no servidor");
            }
            return resp.text();
        })
        .then(text => {
            let d = new DOMParser();
            let doc = d.parseFromString(text, "text/html")
            //console.log(doc) para checar se funciona, joga no console o doc que peguei o site
            extrairNoticia(doc)
        })
        .catch(err => {
            document.querySelector("#res").innerHTML = err.message;
        })
}

function testeus(){
    fetch("https://corsproxy.io/?url=https://unisanta.br/") //achar proxy para fazer bypass de CORS
        .then(resp => {
            if(resp.status != 200){
                throw new Error("Problemas no servidor");
            }
            return resp.text();
        })
        .then(text => {
            let d = new DOMParser();
            let doc = d.parseFromString(text, "text/html")
            extrairNoticia(doc)
        })
        .catch(err => {
            document.querySelector("#res").innerHTML = err.message;
        })
}

function testeForm(){
    let curso = document.querySelector("#curso").value
    baixarImagem("https://fatecrl.edu.br/public/images/vestibular/courses/"+curso+".svg")
}


function main(){
    document.querySelector("#btn").addEventListener("click", teste);
    document.querySelector("#btnimg").addEventListener("click", testeImagem);
    document.querySelector("#btnus").addEventListener("click", testeus);
    document.querySelector("#btnform").addEventListener("click", testeForm);
}

window.onload = main