function getSpiralCollection(size) {
    let collection = new SpiralCollection(size);
    let numberOfSquares = Math.ceil(size / 2);
    let counter = 1;

    for (let offset = 0; offset < numberOfSquares; offset++) {
        let sizeOfCurrentSquare = size - offset;

        for (let position of edgesOfSquare(sizeOfCurrentSquare, offset)) {
            collection.add(position, counter++);
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