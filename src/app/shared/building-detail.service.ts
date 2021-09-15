import { Injectable } from '@angular/core';
import { BuildingDetail } from './building-detail.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BuildingDetailService {

  formData: BuildingDetail = new BuildingDetail();
  list: BuildingDetail[] = new Array();
  readonly baseUrl: string = "https://localhost:44357/api/Buildings";

  constructor(private http: HttpClient) { }

  postBuilding() {
    return this.http.post(this.baseUrl, this.formData);
  }

  putBuilding(id: string){
    var building = this.list.find(item => item.id == id);
    return this.http.post(this.baseUrl, building);
  }

  refreshList() {
    this.http.get(this.baseUrl)
      .toPromise()
      .then(res => this.list = res as BuildingDetail[]);
  }
}
