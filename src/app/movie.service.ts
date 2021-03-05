import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  info1:any[]=["rajan",546]
  info2:any[]=["Ram",432]
  info3:any[]=["Guna",123]
  getinfo1(): any[]{
    return this.info1
  }
  getinfo2(): any[]{
    return this.info2
  }
  getinfo3(): any[]{
    return this.info3
  }
  private _url: string = ''
  
  constructor() { }
 

  getNames(){
   
    }
    
  } 

