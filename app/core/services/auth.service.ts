import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '@shared/models';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}


  signIn(username: string, password: string): Observable<User> {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post<User>('/login', body.toString(), options);
  }

  logout(): void {
    this.http.get('/logout')
      .pipe(
        take(1)
      )
      .subscribe();
  }

  getUser(): User | null {
    const user  = localStorage.getItem('userData');
    if (!user) {
      return null;
    }
    return JSON.parse(user) as User;
  }
}
