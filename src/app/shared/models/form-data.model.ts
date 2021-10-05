import { FormInput } from "./input.model";

export class FormData {
    path: string;
    listPath: string;
    detailsPath: string;

    inputs: Array<FormInput>;
    idFieldName: string;
    icon: string;
}
