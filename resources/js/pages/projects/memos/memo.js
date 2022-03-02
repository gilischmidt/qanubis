import BaseModel from "../baseClasses/baseModel";

export default class Memo extends BaseModel {
    constructor(params) {
        super(params);

        this.tableRow = null;

        Object.assign(this, params);
    }
}
