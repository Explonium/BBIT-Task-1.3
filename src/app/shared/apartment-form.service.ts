import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BuildingFormService } from './building-form.service';
import { ApartmentForm } from './models/apartment-form.model';
import { Apartment } from './models/apartment.model';
import { BuildingForm } from './models/building-form.model';
import { Building } from './models/building.model';
import { FormSelect } from './models/select.model';

@Injectable({
  providedIn: 'root'
})
export class ApartmentFormService {

  readonly path: string = "Apartments";
  formInfo: ApartmentForm = new ApartmentForm();
  list: Apartment[] = new Array();

  constructor(private api: ApiService, private buildings: BuildingFormService) {
    let buildingInput = this.formInfo.inputs.find(item => item.name === 'buildingId') as FormSelect;

    buildingInput.getList = () => {
      return this.buildings.list;
    };
    buildingInput.getObjectById = (id: string) => {
      let building = this.buildings.list.find(item => item.id === id);
      return building ? building : new Building();
    };
  }

  getApartmentFormDetails = () => {
    return this.formInfo;
  }

  newApartment = () => {
    return new Apartment();
  }

  refreshList = () => {
    this.api.get(this.path)
      .toPromise()
      .then(res => {
        this.list = res as Apartment[];
        this.buildings.refreshList();
      });
  }

  refreshListByBuilding = (id: string) => {
    this.api.get(`${this.buildings.formInfo.path}/${id}/${this.formInfo.path}`)
      .toPromise()
      .then(res => {
        this.list = res as Apartment[];
        this.buildings.refreshList();
      });
  }
}
