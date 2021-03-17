import { Injectable } from '@angular/core';
import { User} from './user';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

//   constructor(private _http :HttpClient) { }
//   get(username: string): Observable<any> {

//     return this._http.get('/profiles/' + username)
//       .map((data: {profile: Profile}) => data.profile);
//   }
 }


// public loginUserFromRemote(user :User):Observable<any>{
//   return this._http.post<any>("",user)
//   }
//   public registerUserFromRemote(user :User):Observable<any>{
//     return this._http.post<any>("",user)
//     }
