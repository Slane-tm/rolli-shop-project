function calcPrice(){
let totalPrice = 0;
let totalPriceEl = document.querySelector('.total-price');
let deliveryCost = document.querySelector('.delivery-cost');
console.log(deliveryCost);

    document.querySelectorAll('.cart-item').forEach((item) =>{

    let amountEl = item.querySelector('[data-counter]')
    let priceEl = item.querySelector('.price__currency')
    let currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

 	totalPrice += currentPrice
	})

totalPriceEl.innerText = totalPrice;
if(totalPrice >= 600){
	deliveryCost.classList.add('free')
	deliveryCost.innerText = 'Бесплатно'
} else {
	deliveryCost.classList.remove('free')
	deliveryCost.innerText = '250 рублей'
}
}