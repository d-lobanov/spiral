class Position {
    constructor(row, column) {
        this.row = row;
        this.column = column;
    }
}

/**
 * Generates elements for a square's row for top edge.
 *
 * @param startAt
 * @param size
 */
function* topEdge(startAt, size) {
    let finishAt = size - 1;

    if (startAt === finishAt) {
        yield (new Position(startAt, finishAt));

        return;
    }

    for (let i = startAt; i < finishAt; i++) {
        yield (new Position(startAt, i));
    }
}

/**
 * Generates elements for a square's column for right edge.
 *
 * @param startAt
 * @param size
 */
function* rightEdge(startAt, size) {
    let finishAt = size - 1;

    for (let i = startAt; i < finishAt; i++) {
        yield (new Position(i, finishAt));
    }
}

/**
 * Generates elements for a square's row for bottom edge.
 *
 * @param startAt
 * @param size
 */
function* bottomEdge(startAt, size) {
    let finishAt = size - 1;

    for (let i = finishAt; i > startAt; i--) {
        yield (new Position(finishAt, i));
    }
}

/**
 * Generates elements for a square's row for left edge.
 *
 * @param startAt
 * @param size
 */
function* leftEdge(startAt, size) {
    let finishAt = size - 1;

    for (let i = finishAt; i > startAt; i--) {
        yield (new Position(i, startAt));
    }
}

function* edgesOfSquare(size, offset) {
    yield * topEdge(offset, size);
    yield * rightEdge(offset, size);
    yield * bottomEdge(offset, size);
    yield * leftEdge(offset, size);
}
