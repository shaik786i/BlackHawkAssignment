import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { DatePickerComponent } from './date-picker/date-picker.component';
import {MatCardModule} from '@angular/material/card';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    ExpansionPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule,
    MatNativeDateModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
