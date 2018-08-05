import { Component, OnInit } from '@angular/core';
import {  DemoService} from '../demoservice';
import {  Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template:`
  <div *ngIf="_router.url!='/search'">
  <form class="form-inline pull-right" style="margin-top:5px" (ngSubmit)="search()">
  <input class="form-control" [(ngModel)]="query" type="text" name="query" placeholder="search">
  <button type="Submit" class="btn btn-outline-succcess">Search</button>
  </form>
  </div>`
})
export class DashboardComponent {
  records= {};
  query:string;
  constructor(){
  }
}
