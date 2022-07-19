import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReceivedData} from "../graphics/graphics.component";

@Injectable({
  providedIn: 'root'
})
export class GraphicService {

  constructor(private http: HttpClient) { }

  public get(url: string): Observable<ReceivedData>{
    return this.http.get<ReceivedData>(url);
  }
}
