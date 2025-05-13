/* Arquivo base para realização da Atividade de Revisão do 1º TRIMESTRE */

// 1) Criação de variável de texto e numérica
let nome = "Ramon Rauber dos Anjos"
let chamada = 21

// 2) Criação de uma lista
let jogos= ["Valorant","Free Fire", "CS2"]

// 3) Utilização de um laço while
let contador = 0;
console.log ("####### Exercicio 3 #######") 
console.log ("Jogos favoritos do Ramon são:")
while(contador < 3) {
  console.log (jogos[contador])
  contador++;
}
// 4) Criação de um objeto
let filme = {
    nome: "Ramon Rauber dos Anjos",
    filme: "Django Livre",
    lancamento: 2012,
    nota: 8.5,
}
if (filme.nota<= 4)
    console.log("O filme possui uma nota considerada baixa")
if(filme.nota>4&&filme.nota<7)
    console.log ("O filme é considerado razoavel!")
if(filme.nota>7)
    console.log ("O filme é muito bom!")


// 5) Utilização de if-else


// 6) Criação de uma função que analisa os dados da previsão do tempo
const previsaoTempo = [
    {
        dia: "segunda",
        temperaturaMin: 14,
        temperaturaMax: 19,
        chanceDeChuva: 10
    },
    {
        dia: "terça",
        temperaturaMin: 13,
        temperaturaMax: 20,
        chanceDeChuva: 10
    },
    {
        dia: "quarta",
        temperaturaMin: 15,
        temperaturaMax: 22,
        chanceDeChuva: 80
    },
    {
        dia: "quinta",
        temperaturaMin: 13,
        temperaturaMax: 18,
        chanceDeChuva: 60
    },
    {
        dia: "sexta",
        temperaturaMin: 12,
        temperaturaMax: 16,
        chanceDeChuva: 40
    }
]