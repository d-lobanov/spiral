function getSpiralCollection(size) {
    let collection = new SpiralCollection(size);
    let numberOfSquares = Math.ceil(size / 2);
    let counter = 1;

    let add = (position) => {
        collection.add(position, counter++);
    };

    for (let index = 0; index < numberOfSquares; index++) {
        let sizeOfCurrentSquare = size - index;

        for (let position of topEdge(index, sizeOfCurrentSquare)) {
            add(position);
        }

        for (let position of rightEdge(index, sizeOfCurrentSquare)) {
            add(position);
        }

        for (let position of bottomEdge(index, sizeOfCurrentSquare)) {
            add(position);
        }

        for (let position of leftEdge(index, sizeOfCurrentSquare)) {
            add(position);
        }
    }

    return collection;
}

function run() {
    let size = parseInt($('#number').val());

    if (isNaN(size) || size > 25 || size < 1) {
        return showErrorMessage('Only integers between 1 and 25 are available');
    }

    let printer = new SpiralPrinter();

    printer.printCollection(getSpiralCollection(size));
}

function showErrorMessage(message) {
    alert(message);
}