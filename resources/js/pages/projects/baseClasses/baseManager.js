export default class BaseManager {
    getObjectFromDataId(element) {
        if (this.repository !== undefined && this.repository !== null) {
            return this.repository.get(element.attr('data-id'));
        }
    }
}
