/*
Criado em 01/2020
@Autor: Paulo https://github.com/alpdias
*/

var produto = document.getElementById("produto") // variavel que recebe o input com id 'produto'
var quantidade = document.getElementById("quantidade") // variavel que recebe o input com id 'quantidade'
var preço = document.getElementById("preço") // variavel que recebe o input com id 'preço'

function verificar() { // funçao para veriicar se todos os items estao preenchidos
    if (produto.value == "" || quantidade.value == 0 || preço.value <= 0) {
    window.alert(`ERRO! Preencha todos os dados para inserir um produto no estoque.`)
    } 
}

function saida() { // funçao para verificar a saida esta valida
    if (preço.value > 0) {
    window.alert(`ERRO! Não preencha 'PREÇO' para remover um produto do estoque.`)
    } else if (produto.value == "" || quantidade.value == 0) {
    window.alert(`ERRO! Preencha 'PRODUTO' e 'QUANTIDADE' para remover um produto do estoque.`)
    }
}

function adicionar() { // funcao para adicionar um produto ao estoque
    var novo = document.getElementById("produto").value // recebe o 'valor' da variavel de um input
    var qtd = document.getElementById("quantidade").value // recebe o 'valor' da variavel de um input
    var prç = document.getElementById("preço").value // recebe o 'valor' da variavel de um input

    item = { // cria um objeto
        nome: novo, // atributos do objeto
        quant: qtd,
        valor: prç,
    }
}
