import BaseModel from "../baseClasses/baseModel";

export default class Quote extends BaseModel {
    constructor(params) {
        super(params);
        this.element = null;
        this.updateData(params);
    }
}
