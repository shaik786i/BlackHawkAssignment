import { FlightsModule } from './flights.module';
import { DetailsComponent } from './details/details.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //here i wil tell path name and which comp to lead
  {path:'details',component: DetailsComponent },  
  {path:'',redirectTo:'details'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
