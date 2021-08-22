import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
vehicle: Vehicle = new Vehicle();
fuels = [
  'DIESEL','PETROL','CNG'
]
  constructor(private vehicleService: VehicleService, private router: Router) { }

  ngOnInit(): void {
  }
  saveVehicle(){
     this.vehicleService.addVehicle(this.vehicle).subscribe(data => {

        this.goToVehicleList();
     }),
     error => console.log(error);

  }
  goToVehicleList(){
    this.router.navigate(['/vehicles']);
  }
onSubmit(){
this.saveVehicle();
}
}
