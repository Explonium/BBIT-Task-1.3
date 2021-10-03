import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Tenant } from './models/tenant.model';

@Injectable({
  providedIn: 'root'
})
export class TenantFormService {

  readonly path: string = "Tenants";
  list: Tenant[] = new Array();

  constructor(private api: ApiService) { }

  refreshList() {
    this.api.get(this.path)
      .toPromise()
      .then(res => this.list = res as Tenant[]);
  }
}
