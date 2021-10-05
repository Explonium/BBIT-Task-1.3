import { FormData } from "./form-data.model";
import { FormInput } from "./input.model";

export class Form {

    edit: boolean;
    type: string;
    model: {[index: string]: any};
    data: FormData;

    constructor(model: object = {}, data: FormData = new FormData()) {
        this.edit = true;
        this.model = model;
        this.data = data;
    }
}
