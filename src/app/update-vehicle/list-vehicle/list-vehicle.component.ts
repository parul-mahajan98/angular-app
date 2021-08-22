import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Vehicle} from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.css']
})
export class ListVehicleComponent implements OnInit {
  vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService, private router: Router) { }

  ngOnInit(): void {
    this.getVehicles();
  }
  private getVehicles(){
    this.vehicleService.getVehiclesList().subscribe(data => {
      this.vehicles = data;
    })
  }
  updateVehicle(id: number){
    this.router.navigate(['update',id]);
  }
  deleteVehicle(id: number){
    this.vehicleService.deleteVehicle(id).subscribe(data => {
      this.getVehicles();
    })
  }


}
