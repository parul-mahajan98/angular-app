import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { ListVehicleComponent } from './list-vehicle/list-vehicle.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';


const routes: Routes = [
  {path: 'vehicles', component: ListVehicleComponent},
  {path: 'add', component: AddVehicleComponent},
  {path: 'update/:id', component: UpdateVehicleComponent},
  {path: '', redirectTo: 'vehicles', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
