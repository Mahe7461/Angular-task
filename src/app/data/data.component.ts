import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginfromsComponent} from 'src/app/loginfroms/loginfroms.component';
import { TemplateRef } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {data} from './data.model';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  
  listdata: any;
  
  

  
  constructor(private rounter:ActivatedRoute, private route: Router) {
    this.listdata=[];
    
        }
      
    data:any;
    values:any=[];
    value:any=[];
  

  ngOnInit(): void {
    this.rounter.queryParams.subscribe((params)=>{
      console.log(params);
      this.data=JSON.parse(params.data);
      this.values.push(this.data)
      
    
      
      })
    
    
  }
  save(){
    
    
    
  }

}
