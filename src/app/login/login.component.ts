import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
//import { RegistrationService } from '../registration.service';
import { User } from '../user';
// import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
user = new User ();
msg ="";
//constructor(private _service:RegistrationService , private _router :Router){}
loginUser()
{
  // this._service.loginUserFromRemote(this.user).subscribe(
  //   data => { 
  //     console.log("response recieved");
  //     this._router.navigate(['./loginsuccess'])

  // },
  //   error => {
  //     console.log("exception occured"),
  //     this.msg="Bad credentials ,Please enter valid emailId and Password ";
  //   }
  // )


}
gotoregisration(){
  // this._router.navigate(['./registration']);
}
  
}