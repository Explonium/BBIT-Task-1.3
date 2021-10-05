import { Injectable } from '@angular/core';
import { Building } from './models/building.model';
import { ApiService } from './api.service';
import { Form } from './models/form.model';
import { BuildingForm } from './models/building-form.model';
import { FormInput } from './models/input.model';

@Injectable({
  providedIn: 'root'
})
export class BuildingFormService {

  readonly path: string = "Buildings";
  list: Building[] = new Array();
  formInfo: BuildingForm = new BuildingForm();
  subscriber: () => void;

  constructor(private api: ApiService) { }

  getBuildingFormDetails = () => {
    return this.formInfo;
  }

  refreshList = () => {
    return this.api.get(this.path)
      .toPromise()
      .then(res => {
        this.list = res as Building[];
      });
  }
}
