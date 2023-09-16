function addAndRemoveElements(commands) {
    let resultsArray = [];
    let digit = 0;

    let commandsMap = {
        add: (arr) => {
            digit++;
            arr.push(digit);
        },
        remove: (arr) => {
            digit++;
            if (arr.length > 0) {
                arr.pop();
            }
        }
    }

    for (const command of commands) {
        commandsMap[command](resultsArray);
    }

    if (resultsArray.length > 0) {
        console.log(resultsArray.join('\n'));
    } else {
        console.log('Empty');
    }
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);