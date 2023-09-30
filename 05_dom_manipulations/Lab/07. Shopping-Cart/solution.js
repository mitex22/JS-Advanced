function solve() {

	// targets
	const buttons = document.querySelectorAll('button.add-product');
	const resultArea = document.querySelector('textarea');
	const checkoutBtn = document.querySelector('button.checkout');

	let resultObject = {};
	let resultArray = [];
	let resultSum = 0;

	for (const button of buttons) {
		button.addEventListener('click', function (e) {
			let productContainer = e.target.parentNode.parentNode;

			let productName = productContainer.querySelector('.product-title').textContent;

			let productPrice = Number(productContainer.querySelector('.product-line-price').textContent);

			resultArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`

			if (!resultObject.hasOwnProperty(productName)) {
				resultObject[productName] = productPrice;
			} else {
				resultObject[productName] += productPrice;
			}
		});
	}

	checkoutBtn.addEventListener('click', function () {

		disableButtons();

		for (const product in resultObject) {
			if (Object.hasOwnProperty.call(resultObject, product)) {
				resultArray.push(product);
				resultSum += resultObject[product];
			}
		}

		resultArea.value += `You bought ${resultArray.join(', ')} for ${resultSum.toFixed(2)}.`
	});

	function disableButtons() {
		let buttons = Array.from(document.querySelectorAll('button'));
		buttons.forEach(button => button.disabled = true);
	}
}