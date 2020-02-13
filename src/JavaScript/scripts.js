/*
Criado em 01/2020
@Autor: Paulo https://github.com/alpdias
*/

var produto = document.getElementById("produto") // variavel que recebe o input com id 'produto'
var quantidade = document.getElementById("quantidade") // variavel que recebe o input com id 'quantidade'
var preço = document.getElementById("preço") // variavel que recebe o input com id 'preço'

function verificar() { // funçao para verificar se todos os items estao preenchidos
    if (produto.value == "" || quantidade.value == 0 || preço.value <= 0) {
    window.alert(`ERRO! Preencha todos os campos para inserir um produto no estoque.`)
    } 
}

function saida() { // funçao para verificar a saida esta valida
    if (preço.value > 0) {
    window.alert(`ERRO! Não preencha o 'PREÇO' para remover um produto do estoque.`)
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


    if (localStorage.getItem('estoqueItens') === null) { // criar uma tabela para armazenar dados caso não exista
        var itens = []
        itens.push(item)
        localStorage.setItem('estoqueItens', JSON.stringify(itens)) // armazena um item no navegador e transfora em um JSON do tipo string 
    } else {
        var itens = JSON.parse(localStorage.getItem('estoqueItens')) // transforma em um JSON do tipo objeto
        itens.push(item)
        localStorage.setItem('estoqueItens', JSON.stringify(itens))
    }
}

function mostrarResultado() { // funcao para mostrar os itens adicionados
    var itens = JSON.parse(localStorage.getItem('estoqueItens')) // recebe as informaçoes armazenadas, passando para um JSON em objeto
    var resultadoItens = document.getElementById('resultados') // busca o elemento HTML pelo ID

    resultadoItens.innerHTML = ''

    for (var i = 0; i < itens.length; i++) { // loop para mostrar os resultados buscando dentro do array
        var nome =  itens[i].nome
        var quant = itens[i].quant
        var valor = itens[i].valor
            
        resultadoItens.innerHTML += '<tr><td>' + nome + '</td><td>' + quant + '</td><td>' + valor + '</td><td>' + '<button style="background-color: red; font-family: Arial, Helvetica, sans-serif; color: white; padding: 2%; border-radius: 4px; margin-top: 3%; margin-bottom: 0px; border: transparent; font-weight: bolder;">&nbsp;&nbsp;X&nbsp;&nbsp;</button>' + '</td></tr>' // exibi o resultado 

        produto.value = ''
        quantidade.value = ''
        preço.value = ''
        produto.focus()

    }
}