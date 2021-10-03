import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Apartment } from './models/apartment.model';

@Injectable({
  providedIn: 'root'
})
export class ApartmentFormService {

  readonly path: string = "Apartments";
  list: Apartment[] = new Array();

  constructor(private api: ApiService) { }

  refreshList() {
    this.api.get(this.path)
      .toPromise()
      .then(res => this.list = res as Apartment[]);
  }
}
