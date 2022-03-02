import BaseModel from "../baseClasses/baseModel";

export default class Code extends BaseModel {
    constructor(params) {
        super(params);

        this.tableRow = null;

        super.updateData(params);
    }
}
