import { Apartment } from "./apartment.model";
import { FormData } from "./form-data.model";
import { FormSelect } from "./select.model";

export class TenantForm extends FormData {
    path = "Tenants";
    listPath = "/tenants";
    detailsPath = "/tenant-details";

    inputs = [
        { type: "text", name: "personalCode", placeholder: "Personal code" },
        { type: "text", name: "name", placeholder: "Name" },
        { type: "text", name: "dateOfBirth", placeholder: "Date of birth" },
        { type: "text", name: "phone", placeholder: "Phone" },
        { type: "text", name: "email", placeholder: "Email" },
        {
            type: "select", name: "apartmentId", placeholder: "Apartment",
            getValue: (model: Apartment) => {
                return model.guid;
            },
            getDisplayValue: (model: Apartment) => {
                return `Apartment ${model.number}`;
            }
        } as FormSelect
    ];

    idFieldName = "personalCode";
    icon = "fas fa-user";
}
