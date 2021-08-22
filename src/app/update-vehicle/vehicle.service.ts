import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private base_url = "http://localhost:8080/api/v1/vehicles";
  constructor(private httpClient: HttpClient) { }
  getVehiclesList(): Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(`${this.base_url}`);
  }
  addVehicle(vehicle: Vehicle): Observable<Object>{
    return this.httpClient.post(`${this.base_url}`, vehicle);
  }
  getVehicleById(id: number): Observable<Vehicle>{
    return this.httpClient.get<Vehicle>(`${this.base_url}/${id}`);
  }
  updateVehicle(id: number, vehicle: Vehicle): Observable<Object>{
    return this.httpClient.put(`${this.base_url}/${id}`, vehicle);
  }
  deleteVehicle(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.base_url}/${id}`);
  }
}
