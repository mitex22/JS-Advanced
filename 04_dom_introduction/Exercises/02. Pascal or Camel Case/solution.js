function solve() {

	// targets
	const textToConvert = document.querySelector('#text').value;
	const convention = document.querySelector('#naming-convention').value;
	const result = document.querySelector('#result');

	if (convention === "Camel Case") {
		result.textContent = convertToCamel(textToConvert);
	} else if (convention === "Pascal Case") {
		result.textContent = convertToPascal(textToConvert);
	} else {
		result.textContent = 'Error!';
	}

	function convertToCamel(text) {
		let textArray = text.split(' ').map((a) => (a.toLowerCase()));
		console.log(textArray);

		let output = textArray.shift();

		textArray = textArray.map(a => (a.charAt(0).toUpperCase() + a.slice(1)));
		output += textArray.join('');

		return output;
	}

	function convertToPascal(text) {
		let textArray = text.split(' ').map((a) => (a.toLowerCase()));
		console.log(textArray);

		let output = '';

		textArray = textArray.map(a => (a.charAt(0).toUpperCase() + a.slice(1)));
		output += textArray.join('');

		return output;
	}

}