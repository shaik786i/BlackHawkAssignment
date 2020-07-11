import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string;
  passWord:string;
  // count:number=0;
  message:string;
  captchaEndpoint;
  count;
  constructor(private _myService: MyserviceService) { }
  
  ngOnInit() {
    this.captchaEndpoint = "./"
    this.count= this._myService.counter;
  }
  validateAndSignIn(){
    this.message = null;
    let response =this._myService.validatePassword(this.passWord);
    if(response)
      this.message ="successfully loggin in"
    if(this._myService.counter > 3)
      this.message = "sorry user is blocked"
  }

  checkCount(){
    return this._myService.counter >3;
  }

  resolved(captchaResponse: string) {
    
}
}
