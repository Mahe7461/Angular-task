import { Component } from '@angular/core';
import{ Router} from '@angular/router';

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
  constructor(private rounter: Router ){}
  onBack():void{
    this.rounter.navigate(['/loginfroms']);
  }
  }


