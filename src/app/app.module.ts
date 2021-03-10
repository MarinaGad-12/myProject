// import { FlexLayoutModule } from '@angular/flex-layout';
// import {  MatFormFieldModule} from '@angular/material/form-field';
// import {MatButtonModule} from '@angular/material/button';
// import {MatCardModule} from '@angular/material/card';
// import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
// import {HttpClientModule} from '@angular/common/http';
// import {HttpClient} from '@angular/common/http';
// import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    //LoginsuccessComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // FlexLayoutModule,
    // MatFormFieldModule,
    // MatButtonModule,
    // MatCardModule,
    // RouterModule,
    FormsModule,
    // HttpClientModule,
    // HttpClient,

    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
