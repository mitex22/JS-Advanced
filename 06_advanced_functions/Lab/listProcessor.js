function listProcessor(commandsArray) {
    let innerArray = [];

    for (const command of commandsArray) {

        if (command !== 'print') {
            let [action, str] = command.split(' ');

            if (action === 'add') {
                innerArray.push(str);
            } else if (action === 'remove') {
                // REMOVE ALL OCCURENCIES OF ITEM IN AN ARRAY
                const newArray = innerArray.filter(element => element !== str);
                innerArray = newArray;
            }
        } else if (command === 'print') {
            console.log(innerArray.join(','));
        }
    }
}

listProcessor( [ 'add hello', 'add again', 'remove hello', 'add again', 'print' ] );
listProcessor( [ 'add pesho', 'add george', 'add peter', 'remove peter','print' ] );