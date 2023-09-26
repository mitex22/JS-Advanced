function solve() {
	document.querySelector('#searchBtn').addEventListener('click', onClick);

	function onClick() {

		// targets
		const trs = Array.from(document.querySelectorAll('table.container tbody tr'));
		const serachText = document.querySelector('#searchField').value.toLowerCase();

		trs.forEach((tr) => {
			tr.classList.remove('select');
			const tds = Array.from(tr.querySelectorAll('td'));
			tds.forEach((td) => {
				let tdText = td.textContent.toLowerCase();
				if (tdText.includes(serachText) && serachText !== '') {
					tr.classList.add('select');
				}
			});
		});

		document.querySelector('#searchField').value = '';
	}
}