import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';


@Component({
  selector: 'app-loginfroms',
  templateUrl: './loginfroms.component.html',
  styleUrls: ['./loginfroms.component.css']
})
export class LoginfromsComponent implements OnInit {
  userdata=new FormGroup({
    name : new FormControl(''),
    Email :new FormControl(''),
    Password :new FormControl(''),
    date :new FormControl(''),
    phonenumber :new FormControl(''),
    landline_number : new FormControl(''),
    gender : new FormControl(''),
    contactby:new FormControl(''),

  });
  tabledata:any=[];
  a:any='hello';
    


  constructor(private rounter:ActivatedRoute, private route: Router ) {
       }

  ngOnInit(): void {}
   /* this.rounter.queryParams.subscribe(params=>{
      this.userdata = params['userdata'];
    });
    
  }*/

  submit(){
    let data:any=this.userdata.value;
    console.log(this.userdata.value);
    this.tabledata.push(this.userdata.value)
    this.route.navigate(['./data'],{
    queryParams:{data:JSON.stringify(data)}

    })

  }
}
