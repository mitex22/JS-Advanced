function attachEventsListeners() {

    // targets
    const daysField = document.querySelector('input#days');
    const daysBtn = document.querySelector('input#daysBtn');
    const hoursField = document.querySelector('input#hours');
    const hoursBtn = document.querySelector('input#hoursBtn');
    const minutesField = document.querySelector('input#minutes');
    const minutesBtn = document.querySelector('input#minutesBtn');
    const secondsField = document.querySelector('input#seconds');
    const secondsBtn = document.querySelector('input#secondsBtn');

    daysBtn.addEventListener('click', function convertDays() {
        let days = Number(daysField.value);
        
        hoursField.value = days * 24;
        minutesField.value = days * 24 * 60;
        secondsField.value = days * 24 * 60 * 60;
    });
    
    hoursBtn.addEventListener('click', function convertHours() {
        let hours = Number(hoursField.value);
        
        daysField.value = hours / 24;
        minutesField.value = hours * 60;
        secondsField.value = hours * 60 * 60;
    });

    minutesBtn.addEventListener('click', function convertMinutes() {
        let minutes = Number(minutesField.value);
        
        daysField.value = minutes / 60 / 24;
        hoursField.value = minutes / 60;
        secondsField.value = minutes * 60;
    });

    secondsBtn.addEventListener('click', function convertSeconds() {
        let seconds = Number(secondsField.value);
        
        daysField.value = seconds / 60 / 60 / 24;
        hoursField.value = seconds / 60 / 60;
        minutesField.value = seconds / 60;
    });
}