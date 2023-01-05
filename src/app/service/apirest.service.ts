import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })

  }

  apiURL = 'https://my-json-server.typicode.com/victorrosendo/repoUsuariosRamos';

  constructor(private http: HttpClient) { }


  //1
  getusuarios(): Observable<any> {
    return this.http.get(this.apiURL + '/users/').pipe(
      retry(3)
    );
  }

  getramos(): Observable<any> {
    return this.http.get(this.apiURL + '/ramos/').pipe(
      retry(3)
    );
  }
}