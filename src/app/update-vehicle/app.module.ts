import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { ListVehicleComponent } from './list-vehicle/list-vehicle.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListVehicleComponent,
    AddVehicleComponent,
    UpdateVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
