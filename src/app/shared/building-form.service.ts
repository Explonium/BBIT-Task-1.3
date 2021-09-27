import { Injectable } from '@angular/core';
import { Building } from './models/building.model';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuildingFormService {

  readonly baseUrl: string = "https://localhost:44357/api/Buildings";
  list: Building[] = new Array();

  constructor(private http: HttpClient) { }

  postBuilding(formData: Building) {
    return this.http.post(this.baseUrl, formData);
  }

  putBuilding(formData: Building){
    return this.http.put(`${this.baseUrl}/${formData.id}`, formData);
  }

  deleteBuilding(formData: Building){
    return this.http.delete(`${this.baseUrl}/${formData.id}`);
  }

  refreshList() {
    this.http.get(this.baseUrl)
      .toPromise()
      .then(res => this.list = res as Building[]);
  }
}
