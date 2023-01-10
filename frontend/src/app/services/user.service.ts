import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { ToastrService } from 'ngx-toastr/public_api';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { USER_LOGIN_URL } from '../shared/constants/urls';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { User } from '../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(new User());
  public userObservable: Observable<User>;


  constructor(private http:HttpClient /*, private toastrService:ToastrService*/) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin:IUserLogin):Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.userSubject.next(user); // on sucessful login
          /*
          this.toastrService.success(
            `Welcome to Astro Community! ${user.name}`,
            'Login Sucessful'
          )
          */
         alert("Hello You Logged");
        },
        error: (errorResponse) => { // on a login failure
          /*
          this.toastrService.error(errorResponse.error, 'Login Failed');
          */
          alert("Sorry! Logging failure! \n" + errorResponse);
        }
      })
    )
  }
}
