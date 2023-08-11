import { HttpClient, HttpResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private resourceUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.resourceUrl}`, { observe: 'response' });
  }
}
