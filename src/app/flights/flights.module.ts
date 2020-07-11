import { FlightRoutingModule } from './flight-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    FlightRoutingModule

  ]
})
export class FlightsModule { }
