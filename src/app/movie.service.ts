import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseurl = "http://127.0.0.1:8000"
  httpHeaders = new HttpHeaders({'Content-type': 'application/jon'})
  constructor(private http: HttpClient) { }
   getNames(): Observable<any>{
     return this.http.get(this.baseurl + '/movies/', {headers:this.httpHeaders});
   
    }
    
  } 

