function notify(message) {

	// targets
	const notificationDiv = document.querySelector('#notification');

	let notifTextNode = document.createTextNode(message);
	notificationDiv.appendChild(notifTextNode);
	notificationDiv.style.display = 'block';

	notificationDiv.addEventListener('click', function (e) {
		e.stopPropagation();
		e.target.style.display = 'none';
		notifTextNode.remove();
	});
}