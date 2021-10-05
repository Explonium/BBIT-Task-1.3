import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApartmentFormService } from './apartment-form.service';
import { ApiService } from './api.service';
import { Apartment } from './models/apartment.model';
import { FormSelect } from './models/select.model';
import { TenantForm } from './models/tenant-form.model';
import { Tenant } from './models/tenant.model';

@Injectable({
  providedIn: 'root'
})
export class TenantFormService {

  readonly path: string = "Tenants";
  formInfo: TenantForm = new TenantForm();
  list: Tenant[] = new Array();

  constructor(private api: ApiService, private apartments: ApartmentFormService) { 
    let apartmentInput = this.formInfo.inputs.find(item => item.name === 'apartmentId') as FormSelect;

    apartmentInput.getList = () => {
      return this.apartments.list;
    };
    apartmentInput.getObjectById = (id: string) => {
      let apartment = this.apartments.list.find(item => item.guid === id);
      return apartment ? apartment : new Apartment();
    };
  }

  getTenantFormDetails = () => {
    return this.formInfo;
  }

  newTenant = () => {
    return new Tenant();
  }

  refreshList() {
    this.api.get(this.path)
      .toPromise()
      .then(res => {
        this.list = res as Tenant[];
        this.apartments.refreshList();
      });
  }

  refreshListByApartment(id: string) {
    this.api.get(`${this.apartments.formInfo.path}/${id}/${this.formInfo.path}`)
      .toPromise()
      .then(res => {
        this.list = res as Tenant[];
        this.apartments.refreshList();
      });
  }
}
