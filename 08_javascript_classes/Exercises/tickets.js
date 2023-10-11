function tickets(ticketDescriptions, criterion) {
    
    let ticketsArray = [];

    class Ticket {
        constructor(d, p, s) {
            this.destination = d;
            this.price = p;
            this.status = s;
        }
    }

    for (const ticketDescription of ticketDescriptions) {
        // <destinationName>|<price>|<status>
        let [destination, price, status] = ticketDescription.split('|');
        price = Number(price);

        ticketsArray.push(new Ticket(destination, price, status));
    }

    if (criterion === 'destination') {
        ticketsArray.sort((a, b) => (a.destination.localeCompare(b.destination)))
    } else if (criterion === 'price') {
        ticketsArray.sort((a, b) => (a.price - b.price))
    } else {
        ticketsArray.sort((a, b) => (a.status.localeCompare(b.status)))
    }

    return ticketsArray;

}

tickets(
    [
        'Boston|126.20|departed',
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold'
    ],
    'price'
);