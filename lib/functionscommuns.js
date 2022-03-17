var  prompt  = require ( 'prompt-sync' ) ( ) ; 

exports.mostrarTela = (texto) =>{
   return console.log(" " + texto)
}

exports.multValor = (quantidade,valorUnidade) =>{
    return quantidade*valorUnidade
}

exports.condicao = (valor) =>{
    if (valor > 150) {
       var s = prompt("O frete é gratuito. Volte sempre!")

    }
    else {
       var n = prompt("Por favor, insira a região para o cálculo do frete: ")
        switch (n) {
           case "Norte":
           case "norte":
               let norte = 40
           console.log("O valor do frete é 40, totalizando: ", (norte + somaProdutos));
          break;
            case "Nordeste":
            case "nordeste":
              let nord = 75
            console.log("O valor do frete é 75, totalizando: ", (nord + somaProdutos));
          break;
            case "Sul":
            case "sul":
              let sul = 54
            console.log("O valor do frete é 54, totalizando: ", (sul + somaProdutos))
            break;
        case "Sudeste":
        case "sudeste":
          let sud = 48
                console.log("O valor do frete é 48, totalizando: ", (sud + somaProdutos))
              break;
          case "Centro-Oeste":
          case "centro-Oeste":
          case "Centro-oeste":
          case "Centro-oeste":
           let Cen = 90
             console.log("O valor do frete é 90, totalizando: ", (Cen + somaProdutos))
           break;
         default:
                console.log("A região indicada  não existe. Por favor, Tente novamente!")
              break;
  
                    }       
    }
}
