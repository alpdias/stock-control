/*
Criado em 01/2020
@Autor: Paulo https://github.com/alpdias
*/

var produto = document.getElementById("produto"); // variavel que recebe o elemento html 'input' com id #produto
var quantidade = document.getElementById("quantidade"); // variavel que recebe o elemento html 'input' com id #quantidade
var preço = document.getElementById("preço"); // variavel que recebe o elemento html 'input' com id #preço

function verificar() { // funçao para verificar se todos os items estao preenchidos antes de adicionar

    if (produto.value == "" && quantidade.value == 0 && preço.value <= 0) {
        window.alert('Preencha todos os campos para adicionar um produto/item no estoque!'); // exibe alertas de erro

    } else if (produto.value == "") {
        window.alert('Preencha o "Nome do Item" para adicionar um produto/item no estoque!');

    } else if (quantidade.value == 0) {
        window.alert('Preencha a "Quantidade" para adicionar um produto/item no estoque!');

    } else if (preço.value <= 0) {
        window.alert('Preencha o campo "Preço" para adicionar um produto/item no estoque!');
    };

};

function excluir() { // funçao para excluir toda a lista de estoque ou nao caso esteja zerada

    if (confirm('Tem certeza que deseja excluir todos os produtos/itens do estoque?')) { // mostra uma confirmaçao antes de excluir todo o estoque

        if (localStorage.length === 0) { // verificar se a quantidade do estoque e igual a zero
            window.alert('Estoque vazio!');

        } else {
            localStorage.removeItem("estoqueItens"); // exclui todo os itens do estoque gravados no 'locastorage'
            window.alert('Estoque excluído!');
        };
        
    } else {
        return false; // retorna 'false' e não prosegue com a funçao

    };
    
};

function adicionar() { // funcao para adicionar um novo produto ao estoque

    var novo = document.getElementById("produto").value; // recebe o 'valor' da variavel (value)
    var qtd = document.getElementById("quantidade").value; 
    var prç = document.getElementById("preço").value;

    if (!novo) { // verifica se todos os itens estao preenchidos antes de adicionar 
        return false;

    } else if (!qtd) {
        return false; 

    } else if (!prç) {
        return false; // retorna 'false' caso nao esteja preenchido e não prosegue a funçao

    };

    var item = { // cria o objeto 'item'
        nome: novo,  // atributos do objeto
        quant: qtd,
        valor: prç,
    };
    
    if (localStorage.getItem('estoqueItens') === null) { // criar uma tabela (localStorage) para armazenar os dados, caso não exista

        var itens = []; // array
        itens.push(item); // adiciona itens a ultima posiçao do array
        localStorage.setItem('estoqueItens', JSON.stringify(itens)); // armazena um item no localStorage do navegador e transforma em um JSON do tipo string (formato aceito pelo localStorage)

    } else {

        var itens = JSON.parse(localStorage.getItem('estoqueItens')); // transforma um item em um JSON do tipo objeto
        itens.push(item);
        localStorage.setItem('estoqueItens', JSON.stringify(itens));

    };

};

function removerItem(nome) { // funçao para remover um item do estoque (localStorage)
    
    var itens = JSON.parse(localStorage.getItem('estoqueItens')); // transforma uma 'string' em um JSON
    
    for (var i = 0; i < itens.length; i++) { // busca os itens dentro do 'array' e verifica a quantidade
        
        if (itens[i].nome === nome) {
            itens.splice(i, 1); // remove o item especifico
        };
        
        localStorage.setItem('estoqueItens', JSON.stringify(itens));
        
    };

    mostrarResultado(); // recarrega o estoque no html
    
};

function mostrarResultado() { // funcao para mostrar os itens adicionados
    
    var itens = JSON.parse(localStorage.getItem('estoqueItens')); // recebe as informaçoes armazenadas, passando para um objeto em JSON
    var resultadoItens = document.getElementById('resultados'); 
    
    resultadoItens.innerHTML = ''; // inserir um elemento html
    
    for (var i = 0; i < itens.length; i++) { // loop para mostrar os resultados buscando dentro do array
        
        var nome =  itens[i].nome;
        var quant = itens[i].quant;
        var valor = itens[i].valor;
          
        resultadoItens.innerHTML += '\
            <tr>\
                <td style="word-wrap: break-word;">' + nome + '</td>\
                <td style="word-wrap: break-word;">' + quant + '</td>\
                <td style="word-wrap: break-word;">' + valor + '</td>\
                <td><button class="botoes-tabela" onclick="removerItem(\'' + nome + '\')">X</button></td>\
            </tr>'; // insere os resultado dentro do elemento html 'tabel' pelo JS (nao cria um novo elemento e sim complementa o que ja tem) 
            
            // style="background-color: #B8336A; font-family: Acme, sans-serif; color: white; padding: 2%; border-radius: 4px; margin-top: 3%; margin-bottom: 0px; border: transparent; font-weight: bolder;"
            // style="border-bottom: 0.5px solid rgba(0, 0, 0, 0.411);"
        
        produto.value = ''; // zera os campos apos inserir um item
        quantidade.value = '';
        preço.value = '';
        produto.focus(); // da destaque ao elemento

    };
    
};

