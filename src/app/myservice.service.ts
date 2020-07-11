import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {  
  dummyUserName:string = "imran.shaik04";
  dummyPassword:string = "Shaik786i"
  counter=0;  
  constructor(private _http:HttpClient) { 
    
  }

  getStudents():Observable<any[]>{
    let url="../assets/students.json";
    return this._http.get<any>(url)
  }

  validatePassword(passWord:string){
    if(passWord == this.dummyPassword)
      return true;
    else{
      this.counter++;
      return false;
    }
  }
}
