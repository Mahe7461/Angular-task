import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  
  ngOnInit(): void {
  }
  movies=[{title:'test'}]

  constructor(private api:MovieService) {
    this.getMovies();
   }
  getMovies = ()=>{
    this.api.getNames().subscribe(
      data =>{
        this.movies=data;
      },
      error => {
        console.log(error);
      }
      
    )
  }

}
