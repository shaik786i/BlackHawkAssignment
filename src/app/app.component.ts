import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  values;
  displayedColumns = ['name','number']
  constructor(private ser:MyserviceService){     
    this.getStudents()   
  }
  getStudents(){
    this.ser.getStudents().subscribe(x=>{
      this.values=x
    })
  }

}
