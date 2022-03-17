const {produtos} = require ('../model/dados')
const {mostrarTela, multValor, condicao} = require ('../lib/functionscommuns')

function listaDeProduto() {
somaProdutos = 0
for (let i = 0; i < produtos.length; i++ ) {
  somaProdutos += multValor (produtos[i].val , produtos[i].qtd)
  mostrarTela ("Cod - " + produtos[i].id + "  " + produtos[i].nome + " --- " + produtos[i].val + ".0 reais")
}

console.log(somaProdutos)
mostrarTela("O Valor total é:" + " " + somaProdutos)
condicao(somaProdutos) 
}

exports.principal = () =>{
    mostrarTela("--------  Loja ---------")
    listaDeProduto()
    }

