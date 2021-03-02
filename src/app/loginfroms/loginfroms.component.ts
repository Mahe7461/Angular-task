import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';  
@Component({
  selector: 'app-loginfroms',
  templateUrl: './loginfroms.component.html',
  styleUrls: ['./loginfroms.component.css']
})
export class LoginfromsComponent implements OnInit {
  name = new FormControl('enter your name');
  Email = new FormControl('enter your email id');
  Password = new FormControl('');
  date = new FormControl(''); 
  phonenumber = new FormControl(''); 
  tag = new FormControl('');
  landline_number = new FormControl('');
  gender = new FormControl('');
  

  constructor() { }

  ngOnInit(): void {
  }

}
