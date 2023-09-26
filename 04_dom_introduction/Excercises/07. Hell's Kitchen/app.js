function solve() {
	document.querySelector('#btnSend').addEventListener('click', onClick);

	function onClick() {

		// targets

		// const data = eval(document.querySelector('#inputs textarea').value);
		data = eval('["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]');

		const outputRestaurant = document.querySelector('#outputs #bestRestaurant p');
		const outputWorkers = document.querySelector('#outputs #workers p');

		let restaurantsAndWorkers = {};

		for (const restaurantData of data) {
			// extract restaurant names
			let restaurantName = restaurantData.split(' - ').shift();

			// extract workers data
			let workersData = restaurantData.split(', ').map((workerData) => (workerData.replace(/\w+ - /gim, '')));
			let workersDataArray = [];
			
			for (const workerData of workersData) {
				let [workerName, workerSalary] = workerData.split(' ')
				workersDataArray.push( { workerName, workerSalary } );
			}

			if (!restaurantsAndWorkers.hasOwnProperty(restaurantName)) {
				restaurantsAndWorkers[restaurantName] = workersDataArray;
			} else {
				restaurantsAndWorkers[restaurantName] = restaurantsAndWorkers[restaurantName].concat(workersDataArray);
			}
		}

		let bestRestaurant = '';
		let bestAVGSalary = 0;
		
		for (const restaurant in restaurantsAndWorkers) {
			let workers = restaurantsAndWorkers[restaurant];

			let sumSalary = 0;

			for (const worker of workers) {
				let salary = Number(worker.workerSalary);

				sumSalary += salary;
			}

			let avgSalary = sumSalary / workers.length;

			if (bestAVGSalary < avgSalary) {
				bestAVGSalary = avgSalary;
				bestRestaurant = restaurant;
			}
		}

		let sortedArr = restaurantsAndWorkers[bestRestaurant].sort((a, b) => (Number(b.workerSalary) - Number(a.workerSalary)));

		let restaurantOutput = `Name: ${bestRestaurant} Average Salary: ${(Math.round(bestAVGSalary * 100) / 100).toFixed(2)} Best Salary: ${(Math.round(sortedArr[0].workerSalary * 100) / 100).toFixed(2)}`;

		let workersOutputArray = [];

		for (const obj of sortedArr) {
			workersOutputArray.push(`Name: ${obj.workerName} With Salary: ${obj.workerSalary}`);
		}

		let workersOutput = workersOutputArray.join(' ');

		outputRestaurant.textContent = restaurantOutput;
		outputWorkers.textContent = workersOutput;
	}
}