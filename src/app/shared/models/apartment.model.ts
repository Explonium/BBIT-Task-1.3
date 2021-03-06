import { Building } from "./building.model";

export class Apartment {
    guid: string = '';
    number: number;
    floor: number;
    numberOfRooms: number;
    numberOfTenants: number;
    fullArea: number;
    livingSpace: number;
    buildingId: string = '';
    buildingsList: Building[];
}