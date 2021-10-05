import { FormData } from "./form-data.model";

export class BuildingForm extends FormData {
    path = "Buildings";
    listPath = "/buildings";
    detailsPath = "/building-details";

    inputs = [
        { type: "hidden", name: "id", placeholder: "Building id" },
        { type: "text", name: "number", placeholder: "Building number" },
        { type: "text", name: "street", placeholder: "Street" },
        { type: "text", name: "city", placeholder: "City" },
        { type: "text", name: "country", placeholder: "Country" },
        { type: "text", name: "postalIndex", placeholder: "Postal index" }
    ];

    idFieldName = "id";
    icon = "far fa-building";
}