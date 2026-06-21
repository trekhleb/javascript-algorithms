import Comparator from '../../utils/comparator/Comparator';

export default class ArrayList {

    constructor(comparatorFunction) {
        this.comparator = new Comparator(comparatorFunction);
        this.container = [];
        this.size = 0;
    }

    prepend(value) {
        return this.insert(0, value);
    }

    append(value) {
        return this.insert(this.getSize(), value);
    }

    insert(index, value) {
        if (index < 0 || index > this.getSize()) {
            return false;
        }

        if (this.container.length === this.getSize()) {
            this.container.length = this.container.length * 2;
        }

        for (let i = this.getSize(); i > index; i--) {
            this.container[i] = this.container[i - 1];
        }

        this.container[index] = value;
        ++this.size;
        return true;
    }

    get(index) {
        return this.container[index];
    }

    delete(value) {
        const originSize = this.getSize();
        for (let i = 0; i < this.getSize(); i++) {
            if (this.comparator.equal(this.container[i], value)) {
                this.deleteAt(i);
            }
        }
        return originSize != this.getSize();
    }

    deleteAt(index) {
        const value = this.container[index];
        for (let i = index + 1; i < this.getSize(); i++) {
            this.container[i - 1] = this.container[i];
        }
        --this.size;
        return value;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.getSize() === 0;
    }

    reverse() {
        for (let i = 0; i < this.getSize() / 2; i++) {
            let backwardIndex = this.getSize() - 1 -  i;
            const temp = this.container[i];
            this.container[i] = this.container[backwardIndex];
            this.container[backwardIndex] = temp;
        }
    }

    toString(callback) {
        const list = [...this.container];
        list.length = this.getSize();
        return list.map(v => callback ? callback(v) : v).toString();
    }
}