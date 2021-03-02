import { Component } from '@angular/core';

import {MovieService} from "../app/movie.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieService]
})
export class AppComponent {
  title = 'Movietime';
  readme(){
    console.log('click button')
  }
  intro="Welcome to movietime"
  infoM1:any[]=[];
  infoM2:any[]=[];
  infoM3:any[]=[];
  getinfomi1(){
    this.infoM1=this.rser.getinfo1()
  }
  getinfomi2(){
    this.infoM2=this.rser.getinfo1()
  }
  getinfomi3(){
    this.infoM3=this.rser.getinfo1()
  }
  constructor(private rser: MovieService){}
  }


