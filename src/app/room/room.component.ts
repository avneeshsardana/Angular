
import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demoservice';
import {Observable} from 'rxjs';
import {Http, Response} from "@angular/http";
//import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {room} from './room';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
 foods:any;
 
 private gridapi;
 private gridColumnApi;
 private columnDefs;
 private sortingOrder;

public rowdata: any;


 formData: any = {
   name: '',
   dob: '',
   roomType: 'Conference',
   size: '',
 };
 powers = ['Conference','Lab','TA','Teaching']
  constructor(private  http:HttpClient, private router:Router) {
    this.columnDefs=[
      {
        headerName:"ID",
        field:"_id",
        width:150,
      },
      {
        headerName:"RoomID",
        field:"roomid",
        width:150,
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"Type",
        field:"type",
        width:150,
      },
      {
        headerName:"Capacity",
        field:"capacity",
        width:150,
      }
    ];
   
    
   }
   onGridReady(params){
    this.gridapi=params.api;
    this.gridColumnApi=params.columnApi;
    params.api.setRowData(this.rowdata);
  }
   
  ngOnInit() {

  }

result:Array<any>;

checkAvailability($event): void 
{
  $event.preventDefault();
 // this.router.navigate(['login']);
  this.http.post("http://localhost:3000/api/bookroom", this.formData).subscribe((rowdata)=>{
    this.rowdata = rowdata;
    console.log(rowdata);
    
   

  // this.gridapi.setRowData(rowdata);
   
})
error => {  

}
}

private handleError(error: Response) {
return Observable.throw(error.statusText);
}

}
