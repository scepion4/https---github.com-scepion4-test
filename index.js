let price = document.querySelector('#price')
let howMuch = document.querySelector('#howMuch')
let result = document.querySelector('.result')
let button = document.querySelector('button')

button.addEventListener('click', counter)

function counter() {
   let priceValue = price.value
   let howMuchValue = howMuch.value
   if(howMuchValue<0){
      result.innerHTML = 'enter the corect value'
   }else if(priceValue<0){
      result.innerHTML = 'enter the corect value'
   }else{
      let sum =  howMuchValue/priceValue 
      result.innerHTML = `You can buy ${sum} BTC`
   }
   
}