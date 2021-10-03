import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from './models/form.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly baseUrl: string = "https://localhost:44357/api";

  constructor(private http: HttpClient) { }

  get(path: string = "") {
    return this.http.get(`${this.baseUrl}/${path}`);
  }

  getModelList(data: Form) {
    return this.http.get(`${this.baseUrl}/${data.path}`);
  }

  post(formData: any, path: string = "") {
    return this.http.post(`${this.baseUrl}/${path}`, formData);
  }

  postModel(data: Form) {
    return this.http.post(`${this.baseUrl}/${data.path}`, data.model);
  }

  put(id: string, formData: any, path: string = "") {
    return this.http.put(`${this.baseUrl}/${path}/${id}`, formData);
  }

  putModel(data: Form) {
    let path = data.path;
    let id = data.model[data.idFieldName];
    debugger;
    return this.http.put(`${this.baseUrl}/${path}/${id}`, data.model);
  }

  delete(id: string, path: string = "") {
    return this.http.delete(`${this.baseUrl}/${path}/${id}`);
  }

  deleteModel(data: Form) {
    let path = data.path;
    let id = data.model[data.idFieldName];
    return this.http.delete(`${this.baseUrl}/${path}/${id}`);
  }
}
