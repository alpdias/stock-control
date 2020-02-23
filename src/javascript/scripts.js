/*
Criado em 01/2020
@Autor: Paulo https://github.com/alpdias
*/

var produto = document.getElementById("produto") // variavel que recebe o input com id 'produto'
var quantidade = document.getElementById("quantidade") // variavel que recebe o input com id 'quantidade'
var preço = document.getElementById("preço") // variavel que recebe o input com id 'preço'

// funçao para verificar se todos os items estao preenchidos antes de adicionar
function verificar() { 
    if (produto.value == "" || quantidade.value == 0 || preço.value <= 0) {
    window.alert(`Preencha todos os campos para adicionar um produto/item no estoque!!`)
    } 
}

// funçao para excluir toda a lista de estoque
function excluir() { 
    if (confirm(`Tem certeza que deseja excluir todos os produtos/itens do estoque?`)) { // mostra uma confirmaçao antes de excluir todo o estoque
        localStorage.removeItem("estoqueItens") // exclui todo os itens  gravados no 'locastorage'
        window.alert(`Estoque excluído!!`)
    } else {
        return false // retorna 'false' e não prosegue a funçao
    }
}

// funcao para adicionar um produto ao estoque
function adicionar() { 
    var novo = document.getElementById("produto").value // recebe o 'valor' da variavel > produto
    var qtd = document.getElementById("quantidade").value // recebe o 'valor' da variavel > quantidade
    var prç = document.getElementById("preço").value // recebe o 'valor' da variavel > preço

    // verifica se todos os itens estao preenchidos antes de adicionar 
    if (!novo) { 
        return false // retorna 'false' e não prosegue a funçao
    } else if (!qtd) {
        return false // retorna 'false' e não prosegue a funçao
    } else if (!prç) {
        window.alert(`Preencha todos os campos para adicionar um produto/item no estoque!!`)
        return false // retorna 'false' e não prosegue a funçao
    }

    // cria um objeto 'item'
    item = { 
        // atributos do objeto
        nome: novo, 
        quant: qtd,
        valor: prç,
    }

    // criar uma tabela para armazenar os dados, caso não exista
    if (localStorage.getItem('estoqueItens') === null) { 
        var itens = []
        itens.push(item)
        localStorage.setItem('estoqueItens', JSON.stringify(itens)) // armazena um item no navegador e transforma em um JSON do tipo string 
    } else {
        var itens = JSON.parse(localStorage.getItem('estoqueItens')) // transforma um item em um JSON do tipo objeto
        itens.push(item)
        localStorage.setItem('estoqueItens', JSON.stringify(itens))
    }
}

// funçao para remover um item
function removerItem(nome) {
    var itens = JSON.parse(localStorage.getItem('estoqueItens')) // transforma uma 'string' em um JSON

    for (var i = 0; i < itens.length; i++) { // busca os itens dentro do 'array'
        if (itens[i].nome == nome) {
            itens.splice(i, 1) // remove o item especifico
        }

        localStorage.setItem('estoqueItens', JSON.stringify(itens)) // transforma um item JSON em 'string'
    }

    mostrarResultado() // recarrega o estoque
}

// funcao para mostrar os itens adicionados
function mostrarResultado() { 
    var itens = JSON.parse(localStorage.getItem('estoqueItens')) // recebe as informaçoes armazenadas, passando para um JSON em objeto
    var resultadoItens = document.getElementById('resultados') // busca o elemento HTML pelo ID

    resultadoItens.innerHTML = ''

    // loop para mostrar os resultados buscando dentro do array
    for (var i = 0; i < itens.length; i++) { 
        var nome =  itens[i].nome
        var quant = itens[i].quant
        var valor = itens[i].valor
        
        // insere os resultado dentro da tabela em HTML pelo JS
        resultadoItens.innerHTML += '<tr><td style="border-bottom: 0.5px solid rgba(0, 0, 0, 0.411);">' + nome + 
                                    '</td><td style="border-bottom: 0.5px solid rgba(0, 0, 0, 0.411)">' + quant + 
                                    '</td><td style="border-bottom: 0.5px solid rgba(0, 0, 0, 0.411)">' + valor + 
                                    '</td><td>' + '<button style="background-color: #B8336A; font-family: Acme, sans-serif; color: white; padding: 2%; border-radius: 4px; margin-top: 3%; margin-bottom: 0px; border: transparent; font-weight: bolder;" onclick="removerItem(\'' + nome + '\')">&nbsp;&nbsp;X&nbsp;&nbsp;</button>' + 
                                    '</td></tr>'

        // zera os campos apos inserir um item
        produto.value = ''
        quantidade.value = ''
        preço.value = ''
        produto.focus()

    }
}