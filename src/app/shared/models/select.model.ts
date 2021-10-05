import { FormInput } from "./input.model";

export class FormSelect extends FormInput {
    getList: () => Array<object>;
    getObjectById: (id: string) => object;
    getValue: (model: {[index: string]: any}) => string;
    getDisplayValue: (model: {[index: string]: any}) => string;
}
