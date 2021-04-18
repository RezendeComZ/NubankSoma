// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver

// Selecionando todas as compras disponíveis:
let datas2 = Array.from(document.querySelectorAll('.time')).slice(1) 

// Ultimo mês
let ultimoMesNome = datas2[0].innerText.split(' ')[1] // String do último mês
ultimoMesNome

comprasUltimoMes = datas2.filter( dia => { // Todas as DIVs do último mês 
  return dia.innerText.split(' ')[1] == ultimoMesNome &&
  (
    dia.parentElement.classList[2] == "card_present" || dia.parentElement.classList[2] == "card_not_present"
    )
  } )
  
  comprasUltimoMes
  
  // TODO: Separar "card_present" e "card_not_present:
  // Filtrar:
  /*
  exibir:
  card_not_present
  card_present
  
  não exibir:
  class="event-card event bill_flow_paid"
  bill_flow_on_one_day_to_due_date
  bill_flow_paid
  payment
  */

  // Soma de todas as compras do último mês:
  const convertendoParaNumero = (numString) => {
    return Number(numString.replace(/,/g, '.').replace(/[^0-9.-]+/g,""))
  }
  
  let reducer = (accumulator, div) => accumulator + convertendoParaNumero(div.parentElement.children[3].innerText);
  let somaComprasUltimoMes = comprasUltimoMes.reduce(reducer, 0)
let stringSomaUltimoMes = "R$ " + somaComprasUltimoMes.toFixed(2).replace(".", ',')
stringSomaUltimoMes

// DOM:

const toolbar = document.querySelector(".toolbar");

toolbar.innerHTML += `<div style="margin-top: 15px; font-size: 1.500rem; line-height: .7rem; color: rgb(255,255,255);">${ultimoMesNome}: ${stringSomaUltimoMes}</div>`