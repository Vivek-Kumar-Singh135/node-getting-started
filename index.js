class SortedList {
    constructor() {
        this.items = []
        this.length = 0;
    }
    add(item) {
        this.items.push(item)
        this.items.sort((a, b) => { return a - b });
        this.length = this.length + 1;
    }
    get(idx) {
        if (idx < 0 || idx > this.length - 1) throw new Error('OutOfBounds');
        else return this.items[idx];
    }
    max() {
        if (this.length === 0) throw new Error('EmptySortedList')
        else {
            let max = Math.max(...this.items);
            return max;
        }
    }
    min() {
        if (this.length === 0) throw new Error('EmptySortedList')
        else {
            let min = Math.min(...this.items);
            return min;
        }
    }
    avg() {
        if (this.length === 0) throw new Error('EmptySortedList')
        else {
            let val = this.items.reduce((item, total) => { return item + total }, 0);
            return val / this.length;
        }

    }

    sum() {
        let val = this.items.reduce((item, total) => { return item + total }, 0);
        return val;
    }

};

module.exports = SortedList;