import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tenant } from './models/tenant.model';

@Injectable({
  providedIn: 'root'
})
export class TenantFormService {

  readonly baseUrl: string = "https://localhost:44357/api/Buildings";
  list: Tenant[] = new Array();

  constructor(private http: HttpClient) { }

  postBuilding(formData: Tenant) {
    return this.http.post(this.baseUrl, formData);
  }

  putBuilding(formData: Tenant){
    return this.http.put(`${this.baseUrl}/${formData.personalCode}`, formData);
  }

  deleteBuilding(formData: Tenant){
    return this.http.delete(`${this.baseUrl}/${formData.personalCode}`);
  }

  refreshList() {
    this.http.get(this.baseUrl)
      .toPromise()
      .then(res => this.list = res as Tenant[]);
  }
}
