import BaseModel from "../baseClasses/baseModel";

export default class Document extends BaseModel {

    constructor(params) {
        super(params);

        this.showDocumentContainer = null;
        this.tableRow = null;

        super.updateData(params);
    }
}
