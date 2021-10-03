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

  constructor(private api: ApiService) { }

  refreshList = () => {
    this.list = new Array();

    this.api.get(this.path)
      .toPromise()
      .then(res => this.list = res as Building[]);
  }
}
