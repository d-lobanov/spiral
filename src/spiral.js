class SpiralPrinter {

    constructor() {
        this.mainDiv = $('.result');
    }

    printCollection(collection) {
        this.mainDiv.text('');

        for (let row of collection.getContent()) {
            for (let item of row) {
                let element = this.addElement(item.position, item.value);

                if (collection.size <= 25) {
                    this.animateElement(element, item.value);
                }


            }
        }
    }

    animateElement(element, value) {
        element
            .addClass("gray-text")
            .css({opacity: 0})
            .animate({opacity: 1}, 1500);

        setTimeout(() => {
            element.removeClass('gray-text');
        }, 700 + 4 * value);
    }

    addElement(position, value) {
        let row = this.getOrCreateRowIfNotExists(position.row);
        let element = $("<div>", {class: "element"});

        element
            .text(value)
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
