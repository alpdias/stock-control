/*
Criado em 01/2020
@Autor: Paulo https://github.com/alpdias
*/

var produto = document.getElementById("produto")
var quantidade = document.getElementById("quantidade")
var preço = document.getElementById("preço")

function verificarEntrada() {
    if (produto.value == "" || quantidade.value == 0 || preço.value <= 0) 
    window.alert(`ERRO! Preencha todos os dados para inserir um produto no estoque.`)
}

function verificarPreçoSaida() {
    if (preço.value > 0)
        window.alert(`ERRO! Não preencha 'PREÇO' para remover um produto do estoque. `)
}

function verificarSaida() {
    if (produto.value == "" || quantidade.value == 0) 
    window.alert(`ERRO! Preencha 'PRODUTO' e 'QUANTIDADE' para remover um produto do estoque.`)
}
