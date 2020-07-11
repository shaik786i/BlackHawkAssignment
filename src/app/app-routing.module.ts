import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //here i wil tell path name and which comp to lead
  {path:'flights', loadChildren :()=>import('./flights/flights.module').then(m=>m.FlightsModule)},
  {path:'',redirectTo:'flights',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
