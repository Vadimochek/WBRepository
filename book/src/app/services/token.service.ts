import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  public getTokensArray(url: string): Observable<{ data: string[] }>{
    return this.http.get<{data: string[]}>(url);
  }
}
