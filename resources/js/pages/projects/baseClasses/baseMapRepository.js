export default class BaseMapRepository {
    constructor() {
        this.items = new Map();
    }

    add(item) {
        return this.items.set(item.id.toString(), item);
    }

    get(id) {
        return this.items.get(id.toString());
    }

    remove(item) {
        return this.items.delete(item.id.toString());
    }

    all() {
        return [...this.items.values()];
    }

    size() {
        return this.items.size;
    }

    forEach(fn) {
        return this.items.forEach(fn);
    }

    clear() {
        return this.items.clear();
    }

    ids() {
        return [...this.items.keys()];
    }
}
