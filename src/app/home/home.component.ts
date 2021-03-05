import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() userdata:any=[];
 
  constructor() { }
  con(){
    console.log("pujujkkjhnjkgjhfhgdbnchgdfhfy")
  }
  show(){
    this.userdata.push()
  }

  ngOnInit(): void {
  }
  }



