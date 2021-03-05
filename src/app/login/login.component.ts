import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any;
  password:any;


  constructor() { }

  ngOnInit(): void {
  }logInUser(){
    if(this.email =='admin@gmail.com' && this.password=='1234567890'){
      console.log('welcome to dashboard')
    }
    else{
      console.log('user unauthorized')
    }
  }
  

}
