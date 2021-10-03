import { FormData } from "./form-data.model";
import { FormInput } from "./input.model";

export class Form {
    path: string;
    inputs: FormInput[];
    idFieldName: string;

    edit: boolean;
    type: string;
    model: {[index: string]: any};
    icon: string;

    constructor(model: object = {}, data: FormData = new FormData()) {
        this.inputs = data.data as FormInput[];
        this.edit = true;
        this.path = data.path;
        this.idFieldName = data.idFieldName;
        this.model = model;
        this.icon = data.icon;
    }
}
