console.log('Rodando extensão de soma!');

// Quantas ocorrências tem no último mês?

let diasTotais = document.querySelectorAll('.time')
let meses =[]

diasTotais.forEach(dia => {
  if (dia.textContent.length < 7) {
    meses.push(dia.textContent)
  }
});

let mesesLimpo = []
meses.forEach(frase => {
  mesesLimpo.push(frase.replace(/\d+/g, '').replace(/\s/g, ''))
})

let ultimoMes = mesesLimpo[0]
let numeroUltimoMes = mesesLimpo.lastIndexOf(ultimoMes) // Resultado

// DIV '.amount'

let amountQuery = document.querySelectorAll('.amount')
let lista = []
for (let propriedade of amountQuery) {
  if (propriedade.className == "amount") {
      lista.push(propriedade.innerText.replace('R$','').replace('.','').replace(',','.'))
  }
}

//

let listaParse = []

lista.slice(0, numeroUltimoMes).forEach(element => {
  listaParse.push(parseFloat(element))
  });

// Pagamento de fatura // Bug: Se tiver um "Fatura vence amanhã", mas não tiver um "pagamento recebido", ou se o pagamento recebido for parcial, vai dar mais zica ainda quando for multiplicado por dois na sessão de soma

let recebido = document.querySelectorAll('.payment')

let listaRecebido = []

for (let propriedade of recebido) {
  listaRecebido.push(propriedade.innerText.replace('Pagamento recebido\nR$ ','').replace('.','').replace(',','.'))
}
let listaRecebidoParse = [];
listaRecebido.forEach( element => {
  listaRecebidoParse.push(parseFloat(element))
})

// Soma

const redutor = (accumulator, currentValue) => accumulator + currentValue;
const somaRecebido = listaRecebidoParse.reduce(redutor) * 2 // "* 2" pq se foi pago, também aparece em "Fatura vence amanhã" (consultar bug em "Pagametno de fatura")
let somaGasto = listaParse.reduce(redutor) - somaRecebido 
let somaGastoString = somaGasto.toLocaleString('de-DE')

// Exibir

let toolbar = document.querySelector('.toolbar')
let divTotal  = document.createElement('div');
divTotal.className += "label"
divTotal.style.color = "#fff";
let textoTotal = document.createTextNode(`Total gasto no mês atual: ${somaGastoString}`)
divTotal.appendChild(textoTotal);
toolbar.appendChild(divTotal)