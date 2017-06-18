class SpiralPrinter {

    constructor() {
        this.mainDiv = $('.result');
    }

    printCollection(collection) {
        this.mainDiv.text('');

        for (let row of collection.getContent()) {
            for (let item of row) {
                let element = this.addElement(item.position, item.value);

                element.animate({opacity: 1}, 500);

                setTimeout(() => {
                    element.removeClass('gray-text');
                }, 700 + 4 * item.value);
            }
        }
    }

    addElement(position, value) {
        let row = this.getOrCreateRowIfNotExists(position.row);
        let element = $("<div>", {class: "element gray-text"});

        element
            .text(value)
            .css({opacity: 0})
            .appendTo(row);

        return element
    }

    /**
     * @param id
     * @returns {*}
     */
    getOrCreateRowIfNotExists(id) {
        let row = this.mainDiv.find(`#row-${id}`);

        if (row.length > 0) {
            return row;
        }

        return $("<div>", {id: `row-${id}`, class: "row"}).appendTo(this.mainDiv);
    }

}

class SpiralCollection {
    constructor(size = 0) {
        this.size = size;

        let _arr = new Array(size);

        for (let i = 0; i < size; i++) {
            _arr[i] = new Array(size);
        }

        this.getContent = () => {
            return _arr;
        };

        this.add = (position, value) => {
            _arr[position.row][position.column] = {position, value};
        }
    }
}
