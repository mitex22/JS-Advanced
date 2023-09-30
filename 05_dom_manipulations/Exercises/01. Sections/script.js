function create(words) {

	// targets
	const contentDiv = document.querySelector('#content');

	for (const word of words) {
		let newDiv = document.createElement('div');

		newDiv.addEventListener('click', function (e) {
			newP.style.display = '';
		});

		let newP = document.createElement('p');
		newP.style.display = 'none';
		let newPtextContnet = document.createTextNode(word);
		newP.appendChild(newPtextContnet);

		newDiv.appendChild(newP)

		contentDiv.appendChild(newDiv);
	}
}