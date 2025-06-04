class Cachorro {
    constructor(nome, raca){
        this.nome = nome; //cria o atributo nome (this.nome)
        this.raca = raca; //cria o atributo raca (this.raca)
    }

latir(){
    document.writeln(this.nome + ": AU AU AU AU");
}

mostrarRaca(){
    document.writeln(this.raca + "<br>");
}
}

/*function teste(){
    let c = new Cachorro("Rex","Bulldog");
    c.latir()
    c.mostrarRaca()

    let d = new Cachorro("Rufus", "Golden")
    d.latir()
    d.mostrarRaca()
}
    
class Calculadora{
    constructor(n1, n2){
        this.n1 = n1;
        this.n2 = n2;
    }

    soma(){
        document.writeln(this.n1 + this.n2)
    }

    subtracao(){
        document.writeln(this.n1 - this.n2)
    }

    multiplicacao(){
        document.writeln(this.n1 * this.n2)
    }

    divisao(){
        document.writeln(this.n1 / this.n2)
    }
}

function teste(){
    let a = new Calculadora(1,2)
    a.soma()
    a.subtracao()
    a.multiplicacao()
    a.divisao()

    let b = new Calculadora(400,123)
    b.soma()
    b.subtracao()
    b.multiplicacao()
    b.divisao()
}

*/

class Ok{
    constructor(x){
        this.x = x;
    }

    then(f){
        return f(this.x)
    }
}

function pure(x){
    return new Ok(x)
}

function teste(){
    let res = pure(5).then(x => pure(x+1)).then(x => pure(2*x))
    document.writeln(res.x)
}

function eventos(){
    document.querySelector("#btn").addEventListener("click", teste)
}

window.onload = eventos