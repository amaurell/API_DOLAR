fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta=>{
  return resposta.json()
}).then(corpo=>{
  console.log(corpo)//visualiza as outras opçoes da cotação do dolar
  document.getElementById("dolar").innerHTML=corpo.USDBRL.bid; 
  

})