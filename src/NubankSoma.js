let amountQuery = document.querySelectorAll('.amount')
console.log(amountQuery)

let lista = []
for (let propriedade of amountQuery) {
  lista.push(propriedade.innerText.replace('R$','').replace('.','').replace(',','.'))
}

console.log(lista)

//

let listaParse = []

lista.forEach(element => {
  listaParse.push(parseFloat(element))
  });

console.log(listaParse)

// Recebido

let recebido = document.querySelectorAll('.payment')

console.log(recebido)

let listaRecebido = []

for (let propriedade of recebido) {
  listaRecebido.push(propriedade.innerText.replace('Pagamento recebido\nR$ ','').replace('\n11 JAN','').replace('.','').replace(',','.'))
}

console.log(listaRecebido)

//

let listaRecebidoParse = [];

listaRecebido.forEach( element => {
  listaRecebidoParse.push(parseFloat(element))
})

console.log(listaRecebidoParse)

// Soma


const redutor = (accumulator, currentValue) => accumulator + currentValue;

const somaRecebido = listaRecebidoParse.reduce(redutor)

let somaGasto = listaParse.reduce(redutor) - somaRecebido

// Exibir

let toolbar = document.querySelector('.toolbar')
let divTotal  = document.createElement('div');
divTotal.className += "label"
divTotal.style.color = "#fff";
let textoTotal = document.createTextNode(`Total no mês ${somaGasto.toString()}`)
divTotal.appendChild(textoTotal);

toolbar.appendChild(divTotal)


// Quantos dias tem o mês? // WIP

let diasTotais = document.querySelectorAll('.time').innerText;
console.log(diasTotais)

let diasLista = []
for (let propriedade of diasTotais) {
  diasLista.push(propriedade.innerText.replace('R$','').replace('.','').replace(',','.'))
}

console.log(diasLista)
