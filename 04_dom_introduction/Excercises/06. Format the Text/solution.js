function solve() {

    // targets 
    const textToFormat = document.querySelector('#input').value;
    const output = document.querySelector('#output');

    let sentencesArray = textToFormat
    .split('.')
    .filter((sentence) => (sentence.length > 0 && sentence != ' '))
    .map((sentence) => (sentence.trim()))
    .map((sentence) => (sentence += '.'));

    let paragraphsCount = Math.ceil(sentencesArray.length / 3);

    for (let i = 0; i < paragraphsCount; i++) {

        if (sentencesArray[0] && sentencesArray[1] && sentencesArray[2]) {

            let para = document.createElement('p');
            let paraContent1 = document
                .createTextNode(`${sentencesArray.shift()} ${sentencesArray.shift()} ${sentencesArray.shift()}`);
            para.appendChild(paraContent1);
            output.appendChild(para);
            
        } else if (sentencesArray[0] && sentencesArray[1]) {

            let para = document.createElement('p');
            let paraContent1 = document
                .createTextNode(`${sentencesArray.shift()} ${sentencesArray.shift()}`);
            para.appendChild(paraContent1);
            output.appendChild(para);
            
        } else if (sentencesArray[0]) {

            let para = document.createElement('p');
            let paraContent1 = document
                .createTextNode(`${sentencesArray.shift()}`);
            para.appendChild(paraContent1);
            output.appendChild(para);
            
        }
    }
}