import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'http://localhost:8090/api/values';

  constructor(private _http: HttpClient) { }

  getValues() {
    return this._http.get<string[]>(this.url);
  }
}
