import { Building } from "./building.model";
import { FormData } from "./form-data.model";
import { FormSelect } from "./select.model";

export class ApartmentForm extends FormData {
    path = "Apartments";
    listPath = "/apartments";
    detailsPath = "/apartment-details";

    inputs = [
        { type: "hidden", name: "guid", placeholder: "Apartment id" },
        { type: "number", name: "number", placeholder: "Number" },
        { type: "number", name: "floor", placeholder: "Floor" },
        { type: "number", name: "numberOfRooms", placeholder: "Rooms" },
        { type: "number", name: "numberOfTenants", placeholder: "Tenants" },
        { type: "number", name: "fullArea", placeholder: "Full area" },
        { type: "number", name: "livingSpace", placeholder: "Living space" },
        {
            type: "select", name: "buildingId", placeholder: "Building",
            getValue: (model: Building) => {
                return model.id;
            },
            getDisplayValue: (model: Building) => {
                return `${model.street} ${model.number}, ${model.city}, ${model.country}`;
            }
        } as FormSelect
    ];

    idFieldName = "guid";
    icon = "fas fa-key";
}
