let cardWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function(e) {
	if(e.target.hasAttribute('data-cart')){
		let card = e.target.closest('.card')

		let productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			itemsInBox: card.querySelector('[data-items-in-box]').innerText,
			priceWieght: card.querySelector('.price__weight').innerText,
			priceCurrency: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		}

		let itemInCard = cardWrapper.querySelector(`[data-id="${productInfo.id}"]`)
		if(itemInCard){
			let counterElement = itemInCard.querySelector('[data-counter]');
			 counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {
let cardItemHtml = `
<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInBox}. / ${productInfo.priceWieght}.</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.priceCurrency} ₽</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>

		`
		cardWrapper.insertAdjacentHTML('beforeend', cardItemHtml);
		
		}
		card.querySelector('[data-counter]').innerText = '1';
		toggleCart();
		calcPrice()
		
	}
})