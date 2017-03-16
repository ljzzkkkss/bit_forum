import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';



@Injectable()
export class HttpService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http : Http){};


  post(url: string, data : string) : Observable<any> {
    return this.http.post(url, data, {headers: this.headers})
      .map(res => res.json());
  }

}
