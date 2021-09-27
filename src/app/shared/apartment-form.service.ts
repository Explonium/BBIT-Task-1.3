import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apartment } from './models/apartment.model';

@Injectable({
  providedIn: 'root'
})
export class ApartmentFormService {

  readonly baseUrl: string = "https://localhost:44357/api/Apartments";
  list: Apartment[] = new Array();

  constructor(private http: HttpClient) { }

  postApartment(formData: Apartment) {
    return this.http.post(this.baseUrl, formData);
  }

  putApartment(formData: Apartment){
    return this.http.put(`${this.baseUrl}/${formData.guid}`, formData);
  }

  deleteApartment(formData: Apartment){
    return this.http.delete(`${this.baseUrl}/${formData.guid}`);
  }

  refreshList() {
    this.http.get(this.baseUrl)
      .toPromise()
      .then(res => this.list = res as Apartment[]);
  }
}
