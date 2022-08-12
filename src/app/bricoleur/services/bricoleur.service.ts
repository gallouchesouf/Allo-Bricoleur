import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BricoleurService {

  API_BASE_URL = "http://localhost:8181";

  constructor(public httpClient:HttpClient) { }

  get(path:string) {
    return this.httpClient.get(this.API_BASE_URL + path);
  }
  save(data:any, config:any) {
    return this.httpClient.post("http://localhost:8181/bricoleurs/addBricoleur", data, config);
  }
}
