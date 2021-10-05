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
    return this.http.get(`${this.baseUrl}/${data.data.path}`);
  }

  getModelById(data: Form){
    let path = data.data.path;
    let id = data.model[data.data.idFieldName];
    return this.http.get(`${this.baseUrl}/${path}/${id}`);
  }

  post(formData: any, path: string = "") {
    return this.http.post(`${this.baseUrl}/${path}`, formData);
  }

  postModel(data: Form) {
    return this.http.post(`${this.baseUrl}/${data.data.path}`, data.model);
  }

  put(id: string, formData: any, path: string = "") {
    return this.http.put(`${this.baseUrl}/${path}/${id}`, formData);
  }

  putModel(formData: Form) {
    let path = formData.data.path;
    let id = formData.model[formData.data.idFieldName];
    return this.http.put(`${this.baseUrl}/${path}/${id}`, formData.model);
  }

  delete(id: string, path: string = "") {
    return this.http.delete(`${this.baseUrl}/${path}/${id}`);
  }

  deleteModel(data: Form) {
    let path = data.data.path;
    let id = data.model[data.data.idFieldName];
    return this.http.delete(`${this.baseUrl}/${path}/${id}`);
  }
}
