export default class BaseModel {

    constructor({id, element}) {
        this.id = id;
        this.element = element;

        if (isset(element)) {
            this.element.removeClass('markup');
        }
    }

    showElement() {
        this.element.slideDown();
    }

    hideElement(callback = null) {
        if (!this.element) return;
        this.element.slideUp(function () {
            if (callback !== null) callback();
        });
    }

    removeElement(callback = null) {
        let model = this;

        this.hideElement(function () {
            model.element.remove();

            if (callback !== null) callback();
        });
    }

    markAsSelected() {
        this.element.addClass('selected');
    }

    unmarkAsSelected() {
        this.element.removeClass('selected');
    }

    updateData(newData) {
        Object.assign(this, newData);
    }

}
