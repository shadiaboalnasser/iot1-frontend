import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { UserApi } from '../../fw/users/user-api';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class UserService implements UserApi {

  isAuthenticated = false;

  constructor(private route: Router) { }

  signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
    console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
    this.isAuthenticated = true;
    return Observable.of({});
    // return Observable.of({}).delay(2000).flatMap(x => Observable.throw('Invalid User Name and/or Password'));
  }
  signOut(): Observable<any> {
    this.isAuthenticated = false;
    this.route.navigate(['/signin']);
    return Observable.of({});
  }
}
