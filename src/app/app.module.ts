import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RoomComponent } from "./room/room.component";
import { DemoService } from './demoservice';
import { DashboardComponent } from './dashboard/dashboard.component'

//import { MyDatePickerModule } from 'mydatepicker';
const routes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path : 'login', component : LoginComponent},
  { path : 'room' , component : RoomComponent },
  { path : 'dashboard' , component : DashboardComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RoomComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //BsDatepickerModule.forRoot(),
    RouterModule.forRoot(routes,{ enableTracing: true })
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
