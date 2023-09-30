function encodeAndDecodeMessages() {

    // targets
    const inputTextArea = document.querySelectorAll('textarea')[0];
    const outputTextArea = document.querySelectorAll('textarea')[1];

    const sendEncodedBtn = document.querySelectorAll('button')[0];
    const showDecodedBtn = document.querySelectorAll('button')[1];

    sendEncodedBtn.addEventListener('click', sendEncodedMsg);
    showDecodedBtn.addEventListener('click', showDecodedMsg);

    function sendEncodedMsg(e) {
        let msg = inputTextArea.value;

        msg = Array.from(msg)
        .map((char) => {
            let currCharCode = char.charCodeAt(0);
            let decodedCharcode = currCharCode + 1;

            return String.fromCharCode(decodedCharcode);
        })
        .join('');

        outputTextArea.value = msg;
        inputTextArea.value = '';
    }

    function showDecodedMsg(e) {
        let msg = outputTextArea.value;

        msg = Array.from(msg)
        .map((char) => {
            let currCharCode = char.charCodeAt(0);
            let decodedCharcode = currCharCode - 1;

            return String.fromCharCode(decodedCharcode);
        })
        .join('');

        outputTextArea.value = msg;
    }
}