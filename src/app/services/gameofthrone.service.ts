import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameofthroneService {

  thronesapi = 'https://thronesapi.com/api/v2/Characters';
  constructor(private http:HttpClient) { }


  getData(): Observable<any>{
    return this.http.get(this.thronesapi);
  }
}
