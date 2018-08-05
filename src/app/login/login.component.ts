import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //@Input('parentData') public name;
  //@Output() public childEvent = new EventEmitter();
 
  public hasError = true;
  public displayName="true";
  public messageClasses = {
    "text-success": this.hasError,
    "text-danger": !this.hasError,
    "text-special": this.hasError
  }
  fireEvent(){
    //this.childEvent.emit('Hey Code');
  }
  constructor(private _router: Router, private _activatedRoute:ActivatedRoute) { }
  btnClick(e):void {
    
    var username = e.target.elements[0].value;
    var password= e.target.elements[1].value;
    console.log(username,password);
    if(username=="admin" && password=="admin")
    {this._router.navigate(['room']);

    }
};
  ngOnInit() {
  }

}
