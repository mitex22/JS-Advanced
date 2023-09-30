function solve() {

	// targets
	const tableBody = document.querySelector('tbody');
	const inputArea = document.querySelector('h1 + textarea');
	const outputArea = document.querySelector('div + textarea');
	const buttons = document.querySelectorAll('button');

	for (const button of buttons) {
		if (button.textContent === 'Generate') {
			button.addEventListener('click', addItem);
		} else if (button.textContent === 'Buy') {
			button.addEventListener('click', buyItems);
		}
	}

	function addItem(e) {
		let items = JSON.parse(inputArea.value);

		for (const item of items) {
			let productName = item.name;
			let productPrice = Number(item.price);
			let productDecFactor = Number(item.decFactor);
			let productImg = item.img;

			let newTr = document.createElement('tr');

			let imgTd = document.createElement('td');
			let img = document.createElement('img');
			img.setAttribute('src', productImg);
			imgTd.appendChild(img);
			newTr.appendChild(imgTd);

			let nameTd = document.createElement('td');
			let nameP = document.createElement('p');
			let namePtextContent = document.createTextNode(productName);
			nameP.appendChild(namePtextContent);
			nameTd.appendChild(nameP);
			newTr.appendChild(nameTd);

			let priceTd = document.createElement('td');
			let priceP = document.createElement('p');
			let pricePtextContent = document.createTextNode(productPrice);
			priceP.appendChild(pricePtextContent);
			priceTd.appendChild(priceP);
			newTr.appendChild(priceTd);

			let decFactorTd = document.createElement('td');
			let decFactorP = document.createElement('p');
			let decFactorPtextContent = document.createTextNode(productDecFactor);
			decFactorP.appendChild(decFactorPtextContent);
			decFactorTd.appendChild(decFactorP);
			newTr.appendChild(decFactorTd);

			let checkBoxTd = document.createElement('td');
			let checkBox = document.createElement('input');
			checkBox.setAttribute('type', 'checkbox');
			checkBoxTd.appendChild(checkBox);
			newTr.appendChild(checkBoxTd);

			// append TR
			tableBody.appendChild(newTr);
		}
	}

	function buyItems(e) {
		let checkboxes = document.querySelectorAll('input[type="checkbox"]');

		// to dispaly arrays
		let productNamesArray = [];
		let priceSum = 0;
		let decFactorArray = [];

		for (const checkbox of checkboxes) {
			if (checkbox.checked) {
				let tr = checkbox.parentNode.parentNode;
				let currProdName = tr.querySelectorAll('td')[1].querySelector('p').textContent;
				let currProdPrice = tr.querySelectorAll('td')[2].querySelector('p').textContent;
				let currProdDecFactor = tr.querySelectorAll('td')[3].querySelector('p').textContent;

				if (!productNamesArray.includes(currProdName)) {
					productNamesArray.push(currProdName);
				}

				priceSum += Number(currProdPrice);

				decFactorArray.push(Number(currProdDecFactor));
			}
		}

		outputArea.value += `Bought furniture: ${productNamesArray. join(', ')}\n`;
		outputArea.value += `Total price: ${(Math.round(priceSum * 100) / 100).toFixed(2)}\n`;
		outputArea.value += `Average decoration factor: ${decFactorArray.reduce((a, b) => a + b, 0) / decFactorArray.length}`;
	}
}