List traversal

1) forEach = lista.forEach(f)
se lista = [e1, e2, ... en]

lista.forEach(f) vai executar:

f(e1) = ação
f(e2) = ação

em suma, forEach vai realizar uma ação para cada elemento sem retornar nada, somente executa

2) map: lista.map(f)

se lista = [e1, e2, ... en]

então, map retorna lista = [f(e1), f(e2), ... f(en)]

exemplos: [2, 4, 5, 6].map(x => 2* x) = [(x => 2*x)(2), (x => 2*x)(4), (x => 2*x)(6)]

em suma, recebe uma função e transforma listas, com retorno

USAR MAP PARA OPERAÇÕES MATEMÁTICAS OU PURAS

O map respeita duas regras: 

1) regra da identidade 

lista.map (x => x) lista = lista.map (x => x)  [e1, e2, ... en] = [(x => x)(e1), (x => x)(e2), ... (x => x)(en)] = lista

2) regra da composição

lista.map(f).map(g) = lista.map(x => g(f(x))

exemplo

[1, 2, 3, 4, 5].map(x => x + 1).map(x => 2*x) é a mesma coisa que [1, 2, 3, 4, 5].map(x => (y => 2*y)((y =+> y +1)(x)))
