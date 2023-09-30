function attachGradientEvents() {

    // targets
    const gradientBox = document.querySelector('#gradient');
    const result = document.querySelector('#result');
    let elementWidth = gradientBox.offsetWidth;


    gradientBox.addEventListener('mousemove', function (e) {
        let currentOffset = e.offsetX;

        let output = `${Math.floor((currentOffset / elementWidth) * 100)}%`;

        result.textContent = output;
    });

}