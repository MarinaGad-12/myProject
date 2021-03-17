import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {  Router } from '@angular/router';
//import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
user = new User ();
msg ="";
massage="You entered invalid field";

/// gender
gender =  ['Male', 'Female'];

// constructor(private _service:RegistrationService , private _router :Router){}

  ngOnInit(): void {
  }
  registerUser()
{
  // this._service.registerUserFromRemote(this.user).subscribe(
  //   data => { 
  //     console.log("response recieved");
  //     this.msg = "Registration Successful"

  // },
  //   error => {
  //     console.log("exception occured"),
  //     this.msg=error.error;
  //   }
  // )
  }

  //photo
  fd:FormData;
  done(image) {
    image.click();
  }
  // tslint:disable-next-line:typedef
  change(e, image2) {
    // tslint:disable-next-line:prefer-const
    let file = e.target.files[0];
    // tslint:disable-next-line:prefer-const
    let reader = new FileReader();
    // this.fd = new FormData();
    // this.fd.append('file', file, file.name);
    reader.readAsDataURL(file);
    reader.onload = readerEvent => {
      // tslint:disable-next-line:prefer-const
      let content = readerEvent.target.result;
      image2.src = content;
    };
  }
}
